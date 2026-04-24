# Tech Stack

## Project: RiddhiSiddhi Creations — Website

**Author:** Aishu (for Arpana Bhargava)
**Version:** 1.0
**Status:** Draft — Pending Approval

---

## 1. Overview

This is a static multi-page marketing website. There is no backend, no database,
and no user authentication in the MVP. All dynamic behavior is handled client-side
or via third-party services.

---

## 2. Frontend

| Layer        | Choice                          | Reason                                                                 |
|--------------|---------------------------------|------------------------------------------------------------------------|
| Framework    | React + Vite                    | Fast dev server, clean build output, familiar stack                    |
| Language     | TypeScript                      | Type safety, better maintainability                                    |
| Styling      | Tailwind CSS                    | Utility-first, easy to maintain brand tokens, mobile-first by default  |
| State        | Zustand                         | Lightweight; used only if local UI state becomes complex               |
| Routing      | React Router v6                 | Client-side routing for multi-page navigation                          |
| Animations   | Framer Motion                   | Smooth page transitions and scroll-reveal effects                      |
| Icons        | Lucide React                    | Clean, consistent icon set                                             |
| Font         | Outfit (Google Fonts)           | Locked brand font; loaded via @fontsource or Google Fonts CDN          |

---

## 3. Forms

| Layer           | Choice      | Reason                                                                         |
|-----------------|-------------|--------------------------------------------------------------------------------|
| Form handling   | Formspree   | No backend needed; submissions delivered to Arpana's email automatically       |
| Form validation | React Hook Form + Zod | Client-side validation before submission; clear error states         |

---

## 4. Media

| Layer           | Choice                        | Reason                                                              |
|-----------------|-------------------------------|---------------------------------------------------------------------|
| Images          | Local assets (optimized)      | Real media is available; kept in /src/assets                        |
| Image format    | WebP (with JPG fallback)      | Best compression and quality for henna photography                  |
| Video           | HTML5 video (local or hosted) | Short curated clips; muted, manual play, poster thumbnail           |
| Optimization    | Vite image plugin or manual   | Compress before commit; keep page load fast                         |

---

## 5. Hosting and Deployment

| Layer       | Choice   | Reason                                                                 |
|-------------|----------|------------------------------------------------------------------------|
| Frontend    | Vercel   | Free tier, instant deploys from GitHub, excellent performance globally |
| Domain      | Custom   | Connected via Vercel DNS settings (domain to be provided by Arpana)   |
| SSL         | Vercel   | Automatic HTTPS out of the box                                         |

---

## 6. Developer Tooling

| Tool            | Choice                    | Reason                                        |
|-----------------|---------------------------|-----------------------------------------------|
| Package manager | npm                       | Default, no extra setup                       |
| Linting         | ESLint                    | Code quality enforcement                      |
| Formatting      | Prettier                  | Consistent code style                         |
| Version control | Git + GitHub              | Source control and deployment trigger         |

---

## 7. Brand Tokens (Locked)

These are defined once in the Tailwind config and used everywhere.
No raw color values or font names should appear outside of this config.

### Colors

| Token        | Value     | Usage                                      |
|--------------|-----------|--------------------------------------------|
| black        | #0E0E0E   | Hero, navbar, footer backgrounds           |
| gold         | #C9A24D   | Accents only: icons, borders, CTAs         |
| ivory        | #FAF7F2   | Content sections, form backgrounds         |
| gray         | #5F5F5F   | Body text                                  |

### Typography

| Token      | Value               | Usage                          |
|------------|---------------------|--------------------------------|
| font-sans  | Outfit              | All headings and body text     |
| Headings   | weight 500 - 600    | Section titles, hero text      |
| Body       | weight 300 - 400    | Paragraphs, labels, captions   |

---

## 7b. Instagram Preview Grid

No API or third-party service is used for the Instagram section.

| Layer         | Approach                                                                 |
|---------------|--------------------------------------------------------------------------|
| Images        | Hand-picked posts downloaded and stored as local assets                  |
| Links         | Each image has a hardcoded direct URL to its Instagram post              |
| Interaction   | Hover overlay effect; clicking opens the post in a new tab               |
| Updates       | Done manually by swapping image files and updating the post URLs         |

This keeps the site fully static, reliable, and free from Meta API dependencies.

---

## 8. What We Are NOT Using

- No Next.js (not needed for a static site of this size)
- No backend or API server
- No database
- No authentication
- No CMS
- No Tailwind UI or shadcn (custom components only, built to brand)
- No TypeScript strict mode exceptions; all types must be explicit

---

## 9. Third-Party Services Summary

| Service    | Purpose                        | Cost         |
|------------|--------------------------------|--------------|
| Formspree  | Inquiry form + email delivery  | Free (50/mo) |
| Vercel     | Hosting + deployment           | Free tier    |
| Google Fonts | Outfit font delivery         | Free         |
