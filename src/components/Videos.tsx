'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { videoItems } from '@/data/site'

interface VideoRefMap {
  [key: string]: HTMLVideoElement | null
}

interface PlayPromiseMap {
  [key: string]: Promise<void> | null
}

interface AutoplayBlockedMap {
  [key: string]: boolean
}

export default function Videos() {
  const [activeVideos, setActiveVideos] = useState<Set<string>>(new Set())
  const [autoplayBlocked, setAutoplayBlocked] = useState<AutoplayBlockedMap>({})
  const videoRefs = useRef<VideoRefMap>({})
  const playPromisesRef = useRef<PlayPromiseMap>({})
  const observerRefs = useRef<{ [key: string]: IntersectionObserver }>({})
  const observerTimeoutRef = useRef<{ [key: string]: NodeJS.Timeout }>({})
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false)

  // Setup video element: ensure muted is set on DOM level
  const setupVideo = (videoId: string) => {
    const video = videoRefs.current[videoId]
    if (!video) return

    video.muted = true
    video.defaultMuted = true
  }

  // Safe play helper: handles rejected promises and autoplay blocking
  const safePlay = (videoId: string) => {
    const video = videoRefs.current[videoId]
    if (!video || !video.paused) return

    setupVideo(videoId)

    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromisesRef.current[videoId] = playPromise
      playPromise
        .then(() => {
          // Play succeeded, clear autoplay blocked flag
          setAutoplayBlocked((prev) => ({ ...prev, [videoId]: false }))
        })
        .catch((error: DOMException) => {
          // Check if autoplay was blocked by browser
          if (error.name === 'NotAllowedError') {
            setAutoplayBlocked((prev) => ({ ...prev, [videoId]: true }))
          }
          // Silently handle other errors (AbortError, etc.)
        })
    }
  }

  // Safe pause helper: waits for pending play promise before pausing
  const safePause = (videoId: string) => {
    const video = videoRefs.current[videoId]
    if (!video) return

    const pendingPlayPromise = playPromisesRef.current[videoId]
    if (pendingPlayPromise) {
      pendingPlayPromise
        .then(() => {
          if (!video.paused) {
            video.pause()
          }
        })
        .catch(() => {
          // Play was rejected, pause anyway
          if (!video.paused) {
            video.pause()
          }
        })
    } else {
      if (!video.paused) {
        video.pause()
      }
    }
    playPromisesRef.current[videoId] = null
  }

  // Check for prefers-reduced-motion on mount
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)')
    setPrefersReducedMotion(mediaQuery.matches)

    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches)
    }

    mediaQuery.addEventListener('change', handleChange)
    return () => mediaQuery.removeEventListener('change', handleChange)
  }, [])

  // Initialize video refs and setup videos on mount
  useEffect(() => {
    videoItems.forEach((item) => {
      setupVideo(item.id)
    })
  }, [])

  // Setup IntersectionObserver for autoplay with debounce
  useEffect(() => {
    if (prefersReducedMotion) return

    videoItems.forEach((item) => {
      const video = videoRefs.current[item.id]
      if (!video) return

      const observer = new IntersectionObserver(
        ([entry]) => {
          // Clear existing timeout to debounce rapid scroll events
          if (observerTimeoutRef.current[item.id]) {
            clearTimeout(observerTimeoutRef.current[item.id])
          }

          // Debounce by 150ms to prevent thrashing on fast scroll
          observerTimeoutRef.current[item.id] = setTimeout(() => {
            const currentActive = activeVideos.size
            if (entry.isIntersecting) {
              if (currentActive < 2) {
                safePlay(item.id)
                setActiveVideos((prev) => new Set(prev).add(item.id))
              }
            } else {
              safePause(item.id)
              setActiveVideos((prev) => {
                const next = new Set(prev)
                next.delete(item.id)
                return next
              })
            }
          }, 150)
        },
        { threshold: 0.5 }
      )

      observer.observe(video)
      observerRefs.current[item.id] = observer
    })

    return () => {
      // Cleanup: disconnect observers and pause all videos
      Object.entries(observerRefs.current).forEach(([id, obs]) => {
        if (obs) {
          obs.disconnect()
        }
        if (observerTimeoutRef.current[id]) {
          clearTimeout(observerTimeoutRef.current[id])
        }
        safePause(id)
      })
      observerRefs.current = {}
      observerTimeoutRef.current = {}
    }
  }, [prefersReducedMotion, activeVideos.size])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.05 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  const handlePlayClick = (videoId: string) => {
    const video = videoRefs.current[videoId]
    if (!video) return

    if (video.paused) {
      setupVideo(videoId)
      safePlay(videoId)
      setActiveVideos((prev) => new Set(prev).add(videoId))
      // Clear autoplay blocked flag on manual play
      setAutoplayBlocked((prev) => ({ ...prev, [videoId]: false }))
    } else {
      safePause(videoId)
      setActiveVideos((prev) => {
        const next = new Set(prev)
        next.delete(videoId)
        return next
      })
    }
  }

  return (
    <section className="bg-bg-white py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-text-charcoal mb-4">
            From our kitchen
          </h2>
          <p className="text-text-muted text-lg md:text-xl">
            Behind the scenes of our creations
          </p>
        </motion.div>

        {/* Videos Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6"
        >
          {videoItems.map((item) => (
            <motion.div
              key={item.id}
              variants={itemVariants}
              className="relative rounded-2xl overflow-hidden bg-bg-blush group"
              style={{ aspectRatio: '9 / 16' }}
            >
              <video
                ref={(el) => {
                  if (el) videoRefs.current[item.id] = el
                }}
                muted
                loop
                playsInline
                preload="metadata"
                poster={item.poster}
                className="w-full h-full object-cover"
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support HTML5 video.
              </video>

              {/* Play button: show if reduced motion, not playing, or autoplay blocked */}
              {(prefersReducedMotion || !activeVideos.has(item.id) || autoplayBlocked[item.id]) && (
                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                  <button
                    onClick={() => handlePlayClick(item.id)}
                    className="w-14 h-14 rounded-full bg-accent-coral hover:bg-accent-coral-dark text-white flex items-center justify-center transition-colors shadow-soft-md"
                    aria-label="Play video"
                  >
                    <Play size={24} fill="currentColor" />
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
