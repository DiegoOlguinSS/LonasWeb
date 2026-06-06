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
    image: '/images/carpa-roja-eventos.webp',
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
    image: '/images/malla-sombra-patio-residencial.webp',
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
    image: '/images/lona-negra-terraza.webp',
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
    image: '/images/funda-auto-moto.webp',
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
    <section id="productos-detalle" className="overflow-hidden bg-gray-50 dark:bg-[#111111]">
      {features.map((f) => (
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
              loading="lazy"
              decoding="async"
              width={900}
              height={480}
            />
            {/* Color tint */}
            <div
              className="absolute inset-0"
              style={{ backgroundColor: f.imageBlend, mixBlendMode: 'multiply' }}
            />
          </div>

          {/* Text panel */}
          <div
            className="relative w-full md:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-14 overflow-hidden bg-[#1C1C1C]"
          >
            {/* Ambient glow blob */}
            <div
              className="pointer-events-none absolute -top-16 -left-16 w-80 h-80 rounded-full blur-[120px] opacity-25"
              style={{ backgroundColor: f.accentColor }}
            />

            {/* Sublabel */}
            <div className="relative flex items-center gap-2 mb-4">
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
