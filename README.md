# Automation Point Web Portfolio

Automation Point-এর bilingual, information-only business and leadership portfolio website। কোনো desktop automation program এই website থেকে চালানো হয় না।

## Package overview

- **GitHub:** repository-ready source, quality workflow এবং automatic production deployment workflow।
- **Cloudflare Workers:** Next.js application-এর জন্য official OpenNext adapter ও Wrangler configuration।
- **Appwrite:** future Auth, TablesDB, Storage বা contact-data feature-এর জন্য optional client template। বর্তমান website Appwrite ছাড়া স্বাভাবিকভাবে চলে।

## Requirements

- Node.js 22.13 বা নতুন
- npm
- Cloudflare account (deployment-এর জন্য)
- Appwrite Cloud/self-hosted project (শুধু Appwrite feature ব্যবহার করলে)

## Local development

```bash
npm install
npm run dev
```

তারপর `http://localhost:3000` খুলুন।

## Validation

```bash
npm run lint
npm run build
npm run cf:build
```

Cloudflare runtime-এ local preview:

```bash
npm run preview
```

## GitHub setup

1. এই folder থেকে নতুন Git repository তৈরি করুন।
2. GitHub-এ একটি empty repository তৈরি করে `main` branch push করুন।
3. Repository **Settings → Secrets and variables → Actions**-এ নিচের secrets দিন:
   - `CLOUDFLARE_API_TOKEN`
   - `CLOUDFLARE_ACCOUNT_ID`
4. Appwrite ব্যবহার করলে Actions **Variables**-এ দিন:
   - `NEXT_PUBLIC_APPWRITE_ENDPOINT`
   - `NEXT_PUBLIC_APPWRITE_PROJECT`
   - `NEXT_PUBLIC_APPWRITE_DATABASE_ID` (optional)
   - `NEXT_PUBLIC_APPWRITE_CONTACT_TABLE_ID` (optional)
5. `main` branch-এ push হলে quality checks এবং Cloudflare deployment চলবে।

Cloudflare API token-কে কেবল প্রয়োজনীয় Workers account-এর মধ্যে সীমাবদ্ধ রাখুন। Token কখনো repository-তে commit করবেন না।

## Cloudflare setup

`wrangler.jsonc`-এ Worker name হলো `automation-point-portfolio`। প্রয়োজন হলে deployment-এর আগে নামটি পরিবর্তন করুন।

Local login ও deploy:

```bash
npx wrangler login
npm run deploy:cloudflare
```

Custom domain Cloudflare Dashboard-এর **Workers & Pages → automation-point-portfolio → Settings → Domains & Routes** থেকে যুক্ত করুন।

## Appwrite setup

1. Appwrite Console-এ project তৈরি করুন।
2. Web platform হিসেবে local development-এর জন্য `localhost` এবং production-এর জন্য Cloudflare domain যোগ করুন।
3. `.env.example` কপি করে `.env.local` বানিয়ে endpoint ও project ID বসান।
4. Appwrite CLI ব্যবহার করলে `appwrite.config.example.json` কপি করে `appwrite.config.json` বানান এবং placeholder values পরিবর্তন করুন।
5. SDK template: `lib/appwrite.ts`।

বর্তমানে Appwrite client optional এবং কোনো database write করে না। ফলে portfolio website information-only থাকে।

## Important files

- `app/page.tsx` — bilingual website content ও structure
- `app/globals.css` — complete responsive design
- `public/` — logo, leadership photos, social image এবং program visualizations
- `wrangler.jsonc` — Cloudflare Worker configuration
- `open-next.config.ts` — Cloudflare OpenNext adapter
- `.github/workflows/quality.yml` — GitHub quality checks
- `.github/workflows/deploy-cloudflare.yml` — automatic Cloudflare deployment
- `lib/appwrite.ts` — optional Appwrite client
- `.env.example` — required environment variable template

## Security

- `.env.local`, Cloudflare token বা Appwrite server API key commit করবেন না।
- Browser code-এ শুধু `NEXT_PUBLIC_...` values ব্যবহার করুন।
- ভবিষ্যতে privileged Appwrite operation যোগ করলে server-side SDK ও least-privilege API key ব্যবহার করুন।
