/* ─── Mallas.tsx — Página de Producto: Malla Sombras ────────────────────── */
import { useContactNav } from '../hooks/useContactNav';

const WA_NUMBER = '525615282302';

const IconWA = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 flex-shrink-0">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z" />
  </svg>
);

const IconSun = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <circle cx="12" cy="12" r="5" />
    <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
    <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
    <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
    <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
  </svg>
);

const IconWind = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2" />
  </svg>
);

const IconRuler = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
    <path d="M3 17l4-4 4 4 4-4 4 4" /><rect x="2" y="3" width="20" height="18" rx="2" />
  </svg>
);

const IconArrow = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

export default function Mallas() {
  const { goToContact } = useContactNav();
  const waMsg = encodeURIComponent('Hola, me interesa cotizar malla sombra. ¿Me pueden ayudar?');
  const waUrl = `https://wa.me/${WA_NUMBER}?text=${waMsg}`;

  return (
    <section id="producto-mallas" className="bg-gray-50 dark:bg-[#111111]">

      {/* ── 1. HERO CINEMÁTICO ─────────────────────────────────────────────── */}
      <div
        className="relative flex items-center justify-center overflow-hidden border-t-4 border-[#CFFF04] min-h-[calc(100vh-4rem)]"
      >
        {/* Background image — object-cover garantiza responsividad sin deformación */}
        <img
          src="/images/malla-sombra-patio-residencial.webp"
          alt="Malla sombra instalada en patio residencial"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        {/* Overlay oscuro para legibilidad del texto blanco y verde neón */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
        {/* Subtle neon glow overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse at center top, rgba(207,255,4,0.08) 0%, transparent 70%)' }} />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-24">
          {/* Label */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-0.5" style={{ backgroundColor: '#CFFF04' }} />
            <span className="text-xs font-black tracking-[0.28em] uppercase px-3 py-1" style={{ backgroundColor: '#CFFF04', color: '#111111' }}>
              PROTECCIÓN SOLAR INTELIGENTE
            </span>
            <div className="w-8 h-0.5" style={{ backgroundColor: '#CFFF04' }} />
          </div>

          {/* Title */}
          <h1 className="font-black uppercase tracking-tighter leading-none text-white text-4xl sm:text-6xl lg:text-7xl mb-6">
            SOMBRA Y FRESCURA{' '}
            <span style={{ background: 'linear-gradient(90deg,#CFFF04 0%,#0CD4FF 100%)', WebkitBackgroundClip: 'text', backgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              INMEDIATA
            </span>
            {' '}PARA TUS ESPACIOS.
          </h1>

          <div className="w-16 h-1 mx-auto mb-7" style={{ backgroundColor: '#FF3A06' }} />

          <p className="text-gray-200 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Baja la temperatura de tu patio, cochera o negocio sin atrapar el aire sofocante. Malla sombra lista para colgar.
          </p>
        </div>
      </div>

      {/* ── 2. BENTO BOX: BENEFICIOS ──────────────────────────────────────── */}
      <div className="bg-white dark:bg-[#0D0D0D] border-t border-black/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
              <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#0CD4FF' }}>¿Por qué malla sombra?</span>
              <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
            </div>
            <h2 className="font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white text-3xl sm:text-5xl">
              BENEFICIOS QUE <span style={{ color: '#CFFF04' }}>SE SIENTEN.</span>
            </h2>
          </div>

          {/* Bento Grid — asimétrico */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 auto-rows-auto">

            {/* Caja A — Principal, ocupa 2 columnas en lg */}
            <div
              className="lg:col-span-2 relative overflow-hidden flex flex-col justify-between p-8 sm:p-10 min-h-[280px] transition-all duration-300 cursor-default group"
              style={{ backgroundColor: '#0CD4FF10', border: '2px solid #0CD4FF', boxShadow: '0 0 0 0 #0CD4FF' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 40px rgba(12,212,255,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 0 0 #0CD4FF')}
            >
              {/* Ambient glow */}
              <div className="pointer-events-none absolute -top-20 -right-20 w-64 h-64 rounded-full blur-[80px] opacity-20" style={{ backgroundColor: '#0CD4FF' }} />
              <div className="relative">
                <div className="flex items-center justify-center w-16 h-16 mb-6" style={{ backgroundColor: '#0CD4FF20', color: '#0CD4FF' }}>
                  <IconSun />
                </div>
                <h3 className="font-black text-2xl sm:text-3xl uppercase tracking-tight text-gray-900 dark:text-white mb-3">
                  Bloqueo UV de Alto Rendimiento
                </h3>
                <div className="w-10 h-1 mb-4" style={{ backgroundColor: '#0CD4FF' }} />
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed max-w-lg">
                  Protege a tu familia, tus vehículos y tus muebles bloqueando hasta el <strong className="text-gray-900 dark:text-white">95%</strong> de los rayos solares dañinos.
                </p>
              </div>
              <div className="mt-8 font-black text-5xl sm:text-7xl" style={{ color: '#0CD4FF', opacity: 0.12 }}>95%</div>
            </div>

            {/* Caja B */}
            <div
              className="relative overflow-hidden flex flex-col p-8 min-h-[280px] transition-all duration-300 cursor-default"
              style={{ backgroundColor: '#CFFF0408', border: '2px solid #CFFF04', boxShadow: '0 0 0 0 #CFFF04' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 40px rgba(207,255,4,0.30)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 0 0 #CFFF04')}
            >
              <div className="pointer-events-none absolute -bottom-16 -left-16 w-48 h-48 rounded-full blur-[70px] opacity-15" style={{ backgroundColor: '#CFFF04' }} />
              <div className="flex items-center justify-center w-14 h-14 mb-6" style={{ backgroundColor: '#CFFF0420', color: '#CFFF04' }}>
                <IconWind />
              </div>
              <h3 className="font-black text-xl sm:text-2xl uppercase tracking-tight text-gray-900 dark:text-white mb-3">Aire que Fluye</h3>
              <div className="w-10 h-1 mb-4" style={{ backgroundColor: '#CFFF04' }} />
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed flex-1">
                A diferencia de las lonas cerradas, nuestra malla permite que la brisa circule, eliminando el calor sofocante.
              </p>
            </div>

            {/* Caja C */}
            <div
              className="relative overflow-hidden flex flex-col p-8 min-h-[220px] transition-all duration-300 cursor-default md:col-span-2 lg:col-span-1"
              style={{ backgroundColor: '#FF3A0608', border: '2px solid #FF3A06', boxShadow: '0 0 0 0 #FF3A06' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 40px rgba(255,58,6,0.25)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 0 0 #FF3A06')}
            >
              <div className="pointer-events-none absolute -top-10 -right-10 w-40 h-40 rounded-full blur-[60px] opacity-15" style={{ backgroundColor: '#FF3A06' }} />
              <div className="flex items-center justify-center w-14 h-14 mb-6" style={{ backgroundColor: '#FF3A0620', color: '#FF3A06' }}>
                <IconRuler />
              </div>
              <h3 className="font-black text-xl sm:text-2xl uppercase tracking-tight text-gray-900 dark:text-white mb-3">Las Mejores Medidas</h3>
              <div className="w-10 h-1 mb-4" style={{ backgroundColor: '#FF3A06' }} />
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed flex-1">
                Ofrecemos una variedad de medidas, capaces de adaptarse en múltiples espacios.
              </p>
            </div>

            {/* Caja D — estadística visual */}
            <div
              className="relative overflow-hidden flex flex-col items-center justify-center p-8 min-h-[220px] text-center transition-all duration-300 cursor-default md:col-span-2 lg:col-span-2"
              style={{ backgroundColor: '#5D00FF08', border: '2px solid #5D00FF', boxShadow: '0 0 0 0 #5D00FF' }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '0 0 40px rgba(93,0,255,0.28)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '0 0 0 0 #5D00FF')}
            >
              <div className="pointer-events-none absolute inset-0 rounded-full blur-[100px] opacity-10" style={{ backgroundColor: '#5D00FF' }} />
              <div className="flex flex-wrap justify-center gap-12 relative">
                {[
                  { val: '-10°C', label: 'Reducción de temperatura', color: '#0CD4FF' },
                  { val: '30+', label: 'Años cubriendo espacios', color: '#CFFF04' },
                  { val: '100%', label: 'Buenas medidas', color: '#FF3A06' },
                ].map(s => (
                  <div key={s.label} className="flex flex-col items-center">
                    <span className="font-black text-4xl sm:text-5xl leading-none" style={{ color: s.color }}>{s.val}</span>
                    <span className="text-xs uppercase tracking-widest font-bold text-gray-500 dark:text-gray-400 mt-2 max-w-[120px] text-center">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── 3. CASOS DE USO ───────────────────────────────────────────────── */}
      <div className="bg-gray-50 dark:bg-[#111111] border-t border-black/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
              <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#CFFF04' }}>Aplicaciones reales</span>
              <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
            </div>
            <h2 className="font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white text-3xl sm:text-5xl">
              ¿DÓNDE LA <span style={{ color: '#0CD4FF' }}>INSTALAMOS?</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                id: 'cocheras',
                title: 'Cocheras',
                desc: 'Protege la pintura de tu auto y evita subirte a un horno.',
                img: '/images/malla-sombra-cocheras.webp',
                alt: 'Cochera con malla sombra moderna',
                accent: '#0CD4FF',
              },
              {
                id: 'terrazas',
                title: 'Terrazas y Patios',
                desc: 'Convierte tu patio soleado en el lugar favorito de la casa.',
                img: '/images/malla-sombra-terrazas.webp',
                alt: 'Terraza con sombra y plantas',
                accent: '#CFFF04',
              },
              {
                id: 'negocios',
                title: 'Negocios',
                desc: 'Sombra extensa y segura para áreas comunes.',
                img: '/images/malla-sombra-vivero.webp',
                alt: 'Área común de negocio con protección solar',
                accent: '#FF3A06',
              },
            ].map(card => (
              <div
                key={card.id}
                className="group flex flex-col overflow-hidden bg-white dark:bg-[#1C1C1C] transition-all duration-300 hover:-translate-y-1"
                style={{ border: `2px solid ${card.accent}`, boxShadow: `4px 4px 0px 0px ${card.accent}` }}
                onMouseEnter={e => (e.currentTarget.style.boxShadow = `4px 4px 0px 0px ${card.accent}, 0 16px 48px ${card.accent}44`)}
                onMouseLeave={e => (e.currentTarget.style.boxShadow = `4px 4px 0px 0px ${card.accent}`)}
              >
                {/* Image with zoom */}
                <div className="relative w-full h-64 overflow-hidden">
                  <img
                    src={card.img}
                    alt={card.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    style={{ filter: 'saturate(0.85) contrast(1.06)' }}
                    loading="lazy"
                    decoding="async"
                    width={700}
                    height={256}
                  />
                  <div className="absolute inset-0" style={{ background: `${card.accent}18`, mixBlendMode: 'multiply' }} />
                  <div className="absolute top-4 left-4 px-3 py-1.5 font-black text-xs uppercase tracking-widest" style={{ backgroundColor: card.accent, color: '#111111' }}>
                    {card.title}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1 p-6">
                  <div className="w-8 h-1 mb-4" style={{ backgroundColor: card.accent }} />
                  <h3 className="font-black text-xl uppercase tracking-tight text-gray-900 dark:text-white mb-3">{card.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed flex-1">{card.desc}</p>
                  <a
                    href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(`Hola, me interesa malla sombra para ${card.title.toLowerCase()}. ¿Me pueden ayudar?`)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-2 font-black text-sm uppercase tracking-widest transition-all duration-200 hover:gap-3"
                    style={{ color: card.accent }}
                  >
                    Cotizar <IconArrow />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 4. CTA GLASSMORPHISM ─────────────────────────────────────────── */}
      <div
        className="border-t border-black/10 dark:border-white/5 bg-gray-50 dark:bg-[#111111]"
        style={{ borderTopWidth: '4px', borderTopStyle: 'solid', borderImage: 'linear-gradient(90deg,#CFFF04,#0CD4FF,#5D00FF) 1' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div
            className="mx-auto max-w-3xl rounded-2xl px-8 sm:px-12 py-14 text-center backdrop-blur-md"
            style={{
              background: 'rgba(255,255,255,0.7)',
              border: '1.5px solid rgba(255,255,255,0.5)',
              boxShadow: '0 8px 60px rgba(12,212,255,0.12), inset 0 1px 0 rgba(255,255,255,0.6)',
            }}
          >
            {/* Dark mode overlay layer via pseudo — handled via a dark-mode wrapper div */}
            <div className="hidden dark:block absolute inset-0 rounded-2xl pointer-events-none" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(12px)' }} />

            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-6 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
                <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#0CD4FF' }}>Asesoría sin compromiso</span>
                <div className="w-6 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
              </div>

              <h2 className="font-black uppercase tracking-tighter leading-tight text-gray-900 dark:text-white text-2xl sm:text-4xl mb-4">
                ¿Cansado de que tu espacio sea un{' '}
                <span style={{ color: '#FF3A06' }}>horno?</span>
              </h2>

              <div className="w-12 h-1 mx-auto mb-6" style={{ backgroundColor: '#CFFF04' }} />

              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
                Envíanos las medidas de tu área o una foto, y te damos la solución exacta hoy mismo.
              </p>

              <a
                id="cta-mallas-experto"
                href="/#contacto"
                onClick={goToContact}
                className="inline-flex items-center justify-center px-10 py-4 font-black text-sm uppercase tracking-widest transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 active:scale-95"
                style={{ backgroundColor: '#0CD4FF', border: '2px solid rgba(0,0,0,0.1)', boxShadow: '5px 5px 0px 0px #CFFF04', color: '#111111' }}
              >
                CONTÁCTANOS
              </a>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
