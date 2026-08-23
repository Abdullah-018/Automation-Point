# Deployment checklist

## GitHub

- [ ] Repository created and default branch is `main`
- [ ] Source pushed successfully
- [ ] Branch protection enabled (recommended)
- [ ] `CLOUDFLARE_API_TOKEN` secret added
- [ ] `CLOUDFLARE_ACCOUNT_ID` secret added
- [ ] Optional Appwrite repository variables added
- [ ] Quality workflow passes

## Cloudflare

- [ ] Worker name reviewed in `wrangler.jsonc`
- [ ] Cloudflare build succeeds with `npm run cf:build`
- [ ] Production deployment succeeds
- [ ] Custom domain connected
- [ ] HTTPS active
- [ ] Desktop and mobile pages checked

## Appwrite (optional)

- [ ] Project created
- [ ] Localhost web platform added
- [ ] Production Cloudflare domain added
- [ ] Endpoint and project ID configured
- [ ] Database/table IDs configured only if a future feature needs them
- [ ] No server API key exposed through a `NEXT_PUBLIC_...` variable

## Final website QA

- [ ] English/Bangla switch works
- [ ] Leadership photos load
- [ ] All 14 program visualizations load
- [ ] Email, phone and WhatsApp links work
- [ ] No program can be executed from the website
