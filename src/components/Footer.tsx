import React from 'react';
import { Mail, Phone, MapPin, Clock, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: string;
  setActivePage?: (page: string) => void;
}

export default function Footer({ lang, setActivePage }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNav = (page: string) => {
    if (page === 'contact') {
      if (setActivePage) {
        setActivePage('home');
      }
      setTimeout(() => {
        const element = document.getElementById('contact-form-section');
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      if (setActivePage) {
        setActivePage(page);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-white text-slate-700 border-t border-slate-100 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-slate-100">
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <img
                src="/logo.jpeg"
                alt="TEN KEY Centre de Formations"
                className="h-10 w-auto object-contain rounded-md bg-slate-100 p-1"
              />
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-slate-900 text-sm leading-tight font-display">
                  TEN KEY
                </span>
                <span className="text-[9px] text-slate-500 font-semibold tracking-widest uppercase">
                  CENTRE DE FORMATIONS
                </span>
              </div>
            </div>

            <p className="text-slate-500 text-xs leading-relaxed max-w-sm">
              {lang === 'en'
                ? 'Practical English and French training in Lomé for professionals, students, and children. Native trainers, work-compatible schedules, certified translations, and official exam preparation.'
                : 'Formations pratiques d’anglais et de français à Lomé pour professionnels, étudiants et enfants. Formateurs natifs, horaires adaptés au travail, traductions certifiées et préparation aux examens officiels.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-slate-100 hover:bg-brand-600 hover:text-white text-slate-600 p-2 rounded-xl transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-slate-100 hover:bg-brand-600 hover:text-white text-slate-600 p-2 rounded-xl transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-slate-100 hover:bg-brand-600 hover:text-white text-slate-600 p-2 rounded-xl transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 font-display">
              {lang === 'en' ? 'Quick Navigation' : 'Navigation Rapide'}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-500">
              <li>
                <button 
                  onClick={() => handleNav('home')} 
                  className="hover:text-brand-600 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  {lang === 'en' ? 'Home' : 'Accueil'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('services')} 
                  className="hover:text-brand-600 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  {lang === 'en' ? 'Services & Modules' : 'Nos Services'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('pricing')} 
                  className="hover:text-brand-600 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  {lang === 'en' ? 'Pricing & Schedules' : 'Tarifs & Horaires'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('about')} 
                  className="hover:text-brand-600 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  {lang === 'en' ? 'About Our Center' : 'À Propos'}
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNav('contact')} 
                  className="hover:text-brand-600 transition-colors cursor-pointer text-left focus:outline-none"
                >
                  {lang === 'en' ? 'Register Online' : "S'inscrire en ligne"}
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-slate-900 font-display">
              {lang === 'en' ? 'Contact Details' : 'Informations de Contact'}
            </h4>
            <ul className="space-y-3.5 text-xs text-slate-500">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                <span>
                  Avedji/Adidoadin, Carrefour Adroukpape. Right next to the LAUS DEO pharmacy. Lomé - Togo.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-brand-600 shrink-0" />
                <a href="tel:+22891883867" className="hover:text-brand-600 transition-colors font-semibold">
                  +228 91 88 38 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-600 shrink-0" />
                <a href="mailto:contact@tenkeycenter.com" className="hover:text-brand-600 transition-colors">
                  contact@tenkeycenter.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-brand-600 shrink-0" />
                <span>
                  {lang === 'en' ? 'Mon - Sat: 08:00 to 20:30' : 'Lun - Sam: 08h 00 à 20h 30'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Row */}
        <div className="mt-8 flex flex-col lg:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <div className="text-center lg:text-left">
            &copy; 2026 • Where ideas become products. — <span className="font-bold text-slate-900">JDY Studio</span>
          </div>

          <div className="flex items-center gap-6">
            <button
              onClick={() => handleNav('terms')}
              className="hover:text-brand-600 transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Terms & Conditions' : 'CGV'}
            </button>
            <button
              onClick={() => handleNav('privacy')}
              className="hover:text-brand-600 transition-colors cursor-pointer"
            >
              {lang === 'en' ? 'Privacy Policy' : 'Confidentialité'}
            </button>
          </div>

          <button
            onClick={handleScrollToTop}
            className="bg-slate-100 hover:bg-brand-600 hover:text-white text-slate-700 p-2.5 rounded-xl border border-slate-200 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span className="font-semibold">{lang === 'en' ? 'Back to Top' : 'Retour en haut'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
