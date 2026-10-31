# Manideep Goud Paruchuri — DevOps Portfolio

Personal portfolio site built with React, Vite, and Tailwind CSS.

## Run locally

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
```

## Update content

- Text, experience, skills, and projects: `src/data.js`
- Profile photo: `public/profile.webp`
- Resume download: edit `resume/resume.html`, then regenerate the PDF:

  ```bash
  "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" --headless=new --no-pdf-header-footer \
    --print-to-pdf="$PWD/public/Paruchuri_Manideep_Resume.pdf" "file://$PWD/resume/resume.html"
  ```
- Social share image: `public/og-image.png`

## Deploy

Live at https://manideepgoudparuchuri.github.io

Every push to `main` builds and deploys the site to GitHub Pages via `.github/workflows/deploy.yml`.

To use a custom domain, add it under **Settings → Pages → Custom domain**, point your DNS to GitHub Pages, and update the `og:url` and `og:image` URLs in `index.html`.
