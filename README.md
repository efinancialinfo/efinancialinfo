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

.
├── public/                  # Static assets (images, videos, etc.)
├── src/
│   └── app/
│       ├── (common)/        # Common pages (About, Contact, FAQ, etc.)
│       └── api/             # API routes (contact, send-tax-form)
├── .env                     # Environment variables
├── package.json             # Project metadata and scripts
├── tailwind.config.ts       # Tailwind CSS configuration
├── next.config.ts           # Next.js configuration
└── ...



| Command         | Description                  |
| --------------- | ---------------------------- |
| `npm run dev`   | Start the development server |
| `npm run build` | Build the app for production |
| `npm run start` | Start the production server  |
| `npm run lint`  | Run ESLint for code linting  |



## Environment Variables

Create a .env file in the root directory and add the following:

SMTP_HOST=your_smtp_host //
SMTP_PORT=your_smtp_port //
SMTP_USER=your_smtp_user //
SMTP_PASS=your_smtp_password //
ADMIN_EMAIL=your_admin_email //

These are used for email functionality in API routes.

## Tech Stack

Frontend: Next.js, React, TypeScript, Tailwind CSS, Ant Design
State Management: Redux Toolkit
Backend / API: Node.js, Nodemailer (for email API routes)
Validation: Zod
Rich Text Editing: Jodit React

Deployment

The easiest way to deploy your Next.js app is using Vercel
, the platform from the creators of Next.js.

Live Link: 


