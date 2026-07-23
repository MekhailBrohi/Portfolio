# Mekhail Brohi — Portfolio

Personal engineering portfolio built with Next.js (App Router) and Tailwind CSS.

## Getting Started

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Structure

- `src/data/config.ts` — name, tagline, email, social links. Add your LinkedIn/GitHub
  URLs here and they'll appear automatically in the footer.
- `src/data/projects.ts` — all project content (title, date, purpose, parts list,
  build notes, photo count). Add a new object here to add a new project.
- `src/data/skills.ts` — technical skills grid, grouped by category.
- `src/components/` — page sections (Hero, About, Projects, Footer) and the
  `ProjectCard` / `Reveal` (scroll fade-in) building blocks.
- `src/app/page.tsx` — the home page, composed from the sections above.
- `src/app/projects/[slug]/page.tsx` — individual project detail page, auto-generated
  for every entry in `projects.ts`.
- `public/images/<project-slug>/1.jpg`, `2.jpg`, `3.jpg` — real project photos, numbered
  in chronological build order (converted from the original `.HEIC` files in `Pictures/`).
- `public/images/hero/1.png` — the hero background image.

## Adding more project photos later

This machine's OS-level HEIC codec (HEVC Video Extensions) never got installed, but the
`x2CoreTech.HEICtoJPGConverter` Store app has its own bundled ImageMagick/HEIF decoder
that works independently of it. For any future `.HEIC` photos:

- Open the **HEIC to JPG Converter** app (Start Menu) and convert them through its UI, or
- Ask Claude to batch-convert them — it can drive that app's bundled `Magick.NET` DLLs
  directly from PowerShell (copy the 3 DLLs from
  `C:\Program Files\WindowsApps\x2CoreTech.HEICtoJPGConverter-HEICtoPNG_...\HeicConverter\`
  to a writable folder first — WindowsApps blocks loading native DLLs in place).

## Adding a new project

Add an entry to the `projects` array in `src/data/projects.ts`, then drop matching
photos in `public/images/<slug>/`. The homepage grid and the detail page are both
generated automatically.
