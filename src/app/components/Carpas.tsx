/* ─── Carpas.tsx — Página de Producto: Carpas y Toldos ──────────────────────
   Secciones:
     1. Hero Cinemático
     2. Beneficios: Sticky Scroll Split Screen
     3. Casos de Uso: Mosaico Asimétrico (Gallery Grid)
     4. CTA Final Glassmorphism
   ─────────────────────────────────────────────────────────────────────────── */
import { useContactNav } from '../hooks/useContactNav';

export default function Carpas() {
  const { goToContact } = useContactNav();

  return (
    <section id="producto-carpas" className="bg-gray-50 dark:bg-[#111111]">

      {/* ── 1. HERO CINEMÁTICO ─────────────────────────────────────────────── */}
      <div
        className="relative flex items-center justify-center overflow-hidden border-t-4 border-[#FF3A06] min-h-[calc(100vh-4rem)]"
      >
        {/* Background image — object-cover w-full h-full (mobile-first) */}
        <img
          src="/images/carpa-roja-eventos.webp"
          alt="Carpa roja para eventos"
          className="absolute inset-0 w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
        {/* Dark overlay — mantiene legibilidad del texto blanco y acento neón */}
        <div className="absolute inset-0" style={{ background: 'rgba(0,0,0,0.65)' }} />
        {/* Neon glow overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center top, rgba(255,58,6,0.10) 0%, transparent 65%)' }}
        />

        {/* Content — flex wrapper fills full hero height */}
        <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto py-24">

          {/* Etiqueta */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
            <span
              className="text-xs font-black tracking-[0.28em] uppercase px-3 py-1"
              style={{ backgroundColor: '#FF3A06', color: '#fff' }}
            >
              CARPAS
            </span>
            <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
          </div>

          {/* Título */}
          <h1 className="font-black uppercase tracking-tighter leading-none text-white text-4xl sm:text-6xl lg:text-7xl mb-6">
            ESPACIOS QUE{' '}
            <span
              style={{
                background: 'linear-gradient(90deg, #FF3A06 0%, #CFFF04 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              INSPIRAN
            </span>{' '}
            Y PROTEGEN.
          </h1>

          <div className="w-16 h-1 mx-auto mb-7" style={{ backgroundColor: '#CFFF04' }} />

          {/* Párrafo */}
          <p className="text-gray-200 text-base sm:text-xl leading-relaxed max-w-2xl mx-auto">
            Nuestras carpas y toldos aguantan el sol, el viento y la lluvia sin deformarse. Perfectas para proteger tu cochera, tu negocio o cualquier espacio al aire libre. Armado fácil, sin herramientas especiales.
          </p>

        </div>
      </div>

      {/* ── 2. BENEFICIOS: STICKY SCROLL SPLIT SCREEN ──────────────────────── */}
      {/* NOTA: Sin overflow-hidden en el padre para que sticky funcione */}
      <div className="bg-white dark:bg-[#0D0D0D] border-t border-black/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

          {/* Section header */}
          <div className="text-center mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#CFFF04' }} />
              <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#FF3A06' }}>
                Por qué elegirnos
              </span>
              <div className="w-8 h-0.5" style={{ backgroundColor: '#CFFF04' }} />
            </div>
            <h2 className="font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white text-3xl sm:text-5xl">
              CONSTRUIDO PARA{' '}
              <span style={{ color: '#FF3A06' }}>RESISTIR.</span>
            </h2>
          </div>

          {/* Sticky Scroll Grid — NO overflow-hidden aquí */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-start">

            {/* ── Columna Izquierda: Sticky Image ── */}
            <div className="md:sticky md:top-24">
              <div
                className="relative overflow-hidden"
                style={{
                  border: '3px solid #FF3A06',
                  boxShadow: '8px 8px 0px 0px #CFFF04',
                }}
              >
                <img
                  src="/images/carpa-plegable-resistente.webp"
                  alt="Carpa plegable resistente de alta calidad"
                  className="w-full object-cover"
                  style={{ height: '520px', filter: 'saturate(0.85) contrast(1.06)' }}
                  loading="lazy"
                  decoding="async"
                  width={900}
                  height={520}
                />
                <div className="absolute inset-0" style={{ background: 'rgba(255,58,6,0.08)', mixBlendMode: 'multiply' }} />
                <div
                  className="absolute bottom-4 left-4 px-4 py-2 font-black text-xs uppercase tracking-widest"
                  style={{ backgroundColor: '#FF3A06', color: '#fff' }}
                >
                  Calidad
                </div>
              </div>
            </div>

            {/* ── Columna Derecha: Scrolling Blocks ── */}
            <div className="flex flex-col gap-32 py-8">

              {/* Bloque 1 */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-1" style={{ backgroundColor: '#FF3A06' }} />
                  <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#FF3A06' }}>
                    01
                  </span>
                </div>
                <h3 className="font-black text-2xl sm:text-3xl uppercase tracking-tight text-gray-900 dark:text-white mb-4">
                  PROTECCIÓN CLIMÁTICA
                </h3>
                <div className="w-10 h-1 mb-5" style={{ backgroundColor: '#FF3A06' }} />
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                  Brinda protección confiable ante diversas condiciones climáticas. Es impermeable, ideal para lluvia ligera o moderada, y cuenta con protección UV, perfecta para darte la mejor sombra en días soleados.
                </p>
              </div>

              {/* Bloque 2 */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-1" style={{ backgroundColor: '#CFFF04' }} />
                  <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#CFFF04' }}>
                    02
                  </span>
                </div>
                <h3 className="font-black text-2xl sm:text-3xl uppercase tracking-tight text-gray-900 dark:text-white mb-4">
                  DISEÑO PLEGABLE
                </h3>
                <div className="w-10 h-1 mb-5" style={{ backgroundColor: '#CFFF04' }} />
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                  Diseño práctico que te permite montar y desmontar la estructura rápidamente en cualquier lugar sin dolores de cabeza.
                </p>
              </div>

              {/* Bloque 3 */}
              <div>
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-1" style={{ backgroundColor: '#0CD4FF' }} />
                  <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#0CD4FF' }}>
                    03
                  </span>
                </div>
                <h3 className="font-black text-2xl sm:text-3xl uppercase tracking-tight text-gray-900 dark:text-white mb-4">
                  MULTIUSOS
                </h3>
                <div className="w-10 h-1 mb-5" style={{ backgroundColor: '#0CD4FF' }} />
                <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg leading-relaxed">
                  Ideal para proteger tu puesto de ventas o tianguis, cubrir tu coche en la cochera, armar la comida familiar en el patio o dar sombra rápida en cualquier fiesta de fin de semana.
                </p>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* ── 3. CASOS DE USO: MOSAICO ASIMÉTRICO ────────────────────────────── */}
      <div className="bg-gray-50 dark:bg-[#111111] border-t border-black/10 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">

          {/* Section header */}
          <div className="text-center mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
              <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#CFFF04' }}>
                Aplicaciones reales
              </span>
              <div className="w-8 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
            </div>
            <h2 className="font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white text-3xl sm:text-5xl">
              ¿DÓNDE LAS{' '}
              <span style={{ color: '#CFFF04' }}>INSTALAMOS?</span>
            </h2>
          </div>

          {/* Asymmetric Gallery Grid */}
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: '1fr 1fr',
              gridTemplateRows: 'auto auto',
            }}
          >
            {/* Imagen Grande — ocupa 2 filas en escritorio */}
            <div
              className="relative overflow-hidden group"
              style={{
                gridRow: 'span 2',
                minHeight: '480px',
                border: '2px solid #FF3A06',
                boxShadow: '4px 4px 0px 0px #FF3A06',
              }}
            >
              <img
                src="/images/carpa-blanca-jardin.webp"
                alt="Carpa blanca para jardines y eventos"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ filter: 'saturate(0.85) contrast(1.06)' }}
                loading="lazy"
                decoding="async"
                width={800}
                height={480}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div
                className="absolute bottom-4 left-4 px-3 py-1.5 font-black text-xs uppercase tracking-widest"
                style={{ backgroundColor: '#FF3A06', color: '#fff' }}
              >
                Eventos y Jardines
              </div>
            </div>

            {/* Imagen Pequeña 1 */}
            <div
              className="relative overflow-hidden group"
              style={{
                minHeight: '232px',
                border: '2px solid #CFFF04',
                boxShadow: '4px 4px 0px 0px #CFFF04',
              }}
            >
              <img
                src="/images/carpa-blanca-puestos.webp"
                alt="Carpa blanca para negocios y puestos comerciales"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ filter: 'saturate(0.85) contrast(1.06)' }}
                loading="lazy"
                decoding="async"
                width={800}
                height={232}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div
                className="absolute bottom-4 left-4 px-3 py-1.5 font-black text-xs uppercase tracking-widest"
                style={{ backgroundColor: '#CFFF04', color: '#111111' }}
              >
                Negocios y Puestos
              </div>
            </div>

            {/* Imagen Pequeña 2 */}
            <div
              className="relative overflow-hidden group"
              style={{
                minHeight: '232px',
                border: '2px solid #0CD4FF',
                boxShadow: '4px 4px 0px 0px #0CD4FF',
              }}
            >
              <img
                src="/images/carpa-proteccion-vehicular.webp"
                alt="Carpa de protección vehicular sobre auto"
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                style={{ filter: 'saturate(0.85) contrast(1.06)' }}
                loading="lazy"
                decoding="async"
                width={800}
                height={232}
              />
              <div className="absolute inset-0 bg-black/30" />
              <div
                className="absolute bottom-4 left-4 px-3 py-1.5 font-black text-xs uppercase tracking-widest"
                style={{ backgroundColor: '#0CD4FF', color: '#111111' }}
              >
                Protección Vehicular
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* ── 4. CTA FINAL GLASSMORPHISM ──────────────────────────────────────── */}
      <div
        className="border-t border-black/10 dark:border-white/5 bg-gray-50 dark:bg-[#111111]"
        style={{ borderTopWidth: '4px', borderTopStyle: 'solid', borderImage: 'linear-gradient(90deg,#FF3A06,#CFFF04,#0CD4FF) 1' }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div
            className="mx-auto max-w-3xl rounded-2xl px-8 sm:px-12 py-14 text-center backdrop-blur-md relative"
            style={{
              background: 'rgba(255,255,255,0.7)',
              border: '1.5px solid rgba(255,255,255,0.5)',
              boxShadow: '0 8px 60px rgba(255,58,6,0.10), inset 0 1px 0 rgba(255,255,255,0.6)',
            }}
          >
            {/* Dark mode overlay */}
            <div className="hidden dark:block absolute inset-0 rounded-2xl pointer-events-none" style={{ background: 'rgba(0,0,0,0.55)', backdropFilter: 'blur(12px)' }} />

            <div className="relative">
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="w-6 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
                <span className="text-xs font-black tracking-[0.25em] uppercase" style={{ color: '#FF3A06' }}>
                  FABRICACIÓN SOBRE MEDIDA
                </span>
                <div className="w-6 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
              </div>

              <h2 className="font-black uppercase tracking-tighter leading-tight text-gray-900 dark:text-white text-2xl sm:text-4xl mb-4">
                ¿Listo para armar tu{' '}
                <span style={{ color: '#FF3A06' }}>espacio?</span>
              </h2>

              <div className="w-12 h-1 mx-auto mb-6" style={{ backgroundColor: '#CFFF04' }} />

              <p className="text-gray-700 dark:text-gray-300 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
                Cuéntanos qué necesitas cubrir y te diseñamos la estructura y la lona perfecta para tu proyecto.
              </p>

              <a
                id="cta-carpas-contacto"
                href="/#contacto"
                onClick={goToContact}
                className="inline-flex items-center justify-center px-10 py-4 font-black text-sm uppercase tracking-widest transition-all duration-300 hover:brightness-110 hover:-translate-y-0.5 active:scale-95"
                style={{ backgroundColor: '#FF3A06', border: '2px solid rgba(0,0,0,0.1)', boxShadow: '5px 5px 0px 0px #CFFF04', color: '#fff' }}
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
