/**
 * useContactNav — Hook centralizado para navegar al formulario de contacto.
 *
 * Estrategia: idéntica al handleSectionNav del Navbar.
 *   - Si ya estamos en "/": scroll inmediato con scrollIntoView.
 *   - Si venimos de otra ruta: navigate('/') y luego setTimeout(120ms)
 *     para esperar a que React monte el DOM de la página de inicio
 *     antes de intentar el scroll. requestAnimationFrame dispara demasiado
 *     pronto (en el frame actual, antes del re-render cross-page).
 *
 * Uso:
 *   const { goToContact } = useContactNav();
 *   <a href="/#contacto" onClick={goToContact}>Contáctanos</a>
 */
import { useNavigate, useLocation } from 'react-router-dom';

export function useContactNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const goToContact = (e: React.MouseEvent) => {
    e.preventDefault();

    if (location.pathname === '/') {
      // Ya estamos en inicio — scroll directo, sin navegación
      const el = document.getElementById('contacto');
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Venimos de otra ruta — primero navegar a "/", luego esperar
      // 120 ms (igual que el Navbar) para que el DOM se monte antes
      // de intentar el scroll.
      navigate('/');
      setTimeout(() => {
        const el = document.getElementById('contacto');
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 120);
    }
  };

  return { goToContact };
}
