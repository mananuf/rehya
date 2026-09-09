# RHYE site — what is verified and what is placeholder

This site was rebranded from an NCDC (North Central Development Commission)
template to the **Renewed Hope Youth Engagement (RHYE)**. Styling, typography
and colours were deliberately left untouched; only content, data and brand
assets changed.

Sample content was written to make the site look complete for demonstration.
**Everything in the "Invented" section below must be replaced before this site
is published.** Use this file as the checklist.

---

## ✅ Verified from published reporting

Safe to keep as-is; re-check dates before launch.

| Fact | Where it appears | Source |
|---|---|---|
| Programme name: Renewed Hope Youth Engagement (RHYE) | throughout | Blueprint, Nigeria Star News |
| National Coordinator: **Abdulazeez Abubakar Kaka** | `leadership.json`, FAQs | Blueprint; also printed as "Abdurazez" elsewhere — spelling needs confirming |
| Benue State Coordinator: **Fidelis Unongo** | `leadership.json` | Blueprint |
| Benue State Executive Committee inaugurated by Gov. Hyacinth Alia, represented by Deputy Gov. Dr. Sam Ode | `news-data.ts`, `states.json` | Blueprint |
| Plateau State Coordinating Unit inaugurated in Jos, **5 August 2026** | `news-data.ts`, `projects.json`, `states.json` | Nigeria Star News, Matthew Tegha |
| Mandate wording: young people as "active contributors to development, rather than being mere beneficiaries" | `site.json`, charter, about | Blueprint |
| Standing charge against violence, hate speech, intimidation, misinformation | pillars, charter, news | Blueprint, Gazette NG |
| Coordinator remarks referenced student loans, security welfare, state allocations, investor confidence | `news-data.ts` | Nigeria Star News |
| President **Bola Ahmed Tinubu, GCFR** — sworn in 29 May 2023 | `leadership.json` | public record |
| Vice President **Kashim Shettima, GCON** | `leadership.json` | public record |
| APC National Chairman **Prof. Nentawe Goshwe Yilwatda** — re-elected March 2026 | `leadership.json` | Premium Times, Vanguard, NAN |
| APC National Secretary **Sen. Surajudeen Ajibola Basiru** | `leadership.json` | Premium Times |
| APC Deputy National Chairman (North) **Ali Bukar Dalori** | `leadership.json` | Premium Times |
| APC Deputy National Chairman (South) **Dr. Benjamin Obi Nwoye** | `leadership.json` | Premium Times |
| APC Deputy National Secretary **Prof. AbdulKarim Abubakar Kana** | `leadership.json` | Premium Times |
| 36 states + FCT, **774 LGAs**, **8,809 wards**, 6 geopolitical zones | throughout | public record (LGA counts sum to exactly 774 — validated in build) |
| State capitals, LGA counts, coordinates, official state slogans | `states.json` | public record |

### A note on the dignitaries section

The President, Vice President and APC officers are presented as **the national
leadership under whose agenda the programme operates** — their real offices and
nothing more. The site does **not** claim any of them has personally endorsed
RHYE, and no quote is attributed to any of them. That disclaimer is printed on
both `/about/leadership` and the homepage leadership section. If the programme
does hold formal patronage from any of these offices, replace the disclaimer
with the actual designation — don't just delete it.

---

## ⚠️ Invented placeholder content — REPLACE BEFORE LAUNCH

### Contact details (`lib/data/site.json`) — highest priority
- `email: info@rhye.ng` — **domain not verified as owned by the programme**
- `phone: +234 (0) 700 000 0000` — dummy
- `socials` — `x/facebook/instagram: rhyenigeria` handles are **guesses, not verified accounts**
- `hq.address` — "RHYE National Secretariat, Abuja" is plausible but the actual address is unknown
- `NEXT_PUBLIC_SITE_URL` — **not** hardcoded to a placeholder domain. `lib/site-url.ts`
  resolves it in order: `NEXT_PUBLIC_SITE_URL` → `VERCEL_PROJECT_PRODUCTION_URL` →
  `VERCEL_URL` → localhost. So a Vercel deploy emits canonical/OG/sitemap URLs for
  its own domain with no configuration. Set `NEXT_PUBLIC_SITE_URL` in the Vercel
  project once a real domain is live.

### Statistics
- `70M+` young Nigerians (hero) — roughly defensible for the 15–35 band, but not a programme figure
- `3,400+` coordinators (`site.json`) — invented
- All participant/reach numbers in `projects.json` — invented

### The eight pillars (`lib/data/focus-areas.json`)
Derived from reported programme activity and themes, **not** from a published
RHYE pillar document. The programme may define its own differently.

### Programmes (`lib/data/projects.json`)
All 18 entries carry `sample: true` and render with a **Sample** badge. Only the
two inauguration entries (Plateau, Benue) correspond to real events; the other
16 are invented, as are all budgets/reach figures, progress percentages and LGA
assignments.

### Newsroom (`lib/news-data.ts`)
- Real basis: `plateau-coordinating-unit-inaugurated`, `benue-executive-committee-inaugurated`
- **Invented:** the other six articles, including the fraud-warning notice.
  The fraud notice states a policy (participation is free) — confirm the
  programme actually holds that policy before publishing it as a notice.
- `benue-executive-committee-inaugurated` is dated `2026-07-28`; **no date was
  published in the sources** — verify or remove the date.

### States (`lib/data/states.json`)
Names, capitals, LGA counts, coordinates and slogans are real. The `summary`
and `activities` prose is **generated boilerplate** varied per state. Only
Benue and Plateau are flagged `inaugurated: true`; every other state is marked
`false` — update as units are actually inaugurated.

### Charter, FAQs, resources
`/about/charter` is written from reported programme behaviour, not a published
charter — the page says so. All `resources.json` entries are `pending: true`
with no files behind them.

### Imagery
Photographs are Wikimedia Commons stock of Nigerian scenes, carried over from
the NCDC template — none depict RHYE activities. States without a dedicated
photo cycle through a shared pool (`stateImage()` in `lib/content.ts`).

**`public/images/president-tinubu.jpg` — clear this before launch.** It was
prepared from a supplied screenshot of what appears to be official State House /
presidential media. **No licence has been established for it.** Replace it with
an officially released or properly licensed photograph before this site is
public, and add the credit to `/credits`.

The hero portrait is captioned with the office ("President Bola Ahmed Tinubu,
GCFR — The Renewed Hope Agenda") rather than left to imply endorsement. A large
portrait carries much more implied association than the leadership page's text
disclaimer does, so if the programme has no formal patronage, that caption is
doing real work — do not remove it.

---

## Brand assets generated from your logo

Built from `~/Documents/illustrator/infinity.png`:

| File | What it is |
|---|---|
| `public/rhye-mark.png` | Black mark, transparent — nav and light backgrounds |
| `public/rhye-mark-light.png` | White mark, transparent — dark footer, splash, loader |
| `public/rhye-icon.png` | 1024px square, white mark on `#1B5E2E` |
| `public/favicon-{16,32,192,512}.png`, `apple-icon.png` | Favicons from the square icon |
| `public/og.png` | 1200×630 link-preview card |
| `public/og-logo.jpg` | 1200×1200 square preview |
| `public/images/president-tinubu.jpg` | Hero portrait, 1050×888 — **licence unresolved, see Imagery above** |

The icon green `#1B5E2E` is the template's existing `--primary` — no new colours
were introduced. Splash screen: `components/site/splash-screen.tsx` (first paint,
respects `prefers-reduced-motion`). Route loader: `app/loading.tsx`.

Removed: `public/ncdc-logo.png`, `public/ncdc-seal.png`,
`public/documents/ncdc-establishment-act-2024.pdf`.

---

## Structural changes

- `/about/act` → **`/about/charter`** — RHYE has no establishment Act, so the
  page became the programme's operating charter. All links and the sitemap follow.
- `/foi` → **Information Requests**. RHYE is not a public institution under the
  FOI Act 2011, so the statutory framing was wrong; the page now says so plainly.
- `/procurement` → **Partners & Suppliers** (no statutory tender process).
- `/report` → **Report an Issue** (fraud, impersonation, coordinator misconduct).
- `/projects` → labelled **Programmes**; `/what-we-do` → **Our Pillars**.
- Project `budget` field renamed `reach`; statuses `procurement`/`ongoing`
  renamed `recruiting`/`running`.
- Coverage expanded from 7 locations to all 37 (globe, pills, state pages).

---

## Pre-existing issues (NOT introduced by the rebrand)

1. **The display serif never renders.** `--font-display` is declared inside
   Tailwind v4's `@theme inline` block, which inlines values instead of emitting
   a CSS custom property — so the hand-written `.font-display { font-family:
   var(--font-display) }` in `app/globals.css` resolves to nothing, and every
   heading falls back to Instrument Sans. Instrument Serif *is* downloaded and
   bundled; it is simply never applied. Left alone because fixing it would change
   the typography of every heading on the site, which you asked me not to touch.
   One-line fix if you want it: move `--font-display` out of `@theme inline` into
   the `:root` block.
2. **Nav links are low-contrast over the unscrolled hero** — they are
   `text-white/70` above a light image with a white gradient. Same in the
   original template.
3. **`node_modules` was incomplete** (36 of 56 declared packages; `next build`
   failed on missing transitive deps). Fixed with `pnpm install`.
4. TypeScript reports ~7 pre-existing errors in shadcn/ui components and
   `developers-section.tsx`; `next.config.mjs` sets `ignoreBuildErrors: true`.
   The rebrand added **zero** new type errors.

## Cosmetic, your call

With 37 pins instead of 7, the globe markers cluster tightly over Nigeria at the
current camera altitude. Zooming the camera in or shrinking the pin radius in
`components/landing/globe-component.tsx` would separate them.

---

## Deploying to Vercel

Verified deploy-ready:

- `pnpm-lock.yaml` (lockfileVersion 9.0) passes `pnpm install --frozen-lockfile`,
  which is what Vercel runs — a lockfile out of sync is the usual cause of a
  build that works locally and fails on Vercel.
- `next build` succeeds: 84 static pages, no build-blocking errors.
- Framework auto-detects as Next.js; no `vercel.json` is needed.
- `node_modules/`, `.next/`, `.vercel/` and `.env*.local` are all gitignored.
- `@vercel/analytics` is already wired into the root layout.
- URLs resolve from the deployment itself (see `lib/site-url.ts`), so previews
  point at previews and production points at production.

**Environment variables:** none are required to build or deploy. Set
`NEXT_PUBLIC_SITE_URL` only when a custom domain is attached.

**Caveat:** `next.config.mjs` sets `typescript.ignoreBuildErrors: true` and
`images.unoptimized: true`, both inherited from the v0 template. The first means
type errors will not stop a deploy — the ~7 pre-existing errors listed above are
why it is on. The second disables Vercel's image optimisation for every `<img>`
on the site.
