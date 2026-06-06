import { MapPin, Phone, Mail, Clock, MessageCircle } from 'lucide-react';

const WA_NUMBER = '525615282302';

const contactCards = [
  {
    icon: MapPin,
    title: 'DIRECCIÓN',
    lines: ['Av. Sta. Elena - Coacalco 48,', 'San Mateo Ixtacalco,', '54840 Cuautitlán, Méx.'],
    color: '#5D00FF',
    href: 'https://maps.app.goo.gl/gtz8wfmeL8nRewDp8',
    target: '_blank',
    rel: 'noopener noreferrer',
  },
  {
    icon: Phone,
    title: 'TELÉFONO',
    lines: ['+52 56 1528 2302'],
    color: '#CFFF04',
    href: 'tel:+525615282302',
  },
  {
    icon: Mail,
    title: 'CORREO ELECTRÓNICO',
    lines: ['lonaslastrojes@gmail.com'],
    color: '#FF5A1F',
    href: 'mailto:lonaslastrojes@gmail.com',
  },
  {
    icon: Clock,
    title: 'HORARIO',
    lines: ['Todos los días: 10:00 am – 6:00 pm'],
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
    <section id="contacto" className="py-20 lg:py-28 border-t-4 border-[#CFFF04] bg-gray-50 dark:bg-[#111111]">
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
            <span className="block text-3xl sm:text-5xl lg:text-6xl text-gray-900 dark:text-white">¿CÓMO LLEGAR</span>
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
                    className="flex items-start gap-4 p-4 bg-white dark:bg-[#1C1C1C]"
                    style={{
                      border: '1px solid rgba(0,0,0,0.08)',
                    }}
                  >
                    <div
                      className="flex-shrink-0 p-2"
                      style={{ backgroundColor: card.color, color: '#111111' }}
                    >
                      <Icon size={20} />
                    </div>
                    <div>
                      <p className="font-black text-sm uppercase tracking-wider mb-1 text-gray-900 dark:text-white">
                        {card.title}
                      </p>
                      {card.lines.map((line) =>
                        card.href ? (
                          <a
                            key={line}
                            href={card.href}
                            target={(card as { target?: string }).target}
                            rel={(card as { rel?: string }).rel}
                            className="block text-gray-600 dark:text-gray-300 text-sm hover:text-[#5D00FF] dark:hover:text-white hover:underline cursor-pointer transition-colors"
                          >
                            {line}
                          </a>
                        ) : (
                          <p key={line} className="text-gray-600 dark:text-gray-300 text-sm">{line}</p>
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
            className="flex flex-col items-center justify-center p-8 lg:p-12 text-center bg-white dark:bg-[#1C1C1C]"
            style={{
              border: '3px solid #25D366',
              boxShadow: '8px 8px 0px 0px #25D366',
            }}
          >
            {/* WA icon */}
            <div
              className="flex items-center justify-center w-20 h-20 rounded-full mb-6"
              style={{ backgroundColor: '#25D366' }}
            >
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10 text-white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
            </div>

            <h3 className="font-black text-2xl sm:text-3xl uppercase tracking-tight text-gray-900 dark:text-white mb-3">
              ¿LISTO PARA HABLARNOS?
            </h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base leading-relaxed mb-8 max-w-sm">
              Escríbenos por WhatsApp y te respondemos en minutos. Dinos qué necesitas.
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
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 inline-block"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
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
                  className="py-3 px-3 font-black text-xs uppercase tracking-wider text-center transition-all duration-200 hover:brightness-110 active:scale-95"
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
