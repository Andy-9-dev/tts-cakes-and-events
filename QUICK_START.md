# Quick Start Guide - TTS Cakes and Events Website

Get your light, warm, premium website running in 5 minutes.

## 1. Installation (1 minute)

```bash
npm install
```

## 2. Start Development Server (30 seconds)

```bash
npm run dev
```

Visit **http://localhost:3000** in your browser. Your site is live! 🎉

## 3. Edit Content (2 minutes)

All business information is in **`src/data/site.ts`**:

- Business name, phone numbers (2x), WhatsApp number
- Services (4 items with images)
- Gallery images (16+ items with categories)
- Testimonials (exactly 2 quotes)
- Videos (4 videos with autoplay)
- Social media links

### Example: Update Phone Numbers

```typescript
// src/data/site.ts, line ~21
contact: {
  phoneNumbers: ['08023581524', '08148204980'], // Primary + backup
  whatsappNumber: '2348023581524', // International format, no +
  // ... rest of config
}
```

### Example: Edit Testimonials

```typescript
// src/data/site.ts, line ~190
export const testimonials = [
  {
    id: 1,
    quote: 'Fine ma. It\'s very nice. We loved it. Thanks',
    name: '[FIRST NAME + INITIAL]', // TODO: Replace with real name
    detail: '[WHAT THEY ORDERED]',   // TODO: Replace with order details
  },
  {
    id: 2,
    quote: 'I will always return to you ma. Thank you so much!',
    name: '[FIRST NAME + INITIAL]', // TODO: Replace with real name
    detail: '[WHAT THEY ORDERED]',   // TODO: Replace with order details
  },
];
```

### Example: Add a New Service

```typescript
// src/data/site.ts, line ~65
export const services = [
  {
    id: 'custom-service',
    title: 'Your Service Name',
    description: 'Description of your service',
    image: 'service-image-id', // Must match image in galleryItems
    message: "Hi, I'd like to order...",
  },
  // ... more services
]
```

### Example: Replace Images

1. Replace .webp files in `public/images/` with real images
2. Use category prefixes: `cake-*`, `food-*`, `smallchops-*`, `event-*`
3. Recommended format: WebP (best performance)

```typescript
{
  id: 'cake-oreo-drip',
  src: '/images/cake-oreo-drip.webp',
  alt: 'Oreo drip cake with glossy chocolate coating',
  category: 'Cakes',
  categoryTag: 'Cakes',
}
```

### Example: Add Videos

```typescript
// src/data/site.ts, line ~240
export const videoItems = [
  {
    id: 'video-new-cake',
    src: '/videos/video-new-cake.mp4',
    poster: '/videos/video-new-cake.jpg',
  },
  // ... more videos
];
```

Features:
- IntersectionObserver: Auto-plays when 50% visible
- Max 2 videos playing simultaneously
- Manual play button for accessibility
- Full prefers-reduced-motion support

## 4. Build for Production (2 minutes)

```bash
npm run build
npm start
```

Your production build is ready! Visit http://localhost:3000

## 5. Deploy to Vercel (1 click)

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Click "New Project" → Select your repository → Click "Deploy"

✨ Your site is live!

---

## Color Palette (Light, Warm, Premium)

**Light Theme Tokens** (defined in `tailwind.config.ts`):

- **Background**: Cream `#FBF6EE` (primary), White `#FFFFFF` (cards), Blush `#FFF1EC` (alternates)
- **Text**: Charcoal `#2A2320` (primary), Muted `#6B605A` (secondary)
- **Accent**: Coral `#E8493F` (decorative), Coral-Dark `#C9372E` (buttons, AA contrast)
- **Gold**: `#F5B335` (small touches only)
- **Dark Sections**: `#1A1514` (contact, footer backgrounds)

---

## File Structure Quick Reference

```
src/
├── app/
│   ├── page.tsx          ← Main page (imports components)
│   ├── layout.tsx        ← Head, fonts, metadata
│   └── globals.css       ← Global styles
├── components/           ← All UI components
│   ├── Header.tsx        ← Navigation
│   ├── Hero.tsx          ← Hero section
│   ├── Services.tsx      ← Services section
│   ├── Gallery.tsx       ← Image gallery
│   ├── WhatsAppWidget.tsx ← Floating chat button
│   └── ... more components
└── data/
    └── site.ts           ← ✨ EDIT THIS FILE ✨
public/
└── images/               ← Place real images here (.webp recommended)
```

## Common Tasks

### Change Colors

Edit `tailwind.config.ts`:

```typescript
colors: {
  bg: {
    cream: '#FBF6EE',      // Your color
    white: '#FFFFFF',
    blush: '#FFF1EC',
  },
  accent: {
    coral: '#E8493F',      // Your color
    'coral-dark': '#C9372E',
  },
}
```

Then rebuild: `npm run build`

### Change Fonts

Fonts are loaded in `src/app/layout.tsx`. Use any Google Font:

```typescript
import { NewFont } from 'next/font/google'

const newFont = NewFont({
  subsets: ['latin'],
  variable: '--font-heading',
})
```

### Add a New Section

1. Create new component in `src/components/` (e.g., `NewSection.tsx`)
2. Import it in `src/app/page.tsx`
3. Add it to the JSX

```typescript
// src/app/page.tsx
import NewSection from '@/components/NewSection'

export default function Home() {
  return (
    <main className="bg-bg-cream min-h-screen">
      <Header />
      <Hero />
      <NewSection />  {/* ← Add here */}
      <Footer />
    </main>
  )
}
```

### Fix WhatsApp Links

All WhatsApp links use the config in `src/data/site.ts`. Just update:
- `phoneNumbers` array (2 phone numbers)
- `whatsappNumber` in international format (234XXXXXXXXXX)

All links automatically update.

## Troubleshooting

### Dev server won't start?

```bash
# Kill any process on port 3000
lsof -ti :3000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :3000    # Windows

# Try again
npm run dev
```

### Images not showing?

1. Check `public/images/` folder exists
2. Verify image names in `src/data/site.ts`
3. Check browser console (F12) for 404 errors

### WhatsApp links not working?

Verify phone number format:
- ✅ Correct: `2348023581524` (international, no +)
- ❌ Wrong: `+2348023581524` or `08023581524`

## Next Steps

- [ ] Edit `src/data/site.ts` with your info
- [ ] Replace SVG images with real photos (WebP format)
- [ ] Test on mobile (http://localhost:3000 on phone)
- [ ] Run `npm run build` to test production build
- [ ] Deploy to Vercel or your hosting

---

**Questions?** Check the full README.md or DEPLOYMENT.md

**Happy building! 🎂**
