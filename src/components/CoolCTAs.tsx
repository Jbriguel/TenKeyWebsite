import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, Phone, Calendar, Send, HelpCircle, ShieldCheck, Clock, Users, Flame, Award, Lightbulb, MapPin, MessagesSquare, Check } from 'lucide-react';

interface CTAProps {
  lang: 'en' | 'fr';
  onAction?: (serviceName?: string) => void;
}

/**
 * STYLE A: "THE NEON GLOW GRID" (Futuristic dark glassmorphism CTA)
 * Ideal for Home Page - High impact, modern, interactive, with countdown timers and seat indicators.
 */
export function NeonGlowCTA({ lang, onAction }: CTAProps) {
  const [seconds, setSeconds] = useState(1745); // countdown timer

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((prev) => (prev > 0 ? prev - 1 : 1800));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const formatTime = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="relative overflow-hidden bg-slate-950 rounded-[2.5rem] border border-accent-500/30 p-8 sm:p-12 lg:p-16 my-16 shadow-2xl">
      {/* Dynamic background particles and glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-accent-600/10 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>

      {/* Decorative technical accent bar */}
      <div className="absolute top-0 left-12 w-32 h-1.5 bg-gradient-to-r from-accent-500 to-brand-500 rounded-b-full"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left text column */}
        <div className="lg:col-span-7 text-left">
          <div className="inline-flex items-center gap-2 bg-accent-500/10 border border-accent-500/20 text-accent-400 text-xs font-black tracking-widest px-4 py-2 rounded-full uppercase mb-6">
            <Flame className="w-3.5 h-3.5 animate-pulse" />
            <span>{lang === 'en' ? 'LIMITED SEATS COHORT' : 'COHORTE À PLACES LIMITÉES'}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-display mb-6">
            {lang === 'en' ? (
              <>
                Accelerate Your English to <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Executive Fluency</span>
              </>
            ) : (
              <>
                Propulsez Votre Anglais vers une <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Aisance Décisionnelle</span>
              </>
            )}
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 max-w-xl font-medium">
            {lang === 'en' 
              ? 'Join our premium hybrid intensive cabin. Gain the specific vocabulary, negotiation confidence, and CEFR certification recognized globally.'
              : 'Rejoignez notre cabinet intensif hybride de prestige. Maîtrisez le vocabulaire stratégique, négociez en toute assurance et certifiez votre niveau CECRL.'}
          </p>

          {/* Value mini bullets */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {[
              lang === 'en' ? 'Free Diagnostic Assessment' : 'Évaluation Diagnostique Offerte',
              lang === 'en' ? 'Native Executive Coaches' : 'Coaches de Niveau Langue Maternelle',
              lang === 'en' ? 'Interactive Smart Lab Access' : 'Accès aux Ateliers Interactifs',
              lang === 'en' ? '98.6% Certification Pass Rate' : '98,6% de Réussite aux Examens'
            ].map((bullet, idx) => (
              <div key={idx} className="flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-accent-500 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-slate-200">{bullet}</span>
              </div>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 items-center">
            <button
              onClick={() => onAction?.('Intensive Assessment Cohort')}
              className="bg-accent-500 hover:bg-accent-600 text-white font-black text-xs sm:text-sm uppercase tracking-widest px-8 py-5 rounded-2xl transition-all duration-300 shadow-xl shadow-accent-950/40 hover:-translate-y-0.5 active:scale-95 cursor-pointer flex items-center gap-3"
            >
              <span>{lang === 'en' ? 'Secure My Seat Now' : 'Réserver Ma Place Maintenant'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <a
              href="https://wa.me/22890000000" // Replace placeholder WhatsApp number naturally in the environment
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black text-xs uppercase tracking-widest px-6 py-5 rounded-2xl transition-all active:scale-95 cursor-pointer flex items-center gap-2.5"
            >
              <Phone className="w-4 h-4 text-emerald-400" />
              <span>{lang === 'en' ? 'WhatsApp Advisor' : 'Conseiller WhatsApp'}</span>
            </a>
          </div>
        </div>

        {/* Right HUD column */}
        <div className="lg:col-span-5 w-full">
          <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-2xl relative overflow-hidden">
            {/* Visual tech grid overlay */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b_1px,transparent_1px),linear-gradient(to_bottom,#1e293b_1px,transparent_1px)] bg-[size:2rem_2rem] opacity-20 pointer-events-none"></div>
            
            <div className="relative z-10 text-left">
              {/* Active session counter */}
              <div className="flex items-center justify-between mb-6 pb-6 border-b border-slate-800">
                <div>
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest block mb-1">
                    {lang === 'en' ? 'COHORT STATUS' : 'STATUT DE COHORTE'}
                  </span>
                  <span className="text-sm font-black text-white flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping"></span>
                    {lang === 'en' ? 'OPEN - ENROLLING' : 'OUVERTE - EN COURS'}
                  </span>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest block mb-1">
                    {lang === 'en' ? 'SEATS LEFT' : 'PLACES RESTANTES'}
                  </span>
                  <span className="text-lg font-black text-accent-400">4 / 20</span>
                </div>
              </div>

              {/* Real-time countdown timer */}
              <div className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-4 mb-6 text-center">
                <span className="text-[10px] text-slate-400 font-extrabold uppercase tracking-widest block mb-2">
                  {lang === 'en' ? 'SPECIAL INTRO OFFER CLOSES IN' : 'L’OFFRE DE BIENVENUE EXPIRE DANS'}
                </span>
                <div className="text-3xl font-black text-white tracking-widest font-mono">
                  {formatTime(seconds)}
                </div>
              </div>

              {/* Quick Callback Mini Form */}
              <form 
                onSubmit={(e) => {
                  e.preventDefault();
                  alert(lang === 'en' ? 'Thank you! We will call you back within 15 minutes.' : 'Merci ! Nous vous rappellerons dans les 15 minutes.');
                  onAction?.('Quick Callback Request');
                }}
                className="space-y-3"
              >
                <div className="relative">
                  <input 
                    type="tel"
                    required
                    placeholder={lang === 'en' ? 'Enter Phone (WhatsApp preferred)' : 'N° Téléphone (WhatsApp de préf.)'}
                    className="w-full bg-slate-950/80 border border-slate-800 focus:border-accent-500 rounded-xl px-4 py-3.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-all font-bold"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-accent-500/10 hover:bg-accent-500 border border-accent-500/30 hover:border-accent-500 text-accent-400 hover:text-white transition-all duration-300 font-black text-xs uppercase tracking-widest py-3.5 rounded-xl cursor-pointer"
                >
                  {lang === 'en' ? 'Request Instant Callback 📞' : 'Me Faire Rappeler Immédiatement 📞'}
                </button>
              </form>

              <p className="text-[10px] text-slate-500 mt-4 text-center font-bold">
                {lang === 'en' 
                  ? '🔒 We protect your data. Fast callback by our Lomé staff.'
                  : '🔒 Vos données sont protégées. Rappel rapide par notre équipe de Lomé.'}
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

/**
 * STYLE B: "THE EXECUTIVE LUXURY PANEL" (Sleek corporate style)
 * Ideal for Services Page - Structured, elegant, showcasing credibility, physical address & hybrid learning.
 */
export function ExecutiveLuxuryCTA({ lang, onAction }: CTAProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-[#0b1c24] to-[#040e13] rounded-[2rem] border border-emerald-950 p-8 sm:p-12 lg:p-14 my-16 shadow-2xl text-left">
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-emerald-500/5 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Main Text Content */}
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/20 text-[#a2df33] text-[10px] font-black tracking-widest px-3 py-1.5 rounded-md uppercase mb-5">
            <Award className="w-3.5 h-3.5" />
            <span>{lang === 'en' ? 'ACCREDITED BILINGUAL HUB' : 'CENTRE BILIGUE AGRÉÉ'}</span>
          </div>

          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight font-display mb-4">
            {lang === 'en' 
              ? 'Need a Customized Corporate Plan or Certified Translation Audit?'
              : 'Besoin d’un Plan Entreprise Sur-Mesure ou d’un Audit de Traduction ?'}
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 max-w-2xl font-medium">
            {lang === 'en'
              ? 'Whether you require private executive coaching (VIP) or intensive group sessions for your company staff, we create structured curriculum targeted to your sector.'
              : 'Que vous ayez besoin d’un coaching exécutif privé (VIP) ou de sessions de groupe intensives pour vos équipes, nous formulons un programme sur-mesure pour votre secteur d’activité.'}
          </p>

          {/* Three horizontal highlights */}
          <div className="flex flex-wrap gap-x-8 gap-y-3 mb-8">
            {[
              lang === 'en' ? '✓ ISO-aligned modules' : '✓ Modules alignés ISO',
              lang === 'en' ? '✓ Official Certifications' : '✓ Diplômes officiels certifiés',
              lang === 'en' ? '✓ Center & Online hybrid' : '✓ Formats Présentiel & En ligne'
            ].map((text, idx) => (
              <span key={idx} className="text-xs font-black text-[#a2df33] tracking-wider uppercase">
                {text}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onAction?.('Executive Corporate Custom Plan')}
              className="bg-[#a2df33] hover:bg-[#b5ee44] text-slate-950 font-black text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition-all duration-300 shadow-md hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              {lang === 'en' ? 'Consult Our Experts' : 'Consulter Nos Experts'}
            </button>
            <button
              onClick={() => {
                const form = document.getElementById('contact-form-section');
                if (form) form.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition-all active:scale-95 cursor-pointer"
            >
              {lang === 'en' ? 'Download Brochure' : 'Télécharger la Brochure'}
            </button>
          </div>
        </div>

        {/* Side Badge Panel */}
        <div className="lg:col-span-4 w-full bg-slate-950/40 border border-slate-900 rounded-2xl p-6 text-center">
          <MapPin className="w-8 h-8 text-[#a2df33] mx-auto mb-3" />
          <h4 className="text-xs font-black text-white uppercase tracking-widest mb-1">
            {lang === 'en' ? 'Lomé Head Office' : 'Siège Principal à Lomé'}
          </h4>
          <p className="text-[11px] text-slate-400 font-bold leading-relaxed mb-4">
            {lang === 'en' 
              ? 'Located on Bd du 13 Janvier, Lomé, Togo. Easily accessible with secure on-site parking.' 
              : 'Situé sur le Bd du 13 Janvier, Lomé, Togo. Facile d’accès avec parking sécurisé.'}
          </p>
          <div className="h-[1px] bg-slate-900 w-full my-3"></div>
          <p className="text-[10px] text-slate-500 font-extrabold uppercase">
            {lang === 'en' ? 'OPEN MON - SAT: 7:30 - 20:30' : 'OUVERT LUN - SAM : 7h30 - 20h30'}
          </p>
        </div>

      </div>
    </div>
  );
}

/**
 * STYLE C: "THE BENTO LEVEL TESTER" (Playful interactive light bento style)
 * Ideal for Pricing/Horaires Page - Dynamic interaction to select class preference.
 */
export function BentoLevelTesterCTA({ lang, onAction }: CTAProps) {
  const [selectedFormat, setSelectedFormat] = useState<'night' | 'weekend' | 'vip'>('night');

  const formats = {
    night: {
      title: { en: '🌙 Night Executive Shift', fr: '🌙 Shift Exécutif du Soir' },
      hours: { en: '18:30 - 20:30 (Tue/Thu/Fri)', fr: '18h30 - 20h30 (Mar/Jeu/Ven)' },
      recommendFor: { en: 'Working professionals in corporate Lomé', fr: 'Cadres et salariés en poste à Lomé' }
    },
    weekend: {
      title: { en: '📅 Saturday Masterclass', fr: '📅 Masterclass du Samedi' },
      hours: { en: '08:00 - 13:00 / 14:00 - 17:00', fr: '08h00 - 13h00 / 14h00 - 17h00' },
      recommendFor: { en: 'Those with packed weekday executive schedules', fr: 'Ceux ayant un agenda professionnel chargé' }
    },
    vip: {
      title: { en: '👑 Private 1-on-1 Cabinet', fr: '👑 Cabinet Privé Individuel 1-à-1' },
      hours: { en: 'Flexible (7:00 - 21:00 Daily)', fr: 'Flexible (7h00 - 21h00 Tous les jours)' },
      recommendFor: { en: 'Diplomats, Directors & high-speed career growth', fr: 'Diplomates, directeurs et progression ultra-rapide' }
    }
  };

  return (
    <div className="relative overflow-hidden bg-white rounded-[2rem] border border-slate-200/80 p-8 sm:p-12 my-16 shadow-xl text-left text-slate-900">
      {/* Abstract structural aesthetics */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:3rem_3rem] opacity-40 pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Left Interactive Panel */}
        <div className="lg:col-span-5 bg-slate-50 border border-slate-100 rounded-2xl p-6">
          <span className="text-[10px] font-black tracking-widest text-brand-600 uppercase block mb-4">
            {lang === 'en' ? 'INTERACTIVE TIME SELECTOR' : 'PLANIFICATEUR INTERACTIF'}
          </span>
          <h4 className="text-sm font-black text-slate-900 mb-4 uppercase">
            {lang === 'en' ? 'Compare Class Formats' : 'Comparez les Créneaux'}
          </h4>

          {/* Interactive Toggle Pill row */}
          <div className="space-y-3">
            {(Object.keys(formats) as Array<'night' | 'weekend' | 'vip'>).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedFormat(key)}
                className={`w-full text-left p-3 rounded-xl border transition-all cursor-pointer flex items-center justify-between ${
                  selectedFormat === key
                    ? 'bg-brand-600 border-brand-600 text-white shadow-md'
                    : 'bg-white border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                <span className="text-xs font-bold">{formats[key].title[lang]}</span>
                {selectedFormat === key && <Check className="w-4 h-4 text-white" />}
              </button>
            ))}
          </div>

          {/* Live response box */}
          <div className="mt-6 pt-5 border-t border-slate-200/60 text-left">
            <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest block mb-1">
              {lang === 'en' ? 'HOURS' : 'HORAIRES'}
            </span>
            <p className="text-xs font-black text-slate-900 mb-2">
              {formats[selectedFormat].hours[lang]}
            </p>
            <span className="text-[9px] text-slate-400 font-extrabold uppercase tracking-widest block mb-1">
              {lang === 'en' ? 'RECOMMENDED FOR' : 'RECOMMANDÉ POUR'}
            </span>
            <p className="text-xs text-slate-500 font-semibold leading-relaxed">
              {formats[selectedFormat].recommendFor[lang]}
            </p>
          </div>
        </div>

        {/* Right pitch column */}
        <div className="lg:col-span-7">
          <span className="bg-brand-100 border border-brand-200 text-brand-700 text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full uppercase inline-block mb-4">
            {lang === 'en' ? 'SMART TUITION MATCH' : 'ORIENTATION ET TARIFICATION'}
          </span>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug font-display mb-4">
            {lang === 'en' 
              ? 'Find Your Optimal Schedule and Tuition Package' 
              : 'Trouvez le Créneau Horaire et la Formule Idéale'}
          </h2>

          <p className="text-slate-500 text-xs sm:text-sm leading-relaxed font-semibold mb-6">
            {lang === 'en'
              ? 'Different schedules adapt perfectly to your corporate workflow. We structure fees with transparent budgets and zero hidden charges.'
              : 'Nos différents créneaux s’insèrent à la perfection dans votre semaine professionnelle. Tarification transparente et sans frais cachés.'}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onAction?.(`Tuition consultation - Format: ${selectedFormat}`)}
              className="bg-brand-600 hover:bg-brand-700 text-white font-black text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition-all duration-300 shadow-md hover:-translate-y-0.5 active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <span>{lang === 'en' ? 'Lock This Schedule Choice' : 'Sélectionner ce Créneau'}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => {
                const faq = document.getElementById('testimonials-faq-section');
                if (faq) {
                  faq.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }
              }}
              className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-black text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition-all cursor-pointer"
            >
              {lang === 'en' ? 'Ask a Question' : 'Poser une Question'}
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}

/**
 * STYLE D: "THE DUAL-FLAG DIPLOMATIC SHOWCASE" (Bilingual diplomatic layout)
 * Ideal for About Page - Deep corporate trust, prestige accenting, Lomé success emphasis.
 */
export function DiplomaticShowcaseCTA({ lang, onAction }: CTAProps) {
  return (
    <div className="relative overflow-hidden bg-slate-950 text-white rounded-[2rem] border border-slate-800 p-8 sm:p-12 lg:p-16 my-16 shadow-2xl">
      {/* Flag aesthetic graphics subtly blurred in the background */}
      <div className="absolute top-1/2 left-0 w-44 h-44 bg-blue-600/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute top-1/2 right-0 w-44 h-44 bg-red-600/5 rounded-full blur-2xl pointer-events-none"></div>
      
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
        
        {/* Flag emblems column */}
        <div className="lg:col-span-4 flex justify-center lg:justify-start gap-4">
          <div className="relative">
            {/* Elegant physical layout of premium circular flags representing Togo and Anglophone partnerships */}
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-emerald-600 to-yellow-500 flex items-center justify-center text-white text-lg font-black shadow-lg uppercase relative overflow-hidden border border-white/10">
              <span className="relative z-10">FR</span>
              <div className="absolute bottom-0 right-0 w-full h-1 bg-yellow-500"></div>
            </div>
          </div>
          <div className="flex items-center text-slate-400 font-extrabold">
            <span className="text-xl sm:text-2xl font-mono">⇄</span>
          </div>
          <div>
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-br from-blue-900 to-red-600 flex items-center justify-center text-white text-lg font-black shadow-lg uppercase relative overflow-hidden border border-white/10">
              <span className="relative z-10">EN</span>
              <div className="absolute bottom-0 right-0 w-full h-1 bg-red-500"></div>
            </div>
          </div>
        </div>

        {/* Text column */}
        <div className="lg:col-span-8 text-left">
          <span className="text-[#a2df33] text-[10px] font-black tracking-widest uppercase block mb-3">
            {lang === 'en' ? 'DIPLOMATIC & EXECUTIVE COHORT' : 'COHORTE DIPLOMATIQUE & EXÉCUTIVE'}
          </span>

          <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight leading-snug font-display mb-4">
            {lang === 'en' 
              ? 'Lomé’s Elite Bilingual Platform' 
              : 'Le Hub Bilingue d’Élite de Lomé'}
          </h3>

          <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-6 font-medium">
            {lang === 'en'
              ? 'TEN KEY prepares diplomats, corporate executives, and students for global opportunities. Our native speakers and senior translation coaches guarantee uncompromised results.'
              : 'TEN KEY forme les cadres d’organisations régionales, diplomates et directeurs aux exigences internationales. Nos locuteurs natifs et traducteurs seniors garantissent des résultats d’excellence.'}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onAction?.('Diplomatic Placement Audit')}
              className="bg-[#a2df33] hover:bg-[#b5ee44] text-slate-950 font-black text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              {lang === 'en' ? 'Book Placement Audit' : 'Planifier un Audit de Niveau'}
            </button>
            <a
              href="https://wa.me/22890000000"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition-all active:scale-95 cursor-pointer flex items-center gap-2"
            >
              <MessagesSquare className="w-4 h-4 text-[#a2df33]" />
              <span>{lang === 'en' ? 'Direct Chat' : 'Discussion Directe'}</span>
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}

/**
 * STYLE E: "THE GED BOOTCAMP FLASH CARD" (Extreme highlight accent block)
 * Ideal for GED Prep Page - Vibrant green emphasis, high confidence guarantee.
 */
export function GedFlashCTA({ lang, onAction }: CTAProps) {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#a2df33] to-[#b5ee44] text-[#091e16] rounded-[2.5rem] p-8 sm:p-12 lg:p-14 my-16 shadow-2xl text-left">
      {/* Dark dynamic shapes in back */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-950/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-emerald-950/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Main Content text */}
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 bg-emerald-950 text-white text-[10px] font-black tracking-widest px-3.5 py-1.5 rounded-full uppercase mb-5">
            <ShieldCheck className="w-4 h-4 text-[#a2df33] shrink-0" />
            <span>{lang === 'en' ? '98% PASS RATE GUARANTEE' : 'GARANTIE DE RÉUSSITE DE 98%'}</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-black text-emerald-950 tracking-tight leading-none font-display mb-4">
            {lang === 'en' 
              ? 'Ready to Pass Your Official GED Exam?' 
              : 'Prêt à Valider Votre Examen Officiel GED ?'}
          </h3>

          <p className="text-emerald-950/80 text-xs sm:text-sm leading-relaxed mb-6 font-semibold max-w-xl">
            {lang === 'en'
              ? 'Get customized timetables, structured revision bootcamps, and real mock simulations in Lomé. Our certified experts ensure you earn your credential with absolute confidence.'
              : 'Bénéficiez d’horaires adaptés, d’ateliers de révision structurés et de simulations réelles d’examens à Lomé. Nos experts certifiés vous guident vers le succès.'}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onAction?.('GED Bootcamp Enrollment')}
              className="bg-emerald-950 hover:bg-emerald-900 text-white font-black text-xs uppercase tracking-widest px-8 py-4.5 rounded-2xl transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              {lang === 'en' ? 'Join the Next Cohort' : 'Rejoindre la Prochaine Cohorte'}
            </button>
            <button
              onClick={() => {
                const form = document.getElementById('contact-form-section');
                if (form) form.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-emerald-950/10 hover:bg-emerald-950/25 text-emerald-950 border border-emerald-950/20 font-black text-xs uppercase tracking-widest px-6 py-4.5 rounded-2xl transition-all active:scale-95 cursor-pointer"
            >
              {lang === 'en' ? 'Get Syllabus PDF' : 'Télécharger le Syllabus PDF'}
            </button>
          </div>
        </div>

        {/* Side Mini HUD */}
        <div className="lg:col-span-4 bg-emerald-950 text-white rounded-3xl p-6 shadow-xl border border-emerald-900/40 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-900/20 rounded-full blur-xl pointer-events-none"></div>
          
          <span className="text-3xl sm:text-4xl font-black text-[#a2df33] font-display block mb-1">90 DAYS</span>
          <h4 className="text-[11px] font-black text-slate-200 uppercase tracking-widest mb-3">
            {lang === 'en' ? 'INTENSIVE STRATEGY BOOTCAMP' : 'ENTRAÎNEMENT INTENSIF ACCÉLÉRÉ'}
          </h4>
          <p className="text-[10px] text-slate-400 font-bold leading-normal">
            {lang === 'en' 
              ? 'Specialized diagnostic tests and customized homework modules tailored to adult working schedules.'
              : 'Tests diagnostiques précis et modules d’exercices à domicile adaptés à l’agenda des adultes.'}
          </p>
        </div>

      </div>
    </div>
  );
}
