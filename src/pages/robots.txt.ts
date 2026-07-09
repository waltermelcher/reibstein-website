import type { APIRoute } from 'astro';
import { site } from '../lib/site';

/**
 * robots.txt ergänzt die per-Host-Meta-Logik (siehe Base.astro).
 * Primärer, laufzeit-automatischer Schutz ist das <meta name="robots"> in Base.astro,
 * das nur auf einer Produktionsdomain auf index,follow schaltet.
 *
 * Zusätzlich: Wenn der aktuelle Build auf eine Produktionsdomain zeigt (Astro `site`),
 * wird Crawling erlaubt + Sitemap verlinkt; sonst (Vorschau/Staging) alles disallowen.
 */
export const GET: APIRoute = ({ site: astroSite }) => {
  const host = astroSite ? astroSite.host : '';
  const isProd = site.productionHosts.includes(host);

  const body = isProd
    ? `User-agent: *\nAllow: /\n\nSitemap: ${astroSite ? new URL('sitemap-index.xml', astroSite).href : ''}\n`
    : `# Vorschau/Staging – Indexierung unterbunden\nUser-agent: *\nDisallow: /\n`;

  return new Response(body, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
};
