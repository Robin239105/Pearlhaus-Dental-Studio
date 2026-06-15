# Pearlhaus Dental Studio

A modern, premium dental clinic website built for Pearlhaus Dental Studio — a boutique cosmetic and general dentistry practice located in Sydney CBD.

![React](https://img.shields.io/badge/React-18-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-5.4-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4) ![Vite](https://img.shields.io/badge/Vite-5-646CFF)

## Overview

Pearlhaus is a fully responsive, single-page application featuring 30+ pages including treatment guides, team profiles, a multi-step booking system, patient intake forms, blog articles, and an emergency dental portal. The design follows a premium wellness aesthetic with smooth animations and accessibility-first principles.

## Tech Stack

- **Framework:** React 18 with TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3.4
- **Routing:** React Router DOM v6
- **Forms:** React Hook Form + Zod validation
- **Animations:** Framer Motion
- **Carousel:** Embla Carousel
- **Icons:** Lucide React

## Features

- Multi-step online booking system with treatment selection, doctor picker, calendar, and patient details
- Before/after smile gallery with interactive comparison slider
- Emergency dental portal with priority request form
- New patient registration and medical history forms
- Blog with category filtering and related articles
- Team profiles with qualifications, awards, and available days
- Mega menu navigation with live search
- Fully responsive design (375px to 1440px+)
- Scroll-to-top button
- SEO optimized with structured data (JSON-LD)
- Accessibility compliant with `prefers-reduced-motion` support

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

```bash
git clone https://github.com/Robin239105/pearlhaus.git
cd pearlhaus
npm install
```

### Development

```bash
npm run dev
```

Opens at [http://localhost:5173](http://localhost:5173)

### Build

```bash
npm run build
```

Output is in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── assets/          # Static images (hero, map)
├── components/
│   ├── booking/     # Multi-step booking flow
│   ├── forms/       # Contact, emergency, patient forms
│   ├── gallery/     # Before/after grid and lightbox
│   ├── home/        # Homepage sections (hero, services, testimonials)
│   ├── layout/      # Navbar, Footer, PageWrapper, MegaMenu
│   └── ui/          # Reusable components (Button, Modal, Accordion)
├── data/            # Static data (treatments, team, blog, gallery, FAQs)
├── hooks/           # Custom hooks (useScrollReveal, useBeforeAfter)
├── lib/             # Utilities (cn helper)
├── pages/           # All route pages
└── types/           # TypeScript interfaces
```

## Contributor

**Al Amin Robin** — [@Robin239105](https://github.com/Robin239105)

## License

This project is proprietary. All rights reserved.
