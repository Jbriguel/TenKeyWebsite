import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Globe,
  Phone,
  Menu,
  X,
  ChevronDown,
  MessageCircle,
  ArrowRight,
  LayoutGrid,
  Award,
  MapPin,
} from 'lucide-react';

interface HeaderProps {
  lang: 'en' | 'fr';
  setLang: (lang: 'en' | 'fr') => void;
  onRegisterClick: () => void;
  activePage: string;
  setActivePage: (page: string) => void;
}

interface NavChild {
  page: string;
  label: { en: string; fr: string };
  description: { en: string; fr: string };
  icon: React.ElementType;
  iconColor: string;
  iconBg: string;
}

interface NavItem extends Omit<NavChild, 'description' | 'icon' | 'iconColor' | 'iconBg'> {
  children?: NavChild[];
}

const NAV_ITEMS: NavItem[] = [
  { page: 'home', label: { en: 'Home', fr: 'Accueil' } },
  {
    page: 'services',
    label: { en: 'Services', fr: 'Services' },
    children: [
      {
        page: 'services',
        label: { en: 'All Services', fr: 'Tous les services' },
        description: { en: 'Browse our full training catalog', fr: 'Parcourir tout notre catalogue' },
        icon: LayoutGrid,
        iconColor: 'text-blue-600',
        iconBg: 'bg-blue-50',
      },
      {
        page: 'ged-prep',
        label: { en: 'GED / Exam Prep', fr: 'Préparation GED / Examens' },
        description: { en: 'International certification prep', fr: 'Préparation aux certifications internationales' },
        icon: Award,
        iconColor: 'text-amber-600',
        iconBg: 'bg-amber-50',
      },
    ],
  },
  { page: 'pricing', label: { en: 'Pricing', fr: 'Tarifs' } },
  {
    page: 'about',
    label: { en: 'About', fr: 'À Propos' },
    children: [
      {
        page: 'about',
        label: { en: 'Our Centre', fr: 'Notre centre' },
        description: { en: 'Address, schedules & contact', fr: 'Adresse, horaires et contact' },
        icon: MapPin,
        iconColor: 'text-emerald-600',
        iconBg: 'bg-emerald-50',
      },
    ],
  },
  { page: 'student-space', label: { en: 'Student Space', fr: 'Espace Élève' } },
];

const LANGUAGES: { code: 'en' | 'fr'; label: { en: string; fr: string }; flag: string }[] = [
  { code: 'fr', label: { en: 'French', fr: 'Français' }, flag: 'FR' },
  { code: 'en', label: { en: 'English', fr: 'Anglais' }, flag: 'EN' },
];

export default function Header({
  lang,
  setLang,
  onRegisterClick,
  activePage,
  setActivePage,
}: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const langRef = useRef<HTMLDivElement>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);

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
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpenDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLabel = (item: typeof NAV_ITEMS[0]) => item.label[lang];
  const currentLang = LANGUAGES.find((l) => l.code === lang) || LANGUAGES[0];

  const ctaLabel = lang === 'en' ? 'Register' : "S'inscrire";
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
          <button
            onClick={() => setActivePage('home')}
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
          </button>

          {/* Desktop Navigation */}
          <nav ref={dropdownRef} className="hidden lg:flex items-center gap-1">
            {NAV_ITEMS.map((item) => {
              const isActive = activePage === item.page;
              const hasChildren = item.children && item.children.length > 0;
              const isOpen = openDropdown === item.page;

              if (hasChildren) {
                return (
                  <div
                    key={item.page}
                    className="relative"
                    onMouseEnter={() => setOpenDropdown(item.page)}
                    onMouseLeave={() => setOpenDropdown(null)}
                  >
                    <button
                      className={`relative flex items-center gap-1 px-3.5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                        isActive
                          ? 'text-brand-900'
                          : 'text-slate-600 hover:text-brand-900 hover:bg-slate-100/50'
                      }`}
                      aria-expanded={isOpen}
                      aria-haspopup="menu"
                    >
                      {navLabel(item)}
                      <ChevronDown
                        className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                      />
                      {isActive && (
                        <motion.div
                          layoutId="nav-pill"
                          className="absolute inset-0 bg-slate-100 rounded-full -z-10"
                          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                        />
                      )}
                    </button>

                    <AnimatePresence>
                      {isOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: 6, scale: 0.97 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 6, scale: 0.97 }}
                          transition={{ duration: 0.15 }}
                          className="absolute left-0 top-full pt-3 w-72 z-50"
                          role="menu"
                        >
                          <div className="bg-white border border-slate-100 rounded-2xl shadow-2xl p-2">
                            {item.children!.map((child) => {
                              const Icon = child.icon;
                              return (
                                <button
                                  key={child.page}
                                  onClick={() => {
                                    setActivePage(child.page);
                                    setOpenDropdown(null);
                                  }}
                                  className={`w-full flex items-center gap-3 text-left px-3 py-3 rounded-xl transition-colors cursor-pointer ${
                                    activePage === child.page
                                      ? 'bg-slate-50'
                                      : 'hover:bg-slate-50'
                                  }`}
                                  role="menuitem"
                                >
                                  <div
                                    className={`w-11 h-11 rounded-xl flex items-center justify-center shrink-0 ${child.iconBg}`}
                                  >
                                    <Icon className={`w-5 h-5 ${child.iconColor}`} />
                                  </div>
                                  <div className="min-w-0">
                                    <p
                                      className={`text-sm font-bold ${
                                        activePage === child.page ? 'text-brand-900' : 'text-slate-900'
                                      }`}
                                    >
                                      {child.label[lang]}
                                    </p>
                                    <p className="text-xs text-slate-500 font-medium leading-snug mt-0.5">
                                      {child.description[lang]}
                                    </p>
                                  </div>
                                </button>
                              );
                            })}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              }

              return (
                <button
                  key={item.page}
                  onClick={() => setActivePage(item.page)}
                  className={`relative px-3.5 py-2 text-xs font-bold rounded-full transition-all cursor-pointer ${
                    isActive
                      ? 'text-brand-900'
                      : 'text-slate-600 hover:text-brand-900 hover:bg-slate-100/50'
                  }`}
                >
                  {navLabel(item)}
                  {isActive && (
                    <motion.div
                      layoutId="nav-pill"
                      className="absolute inset-0 bg-slate-100 rounded-full -z-10"
                      transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                    />
                  )}
                </button>
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

            {/* CTA */}
            <button
              onClick={onRegisterClick}
              className="flex items-center gap-1.5 bg-brand-900 hover:bg-brand-800 text-white text-xs font-black uppercase tracking-wider px-4 py-2.5 rounded-full shadow-lg shadow-brand-900/15 hover:shadow-brand-900/25 hover:-translate-y-0.5 active:scale-95 transition-all cursor-pointer"
            >
              <span>{ctaLabel}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden flex items-center justify-center w-9 h-9 rounded-lg text-slate-700 hover:bg-slate-100 transition-colors cursor-pointer"
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
                const hasChildren = item.children && item.children.length > 0;
                const isOpen = openDropdown === item.page;

                if (hasChildren) {
                  return (
                    <div key={item.page} className="overflow-hidden rounded-xl">
                      <button
                        onClick={() => setOpenDropdown(isOpen ? null : item.page)}
                        className={`w-full flex items-center justify-between px-4 py-3 text-sm font-bold transition-colors cursor-pointer ${
                          activePage === item.page
                            ? 'bg-brand-50 text-brand-900'
                            : 'text-slate-600 hover:bg-slate-50'
                        }`}
                        aria-expanded={isOpen}
                      >
                        <span>{navLabel(item)}</span>
                        <ChevronDown
                          className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden bg-slate-50/50"
                          >
                            {item.children!.map((child) => {
                              const Icon = child.icon;
                              return (
                                <button
                                  key={child.page}
                                  onClick={() => {
                                    setActivePage(child.page);
                                    setOpenDropdown(null);
                                    setIsMobileMenuOpen(false);
                                  }}
                                  className={`w-full flex items-center gap-3 text-left px-4 py-3 transition-colors cursor-pointer ${
                                    activePage === child.page
                                      ? 'bg-slate-100/50'
                                      : 'hover:bg-slate-100/50'
                                  }`}
                                >
                                  <div
                                    className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${child.iconBg}`}
                                  >
                                    <Icon className={`w-4 h-4 ${child.iconColor}`} />
                                  </div>
                                  <div className="min-w-0">
                                    <p
                                      className={`text-sm font-bold ${
                                        activePage === child.page ? 'text-brand-900' : 'text-slate-900'
                                      }`}
                                    >
                                      {child.label[lang]}
                                    </p>
                                    <p className="text-xs text-slate-500 font-medium leading-snug mt-0.5">
                                      {child.description[lang]}
                                    </p>
                                  </div>
                                </button>
                              );
                            })}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                }

                return (
                  <button
                    key={item.page}
                    onClick={() => {
                      setActivePage(item.page);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`text-left px-4 py-3 rounded-xl text-sm font-bold transition-colors cursor-pointer ${
                      activePage === item.page
                        ? 'bg-brand-50 text-brand-900'
                        : 'text-slate-600 hover:bg-slate-50'
                    }`}
                  >
                    {navLabel(item)}
                  </button>
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
                <button
                  onClick={() => {
                    onRegisterClick();
                    setIsMobileMenuOpen(false);
                  }}
                  className="w-full mt-1 bg-brand-900 text-white text-sm font-black uppercase tracking-wider px-4 py-3 rounded-xl cursor-pointer"
                >
                  {ctaLabel}
                </button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
