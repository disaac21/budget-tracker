# AGENTS.md

## Commands

| Command | What it does |
|---------|-------------|
| `npm run dev` | Start Vite dev server |
| `npm run build` | `tsc -b && vite build` — typecheck **first**, then bundle |
| `npm run lint` | `eslint .` (flat config, ESLint v10) |
| `npm run preview` | Preview production build |

No test framework is installed. There is no test command.

## Stack

- **Vite v8** + **React 19** + **TypeScript 6** + **SWC** (`@vitejs/plugin-react`)
- **Tailwind CSS v4** via `@tailwindcss/vite` plugin (see `vite.config.ts:3`). CSS-first config: `@import "tailwindcss"` in `src/index.css:1`. The `tailwind.config.ts` is a legacy-style JS config that Tailwind v4 still reads for `theme.extend` — do not add PostCSS or `@tailwindcss/postcss`.
- **HeroUI v3** (`@heroui/react`), **Lucide React**, **Gravity UI Icons** (`@gravity-ui/icons`)
- **React Router v7** with `BrowserRouter` (wraps app in `src/main.tsx:9`)

## Architecture

- **Single page implemented**: `/` → `Dashboard`. All other routes (`/analytics`, `/documents`, `/notifications`, `/profile`, `/settings`, `/help`) are stubs/commented out in `src/App.tsx`.
- **Entrypoint**: `src/main.tsx` → `BrowserRouter` → `App.tsx` → `Sidebar` + `Routes`.
- **Sidebar** with collapsible state persisted in `localStorage` key `"sidebar-collapsed"` (`src/hooks/useSidebarState.ts:8-13`).
- **`next` (v16) listed as a dependency** in `package.json:16` — appears unused for this Vite project; treat with caution.

## TypeScript quirks

- `verbatimModuleSyntax: true` — **must** use `import type` for type-only imports.
- `erasableSyntaxOnly: true` — no enums, no namespaces, no constructor parameter properties.
- `noUnusedLocals` + `noUnusedParameters` are on.

## Lint

ESLint v10 flat config (`eslint.config.js`). Uses `@eslint/js` recommended, `typescript-eslint` recommended, `eslint-plugin-react-hooks`, and `eslint-plugin-react-refresh` (Vite-specific). Ignores `dist`.

## Style

- Double quotes in JSX/TSX. Semicolons omitted. No trailing commas.
- Tailwind utility classes used heavily; custom CSS in `src/index.css` only for `material-symbols-outlined` and `.custom-scrollbar`.
- Inter font + Material Symbols loaded from Google Fonts CDN in `index.html`.
- Theme colors defined in `tailwind.config.ts` (`primary: #094cb2`, `background: #faf9fa`, etc.).

## Verification order

Before committing: `npm run lint` then `npm run build`. No tests to run.
