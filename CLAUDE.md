# Světspánku.cz — prototyp e-shopu

Klient: Světspánku.cz (LUCKÉ CZ GROUP). Sortiment: postele a nábytek z masivu, matrace, rošty, čalouněné postele.
B2C, ceny **s DPH**, jen **CZK**, jen **čeština** (`lang="cs"`).
Výstup: klikací designový prototyp v HTML, ze kterého se dělá skutečný web. Ne produkční kód, ale přesný a konzistentní.

## Zdroje pravdy

| Co | Kde |
|---|---|
| Barvy, typografie, spacing, rádiusy, elevace, motion, rozměry, breakpointy, stavy | `DesignSystem.dc.html` |
| Katalog a ladění komponent | `Komponenty.dc.html` |
| Ikony (jediný registr) | `Ikony.dc.html` + data `icons.js` |
| Rozhodnutí a otevřené body | tento soubor + `baglog.dc.html` |
| Logomanuál klienta | `uploads/logomanual.pdf` |
| Wireframy | `uploads/wireframes-*.jpg` (Homepage v1, mHomepage v1) |

Když se změní token, aktualizuje se `CLAUDE.md` **i** `DesignSystem.dc.html`.

## Barvy

Čtyři škály po 10 krocích (50–900): `blue` (primární, 600 = #296093 z loga), `apricot` (sekundární, 400 = #FBB255 z loga), `green` (konverzní), `neutral`.
V komponentách se používají **jen sémantické tokeny**, nikdy číslo ze škály. Plná tabulka v `DesignSystem.dc.html` § 2, každý textový token ověřený na WCAG AA 4,5 : 1 (ratio se počítá živě na stránce).

Klíčové: `text.primary #1C2229`, `text.secondary #3D4750`, `text.muted #5B6874`, `surface.page #FFFFFF`, `surface.subtle #F7F9FB`, `surface.brand #132C43`, `border.subtle #E1E6EB`, `action.primary #296093`, `action.buy #157A41`, `action.danger #B3261E`, `status.inStock #157A41`, `commerce.sale #B3261E`, `focus.ring rgba(41,96,147,.35)`.

Přemapováno kvůli kontrastu:
- `neutral-500 #6B7986` (4,46 : 1) nesmí nést text → `text.muted` je `#5B6874`.
- `green-500 #1E914F` (4,02 : 1) není konverzní plocha → `action.buy` je `green-600 #157A41`.
- `apricot-500 #F09A2C` (3,19 : 1) nesmí nést text na bílé → textová meruňková je `apricot-700 #A4600C`.

## Typografie

Google Fonts **Archivo** (variabilní, osy `wdth 62–125` a `wght 100–900`) + **Archivo Narrow** (ceny a číselné údaje, 600/700) — webová náhrada za Nimbus Sans L Condensed z logomanuálu. **Minimum 13 px.**
Nadpisy `h1`–`h4`: Archivo `font-weight:800`, `font-stretch:75%`, **vždy verzálky** (`text-transform:uppercase`) — pravidlo je v helmetu každého souboru.
Tokeny: `heading.h1–h4`, `body.large/medium`, `label.small`, `caption`, `overline`, commerce `price.primary`, `price.before`, `product.title`, `stock`, `orderNo`.
Mobilní sada se přepíná **skokem na 820 px**, nikdy přes `clamp()`. Pole formulářů pod 550 px mají `font-size:16px` (iOS jinak zoomuje).

## Spacing

4px grid, `space-1` (4) … `space-13` (128): 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128. **Mezihodnoty zakázané** — když hodnota nesedí, mění se layout, ne token.

## Rádiusy, elevace, motion, rozměry

Rádiusy: sm 6 (pole, tlačítka) · md 12 (karty, panely) · pill 999.
Elevace: karta **v klidu bez borderu a bez stínu**; hover `0 4px 12px rgba(19,44,67,.12)`, sticky `0 2px 8px rgba(19,44,67,.08)`, overlay `0 16px 40px rgba(19,44,67,.18)`, focus ring `0 0 0 3px rgba(41,96,147,.35)`.
Motion: 60 ms stisk · 120 ms barvy · 150 ms stíny · 400 ms panely; `cubic-bezier(.22,.61,.36,1)`.
Rozměry: `size.control` 44, compact 36, large 52, `size.row` 48. Minimální klikací plocha 24 × 24, zvětšuje se `::after`, ne paddingem.
Z-index registr: 0 base · 100 sticky lišta · 200 hlavička · 300 našeptávač a mega menu · 400 overlay · 410 drawer · 500 modál · 600 toast · 900 DebugBar · 950 PrezentacniLista.

## Layout a breakpointy

Sedm pásem, hranice **1560 · 1150 · 1000 · 820 · 550 · 420**: XXL ≥1560, XL 1150–1559, L 1000–1149, M 820–999, S 550–819, XS 420–549, XXS <420.
**Jediné platné názvosloví** — „mobil / tablet / desktop“ se v projektu nepoužívá.
Full-bleed vzorec: kořen stránky `width:100%`, bez paddingu, bez `max-width`, bez rádiusu, nese jen barvu pozadí. Sekce přes celou šířku, omezený je až vnitřní obal: `max-width:1560px; margin:0 auto; padding:0 32px` (pod 820 px `0 16px`). Platí i pro hlavičku a patičku.
Produktový grid má **pevné počty sloupců**, ne `auto-fill minmax()`: XXL 5 · XL/L 4 · M 3 · S 2 · XS/XXS 1, gap 20 px.
Reset kořene v každé stránkové `.dc.html`:
```
html,body{margin:0!important;padding:0!important;}
#dc-root{margin:0!important;padding:0!important;width:100%!important;max-width:none!important;border:0!important;}
#dc-root>.sc-host{margin:0!important;padding:0!important;width:100%!important;}
```

## Ikony

Sada **Tabler**, inline SVG 24 × 24, `stroke-width 2`, `currentColor`, bez výplní. Jediný registr `Ikony.dc.html` (data `icons.js`) — žádná jiná komponenta ikonu nekreslí inline, vždy import.
`dc-import` obsazuje atribut `name`, proto se ikona volá propem **`iconName`**.
Kurátorská sada klienta (49 ikon) neobsahuje e-shopové základy — chybějící ikony (košík, lupa, uživatel, filtr, doprava, šipky menu, porovnání) **doplňuji z Tablera** podle potřeby a zapisuji do registru.

## Interaktivní stavy

Tabulka hover / active / focus / disabled pro každý typ prvku v `DesignSystem.dc.html` § 7.
Hover se nezjišťuje šířkou okna, ale `(hover:hover) and (pointer:fine)`. Focus ring je vidět vždy.

## Struktura a technická pravidla

- Všechny soubory **v kořeni projektu**, žádné podadresáře. Názvy bez diakritiky.
- Znovupoužitelné komponenty = samostatné `.dc.html` importované přes `dc-import`. Stránka **nikdy nekopíruje markup komponenty**.
- Komponenta je bezstavová vůči stránce: data propem, změna skalárním callbackem.
- Funkce se předávají **jen jako přímý prop** — funkce v objektu nebo poli se při druhém předání ztratí. Kontejner dostává data bez funkcí + skalární callbacky (`onPick(index)`, `onToggle(a, b)`) a per-položkové handlery si vyrábí sám.
- `flex:1` na `dc-import` se nepropíše — komponenta se obaluje vlastním divem.
- Větší revize = kopie (`Neco.dc.html` → `Neco v2.dc.html`), předchozí verze se neztrácí.

## Přístupnost (WCAG 2.2 AA, závazné)

- Interaktivní prvek je `<button type="button">` nebo `<a href>`. `<div onClick>` a `role="button"` se nepoužívají.
- Nikdy `<button>` uvnitř `<button>` nebo `<a>`. Klikací karta = krycí odkaz přes `::after`, vnitřní tlačítka `position:relative` + vyšší `z-index`.
- `<button>` má shrink-to-fit šířku — řádkový prvek přes celou šířku potřebuje `width:100%`.
- Právě jeden `<h1>`, landmarky `header/main/footer/nav`, nadpisy bez přeskočení úrovní. Skrytý nadpis vizuálně, nikdy `display:none`.
- Význam nikdy jen barvou (skladovost = tečka + text).
- Overlaye: `role="dialog"` + `aria-modal`, Escape, klik mimo, focus dovnitř a zpět, focus trap, zámek scrollu. Listenery se odregistrují při zavření i odmountování.

## Obsahová pravidla

- Žádná výplň, žádná data slop. Prázdně působící sekce je chyba layoutu, ne nedostatek obsahu.
- Emoji ne. Ikony ano, z jednoho registru.
- Ceny, skladovost a dostupnost se píšou jednotně: cena „7 590 Kč“ (pevná mezera, s DPH), „Skladem · odesíláme do 24 h“, „Poslední kusy“, „Nedostupné“. Formulace se ustálí jednou a drží.
- Fotky klient dodá — do té doby placeholdery ve `surface.muted`.

## Funkční rozsah (potvrzeno klientem)

Varianty produktů (rozměr, tvrdost, barva) · množstevní slevy · porovnávání · oblíbené/wishlist · konfigurátor „průvodce výběrem“ · hodnocení a recenze · dostupnost na prodejnách · poradna/rádce výběru · blog/magazín.
První kolo stránek: **Homepage**.

## Rozhodnuto — nevracet se k tomu

- **Dark mode se nedělá.** Jen světlý režim.
- **Jedna vizuální linka**, ne varianty vzhledu k rozhodnutí (klient zvolil „jedna linka, jeď“).
- **Konverzní barva je zelená** vedle značky; meruňková zůstává akcent a podklad pro tmavý text, nikdy „koupit“.
- **Bez přepínače měny a jazyka** — jen CZK a čeština.
- **Nimbus Sans L Condensed se na web nenasazuje**, náhrada je Archivo Narrow.
- **Názvosloví pásem XXS–XXL**, ne mobil/tablet/desktop.
- **Ceny vždy s DPH**, bez přepínače bez DPH (B2C).
- **LED se v prototypu ovládá jen přes `PrezentacniLista`**, nikdy časem. Každá stránková `.dc.html` drží `state.led`, posílá `ledMode="on"|"off"` do `Hlavicka`, `Paticka` i vlastních LED na stránce. Řízení otevírací dobou přijde až na ostrém webu.

## Jak spolupracujeme

- Podle screenu nebo wireframu se staví přesně, ne podle vlastní představy; nejednoznačnosti se doptávají.
- Malá změna = malá změna. Neopravovat, na co se nikdo neptal — navrhnout zvlášť.
- Nekonzistence proti design systému se nahlásí a navrhne oprava, ale neopravuje se uvnitř jiného úkolu.
- Odpovídat stručně a česky.
