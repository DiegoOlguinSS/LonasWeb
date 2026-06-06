/* ─── About.tsx — Sección Nosotros ──────────────────────────────────────────
   Estructura:
     1. Hero de Nosotros   (Split layout texto + imagen)
     2. La Historia        (Zigzag / alternating blocks con imágenes)
     3. El Diferenciador   (Grid 3 tarjetas con hover neon)
   ─────────────────────────────────────────────────────────────────────────── */
import { useContactNav } from '../hooks/useContactNav';

/* SVG icons for differentiator cards */
const IconSpecialist = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    <path d="M16 11l1.5 1.5L20 10" />
  </svg>
);

const IconQuality = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const IconDirect = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    <path d="M8 10h.01M12 10h.01M16 10h.01" />
  </svg>
);

/* ── History blocks data ──────────────────────────────────────────────────── */
const historyBlocks = [
  {
    id: 'origen',
    subtitle: 'El Comienzo de todo',
    text: 'En 1996, nuestro espacio era minúsculo, apenas un cuarto con piso de tierra. Pero nuestra visión era inmensa. Sabíamos que, aunque empezáramos con todo en contra, el trabajo duro y la obsesión por hacer las cosas bien terminarían por abrirnos las puertas.',
    accent: '#CFFF04',
    image: '/images/comienzo-amanecer-historia.webp',
    imageAlt: 'Amanecer que simboliza el comienzo de Lonas Las Trojes, 1996',
    year: '1996',
    reverse: false,
  },
  {
    id: 'expansion',
    subtitle: 'El Crecimiento: Una Familia Resiliente',
    text: 'A base de esfuerzo inquebrantable, superamos pandemias, crisis y climas extremos. Crecimos desde ese pequeño cuarto hasta consolidarnos en Cuautitlán, Teoloyucan, la CDMX y toda la región. Porque lo bueno cuesta, pero cuando se hace con dedicación, los resultados son inevitables.',
    accent: '#0CD4FF',
    image: '/images/familia-resiliente-crecimiento.webp',
    imageAlt: 'Familia resiliente que refleja el crecimiento de Lonas Las Trojes',
    year: '30 años',
    reverse: true,
  },
  {
    id: 'filosofia',
    subtitle: 'Nuestro Norte: Tu Satisfacción',
    text: 'Seguimos siendo el mismo negocio cercano, pero con la capacidad operativa de los grandes. Nos mueve conectar contigo, entender qué necesitas cubrir y entregarte una solución que te dé paz.',
    accent: '#FF3A06',
    image: '/images/satisfaccion-cliente-trato.webp',
    imageAlt: 'Satisfacción del cliente y trato directo en Lonas Las Trojes',
    year: 'Hoy',
    reverse: false,
  },
];

/* ── Differentiator cards data ────────────────────────────────────────────── */
const diffCards = [
  {
    id: 'especialistas',
    icon: <IconSpecialist />,
    title: 'Especialistas, no generalistas',
    text: 'Mientras los grandes almacenes sacrifican calidad para venderte una marca, nosotros llevamos décadas respirando este rubro. No vendemos cajas genéricas; te entregamos nuestro expertis absoluto en textiles de uso rudo.',
    accent: '#5D00FF',
    hoverShadow: '0 20px 60px rgba(93,0,255,0.55)',
    borderClass: 'brutalist-border-purple',
  },
  {
    id: 'calidad',
    icon: <IconQuality />,
    title: 'Calidad a tu Medida',
    text: 'Una lona de supermercado te va a dejar tirado a la primera tormenta. Nosotros adaptamos el gramaje, el material y la medida exacta a tu presupuesto y al uso rudo que realmente le vas a dar.',
    accent: '#FF3A06',
    hoverShadow: '0 20px 60px rgba(255,58,6,0.55)',
    borderClass: 'brutalist-border-orange',
  },
  {
    id: 'trato',
    icon: <IconDirect />,
    title: 'Trato Directo y Real',
    text: 'Olvídate de buscar a un empleado en un pasillo enorme que no sabe del tema. Aquí hablas directo con los expertos. Atención rápida, personalizada y enfocada en resolver tu problema hoy mismo.',
    accent: '#CFFF04',
    hoverShadow: '0 20px 60px rgba(207,255,4,0.45)',
    borderClass: 'brutalist-border-green',
  },
];

/* ══════════════════════════════════════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════════════════════════════════════ */
export default function About() {
  const { goToContact } = useContactNav();

  return (
    <section
      id="nosotros"
      className="bg-gray-50 dark:bg-[#111111]"
    >
      {/* ────────────────────────────────────────────────────────────────────
          SECCIÓN 1 · HERO DE NOSOTROS
          Layout: 2 columnas (desktop) / apilado (móvil)
          ──────────────────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden border-t-4 border-[#5D00FF] bg-gray-50 dark:bg-[#111111]">
        {/* Ambient glow top-right */}
        <div
          className="pointer-events-none absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full blur-[140px] opacity-10 dark:opacity-20"
          style={{ backgroundColor: '#5D00FF' }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* ── Columna de Texto ── */}
            <div className="flex flex-col items-start">
              {/* Etiqueta "DESDE 1996" */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-0.5" style={{ backgroundColor: '#CFFF04' }} />
                <span
                  className="text-sm font-black tracking-[0.25em] uppercase"
                  style={{ color: '#CFFF04' }}
                >
                  DESDE 1996
                </span>
              </div>

              {/* Título principal */}
              <h2 className="font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white mb-6 text-4xl sm:text-5xl lg:text-6xl">
                30 AÑOS<br />
                <span
                  className="inline-block mt-1"
                  style={{
                    background: 'linear-gradient(90deg, #CFFF04 0%, #0CD4FF 100%)',
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  CUBRIENDO LO QUE
                </span>
                <br />
                <span className="text-gray-900 dark:text-white">MÁS TE IMPORTA.</span>
              </h2>

              {/* Accent bar */}
              <div className="w-16 h-1 mb-7" style={{ backgroundColor: '#FF3A06' }} />

              {/* Párrafo */}
              <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg">
                Somos el negocio familiar que lleva tres décadas protegiendo lo que más valoras.
                Sin atajos, sin materiales genéricos. Solo resistencia pura, diseñada a la medida
                del clima y de tu exigencia.
              </p>

              {/* Stats rápidos */}
              <div className="flex flex-wrap gap-6 mt-10">
                {[
                  { value: '+30', label: 'Años de experiencia', color: '#CFFF04' },
                  { value: '4+', label: 'Municipios cubiertos', color: '#0CD4FF' },
                  { value: '100%', label: 'Trato personalizado', color: '#FF3A06' },
                ].map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span
                      className="font-black text-3xl sm:text-4xl leading-none"
                      style={{ color: stat.color }}
                    >
                      {stat.value}
                    </span>
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 mt-1">
                      {stat.label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Columna de Imagen ── */}
            {/* REEMPLAZA el src de la img con tu foto real */}
            <div className="relative w-full">
              {/* Neon border frame offset */}
              <div
                className="absolute inset-0 translate-x-4 translate-y-4 z-0"
                style={{ border: '3px solid #CFFF04' }}
              />
              <div
                className="relative z-10 overflow-hidden neon-frame-pulse"
                style={{
                  border: '3px solid #5D00FF',
                  boxShadow: '0 0 40px rgba(93,0,255,0.3)',
                  aspectRatio: '4/5',
                }}
              >
                <img
                  /* ── REEMPLAZA con tu imagen real ── */
                  src="/images/historia-lonas-las-trojes.webp"
                  alt="Historia de Lonas Las Trojes, desde 1996"
                  className="w-full h-full object-cover"
                  style={{ filter: 'saturate(0.9) contrast(1.05)' }}
                  loading="eager"
                  fetchPriority="high"
                  decoding="async"
                  width={900}
                  height={1125}
                />
                {/* Color overlay */}
                <div
                  className="absolute inset-0"
                  style={{ background: 'rgba(93,0,255,0.1)', mixBlendMode: 'multiply' }}
                />
                {/* Label badge */}
                <div
                  className="absolute bottom-4 left-4 px-4 py-2 font-black text-xs uppercase tracking-widest"
                  style={{ backgroundColor: '#CFFF04', color: '#111111' }}
                >
                  Lonas Las Trojes — Desde 1996
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────
          SECCIÓN 2 · LA HISTORIA (Zigzag alternado)
          ──────────────────────────────────────────────────────────────────── */}
      <div className="bg-white dark:bg-[#0D0D0D] border-t border-black/10 dark:border-white/5">
        {/* Section header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
            <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#0CD4FF' }}>
              Nuestra Historia
            </span>
            <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
          </div>
          <h2 className="font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white text-3xl sm:text-5xl">
            TRES DÉCADAS DE{' '}
            <span style={{ color: '#CFFF04' }}>TRABAJO REAL.</span>
          </h2>
        </div>

        {/* Zigzag blocks */}
        <div className="divide-y divide-black/8 dark:divide-white/5">
          {historyBlocks.map((block) => (
            <div
              key={block.id}
              className={`flex flex-col ${block.reverse ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-stretch min-h-[420px]`}
            >
              {/* Image side */}
              <div className="relative w-full lg:w-1/2 h-64 sm:h-80 lg:h-auto overflow-hidden">
                {/* REEMPLAZA el src con tu imagen real */}
                <img
                  src={block.image}
                  alt={block.imageAlt}
                  className="w-full h-full object-cover"
                  style={{ filter: 'grayscale(15%) saturate(0.9)' }}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={420}
                />
                {/* Neon tint overlay */}
                <div
                  className="absolute inset-0"
                  style={{ backgroundColor: `${block.accent}22`, mixBlendMode: 'multiply' }}
                />
                {/* Year badge */}
                <div
                  className="absolute top-4 left-4 px-4 py-2 font-black text-sm sm:text-base uppercase tracking-widest"
                  style={{ backgroundColor: block.accent, color: '#111111' }}
                >
                  {block.year}
                </div>
              </div>

              {/* Text side */}
              <div className="relative w-full lg:w-1/2 flex flex-col justify-center px-8 sm:px-12 lg:px-16 py-14 bg-gray-50 dark:bg-[#111111] overflow-hidden">
                {/* Ambient glow */}
                <div
                  className="pointer-events-none absolute -bottom-20 -right-20 w-72 h-72 rounded-full blur-[100px] opacity-15 dark:opacity-20"
                  style={{ backgroundColor: block.accent }}
                />

                {/* Accent line + subtitle */}
                <div className="flex items-center gap-3 mb-5 relative">
                  <div className="w-8 h-1" style={{ backgroundColor: block.accent }} />
                  <span
                    className="text-xs font-black tracking-[0.2em] uppercase"
                    style={{ color: block.accent }}
                  >
                    {block.subtitle}
                  </span>
                </div>

                {/* Subtitle as h3 */}
                <h3 className="font-black uppercase tracking-tight leading-tight text-gray-900 dark:text-white text-2xl sm:text-3xl lg:text-4xl mb-6 relative">
                  {block.subtitle}
                </h3>

                {/* Text */}
                <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-lg relative">
                  {block.text}
                </p>

                {/* Bottom neon bar */}
                <div className="mt-8 w-12 h-1 relative" style={{ backgroundColor: block.accent }} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ────────────────────────────────────────────────────────────────────
          SECCIÓN 3 · EL DIFERENCIADOR (3 tarjetas con hover neon)
          ──────────────────────────────────────────────────────────────────── */}
      <div className="bg-gray-50 dark:bg-[#111111] border-t border-black/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

          {/* Section header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
              <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#CFFF04' }}>
                ¿Por qué elegirnos?
              </span>
              <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
            </div>
            <h2 className="font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white text-3xl sm:text-5xl">
              NOSOTROS VS{' '}
              <span style={{ color: '#FF3A06' }}>EL SUPER.</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Los supermercados venden de todo. Nosotros somos expertos en una sola cosa: protegerte.
            </p>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {diffCards.map((card) => (
              <div
                key={card.id}
                className={`group relative flex flex-col p-8 bg-white dark:bg-[#1C1C1C] transition-all duration-300 cursor-default ${card.borderClass}`}
                style={{ '--hover-shadow': card.hoverShadow } as React.CSSProperties}
              >
                {/* Ambient glow on hover — CSS-driven via inline style trick */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-none"
                  style={{ boxShadow: card.hoverShadow }}
                />

                {/* Hover translate — applied via Tailwind group-hover */}
                <div className="relative transition-transform duration-300 group-hover:-translate-y-2">
                  {/* Icon */}
                  <div
                    className="flex items-center justify-center w-14 h-14 mb-6"
                    style={{ backgroundColor: `${card.accent}20`, color: card.accent }}
                  >
                    {card.icon}
                  </div>

                  {/* Title */}
                  <h3
                    className="font-black text-xl sm:text-2xl uppercase tracking-tight mb-4 text-gray-900 dark:text-white"
                  >
                    {card.title}
                  </h3>

                  {/* Accent line */}
                  <div className="w-10 h-1 mb-5" style={{ backgroundColor: card.accent }} />

                  {/* Text */}
                  <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                    {card.text}
                  </p>


                </div>
              </div>
            ))}
          </div>

          {/* CTA strip */}
          <div
            className="mt-16 flex flex-col sm:flex-row items-center justify-between gap-6 px-8 py-6 bg-white dark:bg-[#1C1C1C]"
            style={{ border: '3px solid #CFFF04', boxShadow: '6px 6px 0px 0px #CFFF04' }}
          >
            <div>
              <p className="font-black text-xl uppercase tracking-tight text-gray-900 dark:text-white">
                ¿Lista tu decisión?
              </p>
              <p className="text-gray-600 dark:text-gray-400 text-sm mt-1">
                Habla con nosotros hoy y descubre la mejor solución para tu proyecto.
              </p>
            </div>
            <a
              href="/"
              onClick={goToContact}
              className="inline-flex items-center gap-3 px-8 py-4 font-black text-sm uppercase tracking-widest text-white transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 active:scale-95 whitespace-nowrap"
              style={{
                backgroundColor: '#5D00FF',
                border: '2px solid #ffffff',
                boxShadow: '4px 4px 0px 0px #CFFF04',
              }}
            >
              Contactar ahora
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
