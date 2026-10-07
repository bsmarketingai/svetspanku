// Ukázková data produktů a kategorií pro prototyp. Fotky jsou zástupné z dodaných podkladů.
export const PRODUKTY = [
  { id: 'p1', image: 'produkt-matrace-spring-variant.png', title: 'Matrace Spring Variant 22 cm', href: '#produkt', orderNo: '428170',
    perex: 'Partnerská matrace s tuhostí volitelnou pro každou polovinu samostatně. Už žádná mezera uprostřed.',
    rating: 4.8, ratingCount: 18, price: '7 590 Kč', priceBefore: '9 590 Kč', badge: 'sale', badgeLabel: 'Akce −25 %',
    secondBadge: 'news', secondBadgeLabel: 'Novinka', stock: 'inStock', moreLabel: 'Více rozměrů / stupňů tvrdosti',
    params: [{ icon: 'percentage-75', label: '4 – tvrdá, 5 – velmi tvrdá' }, { icon: 'weight', label: '200 kg' }, { icon: 'arrow-autofit-height', label: '20 cm' }, { icon: 'color-swatch', label: 'Pěnová' }] },
  { id: 'p2', image: 'produkt-matrace-leda-duo.png', title: 'Taštičková matrace Leda Duo', href: '#produkt', orderNo: '428204',
    perex: 'Sedm zón tuhosti a kokosová deska. Pohyb jednoho spícího druhého neruší.',
    rating: 4.8, ratingCount: 64, price: '9 190 Kč', stock: 'inStock', moreLabel: 'Více rozměrů / stupňů tvrdosti',
    params: [{ icon: 'percentage-50', label: '3 – středně tuhá' }, { icon: 'weight', label: '130 kg' }, { icon: 'arrow-autofit-height', label: '20 cm' }, { icon: 'color-swatch', label: 'Taštičková' }] },
  { id: 'p3', image: 'produkt-matrace-ultra-fresh.png', title: 'Antidekubitní matrace Ultra Fresh', href: '#produkt', orderNo: '428311',
    perex: 'Líná pěna s prodyšným potahem pro dlouhé ležení. Vhodná i pro polohovací rošty.',
    rating: 4.3, ratingCount: 21, price: '11 290 Kč', stock: 'lowStock', moreLabel: 'Více rozměrů / stupňů tvrdosti',
    params: [{ icon: 'percentage-50', label: '3 – středně tuhá' }, { icon: 'weight', label: '120 kg' }, { icon: 'arrow-autofit-height', label: '18 cm' }] },
  { id: 'p4', image: 'levita-hlavni.png', title: 'Postel z masivu LEVITA', href: '#produkt', orderNo: '419820',
    perex: 'Smrkový masiv s úložným prostorem po celé ploše lože a plynovými písty.',
    rating: 4.9, ratingCount: 43, price: '21 390 Kč', badge: 'news', stock: 'inStock', moreLabel: 'Více rozměrů / odstínů',
    params: [{ icon: 'dimensions', label: '180 × 200 cm' }, { icon: 'color-swatch', label: 'Smrk, bílá' }, { icon: 'package', label: 'Úložný prostor' }] },
  { id: 'p5', image: 'produkt-rost-polohovaci.png', title: 'Lamelový rošt Flex 28', href: '#produkt', orderNo: '431004',
    perex: 'Osmadvacet pružných lamel s pojezdem tuhosti v oblasti beder.',
    rating: 4.4, ratingCount: 37, price: '3 290 Kč', stock: 'inStock', moreLabel: 'Více rozměrů',
    params: [{ icon: 'dimensions', label: '160 × 200 cm' }, { icon: 'package', label: '28 lamel' }] },
  { id: 'p6', image: 'menu-komplety-sestavy.png', title: 'Komplet postel Nora + rošt + matrace', href: '#produkt', orderNo: '435110',
    perex: 'Sestava připravená k okamžitému spaní. Rošt i matrace sedí na rozměr postele.',
    rating: 4.7, ratingCount: 18, price: '28 900 Kč', priceBefore: '34 700 Kč', badge: 'sale', badgeLabel: 'Akce −17 %',
    stock: 'onWay', moreLabel: 'Více rozměrů / variant matrace',
    params: [{ icon: 'dimensions', label: '160 × 200 cm' }, { icon: 'coins', label: 'Ušetříte 5 800 Kč' }] },
  { id: 'p7', image: 'menu-polstare.png', title: 'Anatomický polštář Comfort Memory', href: '#produkt', orderNo: '440021',
    perex: 'Paměťová pěna, která kopíruje krční páteř a nedeformuje se.',
    rating: 4.2, ratingCount: 96, price: '1 290 Kč', stock: 'inStock',
    params: [{ icon: 'dimensions', label: '70 × 50 cm' }, { icon: 'color-swatch', label: 'Paměťová pěna' }] },
  { id: 'p8', image: 'produkt-nocni-stolek-uni-50.png', title: 'Noční stolek z masivu Nora', href: '#produkt', orderNo: '419944',
    perex: 'Dubový masiv se zásuvkou na tichém výsuvu. Ladí s postelí Nora.',
    rating: 4.5, ratingCount: 12, price: '4 690 Kč', stock: 'outOfStock', moreLabel: 'Více odstínů',
    params: [{ icon: 'color-swatch', label: 'Dub' }, { icon: 'dimensions', label: '45 × 40 cm' }] },
  { id: 'p9', image: 'produkt-matrace-duo-comfort.png', title: 'Sendvičová matrace Duo Comfort', href: '#produkt', orderNo: '428590',
    perex: 'Dvě tuhosti v jedné matraci — stačí ji otočit podle ročního období.',
    rating: 4.1, ratingCount: 54, price: '6 190 Kč', stock: 'inStock', moreLabel: 'Více rozměrů / stupňů tvrdosti',
    params: [{ icon: 'percentage-66', label: '3 / 4 – oboustranná' }, { icon: 'weight', label: '110 kg' }, { icon: 'arrow-autofit-height', label: '18 cm' }] },
  { id: 'p10', image: 'kategorie-calounene-postele.png', title: 'Postel z masivu Sara s čalouněným čelem', href: '#produkt', orderNo: '419877',
    perex: 'Masivní rám s čalouněným čelem v pratelném lněném potahu.',
    rating: 4.6, ratingCount: 29, price: '18 490 Kč', stock: 'inStock', moreLabel: 'Více rozměrů / potahů',
    params: [{ icon: 'dimensions', label: '160 × 200 cm' }, { icon: 'palette', label: 'Len šedý' }] }
];

export const KATEGORIE = [
  { label: 'Manželské postele z masivu', href: '#manzelske-postele', count: 42, image: 'kategorie-manzelske-postele.png', sub: ['180 × 200', 'S úložným prostorem'] },
  { label: 'Jednolůžka z masivu', href: '#jednoluzka', count: 24, image: 'kategorie-jednoluzka.png', sub: ['90 × 200', 'Dětské', 'Buk'] },
  { label: 'Čalouněné postele', href: '#calounene', count: 31, image: 'kategorie-calounene-postele.png', sub: ['S roštem', 'Boxspring'] },
  { label: 'Matrace', href: '#matrace', count: 112, image: 'kategorie-matrace.png', zoom: true, sub: ['Taštičkové', 'Pěnové', 'Latexové'] },
  { label: 'Rošty', href: '#rosty', count: 54, image: 'kategorie-rosty.png', zoom: true, sub: ['Lamelové', 'Polohovací'] },
  { label: 'Nábytek z masivu', href: '#nabytek', count: 73, image: 'kategorie-nabytek.png', sub: ['Noční stolky', 'Komody'] }
];

export const FACETY = [
  { id: 'dostupnost', title: 'Dostupnost', options: [
    { id: 'skladem', label: 'Skladem', count: 128 }, { id: 'na-ceste', label: 'Na cestě k nám', count: 14 },
    { id: 'na-miru', label: 'Výroba na míru', count: 32 } ] },
  { id: 'rozmer', title: 'Rozměr', options: [
    { id: '90x200', label: '90 × 200 cm', count: 41 }, { id: '140x200', label: '140 × 200 cm', count: 38 },
    { id: '160x200', label: '160 × 200 cm', count: 62 }, { id: '180x200', label: '180 × 200 cm', count: 57 },
    { id: '200x200', label: '200 × 200 cm', count: 12 } ] },
  { id: 'tvrdost', title: 'Tvrdost', options: [
    { id: 'h1', label: 'Měkká H1', count: 14 }, { id: 'h2', label: 'Středně tuhá H2', count: 44 },
    { id: 'h3', label: 'Tuhá H3', count: 39 }, { id: 'h4', label: 'Velmi tuhá H4', count: 15 } ] },
  { id: 'konstrukce', title: 'Konstrukce', options: [
    { id: 'penova', label: 'Pěnová', count: 38 }, { id: 'tastickova', label: 'Taštičková', count: 31 },
    { id: 'latexova', label: 'Latexová', count: 18 }, { id: 'sendvicova', label: 'Sendvičová', count: 15 } ] },
  { id: 'material', title: 'Materiál', options: [
    { id: 'smrk', label: 'Smrk', count: 28 }, { id: 'borovice', label: 'Borovice', count: 16 },
    { id: 'buk', label: 'Buk', count: 14 }, { id: 'dub', label: 'Dub', count: 11 } ] }
];

if (typeof window !== 'undefined') { window.PRODUKTY = PRODUKTY; window.KATEGORIE = KATEGORIE; window.FACETY = FACETY; }
