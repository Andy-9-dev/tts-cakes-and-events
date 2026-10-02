# Quick Start Guide - TTS Cakes and Events Website

Get your website running in 5 minutes.

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

- Business name, phone, WhatsApp number
- Services and descriptions
- Gallery images and categories
- Testimonials
- Social media links

### Example: Update Phone Number

```typescript
// src/data/site.ts, line ~21
contact: {
  phoneNumbers: ['YOUR_PHONE_HERE', '08123456789'],
  whatsappNumber: '234YOUR_NUMBER', // International format, no +
  // ... rest of config
}
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
    cta: 'Order Now',
    message: "Hi, I'd like to order...",
  },
  // ... more services
]
```

### Example: Add a Testimonial

```typescript
// src/data/site.ts, line ~225
export const testimonials = [
  {
    id: 1,
    name: 'Customer Name',
    title: 'Customer Title',
    message: "What the customer said about your business",
    rating: 5,
  },
  // ... more testimonials
]
```

### Example: Replace Images

1. Replace SVG placeholders in `public/images/` with real images (WebP format recommended)
2. Update image references in `src/data/site.ts` if filenames change

```typescript
{
  id: 'cake-oreo-drip',
  src: '/images/cake-oreo-drip.webp', // Change .svg to .webp
  alt: 'Oreo drip cake with glossy chocolate coating',
  category: 'Cakes',
  categoryTag: 'Cakes',
}
```

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
  accent: {
    coral: '#E8493F',   // Change this
    gold: '#F5B335',    // Or this
  },
}
```

Then rebuild: `npm run build`

### Change Font

Fonts are loaded in `src/app/layout.tsx`:

```typescript
import { Fraunces, DM_Sans } from 'next/font/google'

// Change to different fonts from Google Fonts
```

### Add a New Section

1. Create new component in `src/components/`
2. Import it in `src/app/page.tsx`
3. Add it to the JSX

```typescript
// src/app/page.tsx
import NewSection from '@/components/NewSection'

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <NewSection />  {/* ← Add here */}
      <Footer />
    </main>
  )
}
```

### Fix Broken Links

All WhatsApp links use the config in `src/data/site.ts`. Just update the phone number there and all links automatically update.

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
