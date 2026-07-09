// @ts-check
import { defineConfig } from 'astro/config';

// GitHub-Pages-Projektseite: https://waltermelcher.github.io/reibstein-website/
// -> `site` = GitHub-Pages-Root, `base` = Repo-Name.
// Alle internen Links/Assets müssen über `import.meta.env.BASE_URL` bzw. den
// `withBase()`-Helfer laufen, damit sie unter dem Unterpfad funktionieren.
export default defineConfig({
  site: 'https://waltermelcher.github.io',
  base: '/reibstein-website',
  trailingSlash: 'ignore',
  build: {
    format: 'directory',
  },
});
