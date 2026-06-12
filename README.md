# BHR AI Landing Page

Single page Next.js 14 site. Monochrome editorial design with Instrument Serif display type, Schibsted Grotesk body, and IBM Plex Mono labels.

## Run locally
npm install
npm run dev

## Deploy to Vercel
1. Push this folder to a GitHub repo
2. Import the repo at vercel.com/new
3. Framework preset: Next.js (auto detected). No environment variables needed.

Or from the CLI: npx vercel

## Notes
- Security headers (CSP, HSTS, nosniff, frame deny) are set in next.config.mjs
- Contact links: mailto and WhatsApp deep link, no form, no backend
- Update the email in app/page.tsx when the custom domain inbox is ready
