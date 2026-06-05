export const WA = '541140785498';

const DESC_CAJA = 'Guardá, protegé y transportá tus figuritas del Mundial 2026 sin que se doblen. PLA resistente y liviano, cierre firme con trabas. Más de 400 figuritas.';

const PRICING_CAJA = [
  { qty: '×1', price: '$15.000', unit: '$15.000 c/u' },
  { qty: '×4', price: '$40.000', unit: '$10.000 c/u', best: true, note: 'Combinables entre modelos' },
];

export const PRODUCTS = [
  {
    id: 1,
    name: 'Caja Organizadora Cartas Figuritas Del Mundial 2026',
    cat: 'Caja Organizadora',
    desc: DESC_CAJA,
    variants: [
      {
        key: 'negra',
        label: 'Negra',
        color: '#222222',
        badge: 'Popular',
        imgs: [
          '/fotos/caja-negra-1.png',
          '/fotos/caja-negra-2.png',
          '/fotos/caja-interna-1.png',
          '/fotos/caja-interna-2.png',
        ],
      },
      {
        key: 'argentina',
        label: 'Argentina',
        color: '#5BB8F5',
        imgs: [
          '/fotos/caja-blanca-1.png',
          '/fotos/caja-blanca-2.png',
          '/fotos/caja-interna-1.png',
          '/fotos/caja-interna-2.png',
        ],
      },
      {
        key: 'messi',
        label: 'Messi',
        color: '#D4AA2C',
        badge: 'Edición especial',
        imgs: [
          '/fotos/caja-messi-1.png',
          '/fotos/caja-messi-2.png',
          '/fotos/caja-interna-1.png',
          '/fotos/caja-interna-2.png',
        ],
      },
    ],
    pricing: PRICING_CAJA,
  },
  {
    id: 4,
    name: 'Copa del Mundo 24cm',
    cat: 'Copa',
    desc: 'Réplica de la Copa del Mundo FIFA. 24cm de altura, terminación dorada, base verde. Ideal para regalo o colección.',
    imgs: [
      '/fotos/copa-1.png',
      '/fotos/copa-2.png',
    ],
    pricing: [
      { qty: '×1', price: '$25.000', unit: '$25.000 c/u' },
      { qty: '×2', price: '$40.000', unit: '$20.000 c/u', best: true },
    ],
  },
  {
    id: 5,
    name: 'Figu Messi Dorada',
    cat: 'Figuras',
    badge: 'Nuevo',
    desc: 'Cromo de Messi impreso en 3D con acabado dorado. Con luz trasera el relieve se ve perfecto.',
    imgs: [
      '/fotos/figu-messi-1.png',
      '/fotos/figu-messi-2.png',
    ],
    pricing: [
      { qty: '×1',  price: '$800',   unit: '$800 c/u' },
      { qty: '×10', price: '$5.000', unit: '$500 c/u', best: true },
    ],
  },
];

export const CATEGORIES = ['Todos', ...new Set(PRODUCTS.map(p => p.cat))];
