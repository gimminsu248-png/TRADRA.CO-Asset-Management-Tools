# New Project Structure (Next.js App Router)

```text
/
├── public/
│   ├── robots.txt           # SEO: Allow all bots
│   ├── sitemap.xml          # SEO: Dynamic sitemap
│   └── images/              # Assets (WebP format)
├── src/
│   ├── app/
│   │   ├── layout.tsx       # Root Layout (Google Analytics, AdSense Script, Global SEO)
│   │   ├── page.tsx         # Main Landing Page (Tool + High CPC Article)
│   │   ├── globals.css      # Design System (Deep Blue & Bright Orange)
│   │   └── categories/      # Category-based routing (Stock, Crypto, etc.)
│   ├── components/
│   │   ├── layout/          # Header, Footer (E-E-A-T)
│   │   ├── calculator/      # Calculator Engines & UI
│   │   ├── ads/             # Smart Ad & Affiliate slots
│   │   └── common/          # Reusable UI components
│   ├── lib/
│   │   ├── calculations/    # Extracted logic from old script.js
│   │   └── seo/             # SEO utility for dynamic meta tags
│   └── types/               # TypeScript definitions
├── next.config.js
└── package.json
```
