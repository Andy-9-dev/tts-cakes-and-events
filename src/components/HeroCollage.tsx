import Image from 'next/image'
import { galleryItems } from '@/data/site'

const LEFT_IDS = [
  'event-wedding-cake-three-tier',
  'cake-oreo-drip',
  'cake-birthday-blue-ruffle',
  'cake-wedding-white-purple-roses',
]
const RIGHT_IDS = [
  'food-jollof-chicken-plantain',
  'smallchops-boxed-bulk-order',
  'food-meat-skewers',
  'smallchops-platter-mixed',
]

function pick(ids: string[]) {
  return ids
    .map((id) => galleryItems.find((i) => i.id === id))
    .filter((i): i is NonNullable<typeof i> => Boolean(i))
}

function Column({ ids, direction }: { ids: string[]; direction: 'up' | 'down' }) {
  const tiles = pick(ids)
  const anim = direction === 'up' ? 'animate-marquee-up' : 'animate-marquee-down'
  return (
    <div className={`${anim} flex flex-col will-change-transform`}>
      {[0, 1].map((copy) => (
        <div key={copy} className="flex flex-col gap-3 pb-3 sm:gap-4 sm:pb-4" aria-hidden={copy === 1}>
          {tiles.map((item, i) => (
            <div key={`${copy}-${item.id}`} className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-soft">
              <Image
                src={item.src}
                alt={copy === 0 ? item.alt : ''}
                fill
                sizes="(max-width: 1024px) 45vw, 22vw"
                className="object-cover"
                priority={copy === 0 && i < 2}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default function HeroCollage() {
  const mask = 'linear-gradient(to bottom, transparent, black 12%, black 88%, transparent)'
  return (
    <div
      className="marquee grid h-[380px] grid-cols-2 gap-3 overflow-hidden rounded-3xl sm:h-[460px] sm:gap-4 lg:h-[560px]"
      style={{ WebkitMaskImage: mask, maskImage: mask }}
    >
      <Column ids={LEFT_IDS} direction="up" />
      <Column ids={RIGHT_IDS} direction="down" />
    </div>
  )
}