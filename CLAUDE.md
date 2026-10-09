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
| Rozhodnutí a otevřené body | tento soubor + `changelog.dc.html` |
| Logomanuál klienta | `uploads/logomanual.pdf` |
| Wireframy | `uploads/wireframes-*.jpg` (Homepage v1, mHomepage v1) |

Když se změní token, aktualizuje se `CLAUDE.md` **i** `DesignSystem.dc.html`.

## Barvy

Pět škál po 10 krocích (50–900): `blue` (primární, 600 = #296093 z loga), `apricot` (konverzní, 400 = #FBB255 z loga; samostatná sekundární barva není), `green` (success), `red` (error, 600 = #B3261E), `neutral`.
V komponentách se používají **jen sémantické tokeny**, nikdy číslo ze škály. Plná tabulka v `DesignSystem.dc.html` § 2, každý textový token ověřený na WCAG AA 4,5 : 1 (ratio se počítá živě na stránce).

Klíčové: `text.heading #0B1F33` (nadpisy h1–h4, tmavý #EEF3F8; 7. 10. 2026), `text.primary #1C2229`, `text.secondary #3D4750`, `text.muted #5B6874`, `surface.page #FEFAF7`, `surface.subtle #FAF5EF`, `surface.muted #F3EDE4`, `surface.strong #E9E1D5`, `surface.card #FFFFFF` (karty, dialogy, popovery; tmavý = page), `surface.box #FFFFFF` (obsahové boxy; tmavý = subtle #13283C) (teplé meruňkové podklady, 7. 10. 2026; dříve studené #FFFFFF / #F7F9FB / #EFF2F5), `surface.brand #132C43`, `border.subtle #E1E6EB`, `action.primary #296093` (solid), `action.secondary` tonální meruňkové: pozadí `#FEEDD4` (apricot-100), text `#7A4708` (apricot-800), bez obrysu, hover pozadí `#FDDCAA` (apricot-200) (7. 10. 2026; dříve modré tonální #DCE8F2 / #21507B, před tím outline), `action.ghost #21507B` (bez obrysu), `action.buy #FBB255` (text `#1C2229`, hover `#F09A2C`), `action.danger #B3261E`, `status.success #157A41`, `status.error #B3261E`, `status.inStock #157A41`, `status.outOfStock #B3261E`, `commerce.sale #B3261E`, `focus.ring rgba(41,96,147,.35)`, `hover.text #21507B` (tmavý `#FBB255`), `hover.bg #F0F5FA` (tmavý `rgba(251,178,85,.12)`).

**Hover odkazů a ikon je ve světlém režimu modrý, v tmavém meruňkový** (`--ss-hover-text`, `--ss-hover-bg`; 6. 10. 2026). Primární/solid tlačítka mají vlastní hover beze změny.

Přemapováno kvůli kontrastu:
- `neutral-500 #6B7986` (4,46 : 1) nesmí nést text → `text.muted` je `#5B6874`.
- `green-500 #1E914F` (4,02 : 1) nenese text → `status.success` je `green-600 #157A41`.
- `apricot-500 #F09A2C` (3,19 : 1) nesmí nést text na bílé → textová meruňková je `apricot-700 #A4600C`.

## Typografie

Google Fonts: výchozí **Oswald** (nadpisy), **Roboto** (běžný text, 400–700), ceny a číselné údaje také **Oswald** (Archivo Narrow odstraněno 8. 10. 2026 — používá se jen Oswald a Roboto). Volba fontů v `PrezentacniLista` odebrána (6. 10. 2026), fonty jsou pevné. **Minimum 13 px.**
Nadpisy `h1`–`h4`: `font-weight:600`, `text-transform:none`, **vždy větná kapitalizace** — první písmeno velké, zbytek malé (kromě vlastních jmen); píše se tak přímo v textu, ne přes CSS. Pravidlo je v helmetu každého souboru.
Tokeny: `heading.h1–h4`, `body.large/medium`, `label.small`, `caption`, `overline`, commerce `price.primary`, `price.before`, `product.title`, `stock`, `orderNo`.
Mobilní sada se přepíná **skokem na 820 px**, nikdy přes `clamp()`. Pole formulářů pod 550 px mají `font-size:16px` (iOS jinak zoomuje).

## Spacing

4px grid, `space-1` (4) … `space-13` (128): 4 · 8 · 12 · 16 · 20 · 24 · 32 · 40 · 48 · 64 · 80 · 96 · 128. **Mezihodnoty zakázané** — když hodnota nesedí, mění se layout, ne token.

## Rádiusy, elevace, motion, rozměry

Rádiusy: sm 6 (pole, tlačítka) · md 12 (karty, panely) · pill 999.
Elevace: karta **v klidu bez borderu a bez stínu**; hover `0 4px 12px rgba(19,44,67,.12)`, sticky `0 2px 8px rgba(19,44,67,.08)`, overlay `0 16px 40px rgba(19,44,67,.18)`, focus ring `0 0 0 3px rgba(41,96,147,.35)`.
Motion: 60 ms stisk · 120 ms barvy · 150 ms stíny · 400 ms panely; `cubic-bezier(.22,.61,.36,1)`.
Rozměry: `size.control` 44, compact 36, large 52, `size.row` 48. Minimální klikací plocha 24 × 24, zvětšuje se `::after`, ne paddingem.
Scrim modálů a drawerů: **vždy třída `.ss-scrim`** z `tmavy-rezim.css` (blur 16 px, diagonální závoj, teplé bodové světlo z levého horního rohu), nikdy vlastní pozadí overlaye. Výjimka: lightbox galerie (plné tmavé pozadí pro fotky).
Scrollbar: globálně z `tmavy-rezim.css` — systémová šířka (15 px), průhledný podklad, jen táhlo meruňkové `action.buy` (hover apricot-500), pill, stejné v obou režimech; neřeší se per komponenta.
Z-index registr: 0 base · 100 sticky lišta · 200 hlavička · 300 našeptávač a mega menu · 400 overlay · 410 drawer · 500 modál · 600 toast · 900 DebugBar · 950 PrezentacniLista.

## Layout a breakpointy

Sedm pásem, hranice **1560 · 1150 · 1000 · 820 · 550 · 420**: XXL ≥1560, XL 1150–1559, L 1000–1149, M 820–999, S 550–819, XS 420–549, XXS <420.
**Jediné platné názvosloví** — „mobil / tablet / desktop“ se v projektu nepoužívá.
Horní část stránky (drobečková, h1, perex, přepínače) je vždy samostatná první `<section class="ss-grad-top">` v `<main>` — přechod surface.page → surface.muted jako v Kategorii (7. 10. 2026).
Full-bleed vzorec: kořen stránky `width:100%`, bez paddingu, bez `max-width`, bez rádiusu, nese jen barvu pozadí. Sekce přes celou šířku, omezený je až vnitřní obal: `max-width:1560px; margin:0 auto; padding:0 32px` (pod 820 px `0 16px`). Platí i pro hlavičku a patičku.
Produktový grid má **pevné počty sloupců**, ne `auto-fill minmax()`: XXL 5 · XL/L 4 · M 3 · S 2 · XS/XXS 1, gap 20 px.
Reset kořene v každé stránkové `.dc.html`:
```
html,body{margin:0!important;padding:0!important;}
#dc-root{margin:0!important;padding:0!important;width:100%!important;max-width:none!important;border:0!important;}
#dc-root>.sc-host{margin:0!important;padding:0!important;width:100%!important;}
```

## Tmavý režim

Barvy v komponentách se píšou `var(--ss-token, #světláHodnota)` — světlý režim je fallback, tmavé hodnoty jsou jen v `tmavy-rezim.css` pod `html[data-mode="dark"]`. Každý soubor má v helmetu `<link href="./tmavy-rezim.css">` a skript, který obnoví uložený režim. Barvy, které se v tmavém nemění (primární tlačítko, meruňková, tmavé pásy hlavičky a patičky, bílý text na brandu), zůstávají literály. Tabulka světlý → tmavý v `DesignSystem.dc.html` § 2. Nová barva = doplnit proměnnou do CSS i tabulky.

## Štítky (příznaky)

Komponenta `Stitek.dc.html`, rádius 6, Roboto 13/600 (small 12). Dvě skupiny (8. 10. 2026):
- **Obchodní** (plná barva, na fotce): `news` Novinka apricot-400 + star · `sale` −18 % red-600 · `freeShip` green-600 + truck · `tip` Náš tip blue-600 + thumb-up · `bestseller` Nejprodávanější brand #132C43 + flame · `clearance` Výprodej apricot-800 + tag · `top` TOP apricot-100/800 + award.
- **Vlastnosti** (tonální modrá surface.selected / link-hover): `warranty` 5 let záruka + shield-check · `orthopedic` Ortopedická · `antiallergic` Antialergenní + leaf · `firmness` Změna tuhosti + arrows-exchange · `bogo` 1+1 zdarma + gift.

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
- Čas se píše vždy s dvojtečkou: „9:00–17:00“ (pomlčka bez mezer), nikdy „9.00“.
- Ceny, skladovost a dostupnost se píšou jednotně: cena „7 590 Kč“ (pevná mezera, s DPH), „Skladem · odesíláme do 24 h“, „Poslední kusy“, „Nedostupné“. Formulace se ustálí jednou a drží.
- Fotky klient dodá — do té doby placeholdery ve `surface.muted`.

## Funkční rozsah (potvrzeno klientem)

Varianty produktů (rozměr, tvrdost, barva) · množstevní slevy · porovnávání · oblíbené/wishlist · konfigurátor „průvodce výběrem“ · hodnocení a recenze · dostupnost na prodejnách · poradna/rádce výběru · blog/magazín.
První kolo stránek: **Homepage**.

## Rozhodnuto — nevracet se k tomu

- **Výchozí režim je světlý** (rozhodnuto 6. 10. 2026, dříve tmavý). Tmavý se zapíná jen v `PrezentacniLista` (uloženo v `localStorage` `ss-mode`), podklad z tmavé modré značky, meruňková beze změny.
- **Jedna vizuální linka**, ne varianty vzhledu k rozhodnutí (klient zvolil „jedna linka, jeď“).
- **Konverzní barva je meruňková** (`action.buy` apricot-400, vždy tmavý text). Zelená = **success** (skladem, pozitivní oznámení), červená = **error** (nedostupné, negativní oznámení, odebrat). Primární modrá beze změny.
- **Bez přepínače měny a jazyka** — jen CZK a čeština.
- **Nimbus Sans L Condensed se na web nenasazuje.** Výchozí nadpisy Oswald, text Roboto (6. 10. 2026), ceny Oswald (8. 10. 2026). Jiné písmo se nepoužívá.
- **Názvosloví pásem XXS–XXL**, ne mobil/tablet/desktop.
- **Jen designový Select** (`Select.dc.html`, vlastní listbox). Systémový `<select>` se nepoužívá (2. 10. 2026).
- **Ceny vždy s DPH**, bez přepínače bez DPH (B2C).
- **LED se v prototypu ovládá jen přes `PrezentacniLista`**, nikdy časem. Každá stránková `.dc.html` drží `state.led`, posílá `ledMode="on"|"off"` do `Hlavicka`, `Paticka` i vlastních LED na stránce. Řízení otevírací dobou přijde až na ostrém webu.

## Jak spolupracujeme

- **Každá změna se zapisuje do `changelog.dc.html`** (pole `DAYS` v logice): chronologicky, nový den = nový blok s datem, u každé položky před / po / proč / soubory.

- Podle screenu nebo wireframu se staví přesně, ne podle vlastní představy; nejednoznačnosti se doptávají.
- Malá změna = malá změna. Neopravovat, na co se nikdo neptal — navrhnout zvlášť.
- Nekonzistence proti design systému se nahlásí a navrhne oprava, ale neopravuje se uvnitř jiného úkolu.
- Odpovídat stručně a česky.

---

## Přenos projektu do nového účtu (8. 10. 2026)

**Pokyn pro Claude v novém účtu:** projekt byl přenesen přes Git repozitář. Uložit **1:1**, nic nepřepisovat, nevylepšovat, nepřejmenovávat, neformátovat, neslučovat ani nemazat (ani staré verze `v1`, ani `uploads/`, ani `screenshots/`). `support.js` je runtime prostředí — neupravovat. Pak pokračovat v práci podle tohoto souboru.

- Projekt se jmenuje **svetspanku.cz**. Uživatel (agentura, doména jxk.cz) píše česky, chce stručné odpovědi.
- Projekt dříve navazoval na design systém v jiném projektu účtu (id 437bfa2d…). **Vše potřebné je už zkopírované sem** — tokeny v `DesignSystem.dc.html` + `tmavy-rezim.css`, fonty z Google Fonts. Na externí design systém se neodkazovat; zdrojem pravdy je tento projekt.
- Všechny soubory jsou Design Components (`*.dc.html`), otevírají se přímo v prohlížeči, závisí na `support.js` v kořeni.

### Mapa souborů

Stránky:
- `index.dc.html` — Homepage (hero, karty pod hero, Nejoblíbenější kategorie, Nejprodávanější, Recenze, Magazín, Newsletter).
- `Kategorie.dc.html` — šablona výpisu kategorie s filtry (prop `k` = slug L1, L2/L3 přes hash `#s=&p=`). Stránky L1: `Kategorie Postele / Matrace / Rosty / Komplety / Nabytek / Polstare / Luzkoviny.dc.html` (jen import šablony). Odkazy nikdy přes query parametry (`?…`) — rozbíjí náhled. `Kategorie v1.dc.html` = původní verze pro Matrace.
- `Detail_Postel 3.0.dc.html` — **aktuální detail produktu** (všechny odkazy na detail vedou sem, 7. 10. 2026). `Detail_Komplet 3.0.dc.html` — kopie k ladění detailu kompletu, přepínač v PrezentacniLista. `Detail_Produkt Levita.dc.html` — původní detail (zdroj kopií, nemazat).
- `Kosik.dc.html`, `KosikKrok1–3.dc.html` — košík a kroky objednávky.
- `Porovnani.dc.html`, `VysledkyVyhledavani.dc.html`, `Registrace.dc.html`, `Clanek.dc.html` (blog).
- `DesignSystem.dc.html`, `Komponenty.dc.html`, `Ikony.dc.html`, `changelog.dc.html` — dokumentace.

Komponenty (importované přes `dc-import`): Hlavicka, Paticka, MegaMenu, MobilniMenu, ProdejnyMenu, Vyhledavani, PrezentacniLista, Tlacitko, Chip, Stitek, Input, Select, Checkbox, VolbaRadio, SkupinaVoleb, Kvantifikator, Zalozky, Paginace, Drobeckova, Hodnoceni, InfoPopover, ProduktovaKarta, KategorickaDlazdice, VypisKategorii, SouvisejiciProdukty, Galerie, NakupniBox, VyberVariant, VariantaDrawer, MnozstevniSlevy, DopravaZdarma, Usp, CenovyFiltr, FiltrPanel, FiltrDrawer, FiltracniLista, KosikDrawer, KosikPridanoModal, PolozkaKosiku, SouhrnKosiku, ShrnutiObjednavky, SlevovyKupon, KrokyObjednavky, PrihlaseniModal, SocialniPrihlaseni, PoradnaModal, PrazdnyStav, LogoA–D (animace loga).
Staré verze (nemazat): `MegaMenu v1`, `Paticka v1`, `ProduktovaKarta v1`.

Data (plain JS): `menu.js` (struktura menu), `produkty.js`, `prodejny.js`, `kosik.js`, `icons.js`. Styl: `tmavy-rezim.css` (proměnné `--ss-*`, tmavý režim, `.ss-scrim`, `.ss-grad-top`, `.ss-grad-glow`). Obrázky v kořeni = použité assety; `uploads/` = podklady od klienta (wireframy, screeny, logomanuál, `lucatec-struktura-menu.md`).

### Stav v prototypu (localStorage, ovládá PrezentacniLista)

`ss-mode` (light/dark), `ss-logo` (varianta loga a–d), `ss-hdmode` (sticky hlavička H1/H2, **výchozí H2** od 9. 10. 2026), `ss-cmp` (produkty v porovnání, událost `ss-cmp`). Hlavička vysílá `ss-hdhidden` při schování (H2). LED stav `state.led` → prop `ledMode`.

### Rozpracováno — otevřené body

- **Struktura menu**: naplněna podle screenshotů z Muralu (8. 10. 2026) v `menu.js`. Otevřené: skupina „Podle materiálu“ u polštářů (v Muralu otazníky), zda ponechat „Akce a výprodej“, zvýraznění „Průvodce výběrem matrace“.
- Poslední dny práce (7. 10. 2026): přesměrování detailu na Postel 3.0, teplé meruňkové podklady sekcí homepage (`.ss-grad-top` + `.ss-grad-glow`), bílé boxy konfigurace na detailu, sticky hlavička H1/H2, počty v porovnání/oblíbených v hlavičce. Podrobnosti v `changelog.dc.html`.
