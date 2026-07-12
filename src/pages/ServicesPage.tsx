import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  ArrowRight,
  ArrowUpRight,
  Briefcase,
  GraduationCap,
  Award,
  Crown,
  Sun,
  FileText,
  Users,
  Globe,
  CheckCircle2,
  ChevronLeft,
  ChevronRight,
  Target,
  Clock,
  Phone,
  Calendar,
} from 'lucide-react';
import { TRAINING_MODULES } from '../data';

interface ServicesPageProps {
  currentLang: string;
  onRegisterRedirect: (moduleName?: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  GraduationCap,
  Award,
  Crown,
  Sun,
  FileText,
  Users,
  Globe,
};

const CATEGORIES = {
  all: { en: 'All Programs', fr: 'Tous nos programmes' },
  english: { en: 'English Programs', fr: 'Programmes Anglais' },
  services: { en: 'Specialties & Options', fr: 'Spécificités & Options' }
};

export default function ServicesPage({
  currentLang,
  onRegisterRedirect,
}: ServicesPageProps) {
  const lang = currentLang === 'en' ? 'en' : 'fr';

  const [selectedCategory, setSelectedCategory] = useState<'all' | 'english' | 'services'>('all');
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 15);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 15);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const cardWidth = clientWidth < 640 ? clientWidth * 0.85 : 380;
      const scrollTo = direction === 'left' ? scrollLeft - cardWidth : scrollLeft + cardWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => checkScroll(), 150);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredModules = TRAINING_MODULES.filter((module) => {
    if (selectedCategory === 'all') return true;
    const isEnglish = ['general-professional', 'academic', 'exams', 'vip', 'english-club'].includes(module.id);
    if (selectedCategory === 'english') return isEnglish;
    return !isEnglish;
  });

  const handleSelect = (name: string) => onRegisterRedirect(name);

  const flagshipServices = [
    {
      id: 'corporate',
      badge: { en: 'CORPORATE', fr: 'ENTREPRISES' },
      title: { en: 'Business English', fr: 'Anglais des Affaires' },
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
      desc: {
        en: 'Tailored curricula for teams in banking, logistics, ministries, and international organizations.',
        fr: 'Des cursus adaptés aux équipes de la banque, la logistique, les ministères et les organisations internationales.'
      },
    },
    {
      id: 'translation',
      badge: { en: 'TRANSLATION', fr: 'TRADUCTION' },
      title: { en: 'Sworn Translation', fr: 'Traduction Agréée' },
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop',
      desc: {
        en: 'Certified legal, administrative, and corporate document translation accepted across the sub-region.',
        fr: 'Traduction certifiée de documents légaux, administratifs et commerciaux reconnue dans la sous-région.'
      },
    },
    {
      id: 'exams',
      badge: { en: 'EXAMS', fr: 'EXAMENS' },
      title: { en: 'Official Exam Prep', fr: 'Préparation aux Examens' },
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop',
      desc: {
        en: 'Structured bootcamps for TOEFL, IELTS, TOEIC, TEF, and TCF under official test conditions.',
        fr: 'Bootcamps structurés pour le TOEFL, IELTS, TOEIC, TEF et TCF en conditions d’examen officielles.'
      },
    },
    {
      id: 'oratory',
      badge: { en: 'EXECUTIVE', fr: 'EXÉCUTIF' },
      title: { en: 'Public Speaking & Leadership', fr: 'Art Oratoire & Leadership' },
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
      desc: {
        en: 'Executive coaching for speeches, board meetings, media appearances, and high-stakes negotiations.',
        fr: 'Coaching exécutif pour discours, conseils d’administration, médias et négociations à fort enjeu.'
      },
    },
  ];

  const valueFeatures = [
    { icon: Target, en: 'Personalized Engagement', fr: 'Accompagnement Personnalisé' },
    { icon: Users, en: 'Seamless Integration', fr: 'Intégration Transparente' },
    { icon: Clock, en: 'Smart Data Analytics', fr: 'Analyse de Progression' },
    { icon: Award, en: 'Certified Expert Coaching', fr: 'Coaching par Experts Certifiés' },
  ];

  const valueStats = [
    { value: '200+', en: 'Professionals', fr: 'Professionnels' },
    { value: '20K+', en: 'Training Hours', fr: "Heures d'Entraînement" },
    { value: '10+', en: 'Sectors', fr: 'Secteurs' },
  ];

  return (
    <main className="relative w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative w-full pt-32 pb-16 md:pt-40 md:pb-24 overflow-hidden bg-gradient-to-b from-white via-slate-50/50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.05] text-slate-900 font-display mb-6">
              {lang === 'en' ? (
                <>Specialized Language <br /> <span className="text-brand-700">Training & Services</span></>
              ) : (
                <>Formations Linguistiques <br /> <span className="text-brand-700">Spécialisées</span></>
              )}
            </h1>

            <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-medium mb-9 max-w-2xl mx-auto">
              {lang === 'en'
                ? 'Custom-built curricula for corporate groups, executives, and international organizations. Elevate operational communication, secure certified translations, and prepare teams for global performance.'
                : 'Des cursus sur mesure pour groupes d’entreprise, cadres et organisations internationales. Élevez la communication opérationnelle, sécurisez vos traductions certifiées et préparez vos équipes à la performance mondiale.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => {
                  const el = document.getElementById('detailed-offers');
                  el?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-brand-700 hover:bg-brand-800 text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-colors duration-300 shadow-lg shadow-brand-900/15 cursor-pointer inline-flex items-center gap-2"
              >
                <span>{lang === 'en' ? 'Explore Programs' : 'Découvrir nos programmes'}</span>
                <ArrowRight className="w-4 h-4" />
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onRegisterRedirect()}
                className="bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-colors duration-300 cursor-pointer inline-flex items-center gap-2"
              >
                <span>{lang === 'en' ? 'Request a Quote' : 'Demander un devis'}</span>
                <ArrowUpRight className="w-4 h-4" />
              </motion.button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-slate-200 rounded-2xl overflow-hidden border border-slate-200 max-w-3xl mx-auto">
              {[
                { value: '98%', label: { en: 'Satisfaction', fr: 'Satisfaction' } },
                { value: '15+', label: { en: 'Trainers', fr: 'Formateurs' } },
                { value: '8', label: { en: 'Programs', fr: 'Programmes' } },
                { value: '10+', label: { en: 'Years', fr: 'Années' } },
              ].map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 + idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
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

      {/* 2. FLAGSHIP SECTIONS CAROUSEL */}
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center opacity-5 mix-blend-luminosity pointer-events-none"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/95 to-slate-900/80 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-600/5 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-display mb-4">
              {lang === 'en' ? (
                <>What We Train <span className="text-brand-400">& Translate</span></>
              ) : (
                <>Ce Que Nous Formons <span className="text-brand-400">& Traduisons</span></>
              )}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed">
              {lang === 'en'
                ? 'Four pillars of institutional language capability designed for executives and organizations.'
                : 'Quatre piliers de la maîtrise linguistique institutionnelle conçus pour cadres et organisations.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {flagshipServices.map((svc, idx) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="group relative bg-slate-800/60 border border-slate-700/80 rounded-3xl overflow-hidden hover:-translate-y-1.5 transition-all duration-300 hover:border-brand-500/30 hover:shadow-2xl hover:shadow-brand-900/20"
              >
                <div className="h-44 overflow-hidden relative">
                  <img
                    src={svc.image}
                    alt={lang === 'en' ? svc.title.en : svc.title.fr}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-700"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
                </div>
                <div className="p-6">
                  <span className="inline-block text-[9px] font-black tracking-widest px-3 py-1.5 rounded-full bg-slate-700/50 text-slate-300 border border-slate-600/50 uppercase mb-4">
                    {lang === 'en' ? svc.badge.en : svc.badge.fr}
                  </span>
                  <h3 className="text-lg font-extrabold font-display text-white mb-2">
                    {lang === 'en' ? svc.title.en : svc.title.fr}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-400 font-medium mb-5">
                    {lang === 'en' ? svc.desc.en : svc.desc.fr}
                  </p>
                  <button
                    onClick={() => handleSelect(lang === 'en' ? svc.title.en : svc.title.fr)}
                    className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-brand-400 hover:text-brand-300 transition-colors cursor-pointer"
                  >
                    {lang === 'en' ? 'Learn more' : 'En savoir plus'}
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. DETAILED OFFERS GRID */}
      <section id="detailed-offers" className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center max-w-2xl mx-auto mb-10"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-display text-slate-950 mb-4">
              {lang === 'en' ? (
                <>Explore Our <span className="text-brand-700">Programs</span></>
              ) : (
                <>Explorez Toutes Nos <span className="text-brand-700">Formations</span></>
              )}
            </h2>
            <p className="text-slate-500 text-sm sm:text-base font-medium leading-relaxed">
              {lang === 'en'
                ? 'Architected training modules for every career stage, from foundational English to executive translation services.'
                : 'Des modules de formation architecturés pour chaque étape de carrière, de l’anglais fondamental aux services de traduction exécutive.'}
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-12 border-b border-slate-100 pb-8">
            {(Object.keys(CATEGORIES) as Array<'all' | 'english' | 'services'>).map((catKey) => {
              const isSelected = selectedCategory === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => setSelectedCategory(catKey)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                    isSelected ? 'text-white' : 'text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/60'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCatalogFilter"
                      className="absolute inset-0 bg-brand-600 rounded-full -z-10 shadow-md shadow-brand-600/20"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{lang === 'en' ? CATEGORIES[catKey].en : CATEGORIES[catKey].fr}</span>
                </button>
              );
            })}
          </div>

          <div className="flex items-center justify-end gap-3 mb-6">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                canScrollLeft
                  ? 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50 shadow-sm active:scale-95'
                  : 'border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed'
              }`}
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                canScrollRight
                  ? 'border-slate-200 bg-white text-slate-800 hover:bg-slate-50 shadow-sm active:scale-95'
                  : 'border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed'
              }`}
              aria-label="Next Slide"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="relative">
            <div className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}></div>
            <div className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}></div>

            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 pb-10 pt-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none"
            >
              <AnimatePresence mode="popLayout">
                {filteredModules.map((module, idx) => {
                  const IconComponent = iconMap[module.iconName] || Briefcase;
                  const isProminent = module.isHighlighted;
                  return (
                    <motion.div
                      key={module.id}
                      layout="position"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ duration: 0.4, delay: idx * 0.05 }}
                      className={`group snap-start shrink-0 w-[300px] sm:w-[360px] rounded-3xl p-7 flex flex-col justify-between border transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                        isProminent
                          ? 'bg-slate-900 text-white border-slate-800'
                          : 'bg-white text-slate-950 border-slate-200 hover:border-brand-200'
                      }`}
                    >
                      <div>
                        <div className="flex justify-between items-start mb-6">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 ${
                            isProminent
                              ? 'bg-brand-500/10 border border-brand-500/20 text-brand-400'
                              : 'bg-slate-50 border border-slate-100 text-slate-700 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500'
                          }`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                          {isProminent && (
                            <span className="bg-brand-600 text-white text-[9px] font-black tracking-widest px-3 py-1.5 rounded-full uppercase">
                              {lang === 'en' ? 'RECOMMENDED' : 'RECOMMANDÉ'}
                            </span>
                          )}
                        </div>

                        <h3 className={`text-lg font-black font-display tracking-tight leading-snug mb-3 ${isProminent ? 'text-white' : 'text-slate-900'}`}>
                          {lang === 'en' ? module.title : (module.frenchTitle || module.title)}
                        </h3>

                        <p className={`text-xs leading-relaxed font-medium mb-6 ${isProminent ? 'text-slate-400' : 'text-slate-500'}`}>
                          {lang === 'en' ? module.description : (module.frenchDescription || module.description)}
                        </p>

                        <ul className={`space-y-2.5 border-t pt-5 mb-6 ${isProminent ? 'border-slate-800/80' : 'border-slate-100'}`}>
                          {((lang === 'en' ? module.features : module.featuresFrench) || module.features).map((feat, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-2.5">
                              <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                                isProminent ? 'bg-brand-500/20 text-brand-400 border-brand-500/30' : 'bg-brand-50 text-brand-600 border-brand-100'
                              }`}>
                                <CheckCircle2 className="w-2.5 h-2.5" />
                              </div>
                              <span className={`text-[11px] font-bold leading-tight ${isProminent ? 'text-slate-200' : 'text-slate-600'}`}>{feat}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <button
                        onClick={() => handleSelect(lang === 'en' ? module.title : (module.frenchTitle || module.title))}
                        className={`w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 group/btn active:scale-95 border ${
                          isProminent
                            ? 'bg-brand-600 text-white border-brand-600 hover:bg-brand-700'
                            : 'bg-slate-50 text-slate-700 border-slate-100/80 hover:bg-brand-600 hover:text-white hover:border-brand-600'
                        }`}
                      >
                        <span>{lang === 'en' ? 'Learn More' : 'En savoir plus'}</span>
                        <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </motion.div>
                  );
                })}
              </AnimatePresence>
            </div>
          </div>

          <div className="text-center mt-2 text-[10px] text-slate-400 font-bold tracking-widest uppercase flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-pulse"></span>
            {lang === 'en' ? 'Swipe to browse all programs' : 'Faites glisser pour tout voir'}
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-pulse"></span>
          </div>
        </div>
      </section>

      {/* 4. CUSTOMER-CENTRIC SOLUTIONS */}
      <section className="py-24 bg-slate-50/50 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-[2rem] overflow-hidden shadow-2xl aspect-[4/3] bg-slate-200 border border-slate-100">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                  alt="Corporate coaching"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply"></div>
              </div>

              
            </div>

            <div className="lg:col-span-7">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight font-display mb-5 leading-tight">
                  {lang === 'en'
                    ? 'Customer-Driven Solutions with TEN KEY'
                    : 'Des Solutions Axées Client avec TEN KEY'}
                </h2>
                <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium mb-8 max-w-2xl">
                  {lang === 'en'
                    ? 'We align every program with your operational rhythms. Custom pacing, elite instructional materials, and certified trainers ensure measurable outcomes for your organization.'
                    : 'Nous alignons chaque programme avec vos rythmes opérationnels. Rythmes personnalisés, supports pédagogiques d’excellence et formateurs certifiés garantissent des résultats mesurables pour votre organisation.'}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                  {valueFeatures.map((feat, idx) => {
                    const IconComponent = feat.icon;
                    return (
                      <div key={idx} className="flex items-start gap-3 bg-white rounded-2xl p-5 border border-slate-100">
                        <div className="w-9 h-9 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <h3 className="text-sm font-extrabold font-display text-slate-900 mb-1">
                            {lang === 'en' ? feat.en : feat.fr}
                          </h3>
                          <p className="text-xs text-slate-500 font-medium leading-relaxed">
                            {lang === 'en' ? 'Integrated into every program for measurable outcomes.' : 'Intégré à chaque programme pour des résultats mesurables.'}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-200">
                  {valueStats.map((stat, idx) => (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: idx * 0.1 }}
                    >
                      <div className="text-3xl sm:text-4xl font-black text-slate-950 font-display mb-1">{stat.value}</div>
                      <div className="text-xs font-bold text-slate-500">{lang === 'en' ? stat.en : stat.fr}</div>
                    </motion.div>
                  ))}
                </div> */}
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. B2B CONVERSION SECTION */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[700px] h-[700px] bg-brand-700/10 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-slate-800/40 rounded-full blur-3xl pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-display mb-5">
              {lang === 'en'
                ? 'Ready to Transform Your Team’s Language Skills?'
                : 'Prêt à Transformer les Compétences de Votre Équipe ?'}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base font-medium leading-relaxed mb-10 max-w-2xl mx-auto">
              {lang === 'en'
                ? 'Book a free placement test for your group or request a custom corporate proposal tailored to your sector and objectives.'
                : 'Réservez un test de placement gratuit pour votre groupe ou demandez une proposition d’entreprise personnalisée selon votre secteur et vos objectifs.'}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onRegisterRedirect()}
                className="bg-brand-600 hover:bg-brand-700 text-white font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-colors duration-300 shadow-lg shadow-brand-900/20 cursor-pointer inline-flex items-center gap-2"
              >
                <Calendar className="w-4 h-4" />
                <span>{lang === 'en' ? 'Schedule a Test' : 'Planifier un test'}</span>
              </motion.button>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => onRegisterRedirect()}
                className="bg-transparent hover:bg-white/5 text-white border border-slate-600 hover:border-slate-500 font-black text-xs uppercase tracking-widest px-8 py-4 rounded-xl transition-colors duration-300 cursor-pointer inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                <span>{lang === 'en' ? 'Request Consultation' : 'Demander une consultation'}</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
