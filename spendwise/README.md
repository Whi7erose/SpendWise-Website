# SpendWise Website

Sri Lanka's #1 automated budgeting app — complete multi-page website.

## How to open

Just double-click `index.html` — no server, no setup, no npm install needed.

## File Structure

```
SpendWise-Website/
│
├── index.html                 # Hero / Landing Page
├── products.html              # Product Hub
├── personal-finance.html      # Personal Finance Page
├── business-finance.html      # SME Page
├── corporate-finance.html     # Corporate Page
├── features.html              # Full Feature Suite
├── how-it-works.html          # Step-by-Step Guide
├── pricing.html               # Pricing Grid
├── faq.html                   # FAQ Accordion
├── contact.html               # Contact & Newsletter
│
├── assets/images/
│   └── logo.png               # SpendWise logo
│
├── css/
│   ├── global.css             # :root CSS variables & body reset (shared by all pages)
│   ├── navbar.css             # Sticky navigation styles
│   ├── footer.css             # Footer styles
│   └── pages/
│       └── index.css          # Hero/landing page specific styles
│
└── js/
    ├── navbar.js              # Mobile hamburger menu + scroll shadow + active link highlight
    └── contact.js             # EmailJS contact form + newsletter subscription logic
```

## Deploy to GitHub Pages

```bash
git init
git add .
git commit -m "feat: SpendWise multi-page website"
git remote add origin https://github.com/YOUR_USERNAME/spendwise-website.git
git push -u origin main
```

Then: **GitHub → Settings → Pages → Branch: main → / (root) → Save**

Your site will be live at: `https://YOUR_USERNAME.github.io/spendwise-website/`

## Pages & Navigation

Every page shares:
- The same sticky navbar with your logo
- The same footer with social links (LinkedIn, Instagram, GitHub)
- `css/global.css` — design tokens
- `css/navbar.css` — navigation styles
- `css/footer.css` — footer styles
- `js/navbar.js` — mobile menu toggle

The contact page additionally loads:
- EmailJS SDK (from CDN)
- `js/contact.js` — form submission + newsletter logic
