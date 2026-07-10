import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, Globe, Menu, X, Twitter, Instagram, Youtube, Sparkles } from 'lucide-react';

interface HeaderProps {
  lang: 'en' | 'fr';
  setLang: (lang: 'en' | 'fr') => void;
  onRegisterClick: () => void;
}

export default function Header({ lang, setLang, onRegisterClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: { en: 'Home', fr: 'Accueil' }, href: '#home' },
    { name: { en: 'Services', fr: 'Services & Modules' }, href: '#services' },
    { name: { en: 'Pricing', fr: 'Tarifs & Horaires' }, href: '#pricing' },
    { name: { en: 'About', fr: 'À Propos' }, href: '#about' },
    { name: { en: 'Contact', fr: 'Contact' }, href: '#contact' },
  ];

  return (
    <header className="w-full relative z-50">
      {/* Top Banner Bar */}
      <div className="bg-brand-900 text-white text-xs py-2 px-4 border-b border-brand-800">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2">
          {/* Contact Details */}
          <div className="flex flex-wrap justify-center sm:justify-start items-center gap-4 text-brand-200">
            <a href="tel:+22890000000" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Phone className="w-3.5 h-3.5 text-accent-400" />
              <span>+228 90 90 10 10</span>
            </a>
            <span className="hidden sm:inline text-brand-700">|</span>
            <a href="mailto:info@tenkeycenter.com" className="flex items-center gap-1.5 hover:text-white transition-colors">
              <Mail className="w-3.5 h-3.5 text-accent-400" />
              <span>info@tenkeycenter.com</span>
            </a>
          </div>

          {/* Socials & Language */}
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2.5 text-brand-300">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors">
                <Twitter className="w-3.5 h-3.5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors">
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-accent-400 transition-colors">
                <Youtube className="w-3.5 h-3.5" />
              </a>
            </div>

            <div className="h-4 w-[1px] bg-brand-800"></div>

            {/* Language Switcher */}
            <div className="flex items-center gap-1 bg-brand-950/80 rounded-full p-0.5 border border-brand-800">
              <button
                onClick={() => setLang('en')}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  lang === 'en'
                    ? 'bg-accent-500 text-white shadow-sm'
                    : 'text-brand-300 hover:text-white'
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLang('fr')}
                className={`px-2 py-0.5 rounded-full text-[10px] font-bold transition-all ${
                  lang === 'fr'
                    ? 'bg-accent-500 text-white shadow-sm'
                    : 'text-brand-300 hover:text-white'
                }`}
              >
                FR
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white/95 backdrop-blur-md border-b border-gray-100 py-4 px-4 sticky top-0 shadow-sm">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <a href="#home" className="flex items-center gap-2.5 group">
            <div className="bg-gradient-to-tr from-brand-700 to-brand-500 text-white font-extrabold text-xl w-10 h-10 rounded-xl flex items-center justify-center shadow-md shadow-brand-200 group-hover:scale-105 transition-transform duration-300">
              TK
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold tracking-wider text-brand-950 text-base leading-tight font-display">
                TEN KEY
              </span>
              <span className="text-[10px] text-gray-500 font-semibold tracking-widest uppercase">
                CENTRE DE FORMATIONS
              </span>
            </div>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link, idx) => (
              <a
                key={idx}
                href={link.href}
                className="text-sm font-semibold text-gray-600 hover:text-brand-600 transition-colors duration-200"
              >
                {lang === 'en' ? link.name.en : link.name.fr}
              </a>
            ))}
          </div>

          {/* Registration CTA Button (Desktop) */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={onRegisterClick}
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold text-sm px-5 py-2.5 rounded-xl shadow-lg shadow-accent-100 hover:shadow-accent-200 transition-all duration-300 transform hover:-translate-y-0.5 flex items-center gap-1.5 cursor-pointer"
            >
              <Sparkles className="w-4 h-4" />
              <span>{lang === 'en' ? 'Register Now' : "S'inscrire"}</span>
            </button>
          </div>

          {/* Mobile Menu Trigger */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={onRegisterClick}
              className="bg-accent-500 text-white font-bold text-xs px-3 py-2 rounded-lg hover:bg-accent-600 transition-colors"
            >
              {lang === 'en' ? 'Register' : "S'inscrire"}
            </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-1.5 text-gray-700 hover:text-brand-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden bg-white border-b border-gray-100 shadow-xl absolute w-full top-[100%] left-0"
          >
            <div className="px-5 py-6 flex flex-col gap-4">
              {navLinks.map((link, idx) => (
                <a
                  key={idx}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-base font-semibold text-gray-700 hover:text-brand-600 py-1 transition-colors"
                >
                  {lang === 'en' ? link.name.en : link.name.fr}
                </a>
              ))}
              <div className="h-[1px] bg-gray-100 my-2"></div>
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium text-gray-500">
                  {lang === 'en' ? 'Select Language:' : 'Choisir la langue :'}
                </span>
                <div className="flex gap-2">
                  <button
                    onClick={() => {
                      setLang('en');
                      setIsOpen(false);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      lang === 'en' ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    English
                  </button>
                  <button
                    onClick={() => {
                      setLang('fr');
                      setIsOpen(false);
                    }}
                    className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                      lang === 'fr' ? 'bg-brand-600 text-white' : 'bg-gray-100 text-gray-600'
                    }`}
                  >
                    Français
                  </button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
