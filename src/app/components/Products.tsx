import { MessageCircle } from 'lucide-react';

const WA_NUMBER = '525615282302';

interface Product {
  id: string;
  title: string;
  label: string;
  color: string;
  shadow: string;
  image: string;
  description: string;
  waMsg: string;
}

const products: Product[] = [
  {
    id: 'lonas',
    title: 'LONAS',
    label: 'Cobertura Total',
    color: '#5D00FF',
    shadow: '#5D00FF',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80',
    description:
      'La cobertura exacta para cualquier necesidad. Desde lonas de rafia prácticas y económicas para tu hogar, hasta vinil reforzado de alta resistencia para maquinaria y vehículos.',
    waMsg: 'Hola, me interesa cotizar Lonas. ¿Podrían darme más información?',
  },
  {
    id: 'mallas',
    title: 'MALLAS SOMBRAS',
    label: 'Frescura al Instante',
    color: '#CFFF04',
    shadow: '#CFFF04',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=600&q=80',
    description:
      'Sombra y frescura para tu cochera, patio o jardín. Baja la temperatura de golpe y deja respirar el aire sin quemarte con el sol.',
    waMsg: 'Hola, me interesa cotizar Mallas Sombra. ¿Podrían darme más información?',
  },
  {
    id: 'carpas',
    title: 'CARPAS Y TOLDOS',
    label: 'Protección Extrema',
    color: '#FF3A06',
    shadow: '#FF3A06',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=600&q=80',
    description:
      'Protege a tu familia del sol extremo. Carpas resistentes para cualquier espacio: cocheras, negocios, quintas y eventos al aire libre.',
    waMsg: 'Hola, me interesa cotizar Carpas y Toldos. ¿Podrían darme más información?',
  },
  {
    id: 'fundas',
    title: 'FUNDAS',
    label: 'Ajuste Exacto',
    color: '#0CD4FF',
    shadow: '#0CD4FF',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80',
    description:
      'Mantén tu auto o moto como recién lavado. Fundas con ajuste exacto que evitan el daño por el sol y la lluvia, alargando la vida de tu pintura.',
    waMsg: 'Hola, me interesa cotizar Fundas para vehículo. ¿Podrían darme más información?',
  },
];

export default function Products() {
  return (
    <section id="productos" className="py-20 lg:py-28" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#CFFF04' }}>
              Lo que vendemos
            </span>
          </div>
          <h2 className="font-black uppercase tracking-tighter text-white leading-none mb-4">
            <span className="text-4xl sm:text-5xl lg:text-6xl">NUESTRO </span>
            <span className="text-4xl sm:text-5xl lg:text-6xl" style={{ color: '#5D00FF' }}>CATÁLOGO</span>
          </h2>
          <div className="w-16 h-1 mb-6" style={{ backgroundColor: '#FF3A06' }} />
          <p className="text-gray-400 text-base sm:text-lg max-w-lg leading-relaxed">
            Soluciones a la medida para tu casa, negocio o vehículo. Materiales confiables que de
            verdad aguantan el clima, sin importar el tamaño de tu proyecto.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((p) => (
            <article
              key={p.id}
              className="group flex flex-col overflow-hidden transition-transform duration-200 hover:-translate-y-1"
              style={{
                backgroundColor: '#1C1C1C',
                border: `3px solid ${p.color}`,
                boxShadow: `6px 6px 0px 0px ${p.shadow}`,
              }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={p.image}
                  alt={p.title}
                  className="w-full h-full object-cover mix-blend-luminosity group-hover:mix-blend-normal transition-all duration-500"
                  style={{ filter: 'grayscale(30%)' }}
                />
                {/* Color overlay */}
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-0 transition-opacity duration-500"
                  style={{ backgroundColor: p.color, mixBlendMode: 'color' }}
                />
                {/* Label */}
                <div
                  className="absolute top-3 left-3 px-2 py-1 text-xs font-bold uppercase tracking-wider text-black"
                  style={{ backgroundColor: p.color }}
                >
                  {p.label}
                </div>
              </div>

              {/* Body */}
              <div className="flex flex-col flex-1 p-5">
                <h3
                  className="font-black text-xl uppercase tracking-tight mb-3"
                  style={{ color: p.color }}
                >
                  {p.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-5">
                  {p.description}
                </p>
                <a
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(p.waMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 py-3 px-4 font-bold text-sm uppercase tracking-widest text-black transition-all duration-200 hover:brightness-110 active:scale-95"
                  style={{ backgroundColor: p.color }}
                >
                  <MessageCircle size={15} />
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
