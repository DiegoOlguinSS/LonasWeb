import { CheckSquare } from 'lucide-react';

interface Feature {
  label: string;
  sublabel: string;
  title: string;
  titleColor: string;
  accent: string;
  accentColor: string;
  image: string;
  imageBlend: string;
  items: string[];
  description: string;
  reverse: boolean;
}

const features: Feature[] = [
  {
    label: 'Carpas y Toldos',
    sublabel: '— CARPAS Y TOLDOS',
    title: 'ESPACIOS QUE',
    titleColor: 'INSPIRAN',
    accent: '#CFFF04',
    accentColor: '#CFFF04',
    image: 'https://images.unsplash.com/photo-1567899378494-47b22a2ae96a?w=900&q=80',
    imageBlend: 'rgba(93,0,255,0.55)',
    items: [
      'Armado y desarmado rápido para cualquier evento',
      'Protección contra el sol, lluvia o granizo',
      'Estructura metálica de alta estabilidad',
    ],
    description:
      'Nuestras carpas y toldos aguantan el sol, el viento y la lluvia sin deformarse. Perfectas para proteger tu cochera, tu negocio o cualquier espacio al aire libre. Armado fácil, sin herramientas especiales.',
    reverse: false,
  },
  {
    label: 'Malla Sombra',
    sublabel: '— MALLA SOMBRA',
    title: 'FRESCO EN TU PATIO',
    titleColor: 'DESDE EL PRIMER DÍA',
    accent: '#0CD4FF',
    accentColor: '#0CD4FF',
    image: 'https://images.unsplash.com/photo-1558904541-efa843a96f01?w=900&q=80',
    imageBlend: 'rgba(12,212,255,0.35)',
    items: [
      'Bloquea hasta el 95% de los rayos del sol',
      'Listas para colgar en cualquier ubicación',
      'Deja pasar la brisa sin atrapar el calor sofocante',
    ],
    description:
      'La malla sombra ideal para cocheras, patios y jardines. Baja la temperatura de forma inmediata y deja pasar el aire sin quemarte con el sol.',
    reverse: true,
  },
  {
    label: 'Lonas',
    sublabel: '— LONAS',
    title: 'LA COBERTURA EXACTA',
    titleColor: 'PARA CADA NECESIDAD',
    accent: '#5D00FF',
    accentColor: '#5D00FF',
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=900&q=80',
    imageBlend: 'rgba(93,0,255,0.45)',
    items: [
      'Rafia económica para el hogar y el rancho',
      'Vinil rudo para maquinaria y vehículos',
      'Gran variedad de medidas y colores',
    ],
    description:
      'Desde lonas de rafia prácticas y económicas hasta vinil reforzado de alta resistencia. Tenemos la medida y el material exacto para cada proyecto.',
    reverse: false,
  },
  {
    label: 'Fundas',
    sublabel: '— FUNDAS',
    title: 'EL ESCUDO PERFECTO',
    titleColor: 'PARA TU VEHÍCULO',
    accent: '#FF3A06',
    accentColor: '#FF3A06',
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=900&q=80',
    imageBlend: 'rgba(255,58,6,0.35)',
    items: [
      'Confección exclusiva a la medida de tu modelo',
      'Material que no raya la pintura',
      'Sistema de sujeción contra el viento',
    ],
    description:
      'Mantén tu auto o moto como recién lavado. Fundas con ajuste exacto que evitan el daño por el sol y la lluvia, alargando la vida de tu pintura.',
    reverse: true,
  },
];

export default function Features() {
  return (
    <section id="nosotros" className="overflow-hidden" style={{ backgroundColor: '#111111' }}>
      {features.map((f, i) => (
        <div
          key={f.label}
          className={`flex flex-col ${f.reverse ? 'md:flex-row-reverse' : 'md:flex-row'}`}
          style={{ minHeight: '480px' }}
        >
          {/* Image panel */}
          <div className="relative w-full md:w-1/2 h-72 md:h-auto overflow-hidden">
            <img
              src={f.image}
              alt={f.label}
              className="w-full h-full object-cover mix-blend-luminosity"
              style={{ filter: 'grayscale(20%)' }}
            />
            {/* Color tint */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: f.imageBlend, mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Text panel */}
          <div
            className="w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-14"
            style={{ backgroundColor: '#111111' }}
          >
            {/* Sublabel */}
            <div className="flex items-center gap-2 mb-4">
              <div className="w-5 h-0.5" style={{ backgroundColor: f.accentColor }} />
              <span
                className="text-xs font-bold tracking-[0.2em] uppercase"
                style={{ color: f.accentColor }}
              >
                {f.label}
              </span>
            </div>

            {/* Title */}
            <h2 className="font-black uppercase tracking-tighter leading-none mb-2">
              <span className="block text-3xl sm:text-4xl lg:text-5xl text-white">{f.title}</span>
              <span
                className="block text-3xl sm:text-4xl lg:text-5xl"
                style={{ color: f.accent }}
              >
                {f.titleColor}
              </span>
            </h2>

            {/* Accent bar */}
            <div className="w-12 h-1 mb-5 mt-3" style={{ backgroundColor: '#FF3A06' }} />

            {/* Description */}
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-md">
              {f.description}
            </p>

            {/* Feature items */}
            <ul className="flex flex-col gap-3">
              {f.items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckSquare
                    size={20}
                    className="flex-shrink-0 mt-0.5"
                    style={{ color: f.accentColor }}
                  />
                  <span className="text-sm font-bold uppercase tracking-wider text-gray-200">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </section>
  );
}
