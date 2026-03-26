# Taligado Landscaping SPA

Production-ready single page application for a local landscaping business:

- Snow Removal services
- Lawn Care services
- Contact form integrated with Resend API via secure server route

Built with:

- Next.js (App Router)
- TypeScript
- Tailwind CSS

## Local Development

1. Install dependencies:

```bash
npm install
```

2. Create `.env.local` from `.env.example`:

```bash
cp .env.example .env.local
```

3. Fill environment variables:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_TO_EMAIL=your_destination_email
CONTACT_FROM_EMAIL=onboarding@resend.dev
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

4. Start dev server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Hero Image Setup

Place hero assets in `public/home/` and include `home` in the file name.
Examples:

- `public/home/home-hero.jpg`
- `public/home/main-home.webp`

The app automatically picks the first matching image. If none is found, it uses a gradient fallback.

## Vercel Deployment

1. Push repository to GitHub/GitLab/Bitbucket.
2. Import project into [Vercel](https://vercel.com/new).
3. In Project Settings -> Environment Variables, add:
   - `RESEND_API_KEY`
   - `CONTACT_TO_EMAIL`
   - `CONTACT_FROM_EMAIL` (optional but recommended with verified sender)
   - `NEXT_PUBLIC_SITE_URL` (set to your production domain, e.g. `https://your-domain.com`)
4. Deploy.

### Notes for production

- Contact form server endpoint is at `app/api/contact/route.ts`.
- Resend key is never exposed to the client.
- Route runs on Node.js runtime (Vercel-friendly for Resend usage).
- `sitemap.xml` and `robots.txt` are generated using `NEXT_PUBLIC_SITE_URL`.
