import { Play, ArrowRight } from 'lucide-react';

const WA_NUMBER = '525615282302';

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ backgroundColor: '#111111' }}
    >
      {/* Background video placeholder */}
      <div className="absolute inset-0 z-0">
        {/* Dark radial gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse at 60% 50%, rgba(93,0,255,0.15) 0%, transparent 60%), radial-gradient(ellipse at 20% 80%, rgba(12,212,255,0.08) 0%, transparent 50%), #111111',
          }}
        />
        {/* Subtle grid texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              'linear-gradient(#CFFF04 1px, transparent 1px), linear-gradient(90deg, #CFFF04 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Video placeholder icon */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
          <div className="flex flex-col items-center gap-3 opacity-10">
            <Play size={80} className="text-white" />
            <span className="text-white text-sm font-bold tracking-widest uppercase">Video en Loop Aquí</span>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center">
        {/* Badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 mb-8 px-4 py-2 border border-white/15 bg-white/5 backdrop-blur-sm">
          <span
            className="animate-pulse-green w-2 h-2 rounded-full flex-shrink-0"
            style={{ backgroundColor: '#25D366' }}
          />
          <span className="text-xs sm:text-sm font-bold tracking-widest uppercase text-gray-300">
            Más de 30 años en EDOMEX y Región
          </span>
        </div>

        {/* H1 */}
        <h1 className="animate-fade-up-delay font-black uppercase tracking-tighter leading-none text-white mb-6">
          <span className="block text-4xl sm:text-6xl lg:text-8xl">
            CUBRIMOS LO<br className="hidden sm:block" /> QUE IMPORTA.
          </span>
          <span
            className="block text-4xl sm:text-6xl lg:text-8xl gradient-green-cyan"
          >
            RESISTIMOS LO QUE SEA.
          </span>
        </h1>

        {/* Subtitle */}
        <div className="animate-fade-up-delay2 flex gap-0 mb-10 max-w-xl">
          <div className="w-1 flex-shrink-0 mr-4" style={{ backgroundColor: '#FF3A06' }} />
          <p className="text-gray-300 text-base sm:text-lg text-left leading-relaxed">
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
            border: '3px solid #5D00FF',
            boxShadow: '6px 6px 0px 0px rgba(93,0,255,0.5)',
          }}
        >
          Ver Catálogo
          <ArrowRight size={20} className="transition-transform group-hover:translate-x-1" />
        </a>

        {/* Secondary: WhatsApp */}
        <a
          href={`https://wa.me/525615282302`}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 text-sm text-gray-500 hover:text-gray-300 transition-colors underline underline-offset-4"
        >
          ¿Tienes dudas? Escríbenos por WhatsApp →
        </a>
      </div>

      {/* Bottom fade */}
      <div
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #111111)' }}
      />
    </section>
  );
}
