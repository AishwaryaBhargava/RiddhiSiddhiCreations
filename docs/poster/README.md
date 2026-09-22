# Landscape poster prototype

`poster.html` is a fixed 1800 x 1200 px canvas (a 3:2 landscape sheet, e.g. 36 x 24 in).
Open it in any browser; it scales to fit the window. Query parameters:

- `?figure=solo` (default) - half-body cut-out with the henna cone, from the vertical poster
- `?figure=full` - full-length cut-out from the other vertical poster
- `?figure=family` - Siddhi lifted from the family photo (the daughter she is holding comes with her)

Print with the browser's print dialog; `@page` is set to the poster size with no margins.
`poster-*.jpg` are 3600 x 2400 renders of each variant.

Assets in `assets/` were produced from `src/assets/Poster Material/`: figures with rembg
(background removal), line-art motifs by keying out the light wash. All sources are
low-resolution WhatsApp images, so the final print should be rebuilt from the originals.
