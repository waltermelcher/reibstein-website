# Reibstein Website – Glow-Up

Neuer Auftritt der Startseite der **Herbert Reibstein GmbH** (Heizung, Sanitär & Lüftung in
Nauheim und Mainz) – ein „Glow-Up" auf Basis des **Herbert Design Systems**, gebaut mit
[Astro](https://astro.build).

> Status: **Vorschau / Work in Progress.** Umgesetzt ist aktuell nur die **Startseite**.
> Buttons zu Unterseiten sind bewusst Platzhalter. Verwendete Bilder sind Platzhalter (aus der
> Bestandsseite bzw. der Design-System-Bildwelt) und werden später ausgetauscht.

## Live-Vorschau

GitHub Pages: <https://waltermelcher.github.io/reibstein-website/>

## Entwicklung

```bash
npm install
npm run dev       # Dev-Server (http://localhost:4321/reibstein-website/)
npm run build     # Produktions-Build nach dist/
npm run preview   # gebautes Ergebnis lokal prüfen
```

## Technik & Struktur

- **Astro 5**, statischer Build, keine Client-Runtime-Abhängigkeiten.
- **Herbert Design System**: Tokens + `.hb-*`-Utility-Klassen liegen unverändert in
  [`src/styles/ds/`](src/styles/ds/); die Projekt-Glow-Up-Ebene (nur DS-Tokens, keine eigenen
  Farben) in [`src/styles/site.css`](src/styles/site.css).
- Zentrale Inhalte/Kontaktdaten in [`src/lib/site.ts`](src/lib/site.ts).
- Startseiten-Sektionen in [`src/components/sections/`](src/components/sections/).
- **Logo** (Ausnahme zum DS): `public/brand/reibstein-logo.png`.
- `base`/`site` in [`astro.config.mjs`](astro.config.mjs) für den GitHub-Pages-Unterpfad.

## Automatische Suchmaschinen-Steuerung

Das ausgelieferte HTML enthält standardmäßig `noindex,nofollow`. Ein Inline-Skript im `<head>`
schaltet **nur auf einer echten Produktionsdomain** auf `index,follow`. Vorschau-/Staging-Umgebungen
(`*.github.io`, `localhost`) bleiben damit **automatisch** von der Indexierung ausgeschlossen – ohne
manuelles Umstellen. Zusätzlich liefert `robots.txt` auf Nicht-Produktionsdomains `Disallow: /`.

Die Produktionsdomains stehen in [`src/lib/site.ts`](src/lib/site.ts) unter `productionHosts`.

## Offene Inhalte (im Design als Platzhalter markiert)

- Standort **Mainz**: Adresse/Telefon/Zuständigkeit
- **Notdienstnummer** und -zeiten
- **Nauheim**: Bestandsdaten (Adresse/Telefon/Öffnungszeiten) verifizieren
- **Impressum/Datenschutz**: aktuell Dummytexte – rechtssicher ersetzen
