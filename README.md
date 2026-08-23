# Automation Point Web Portfolio

Automation Point-এর bilingual, information-only business and leadership portfolio website। কোনো desktop automation program এই website থেকে চালানো হয় না।

## Live website

- Production: `https://automationpoint.pages.dev`
- Hosting: Cloudflare Pages
- Source and CI/CD: GitHub
- Optional backend template: Appwrite

## Requirements

- Node.js 22.13 বা নতুন
- npm
- Cloudflare account (deployment-এর জন্য)
- Appwrite project (শুধু ভবিষ্যৎ Appwrite feature ব্যবহার করলে)

## Local development

```bash
npm install
npm run dev
```

তারপর `http://localhost:3000` খুলুন।

## Validation

```bash
npm run lint
npm run pages:build
```

Static production output `out/` folder-এ তৈরি হবে।

## Cloudflare Pages deployment

Cloudflare Pages project name হলো `automationpoint`। Local authenticated deployment:

```bash
npx wrangler login
npm run deploy:pages
```

`main` branch-এ push হলে `.github/workflows/deploy-cloudflare.yml` automatic Pages deployment চালাবে। GitHub repository-এর **Settings → Secrets and variables → Actions**-এ নিচের secrets প্রয়োজন:

- `CLOUDFLARE_API_TOKEN`
- `CLOUDFLARE_ACCOUNT_ID`

Cloudflare API token-কে প্রয়োজনীয় account ও Pages deployment permissions-এর মধ্যে সীমাবদ্ধ রাখুন। Token কখনো repository-তে commit করবেন না।

## Appwrite setup

1. Appwrite Console-এ project খুলুন।
2. Web platform হিসেবে local development-এর জন্য `localhost` এবং production-এর জন্য `automationpoint.pages.dev` যোগ করুন।
3. `.env.example` কপি করে `.env.local` বানিয়ে endpoint ও project ID বসান।
4. SDK template: `lib/appwrite.ts`।

বর্তমানে Appwrite client optional এবং কোনো database write করে না। ফলে portfolio website information-only থাকে।

## Important files

- `app/page.tsx` — bilingual website content ও structure
- `app/globals.css` — complete responsive design
- `app/layout.tsx` — SEO এবং social metadata
- `public/` — logo, leadership photos, social image এবং program visualizations
- `next.config.ts` — static export configuration
- `wrangler.jsonc` — Cloudflare Pages configuration
- `.github/workflows/quality.yml` — GitHub quality checks
- `.github/workflows/deploy-cloudflare.yml` — automatic Pages deployment
- `lib/appwrite.ts` — optional Appwrite client
- `.env.example` — environment variable template

## Security

- `.env.local`, Cloudflare token বা Appwrite server API key commit করবেন না।
- Browser code-এ শুধু `NEXT_PUBLIC_...` values ব্যবহার করুন।
- ভবিষ্যতে privileged Appwrite operation যোগ করলে server-side SDK ও least-privilege API key ব্যবহার করুন।
