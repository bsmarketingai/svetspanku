// Ukázkový obsah košíku pro prototyp. Ceny s DPH.
export const KOSIK = [
  { title: 'Manželská postel SANTE 45 dvoulůžko', variant: '200 × 180 cm · olej Teak · jádrový buk', qty: 1, unit: 39800, price: '39 800 Kč', href: '#produkt' },
  { title: 'Matrace Spring Variant 22 cm', variant: '180 × 200 cm · tuhost H3', qty: 1, unit: 7590, price: '7 590 Kč', href: '#produkt' },
  { title: 'Lamelový rošt Standard', variant: '180 × 200 cm · 28 lamel', qty: 1, unit: 2480, price: '2 480 Kč', href: '#produkt' }
];

export const formatKc = (n) => String(n).replace(/\B(?=(\d{3})+(?!\d))/g, '\u00A0') + '\u00A0Kč';

if (typeof window !== 'undefined') window.KOSIK = KOSIK;
