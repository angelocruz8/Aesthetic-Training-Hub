# Aesthetic Training Hub

Production-ready Next.js starter for the Aesthetic Training Hub platform.

## Stack

- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)

## Prerequisites

- Node.js 18.18 or later
- npm (or yarn, pnpm, bun)

## Setup

1. Clone the repository and enter the project directory:

   ```bash
   cd aesthetic-training-hub
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Start the development server:

   ```bash
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Scripts

| Command         | Description                          |
| --------------- | ------------------------------------ |
| `npm run dev`   | Start the development server         |
| `npm run build` | Create a production build            |
| `npm run start` | Serve the production build           |
| `npm run lint`  | Run ESLint                           |

## Project Structure

```
aesthetic-training-hub/
├── app/
│   ├── globals.css    # Global styles & Tailwind imports
│   ├── layout.tsx     # Root layout
│   └── page.tsx       # Homepage (/)
├── components/        # Shared UI components
├── lib/               # Utilities and helpers
├── public/            # Static assets
├── next.config.ts
├── postcss.config.mjs # Tailwind PostCSS plugin
├── tsconfig.json
└── package.json
```

## Production Build

```bash
npm run build
npm run start
```
