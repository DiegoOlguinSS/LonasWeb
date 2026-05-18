import { useState, useEffect } from 'react';
import { Menu, X, MessageCircle, ChevronDown } from 'lucide-react';

const WA_NUMBER = '525615282302';
const WA_MSG = encodeURIComponent('Hola, me gustaría obtener más información sobre sus productos.');

const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Productos', href: '#productos' },
  { label: 'Contacto', href: '#contacto' },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNav = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-white/10 transition-all duration-300 ${
        scrolled ? 'bg-[#111111]/95 backdrop-blur-md' : 'bg-[#1C1C1C]/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="#inicio"
            onClick={(e) => { e.preventDefault(); handleNav('#inicio'); }}
            className="flex-shrink-0 select-none"
          >
            <span className="font-black text-xl tracking-tight text-white uppercase">LONAS </span>
            <span className="font-black text-xl tracking-tight uppercase" style={{ color: '#CFFF04' }}>LAS TROJES</span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                className="text-sm font-semibold text-gray-300 hover:text-white transition-colors uppercase tracking-wide cursor-pointer"
              >
                {l.label === 'Productos' ? (
                  <span className="flex items-center gap-1">{l.label}<ChevronDown size={14} /></span>
                ) : l.label}
              </a>
            ))}
          </nav>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-4 py-2 font-bold text-sm uppercase tracking-wider text-white transition-all duration-200 hover:brightness-110 active:scale-95"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle size={16} />
              Más Información
            </a>

            {/* Hamburger */}
            <button
              id="mobile-menu-button"
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors"
              aria-label="Abrir menú"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-[#1C1C1C] border-t border-white/10">
          <div className="px-4 py-4 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                className="text-base font-bold text-gray-200 hover:text-white uppercase tracking-wide py-2 border-b border-white/5 cursor-pointer"
              >
                {l.label}
              </a>
            ))}
            <a
              href={`https://wa.me/${WA_NUMBER}?text=${WA_MSG}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 px-4 py-3 font-bold text-sm uppercase tracking-wider text-white mt-2"
              style={{ backgroundColor: '#25D366' }}
            >
              <MessageCircle size={16} />
              Más Información
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
