# Firas Freajah Site

Public personal site for [firasfreajah.com](https://firasfreajah.com), built with Next.js, TypeScript, Tailwind CSS, shadcn/ui primitives, and Vercel.

## Local Development

```bash
pnpm install
pnpm dev
```

## Validation

```bash
pnpm lint
pnpm build
```

## Content Notes

- Public profile content is centralized in `src/data/resume.tsx`.
- Blog MDX files are only published when placed under `content/published/`.
- Private client, employer, financial, operational, and personal records should not be committed.
- Domain metadata assumes the production canonical host is `https://firasfreajah.com`.

## Deployment

The Vercel project is `firas-site`. Production should be deployed from the `main` branch after lint/build pass.
