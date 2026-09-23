# mon3m.com: Mohamed Abdelmoniem's portfolio

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS v4. Fully static: every page is prerendered at build time.

## Run it

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
npm run typecheck
```

Node 20.9+ is required (Vercel: set Node.js to 20.x or 22.x in Project → Settings → Build).

## Contact form

`app/api/contact/route.ts` sends messages through Gmail SMTP. Credentials are read from environment variables only, so nothing secret is in the repo:

| Variable | Value |
| --- | --- |
| `SMTP_USER` | the Gmail address that sends |
| `SMTP_PASS` | a Gmail **app password** (Google Account → Security → 2-Step Verification → App passwords) |
| `CONTACT_TO` | optional; where messages arrive (defaults to the email in `lib/site.ts`) |

Locally, put them in `.env.local` (git-ignored; see `.env.example`). On Vercel, add them under Project → Settings → Environment Variables, then redeploy. Without them, the form tells visitors to email directly.

## Where things live

| What | Where |
| --- | --- |
| Name, links, SEO description | `lib/site.ts` |
| Projects and case studies | `lib/projects.ts` |
| Experience timeline and skills | `lib/experience.ts` |
| Screenshots | `public/work/<slug>/desktop.webp`, `mobile.webp` (`-2` for a second pair) |
| Illustrations for internal work | `components/Covers.tsx` |
| CV | `cv/Mohamed-Abdelmoniem-CV.html` (source) → `public/Mohamed-Abdelmoniem-CV.pdf` |

### Add a project

1. Add an entry to `projects` in `lib/projects.ts`. Put it in the right `group`; the first project in each group is shown large.
2. Screenshots: capture desktop at 1440×900 and mobile at 390×844 (3×), then run
   `node scripts/optimize-images.mjs <folder>` after adding the slug to the map in that script.
3. No public screenshot (NDA or internal)? Set `cover` to one of the illustration kinds instead, and add a `note`.

The case-study page, sitemap entry, Open Graph image and structured data are generated from that entry automatically.

### Update the CV

Edit `cv/Mohamed-Abdelmoniem-CV.html`, open it in Chrome, Print → Save as PDF (A4, margins default, background graphics on), and replace `public/Mohamed-Abdelmoniem-CV.pdf`.

## SEO

- Per-page `metadata`, canonical URLs and Open Graph / Twitter cards
- Generated OG images (`app/opengraph-image.tsx`, `app/work/[slug]/opengraph-image.tsx`)
- `sitemap.xml` and `robots.txt` from `app/sitemap.ts` and `app/robots.ts`
- JSON-LD: `Person` on every page, `CreativeWork` + `BreadcrumbList` on case studies
- Permanent redirects from the old v1 URLs (`/works/*`, `/blog/*`, `/about`, `/contact`, old CV path)

If you move to a custom domain, change `site.url` in `lib/site.ts`.
