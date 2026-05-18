import { MapPin, Phone, Clock, MessageCircle } from 'lucide-react';

const WA_NUMBER = '525615282302';

const contactCards = [
  {
    icon: MapPin,
    title: 'DIRECCIÓN',
    lines: ['Av. Sta. Elena - Coacalco 48,', 'Cuautitlán, Estado de México'],
    color: '#5D00FF',
  },
  {
    icon: Phone,
    title: 'TELÉFONO',
    lines: ['+52 56 1528 2302'],
    color: '#CFFF04',
    href: 'tel:+525615282302',
  },
  {
    icon: Clock,
    title: 'HORARIO',
    lines: ['Lunes – Sábado', '10:00 am – 6:00 pm'],
    color: '#0CD4FF',
  },
];

const quickButtons = [
  { label: 'Cotizar Lona', color: '#5D00FF', text: 'Hola, quiero cotizar una Lona.' },
  { label: 'Cotizar Malla', color: '#CFFF04', textColor: '#111111', text: 'Hola, quiero cotizar una Malla Sombra.' },
  { label: 'Cotizar Carpa', color: '#FF3A06', text: 'Hola, quiero cotizar una Carpa o Toldo.' },
  { label: 'Cotizar Funda', color: '#0CD4FF', textColor: '#111111', text: 'Hola, quiero cotizar una Funda para mi vehículo.' },
];

export default function Contact() {
  return (
    <section id="contacto" className="py-20 lg:py-28" style={{ backgroundColor: '#111111' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-5 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
            <span className="text-xs font-bold tracking-[0.25em] uppercase" style={{ color: '#0CD4FF' }}>
              Estamos cerca de ti
            </span>
            <div className="w-5 h-0.5" style={{ backgroundColor: '#FF3A06' }} />
          </div>
          <h2 className="font-black uppercase tracking-tighter leading-none">
            <span className="block text-3xl sm:text-5xl lg:text-6xl text-white">¿CÓMO LLEGAR</span>
            <span
              className="block text-3xl sm:text-5xl lg:text-6xl"
              style={{ color: '#0CD4FF' }}
            >
              O CONTACTARNOS?
            </span>
          </h2>
          <div className="w-16 h-1 mx-auto mt-4" style={{ backgroundColor: '#FF3A06' }} />
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left: Map + Info Cards */}
          <div className="flex flex-col gap-6">
            {/* Map */}
            <div
              className="relative overflow-hidden"
              style={{
                border: '3px solid #5D00FF',
                boxShadow: '6px 6px 0px 0px #CFFF04',
              }}
            >
              {/* Map label */}
              <div
                className="absolute top-3 left-3 z-10 flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider"
                style={{ backgroundColor: '#CFFF04', color: '#111111' }}
              >
                <MapPin size={12} />
                Mapa de Ubicación
              </div>
              <div className="map-dark w-full h-72">
                <iframe
                  title="Lonas Las Trojes - Ubicación"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3757.853024765127!2d-99.18001862394!3d19.64399518165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f5d06e3c34c1%3A0x6e5c3b4a7d2e8f9a!2sAv.%20Sta.%20Elena%20-%20Coacalco%2048%2C%20Cuautitl%C3%A1n!5e0!3m2!1ses!2smx!4v1716000000000!5m2!1ses!2smx"
                  width="100%"
                  height="288"
                  style={{ border: 0, display: 'block' }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            {/* Contact info cards */}
            <div className="flex flex-col gap-4">
              {contactCards.map((card) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className="flex items-start gap-4 p-4"
                    style={{
                      backgroundColor: '#1C1C1C',
                      border: `2px solid ${card.color}`,
                    }}
                  >
                    <div
                      className="flex-shrink-0 p-2"
                      style={{ backgroundColor: card.color, color: '#111111' }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <p
                        className="font-black text-sm uppercase tracking-wider mb-1"
                        style={{ color: card.color }}
                      >
                        {card.title}
                      </p>
                      {card.lines.map((line) =>
                        card.href ? (
                          <a
                            key={line}
                            href={card.href}
                            className="block text-gray-300 text-sm hover:text-white transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-gray-300 text-sm">{line}</p>
                        )
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right: WhatsApp box */}
          <div
            className="flex flex-col items-center justify-center p-8 lg:p-12 text-center"
            style={{
              backgroundColor: '#1C1C1C',
              border: '3px solid #25D366',
              boxShadow: '8px 8px 0px 0px #25D366',
            }}
          >
            {/* WA icon */}
            <div
              className="flex items-center justify-center w-20 h-20 rounded-full mb-6"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle size={40} className="text-white" />
            </div>

            <h3 className="font-black text-2xl sm:text-3xl uppercase tracking-tight text-white mb-3">
              ¿LISTO PARA HABLARNOS?
            </h3>
            <p className="text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
              Escríbenos por WhatsApp y te respondemos en minutos. Dinos qué necesitas y te damos una cotización sin compromiso.
            </p>

            {/* Main WA button */}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent('Hola, me gustaría cotizar un producto.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-3 py-4 px-6 font-black text-base sm:text-lg uppercase tracking-widest text-white mb-3 transition-all duration-200 hover:brightness-110 hover:-translate-y-0.5 active:scale-95"
              style={{
                backgroundColor: '#25D366',
                border: '3px solid #25D366',
                boxShadow: '4px 4px 0px 0px rgba(37,211,102,0.4)',
              }}
            >
              <MessageCircle size={22} />
              Cotizar por WhatsApp Aquí
            </a>

            <p className="text-xs text-gray-500 uppercase tracking-widest mb-8">✦ Respuesta inmediata ✦</p>

            {/* Quick quote buttons */}
            <div className="w-full grid grid-cols-2 gap-3">
              {quickButtons.map((btn) => (
                <a
                  key={btn.label}
                  href={`https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(btn.text)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="py-3 px-3 font-bold text-xs uppercase tracking-wider text-center transition-all duration-200 hover:brightness-110 active:scale-95"
                  style={{
                    backgroundColor: btn.color,
                    color: (btn as { textColor?: string }).textColor ?? '#ffffff',
                    border: `2px solid ${btn.color}`,
                  }}
                >
                  {btn.label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
