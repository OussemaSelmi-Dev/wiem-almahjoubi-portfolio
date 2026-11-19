# Wiem Almahjoubi Portfolio — Design System (Master)

Chosen layout: **Bento** — a dark, tile-based page. Picked over the Editorial, Index and Sidebar options.
Accent is the coral pink from Wiem's CV (the color of the earlier Editorial design).

## Concept
"Insight → Partnerships → Growth." A career laid out as a dashboard of tiles: a name tile, a pink
portrait tile, number tiles, then a bento grid of projects. All content comes from `src/data/`.

## Color tokens (`src/app/globals.css`)
| Token | Value | Use |
|---|---|---|
| `nb-bg` | `#0F0D0E` | Page background |
| `nb-card` | `#191617` | Tiles |
| `nb-card2` | `#231F20` | Nested surfaces, tags, image placeholders |
| `nb-line` | `#2F2A2B` | Tile borders |
| `nb-text` | `#F5F0EB` | Primary text |
| `nb-muted` | `#AAA29D` | Secondary text |
| `nb-accent` | `#C8384F` | Coral pink **fills** (buttons, portrait/award/contact tiles) — always with white text (≈5:1) |
| `nb-accent-deep` | `#9F2338` | Hover on pink fills |
| `nb-pink` | `#F07A8E` | Pink **text** and icons on the dark background (≈6.7:1). Don't use `nb-accent` for small text on dark — it's only ≈3.9:1 |
| `nb-rose` | `#F4B8C1` | Soft highlights: project client labels, tags, glow |

## Typography
- Display: **Bricolage Grotesque** 600 (`font-grotesk`), tight tracking.
- Body/UI: **Inter** 400/500.
- Eyebrows: 12px uppercase, 0.18em tracking, `nb-muted`.

## Shape & motion
- Tiles: 24px radius (`rounded-3xl`), 1px `nb-line` border, 12px gaps.
- Pills for buttons and filters.
- Tiles fade/rise 16px on scroll, 600ms, ease `[0.22, 1, 0.36, 1]`, once. `MotionConfig reducedMotion="user"`.
- Project tiles: image cover + bottom black gradient for legible white text; featured projects span 2×2.

## Content
- `src/data/profile.ts` — bio, experience, leadership, expertise, awards, stats.
- `src/data/projects.ts` — projects, certificates, trainings.
- `src/data/media.ts` — generated image list (sizes + alt text) for `public/work/`.
- Project images open in the shared viewer (`src/components/ProjectViewer.tsx`).

## Rules
- Only facts from the CVs and the info folder. Phone number is not published.
- lucide-react icons, `aria-hidden` beside text. Visible pink focus ring.
- Mobile-first; check 375 / 768 / 1024 / 1440. No horizontal scroll.
