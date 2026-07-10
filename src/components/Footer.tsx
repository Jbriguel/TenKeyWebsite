import React from 'react';
import { Mail, Phone, MapPin, Clock, Twitter, Instagram, Youtube, ArrowUp } from 'lucide-react';

interface FooterProps {
  lang: 'en' | 'fr';
}

export default function Footer({ lang }: FooterProps) {
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-brand-950 text-white border-t border-brand-900 pt-16 pb-8 text-left">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-brand-900">
          {/* Logo & Description */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="bg-accent-500 text-white font-extrabold text-base w-9 h-9 rounded-lg flex items-center justify-center shadow-md">
                TK
              </div>
              <div className="flex flex-col">
                <span className="font-extrabold tracking-wider text-white text-sm leading-tight font-display">
                  TEN KEY
                </span>
                <span className="text-[9px] text-brand-300 font-semibold tracking-widest uppercase">
                  CENTRE DE FORMATIONS
                </span>
              </div>
            </div>

            <p className="text-brand-200 text-xs leading-relaxed max-w-sm">
              {lang === 'en'
                ? 'Immersive, interactive, and differentiated language learning programs designed to equip professionals, academics, and kids with world-class English and French fluency.'
                : 'Programmes d’apprentissage immersifs, interactifs et différenciés conçus pour doter les professionnels, universitaires et enfants d’une maîtrise de l’anglais et du français.'}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="bg-brand-900 hover:bg-accent-500 hover:text-white text-brand-300 p-2 rounded-xl transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="bg-brand-900 hover:bg-accent-500 hover:text-white text-brand-300 p-2 rounded-xl transition-colors">
                <Instagram className="w-4 h-4" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="bg-brand-900 hover:bg-accent-500 hover:text-white text-brand-300 p-2 rounded-xl transition-colors">
                <Youtube className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white font-display">
              {lang === 'en' ? 'Quick Navigation' : 'Navigation Rapide'}
            </h4>
            <ul className="space-y-2.5 text-xs text-brand-200">
              <li>
                <a href="#home" className="hover:text-accent-400 transition-colors">
                  {lang === 'en' ? 'Home' : 'Accueil'}
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-accent-400 transition-colors">
                  {lang === 'en' ? 'Services & Modules' : 'Nos Services'}
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-accent-400 transition-colors">
                  {lang === 'en' ? 'Pricing & Schedules' : 'Tarifs & Horaires'}
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-accent-400 transition-colors">
                  {lang === 'en' ? 'About Our Center' : 'À Propos'}
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-accent-400 transition-colors">
                  {lang === 'en' ? 'Register Online' : "S'inscrire en ligne"}
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="lg:col-span-5 space-y-4">
            <h4 className="font-bold text-xs uppercase tracking-wider text-white font-display">
              {lang === 'en' ? 'Contact Details' : 'Informations de Contact'}
            </h4>
            <ul className="space-y-3.5 text-xs text-brand-200">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                <span>
                  Avedji/Adidoadin, Carrefour Adroukpape. Right next to the LAUS DEO pharmacy. Lomé - Togo.
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent-400 shrink-0" />
                <a href="tel:+22891883867" className="hover:text-accent-400 transition-colors font-semibold">
                  +228 91 88 38 67
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent-400 shrink-0" />
                <a href="mailto:contact@tenkeycenter.com" className="hover:text-accent-400 transition-colors">
                  contact@tenkeycenter.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-accent-400 shrink-0" />
                <span>
                  {lang === 'en' ? 'Mon - Sat: 08:00 to 20:30' : 'Lun - Sam: 08h 00 à 20h 30'}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Lower Row */}
        <div className="mt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-brand-300">
          <div>
            &copy; {new Date().getFullYear()} <span className="font-bold text-white">TEN KEY CENTRE DE FORMATIONS</span>.{' '}
            {lang === 'en' ? 'All Rights Reserved.' : 'Tous droits réservés.'}
          </div>

          <button
            onClick={handleScrollToTop}
            className="bg-brand-900 hover:bg-accent-500 text-brand-200 p-2.5 rounded-xl border border-brand-800 transition-colors flex items-center gap-1.5 cursor-pointer"
          >
            <span className="font-semibold">{lang === 'en' ? 'Back to Top' : 'Retour en haut'}</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
