import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Menu, X, Sparkles } from 'lucide-react';

interface HeaderProps {
  lang: 'en' | 'fr';
  setLang: (lang: 'en' | 'fr') => void;
  onRegisterClick: () => void;
  activePage: string;
  setActivePage: (page: string) => void;
}

export default function Header({ lang, setLang, onRegisterClick, activePage, setActivePage }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: { en: 'Home', fr: 'Accueil' }, id: 'home' },
    { name: { en: 'Services & Modules', fr: 'Services & Modules' }, id: 'services' },
    { name: { en: 'GED Prep', fr: 'Préparation GED' }, id: 'ged-prep' },
    { name: { en: 'Pricing', fr: 'Tarifs & Horaires' }, id: 'pricing' },
    { name: { en: 'About', fr: 'À Propos' }, id: 'about' },
    { name: { en: 'Student Portal', fr: 'Espace Candidat' }, id: 'student-space', badge: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 w-full pt-4 pb-2 px-4 sm:px-6 lg:px-8 bg-transparent transition-all duration-300">
      {/* Detached Rounded Frosted Glass Container */}
      <div 
        className={`max-w-7xl mx-auto rounded-2xl md:rounded-full px-4 sm:px-6 py-3 flex justify-between items-center transition-all duration-300 border ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-md shadow-xl shadow-brand-900/5 border-slate-200/50' 
            : 'bg-white/85 backdrop-blur-lg shadow-lg shadow-brand-900/5 border-slate-200/40'
        }`}
      >
        {/* Logo */}
        <button
          onClick={() => {
            setActivePage('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="flex items-center gap-2.5 group cursor-pointer text-left focus:outline-none"
        >
          <div className="bg-accent-500 text-white font-extrabold text-lg w-9 h-9 rounded-xl flex items-center justify-center shadow-md shadow-accent-900/10 group-hover:scale-105 transition-transform duration-300">
            TK
          </div>
          <div className="flex flex-col">
            <span className="font-black tracking-wider text-brand-950 text-sm sm:text-base leading-none font-display flex items-center gap-1">
              TEN KEY <span className="text-accent-500 text-xs">★</span>
            </span>
            <span className="text-[8px] text-gray-500 font-bold tracking-widest uppercase mt-0.5">
              CENTRE DE FORMATIONS
            </span>
          </div>
        </button>

        {/* Desktop Nav Links (High-end track pill styling) */}
        <div className="hidden md:flex items-center gap-1 bg-brand-50/50 p-1 rounded-full border border-brand-100/50">
          {navLinks.map((link, idx) => (
            <button
              key={idx}
              onClick={() => {
                setActivePage(link.id);
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className={`relative text-xs font-extrabold py-1.5 px-4 rounded-full transition-all duration-200 cursor-pointer flex items-center gap-1.5 ${
                activePage === link.id
                  ? 'bg-brand-900 text-white shadow-xs'
                  : 'text-brand-600 hover:text-brand-950 hover:bg-white/50'
              }`}
            >
              <span>{lang === 'en' ? link.name.en : link.name.fr}</span>
              {link.badge && (
                <span className={`inline-block w-1.5 h-1.5 rounded-full ${activePage === link.id ? 'bg-accent-400' : 'bg-accent-500'} animate-pulse`}></span>
              )}
            </button>
          ))}
        </div>

        {/* Right side CTAs & Controls */}
        <div className="flex items-center gap-2 sm:gap-3">
          {/* Quick Contact Phone (Hidden on tablet/mobile, sleek hover style) */}
          <a 
            href="tel:+22891883867" 
            className="hidden lg:flex items-center gap-1.5 text-brand-700 hover:text-brand-950 text-xs font-extrabold transition-colors bg-brand-50 hover:bg-brand-100/80 px-3.5 py-1.5 rounded-full border border-brand-100/60"
          >
            <Phone className="w-3.5 h-3.5 text-accent-500 animate-pulse" />
            <span>+228 91 88 38 67</span>
          </a>

          {/* Compact Premium Language Switcher */}
          <div className="hidden sm:flex items-center gap-0.5 bg-brand-50/80 rounded-full p-0.5 border border-brand-100/80">
            <button
              onClick={() => setLang('en')}
              className={`px-2.5 py-1 rounded-full text-[10px] font-black transition-all cursor-pointer ${
                lang === 'en'
                  ? 'bg-brand-900 text-white shadow-xs'
                  : 'text-brand-600 hover:text-brand-950'
              }`}
            >
              EN
            </button>
            <button
              onClick={() => setLang('fr')}
              className={`px-2.5 py-1 rounded-full text-[10px] font-black transition-all cursor-pointer ${
                lang === 'fr'
                  ? 'bg-brand-900 text-white shadow-xs'
                  : 'text-brand-600 hover:text-brand-950'
              }`}
            >
              FR
            </button>
          </div>

          {/* Registration CTA (Desktop / Tablet) */}
          <button
            onClick={onRegisterClick}
            className="hidden sm:flex bg-accent-500 hover:bg-accent-600 text-white font-black text-xs px-5 py-2.5 rounded-full shadow-md shadow-accent-500/10 hover:shadow-accent-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 items-center gap-1.5 cursor-pointer"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'Register Now' : "S'inscrire"}</span>
          </button>

          {/* Mobile Registration CTA (Extra small screens) */}
          <button
            onClick={onRegisterClick}
            className="flex sm:hidden bg-accent-500 text-white font-black text-[11px] px-3.5 py-1.5 rounded-full hover:bg-accent-600 active:scale-95 transition-all shadow-sm"
          >
            {lang === 'en' ? 'Register' : "S'inscrire"}
          </button>

          {/* Unified Menu Trigger (Visible on all screens below md) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-brand-700 hover:text-brand-950 hover:bg-brand-50 rounded-full transition-all border border-transparent active:scale-95 cursor-pointer"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Floating Mobile/Tablet Drawer Menu (Detached, rounded container right below the header) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute left-4 right-4 mt-2 p-5 z-40 bg-white/95 backdrop-blur-lg border border-slate-200/50 shadow-xl rounded-2xl flex flex-col gap-4"
          >
            <div className="flex flex-col gap-1.5">
              {navLinks.map((link, idx) => (
                <button
                  key={idx}
                  onClick={() => {
                    setActivePage(link.id);
                    setIsOpen(false);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className={`w-full text-left text-sm font-bold py-2.5 px-4 rounded-xl transition-all flex items-center justify-between cursor-pointer ${
                    activePage === link.id
                      ? 'bg-brand-900 text-white shadow-sm'
                      : 'text-brand-700 hover:text-brand-950 hover:bg-brand-50'
                  }`}
                >
                  <span>{lang === 'en' ? link.name.en : link.name.fr}</span>
                  {link.badge && (
                    <span className={`inline-block w-1.5 h-1.5 rounded-full ${activePage === link.id ? 'bg-accent-400' : 'bg-accent-500'} animate-pulse`}></span>
                  )}
                </button>
              ))}
            </div>
            
            <div className="h-[1px] bg-slate-100 my-1"></div>
            
            {/* Quick Mobile / Tablet Tappable Contact Cards */}
            <div className="grid grid-cols-2 gap-2.5">
              <a
                href="tel:+22891883867"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-brand-100 bg-brand-50 text-brand-950 hover:bg-brand-100 text-xs font-bold transition-all"
              >
                <Phone className="w-3.5 h-3.5 text-accent-500" />
                <span>{lang === 'en' ? 'Call Us' : 'Appeler'}</span>
              </a>
              <a
                href="mailto:contact@tenkeycenter.com"
                className="flex items-center justify-center gap-2 py-2.5 rounded-xl border border-brand-100 bg-brand-50 text-brand-950 hover:bg-brand-100 text-xs font-bold transition-all"
              >
                <Mail className="w-3.5 h-3.5 text-accent-500" />
                <span>Email</span>
              </a>
            </div>

            <div className="h-[1px] bg-slate-100 my-1"></div>

            {/* Language Switcher in Drawer */}
            <div className="flex justify-between items-center px-1">
              <span className="text-xs font-extrabold text-gray-500">
                {lang === 'en' ? 'Select Language:' : 'Choisir la langue :'}
              </span>
              <div className="flex gap-1 bg-brand-50 p-0.5 rounded-lg border border-brand-100">
                <button
                  onClick={() => {
                    setLang('en');
                    setIsOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-md text-[10px] font-black transition-all cursor-pointer ${
                    lang === 'en' ? 'bg-brand-900 text-white shadow-xs' : 'text-brand-600 hover:text-brand-950'
                  }`}
                >
                  EN
                </button>
                <button
                  onClick={() => {
                    setLang('fr');
                    setIsOpen(false);
                  }}
                  className={`px-3 py-1.5 rounded-md text-[10px] font-black transition-all cursor-pointer ${
                    lang === 'fr' ? 'bg-brand-900 text-white shadow-xs' : 'text-brand-600 hover:text-brand-950'
                  }`}
                >
                  FR
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
