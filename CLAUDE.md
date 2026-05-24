# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `pnpm dev` — start the dev server (Next.js, default port 3000). `pnpm` is the package manager (see `pnpm-lock.yaml`).
- `pnpm build` — production build. This is the only check that compiles MDX and type-checks routes end-to-end; run it to validate non-trivial changes (there is no separate `tsc` or test script).
- `pnpm start` — serve the production build.
- `pnpm lint` / `pnpm lint:fix` — ESLint (flat config, `eslint-config-next`).

There is **no test runner** configured. "Verifying" a change means `pnpm build` passes and, for UI, checking it in the browser.

## Architecture

This is a personal portfolio + MDX blog built on **Next.js 16 (App Router), React 19, Tailwind CSS v4, and Content Collections**. Two content systems drive the whole site:

### 1. `src/data/resume.tsx` — the homepage content store
A single exported `DATA` object is the source of truth for everything on `/`: profile, skills (each with a tech-icon component from `src/components/ui/svgs/`), navbar/social links (`src/components/icons.tsx`), work, education, projects, and hackathons. `src/app/page.tsx` and the section components in `src/components/section/` read from it; OG image routes and metadata read from it too. To change homepage content, edit `DATA` — not the components. (This file is ~700 lines and conflates six concerns; if asked to refactor it, splitting by concern is reasonable.)

### 2. Content Collections — the blog
- `content/*.mdx` files are the blog posts. Frontmatter schema is defined and Zod-validated in `content-collections.ts` (`title`, `publishedAt` required; `updatedAt`, `author`, `image` optional).
- At build/dev time this generates `.content-collections/generated`, imported app-wide as the `content-collections` module alias (configured in `tsconfig.json`). Blog pages do `import { allPosts } from "content-collections"`.
- A post's slug is derived from its filename: `post._meta.path.replace(/\.mdx$/, "")`. `generateStaticParams` in `src/app/blog/[slug]/page.tsx` statically renders every post.
- The MDX pipeline (in `content-collections.ts`) runs `remark-gfm` plus the custom `src/lib/remark-code-meta.ts` plugin, which lifts code-fence meta (e.g. `title="..."`) into `data-*` HTML attributes that the rendering components consume.

### MDX rendering
Posts render via `<MDXContent>` using the override map in `src/mdx-components.tsx` (note: `.tsx`, not the Next.js convention location). That map swaps in custom components: `pre` → `src/components/mdx/code-block.tsx` (Shiki dual-theme highlighting + copy button), styled `table`/`hr`/inline-`code`, and a `MediaContainer`. When adding MDX features, register the component here.

### Styling & theming
- Tailwind **v4**, configured entirely in CSS via `@theme` in `src/app/globals.css` — there is **no `tailwind.config.ts`**. Colors are OKLCH custom properties; dark mode is the `.dark` class driven by `next-themes` (`attribute="class"`, default light). Prose/markdown styling also lives in `globals.css`.
- shadcn/ui ("new-york" style, `components.json`) primitives live in `src/components/ui/`. Animation components (`BlurFade`, `FlickeringGrid`, `Dock`) are Magic UI ports in `src/components/magicui/`, built on the `motion` library.

### Conventions
- Path alias `@/*` → `src/*`.
- Per-route dynamic OG images via `opengraph-image.tsx` files (use fonts in `public/fonts/`).
- Security headers are set in `next.config.mjs`; `withContentCollections` must remain the outermost config wrapper.
- Dates: use `formatDate` from `src/lib/utils.ts` (forces UTC to avoid server/client hydration mismatch). Blog pagination helpers are in `src/lib/pagination.ts`.

## Origin

Forked from dillionverma's portfolio template (`README.md` still reflects the upstream template). Licensed MIT.
