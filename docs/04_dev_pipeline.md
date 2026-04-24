# Dev Pipeline

## Project: RiddhiSiddhi Creations — Website

**Author:** Aishu (for Arpana Bhargava)
**Version:** 2.0
**Status:** Draft — Pending Approval

---

## Global Decisions (Locked)

- Framework: React + Vite + TypeScript
- Styling: Tailwind CSS + CSS Modules (per page, for overrides only)
- Routing: React Router v6
- Animations: Framer Motion
- Forms: React Hook Form + Zod + Formspree
- Hosting: Vercel (free .vercel.app domain for MVP; custom domain is post-MVP)
- No backend, no database, no authentication
- Reviews: submitted via Formspree, manually curated by adding to testimonials.ts

---

## Phase 0 — Project Initialization

### Goal

Create a clean, working project foundation with all tooling configured before
any UI is written.

### What We Do

- [ ] Initialize a new Vite project with React and TypeScript template
- [ ] Install and configure Tailwind CSS
- [ ] Install React Router v6
- [ ] Install Framer Motion
- [ ] Install React Hook Form and Zod
- [ ] Install Lucide React
- [ ] Install Outfit font via @fontsource/outfit
- [ ] Configure ESLint and Prettier
- [ ] Create the full folder structure as defined in the folder structure document
- [ ] Add brand tokens (colors, font) to tailwind.config.ts
- [ ] Add CSS custom properties to src/styles/theme.css
- [ ] Add global resets and base typography to src/styles/globals.css
- [ ] Create .env file with Formspree endpoint placeholders (inquiry + review forms)
- [ ] Add .env to .gitignore
- [ ] Create GitHub repository: riddhisiddhi-creations
- [ ] Make initial commit with project scaffold

### Acceptance Criteria

- [ ] Running npm run dev starts the Vite dev server with no errors
- [ ] Tailwind utility classes apply correctly to a test element
- [ ] Brand colors (#0E0E0E, #C9A24D, #FAF7F2, #5F5F5F) are accessible as
      Tailwind tokens (e.g., bg-black, text-gold, bg-ivory)
- [ ] Outfit font loads and renders on a test element
- [ ] ESLint and Prettier run without errors on scaffold files
- [ ] GitHub repository exists with initial commit pushed

### Outcome

A fully configured, empty project scaffold ready for component and page development.

### Notes

- Do not write any UI or page content in this phase
- Tailwind config must define all brand tokens under the extend key so default
  Tailwind utilities are not overridden
- The .env file should contain two placeholders:
  VITE_FORMSPREE_INQUIRY_URL=your_inquiry_form_id_here
  VITE_FORMSPREE_REVIEW_URL=your_review_form_id_here

### Testing

- Dev server starts cleanly on npm run dev
- A single test div with Tailwind classes confirms colors and font render correctly
- ESLint reports zero errors on scaffold

### Evaluation

- Zero console errors on startup
- All brand tokens resolve to correct hex values in browser devtools

---

## Phase 1 — Layout Components

### Goal

Build the shared structural components that wrap every page, with full
responsiveness and brand styling.

### What We Do

- [ ] Build Navbar.tsx
      - Logo: lotus icon + RiddhiSiddhi Creations wordmark
      - Navigation links: Home, Gallery, Services, About, Contact, Reviews
      - Mobile hamburger menu with slide-out drawer
      - Sticky on scroll with subtle background transition
- [ ] Build Footer.tsx
      - Business name and tagline
      - Navigation links
      - Instagram handle linking to @riddhisiddhicreations22
      - Phone number: 484-995-2444
      - Copyright line
- [ ] Build PageWrapper.tsx
      - Consistent horizontal padding and max-width container
      - Used by every page as the outermost wrapper
- [ ] Build Button.tsx
      - Primary variant: gold background, dark text
      - Secondary variant: gold border, transparent background
      - Accepts href prop for anchor behavior and onClick for actions
- [ ] Build SectionHeading.tsx
      - Gold accent line above the heading
      - Accepts title and optional subtitle props
- [ ] Build Divider.tsx
      - Thin horizontal gold decorative line
- [ ] Build LotusIcon.tsx
      - SVG lotus imported as a React component
      - Accepts size and color props
- [ ] Set up React Router in App.tsx with routes for all six pages
- [ ] Add Framer Motion page transition wrapper in App.tsx

### Acceptance Criteria

- [ ] Navbar renders correctly on mobile (hamburger) and desktop (horizontal links)
- [ ] Hamburger menu opens and closes smoothly on mobile
- [ ] Footer renders all content and all links are functional
- [ ] PageWrapper applies consistent padding across all screen sizes
- [ ] Button variants render correctly with hover states
- [ ] React Router navigates between all pages without full page reload
- [ ] Page transitions animate smoothly between routes
- [ ] No layout breaks at 320px, 768px, or 1280px viewport widths

### Outcome

A complete, reusable layout shell that every page will be built inside.

### Notes

- Navbar background: #0E0E0E; active link highlighted in gold
- Mobile drawer overlays the page, it does not push content
- All navigation links are internal routes except the Instagram handle in the footer

### Testing

- Resize browser from 320px to 1440px and confirm Navbar and Footer reflow correctly
- Click every nav link and confirm correct page renders
- Open and close hamburger menu on a narrow viewport
- Confirm page transition animation plays on route change

### Evaluation

- Zero layout overflow at any tested breakpoint
- All six routes resolve to correct page components
- Hamburger menu open/close feels instant (under 200ms)

---

## Phase 2A — Home Page: Hero and Value Pillars

### Goal

Build the top half of the Home page covering the hero section and value pillars.

### What We Do

- [ ] Build Hero.tsx
      - Full-viewport dark section
      - Lotus icon centered above the brand name
      - Tagline: "Exquisite Henna Art for Your Special Moments"
      - Sub-tagline: "By Arpana Bhargava"
      - Primary CTA button: "Book Your Appointment" linking to Contact page
      - Scroll-reveal entrance animation
- [ ] Build ValuePillars.tsx
      - Three columns: Organic and Natural, Custom Designs, Inspired Creations
      - Small lotus icon above each pillar
      - Short descriptor text under each
- [ ] Build OccasionsStrip.tsx
      - Horizontal strip listing occasions Arpana serves
      - Ivory background, gold accents
- [ ] Assemble these three sections in HomePage/index.tsx

### Acceptance Criteria

- [ ] Hero renders with logo, tagline, sub-tagline, and CTA button
- [ ] CTA button navigates to the Contact page
- [ ] Value pillars render all three columns with icons and text
- [ ] Occasions strip renders all occasion labels
- [ ] All three sections fully responsive at 320px, 768px, and 1280px
- [ ] Scroll-reveal animation plays correctly on page load

### Outcome

The top fold of the Home page is complete and makes a strong first impression.

### Notes

- Hero background should use real media, not a placeholder
- Occasion labels should be pulled from occasions.ts, not hardcoded

### Testing

- View on mobile (375px), tablet (768px), and desktop (1280px)
- Click CTA and confirm navigation to Contact page
- Confirm scroll-reveal animation triggers on load

### Evaluation

- Zero layout breaks at any tested breakpoint
- CTA routes correctly
- No console errors

---

## Phase 2B — Home Page: Gallery Preview and Testimonials

### Goal

Build the social proof and portfolio preview sections of the Home page.

### What We Do

- [ ] Build GalleryPreview.tsx
      - 6-image grid pulling from gallery.ts data file
      - "View Full Gallery" CTA button linking to Gallery page
- [ ] Build Testimonials.tsx
      - Renders testimonial cards from testimonials.ts
      - Shows only reviews with rating 4 or above
      - Displays client name, occasion, rating, and review text
      - Gold border card styling
      - Shows a maximum of 3 cards on the Home page
      - "Read All Reviews" link below the cards navigating to the Reviews page

### Acceptance Criteria

- [ ] Gallery preview renders 6 images from gallery.ts
- [ ] Gallery preview CTA links to Gallery page
- [ ] Testimonials render from testimonials.ts, not hardcoded
- [ ] Only testimonials with rating 4 or above are shown
- [ ] Maximum 3 testimonials shown on Home page
- [ ] "Read All Reviews" link navigates to Reviews page
- [ ] Both sections fully responsive at all breakpoints

### Outcome

Visitors can see portfolio work and read real client reviews directly on the Home page.

### Notes

- Testimonial filtering by rating is done inside Testimonials.tsx by reading
  the rating field and filtering out anything below 4
- If fewer than 3 approved testimonials exist, the component renders however
  many are available without breaking layout

### Testing

- Add a test testimonial with rating 3 to testimonials.ts and confirm it does
  not appear on the Home page
- Confirm gallery images render from data file
- Test both CTAs for correct navigation
- Test "Read All Reviews" link

### Evaluation

- Rating filter works correctly for all edge cases
- Gallery CTA routes correctly
- No broken images

---

## Phase 2C — Home Page: Booking Steps and Final CTA

### Goal

Complete the Home page with the booking process explainer and conversion block.

### What We Do

- [ ] Build BookingSteps.tsx
      - 3-step process: Reach Out, Discuss Your Vision, Get Your Henna
      - Numbered with gold accent styling
- [ ] Build HomeCTA.tsx
      - "Ready to Make Your Occasion Unforgettable?" heading
      - "Get in Touch" button linking to Contact page
- [ ] Finalize HomePage/index.tsx with all seven sections assembled in correct order
- [ ] Add scroll-reveal animations to all remaining sections using Framer Motion

### Acceptance Criteria

- [ ] Booking steps render all three steps with correct numbering and gold accents
- [ ] Final CTA button links to Contact page
- [ ] All seven Home page sections render in correct order
- [ ] Scroll-reveal animations trigger as each section enters the viewport
- [ ] Full Home page responsive at 320px, 768px, and 1280px

### Outcome

The complete Home page is production-ready from hero to footer.

### Notes

- Scroll-reveal must respect prefers-reduced-motion

### Testing

- Scroll through the full page and confirm all animations trigger
- Click final CTA and confirm it routes to Contact page
- Full page review on mobile, tablet, and desktop

### Evaluation

- All seven sections present in correct order
- Both CTAs route to Contact page
- Animations do not cause layout shift or jank
- Lighthouse performance score above 85 on mobile

---

## Phase 3A — Gallery Page: Photo Grid and Lightbox

### Goal

Build the filterable photo gallery with full-screen lightbox viewer.

### What We Do

- [ ] Build PhotoGrid.tsx
      - Filterable by category: All, Bridal, Guest, Festival, Baby Shower
      - Grid layout (masonry or uniform)
      - Images pulled from gallery.ts data file
      - Filter buttons with active gold highlight state
- [ ] Build Lightbox.tsx
      - Opens on image click
      - Full-screen overlay with close button
      - Previous and next navigation arrows
      - Keyboard navigation: Escape to close, arrow keys to navigate
      - Focus trap when open for accessibility

### Acceptance Criteria

- [ ] All images render from gallery.ts
- [ ] Category filter correctly shows and hides images
- [ ] Lightbox opens on image click
- [ ] Lightbox closes on Escape key or close button click
- [ ] Previous and next arrows navigate correctly
- [ ] Focus is trapped inside lightbox when open
- [ ] Fully responsive at all breakpoints

### Outcome

Visitors can browse and explore Arpana's portfolio in an elegant filterable gallery.

### Notes

- All images should be WebP format with JPG fallbacks
- Lazy load all images below the fold

### Testing

- Click each filter and confirm correct images appear
- Open lightbox and navigate with arrows and keyboard
- Press Escape and confirm lightbox closes
- Confirm Tab key stays within lightbox when open

### Evaluation

- Filter updates with no visible delay
- Lightbox opens and closes with no layout shift
- Zero missing or broken images

---

## Phase 3B — Gallery Page: Videos and Instagram Grid

### Goal

Add video previews and the Instagram preview grid to complete the Gallery page.

### What We Do

- [ ] Build VideoCard.tsx
      - Poster thumbnail shown before play
      - Muted by default
      - Play button overlay; clicking starts video
      - No autoplay
- [ ] Build InstagramGrid.tsx
      - 9 images in a 3x3 grid
      - Hover overlay with Instagram icon and subtle dark tint
      - Each image links to its Instagram post URL in a new tab
      - "Follow @riddhisiddhicreations22" CTA below the grid
- [ ] Finalize GalleryPage/index.tsx with all three sections in order:
      Section A: Photo Gallery, Section B: Henna in Motion, Section C: Instagram Preview

### Acceptance Criteria

- [ ] No video autoplays on page load
- [ ] Play button starts video on click
- [ ] Poster image shows before play on all video cards
- [ ] Instagram grid shows all 9 images
- [ ] Hover overlay appears on each Instagram image
- [ ] Each Instagram image opens the correct post URL in a new tab
- [ ] Instagram CTA visible below the grid
- [ ] Full Gallery page responsive at all breakpoints

### Outcome

A complete media hub with photos, videos, and a curated Instagram preview grid.

### Notes

- Video files must be compressed to under 5MB each before adding to the project
- Instagram image URLs stored in instagramPosts.ts

### Testing

- Confirm no autoplay on page load
- Click play on each video card
- Hover each Instagram image and confirm overlay
- Click each Instagram image and confirm correct post opens in new tab

### Evaluation

- No autoplay violations in browser console
- All 9 Instagram links open correct URLs
- All video poster images display before play

---

## Phase 4 — Services and Pricing Page

### Goal

Communicate Arpana's service offerings and pricing philosophy clearly.

### What We Do

- [ ] Build ServiceCard.tsx
      - Service name, description, time estimate, starting price or "Request Quote"
      - Gold accent border styling
- [ ] Build ServicesPage/index.tsx
      - Five service cards: Bridal Henna, Guest Henna, Festivals and Parties,
        Baby Shower, Custom Requests
      - All data pulled from services.ts
- [ ] Build pricing section within ServicesPage
      - Pricing philosophy paragraph
      - What affects pricing: design complexity, duration, occasion, travel
      - Travel policy: available nationwide; travel and accommodation billed separately
      - Disclaimer: final pricing confirmed during inquiry
- [ ] Add CTA at bottom linking to Contact page

### Acceptance Criteria

- [ ] All five service cards render from services.ts
- [ ] Pricing section covers all stated content areas
- [ ] CTA links to Contact page
- [ ] Fully responsive at all breakpoints
- [ ] No service content hardcoded inside components

### Outcome

A clear, honest services and pricing page that reduces hesitation before inquiry.

### Notes

- Arpana must review and approve all service descriptions and pricing language
  before this phase is marked complete
- Use "starting from" language unless Arpana provides exact figures

### Testing

- Confirm all five cards render with correct data from services.ts
- Confirm travel policy and disclaimer are clearly visible
- Test CTA navigation

### Evaluation

- All service data from data file only
- CTA routes correctly
- Zero layout breaks at any breakpoint

---

## Phase 5 — About Page

### Goal

Tell Arpana's story in a warm, personal way that builds trust with first-time visitors.

### What We Do

- [ ] Build ArtistProfile.tsx
      - Personal introduction and background
      - Training and journey
      - Organic henna safety and philosophy
      - Customization philosophy
      - Optional portrait photo
- [ ] Assemble AboutPage/index.tsx with ArtistProfile and a CTA
      linking to the Contact page

### Acceptance Criteria

- [ ] All content sections render correctly
- [ ] Portrait photo displays without distortion at all screen sizes
- [ ] CTA links to Contact page
- [ ] Fully responsive at all breakpoints

### Outcome

A trust-building About page that makes Arpana feel real, credible, and approachable.

### Notes

- All written content must be provided and approved by Arpana before this
  phase is marked complete
- Keep paragraphs short; first-person tone throughout

### Testing

- Read through all content and confirm tone is warm and personal
- Confirm portrait renders correctly at all screen sizes
- Test CTA navigation

### Evaluation

- Content matches Arpana's approved copy
- No image distortion at any breakpoint
- CTA routes correctly

---

## Phase 6 — Contact Page and Inquiry Form

### Goal

Provide a clean inquiry form that collects visitor information and delivers
submissions to Arpana's email via Formspree.

### What We Do

- [ ] Build InquiryForm.tsx
      - Fields: Full Name, Email, Phone Number, Occasion, Event Date,
        Location, Inspiration Link (optional), Message
      - Validation with React Hook Form and Zod
      - On submit: POST to VITE_FORMSPREE_INQUIRY_URL from .env
      - On success: show confirmation message
      - On error: show error message with retry prompt
- [ ] Assemble ContactPage/index.tsx with a short intro paragraph and the form
- [ ] Connect Formspree account for inquiry form and update .env with real endpoint
- [ ] Test a live submission and confirm Arpana receives the email

### Acceptance Criteria

- [ ] All required fields show validation errors if submitted empty
- [ ] Email field rejects invalid format
- [ ] Successful submission shows confirmation message
- [ ] Arpana receives email with all field values after test submission
- [ ] Formspree URL stored in .env, not hardcoded in the component
- [ ] Fully responsive at all breakpoints

### Outcome

A functional inquiry form that reliably delivers visitor submissions to Arpana's inbox.

### Notes

- Formspree free plan: 50 submissions per month, sufficient for MVP
- Always use import.meta.env.VITE_FORMSPREE_INQUIRY_URL in the component
- Arpana must provide her email address to set up the Formspree account

### Testing

- Submit with all fields empty and confirm validation errors appear
- Submit with invalid email and confirm error message
- Submit a valid complete form and confirm success message
- Check inbox and confirm all field values arrived correctly
- Test at 375px, 768px, and 1280px

### Evaluation

- Zero successful submissions that bypass validation
- 100% of valid submissions arrive in Arpana's email
- Form renders cleanly at all breakpoints

---

## Phase 7 — Reviews Page and Review Submission Form

### Goal

Allow past clients to submit reviews and display approved reviews on a dedicated
Reviews page and as a preview on the Home page.

### What We Do

- [ ] Build ReviewForm.tsx and add it to the bottom of ContactPage
      - Fields: Full Name, Occasion, City (optional), Rating (1 to 5 stars),
        Review Text, Permission checkbox
        ("I agree that this review may be displayed on the website")
      - Validation: name, rating, review text, and permission checkbox are required
      - On submit: POST to VITE_FORMSPREE_REVIEW_URL from .env
      - On success: show thank you message
      - On error: show retry prompt
- [ ] Connect Formspree account for review form and update .env with real endpoint
- [ ] Build ReviewCard.tsx
      - Displays client name, occasion, city (if provided), star rating, review text
      - Gold star icons for rating display
- [ ] Build ReviewsPage/index.tsx
      - Section heading and short intro
      - Renders all reviews from testimonials.ts with rating 4 or above
      - Add /reviews route in App.tsx and Reviews link in Navbar
- [ ] Update Testimonials.tsx on Home page to show maximum 3 reviews and include
      a "Read All Reviews" link to the Reviews page
- [ ] Document the curation workflow in a code comment inside testimonials.ts:
      - Arpana receives review via Formspree email
      - If she approves it, it is added to testimonials.ts manually
      - Only reviews with rating 4 or above are added

### Acceptance Criteria

- [ ] Review form renders at the bottom of the Contact page
- [ ] All required fields validate correctly
- [ ] Permission checkbox blocks submission if unchecked
- [ ] Arpana receives review submissions via Formspree email
- [ ] Reviews page renders all entries from testimonials.ts with rating 4 or above
- [ ] Home page testimonials section shows maximum 3 reviews
- [ ] "Read All Reviews" link navigates to Reviews page
- [ ] Star rating displays correctly on ReviewCard
- [ ] Both pages fully responsive at all breakpoints

### Outcome

A complete review collection and display system with no backend, powered by
Formspree for collection and a curated data file for display.

### Notes

- The permission checkbox is legally important; submission must be blocked without it
- Reviews below rating 4 are never added to testimonials.ts; filtering is a curation
  decision, not a component-level filter
- The Reviews page link must be added to the Navbar

### Testing

- Submit review form without checking permission checkbox and confirm it is blocked
- Submit a valid review and confirm Arpana receives the email with all fields
- Add a test review with rating 3 to testimonials.ts and confirm it does not appear
  on the Reviews page or Home page
- Confirm "Read All Reviews" link on Home page navigates to Reviews page

### Evaluation

- Permission checkbox blocks submission 100% of the time when unchecked
- All valid submissions reach Arpana's inbox
- Rating filter works correctly in all tested cases

---

## Phase 8 — SEO, Accessibility, and Performance

### Goal

Polish the site to production-grade quality before deployment.

### What We Do

- [ ] Add unique page title and meta description to every page
- [ ] Add OpenGraph meta tags for social sharing previews
- [ ] Add meaningful alt text to every image across all pages
- [ ] Ensure all interactive elements are keyboard accessible
- [ ] Add aria-labels to icon-only buttons and hamburger menu
- [ ] Respect prefers-reduced-motion for all Framer Motion animations
- [ ] Convert all gallery images to WebP with JPG fallbacks
- [ ] Add lazy loading to all images below the fold
- [ ] Compress all video files to under 5MB each
- [ ] Run Lighthouse audit and address any scores below 85

### Acceptance Criteria

- [ ] Every page has a unique title and meta description
- [ ] OpenGraph preview renders correctly when URL is shared
- [ ] Every image has meaningful alt text
- [ ] All pages pass basic keyboard navigation
- [ ] Lighthouse performance score above 85 on mobile for all pages
- [ ] Lighthouse accessibility score above 90 for all pages
- [ ] No console errors or warnings on any page

### Outcome

A production-ready site that performs well, is discoverable, and is accessible.

### Notes

- Alt text should describe the henna design and body part specifically,
  not just say "henna photo"
- OpenGraph image should be a high-quality crop of Arpana's best work
- prefers-reduced-motion check should disable or simplify Framer Motion animations

### Testing

- Share a page URL and use opengraph.xyz to preview the OpenGraph card
- Tab through every page and confirm focus is always visible
- Run Lighthouse on Home, Gallery, and Contact pages in Chrome DevTools

### Evaluation

- Lighthouse performance above 85 on mobile for all pages
- Lighthouse accessibility above 90 for all pages
- OpenGraph card previews correctly with image, title, and description
- Zero missing alt text across all images

---

## Phase 9 — Deployment and Launch

### Goal

Deploy the site to Vercel and confirm everything works end-to-end in production.

### What We Do

- [ ] Push final code to GitHub main branch
- [ ] Connect GitHub repository to Vercel
- [ ] Add VITE_FORMSPREE_INQUIRY_URL and VITE_FORMSPREE_REVIEW_URL
      as environment variables in Vercel project settings
- [ ] Trigger first production deploy and confirm site is live on .vercel.app URL
- [ ] Do a final end-to-end walkthrough on mobile and desktop
- [ ] Submit a test inquiry on the live site and confirm email delivery
- [ ] Submit a test review on the live site and confirm email delivery
- [ ] Commit and tag the release as v1.0.0

### Acceptance Criteria

- [ ] Site is live and accessible on the Vercel URL
- [ ] HTTPS is active with no certificate warnings
- [ ] All pages load correctly in production
- [ ] Inquiry form works and Arpana receives the test email
- [ ] Review form works and Arpana receives the test email
- [ ] No broken links or missing assets on the deployed site

### Outcome

RiddhiSiddhi Creations website is live, secured, and ready for visitors.

### Notes

- Environment variables set in local .env must be re-entered manually in
  Vercel project settings; they are not read from the committed .env file
- Custom domain connection is a post-MVP step and is not part of this phase
- After launch, walk Arpana through the Formspree dashboard so she knows
  where to view all submissions

### Testing

- Open every page on the live Vercel URL from a real mobile device
- Click every internal link and CTA
- Submit both forms and confirm email receipt for each
- Confirm no .env values are exposed in the browser source

### Evaluation

- Zero 404 errors across all pages and assets
- Both forms deliver 100% of test submissions to Arpana's inbox
- SSL active with no mixed-content warnings
- Site renders correctly on iPhone Safari and Android Chrome
