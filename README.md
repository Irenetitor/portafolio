# Irene · Full Stack Developer Portfolio

Personal portfolio built with **Next.js**, **React** and **TypeScript**. It is bilingual (English / Spanish) with a language toggle in the header.

**Live site:** _add the Vercel URL here once it is deployed_

<!-- TODO: add a screenshot of the site: ![Screenshot](public/screenshot.png) -->

## Features

- Sections: hero, about, projects, skills, education and contact
- Each project shows the problem, what I did, what I learned, next steps, stack and links to the demo and code
- English / Spanish toggle built with React Context
- Responsive layout and automatic dark mode
- All content in one typed file: `src/data/content.ts`

## Tech stack

Next.js (App Router) · React · TypeScript · CSS · ESLint · Vercel

## Run it locally

You need [Node.js](https://nodejs.org) 20.9 or newer.

```bash
git clone https://github.com/Irenetitor/portfolio.git
cd portfolio
npm install
npm run dev
```

Then open http://localhost:3000.

## Project structure

```
src/
  app/
    layout.tsx            # page shell, fonts, metadata (title shown in search results)
    page.tsx              # puts the sections together
    globals.css           # all styles and colours
  components/
    LanguageProvider.tsx  # English/Spanish state (React Context)
    Header.tsx            # navigation + language toggle
    Sections.tsx          # hero, about, projects, skills, education, contact
    ProjectCard.tsx       # one project card
  data/
    content.ts            # all the text: edit this file to update the site
public/
  projects/               # project screenshots
```

## Scripts

| Command         | What it does                       |
| --------------- | ---------------------------------- |
| `npm run dev`   | Development server with hot reload |
| `npm run build` | Production build                   |
| `npm run start` | Serves the production build        |
| `npm run lint`  | Checks the code with ESLint        |
