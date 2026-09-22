export const PRODEJNY = [
  {
    id: 'brno',
    city: 'Brno – H-Park',
    address: 'Heršpická 11f, 639 00 Brno-střed',
    hours: 'Po–Pá 9.00–18.00 · So 10.00–18.00',
    phone: '+420 543 212 855',
    photo: 'prodejna-brno.jpg',
    href: '#prodejna-brno',
    lat: 49.174158, lng: 16.604449
  },
  {
    id: 'praha-butovice',
    city: 'Praha 5 – Butovice',
    address: 'Galerie Butovice, Radlická 117, Praha 5',
    hours: 'Po–Ne 9.00–20.00',
    phone: '+420 222 261 497',
    photo: 'prodejna-praha-butovice.jpg',
    href: '#prodejna-praha-5',
    lat: 50.047164, lng: 14.354621
  },
  {
    id: 'praha-10',
    city: 'Praha 10 – Kutnohorská',
    address: 'Kutnohorská 532, Praha 10 – Dolní Měcholupy',
    hours: 'Po–Ne 9.00–20.00',
    phone: '+420 272 656 213',
    photo: 'prodejna-praha-10.jpg',
    href: '#prodejna-praha-10',
    lat: 50.066794, lng: 14.5492
  },
  {
    id: 'ostrava',
    city: 'Ostrava',
    address: 'Varenská 50, 702 00 Ostrava',
    hours: 'Po–Ne 9.00–20.00',
    phone: '+420 596 633 911',
    photo: 'prodejna-ostrava.jpg',
    href: '#prodejna-ostrava',
    lat: 49.8335365, lng: 18.2680417
  },
  {
    id: 'olomouc',
    city: 'Olomouc',
    address: 'OC Haná, Kafkova 15, 783 01 Olomouc-Slavonín',
    hours: 'Po–Pá 9.00–20.00 · So–Ne 9.00–19.00',
    phone: '+420 581 277 810',
    photo: 'prodejna-olomouc.jpg',
    href: '#prodejna-olomouc',
    lat: 49.572849, lng: 17.223726
  }
];

export function vzdalenostKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const rad = (d) => d * Math.PI / 180;
  const dLat = rad(lat2 - lat1);
  const dLng = rad(lng2 - lng1);
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(rad(lat1)) * Math.cos(rad(lat2)) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(a));
}
