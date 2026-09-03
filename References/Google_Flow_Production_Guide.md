# Flip One Google Flow production guide

## Current production approach

Use Google Flow Storyboard Studio to establish the complete narrative, shot sequence and visual continuity before polishing individual images or clips. The earlier generated images remain concept references, not locked production frames.

Workflow:

1. Write one clear linear four scene story.
2. Select and lock one visual style for the complete project.
3. Let Storyboard Studio extract the recurring characters, locations and props.
4. Refine the essential reusable assets before autofilling storyboard scenes.
5. Generate the complete storyboard as a low cost continuity test.
6. Correct framing, scale, camera progression and asset consistency at storyboard level.
7. Animate only approved frames, explicitly attaching the relevant assets.
8. Export the project, images, clips and project data frequently.

Avoid narration unless a visible narrator is intentionally required. The website copy will appear as HTML overlays rather than generated speech or in-image text.

## Camera-world states

Every generated frame must use one of two explicit states:

- **Outside (in studio):** The complete floating ocean island or diorama is visible against the seamless warm grey-white studio background. Platform edges, surrounding negative space and the miniature-world scale remain readable.
- **Inside (in scene):** The camera has entered the world. No studio background, platform edge, plinth or diorama framing is visible. The ocean, ship and characters fill the cinematic frame at their in-world scale.

When a request does not make the intended state clear, confirm the state before generating.

## Storyboard Studio story input

> Scene 1: Korean founder Mina sails alone aboard the Flip One ship through a stormy nighttime ocean world, struggling to find direction. Scene 2: A lighthouse appears, revealing a route. Mina opens a map connecting Korea with global markets as the Funding Navigator and Cofounder join her. Scene 3: Dawn breaks and waves calm. The Investor Connector, Business Coach, Wellbeing Specialist and Community Host board while opportunity islands emerge. Scene 4: The camera pulls high overhead, revealing startup ships sailing together toward a harbor of events, knowledge and partnerships.

## Prompt rule

Every AI generation prompt must contain no more than 89 words.

## Canonical visual direction

**Key phrase:** Original polished isometric fantasy adventure game diorama on a seamless warm grey-white studio background.

Every scene is a self-contained square island or plinth viewed through an elevated three-quarter orthographic camera. The camera may gradually rise and widen as the story expands. Scene 4 uses a decisive pullback to reveal the larger world and eventual fleet. The complete miniature environment remains visible with generous surrounding negative space and no horizon or skybox. Use polished low-to-mid-poly geometry, large rhythmic curves, charming asymmetry, selective faceting, subtle contour accents, two-to-three-tone cel shading, broad hand-painted colour fields and restrained painterly gradients. Arrange assets as an orderly miniature playable game level with clear clusters, paths and open areas. Characters remain tiny relative to the environment. Avoid photorealism, obvious triangular mesh patterns, excessive detail, generic mobile game styling and recognizable franchise designs.

## Scene 1 reference prompt

> Isometric low-poly floating-world diorama on a seamless warm grey-white studio background. A thick square polygonal ocean slab holds seven broad rolling turquoise waves, one compact coral-and-gold sailing ship, and a tiny Korean female startup founder at the wheel. Elevated three-quarter orthographic view shows the complete playable level with generous negative space. Broad simplified geometry, flat hand-painted colors, clean silhouettes, restrained faceting, soft ambient occlusion and subtle shadow beneath the platform. Suspend one polygonal crescent moon, sparse stars and one small cloud above. No text or watermark.

## Reusable asset library

Environment production comes first. Boats, characters, crew and movable props remain excluded until the four environment states are approved.

1. White theatrical display box
2. Suspended atmospheric decoration system
3. Moon, cloud and star set
4. Polygonal ocean platform
5. Cel shaded storm and calm wave family
6. Flip One hero boat
7. Founder or captain
8. Navigation map and sea chart
9. Lighthouse
10. Guiding beam of light
11. Crew character collection
12. Funding and investor objects
13. Coaching, biomechanics and community objects
14. Fleet of companion boats
15. Events, content and partnership harbour

## Crew character collection

The crew is a coordinated set of six reusable low poly game characters. Each character should have a distinct silhouette, colour accent and prop while sharing the same proportions, geometry, facial language and family adventure tone.

1. Funding navigator
2. Cofounder
3. Investor connector
4. Business coach
5. Biomechanics and wellbeing specialist
6. Community host

The founder remains alone in Scene 1. The map and crew arrive in Scene 2, creating the visual transition from uncertainty to guidance and support.

## Founder or captain asset prompt

> Full body Korean female startup founder and captain as an isolated low-poly game character asset on a seamless warm grey-white studio background. Tiny collectible proportions, broad simplified geometry, selective faceting, clean silhouette and flat hand-painted colors. Windswept dark hair, navy hoodie, rolled neutral chinos, white sneakers and smartwatch. Friendly confident pose with one hand ready to steer. Elevated three-quarter orthographic view, soft overhead studio lighting, mild ambient occlusion and restrained contact shadow. Match the Flip One floating-world diorama scale. No text, logo, weapons or pirate costume.

## Hero boat asset prompt

> Isolated original sailing ship for an isometric fantasy adventure game diorama. Buoyant crescent coral hull, raised bow, rounded stern, cream trim curls, upward bowsprit, two asymmetrical walnut masts, offset crow’s nest and three golden ochre sails. Polished low-to-mid-poly geometry, rhythmic curves, subtle contours, restrained faceting, two-to-three-tone cel shading and broad hand-painted colors. Include open deck, wheel, chunky railings, plank marks, three brass portholes, thick rigging and turquoise accents. Elevated three-quarter orthographic view, facing right, warm grey-white background. No characters, ocean, flags, text or pirate imagery.

### Extended boat design reference

The hero vessel uses a buoyant crescent shaped coral red hull, dramatically raised bow, rounded stern, sweeping cream trim curls, chunky upward curving bowsprit, two asymmetrical warm brown masts, an offset crow’s nest and three broad golden ochre sails. Its construction relies on large rhythmic curves, charming asymmetry, gently exaggerated proportions and a strong gameplay readable silhouette.

Include a simplified open deck, stylized wheel, chunky railings, raised stern deck, broad plank indications, three brass rimmed portholes, minimal thick rigging and a subtle original wind and wave carving on the bow. Use turquoise accents sparingly against coral, gold, ivory and walnut. The complete empty vessel faces screen right and remains visible from mast tops to keel and across the bowsprit.

## Ocean state 1 prompt: stormy night

> Isometric low-poly floating-world ocean diorama on a seamless warm grey-white studio background. A thick square polygonal ocean slab contains seven broad stormy waves in deep cobalt, navy and muted turquoise, arranged as a miniature playable level with open channels between them. Elevated three-quarter orthographic view shows the entire platform with generous negative space. Broad simplified geometry, selective faceting, flat colors, clean silhouettes, soft ambient occlusion and a subtle shadow beneath the slab. Suspend an ivory crescent moon and sparse stars above. No boat, characters, lighthouse, horizon, text or watermark.

## Scene 2 prompt: guidance

> Environment only. Original polished isometric fantasy-adventure game diorama on a seamless warm grey-white studio background. Preserve the exact square ocean platform, elevated three-quarter orthographic camera and wave layout from Scene 1. The cobalt water becomes calmer, revealing broad navigable channels between sweeping waves. Add a rocky lighthouse island near the far edge. Its warm ivory beam traces a clear route across the water while clouds begin separating. Two-tone cel shading, rhythmic curves, restrained painterly gradients, soft ambient occlusion and subtle grounding shadow. No boat, characters, map, text or watermark.

## Scene 3 prompt: clearing dawn

> Environment only. Continue the isometric fantasy-adventure ocean diorama from Scene 2 on a seamless warm grey-white studio background. Preserve the square platform, elevated three-quarter orthographic camera, lighthouse island and wave positions. Transform night into clearing dawn: calmer turquoise water, lower rounded waves, widening open channels, retreating cobalt clouds and a warm rising sun suspended above the far edge. The lighthouse beam fades in daylight. Two-tone cel shading, rhythmic low-poly curves, saturated color families, restrained painterly gradients, soft ambient occlusion and grounding shadow. No boat, characters, map, text or watermark.

### Scene 3 composite edit prompt

> Transform into Scene 3: clearing dawn. Preserve slab dimensions, framing, boat, founder, lighthouse, clouds, stars and deep-blue background. Change conditions only: soften the waves, brighten water toward turquoise and open broad channels. Add a warm rising sun near the far edge with restrained golden light; separate clouds and dim the lighthouse beam as daylight strengthens. Maintain the polished isometric fantasy-adventure style, low-poly curves, two-tone cel shading, painterly gradients and ambient occlusion. Leave open water for later assets. No new boats, characters, text, logos or watermark.

## Scene 4 prompt: bright calm day

> Environment only. Reveal a wider isometric fantasy-adventure ocean world on a seamless warm grey-white studio background. A much higher and farther three-quarter orthographic camera expands the square platform into a connected archipelago. Bright turquoise water, calm rhythmic swells and broad routes create space for a fleet. The lighthouse becomes one landmark among welcoming harbors and open channels. Golden sun, sparse ivory clouds, polished low-poly curves, two-tone cel shading, saturated colors, soft ambient occlusion and restrained grounding shadows. No boats, characters, text or watermark.

### Scene 4 fleet composite prompt

> Transform into Scene 4, the fleet reveal. Raise the camera 15 degrees into an overhead three-quarter orthographic view while retaining isometric depth. Apply an internal pinch zoom out: keep the island slab prominent, expand the calm turquoise ocean within it, and make the original boat smaller. Reveal nine varied coordinated sailing boats following open routes around it. Keep the lighthouse as a distant landmark and add welcoming harbor islands. Bright daylight, golden sun, sparse ivory clouds, low-poly curves and two-tone cel shading. No text, logos, pirates, weapons or watermark.

## Camera pullback and outpainting prompt

Use this terminology when the scene must become smaller in frame without changing its internal proportions:

> Perform a true camera dolly pullback with outpainting, like pinching to zoom out. Preserve the exact island geometry, proportions, thickness, waves, boat, founder, moon, clouds, stars, lighting, palette and deep-blue background. Do not redesign or rearrange anything. Uniformly reduce the complete diorama to about 55% of the frame, revealing the full sea platform and more surrounding starry background on every side. Keep the same 16:9 aspect ratio and viewing angle. Maintain all spatial relationships; the boat shrinks only because the camera view widens. Add no objects or text.

Key terms: `camera dolly pullback`, `outpainting`, `uniformly reduce the complete diorama`, `preserve exact geometry and spatial relationships`, and `expand the existing background`.

## Internal world scale zoom out

Use this when the island slab and background must remain fixed while the content contained on its top surface becomes smaller and reveals a larger world:

> Edit only the world contained on the island’s top ocean surface. Lock the island’s outer dimensions, position, thickness, perspective, canvas framing, moon, clouds, stars, deep-blue background, lighting and palette exactly. Keep the island and background unchanged. Reinterpret its top as a larger ocean area: shrink the boat and founder to 25% of their current size while preserving their design, then reveal substantially more sea and broad waves around them within the same island boundaries. This is an internal world-scale zoom-out, not a camera pullback. Add no text or objects.

Key terms: `internal world scale zoom out`, `edit only the world contained on the surface`, `lock the outer platform dimensions`, and `expand the environment within the same boundaries`.
