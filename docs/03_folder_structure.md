# Folder Structure

## Project: RiddhiSiddhi Creations — Website

**Author:** Aishu (for Siddhi Bhargava)
**Version:** 1.0
**Status:** Draft — Pending Approval

---

## 1. Overview

This is a React + Vite + TypeScript project. The structure is organized by feature and
page, keeping components, styles, and assets close to where they are used.
Shared/reusable pieces live at the top level under `src/components`.

---

## 2. Root Structure

```
riddhisiddhi-creations/
├── public/
│   ├── favicon.ico
│   └── og-image.jpg               # OpenGraph preview image for social sharing
├── src/
│   ├── assets/                    # All static media
│   ├── components/                # Reusable UI components
│   ├── pages/                     # One folder per page
│   ├── styles/                    # Global styles and Tailwind config
│   ├── data/                      # Static content data files
│   ├── hooks/                     # Custom React hooks
│   ├── types/                     # Shared TypeScript types
│   ├── App.tsx                    # Root component with routing
│   └── main.tsx                   # Vite entry point
├── .env                           # Environment variables (Formspree endpoint)
├── .eslintrc.json
├── .prettierrc
├── index.html
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## 3. Assets

```
src/assets/
├── images/
│   ├── gallery/                   # Henna portfolio photos (WebP + JPG fallback)
│   ├── instagram/                 # Hand-picked Instagram post thumbnails
│   ├── hero/                      # Hero section background or feature image
│   └── about/                     # Siddhi's portrait or studio photos
├── videos/
│   └── reels/                     # Short henna process clips (3-6 videos)
└── icons/
    └── lotus.svg                  # Lotus motif used across the site
```

---

## 4. Components

```
src/components/
├── layout/
│   ├── Navbar.tsx                 # Top navigation bar
│   ├── Footer.tsx                 # Site footer with links and contact info
│   └── PageWrapper.tsx            # Consistent page padding and max-width wrapper
├── ui/
│   ├── Button.tsx                 # Primary and secondary CTA button variants
│   ├── SectionHeading.tsx         # Reusable gold-accented section title
│   ├── Divider.tsx                # Thin gold decorative divider
│   └── LotusIcon.tsx              # SVG lotus icon component
├── home/
│   ├── Hero.tsx                   # Hero section with tagline and CTA
│   ├── ValuePillars.tsx           # Organic / Custom / Inspired three-column strip
│   ├── OccasionsStrip.tsx         # Occasions Siddhi serves
│   ├── GalleryPreview.tsx         # 6-image preview grid linking to Gallery page
│   ├── Testimonials.tsx           # Curated client testimonials carousel
│   ├── BookingSteps.tsx           # 3-step booking process explainer
│   └── HomeCTA.tsx                # Final CTA block before footer
├── gallery/
│   ├── PhotoGrid.tsx              # Masonry/filterable photo gallery
│   ├── Lightbox.tsx               # Full-screen image viewer
│   ├── VideoCard.tsx              # Individual video preview with poster + play
│   └── InstagramGrid.tsx          # 9-image static Instagram preview grid
├── services/
│   └── ServiceCard.tsx            # Individual service card (name, time, price note)
├── contact/
│   └── InquiryForm.tsx            # Formspree-connected inquiry form
└── about/
    └── ArtistProfile.tsx          # Siddhi's story and philosophy section
```

---

## 5. Pages

```
src/pages/
├── HomePage/
│   ├── index.tsx
│   └── HomePage.module.css        # Page-specific overrides if needed
├── GalleryPage/
│   ├── index.tsx
│   └── GalleryPage.module.css
├── ServicesPage/
│   ├── index.tsx
│   └── ServicesPage.module.css
├── AboutPage/
│   ├── index.tsx
│   └── AboutPage.module.css
└── ContactPage/
    ├── index.tsx
    └── ContactPage.module.css
```

---

## 6. Data

```
src/data/
├── services.ts                    # Service list (name, description, time, price note)
├── testimonials.ts                # Curated testimonial objects (name, text, occasion)
├── gallery.ts                     # Gallery image metadata (src, alt, category)
├── instagramPosts.ts              # Instagram grid items (image src, post URL)
└── occasions.ts                   # Occasions list for the strip section
```

---

## 7. Styles

```
src/styles/
├── globals.css                    # Base resets and global typography
└── theme.css                      # CSS custom properties for brand tokens
```

---

## 8. Types

```
src/types/
├── gallery.ts                     # GalleryImage, VideoItem types
├── service.ts                     # Service type
├── testimonial.ts                 # Testimonial type
└── instagram.ts                   # InstagramPost type
```

---

## 9. Hooks

```
src/hooks/
└── useMediaQuery.ts               # Responsive breakpoint detection hook
```

---

## 10. Notes

- All data is stored as typed TypeScript files in `src/data/`, not hardcoded inside components.
  This makes future content updates easy without touching component logic.
- CSS Modules are available per page for any overrides that Tailwind cannot cleanly handle.
- The `.env` file stores only the Formspree form endpoint URL. No secrets are committed to Git.
- All SVG icons are imported as React components, not as `<img>` tags, so they can be styled
  with Tailwind classes.
