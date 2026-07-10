# Design-Sync – offene Übernahmen ins Herbert Design System

Änderungen, die in **diesem Projekt** vorgenommen wurden und beim **nächsten Design-Sync
zurück ins Design System** (`waltermelcher/Herbert-Design-System`) übernommen werden sollen.

---

## 1. Kantige Ecken – Radius = 0 (WICHTIG, vom Kunden ausdrücklich gewünscht)

**Was:** Alle Radius-Tokens auf `0` – die gesamte Marke wird kantig (wie herbert.de).
Keine abgerundeten Ecken mehr bei Buttons, Badges, Karten, Bildern, Flächen.

**Im Projekt umgesetzt:** Override der Radius-Tokens in
[`src/styles/site.css`](src/styles/site.css) (`:root { --radius-* : 0 }`).

**Für den Design-Sync ins DS zu ändern (Single Source of Truth):**

- Datei **`tokens/radius.json`** im DS-Repo – alle Werte auf `0` setzen:

  ```json
  {
    "radius": {
      "none": { "$type": "dimension", "$value": "0px" },
      "sm":   { "$type": "dimension", "$value": "0px" },
      "md":   { "$type": "dimension", "$value": "0px" },
      "lg":   { "$type": "dimension", "$value": "0px" },
      "xl":   { "$type": "dimension", "$value": "0px" },
      "full": { "$type": "dimension", "$value": "0px" }
    }
  }
  ```
  (Feldnamen/Struktur an die vorhandene `radius.json` anpassen – nur die Werte auf `0`.)

- Danach DS neu bauen (`node build.js` bzw. der DS-Build), damit
  `build/css/tokens.css`, `build/json/tokens.json`, `build/scss/_tokens.scss` und
  `ds-bundle/_ds_styles/tokens.css` regeneriert werden.

- Hinweis: `--radius-full` (bisher Pill/Kreis, „markantes Herbert-Grafikelement") wird
  damit ebenfalls `0`. Das ist gewollt (durchgängig kantig). Konventions-/Doku-Texte im DS,
  die die Pill-/Kreisform als Markenelement beschreiben, entsprechend anpassen.

**Effekt nach Sync:** Sobald das DS mit Radius `0` neu gebaut ist, kann der lokale
`:root`-Override in `site.css` entfallen (die DS-Tokens tragen dann selbst `0`).
