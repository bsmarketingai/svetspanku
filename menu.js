// Sdílená data hlavní navigace. Používá Hlavicka, MegaMenu, MobilniMenu a patička.
export const MENU = [
  {
    label: 'Postele z masivu', href: '#postele-z-masivu',
    groups: [
      { title: 'Podle rozměrů', total: 86, items: [
        { label: '80 × 200 cm', href: '#' }, { label: '90 × 200 cm', href: '#' },
        { label: '100 × 200 cm', href: '#' }, { label: '120 × 200 cm', href: '#' },
        { label: '160 × 200 cm', href: '#' }, { label: '180 × 200 cm', href: '#' }
      ] },
      { title: 'Manželské', total: 64, items: [
        { label: 'MULTI — modulární', href: '#' }, { label: 'Masivní', href: '#' },
        { label: 'Kontinentální a boxspring', href: '#' }, { label: 'S úložným prostorem', href: '#' },
        { label: 'S nočními stolky', href: '#' }, { label: 'Čalouněné postele', href: '#' },
        { label: 'S LED osvětlením', href: '#' }
      ] },
      { title: 'Čalouněné', total: 4, items: [
        { label: 'S úložným prostorem', href: '#' }, { label: 'Boxspring', href: '#' },
        { label: 'Kombinované (dřevo/látka)', href: '#' }, { label: 'Boční panely s LED a USB', href: '#' }
      ] }
    ],
    banners: [
      { label: 'Výprodej roštů a matrací', href: '#akce' },
      { label: 'Postele MULTI na míru', href: '#vyroba-na-miru' }
    ],
    articles: [
      { title: 'Jak správně vybrat matraci a na co si dát pozor?', href: 'Clanek.dc.html' },
      { title: 'Postel z masivu, nebo čalouněná? Srovnání po pěti letech', href: 'Clanek.dc.html' }
    ],
    popular: ['Postel LEVITA', 'Postel s úložným prostorem', 'Postel 180 × 200', 'Masiv smrk'],
    promo: { title: 'Výroba na míru', text: 'Postel vyrobíme v rozměru, který potřebujete. Do 4 týdnů.', cta: 'Nezávazná poptávka', href: '#' }
  },
  {
    label: 'Matrace', href: '#matrace',
    groups: [
      { title: 'Podle konstrukce', total: 112, items: [
        { label: 'Pěnové matrace', href: '#', count: 38 },
        { label: 'Taštičkové matrace', href: '#', count: 31 },
        { label: 'Latexové matrace', href: '#', count: 18 },
        { label: 'Sendvičové matrace', href: '#', count: 15 },
        { label: 'Zdravotní matrace', href: '#', count: 10 }
      ] },
      { title: 'Podle tvrdosti', total: 112, items: [
        { label: 'Měkké H1', href: '#', count: 14 },
        { label: 'Středně tuhé H2', href: '#', count: 44 },
        { label: 'Tuhé H3', href: '#', count: 39 },
        { label: 'Velmi tuhé H4', href: '#', count: 15 }
      ] },
      { title: 'Doplňky k matracím', total: 47, items: [
        { label: 'Chrániče matrací', href: '#', count: 21 },
        { label: 'Topper matrace', href: '#', count: 16 },
        { label: 'Návleky a potahy', href: '#', count: 10 }
      ] }
    ],
    popular: ['Matrace 180 × 200', 'Taštičková matrace', 'Matrace pro bolavá záda', 'Topper 5 cm'],
    promo: { title: 'Nevíte, kterou matraci?', text: 'Osm otázek a doporučíme model podle vaší váhy, polohy spánku a rozpočtu.', cta: 'Průvodce výběrem', href: '#pruvodce' }
  },
  {
    label: 'Rošty', href: '#rosty',
    groups: [
      { title: 'Typ roštu', total: 54, items: [
        { label: 'Lamelové rošty', href: '#', count: 24 },
        { label: 'Polohovací rošty', href: '#', count: 16 },
        { label: 'Motorové rošty', href: '#', count: 8 },
        { label: 'Pevné rošty', href: '#', count: 6 }
      ] },
      { title: 'Rozměr', total: 54, items: [
        { label: '90 × 200', href: '#', count: 22 },
        { label: '140 × 200', href: '#', count: 14 },
        { label: '160 × 200', href: '#', count: 11 },
        { label: '180 × 200', href: '#', count: 7 }
      ] }
    ],
    popular: ['Lamelový rošt 180 × 200', 'Polohovací rošt', 'Rošt s pojezdem']
  },
  {
    label: 'Výhodné komplety a sety', href: '#komplety',
    groups: [
      { title: 'Sestavy', total: 29, items: [
        { label: 'Postel + rošt + matrace', href: '#', count: 18 },
        { label: 'Postel + matrace', href: '#', count: 7 },
        { label: 'Rošt + matrace', href: '#', count: 4 }
      ] }
    ],
    popular: ['Komplet 160 × 200', 'Sleva 30 % na sety']
  },
  {
    label: 'Nábytek z masivu', href: '#nabytek',
    groups: [
      { title: 'Do ložnice', total: 73, items: [
        { label: 'Noční stolky', href: '#', count: 26 },
        { label: 'Komody', href: '#', count: 21 },
        { label: 'Skříně', href: '#', count: 15 },
        { label: 'Truhly a lavice', href: '#', count: 11 }
      ] }
    ],
    popular: ['Noční stolek masiv', 'Komoda smrk']
  },
  {
    label: 'Polštáře a přikrývky', href: '#polstare',
    groups: [
      { title: 'Spánkové doplňky', total: 61, items: [
        { label: 'Polštáře', href: '#', count: 28 },
        { label: 'Přikrývky', href: '#', count: 22 },
        { label: 'Anatomické polštáře', href: '#', count: 11 }
      ] }
    ],
    popular: ['Anatomický polštář', 'Celoroční přikrývka']
  },
  {
    label: 'Lůžkoviny a povlečení', href: '#luzkoviny',
    groups: [
      { title: 'Povlečení', total: 58, items: [
        { label: 'Bavlněné povlečení', href: '#', count: 24 },
        { label: 'Saténové povlečení', href: '#', count: 16 },
        { label: 'Prostěradla', href: '#', count: 18 }
      ] }
    ],
    popular: ['Povlečení 140 × 200', 'Napínací prostěradlo']
  },
  { label: 'Akce a výprodej', href: '#akce', highlight: true }
];

export const UTILITY = [
  { label: 'Výroba na míru', href: '#vyroba-na-miru' },
  { label: 'Jak vybrat matraci', href: '#poradna' },
  { label: 'Prodejny', href: '#prodejny' },
  { label: 'Kontakty', href: '#kontakty' }
];

if (typeof window !== 'undefined') { window.MENU = MENU; window.MENU_UTILITY = UTILITY; }
