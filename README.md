# TTS Cakes and Events - Website

A modern, production-ready website for TTS Cakes and Events, a Lagos-based cake, catering, and event planning business.

## Features

- **Modern Design**: Dark theme with coral red and golden yellow accents
- **Responsive**: Mobile-first design, optimized for all screen sizes
- **WhatsApp Integration**: Floating chat widget with quick-option messages
- **Gallery**: Interactive image gallery with lightbox and category filtering
- **Performance**: Optimized images with Next.js Image component
- **Accessibility**: WCAG AA compliant with proper contrast and semantic HTML
- **SEO**: Meta tags, Open Graph, and LocalBusiness schema
- **Fully Static**: No backend, database, or API routes needed
- **Easy Content Management**: All content lives in one configuration file

## Tech Stack

- **Next.js 15+** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **Lucide React** for icons
- **Next.js Font** for optimized web fonts (Fraunces & DM Sans)

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
│   │   ├── layout.tsx        # Root layout with fonts and metadata
│   │   ├── page.tsx          # Main page (all sections)
│   │   └── globals.css       # Global styles and CSS variables
│   ├── components/
│   │   ├── Header.tsx        # Sticky navigation header
│   │   ├── Hero.tsx          # Hero section with CTA
│   │   ├── Services.tsx      # Services section
│   │   ├── ServiceCard.tsx   # Reusable service card
│   │   ├── Gallery.tsx       # Gallery with category filtering
│   │   ├── Lightbox.tsx      # Image lightbox with keyboard nav
│   │   ├── HowItWorks.tsx    # Process steps
│   │   ├── Testimonials.tsx  # Client testimonials
│   │   ├── About.tsx         # About the business
│   │   ├── Contact.tsx       # Contact section with CTA
│   │   ├── WhatsAppWidget.tsx # Floating WhatsApp chat
│   │   └── Footer.tsx        # Footer with links
│   └── data/
│       └── site.ts           # All editable content
├── public/
│   └── images/               # All images (SVG placeholders provided)
├── next.config.js            # Next.js configuration
├── tailwind.config.ts        # Tailwind CSS configuration
└── tsconfig.json             # TypeScript configuration
```

## Editing Content

**All business content is centralized in `src/data/site.ts`**. No need to modify components.

### Business Information

```typescript
export const siteConfig = {
  name: 'TTS Cakes and Events',
  tagline: 'Cakes, Catering & Events Done Right',
  contact: {
    phoneNumbers: ['08023581524', '08123456789'],
    whatsappNumber: '2348023581524', // International format
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

Edit the `galleryItems` array:

```typescript
{
  id: 'cake-oreo-drip',
  src: '/images/cake-oreo-drip.svg', // or .webp
  alt: 'Oreo drip cake with glossy chocolate coating',
  category: 'Cakes',
  categoryTag: 'Cakes',
}
```

**Categories are detected from image filename prefixes:**
- `cake-*` → "Cakes"
- `food-*` → "Food"
- `smallchops-*` → "Small Chops"

### Testimonials

Edit the `testimonials` array:

```typescript
{
  id: 1,
  name: 'Chioma O.',
  title: 'Birthday Party Host',
  message: 'TTS delivered the most beautiful...',
  rating: 5,
}
```

## Adding Real Images

Replace placeholder SVGs in `public/images/` with actual `.webp` files:

1. Prepare images as WebP format (recommended for performance)
2. Place them in `public/images/`
3. Update the `src` path in `galleryItems` if needed
4. Images support multiple formats (.webp, .jpg, .png, .svg)

**Image Requirements:**
- Use descriptive filenames matching the category (e.g., `cake-chocolate-ganache.webp`)
- Optimize for web (WebP format recommended)
- Provide alt text in the config

## Colors & Styling

Colors are defined as CSS variables and Tailwind config in `tailwind.config.ts`:

- **Background**: `#0F0F0F` (primary), `#1A1A1A` (surface)
- **Accent**: `#E8493F` (coral red), `#F5B335` (golden yellow)
- **Text**: `#F7F2EA` (primary), `#B8B2A7` (muted)

Modify `tailwind.config.ts` to customize colors globally.

## Fonts

- **Fraunces** (serif) - Headlines
- **DM Sans** (sans-serif) - Body text

Both loaded via `next/font/google` for optimal performance.

## Animations

Animations use Framer Motion with `prefers-reduced-motion` support for accessibility.

## SEO

The site includes:
- Page title and meta description
- Open Graph tags for social sharing
- LocalBusiness JSON-LD schema
- Semantic HTML
- Optimized images

Edit SEO metadata in `siteConfig.seo` in `src/data/site.ts`.

## Accessibility

- WCAG AA compliant contrast ratios
- Semantic HTML structure
- Keyboard navigation for lightbox (Esc, arrow keys)
- Focus states on all interactive elements
- Alt text on all images
- Reduced motion support

## Performance

- Images optimized with Next.js Image component
- Lazy loading on gallery images
- Font optimization with next/font
- CSS variables for theme colors
- Minimal JavaScript

**Target Lighthouse Scores:**
- Performance: 90+
- Accessibility: 90+
- Best Practices: 90+
- SEO: 90+

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

1. Create a component in `src/components/`
2. Import it in `src/app/page.tsx`
3. Add it to the layout

### Update Theme Colors

Edit `tailwind.config.ts` and `src/app/globals.css`:

```typescript
colors: {
  accent: {
    coral: '#YOUR_COLOR',
    gold: '#YOUR_COLOR',
  },
}
```

### Add More Services

Edit `src/data/site.ts`:

```typescript
{
  id: 'new-service',
  title: 'New Service',
  description: 'Description...',
  image: 'image-id',
  cta: 'CTA Text',
  message: 'WhatsApp message...',
}
```

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
#   t t s - c a k e s - a n d - e v e n t s  
 