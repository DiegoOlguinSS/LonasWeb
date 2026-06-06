interface Product {
  id: string;
  title: string;
  border: string;
  shadow: string;
  image: string;
  description: string;
  href: string;
  btnTextClass: string;
  btnBg: string;
}

const products: Product[] = [
  {
    id: 'lonas',
    title: 'LONAS',
    border: '#5D00FF',
    shadow: '#FF3A06',
    image: '/images/lona-negra-terraza.webp',
    description:
      'La cobertura exacta para cualquier necesidad. Desde lonas de rafia prácticas y económicas para tu hogar, hasta vinil reforzado de alta resistencia para el trabajo duro.',
    href: '/producto/lonas',
    btnTextClass: 'text-white',
    btnBg: '#5D00FF',
  },
  {
    id: 'mallas',
    title: 'MALLAS SOMBRAS',
    border: '#CFFF04',
    shadow: '#5D00FF',
    image: '/images/malla-sombra-patio-residencial.webp',
    description:
      'Sombra y frescura para tu cochera, patio o jardín. Baja la temperatura de golpe y deja respirar el aire sin quemarte con el sol.',
    href: '/producto/mallas',
    btnTextClass: 'text-[#1C1C1C]',
    btnBg: '#CFFF04',
  },
  {
    id: 'carpas',
    title: 'CARPAS',
    border: '#FF3A06',
    shadow: '#0CD4FF',
    image: '/images/carpa-roja-eventos.webp',
    description:
      'Protege a tu familia del sol extremo. Carpas resistentes para cualquier espacio: cocheras, negocios, quintas y eventos.',
    href: '/producto/carpas',
    btnTextClass: 'text-white',
    btnBg: '#FF3A06',
  },
  {
    id: 'fundas',
    title: 'FUNDAS',
    border: '#0CD4FF',
    shadow: '#CFFF04',
    image: '/images/funda-auto-moto.webp',
    description:
      'Mantén tu auto o moto como recién lavado. Fundas con ajuste exacto que evitan el daño por el sol y la lluvia, alargando la vida de tu pintura e interiores.',
    href: '/producto/fundas',
    btnTextClass: 'text-[#1C1C1C]',
    btnBg: '#0CD4FF',
  },
];

export default function Products() {
  return (
    <section id="productos" className="py-20 lg:py-28 bg-gray-50 dark:bg-[#111111]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
            <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#CFFF04' }}>
              Lo que vendemos
            </span>
          </div>
          <h2 className="font-black uppercase tracking-tighter text-gray-900 dark:text-white leading-none mb-4">
            <span className="text-4xl sm:text-5xl lg:text-6xl">NUESTRO </span>
            <span className="text-4xl sm:text-5xl lg:text-6xl" style={{ color: '#5D00FF' }}>CATÁLOGO</span>
          </h2>
          <div className="w-16 h-1 mb-6" style={{ backgroundColor: '#FF3A06' }} />
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-4xl leading-relaxed">
            Soluciones a la medida para tu casa, negocio o vehículo. Materiales confiables que de
            verdad aguantan el clima, sin importar el tamaño de tu proyecto.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-1 bg-white dark:bg-[#1C1C1C]"
              style={{
                border: `4px solid ${p.border}`,
                boxShadow: `8px 8px 0px 0px ${p.shadow}`,
              }}
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Body */}
              <div className="flex flex-col flex-grow p-6">
                <h3 className="font-black text-xl uppercase tracking-tighter text-gray-900 dark:text-white mb-3">
                  {p.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                  {p.description}
                </p>
                <a
                  href={p.href}
                  className={`mt-auto block py-3 pl-4 font-bold text-sm uppercase tracking-widest text-left transition-all duration-200 hover:brightness-110 active:scale-95 ${p.btnTextClass}`}
                  style={{ backgroundColor: p.btnBg }}
                >
                  Saber más
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
