/**
 * Zentrale Website-Konfiguration & Inhalte der Reibstein-Startseite.
 * Content-Quelle: uploads/reibstein-startseite-v2.md (Stand 08.07.2026).
 * Namenskonvention: „Reibstein" im Fließtext, „Herbert Reibstein GmbH" bei formaler Firmierung.
 */

export const site = {
  name: 'Reibstein',
  legalName: 'Herbert Reibstein GmbH',
  // Zieldomains, auf denen die Seite indexiert werden DARF. Vorschau/Staging
  // (z. B. *.github.io, localhost) ist NICHT enthalten und bleibt automatisch noindex.
  productionHosts: ['reibstein.de', 'www.reibstein.de'],
  title: 'Heizung, Sanitär & Lüftung in Nauheim & Mainz | Reibstein GmbH',
  description:
    'Fachbetrieb für Heizung, Sanitär und Lüftung in Nauheim und Mainz: Modernisierung, Wartung und Service für Zuhause und Gewerbe. Seit 1978 Teil der Herbert Gruppe.',
  phone: '06152 9767-0',
  phoneHref: '+4961529767 0'.replace(/\s/g, ''),
  herbertGruppeUrl: 'https://www.herbert.de',
} as const;

/** Kontaktdaten Nauheim. Bestandsdaten – vor Veröffentlichung verifizieren. */
export const kontaktNauheim = {
  ansprechpartner: 'René Turtschan',
  rolle: 'Betriebsleiter',
  firma: 'Herbert Reibstein GmbH',
  strasse: 'Gottlieb-Daimler-Straße 8',
  plzOrt: '64569 Nauheim',
  telefon: '06152 9767-0',
  telefonHref: '+496152976770',
  zeiten: [
    'Mo–Do 7:30–12:00 und 13:00–17:00 Uhr',
    'Fr 7:30–14:00 Uhr',
  ],
  verifizieren: true, // Bestandsdaten – Frage: Adresse/Telefon/Zeiten Nauheim bestätigen
};

/**
 * Baut einen Pfad relativ zum konfigurierten `base` (GitHub-Pages-Unterpfad).
 * Immer für interne Links und Assets in /public verwenden.
 */
export function withBase(path: string): string {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  const clean = path.startsWith('/') ? path : `/${path}`;
  return `${base}${clean}`;
}
