import { useState, useEffect } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, Moon, Sun } from 'lucide-react';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export default function Navbar({ isDark, toggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [isMobileProductsOpen, setIsMobileProductsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  /* Cierra el menú al cambiar de ruta */
  useEffect(() => {
    setOpen(false);
    setIsMobileProductsOpen(false);
  }, [location.pathname]);

  const handleSectionNav = (anchor: string) => {
    setOpen(false);
    if (location.pathname === '/') {
      const el = document.querySelector(anchor);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/');
      setTimeout(() => {
        const el = document.querySelector(anchor);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };

  const isHome     = location.pathname === '/';
  const isNosotros = location.pathname === '/nosotros';
  const isProducto = location.pathname.startsWith('/producto');

  const mobileProducts = [
    { label: 'Lonas',        href: '/producto/lonas'  },
    { label: 'Malla Sombras', href: '/producto/mallas' },
    { label: 'Carpas',       href: '/producto/carpas' },
    { label: 'Fundas',       href: '/producto/fundas' },
  ];

  return (
    <header
      className={`fixed top-0 z-50 w-full border-b border-black/10 dark:border-white/10 transition-all duration-300 backdrop-blur-md ${
        scrolled
          ? 'bg-white/90 dark:bg-[#111111]/90'
          : 'bg-white/80 dark:bg-[#1C1C1C]/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* FIX 2: flex justify-between en lugar de grid de 3 cols */}
        <div className="flex justify-between items-center w-full h-16">

          {/* ── Logo ── */}
          {/* FIX 3: whitespace-nowrap + tamaño responsivo */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className="flex-shrink-0 select-none whitespace-nowrap"
          >
            <span className="font-black text-base sm:text-xl tracking-tighter text-gray-900 dark:text-white uppercase">LONAS </span>
            <span className="font-black text-base sm:text-xl tracking-tighter uppercase" style={{ color: '#CFFF04' }}>LAS TROJES</span>
          </Link>

          {/* ── Desktop nav (centro) ── */}
          <nav className="hidden md:flex items-center justify-center gap-8">

            <Link
              to="/"
              className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                isHome
                  ? 'text-[#CFFF04]'
                  : 'text-gray-900 dark:text-white hover:text-[#CFFF04]'
              }`}
            >
              Inicio
            </Link>

            <Link
              to="/nosotros"
              className={`text-sm font-semibold uppercase tracking-wide transition-colors duration-200 ${
                isNosotros
                  ? 'text-[#CFFF04]'
                  : 'text-gray-900 dark:text-white hover:text-[#CFFF04]'
              }`}
            >
              Nosotros
            </Link>

            {/* PRODUCTOS con dropdown hover */}
            <div className="relative group">
              <button
                className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 uppercase tracking-wide cursor-pointer ${
                  isProducto
                    ? 'text-[#CFFF04]'
                    : 'text-gray-900 dark:text-white hover:text-[#CFFF04]'
                }`}
                onClick={() => handleSectionNav('#productos')}
              >
                Productos
                <ChevronDown
                  size={14}
                  className="transition-transform duration-200 group-hover:rotate-180"
                />
              </button>

              <div className="absolute top-full left-0 mt-2 w-56 py-2 rounded-none opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 bg-white dark:bg-[#1C1C1C] border border-[#5D00FF] shadow-[4px_4px_0px_0px_#5D00FF]">
                {mobileProducts.map((item) => (
                  <a
                    key={item.href}
                    href={item.href}
                    className="block px-4 py-3 text-gray-900 dark:text-white uppercase text-sm font-bold border-l-4 border-transparent transition-colors hover:bg-[#5D00FF] hover:border-[#CFFF04] hover:text-white"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            <button
              onClick={() => handleSectionNav('#contacto')}
              className="text-sm font-semibold text-gray-900 dark:text-white hover:text-[#CFFF04] transition-colors duration-200 uppercase tracking-wide cursor-pointer"
            >
              Contacto
            </button>
          </nav>

          {/* ── Controles: theme toggle + hamburger ── */}
          <div className="flex items-center gap-2">
            <button
              id="theme-toggle-button"
              onClick={toggleTheme}
              className="cursor-pointer p-2 rounded-lg transition-all duration-200 hover:scale-110 active:scale-95 hover:bg-black/5 dark:hover:bg-white/10"
              aria-label={isDark ? 'Cambiar a modo claro' : 'Cambiar a modo oscuro'}
            >
              {isDark
                ? <Sun  size={22} className="w-5 h-5 text-white" />
                : <Moon size={22} className="w-5 h-5 text-gray-900" />
              }
            </button>

            <button
              id="mobile-menu-button"
              onClick={() => setOpen(!open)}
              className="md:hidden p-2 text-gray-900 dark:text-gray-300 hover:text-[#CFFF04] transition-colors"
              aria-label="Abrir menú"
            >
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* ── Mobile Menu ──
          Posicionado absolute debajo del header para no extender su altura.
          `invisible` colapsa el box por completo cuando está cerrado (sin cuadro fantasma).
          La transición opacity + translate da la animación suave al abrir. */}
      <div
        className={`md:hidden absolute top-full left-0 w-full
          bg-white dark:bg-[#1C1C1C] border-t border-black/10 dark:border-white/10
          shadow-lg transition-all duration-300 ease-in-out transform
          ${open
            ? 'opacity-100 translate-y-0 visible pointer-events-auto'
            : 'opacity-0 -translate-y-2 invisible pointer-events-none'
          }`}
      >
        <div className="px-4 py-4 flex flex-col gap-1">

          {/* INICIO */}
          <Link
            to="/"
            onClick={() => setOpen(false)}
            className={`text-base font-bold uppercase tracking-wide py-3 border-b border-black/10 dark:border-white/5 ${
              isHome
                ? 'text-[#CFFF04]'
                : 'text-gray-900 dark:text-gray-200 hover:text-[#CFFF04]'
            }`}
          >
            Inicio
          </Link>

          {/* NOSOTROS */}
          <Link
            to="/nosotros"
            onClick={() => setOpen(false)}
            className={`text-base font-bold uppercase tracking-wide py-3 border-b border-black/10 dark:border-white/5 ${
              isNosotros
                ? 'text-[#CFFF04]'
                : 'text-gray-900 dark:text-gray-200 hover:text-[#CFFF04]'
            }`}
          >
            Nosotros
          </Link>

          {/* PRODUCTOS — acordeón */}
          <div className="border-b border-black/10 dark:border-white/5">
            <button
              onClick={() => setIsMobileProductsOpen(!isMobileProductsOpen)}
              className={`w-full flex items-center justify-between text-base font-bold uppercase tracking-wide py-3 transition-colors ${
                isProducto
                  ? 'text-[#CFFF04]'
                  : 'text-gray-900 dark:text-gray-200 hover:text-[#CFFF04]'
              }`}
            >
              Productos
              <ChevronDown
                size={16}
                className={`transition-transform duration-300 ${isMobileProductsOpen ? 'rotate-180' : ''}`}
              />
            </button>

            <div
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                isMobileProductsOpen ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="pl-4 pb-2 flex flex-col gap-1">
                {mobileProducts.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    onClick={() => setOpen(false)}
                    className="text-sm font-semibold uppercase tracking-wide py-2 text-gray-500 dark:text-gray-400 hover:text-[#CFFF04] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* CONTACTO */}
          <button
            onClick={() => handleSectionNav('#contacto')}
            className="text-left text-base font-bold text-gray-900 dark:text-gray-200 hover:text-[#CFFF04] uppercase tracking-wide py-3"
          >
            Contacto
          </button>

        </div>
      </div>
    </header>
  );
}
