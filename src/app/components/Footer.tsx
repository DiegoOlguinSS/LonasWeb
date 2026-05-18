import { MessageCircle } from 'lucide-react';

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNav = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer
      className="py-12 lg:py-16"
      style={{
        backgroundColor: '#1C1C1C',
        borderTop: '4px solid #5D00FF',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand */}
          <div className="flex flex-col gap-4">
            <a
              href="#inicio"
              onClick={(e) => { e.preventDefault(); handleNav('#inicio'); }}
              className="select-none"
            >
              <span className="font-black text-2xl tracking-tight text-white uppercase">LONAS </span>
              <span className="font-black text-2xl tracking-tight uppercase" style={{ color: '#CFFF04' }}>LAS TROJES</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Especialistas en textiles de uso rudo desde hace más de 30 años. Lonas, Carpas,
              Mallas Sombra y Fundas para cualquier proyecto en EDOMEX y región.
            </p>
            {/* WA pill */}
            <a
              href="https://wa.me/525615282302"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 w-fit font-bold text-xs uppercase tracking-wider text-white transition-all hover:brightness-110"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle size={14} />
              WhatsApp Directo
            </a>
          </div>

          {/* Navigation */}
          <div>
            <h4
              className="font-black text-sm uppercase tracking-widest mb-5"
              style={{ color: '#CFFF04' }}
            >
              Navegación
            </h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                    className="text-sm text-gray-500 hover:text-white transition-colors uppercase tracking-wide cursor-pointer"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact info */}
          <div>
            <h4
              className="font-black text-sm uppercase tracking-widest mb-5"
              style={{ color: '#CFFF04' }}
            >
              Contacto
            </h4>
            <ul className="flex flex-col gap-3 text-sm text-gray-500">
              <li>📍 Av. Sta. Elena - Coacalco 48, Cuautitlán</li>
              <li>
                <a href="tel:+525615282302" className="hover:text-white transition-colors">
                  📞 +52 56 1528 2302
                </a>
              </li>
              <li>🕐 Lun – Sáb | 10:00 am – 6:00 pm</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          className="mt-10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3"
          style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
        >
          <p className="text-xs text-gray-600 uppercase tracking-wider">
            © {currentYear} Lonas Las Trojes. Todos los derechos reservados.
          </p>
          <p className="text-xs text-gray-700 uppercase tracking-wider">
            Diseño & Desarrollo ✦ Industrial Vibrante™
          </p>
        </div>
      </div>
    </footer>
  );
}
