/* ─── Fundas.tsx — Página de Producto: Fundas para Autos y Motos ─────────────
   Secciones:
     1. Hero Cinemático (Anti-bug, idéntico a Lonas)
     2. Choque de Realidades (Grid 2 columnas)
     3. Anatomía de la Armadura (Bento Box 3 tarjetas)
     4. Cobertura Total (Galería Asimétrica)
     5. Tu Funda en 3 Pasos (Timeline horizontal)
     6. CTA Final Glassmorphism
   ─────────────────────────────────────────────────────────────────────────── */
import { useContactNav } from '../hooks/useContactNav';

const IconShield = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const IconFeather = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <path d="M20.24 12.24a6 6 0 0 0-8.49-8.49L5 10.5V19h8.5z" />
    <line x1="16" y1="8" x2="2" y2="22" />
    <line x1="17.5" y1="15" x2="9" y2="15" />
  </svg>
);

const IconLink = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
    <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
    <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
  </svg>
);

export default function Fundas() {
  const { goToContact } = useContactNav();

  return (
    <section id="producto-fundas" className="bg-gray-50 dark:bg-[#111111]">

      {/* ── 1. HERO CINEMÁTICO ─────────────────────────────────────────────── */}
      <div
        className="relative flex items-center justify-center overflow-hidden border-t-4 border-[#0CD4FF] min-h-[calc(100vh-4rem)]"
        style={{
          backgroundImage: 'linear-gradient(rgba(0,0,0,0.65), rgba(0,0,0,0.65)), url(/images/funda-auto-moto.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Neon glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(12,212,255,0.10) 0%, transparent 65%)' }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-24">

          {/* Etiqueta */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-0.5" style={{ backgroundColor: '#0CD4FF' }} />
            <span
              className="text-xs font-black tracking-[0.28em] uppercase px-3 py-1"
              style={{ backgroundColor: '#0CD4FF', color: '#111111' }}
            >
              PROTECCIÓN A LA MEDIDA
            </span>
            <div className="w-8 h-0.5" style={{ backgroundColor: '#0CD4FF' }} />
          </div>

          {/* Título */}
          <h1 className="font-black uppercase tracking-tighter leading-none text-white text-4xl sm:text-6xl lg:text-7xl mb-6 text-center">
            LA PROTECCIÓN PERFECTA{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #0CD4FF 0%, #5D00FF 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              PARA TU AUTO Y MOTO
            </span>
          </h1>

          <div className="w-16 h-1 mx-auto mb-7" style={{ backgroundColor: '#5D00FF' }} />

          {/* Párrafo */}
          <p className="text-gray-200 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Hechas a la medida para que le queden como guante. Protege tu pintura del clima y la suciedad con una funda que no sale volando ni se rompe a la primera.
          </p>

        </div>
      </div>

      {/* ── 2. CHOQUE DE REALIDADES ─────────────────────────────────────────── */}
      <div className="bg-white dark:bg-[#0D0D0D] border-t border-black/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#0CD4FF' }} />
              <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#5D00FF' }}>
                Genérico vs. Precisión
              </span>
              <div className="w-8 h-0.5" style={{ backgroundColor: '#0CD4FF' }} />
            </div>
            <h2 className="font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white text-3xl sm:text-5xl">
              EL VERDADERO VALOR DE UN{' '}
              <span style={{ color: '#0CD4FF' }}>CORTE EXACTO.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

            {/* Columna Peligro — Naranja */}
            <div
              className="relative p-8 rounded-none transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                border: '2px solid #FF3A06',
                boxShadow: '6px 6px 0px 0px #FF3A06',
                background: 'rgba(255,58,6,0.04)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '6px 6px 0px 0px #FF3A06, 0 20px 60px rgba(255,58,6,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '6px 6px 0px 0px #FF3A06')}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-xs font-black uppercase tracking-widest"
                style={{ backgroundColor: '#FF3A06', color: '#fff' }}
              >
                ⚠ El riesgo de lo genérico
              </div>
              <h3 className="font-black text-xl uppercase tracking-tight text-gray-900 dark:text-white mb-4">
                El riesgo de lo genérico
              </h3>
              <div className="w-10 h-1 mb-5" style={{ backgroundColor: '#FF3A06' }} />
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                Las fundas de supermercado quedan holgadas. Con el viento, esa tela sobrante golpea y frota constantemente la carrocería, creando micro-rayaduras que opacan tu pintura, además de tostarse rápidamente con el sol.
              </p>
            </div>

            {/* Columna Premium — Verde Neón */}
            <div
              className="relative p-8 rounded-none transition-all duration-300 hover:-translate-y-1 cursor-default"
              style={{
                border: '2px solid #00E676',
                boxShadow: '6px 6px 0px 0px #00E676',
                background: 'rgba(0,230,118,0.04)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '6px 6px 0px 0px #00E676, 0 20px 60px rgba(0,230,118,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '6px 6px 0px 0px #00E676')}
            >
              <div
                className="inline-flex items-center gap-2 px-3 py-1 mb-5 text-xs font-black uppercase tracking-widest"
                style={{ backgroundColor: '#00E676', color: '#111111' }}
              >
                ✓ La solución Las Trojes
              </div>
              <h3 className="font-black text-xl uppercase tracking-tight text-gray-900 dark:text-white mb-4">
                La solución Las Trojes
              </h3>
              <div className="w-10 h-1 mb-5" style={{ backgroundColor: '#00E676' }} />
              <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed">
                Nuestro corte garantiza un ajuste que respeta las líneas de tu vehículo. Eliminamos la fricción, utilizamos materiales de alta resistencia a la intemperie y aseguramos durabilidad.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ── 3. ANATOMÍA DE LA ARMADURA ──────────────────────────────────────── */}
      <div className="bg-gray-50 dark:bg-[#111111] border-t border-black/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#5D00FF' }} />
              <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#0CD4FF' }}>
                Materiales y Construcción
              </span>
              <div className="w-8 h-0.5" style={{ backgroundColor: '#5D00FF' }} />
            </div>
            <h2 className="font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white text-3xl sm:text-5xl">
              CONSTRUIDAS PARA{' '}
              <span style={{ color: '#5D00FF' }}>DURAR.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            {/* Tarjeta A — Escudo */}
            <div
              className="group p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                border: '2px solid #0CD4FF',
                boxShadow: '4px 4px 0px 0px #0CD4FF',
                background: 'rgba(12,212,255,0.03)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '4px 4px 0px 0px #0CD4FF, 0 20px 60px rgba(12,212,255,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '4px 4px 0px 0px #0CD4FF')}
            >
              <div className="mb-6" style={{ color: '#0CD4FF' }}>
                <IconShield />
              </div>
              <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: '#0CD4FF' }} />
              <h3 className="font-black text-lg uppercase tracking-tight text-gray-900 dark:text-white mb-3">
                Exterior Escudo
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Material impermeable con protección UV. Rechaza el agua, el granizo y el sol implacable para que el interior de tu auto no se convierta en un horno.
              </p>
            </div>

            {/* Tarjeta B — Interior Afelpado */}
            <div
              className="group p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                border: '2px solid #5D00FF',
                boxShadow: '4px 4px 0px 0px #5D00FF',
                background: 'rgba(93,0,255,0.03)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '4px 4px 0px 0px #5D00FF, 0 20px 60px rgba(93,0,255,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '4px 4px 0px 0px #5D00FF')}
            >
              <div className="mb-6" style={{ color: '#5D00FF' }}>
                <IconFeather />
              </div>
              <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: '#5D00FF' }} />
              <h3 className="font-black text-lg uppercase tracking-tight text-gray-900 dark:text-white mb-3">
                Interior Afelpado
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Un forro suave de algodón que acaricia la pintura. Diseñado específicamente para evitar cualquier tipo de fricción o rayón al momento de poner o quitar la funda.
              </p>
            </div>

            {/* Tarjeta C — Amarres */}
            <div
              className="group p-8 transition-all duration-300 hover:-translate-y-1"
              style={{
                border: '2px solid #CFFF04',
                boxShadow: '4px 4px 0px 0px #CFFF04',
                background: 'rgba(207,255,4,0.03)',
              }}
              onMouseEnter={e => (e.currentTarget.style.boxShadow = '4px 4px 0px 0px #CFFF04, 0 20px 60px rgba(207,255,4,0.35)')}
              onMouseLeave={e => (e.currentTarget.style.boxShadow = '4px 4px 0px 0px #CFFF04')}
            >
              <div className="mb-6" style={{ color: '#CFFF04' }}>
                <IconLink />
              </div>
              <div className="w-8 h-0.5 mb-4" style={{ backgroundColor: '#CFFF04' }} />
              <h3 className="font-black text-lg uppercase tracking-tight text-gray-900 dark:text-white mb-3">
                Amarres de Seguridad
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                Cintas de sujeción y elásticos. Tu funda se mantendrá firme y en su lugar, sin salir volando ni en los días con los vientos más fuertes.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ── 4. COBERTURA TOTAL ──────────────────────────────────────────────── */}
      <div className="bg-white dark:bg-[#0D0D0D] border-t border-black/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#0CD4FF' }} />
              <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#5D00FF' }}>
                Aplicaciones reales
              </span>
              <div className="w-8 h-0.5" style={{ backgroundColor: '#0CD4FF' }} />
            </div>
            <h2 className="font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white text-3xl sm:text-5xl">
              DISEÑAMOS PARA{' '}
              <span style={{ color: '#0CD4FF' }}>CADA LÍNEA.</span>
            </h2>
          </div>

          <div className="flex flex-col gap-6">

            {/* Banner 1 — Autos */}
            <div
              className="relative overflow-hidden group"
              style={{ minHeight: '320px', border: '2px solid #0CD4FF', boxShadow: '6px 6px 0px 0px #0CD4FF' }}
            >
              <img
                src="/images/funda-autos-camionetas.webp"
                alt="Funda para autos y camionetas"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0"
                style={{ filter: 'saturate(0.85) contrast(1.06)' }}
                loading="lazy"
                decoding="async"
                width={1400}
                height={320}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center px-10">
                <div
                  className="inline-flex w-fit px-3 py-1.5 font-black text-xs uppercase tracking-widest mb-4"
                  style={{ backgroundColor: '#0CD4FF', color: '#111111' }}
                >
                  Autos y Camionetas
                </div>
                <p className="text-gray-200 text-base sm:text-lg leading-relaxed max-w-md">
                  No importa si es el coche que usas todos los días, la camioneta de trabajo, o ese clásico que tienes muy bien cuidado bajo techo. Hacemos el corte para que la funda le quede perfecta a cualquier modelo.
                </p>
              </div>
            </div>

            {/* Banner 2 — Motos */}
            <div
              className="relative overflow-hidden group"
              style={{ minHeight: '320px', border: '2px solid #5D00FF', boxShadow: '6px 6px 0px 0px #5D00FF' }}
            >
              <img
                src="/images/funda-motos.webp"
                alt="Funda para motocicletas"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 absolute inset-0"
                style={{ filter: 'saturate(0.85) contrast(1.06)' }}
                loading="lazy"
                decoding="async"
                width={1400}
                height={320}
              />
              <div className="absolute inset-0 bg-gradient-to-l from-black/80 via-black/40 to-transparent" />
              <div className="absolute inset-0 flex flex-col justify-center items-end px-10">
                <div className="max-w-md text-right">
                  <div
                    className="inline-flex w-fit px-3 py-1.5 font-black text-xs uppercase tracking-widest mb-4"
                    style={{ backgroundColor: '#5D00FF', color: '#fff' }}
                  >
                    Motos
                  </div>
                  <p className="text-gray-200 text-base sm:text-lg leading-relaxed">
                    Protección exacta para tu herramienta de trabajo, moto urbana o deportiva de alto cilindraje, cubriendo hasta el último detalle.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── 5. TU FUNDA EN 3 PASOS ─────────────────────────────────────────── */}
      <div className="bg-gray-50 dark:bg-[#111111] border-t border-black/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#CFFF04' }} />
              <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#0CD4FF' }}>
                Proceso
              </span>
              <div className="w-8 h-0.5" style={{ backgroundColor: '#CFFF04' }} />
            </div>
            <h2 className="font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white text-3xl sm:text-5xl">
              OBTENERLA ES ASÍ DE{' '}
              <span style={{ color: '#CFFF04' }}>FÁCIL.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

            {/* Línea conectora (desktop) */}
            <div
              className="hidden md:block absolute top-12 left-[calc(16.66%+1rem)] right-[calc(16.66%+1rem)] h-px"
              style={{ background: 'linear-gradient(90deg, #0CD4FF, #5D00FF, #CFFF04)' }}
            />

            {/* Paso 1 */}
            <div className="relative text-center">
              <div
                className="relative z-10 w-24 h-24 mx-auto mb-6 flex items-center justify-center font-black text-3xl"
                style={{
                  border: '3px solid #0CD4FF',
                  color: '#0CD4FF',
                }}
              >
                <span className="dark:hidden" style={{ backgroundColor: '#f9fafb', padding: '0.5rem 0.8rem', display: 'block' }}>01</span>
                <span className="hidden dark:block" style={{ backgroundColor: '#111111', padding: '0.5rem 0.8rem', display: 'block' }}>01</span>
              </div>
              <div className="w-10 h-1 mx-auto mb-4" style={{ backgroundColor: '#0CD4FF' }} />
              <h3 className="font-black text-xl uppercase tracking-tight text-gray-900 dark:text-white mb-3">
                Marca de tu vehículo
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                Dinos qué manejas. Compártenos la marca, el modelo exacto y el año de tu auto o motocicleta.
              </p>
            </div>

            {/* Paso 2 */}
            <div className="relative text-center">
              <div
                className="relative z-10 w-24 h-24 mx-auto mb-6 flex items-center justify-center font-black text-3xl"
                style={{ border: '3px solid #5D00FF', color: '#5D00FF' }}
              >
                <span className="dark:hidden" style={{ backgroundColor: '#f9fafb', padding: '0.5rem 0.8rem', display: 'block' }}>02</span>
                <span className="hidden dark:block" style={{ backgroundColor: '#111111', padding: '0.5rem 0.8rem', display: 'block' }}>02</span>
              </div>
              <div className="w-10 h-1 mx-auto mb-4" style={{ backgroundColor: '#5D00FF' }} />
              <h3 className="font-black text-xl uppercase tracking-tight text-gray-900 dark:text-white mb-3">
                El Entorno
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                Cuéntanos su uso. ¿Estará resguardado bajo techo en tu cochera o se enfrentará a la intemperie total?
              </p>
            </div>

            {/* Paso 3 */}
            <div className="relative text-center">
              <div
                className="relative z-10 w-24 h-24 mx-auto mb-6 flex items-center justify-center font-black text-3xl"
                style={{ border: '3px solid #CFFF04', color: '#CFFF04' }}
              >
                <span className="dark:hidden" style={{ backgroundColor: '#f9fafb', padding: '0.5rem 0.8rem', display: 'block' }}>03</span>
                <span className="hidden dark:block" style={{ backgroundColor: '#111111', padding: '0.5rem 0.8rem', display: 'block' }}>03</span>
              </div>
              <div className="w-10 h-1 mx-auto mb-4" style={{ backgroundColor: '#CFFF04' }} />
              <h3 className="font-black text-xl uppercase tracking-tight text-gray-900 dark:text-white mb-3">
                Protección Lista
              </h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed max-w-xs mx-auto">
                Confeccionamos tu funda con las medidas exactas y te la entregamos lista para usar y proteger tu patrimonio.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ── 6. CTA FINAL GLASSMORPHISM ──────────────────────────────────────── */}
      <div
        className="border-t border-black/10 dark:border-white/5 bg-gray-50 dark:bg-[#111111]"
        style={{ borderTopWidth: '4px', borderTopStyle: 'solid', borderImage: 'linear-gradient(90deg,#0CD4FF,#5D00FF,#CFFF04) 1' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div
            className="mx-auto max-w-3xl rounded-2xl px-8 sm:px-12 py-14 text-center backdrop-blur-md relative"
            style={{
              background: 'rgba(255,255,255,0.7)',
              border: '1.5px solid rgba(255,255,255,0.5)',
              boxShadow: '0 8px 60px rgba(12,212,255,0.10), inset 0 1px 0 rgba(255,255,255,0.6)',
            }}
          >
            {/* Dark mode overlay */}
            <div className="hidden dark:block absolute inset-0 rounded-2xl pointer-events-none" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(12px)' }} />

            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-6 h-0.5" style={{ backgroundColor: '#0CD4FF' }} />
                <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#0CD4FF' }}>
                  BLINDAJE A TU ALCANCE
                </span>
                <div className="w-6 h-0.5" style={{ backgroundColor: '#0CD4FF' }} />
              </div>

              <h2 className="font-black uppercase tracking-tighter leading-tight text-gray-900 dark:text-white text-2xl sm:text-4xl mb-4">
                ¿LISTO PARA PROTEGER{' '}
                <span style={{ color: '#5D00FF' }}>TU VEHÍCULO?</span>
              </h2>

              <div className="w-12 h-1 mx-auto mb-6" style={{ backgroundColor: '#CFFF04' }} />

              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
                Mándanos un mensaje con tu modelo y te asesoramos para elegir el material ideal sin ningún compromiso.
              </p>

              <a
                id="cta-fundas-contacto"
                href="/#contacto"
                onClick={goToContact}
                className="inline-flex items-center justify-center px-10 py-4 font-black text-sm uppercase tracking-widest transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 active:scale-95"
                style={{ backgroundColor: '#0CD4FF', border: '2px solid rgba(0,0,0,0.1)', boxShadow: '5px 5px 0px 0px #5D00FF', color: '#111111' }}
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
