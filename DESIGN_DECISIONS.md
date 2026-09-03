# Flip One website: design decisions

**Approved:** 2026-09-03 by Paul  
**Brand kit:** `04_Events_and_Marketing/Brand_Assets/Flip_One/flip-one-brand-kit.html` (version 1.1)  
**Build plan:** the "Flip One Website MVP design and build plan" (sections 1 to 13)

## Approved as written

1. Flat, minimal editorial homepage. No scroll-controlled diorama sequence.
2. Maritime concepts stay as subtle visual metaphors: beam of light, thin routes and nodes, coordinate marks, night-to-day sections.
3. Space Grotesk and the FLIP / ONE wordmark (plain Arial slash at 90% size).
4. Palette: Flip Blue #1647D8, electric blue #2457F5, Deep Navy #09162F, Warm Paper #F7F7F3, Signal Blue #E9EFFF, ink #101828, muted #667085, line #DDE1E8.
5. Hero headline: "Your startup lighthouse." Supporting copy uses "Building a startup is a voyage."
6. Principal CTA: "Chart your course."
7. Services grouped as Ideation, Scaling, Sustaining.
8. Pages: Home, People, Resources, Events, Services.
9. The Naru mockup (`05_Products_and_Tech/Naru_MVP_Prototype/index.html`) becomes the People page layout, restyled to the token system.
10. GitHub Pages hosts the MVP. Vercel and Supabase are deferred.
11. Generated diorama artwork is editorial support material only.
12. Animation is lightweight and non-essential, with reduced-motion support.

## 2026 trends: adopted

- Purposeful micro-interactions (copy confirmation, tag toggles, hover nudges, route line drawing).
- One bento block on the homepage previewing People, Resources and Events, with a featured person as the large cell.
- Entrance-only kinetic typography: hero headline rises word by word on load. No scroll-linked or morphing type.
- Night-to-day sections as narrative. No user-facing dark-mode toggle for the MVP; tokens stay ready for one.

## 2026 trends: rejected

- Generative or AI-native UI (impossible on static hosting, unnecessary for MVP).
- Neo-brutalism (contradicts calm, assured, international tone).
- Spatial design and parallax (beam glow and single glass nav are the limit).
- Hand-drawn or imperfect elements (warmth comes from real portraits and diorama artwork).

## Open questions before Phase 3 (secondary pages)

1. **Ask Flip One chatbot.** A static site cannot hold an API key. Default: browser-side keyword and tag matcher labelled "beta". Alternative: Vercel serverless proxy.
2. **People directory data.** The 20 profiles are fictional. Default: show as clearly labelled sample profiles until real opt-in profiles exist.
3. **"Chart your course" destination.** Needs a form service (Tally, Formspree), a Calendly link, or mailto. Not yet chosen.
4. **Resources and Events content.** Launch Home, People and Services first unless at least six real items exist for each.

## Component rules carried from the kit

- Flat surfaces, crisp 1px borders, no card shadows. Glass only on the floating nav and the Ask Flip One overlay.
- Buttons: primary blue, secondary white with border, text buttons for tertiary paths. All four states visible.
- Coordinates and compass marks as section indicators. Tabular figures for dates and coordinates.
- Statistics appear only when verified.
