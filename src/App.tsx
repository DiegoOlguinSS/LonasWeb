import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './app/components/ScrollToTop';
import Navbar from './app/components/Navbar';
import Footer from './app/components/Footer';
import HomePage from './app/pages/HomePage';
import NosotrosPage from './app/pages/NosotrosPage';
import ProductoLonasPage from './app/pages/ProductoLonasPage';
import ProductoMallasPage from './app/pages/ProductoMallasPage';
import ProductoCarpasPage from './app/pages/ProductoCarpasPage';
import ProductoFundasPage from './app/pages/ProductoFundasPage';
import TerminosPage from './app/pages/TerminosPage';
import PoliticaPrivacidadPage from './app/pages/PoliticaPrivacidadPage';

export default function App() {
  // Lee el tema guardado en localStorage al montar (persiste entre rutas y recargas)
  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem('theme') === 'dark';
    } catch {
      return false;
    }
  });

  // Sincroniza la clase en <html> y guarda en localStorage en cada cambio
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-gray-50 dark:bg-[#111111] min-h-screen flex flex-col">
        {/* ── Layout global: Navbar siempre visible ── */}
        <Navbar isDark={isDark} toggleTheme={toggleTheme} />

        {/* ── Contenido de la ruta activa ── */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/nosotros" element={<NosotrosPage />} />
          <Route path="/producto/lonas" element={<ProductoLonasPage />} />
          <Route path="/producto/mallas" element={<ProductoMallasPage />} />
          <Route path="/producto/carpas" element={<ProductoCarpasPage />} />
          <Route path="/producto/fundas" element={<ProductoFundasPage />} />
          <Route path="/legal/terminos" element={<TerminosPage />} />
          <Route path="/legal/privacidad" element={<PoliticaPrivacidadPage />} />
        </Routes>

        {/* ── Layout global: Footer siempre visible ── */}
        <Footer />
      </div>
    </BrowserRouter>
  );
}
