import { Link } from 'react-router-dom';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="py-12 lg:py-16 bg-[#1C1C1C]"
      style={{ borderTop: '4px solid #5D00FF' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Área superior: solo logo + descripción */}
        <div className="flex flex-col gap-4">
          <Link to="/" className="select-none">
            <span className="font-black text-2xl tracking-tight text-white uppercase">LONAS </span>
            <span className="font-black text-2xl tracking-tight uppercase" style={{ color: '#CFFF04' }}>LAS TROJES</span>
          </Link>
          <p className="text-gray-500 text-sm leading-relaxed max-w-md">
            Especialistas en textiles de uso rudo desde hace más de 30 años. Lonas, Carpas,
            Mallas Sombra y Fundas para cualquier proyecto en EDOMEX y región.
          </p>
        </div>

        {/* Barra inferior estilo fine print */}
        <div className="mt-10 pt-4 border-t border-white/8 flex flex-col md:flex-row justify-between items-center gap-2">

          {/* Izquierda: copyright */}
          <p className="text-[10px] text-gray-500">
            © {currentYear} Lonas Las Trojes. Todos los derechos reservados.
          </p>

          {/* Derecha: enlaces legales */}
          <div className="flex items-center gap-2 text-[10px] text-gray-500">
            <Link to="/legal/terminos" className="hover:text-gray-300 transition-colors">
              Términos y condiciones
            </Link>
            <span className="opacity-40">|</span>
            <Link to="/legal/privacidad" className="hover:text-gray-300 transition-colors">
              Política de privacidad
            </Link>
          </div>

        </div>
      </div>
    </footer>
  );
}
