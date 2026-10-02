# Deployment Guide - TTS Cakes and Events

This site is fully static and can be deployed to any hosting service that supports Next.js or static content.

## Vercel Deployment (Recommended)

Vercel is the official platform for Next.js and makes deployment effortless.

### Option 1: Via Git (Recommended)

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: TTS Cakes website"
   git branch -M main
   git remote add origin https://github.com/yourusername/tts-cakes.git
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "New Project"
   - Import your GitHub repository
   - Click "Deploy"
   - Done! Your site is live

### Option 2: Via Vercel CLI

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Follow prompts and confirm deployment**

### Option 3: Direct Git Push (Using Vercel Git Integration)

Once connected to Vercel, every push to `main` automatically deploys.

## Other Hosting Platforms

### Netlify

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Deploy using Netlify CLI**
   ```bash
   npm install -g netlify-cli
   netlify deploy --prod --dir=.next/standalone
   ```

Or drag the `.next` folder to Netlify's web interface.

### AWS S3 + CloudFront

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Upload `.next` to S3**
   ```bash
   aws s3 sync .next/ s3://your-bucket-name/
   ```

3. **Create CloudFront distribution pointing to S3**

### GitHub Pages

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Push `.next` to `gh-pages` branch**
   ```bash
   npx gh-pages -d .next
   ```

### Self-Hosted / VPS

1. **Build the site**
   ```bash
   npm run build
   ```

2. **Copy `.next` folder to your server**
   ```bash
   scp -r .next/ user@your-server.com:/var/www/tts-cakes/
   ```

3. **Install Node.js and dependencies on server**
   ```bash
   cd /var/www/tts-cakes
   npm install --production
   npm start
   ```

4. **Set up reverse proxy (Nginx)**
   ```nginx
   server {
       listen 80;
       server_name your-domain.com;
   
       location / {
           proxy_pass http://localhost:3000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```

## Environment Variables

No environment variables are required for this static site. All configuration is in `src/data/site.ts`.

### Optional: Analytics (Google Analytics)

To add Google Analytics, create `.env.local`:

```
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXXXXX
```

Then add to `src/app/layout.tsx`:

```typescript
import Script from 'next/script'

export default function RootLayout({ children }) {
  return (
    <html>
      <head>
        <Script
          strategy="afterInteractive"
          src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
        />
        <Script
          id="google-analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
```

## Custom Domain

### With Vercel

1. Go to Project Settings → Domains
2. Add your custom domain
3. Update DNS records at your registrar to point to Vercel

### With Other Providers

Follow their documentation to add DNS records pointing to your hosting service.

## SSL Certificate

- **Vercel**: Automatic HTTPS (Let's Encrypt)
- **Netlify**: Automatic HTTPS (Let's Encrypt)
- **Other providers**: Use Let's Encrypt (free) or purchase a certificate

## Performance Optimization

The site is already optimized, but you can further improve it:

### 1. Enable Caching Headers

**Vercel** (automatic):
- Static assets cached for 365 days
- Pages cached for 60 seconds

**Other hosts**: Set cache headers in your web server config

### 2. Monitor with Lighthouse

```bash
npm install -g lighthouse
lighthouse https://your-domain.com --view
```

Target scores: 90+ for Performance, Accessibility, Best Practices, and SEO

### 3. Use WebP Images

Replace SVG placeholders with actual WebP images for better performance.

## Monitoring

### Uptime Monitoring

Use services like:
- UptimeRobot (free tier available)
- Pingdom
- StatusCake

### Error Tracking (Optional)

Add Sentry for error monitoring:

1. Install Sentry
   ```bash
   npm install @sentry/nextjs
   ```

2. Create `.env.local`:
   ```
   NEXT_PUBLIC_SENTRY_DSN=your_sentry_dsn
   ```

3. Configure in `src/app/layout.tsx`

## Rollback

### With Git

If you need to revert:

```bash
git revert <commit-hash>
git push
```

Vercel will automatically redeploy the previous version.

### Manual Rollback

Keep backups of previous `.next` builds and reupload if needed.

## Security Checklist

- [ ] HTTPS enabled
- [ ] Security headers set (CSP, X-Frame-Options, etc.)
- [ ] No sensitive data in `src/data/site.ts`
- [ ] Images optimized for web
- [ ] No hardcoded secrets in code
- [ ] Regular backups of content

## Maintenance

### Weekly

- Check for broken links (use dead link checker)
- Review analytics

### Monthly

- Check for Next.js updates: `npm outdated`
- Review performance metrics

### Quarterly

- Update dependencies: `npm update`
- Review security advisories: `npm audit`

## Troubleshooting

### Build Fails

```bash
# Clear cache and rebuild
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

### Images Not Loading

- Check `public/images/` directory exists
- Verify image names match `src/data/site.ts`
- Check browser console for 404 errors
- Ensure WebP/SVG format is supported by hosting

### WhatsApp Links Not Opening

- Verify phone number format: `2348023581524` (international, no +)
- Test on mobile or WhatsApp web
- Check URL encoding in messages

### Slow Performance

- Use WebP format for images instead of SVG
- Minimize animations with `prefers-reduced-motion`
- Enable gzip compression on server
- Use CDN for static assets

## Support

For issues or questions:

1. Check the README.md
2. Review Next.js documentation: https://nextjs.org/docs
3. Check Tailwind CSS docs: https://tailwindcss.com/docs
4. Review Framer Motion docs: https://www.framer.com/motion/

---

**Happy deploying! 🚀**
