import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative w-full min-h-screen flex flex-col items-center justify-center overflow-hidden isolate"
    >
      {/* ── Video de fondo (capa más baja) ─────────────────── */}
      {/* Servido desde /public/videos/ — sin bundling, soporta HTTP range requests */}
      <video
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="absolute inset-0 w-full h-full object-cover z-0"
        aria-hidden="true"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      {/* ── Overlay de contraste adaptable al tema ──────────── */}
      <div className="absolute inset-0 bg-transparent dark:bg-[#111111]/80 z-[1]" />

      {/* ── Contenido principal (texto + botones) ───────────── */}
      <div className="relative z-[2] w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center pt-24 sm:pt-28 pb-8">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 mb-8 px-4 py-2 border border-gray-900/15 dark:border-white/15 bg-gray-900/5 dark:bg-white/5 backdrop-blur-sm">
          <span
            className="animate-pulse-green w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: '#25D366' }}
          />
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-gray-600 dark:text-gray-300">
            Más de 30 años en EDOMEX y Región
          </span>
        </div>

        {/* H1 */}
        <h1 className="animate-fade-up-delay font-black uppercase tracking-tighter leading-none text-gray-900 dark:text-white mb-6 text-center">
          <span className="block text-4xl sm:text-6xl lg:text-8xl text-center">
            CUBRIMOS LO QUE IMPORTA.
          </span>
          <span className="block text-4xl sm:text-6xl lg:text-8xl gradient-green-cyan text-center">
            RESISTIMOS LO QUE SEA.
          </span>
        </h1>

        {/* Subtitle */}
        <div className="animate-fade-up-delay2 flex gap-0 mb-10 max-w-xl">
          <div className="w-1 flex-shrink-0 mr-4" style={{ backgroundColor: '#FF3A06' }} />
          <p className="text-gray-600 dark:text-gray-300 text-base sm:text-lg text-left leading-relaxed">
            Expertos en Lonas, Carpas y Malla Sombra para cualquier proyecto.
            Fabricación sobre medida y la máxima durabilidad.
          </p>
        </div>

        {/* CTA */}
        <a
          href="#productos"
          onClick={(e) => {
            e.preventDefault();
            document.querySelector('#productos')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="animate-fade-up-delay2 group inline-flex items-center gap-3 px-8 py-4 font-black text-base sm:text-lg uppercase tracking-widest text-white transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 active:scale-95"
          style={{
            backgroundColor: '#5D00FF',
            border: '2px solid #ffffff',
            boxShadow: '6px 6px 0px 0px #CFFF04',
          }}
        >
          Ver Catálogo
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </a>

        {/* Decorative gradient stripe */}
        <div className="w-full h-1 mt-8 bg-gradient-to-r from-[#5D00FF] via-[#0CD4FF] to-[#CFFF04]" />
      </div>

      {/* Bottom fade — usa z-[2] para estar sobre el overlay pero sin bloquear nada */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none z-[2] bg-gradient-to-b from-transparent to-transparent dark:to-[#111111]/80" />
    </section>
  );
}
