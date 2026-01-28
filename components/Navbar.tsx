
import React, { useState, useEffect } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80; // Navbar height offset
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-slate-950/90 backdrop-blur-md py-4 shadow-xl' : 'bg-transparent py-6'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="flex items-center gap-2 group">
          <div className="w-10 h-10 bg-emerald-600 rounded flex items-center justify-center text-white font-bold text-xl group-hover:bg-emerald-500 transition-colors">
            OG
          </div>
          <span className="text-2xl font-bold tracking-tight text-white">ONGYEOL</span>
        </a>
        
        <div className="hidden md:flex items-center gap-10 text-sm font-medium text-slate-300">
          <a href="#home" onClick={(e) => scrollToSection(e, 'home')} className="hover:text-emerald-400 transition-colors">홈</a>
          <a href="#services" onClick={(e) => scrollToSection(e, 'services')} className="hover:text-emerald-400 transition-colors">주요 업무</a>
          <a href="#process" onClick={(e) => scrollToSection(e, 'process')} className="hover:text-emerald-400 transition-colors">업무 절차</a>
          <a href="#about" onClick={(e) => scrollToSection(e, 'about')} className="hover:text-emerald-400 transition-colors">사무소 소개</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="tel:010-8114-4300" className="hidden lg:block text-white text-sm font-semibold">
            010.8114.4300
          </a>
          <a href="#contact" onClick={(e) => scrollToSection(e, 'contact')} className="bg-emerald-600 hover:bg-emerald-500 text-white text-sm font-semibold px-6 py-2.5 rounded-full transition-all shadow-lg shadow-emerald-900/20">
            상담 예약
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
