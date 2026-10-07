// Sdílená data hlavní navigace. Používá Hlavicka, MegaMenu, MobilniMenu a patička.
export const MENU = [
  {
    label: 'Postele z masivu', href: 'Kategorie.dc.html',
    groups: [
      { title: 'Podle rozměrů', image: 'menu-metr.png', imageScale: 1.15, total: 86, items: [
        { label: '80 × 200 cm', href: 'Kategorie.dc.html' }, { label: '90 × 200 cm', href: 'Kategorie.dc.html' },
        { label: '100 × 200 cm', href: 'Kategorie.dc.html' }, { label: '120 × 200 cm', href: 'Kategorie.dc.html' },
        { label: '160 × 200 cm', href: 'Kategorie.dc.html' }, { label: '180 × 200 cm', href: 'Kategorie.dc.html' }
      ] },
      { title: 'Manželské', image: 'kategorie-manzelske-postele.png', total: 64, items: [
        { label: 'MULTI — modulární', href: 'Kategorie.dc.html' }, { label: 'Masivní', href: 'Kategorie.dc.html' },
        { label: 'Kontinentální a boxspring', href: 'Kategorie.dc.html' }, { label: 'S úložným prostorem', href: 'Kategorie.dc.html' },
        { label: 'S nočními stolky', href: 'Kategorie.dc.html' }, { label: 'Čalouněné postele', href: 'Kategorie.dc.html' },
        { label: 'S LED osvětlením', href: 'Kategorie.dc.html' }
      ] },
      { title: 'Čalouněné', image: 'kategorie-calounene-postele.png', total: 4, items: [
        { label: 'S úložným prostorem', href: 'Kategorie.dc.html' }, { label: 'Boxspring', href: 'Kategorie.dc.html' },
        { label: 'Kombinované (dřevo/látka)', href: 'Kategorie.dc.html' }, { label: 'Boční panely s LED a USB', href: 'Kategorie.dc.html' }
      ] }
    ],
    banners: [
      { label: 'Black Friday — nakupte se slevami až 60 %', sub: 'Jen do 30. listopadu, na vybrané matrace a komplety', href: '#akce', image: 'hero-akce.png', imagePos: '30% 30%' },
      { label: 'Cenově zvýhodněné komplety se slevou až 30 %', sub: 'Postel, rošt a matrace v jedné objednávce', href: '#komplety', image: 'hero-komplet.png', imagePos: 'center 40%' }
    ],
    articles: [
      { title: 'Jak správně vybrat matraci a na co si dát pozor?', href: 'Clanek.dc.html', image: 'pruvodce-matrace-lifestyle.png' },
      { title: 'Postel z masivu, nebo čalouněná? Srovnání po pěti letech', href: 'Clanek.dc.html', image: 'inspirace-loznice-led.jpg' }
    ],
    popular: ['Postel LEVITA', 'Postel s úložným prostorem', 'Postel 180 × 200', 'Masiv smrk'],
    promo: { title: 'Výroba na míru', text: 'Postel vyrobíme v rozměru, který potřebujete. Do 4 týdnů.', cta: 'Nezávazná poptávka', href: 'Kategorie.dc.html' }
  },
  {
    label: 'Matrace', href: 'Kategorie.dc.html',
    groups: [
      { title: 'Podle konstrukce', image: 'menu-matrace-konstrukce.png', imageScale: 1, total: 112, items: [
        { label: 'Pěnové matrace', href: 'Kategorie.dc.html', count: 38 },
        { label: 'Taštičkové matrace', href: 'Kategorie.dc.html', count: 31 },
        { label: 'Latexové matrace', href: 'Kategorie.dc.html', count: 18 },
        { label: 'Sendvičové matrace', href: 'Kategorie.dc.html', count: 15 },
        { label: 'Zdravotní matrace', href: 'Kategorie.dc.html', count: 10 }
      ] },
      { title: 'Podle tvrdosti', image: 'menu-matrace-tvrdost.png', imageScale: 1, total: 112, items: [
        { label: 'Měkké H1', href: 'Kategorie.dc.html', count: 14 },
        { label: 'Středně tuhé H2', href: 'Kategorie.dc.html', count: 44 },
        { label: 'Tuhé H3', href: 'Kategorie.dc.html', count: 39 },
        { label: 'Velmi tuhé H4', href: 'Kategorie.dc.html', count: 15 }
      ] },
      { title: 'Doplňky k matracím', image: 'menu-matrace-doplnky.png', imageScale: 1, total: 47, items: [
        { label: 'Chrániče matrací', href: 'Kategorie.dc.html', count: 21 },
        { label: 'Topper matrace', href: 'Kategorie.dc.html', count: 16 },
        { label: 'Návleky a potahy', href: 'Kategorie.dc.html', count: 10 }
      ] }
    ],
    popular: ['Matrace 180 × 200', 'Taštičková matrace', 'Matrace pro bolavá záda', 'Topper 5 cm'],
    promo: { title: 'Nevíte, kterou matraci?', text: 'Osm otázek a doporučíme model podle vaší váhy, polohy spánku a rozpočtu.', cta: 'Průvodce výběrem', href: '#pruvodce' }
  },
  {
    label: 'Rošty', href: 'Kategorie.dc.html',
    groups: [
      { title: 'Typ roštu', image: 'kategorie-rosty.png', total: 54, items: [
        { label: 'Lamelové rošty', href: 'Kategorie.dc.html', count: 24 },
        { label: 'Polohovací rošty', href: 'Kategorie.dc.html', count: 16 },
        { label: 'Motorové rošty', href: 'Kategorie.dc.html', count: 8 },
        { label: 'Pevné rošty', href: 'Kategorie.dc.html', count: 6 }
      ] },
      { title: 'Rozměr', image: 'menu-metr.png', imageScale: 1.15, total: 54, items: [
        { label: '90 × 200', href: 'Kategorie.dc.html', count: 22 },
        { label: '140 × 200', href: 'Kategorie.dc.html', count: 14 },
        { label: '160 × 200', href: 'Kategorie.dc.html', count: 11 },
        { label: '180 × 200', href: 'Kategorie.dc.html', count: 7 }
      ] }
    ],
    popular: ['Lamelový rošt 180 × 200', 'Polohovací rošt', 'Rošt s pojezdem']
  },
  {
    label: 'Výhodné komplety a sety', href: 'Kategorie.dc.html',
    groups: [
      { title: 'Sestavy', image: 'menu-komplety-sestavy.png', imageScale: 1.1, total: 29, items: [
        { label: 'Postel + rošt + matrace', href: 'Kategorie.dc.html', count: 18 },
        { label: 'Postel + matrace', href: 'Kategorie.dc.html', count: 7 },
        { label: 'Rošt + matrace', href: 'Kategorie.dc.html', count: 4 }
      ] }
    ],
    popular: ['Komplet 160 × 200', 'Sleva 30 % na sety']
  },
  {
    label: 'Nábytek z masivu', href: 'Kategorie.dc.html',
    groups: [
      { title: 'Do ložnice', image: 'produkt-komoda-uni-kombi.png', imageScale: 1.1, total: 73, items: [
        { label: 'Noční stolky', href: 'Kategorie.dc.html', count: 26 },
        { label: 'Komody', href: 'Kategorie.dc.html', count: 21 },
        { label: 'Skříně', href: 'Kategorie.dc.html', count: 15 },
        { label: 'Truhly a lavice', href: 'Kategorie.dc.html', count: 11 }
      ] }
    ],
    popular: ['Noční stolek masiv', 'Komoda smrk']
  },
  {
    label: 'Polštáře a přikrývky', href: 'Kategorie.dc.html',
    groups: [
      { title: 'Spánkové doplňky', image: 'menu-polstare.png', imageScale: 1.1, total: 61, items: [
        { label: 'Polštáře', href: 'Kategorie.dc.html', count: 28 },
        { label: 'Přikrývky', href: 'Kategorie.dc.html', count: 22 },
        { label: 'Anatomické polštáře', href: 'Kategorie.dc.html', count: 11 }
      ] }
    ],
    popular: ['Anatomický polštář', 'Celoroční přikrývka']
  },
  {
    label: 'Lůžkoviny a povlečení', href: 'Kategorie.dc.html',
    groups: [
      { title: 'Povlečení', image: 'menu-luzkoviny.png', imageScale: 1.1, total: 58, items: [
        { label: 'Bavlněné povlečení', href: 'Kategorie.dc.html', count: 24 },
        { label: 'Saténové povlečení', href: 'Kategorie.dc.html', count: 16 },
        { label: 'Prostěradla', href: 'Kategorie.dc.html', count: 18 }
      ] }
    ],
    popular: ['Povlečení 140 × 200', 'Napínací prostěradlo']
  },
  { label: 'Akce a výprodej', href: 'Kategorie.dc.html', highlight: true }
];

export const UTILITY = [
  { label: 'Výroba na míru', href: '#vyroba-na-miru' },
  { label: 'Jak vybrat matraci', href: '#poradna' },
  { label: 'Prodejny', href: '#prodejny' },
  { label: 'Kontakty', href: '#kontakty' }
];

if (typeof window !== 'undefined') { window.MENU = MENU; window.MENU_UTILITY = UTILITY; }
