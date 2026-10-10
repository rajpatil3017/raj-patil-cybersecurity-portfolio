# Raj Patil — Cybersecurity Portfolio

Dark navy / black / cyan portfolio built with Next.js, TypeScript, and Tailwind CSS. Designed for GitHub source control and deployment to Netlify or another Next.js-compatible host.

## Important content-integrity notes

- `public/resume.pdf` is intentionally not included because the available `Profile.pdf` Library copy could not be exported as raw bytes in this session. Copy your latest resume into `public/resume.pdf` before deployment. The resume buttons already point to this path.
- Certification section is intentionally a verification placeholder. Add only credentials whose exact titles, issuers, dates, and verification URLs/IDs you can substantiate.
- Project cards are case-study templates/reference designs. They are not claims that all four projects have been completed. Replace template wording with evidence from your actual work/labs before publishing.
- Replace `https://example.com` in `src/app/layout.tsx` with the final production URL.
- Verify the LinkedIn URL and email address in `src/app/page.tsx` before public launch.
- Do not publish client-sensitive details, internal IPs, production configurations, or confidential network diagrams.

## Local development

Requirements: Node.js 20+ and npm.

```bash
npm install
npm run dev
```

Open http://localhost:3000.

## Production build

```bash
npm run build
npm run start
```

## Suggested deployment: Netlify

For an alternative to Vercel, Netlify is the most straightforward choice for this Next.js project. Push this project to a new GitHub repository, then in Netlify choose **Add new site → Import an existing project**, authorize GitHub, select the repository, and deploy using Netlify's Next.js runtime/build detection. Review the detected build settings before deploying. Add the resume file first.

Alternative: Vercel is the most native option for Next.js; Cloudflare Pages is not the simplest path for a conventional Next.js app and may require the Cloudflare Workers/OpenNext adapter.

## GitHub

Create a new repository named `raj-patil-cybersecurity-portfolio`. Public is appropriate for a portfolio; keep it private until you have removed sensitive material and checked every link. Then:

```bash
git init
git add .
git commit -m "Initial cybersecurity portfolio"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/raj-patil-cybersecurity-portfolio.git
git push -u origin main
```

## Before launch checklist

- [ ] Add `public/resume.pdf` from the latest approved resume.
- [ ] Verify contact details and LinkedIn URL.
- [ ] Add actual certification verification links.
- [ ] Replace or substantiate project templates with real, sanitized evidence.
- [ ] Replace canonical URL metadata with production domain.
- [ ] Run `npm install` and `npm run build`.
- [ ] Check mobile layout, PDF download, and all navigation links.
