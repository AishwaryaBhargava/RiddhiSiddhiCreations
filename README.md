# RiddhiSiddhi Creations — Website

**For Siddhi Bhargava**
**Built by Aishwarya Bhargava**

---

## What This Is

A multi-page marketing website for RiddhiSiddhi Creations, a professional henna
artistry business run by Siddhi Bhargava. The site serves as Siddhi's primary
digital presence, helping potential clients discover her work, understand her
services, and reach out for bookings.

---

## Live URL

Deployed on Vercel at: (to be added after launch)

---

## Pages

| Page         | Route      | Purpose                                              |
|--------------|------------|------------------------------------------------------|
| Home         | /          | First impression, portfolio preview, social proof    |
| Gallery      | /gallery   | Full photo grid, video previews, Instagram grid      |
| Services     | /services  | Service offerings, pricing philosophy, travel policy |
| About        | /about     | Siddhi's story, training, and philosophy             |
| Contact      | /contact   | Booking inquiry form and review submission form      |
| Reviews      | /reviews   | All approved client reviews (4 stars and above)      |

---

## Tech Stack

| Layer         | Choice                          |
|---------------|---------------------------------|
| Framework     | React + Vite + TypeScript       |
| Styling       | Tailwind CSS + CSS Modules      |
| Routing       | React Router v6                 |
| Animations    | Framer Motion                   |
| Forms         | React Hook Form + Zod           |
| Form delivery | Formspree                       |
| Font          | Outfit (Google Fonts)           |
| Hosting       | Vercel                          |

---

## Brand Tokens

| Token   | Value   | Usage                              |
|---------|---------|------------------------------------|
| Black   | #0E0E0E | Hero, navbar, footer               |
| Gold    | #C9A24D | Accents only: icons, borders, CTAs |
| Ivory   | #FAF7F2 | Content sections, form backgrounds |
| Gray    | #5F5F5F | Body text                          |
| Font    | Outfit  | All headings and body text         |

---

## Project Structure

```
riddhisiddhi-creations/
├── public/
├── src/
│   ├── assets/
│   │   ├── images/
│   │   ├── videos/
│   │   └── icons/
│   ├── components/
│   │   ├── layout/
│   │   ├── ui/
│   │   ├── home/
│   │   ├── gallery/
│   │   ├── services/
│   │   ├── contact/
│   │   ├── reviews/
│   │   └── about/
│   ├── pages/
│   │   ├── HomePage/
│   │   ├── GalleryPage/
│   │   ├── ServicesPage/
│   │   ├── AboutPage/
│   │   ├── ContactPage/
│   │   └── ReviewsPage/
│   ├── data/
│   ├── hooks/
│   ├── types/
│   ├── styles/
│   ├── App.tsx
│   └── main.tsx
├── .env
├── tailwind.config.ts
├── tsconfig.json
└── vite.config.ts
```

---

## Environment Variables

Create a `.env` file in the root of the project with the following:

```
VITE_FORMSPREE_INQUIRY_URL=your_inquiry_form_id_here
VITE_FORMSPREE_REVIEW_URL=your_review_form_id_here
```

These values are available from the Formspree dashboard after creating the forms.
Never commit the `.env` file to Git. Both variables must also be added manually
in the Vercel project settings before deploying.

---

## How Forms Work

### Inquiry Form (Contact page)
When a visitor fills out the booking inquiry form, the submission is sent to
Formspree which delivers it as an email to Siddhi's inbox. She follows up
directly via phone or text.

### Review Form (Contact page, bottom section)
When a past client submits a review, it is delivered to Siddhi's inbox via
Formspree. Siddhi reads the review and rating. If she approves it for display,
it is manually added to `src/data/testimonials.ts`. Only reviews with a rating
of 4 or above are added. There is no automated approval flow.

---

## How to Run Locally

1. Clone the repository
2. Run `npm install`
3. Create a `.env` file and add both Formspree URLs
4. Run `npm run dev`
5. Open `http://localhost:5173` in your browser

---

## How to Deploy

1. Push code to the `main` branch on GitHub
2. Connect the repository to Vercel
3. Add both environment variables in Vercel project settings
4. Vercel will auto-deploy on every push to `main`

---

## Development Pipeline

The build is organized into 10 phases. See `04_dev_pipeline.md` for the full
phase-by-phase breakdown with goals, tasks, acceptance criteria, and testing
instructions.

| Phase | Name                                  |
|-------|---------------------------------------|
| 0     | Project Initialization                |
| 1     | Layout Components                     |
| 2A    | Home Page: Hero and Value Pillars     |
| 2B    | Home Page: Gallery Preview and Reviews|
| 2C    | Home Page: Booking Steps and CTA      |
| 3A    | Gallery Page: Photo Grid and Lightbox |
| 3B    | Gallery Page: Videos and Instagram    |
| 4     | Services and Pricing Page             |
| 5     | About Page                            |
| 6     | Contact Page and Inquiry Form         |
| 7     | Reviews Page and Review Form          |
| 8     | SEO, Accessibility, and Performance   |
| 9     | Deployment and Launch                 |

---

## Post-MVP Backlog

These features are intentionally out of scope for the initial launch:

- Custom domain connection
- Online booking calendar
- Payment or deposit collection
- Admin dashboard or CMS
- Automated review approval flow
- Google Reviews sync
- Multi-language support

---

## Contact

Business: RiddhiSiddhi Creations
Artist: Siddhi Bhargava
Instagram: @riddhisiddhicreations22
