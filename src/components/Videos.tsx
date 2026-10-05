'use client'

import { useEffect, useRef, useState } from 'react'
import { motion } from 'framer-motion'
import { Play } from 'lucide-react'
import { videoItems } from '@/data/site'

type VideoItem = (typeof videoItems)[number]

function VideoCard({ item, reducedMotion }: { item: VideoItem; reducedMotion: boolean }) {
  const ref = useRef<HTMLVideoElement>(null)
  const [playing, setPlaying] = useState(false)

  const play = () => {
    const v = ref.current
    if (!v) return
    v.muted = true
    v.defaultMuted = true
    // swallow AbortError / NotAllowedError; the Play button covers blocked autoplay
    v.play().catch(() => {})
  }

  const pause = () => {
    ref.current?.pause()
  }

  useEffect(() => {
    const v = ref.current
    if (!v) return
    v.muted = true
    v.defaultMuted = true
    if (reducedMotion) return

    const io = new IntersectionObserver(
      ([entry]) => (entry.isIntersecting ? play() : pause()),
      { threshold: 0.25 }
    )
    io.observe(v)
    return () => {
      io.disconnect()
      v.pause()
    }
  }, [reducedMotion])

  return (
    <div
      className="relative flex-shrink-0 w-[70vw] snap-start overflow-hidden rounded-2xl bg-bg-blush md:w-auto md:max-h-[80svh]"
      style={{ aspectRatio: '9 / 16' }}
    >
      <video
        ref={ref}
        muted
        loop
        playsInline
        preload="metadata"
        poster={item.poster}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        onClick={() => (playing ? pause() : play())}
        className="h-full w-full object-cover"
      >
        <source src={item.src} type="video/mp4" />
      </video>

      {!playing && (
        <button
          onClick={play}
          aria-label="Play video"
          className="absolute inset-0 flex items-center justify-center bg-black/20 transition-colors hover:bg-black/30"
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-accent-coral text-white shadow-soft-md">
            <Play size={24} fill="currentColor" />
          </span>
        </button>
      )}
    </div>
  )
}

export default function Videos() {
  const [reducedMotion, setReducedMotion] = useState(false)

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    setReducedMotion(mq.matches)
    const onChange = (e: MediaQueryListEvent) => setReducedMotion(e.matches)
    mq.addEventListener('change', onChange)
    return () => mq.removeEventListener('change', onChange)
  }, [])

  return (
    <section className="bg-bg-white py-12 md:py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8 md:mb-12 lg:mb-16"
        >
          <h2 className="font-heading font-bold text-3xl sm:text-4xl md:text-5xl text-text-charcoal mb-3 md:mb-4">
            From our kitchen
          </h2>
          <p className="text-text-muted text-sm md:text-lg lg:text-xl">
            Behind the scenes of our creations
          </p>
        </motion.div>

        {/* One set of videos: scroll-snap strip on mobile, grid from md up */}
        <div className="-mx-4 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-2 scrollbar-hide md:mx-0 md:grid md:grid-cols-2 md:gap-6 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
          {videoItems.map((item) => (
            <VideoCard key={item.id} item={item} reducedMotion={reducedMotion} />
          ))}
        </div>
      </div>
    </section>
  )
}