/* ─── Lonas.tsx — Página de Producto: Lonas ─────────────────────────────────
   Secciones:
     1. Hero de Producto
     2. Grid de Categorías (Rafia / Vinil)
     3. Nuestra Garantía (3 cards)
     4. CTA Final
   ─────────────────────────────────────────────────────────────────────────── */
import { useContactNav } from '../hooks/useContactNav';

const WA_NUMBER = '525615282302';

/* ── WhatsApp icon ─────────────────────────────────────────────────────────── */
const IconWA = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

/* ── Guarantee icons ────────────────────────────────────────────────────────── */
const IconStar = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
  </svg>
);

const IconBolt = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
  </svg>
);

const IconRuler = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M2 12h20M2 12l4-4M2 12l4 4M22 12l-4-4M22 12l-4 4" />
    <rect x="2" y="8" width="20" height="8" rx="1" />
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* ── Guarantee cards data ────────────────────────────────────────────────────── */
const guarantees = [
  {
    id: 'calidad',
    icon: <IconStar />,
    title: 'Expertos en Calidad',
    text: 'No somos una tienda más. Te ofrecemos textiles de alto rendimiento con los mejores estándares de fabricación. Cada lona que entregamos está hecha para resistir, garantizándote la máxima calidad en su categoría.',
    accent: '#5D00FF',
    hoverShadow: '0 20px 60px rgba(93,0,255,0.45)',
    borderTop: '3px solid #5D00FF',
  },
  {
    id: 'entrega',
    icon: <IconBolt />,
    title: 'Entrega Inmediata',
    text: 'Sabemos que las urgencias no avisan. Abrimos los 365 días del año y contamos con stock para entrega inmediata en la mayoría de nuestras medidas.',
    accent: '#0CD4FF',
    hoverShadow: '0 20px 60px rgba(12,212,255,0.35)',
    borderTop: '3px solid #0CD4FF',
  },
  {
    id: 'gigantes',
    icon: <IconRuler />,
    title: 'Proyectos Gigantes',
    text: '¿Necesitas cubrir algo enorme? Las medidas y pedidos especiales a gran escala están listos para entregarse en tan solo 2 a 4 días.',
    accent: '#CFFF04',
    hoverShadow: '0 20px 60px rgba(207,255,4,0.35)',
    borderTop: '3px solid #CFFF04',
  },
];

/* ══════════════════════════════════════════════════════════════════════════════
   COMPONENT
   ══════════════════════════════════════════════════════════════════════════════ */
export default function Lonas() {
  const { goToContact } = useContactNav();
  const waMsg = encodeURIComponent('Hola, me interesa cotizar una lona. ¿Me pueden ayudar?');
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

  return (
    <section id="producto-lonas" className="bg-gray-50 dark:bg-[#111111]">

      {/* ──────────────────────────────────────────────────────────────────────
          SECCIÓN 1 · HERO DE PRODUCTO
          ────────────────────────────────────────────────────────────────────── */}
      <div
        className="relative flex items-center justify-center overflow-hidden border-t-4 border-[#CFFF04] min-h-[calc(100vh-4rem)]"
      >
        {/* Background image — object-cover responsivo */}
        <img
          src="/images/lona-negra-terraza.webp"
          alt="Lona negra cubriendo una terraza"
          className="absolute inset-0 w-full h-full object-cover object-center"
          loading="eager"
          decoding="async"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'rgba(0,0,0,0.65)' }} />
        {/* Subtle neon glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(207,255,4,0.08) 0%, transparent 70%)' }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-24">

          {/* Etiqueta superior */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-0.5" style={{ backgroundColor: '#CFFF04' }} />
            <span
              className="text-xs font-black tracking-[0.28em] uppercase px-3 py-1"
              style={{ backgroundColor: '#CFFF04', color: '#111111' }}
            >
              STOCK DISPONIBLE • 365 DÍAS
            </span>
            <div className="w-8 h-0.5" style={{ backgroundColor: '#CFFF04' }} />
          </div>

          {/* Título principal */}
          <h1 className="font-black uppercase tracking-tighter leading-none text-white text-4xl sm:text-6xl lg:text-7xl mb-6">
            LA LONA EXACTA{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #CFFF04 0%, #0CD4FF 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              PARA TU PROYECTO
            </span>{' '}
            Y TU PRESUPUESTO.
          </h1>

          {/* Accent bar */}
          <div className="w-16 h-1 mx-auto mb-7" style={{ backgroundColor: '#FF3A06' }} />

          {/* Párrafo */}
          <p className="text-gray-200 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
            No te conformes con lo que hay, llévate lo que necesitas. Contamos con una inmensa variedad de gamas y calidades.
          </p>

        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────
          SECCIÓN 2 · GRID DE CATEGORÍAS
          ────────────────────────────────────────────────────────────────────── */}
      <div className="bg-white dark:bg-[#0D0D0D] border-t border-black/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

          {/* Section header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
              <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#0CD4FF' }}>
                Nuestras Líneas
              </span>
              <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
            </div>
            <h2 className="font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white text-3xl sm:text-5xl">
              ELIGE TU{' '}
              <span style={{ color: '#CFFF04' }}>TIPO DE LONA.</span>
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
              Dos líneas distintas, una misma promesa: protección real para lo que más importa.
            </p>
          </div>

          {/* 2-column cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

            {/* ── Tarjeta A: Rafia ── */}
            <div
              id="cat-rafia"
              className="group relative flex flex-col overflow-hidden bg-gray-50 dark:bg-[#1C1C1C] transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                border: '3px solid #5D00FF',
                boxShadow: '6px 6px 0px 0px #5D00FF',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '6px 6px 0px 0px #5D00FF, 0 20px 60px rgba(93,0,255,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '6px 6px 0px 0px #5D00FF')}
            >
              {/* Image */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                <img
                  src="/images/lona-rafia-construccion.webp"
                  alt="Lona de rafia cubriendo materiales de construcción y agricultura"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'saturate(0.8) contrast(1.06)' }}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={576}
                />
                <div className="absolute inset-0" style={{ background: 'rgba(93,0,255,0.12)', mixBlendMode: 'multiply' }} />
                <div
                  className="absolute top-4 left-4 px-4 py-2 font-black text-xs uppercase tracking-widest"
                  style={{ backgroundColor: '#5D00FF', color: '#fff' }}
                >
                  Rafia
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-8">
                <div className="w-10 h-1 mb-4" style={{ backgroundColor: '#5D00FF' }} />
                <h3 className="font-black text-2xl sm:text-3xl uppercase tracking-tight text-gray-900 dark:text-white mb-4">
                  Lonas de Rafia
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed flex-1">
                  Versatilidad y economía sin sacrificar protección. Manejamos múltiples gamas y medidas, ideales para cubrir mercancía, zonas de construcción, agricultura o proyectos temporales en el hogar. Tenemos una opción para cada bolsillo.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-black text-sm uppercase tracking-widest transition-all duration-200 hover:gap-3"
                  style={{ color: '#5D00FF' }}
                >
                  Cotizar Rafia <IconArrow />
                </a>
              </div>
            </div>

            {/* ── Tarjeta B: Vinil ── */}
            <div
              id="cat-vinil"
              className="group relative flex flex-col overflow-hidden bg-gray-50 dark:bg-[#1C1C1C] transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                border: '3px solid #0CD4FF',
                boxShadow: '6px 6px 0px 0px #0CD4FF',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '6px 6px 0px 0px #0CD4FF, 0 20px 60px rgba(12,212,255,0.30)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '6px 6px 0px 0px #0CD4FF')}
            >
              {/* Image */}
              <div className="relative w-full h-64 sm:h-72 overflow-hidden">
                <img
                  src="/images/lona-vinil-transporte.webp"
                  alt="Camión de carga pesada cubierto con lona de vinil industrial"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  style={{ filter: 'saturate(0.8) contrast(1.06)' }}
                  loading="lazy"
                  decoding="async"
                  width={800}
                  height={576}
                />
                <div className="absolute inset-0" style={{ background: 'rgba(12,212,255,0.10)', mixBlendMode: 'multiply' }} />
                <div
                  className="absolute top-4 left-4 px-4 py-2 font-black text-xs uppercase tracking-widest"
                  style={{ backgroundColor: '#0CD4FF', color: '#111111' }}
                >
                  Vinil Uso Rudo
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-8">
                <div className="w-10 h-1 mb-4" style={{ backgroundColor: '#0CD4FF' }} />
                <h3 className="font-black text-2xl sm:text-3xl uppercase tracking-tight text-gray-900 dark:text-white mb-4">
                  Lonas de Vinil (Uso Rudo)
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed flex-1">
                  La máxima armadura contra la intemperie. Diferentes calibres y calidades industriales diseñadas para el transporte pesado, camiones y usos donde el clima no da tregua. Resistencia pura que se paga sola.
                </p>
                <a
                  href={waUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center gap-2 font-black text-sm uppercase tracking-widest transition-all duration-200 hover:gap-3"
                  style={{ color: '#0CD4FF' }}
                >
                  Cotizar Vinil <IconArrow />
                </a>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────
          SECCIÓN 2.5 · USOS IDEALES — ACORDEÓN HORIZONTAL
          ────────────────────────────────────────────────────────────────────── */}
      <div className="bg-gray-50 dark:bg-[#111111] border-t border-black/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

          {/* Section header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
              <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#0CD4FF' }}>
                Aplicaciones reales
              </span>
              <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
            </div>
            <h2 className="font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white text-3xl sm:text-5xl">
              ¿DÓNDE LO{' '}
              <span style={{ color: '#CFFF04' }}>INSTALAMOS?</span>
            </h2>
          </div>

          {/* Horizontal Accordion */}
          <div className="flex w-full gap-2 h-[500px]">

            {/* Card 1 — Transporte */}
            <div
              className="group relative flex-1 hover:flex-[4] transition-all duration-700 ease-in-out overflow-hidden cursor-pointer"
              style={{ border: '2px solid rgba(12,212,255,0.25)' }}
              onMouseEnter={e => { e.currentTarget.style.border = '2px solid #0CD4FF'; e.currentTarget.style.boxShadow = '0 0 35px rgba(12,212,255,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.border = '2px solid rgba(12,212,255,0.25)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/lona-vinil-transporte.webp')" }}
              />
              <div className="absolute inset-0 bg-black/55 dark:bg-black/65 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-700" />
              {/* Vertical title (collapsed) */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-200 pointer-events-none">
                <span
                  className="font-black text-sm uppercase tracking-[0.22em] text-white whitespace-nowrap"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  TRANSPORTE
                </span>
              </div>
              {/* Expanded content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 pointer-events-none">
                <div className="w-10 h-1 mb-4" style={{ backgroundColor: '#0CD4FF' }} />
                <h3 className="font-black text-2xl uppercase tracking-tight text-white mb-3">
                  TRANSPORTE PESADO
                </h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-sm">
                  Cubre tu carga con seguridad. Lonas diseñadas para camiones, tráileres y remolques que soportan la fricción y las peores rutas sin rasgarse.
                </p>
              </div>
            </div>

            {/* Card 2 — Construcción */}
            <div
              className="group relative flex-1 hover:flex-[4] transition-all duration-700 ease-in-out overflow-hidden cursor-pointer"
              style={{ border: '2px solid rgba(207,255,4,0.25)' }}
              onMouseEnter={e => { e.currentTarget.style.border = '2px solid #CFFF04'; e.currentTarget.style.boxShadow = '0 0 35px rgba(207,255,4,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.border = '2px solid rgba(207,255,4,0.25)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/lona-rafia-construccion.webp')" }}
              />
              <div className="absolute inset-0 bg-black/55 dark:bg-black/65 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-700" />
              {/* Vertical title (collapsed) */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-200 pointer-events-none">
                <span
                  className="font-black text-sm uppercase tracking-[0.22em] text-white whitespace-nowrap"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  CONSTRUCCIÓN
                </span>
              </div>
              {/* Expanded content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 pointer-events-none">
                <div className="w-10 h-1 mb-4" style={{ backgroundColor: '#CFFF04' }} />
                <h3 className="font-black text-2xl uppercase tracking-tight text-white mb-3">
                  OBRA Y CONSTRUCCIÓN
                </h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-sm">
                  Protege materiales, maquinaria y zonas de trabajo. Resistencia industrial contra el polvo, escombros y el clima en tu proyecto.
                </p>
              </div>
            </div>

            {/* Card 3 — Agricultura */}
            <div
              className="group relative flex-1 hover:flex-[4] transition-all duration-700 ease-in-out overflow-hidden cursor-pointer"
              style={{ border: '2px solid rgba(93,0,255,0.25)' }}
              onMouseEnter={e => { e.currentTarget.style.border = '2px solid #5D00FF'; e.currentTarget.style.boxShadow = '0 0 35px rgba(93,0,255,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.border = '2px solid rgba(93,0,255,0.25)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/lona-agricola-forraje.webp')" }}
              />
              <div className="absolute inset-0 bg-black/55 dark:bg-black/65 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-700" />
              {/* Vertical title (collapsed) */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-200 pointer-events-none">
                <span
                  className="font-black text-sm uppercase tracking-[0.22em] text-white whitespace-nowrap"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  AGRICULTURA
                </span>
              </div>
              {/* Expanded content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 pointer-events-none">
                <div className="w-10 h-1 mb-4" style={{ backgroundColor: '#5D00FF' }} />
                <h3 className="font-black text-2xl uppercase tracking-tight text-white mb-3">
                  CAMPO Y AGRICULTURA
                </h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-sm">
                  Cobertura para granos, forraje y maquinaria agrícola. Materiales que evitan la filtración de humedad y protegen tu cosecha del sol intenso.
                </p>
              </div>
            </div>

            {/* Card 4 — Comercio */}
            <div
              className="group relative flex-1 hover:flex-[4] transition-all duration-700 ease-in-out overflow-hidden cursor-pointer"
              style={{ border: '2px solid rgba(255,58,6,0.25)' }}
              onMouseEnter={e => { e.currentTarget.style.border = '2px solid #FF3A06'; e.currentTarget.style.boxShadow = '0 0 35px rgba(255,58,6,0.45)'; }}
              onMouseLeave={e => { e.currentTarget.style.border = '2px solid rgba(255,58,6,0.25)'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                style={{ backgroundImage: "url('/images/lona-tianguis-comercio.webp')" }}
              />
              <div className="absolute inset-0 bg-black/55 dark:bg-black/65 backdrop-blur-sm group-hover:backdrop-blur-none transition-all duration-700" />
              {/* Vertical title (collapsed) */}
              <div className="absolute inset-0 flex items-center justify-center group-hover:opacity-0 transition-opacity duration-200 pointer-events-none">
                <span
                  className="font-black text-sm uppercase tracking-[0.22em] text-white whitespace-nowrap"
                  style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}
                >
                  COMERCIO
                </span>
              </div>
              {/* Expanded content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200 pointer-events-none">
                <div className="w-10 h-1 mb-4" style={{ backgroundColor: '#FF3A06' }} />
                <h3 className="font-black text-2xl uppercase tracking-tight text-white mb-3">
                  NEGOCIOS Y ALMACENAJE
                </h3>
                <p className="text-gray-200 text-sm sm:text-base leading-relaxed max-w-sm">
                  Soluciones rápidas para bodegas temporales, división de áreas en naves industriales y protección de inventario al aire libre.
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────
          SECCIÓN 3 · NUESTRA GARANTÍA
          ────────────────────────────────────────────────────────────────────── */}
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
              NUESTRA{' '}
              <span style={{ color: '#FF3A06' }}>GARANTÍA.</span>
            </h2>
          </div>

          {/* Guarantee cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {guarantees.map((g) => (
              <div
                key={g.id}
                className="group relative flex flex-col p-8 bg-white dark:bg-[#1C1C1C] transition-all duration-300 hover:-translate-y-1 cursor-default"
                style={{ borderTop: g.borderTop }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = g.hoverShadow)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = 'none')}
              >
                {/* Icon */}
                <div
                  className="flex items-center justify-center w-14 h-14 mb-6"
                  style={{ backgroundColor: `${g.accent}20`, color: g.accent }}
                >
                  {g.icon}
                </div>

                {/* Title */}
                <h3 className="font-black text-xl uppercase tracking-tight text-gray-900 dark:text-white mb-3">
                  {g.title}
                </h3>

                {/* Accent line */}
                <div className="w-10 h-1 mb-5" style={{ backgroundColor: g.accent }} />

                {/* Text */}
                <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed">
                  {g.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ──────────────────────────────────────────────────────────────────────
          SECCIÓN 4 · CTA FINAL
          ────────────────────────────────────────────────────────────────────── */}
      <div
        className="bg-white dark:bg-zinc-950"
        style={{
          borderTop: '4px solid transparent',
          borderImage: 'linear-gradient(90deg, #5D00FF 0%, #0CD4FF 50%, #CFFF04 100%) 1',
        }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">

          {/* Tag */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
            <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#FF3A06' }}>
              Embudo de conversión
            </span>
            <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
          </div>

          <h2 className="font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white text-3xl sm:text-5xl lg:text-6xl mb-6">
            ¿QUÉ NECESITAS{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #CFFF04 0%, #0CD4FF 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              CUBRIR HOY?
            </span>
          </h2>

          <div className="w-16 h-1 mx-auto mb-8" style={{ backgroundColor: '#FF3A06' }} />

          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto mb-12">
            Cuéntanos tu proyecto y tu presupuesto. Te asesoramos rápido y sin compromiso para que te lleves la lona correcta.
          </p>

          {/* Single centered button */}
          <div className="flex justify-center">
            <a
              id="cta-final-contacto"
              href="/#contacto"
              onClick={goToContact}
              className="inline-flex items-center gap-3 px-10 py-4 font-black text-sm uppercase tracking-widest text-white transition-all duration-300 hover:-translate-y-0.5 active:scale-95"
              style={{
                backgroundColor: '#5D00FF',
                border: '2px solid rgba(255,255,255,0.15)',
                boxShadow: '5px 5px 0px 0px #CFFF04',
              }}
            >
              Contáctanos
              <IconArrow />
            </a>
          </div>
        </div>
      </div>

    </section>
  );
}
