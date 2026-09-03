# Bloom Events Interface Reference

**Saved:** 2026-09-03  
**Reference site:** https://bloomworld.ai/community/en/  
**Intended Flip One use:** Inspiration for the future Events page. This direction is parked and is not part of the immediate homepage build.

## Why it is relevant

Bloom presents event artwork as a cinematic field of layered cards moving through apparent three dimensional space. It feels immersive and technically sophisticated while keeping each event represented by ordinary editorial artwork.

For Flip One, this could become an Events page where visitors move through past and upcoming events as a living visual archive.

## Verified technology

| Layer | Technology | Confidence |
|---|---|---:|
| Framework | Next.js App Router and React | Certain |
| Build system | Turbopack generated chunks | Certain |
| Styling | Tailwind CSS with custom component classes | Very high |
| Animation | GSAP and ScrollTrigger | Certain |
| Smooth scrolling | Lenis | Certain |
| Central card field | Custom React carousel using CSS perspective transforms and `requestAnimationFrame` | Very high |
| Background | Full viewport looping video with dark overlays | Certain |
| Delivery layer | Cloudflare | Certain |

## Important finding

The event card field resembles a WebGL scene, but the deployed code does not appear to use Three.js or React Three Fiber.

No evidence was found for:

- `WebGLRenderer`
- `THREE`
- `@react-three/fiber`
- Three.js imports

The cards are normal DOM elements positioned with transforms resembling:

```css
transform:
  translate(-50%, -50%)
  translate(var(--x), var(--y))
  perspective(1100px)
  rotateY(var(--angle))
  scale(var(--scale));
```

A custom animation loop interpolates the selected position and updates translation, rotation, scale, opacity, brightness, border radius, shadow, and stacking order.

## Likely architecture

```text
Next.js
  React components
  Tailwind layout
  Custom CSS 3D event card carousel
  requestAnimationFrame motion loop
  GSAP for loading, menus, cursor, and transitions
  ScrollTrigger synchronized with Lenis
  Fullscreen video and patterned background
```

## Repository assessment

No public GitHub repository matched the site's distinctive class names or exact carousel implementation.

Best estimate:

- 75% probability that it was custom built for Bloom
- 20% probability that it came from a private studio starter or internal component
- 5% probability that it began from an obscure public creative coding example and was substantially rewritten

The interaction may be inspired by Codrops or Awwwards style three dimensional card galleries, but the deployed implementation appears bespoke.

## Recommended Flip One approach

Recreate the interaction principle rather than copying Bloom's design or assets.

For a GitHub Pages compatible implementation:

1. Use semantic HTML event cards with real links and accessible titles.
2. Use CSS perspective and transforms for the apparent depth.
3. Drive the active position with a small `requestAnimationFrame` interpolation loop.
4. Use GSAP only for orchestrated transitions and interface motion.
5. Use Lenis only if smooth scrolling materially improves the finished interaction.
6. Provide a simple list view and reduced motion fallback.
7. Use Flip One's own maritime art direction, typography, colors, and event artwork.

This approach avoids the complexity and payload of Three.js while preserving the distinctive spatial browsing experience.

## Sources

- Bloom: https://bloomworld.ai/community/en/
- Next.js: https://nextjs.org/docs
- GSAP ScrollTrigger: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- Lenis: https://lenis.dev/
