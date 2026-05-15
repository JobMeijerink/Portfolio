# Job Meijerink — Portfolio

A static portfolio site built with React 19, Vite 7, Tailwind v4, and shadcn/ui.

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

Output goes to `dist/`.

## Deploying to Vercel

1. Push this repo to GitHub.
2. On [vercel.com](https://vercel.com), click **Add New → Project** and import the repo.
3. Vercel auto-detects the config from `vercel.json`. Just click **Deploy**.

## Structure

```
src/        React app source (entry: src/main.tsx)
public/     Static assets served as-is from the root
index.html  HTML entry point
```
