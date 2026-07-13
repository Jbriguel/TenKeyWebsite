import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { NavLink, Link } from 'react-router-dom';
import {
  Globe,
  Phone,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  ArrowRight,
} from 'lucide-react';

interface HeaderProps {
  lang: 'en' | 'fr';
  setLang: (lang: 'en' | 'fr') => void;
  onRegisterClick: () => void;
}

interface NavItem {
  page: string;
  label: { en: string; fr: string };
}

const NAV_ITEMS: NavItem[] = [
  { page: 'home', label: { en: 'Home', fr: 'Accueil' } },
  { page: 'services', label: { en: 'Services', fr: 'Services' } },
  { page: 'pricing', label: { en: 'Pricing', fr: 'Tarifs' } },
  { page: 'about', label: { en: 'About', fr: 'À Propos' } },
  { page: 'contact', label: { en: 'Contact', fr: 'Contact' } },
];

const LANGUAGES: { code: 'en' | 'fr'; label: { en: string; fr: string }; flag: string }[] = [
  { code: 'fr', label: { en: 'French', fr: 'Français' }, flag: 'FR' },
  { code: 'en', label: { en: 'English', fr: 'Anglais' }, flag: 'EN' },
];

export default function Header({
  lang,
  setLang,
  onRegisterClick,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const langRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (langRef.current && !langRef.current.contains(event.target as Node)) {
        setIsLangOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLabel = (item: typeof NAV_ITEMS[0]) => item.label[lang];
  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];
 
  const phone = '+228 91 88 38 67';
  const whatsapp = '+22891883867';

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-200/60 py-3'
          : 'bg-white py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group cursor-pointer"
            aria-label="TEN KEY Centre de Formations"
          >
            <img
              src="/logo.jpeg"
              alt="TEN KEY Centre de Formations"
              className="h-9 w-auto object-contain rounded-md"
            />
            <div className="hidden sm:flex flex-col items-start leading-none">
              <span className="font-black text-brand-900 text-sm tracking-wide font-display">TEN KEY</span>
              <span className="text-[9px] font-bold text-slate-500 uppercase tracking-wider mt-0.5">
                Centre de Formations
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const to = item.page === 'home' ? '/' : `/${item.page}`;
              return (
                <NavLink
                  key={item.page}
                  to={to}
                  end={item.page === 'home'}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-xs font-bold tracking-wide rounded-full transition-all cursor-pointer ${
                      isActive
                        ? 'text-white'
                        : 'text-slate-600 hover:text-brand-900 hover:bg-slate-100/50'
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {navLabel(item)}
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-brand-600 rounded-full -z-10"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Language Dropdown */}
            <div ref={langRef} className="relative">
              <button
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100/60 transition-colors cursor-pointer"
                aria-haspopup="listbox"
                aria-expanded={isLangOpen}
              >
                <Globe className="w-4 h-4 text-brand-600" />
                <span className="hidden sm:inline uppercase tracking-wide">{currentLang.flag}</span>
                <ChevronDown className={`w-3 h-3 transition-transform ${isLangOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 6, scale: 0.97 }}
                    transition={{ duration: 0.15 }}
                    className="absolute right-0 mt-2 w-36 bg-white border border-slate-100 rounded-xl shadow-xl p-1.5 z-50"
                    role="listbox"
                  >
                    {LANGUAGES.map((config) => (
                      <button
                        key={config.code}
                        onClick={() => {
                          setLang(config.code);
                          setIsLangOpen(false);
                        }}
                        className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-xs font-bold transition-colors cursor-pointer ${
                          lang === config.code
                            ? 'bg-brand-50 text-brand-900'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                        role="option"
                        aria-selected={lang === config.code}
                      >
                        <span className="w-5 text-center font-black text-[10px]">{config.flag}</span>
                        <span>{config.label[lang]}</span>
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Quick Contact */}
            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="hidden md:flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold text-slate-600 hover:bg-slate-100/60 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-brand-600" />
              <span>{phone}</span>
            </a>

            {/* WhatsApp shortcut */}
            <a
              href={`https://wa.me/${whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center justify-center w-9 h-9 rounded-full bg-emerald-50 text-emerald-600 hover:bg-emerald-100 transition-colors"
              aria-label="WhatsApp"
            >
              <MessageCircle className="w-4 h-4" />
            </a>

            

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-brand-700 hover:bg-slate-100 transition-colors cursor-pointer"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="lg:hidden bg-white border-b border-slate-100 overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-1">
              {NAV_ITEMS.map((item) => {
                const to = item.page === 'home' ? '/' : `/${item.page}`;
                return (
                  <NavLink
                    key={item.page}
                    to={to}
                    end={item.page === 'home'}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
                        isActive
                          ? 'bg-brand-600 text-white'
                          : 'text-slate-600 hover:bg-slate-50'
                      }`
                    }
                  >
                    {navLabel(item)}
                  </NavLink>
                );
              })}
              <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
                <a
                  href={`tel:${phone.replace(/\s/g, '')}`}
                  className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-slate-600"
                >
                  <Phone className="w-4 h-4 text-brand-600" />
                  {phone}
                </a>
                <a
                  href={`https://wa.me/${whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 text-sm font-bold text-emerald-600"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}