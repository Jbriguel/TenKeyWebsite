import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Sparkles, CheckCircle2, Phone, Calendar, Send, HelpCircle, ShieldCheck, Clock, Users, Flame, Award, Lightbulb, MapPin, MessagesSquare, Check } from 'lucide-react';

interface CTAProps {
  lang: string;
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
 * STYLE B: "FULL-WIDTH EXECUTIVE CTA"
 * Clean, centered, high-conversion CTA with animated stats.
 */
export function ExecutiveLuxuryCTA({ lang, onAction }: CTAProps) {
  const stats = [
    { value: '98%', label: { en: 'Exam Success', fr: 'Réussite Examens' } },
    { value: '15+', label: { en: 'Corporate Clients', fr: 'Clients Entreprises' } },
    { value: '8', label: { en: 'Training Modules', fr: 'Modules de Formation' } },
    { value: '10+', label: { en: 'Years of Expertise', fr: "Années d'Expertise" } },
  ];

  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-white via-brand-50/30 to-white py-24 sm:py-32">
      {/* Decorative wavy lines */}
      {/* <svg
        className="absolute top-0 right-0 w-[500px] h-[500px] -translate-y-1/4 translate-x-1/4 opacity-20 pointer-events-none"
        viewBox="0 0 400 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M50 100c40-40 120-40 160 0s120 40 160 0"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand-600"
        />
        <path
          d="M50 150c40-40 120-40 160 0s120 40 160 0"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand-600"
        />
        <path
          d="M50 200c40-40 120-40 160 0s120 40 160 0"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand-600"
        />
        <path
          d="M50 250c40-40 120-40 160 0s120 40 160 0"
          stroke="currentColor"
          strokeWidth="2"
          className="text-brand-600"
        />
      </svg> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto"
        > 
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight font-display mb-5">
            {lang === 'en'
              ? 'Ready to Transform Your Team’s Language Skills?'
              : 'Prêt à Transformer les Compétences Linguistiques de Votre Équipe ?'}
          </h3>

          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl mx-auto font-medium">
            {lang === 'en'
              ? 'Book a free placement test or request a custom corporate proposal. Our advisors will reply within 24 hours.'
              : 'Réservez un test de placement gratuit ou demandez une proposition entreprise personnalisée. Nos conseillers répondent sous 24h.'}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAction?.('Executive Corporate Custom Plan')}
              className="bg-brand-600 hover:bg-brand-700 text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-colors duration-300 shadow-lg shadow-brand-900/15 cursor-pointer inline-flex items-center gap-2"
            >
              <span>{lang === 'en' ? 'Book Free Placement' : 'Réserver Mon Test Gratuit'}</span>
              <ArrowRight className="w-4 h-4" />
            </motion.button>
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => onAction?.('Custom Corporate Plan')}
              className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-200 font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-colors duration-300 cursor-pointer"
            >
              {lang === 'en' ? 'Request a Proposal' : 'Demander un Devis'}
            </motion.button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white p-6 sm:p-8 text-center"
              >
                <p className="text-2xl sm:text-3xl font-black text-slate-950 font-display mb-1">{stat.value}</p>
                <p className="text-[10px] sm:text-[11px] font-bold text-slate-500 uppercase tracking-wider">{lang === 'en' ? stat.label.en : stat.label.fr}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

 
/**
 * STYLE C: "THE BENTO LEVEL TESTER" (Institutional schedule selector)
 * Ideal for Pricing/Horaires Page - Clean 2/3 narrative + 1/3 interactive panel.
 */
export function BentoLevelTesterCTA({ lang, onAction }: CTAProps) {
  const [selectedFormat, setSelectedFormat] = useState<'night' | 'weekend' | 'vip'>('night');

  const formats = {
    night: {
      title: { en: 'Night Executive Shift', fr: 'Shift Exécutif du Soir' },
      hours: { en: '18:30 - 20:30 (Tue/Thu/Fri)', fr: '18h30 - 20h30 (Mar/Jeu/Ven)' },
      recommendFor: { en: 'Working professionals in corporate Lomé', fr: 'Cadres et salariés en poste à Lomé' }
    },
    weekend: {
      title: { en: 'Saturday Masterclass', fr: 'Masterclass du Samedi' },
      hours: { en: '08:00 - 13:00 / 14:00 - 17:00', fr: '08h00 - 13h00 / 14h00 - 17h00' },
      recommendFor: { en: 'Those with packed weekday executive schedules', fr: 'Ceux ayant un agenda professionnel chargé' }
    },
    vip: {
      title: { en: 'Private 1-on-1 Cabinet', fr: 'Cabinet Privé Individuel 1-à-1' },
      hours: { en: 'Flexible (7:00 - 21:00 Daily)', fr: 'Flexible (7h00 - 21h00 Tous les jours)' },
      recommendFor: { en: 'Diplomats, Directors & high-speed career growth', fr: 'Diplomates, directeurs et progression ultra-rapide' }
    }
  };

  return (
    <div className="relative overflow-hidden bg-white border border-slate-200 p-8 sm:p-12 text-left text-slate-900">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center relative z-10">

        {/* Left narrative column - 2/3 */}
        <div className="lg:col-span-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-brand-600 text-[10px] font-black tracking-widest uppercase">
              {lang === 'en' ? 'Smart Tuition Match' : 'Orientation et Tarification'}
            </span>
            <span className="w-16 h-0.5 bg-brand-600" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-display tracking-tight leading-tight mb-5">
            {lang === 'en'
              ? 'Find the Schedule and Formula that Fits Your Obligations'
              : 'Trouvez le Créneau et la Formule Adaptés à Vos Obligations'}
          </h2>

          <p className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 max-w-2xl font-medium">
            {lang === 'en'
              ? 'Our academic calendar is built around executive schedules. Select a format to see recommended hours, then confirm your diagnostic session with our admissions team.'
              : 'Notre calendrier académique est construit autour des agendas de cadres. Sélectionnez un format pour voir les horaires recommandés, puis confirmez votre session diagnostique avec notre équipe admissions.'}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onAction?.(`Tuition consultation - Format: ${selectedFormat}`)}
              className="bg-slate-950 hover:bg-slate-900 text-white text-[11px] font-semibold tracking-wide px-6 py-3.5 rounded-lg transition-all duration-300 cursor-pointer flex items-center gap-2"
            >
              <span>{lang === 'en' ? 'Lock This Schedule Choice' : 'Sélectionner ce créneau'}</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
            <button
              onClick={() => {
                const contact = document.getElementById('contact-form-section');
                if (contact) {
                  contact.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
                }
              }}
              className="bg-white border border-slate-200 hover:bg-slate-50 text-slate-700 text-[11px] font-semibold tracking-wide px-6 py-3.5 rounded-lg transition-all cursor-pointer"
            >
              {lang === 'en' ? 'Ask a Question' : 'Poser une question'}
            </button>
          </div>
        </div>

        {/* Right interactive panel - 1/3 */}
        <div className="lg:col-span-4 bg-slate-50 border border-slate-200 rounded-2xl p-6">
          <span className="text-[10px] font-semibold tracking-[0.15em] text-slate-500 uppercase block mb-5">
            {lang === 'en' ? 'Interactive Time Selector' : 'Planificateur interactif'}
          </span>

          <div className="space-y-2.5 mb-6">
            {(Object.keys(formats) as Array<'night' | 'weekend' | 'vip'>).map((key) => (
              <button
                key={key}
                onClick={() => setSelectedFormat(key)}
                className={`w-full text-left px-4 py-3 rounded-lg border transition-all cursor-pointer flex items-center justify-between text-xs font-medium ${
                  selectedFormat === key
                    ? 'bg-slate-900 border-slate-900 text-white'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                }`}
              >
                <span>{formats[key].title[lang]}</span>
                {selectedFormat === key && <Check className="w-3.5 h-3.5 text-white" strokeWidth={2} />}
              </button>
            ))}
          </div>

          <div className="pt-5 border-t border-slate-200 space-y-4">
            <div>
              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest block mb-1">
                {lang === 'en' ? 'Hours' : 'Horaires'}
              </span>
              <p className="text-xs font-medium text-slate-900">
                {formats[selectedFormat].hours[lang]}
              </p>
            </div>
            <div>
              <span className="text-[9px] font-semibold text-slate-400 uppercase tracking-widest block mb-1">
                {lang === 'en' ? 'Recommended for' : 'Recommandé pour'}
              </span>
              <p className="text-xs text-slate-500 leading-relaxed">
                {formats[selectedFormat].recommendFor[lang]}
              </p>
            </div>
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
    <div className="relative overflow-hidden bg-gradient-to-r from-accent-300 to-accent-500 text-brand-950 rounded-[2.5rem] p-8 sm:p-12 lg:p-14 my-16 shadow-2xl text-left">
      {/* Dark dynamic shapes in back */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-900/5 rounded-full blur-2xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-brand-900/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
        
        {/* Main Content text */}
        <div className="lg:col-span-8">
          <div className="inline-flex items-center gap-2 bg-brand-950 text-white text-[10px] font-black tracking-widest px-3.5 py-1.5 rounded-full uppercase mb-5">
            <ShieldCheck className="w-4 h-4 text-accent-400 shrink-0" />
            <span>{lang === 'en' ? '98% PASS RATE GUARANTEE' : 'GARANTIE DE RÉUSSITE DE 98%'}</span>
          </div>

          <h3 className="text-3xl sm:text-4xl font-black text-brand-950 tracking-tight leading-none font-display mb-4">
            {lang === 'en' 
              ? 'Ready to Pass Your Official GED Exam?' 
              : 'Prêt à Valider Votre Examen Officiel GED ?'}
          </h3>

          <p className="text-brand-950/80 text-xs sm:text-sm leading-relaxed mb-6 font-semibold max-w-xl">
            {lang === 'en'
              ? 'Get customized timetables, structured revision bootcamps, and real mock simulations in Lomé. Our certified experts ensure you earn your credential with absolute confidence.'
              : 'Bénéficiez d’horaires adaptés, d’ateliers de révision structurés et de simulations réelles d’examens à Lomé. Nos experts certifiés vous guident vers le succès.'}
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onAction?.('GED Bootcamp Enrollment')}
              className="bg-brand-950 hover:bg-brand-900 text-white font-black text-xs uppercase tracking-widest px-8 py-4.5 rounded-2xl transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:scale-95 cursor-pointer"
            >
              {lang === 'en' ? 'Join the Next Cohort' : 'Rejoindre la Prochaine Cohorte'}
            </button>
            <button
              onClick={() => {
                const form = document.getElementById('contact-form-section');
                if (form) form.scrollIntoView({ behavior: 'smooth' });
              }}
              className="bg-brand-950/10 hover:bg-brand-950/20 text-brand-950 border border-brand-950/20 font-black text-xs uppercase tracking-widest px-6 py-4.5 rounded-2xl transition-all active:scale-95 cursor-pointer"
            >
              {lang === 'en' ? 'Get Syllabus PDF' : 'Télécharger le Syllabus PDF'}
            </button>
          </div>
        </div>

        {/* Side Mini HUD */}
        <div className="lg:col-span-4 bg-brand-950 text-white rounded-3xl p-6 shadow-xl border border-brand-900/40 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-24 h-24 bg-brand-900/20 rounded-full blur-xl pointer-events-none"></div>
          
          <span className="text-3xl sm:text-4xl font-black text-accent-400 font-display block mb-1">90 DAYS</span>
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
