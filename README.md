
# Project Title

A brief description of what this project does and who it's for

# EFINANCIAL

**EFINANCIAL** is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).  

---

## Table of Contents

- [Getting Started](#getting-started)
- [Project Structure](#project-structure)
- [Available Scripts](#available-scripts)
- [Environment Variables](#environment-variables)
- [Tech Stack](#tech-stack)
- [Deployment](#deployment)
- [Learn More](#learn-more)

## Getting Started

First, install dependencies:

```bash
npm install
# or
yarn install
# or
pnpm install

```

Start the development server:
```bash
npm run dev
```

Open http://localhost:3000  
with your browser to see the app in action.

You can start editing the page by modifying src/app/(common)/page.tsx. The page auto-updates as you edit the file.

## Project Structure

```
├── src/
│   ├── app/                         # Next.js app directory
│   │   ├── (adminDashboard)/       # Admin dashboard routes
│   │   ├── (auth)/                 # Authentication routes
│   │   ├── (common)/               # Public pages
│   │   ├── api/                    # API routes
│   │   ├── globals.css             # Global styles
│   │   ├── layout.tsx              # Root layout
│   │   └── loading.tsx             # Loading UI
│   │
│   ├── assets/                     # Static assets
│   │   ├── BookAppointmentPage/    # Appointment page assets
│   │   ├── consulting-page/        # Consulting page assets
│   │   ├── home/                   # Homepage assets
│   │   ├── icon/                   # Icon assets
│   │   ├── real-estate/           # Real estate page assets
│   │   └── tax-preparation/       # Tax preparation assets
│   │
│   ├── components/                 # React components
│   │   ├── auth/                   # Authentication components
│   │   ├── book-appointment/       # Booking components
│   │   ├── common/                 # Shared components
│   │   ├── faqs/                   # FAQ components
│   │   ├── Home/                   # Homepage components
│   │   ├── pages-components/       # Page-specific components
│   │   ├── shared/                 # Shared utilities
│   │   └── ui/                     # UI components
│   │
│   ├── interface/                  # TypeScript interfaces
│   ├── lib/                        # Library code and providers
│   ├── redux/                      # Redux state management
│   │   ├── api/                    # API slices
│   │   ├── features/               # Redux features
│   │   ├── hooks/                  # Custom Redux hooks
│   │   └── service/                # API services
│   │
│   └── utils/                      # Utility functions
│
├── public/                         # Static public assets
├── .env                           # Environment variables
├── package.json                   # Project dependencies
├── tailwind.config.ts            # Tailwind CSS config
└── next.config.ts                # Next.js config
```

This Next.js project follows a feature-based architecture with clear separation of concerns:

- `app/`: Contains all Next.js pages and API routes using the App Router
- `assets/`: Stores all static assets organized by feature
- `components/`: React components organized by feature and common utilities
- `interface/`: TypeScript type definitions
- `lib/`: Shared library code and providers
- `redux/`: State management using Redux Toolkit
- `utils/`: Helper functions and utilities

Each feature (like auth, booking, etc.) has its own directory containing all related components and assets, making the codebase modular and maintainable.



| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Build the app for production |
| `npm run start` | Start the production server  |
| `npm run lint`  | Run ESLint for code linting  |



## Environment Variables

Create a .env file in the root directory and add the following:

<<<<<<< HEAD
- `SMTP_HOST=your_smtp_host`
- `SMTP_PORT=your_smtp_port`
- `SMTP_USER=your_smtp_user`
- `SMTP_PASS=your_smtp_password`
- `ADMIN_EMAIL=your_admin_email`
=======
SMTP_HOST=your_smtp_host //
SMTP_PORT=your_smtp_port //
SMTP_USER=your_smtp_user //
SMTP_PASS=your_smtp_password //
ADMIN_EMAIL=your_admin_email //
>>>>>>> ee6571fcc8ca80ad301eebb7d6f59daaec523c74

These are used for email functionality in API routes.

## Tech Stack

- Frontend: Next.js, React, TypeScript, Tailwind CSS, Ant Design
- State Management: Redux Toolkit
- Backend / API: Node.js, Nodemailer (for email API routes) 
- Validation: Zod
- Rich Text Editing: Jodit React

Deployment

The easiest way to deploy your Next.js app is using Vercel
, the platform from the creators of Next.js.

Live Link: 


