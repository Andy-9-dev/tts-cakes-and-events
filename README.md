# TTS Cakes and Events - Website

A modern, production-ready website for TTS Cakes and Events, a Lagos-based cake, catering, and event planning business.

## Features

- **Modern Design**: Light, warm, premium aesthetic with cream backgrounds, white cards, charcoal text, and coral accents
- **Responsive**: Mobile-first design, optimized for all screen sizes (360px to 1280px+)
- **WhatsApp Integration**: Floating chat widget with quick-option messages and tap-to-call links
- **Gallery**: Interactive image gallery with category filtering (Cakes, Food, Small Chops, Events)
- **Video Gallery**: IntersectionObserver-based autoplay with max 2 simultaneous videos
- **Performance**: Optimized WebP images, lazy loading, and Next.js Image component
- **Accessibility**: WCAG AA compliant with proper contrast, semantic HTML, keyboard navigation, prefers-reduced-motion support
- **SEO**: Meta tags, Open Graph, and LocalBusiness schema with both phone numbers
- **Fully Static**: No backend, database, or API routes needed
- **Easy Content Management**: All content lives in one configuration file (`src/data/site.ts`)

## Tech Stack

- **Next.js 16+** with App Router and Turbopack
- **TypeScript** for type safety
- **Tailwind CSS** for styling (light warm palette)
- **Framer Motion** for smooth fade-in animations
- **Lucide React** for icons (no emoji)
- **Next.js Font** for optimized web fonts (Fraunces serif & DM Sans sans-serif)

## Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── src/
│   ├── app/
│   │   ├── layout.tsx        # Root layout with fonts, metadata, LocalBusiness schema
│   │   ├── page.tsx          # Main page (all 12 sections in order)
│   │   ├── globals.css       # Global styles, CSS variables, soft shadows
│   │   ├── icon.png          # Favicon (512x512)
│   │   └── apple-icon.png    # Apple touch icon (180x180)
│   ├── components/
│   │   ├── Header.tsx        # Sticky navigation with circular logo
│   │   ├── Hero.tsx          # Hero section with 4-image collage
│   │   ├── TrustStrip.tsx    # Trust indicators with lucide icons
│   │   ├── Services.tsx      # Services grid (4 items)
│   │   ├── ServiceCard.tsx   # Reusable service card component
│   │   ├── Gallery.tsx       # Gallery with category filter tabs
│   │   ├── Lightbox.tsx      # Image lightbox (keyboard nav, Esc to close)
│   │   ├── Videos.tsx        # Video grid with IntersectionObserver (max 2 playing)
│   │   ├── HowItWorks.tsx    # Process steps (4 steps)
│   │   ├── Testimonials.tsx  # Client testimonials (2 cards, exact wording)
│   │   ├── About.tsx         # About section with event image
│   │   ├── Contact.tsx       # Dark contact section with WhatsApp CTA
│   │   ├── WhatsAppWidget.tsx # Floating WhatsApp chat button
│   │   └── Footer.tsx        # Dark footer with circular logo and icons
│   └── data/
│       └── site.ts           # All editable content (phone numbers, testimonials, videos, etc.)
├── public/
│   ├── images/               # All .webp images (cake-, food-, smallchops-, event- prefixes)
│   └── videos/               # Video files (.mp4) and poster images (.jpg)
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind with light warm palette tokens
└── tsconfig.json             # TypeScript configuration
```

## Editing Content

**All business content is centralized in `src/data/site.ts`**. No need to modify components.

### Business Information

Edit the contact section with both phone numbers:

```typescript
export const siteConfig = {
  name: 'TTS Cakes and Events',
  tagline: 'Cakes, catering & celebrations done right',
  contact: {
    phoneNumbers: ['08023581524', '08148204980'], // Primary WhatsApp + backup
    whatsappNumber: '2348023581524', // International format without +
    location: 'Lordreign Plaza beside First Bank, Ayobo Road, Lagos',
  },
  social: {
    instagram: 'https://www.instagram.com/tts.kitchen.ng/',
  },
}
```

### WhatsApp Numbers

- The config file stores the WhatsApp number in international format (without +)
- Use the `getWhatsAppLink()` helper to generate links
- All WhatsApp CTAs across the site read from this single source

### Services

Edit the `services` array to add/remove/modify services:

```typescript
{
  id: 'cakes',
  title: 'Custom Cakes',
  description: 'Birthday cakes, wedding cakes...',
  image: 'cake-red-velvet-layers', // Image ID
  cta: 'Order a Cake',
  message: "Hi, I'd like to order a custom cake...",
}
```

### Gallery Images

Edit the `galleryItems` array. All images are `.webp` format with category prefixes:

```typescript
{
  id: 'cake-oreo-drip',
  src: '/images/cake-oreo-drip.webp',
  alt: 'Oreo drip cake with glossy chocolate coating',
  category: 'Cakes',
  categoryTag: 'Cakes',
}
```

**Image Categories (by filename prefix):**
- `cake-*` → "Cakes"
- `food-*` → "Food"
- `smallchops-*` → "Small Chops"
- `event-*` → "Events"

**Pending Images (approved: false):**
- cake-wafer-paper-pink-flowers
- pastry-meat-pies-rack
- smallchops-dough-balls-tray
- smallchops-puffpuff-spoon
- about-makeup-cake-owner

Add these to the array with `approved: false` when images are ready.

### Videos

Edit the `videoItems` array with `.mp4` video files and poster images:

```typescript
{
  id: 'video-cake-lilac-drip',
  src: '/videos/video-cake-lilac-drip.mp4',
  poster: '/videos/video-cake-lilac-drip.jpg',
}
```

**Features:**
- IntersectionObserver: Autoplay when 50% visible
- Max 2 videos playing simultaneously
- Muted, looped, preload="none"
- Fixed 9:16 aspect ratio
- Manual play button (especially for prefers-reduced-motion)

Current videos:
- video-cake-lilac-drip
- video-cake-blue-ruffle
- video-smallchops-boxes-bulk
- video-smallchops-trays

### Testimonials

Edit the `testimonials` array with exactly 2 quotes. Bracketed placeholders `[NAME + INITIAL]` and `[WHAT THEY ORDERED]` are hidden in render and marked as TODO:

```typescript
export const testimonials = [
  {
    id: 1,
    quote: 'Fine ma. It\'s very nice. We loved it. Thanks',
    name: '[FIRST NAME + INITIAL]', // TODO: Replace with actual customer name
    detail: '[WHAT THEY ORDERED]', // TODO: Replace with what customer ordered
  },
  {
    id: 2,
    quote: 'I will always return to you ma. Thank you so much!',
    name: '[FIRST NAME + INITIAL]', // TODO: Replace with actual customer name
    detail: '[WHAT THEY ORDERED]', // TODO: Replace with what customer ordered
  },
];
```

## Adding Real Images

Replace `.webp` images in `public/images/` with actual high-quality WebP files:

1. Prepare images in WebP format (recommended for best performance)
2. Place them in `public/images/` with category prefixes (cake-, food-, smallchops-, event-)
3. Update the `galleryItems` array in `src/data/site.ts` with image IDs

**Image Requirements:**
- Format: .webp (preferred), .jpg, .png, .svg supported
- Use descriptive filenames matching the category
- Optimize for web (WebP format recommended for 70%+ size reduction)
- Provide clear alt text descriptions

## Colors & Styling

The light, warm, premium palette is defined in `tailwind.config.ts` and `src/app/globals.css`:

**Color System:**
- **Background**: `#FBF6EE` (cream primary), `#FFFFFF` (white cards), `#FFF1EC` (blush alternate)
- **Text**: `#2A2320` (charcoal primary), `#6B605A` (muted secondary)
- **Accent**: `#E8493F` (coral decorative), `#C9372E` (coral-dark for buttons/links, AA contrast)
- **Gold**: `#F5B335` (small touches only, not body text)
- **Dark Sections**: `#1A1514` (contact, footer backgrounds)

## Fonts

- **Fraunces** (serif) - Headlines
- **DM Sans** (sans-serif) - Body text

Both loaded via `next/font/google` for optimal performance.

## Animations & Accessibility

**Animation Rules:**
- Only fade-in and smooth color transitions (no GSAP, canvas-confetti, or complex choreography)
- No `Math.random()` or `Date.now()` during render (causes hydration mismatches)
- Full `prefers-reduced-motion` support for accessibility
- Videos support manual play button fallback for users with motion preferences

**Accessibility Features:**
- WCAG AA compliant contrast ratios (charcoal on cream, coral-dark on white)
- Semantic HTML structure
- Keyboard navigation: Gallery lightbox (Esc, arrow keys), tab through all interactive elements
- Focus states on all buttons and links
- Alt text on all images
- Aria labels on icon buttons (lucide-react icons, no emoji)

## SEO

The site includes:
- Page title and meta description
- Open Graph tags for social sharing
- LocalBusiness JSON-LD schema with both phone numbers
- Semantic HTML structure
- Optimized WebP images with proper alt text
- Mobile-friendly responsive design

Edit SEO metadata in `siteConfig.seo` in `src/data/site.ts`.

**TODO:** Update domain in `layout.tsx` when available (currently uses placeholder comments).

## Accessibility

- WCAG AA compliant contrast ratios on light warm palette
- Semantic HTML structure (nav, main, section, footer)
- Keyboard navigation: Gallery arrows/Esc, tab through all interactive elements, tap-to-call links on mobile
- Focus states (visible outlines) on all buttons and links
- Alt text on all images (descriptive, not generic)
- Aria labels on icon buttons (lucide-react icons, no emoji in UI)
- Reduced motion support with manual video play fallback
- Skip-to-content link (optional, recommended to add)

## Performance

- WebP images with lazy loading via Next.js Image component (where applicable)
- Video preload="none" with IntersectionObserver triggers
- Font optimization with next/font (Fraunces + DM Sans preloaded)
- CSS variables for dynamic theming without recalculation
- Minimal JavaScript (Framer Motion for smooth animations only)
- Static generation (no server routes needed)

**Target Lighthouse Scores:**
- Performance: 90+ (smaller build, no bloat)
- Accessibility: 90+ (WCAG AA, semantic HTML, keyboard nav)
- Best Practices: 90+ (no deprecated APIs, proper image formats)
- SEO: 90+ (structured data, meta tags, mobile-friendly)

## Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Vercel automatically builds and deploys

No additional configuration needed—the site is fully static.

```bash
# Or deploy via CLI:
npm install -g vercel
vercel
```

### Other Hosting

The project builds to static HTML/CSS/JS:

```bash
npm run build
# Output: .next/static/
```

Deploy the `.next` folder to any static host.

## Customization

### Add New Sections

1. Create a new component in `src/components/` (e.g., `NewSection.tsx`)
2. Import it in `src/app/page.tsx`
3. Add it to the page layout in the correct order
4. Use the light theme colors from Tailwind tokens (bg-bg-cream, text-text-charcoal, accent-coral, etc.)

### Update Theme Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  bg: {
    cream: '#FBF6EE',      // Change to your color
    white: '#FFFFFF',
    blush: '#FFF1EC',
  },
  text: {
    charcoal: '#2A2320',   // Change to your color
    muted: '#6B605A',
  },
  accent: {
    coral: '#E8493F',      // Change to your color
    'coral-dark': '#C9372E',
  },
}
```

Then rebuild: `npm run build`

### Change Fonts

Fonts are loaded in `src/app/layout.tsx`. Replace with any Google Font:

```typescript
import { YourFont, AnotherFont } from 'next/font/google'

const yourFont = YourFont({
  subsets: ['latin'],
  variable: '--font-heading',
})
```

### Add More Services

Edit `src/data/site.ts`:

```typescript
{
  id: 'new-service',
  title: 'New Service',
  description: 'Description...',
  image: 'image-id',
  message: 'WhatsApp message...',
}
```

### Add More Videos

Edit `src/data/site.ts` `videoItems` array:

```typescript
{
  id: 'video-new-cake',
  src: '/videos/video-new-cake.mp4',
  poster: '/videos/video-new-cake.jpg',
}
```

Ensure MP4 and JPG poster are in `public/videos/`.

### Update WhatsApp Links

All WhatsApp links use the config in `src/data/site.ts`. Just update the phone numbers there and all links automatically update.

## WhatsApp Message Examples

Current quick options in the widget:

1. **Order a cake**: "Hi, I'd like to order a custom cake. My event date is..."
2. **Order food/catering**: "Hi, I'd like to order food for my event. I'm interested in..."
3. **Small chops**: "Hi, I'd like to order small chops for my event. I need..."
4. **Plan an event**: "Hi, I need help planning and decorating my event. The date is..."
5. **Ask a question**: "Hi! I have a question about your services..."

Edit these in `src/components/WhatsAppWidget.tsx`.

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Images**: Replace SVG placeholders with optimized WebP files
2. **Analytics**: Consider adding Google Analytics via `next/script`
3. **Sitemap**: Generate with `next-sitemap` package if needed
4. **Robots.txt**: Create `public/robots.txt` for SEO

## Troubleshooting

### Images not showing

- Check `public/images/` directory exists
- Verify image names match in `src/data/site.ts`
- Check browser console for 404 errors

### WhatsApp links not opening

- Ensure phone number format is correct: `2348023581524` (international, no +)
- Messages must be URL-encoded
- Test on mobile or use WhatsApp web

### Styles not applying

- Clear Next.js cache: `rm -rf .next`
- Restart dev server
- Check Tailwind config is correct

## License

MIT

## Support

For questions about the site or deployment, contact TTS Cakes and Events.

---

**Built with ❤️ using Next.js, Tailwind CSS, and Framer Motion**
#   t t s - c a k e s - a n d - e v e n t s 
 
 