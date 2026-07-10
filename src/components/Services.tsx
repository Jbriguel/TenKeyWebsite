import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, Award, Crown, Sun, FileText, Users, Globe, CheckCircle2, ChevronLeft, ChevronRight, Phone, Send, Mic, Sparkles } from 'lucide-react';
import { TRAINING_MODULES } from '../data';

interface ServicesProps {
  lang: 'en' | 'fr';
  onSelectService: (serviceName: string) => void;
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
  all: { en: 'All Programs', fr: 'Tous les Programmes' },
  english: { en: 'English Excellence', fr: "Programmes d'Anglais" },
  services: { en: 'Other Languages & Services', fr: 'Spécialités & Services' }
};

const moduleImages: Record<string, string> = {
  'general-professional': '/src/assets/images/business_english_session_1783710706860.jpg',
  'academic': 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=600&auto=format&fit=crop',
  'exams': '/src/assets/images/exam_bootcamp_success_1783710739078.jpg',
  'vip': '/src/assets/images/vip_private_cabinet_1783710723457.jpg',
  'vacances': 'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?q=80&w=600&auto=format&fit=crop',
  'translation': 'https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=600&auto=format&fit=crop',
  'english-club': 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=600&auto=format&fit=crop',
  'french-classes': 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?q=80&w=600&auto=format&fit=crop',
};

export default function Services({ lang, onSelectService }: ServicesProps) {
  // State for the custom sliding NDC "Process" carousel
  const [activeSlide, setActiveSlide] = useState(1); // Default to VIP Cabinet (index 1)

  // State & refs for the beautiful interactive catalog carousel
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'english' | 'services'>('all');
  const scrollRef = React.useRef<HTMLDivElement>(null);
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
      // Scroll by approximately one card width plus gap (e.g. 360px)
      const cardWidth = clientWidth < 640 ? clientWidth * 0.85 : 380;
      const scrollTo = direction === 'left' ? scrollLeft - cardWidth : scrollLeft + cardWidth;
      scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
    }
  };

  React.useEffect(() => {
    const timer = setTimeout(() => {
      checkScroll();
    }, 150);
    return () => clearTimeout(timer);
  }, [selectedCategory]);

  const filteredModules = TRAINING_MODULES.filter((module) => {
    if (selectedCategory === 'all') return true;
    const isEnglish = ['general-professional', 'academic', 'exams', 'vip', 'english-club'].includes(module.id);
    if (selectedCategory === 'english') return isEnglish;
    return !isEnglish; // 'services' category
  });

  const carouselItems = [
    {
      id: 'general',
      num: '01',
      title: { en: 'General & Professional Courses', fr: 'Cours Général & Professionnel' },
      tag: { en: 'Daily Immersion', fr: 'Immersion Quotidienne' },
      image: '/src/assets/images/business_english_session_1783710706860.jpg',
      description: {
        en: 'Designed to elevate your vocabulary and grammar to an executive business level. Focuses heavily on presentations, email syntax, negotiations, and public speaking.',
        fr: 'Conçu pour élever votre vocabulaire et votre aisance à un niveau exécutif d’affaires. Focus intense sur les présentations orales, la rédaction d’e-mails et les négociations.'
      },
      points: {
        en: [
          'Differentiated teaching adapted to your profession',
          'Intensive communication labs and real debates',
          'Flexible schedule options (midday or night slots)'
        ],
        fr: [
          'Pédagogie différenciée adaptée à votre secteur',
          'Laboratoire de conversation et débats réels',
          'Créneaux horaires flexibles (midi ou cours du soir)'
        ]
      }
    },
    {
      id: 'vip',
      num: '02',
      title: { en: 'VIP Individual Cabinet', fr: 'Cabinet Individuel VIP' },
      tag: { en: '100% Tailored | Private', fr: '100% Sur-Mesure | Privé' },
      image: '/src/assets/images/vip_private_cabinet_1783710723457.jpg',
      description: {
        en: 'A private study space with a highly qualified senior coach dedicated 100% to your calendar and speed. Study at our premium center or right from your office.',
        fr: 'Un espace d’apprentissage haut de gamme avec un formateur d’élite dédié entièrement à votre agenda et vos objectifs. Progressez à votre propre rythme.'
      },
      points: {
        en: [
          'Total scheduling flexibility from 7:00 to 21:00',
          'Strict professional confidentiality and focus',
          'Progress at your own pace with native mentors'
        ],
        fr: [
          'Flexibilité horaire totale de 7h 00 à 21h 00',
          'Confidentialité professionnelle et focus absolu',
          'Progression accélérée avec un mentor natif dédié'
        ]
      }
    },
    {
      id: 'exams',
      num: '03',
      title: { en: 'Official Exam Preparation', fr: 'Préparation Examens Officiels' },
      tag: { en: 'TOEFL, IELTS, TEF / TCF', fr: 'TOEFL, IELTS, TEF / TCF' },
      image: '/src/assets/images/exam_bootcamp_success_1783710739078.jpg',
      description: {
        en: 'Rigorous score-boosting bootcamps with real-world diagnostic testing, certified exam patterns, and targeted strategies to guarantee university admissions.',
        fr: 'Entraînements intensifs avec examens blancs réels, méthodologies d’examens certifiées et astuces éprouvées pour valider vos bourses et admissions.'
      },
      points: {
        en: [
          'Simulated testing under real clock pressure',
          'Proven score-boosting strategies and patterns',
          'Comprehensive grammar and listening boosters'
        ],
        fr: [
          'Examens blancs en conditions réelles chrono',
          'Méthodologies d’optimisation de score éprouvées',
          'Renforcement intensif de grammaire et d’écoute'
        ]
      }
    }
  ];

  const handleNext = () => {
    setActiveSlide((prev) => (prev === carouselItems.length - 1 ? 0 : prev + 1));
  };

  const handlePrev = () => {
    setActiveSlide((prev) => (prev === 0 ? carouselItems.length - 1 : prev - 1));
  };

  return (
    <div>
      {/* 
        1. THE SLIDING PROCESS SECTION (Exactly inspired by NDC Energie screenshot dark theme)
      */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Absolute Left Label Margin */}
        <div className="absolute left-6 top-32 text-[110px] font-black text-slate-900/60 select-none tracking-widest hidden xl:block origin-left -rotate-90">
          PROCESS
        </div>

        {/* Floating gradient glow behind active card */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent-600/10 rounded-full filter blur-3xl pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="text-left max-w-2xl">
              <span className="text-accent-500 font-black text-xs uppercase tracking-widest bg-accent-500/10 px-3.5 py-1.5 rounded-full border border-accent-500/20 inline-block mb-4">
                {lang === 'en' ? 'OUR ACCREDITED PROGRAMS' : 'NOS SÉLECTIONS'}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight leading-tight font-display text-white">
                {lang === 'en' 
                  ? 'Solutions Designed for Professional Operations' 
                  : 'Des Programmes Conçus pour la Réussite Professionnelle'}
              </h2>
            </div>

            {/* Slider Navigation Controls (Matches top right of NDC screenshot) */}
            <div className="flex gap-3 self-start md:self-end">
              <button
                onClick={handlePrev}
                className="w-12 h-12 rounded-full bg-slate-900 hover:bg-accent-500 border border-slate-800 hover:border-accent-500 transition-all flex items-center justify-center text-white cursor-pointer"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-12 h-12 rounded-full bg-slate-900 hover:bg-accent-500 border border-slate-800 hover:border-accent-500 transition-all flex items-center justify-center text-white cursor-pointer"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Interactive Sliding Cards Container with Luxurious 2-Column Layout */}
          <div className="relative min-h-[500px] flex items-center justify-center">
            <AnimatePresence mode="wait">
              {carouselItems.map((item, idx) => {
                if (idx !== activeSlide) return null;

                return (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, scale: 0.96, y: 20 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.96, y: -20 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}
                    className="w-full max-w-5xl bg-gradient-to-br from-slate-900 via-slate-900 to-slate-950 border border-slate-800 rounded-[2.5rem] p-6 sm:p-10 lg:p-12 text-left relative overflow-hidden shadow-2xl"
                  >
                    {/* Decorative abstract elements */}
                    <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none"></div>
                    <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-slate-900 rounded-full blur-3xl pointer-events-none opacity-20"></div>

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
                      
                      {/* Left Column: Text, features and CTAs */}
                      <div className="lg:col-span-7 flex flex-col justify-between h-full">
                        <div>
                          {/* Top Tag & Indicator */}
                          <div className="flex items-center gap-2 text-accent-400 font-extrabold text-xs uppercase tracking-widest mb-4">
                            <span className="w-2 h-2 rounded-full bg-accent-500 animate-pulse"></span>
                            <span>{lang === 'en' ? item.tag.en : item.tag.fr}</span>
                          </div>

                          <h3 className="text-2xl sm:text-3xl lg:text-[2.15rem] font-black text-white mb-5 font-display leading-tight">
                            {lang === 'en' ? item.title.en : item.title.fr}
                          </h3>

                          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6 font-medium">
                            {lang === 'en' ? item.description.en : item.description.fr}
                          </p>

                          {/* Features checklist with premium bullet styling */}
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3.5 border-t border-slate-800/80 pt-6 mb-8">
                            {(lang === 'en' ? item.points.en : item.points.fr).map((pt, pIdx) => (
                              <div key={pIdx} className="flex items-start gap-3">
                                <div className="w-5 h-5 rounded-full bg-accent-500/10 text-accent-400 flex items-center justify-center shrink-0 mt-0.5 border border-accent-500/20">
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                </div>
                                <span className="text-xs font-bold text-slate-200 leading-snug">
                                  {pt}
                                </span>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-wrap gap-4">
                          <button
                            onClick={() => onSelectService(lang === 'en' ? item.title.en : item.title.fr)}
                            className="bg-accent-500 hover:bg-accent-600 text-white font-black text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition-all shadow-md shadow-accent-950/20 active:scale-95 cursor-pointer"
                          >
                            {lang === 'en' ? 'Register Now →' : 'S’inscrire Maintenant →'}
                          </button>
                          <button
                            onClick={() => {
                              const element = document.getElementById('contact-form-section');
                              if (element) element.scrollIntoView({ behavior: 'smooth' });
                            }}
                            className="bg-white/5 hover:bg-white/10 text-white border border-white/10 font-black text-xs uppercase tracking-widest px-6 py-4 rounded-xl transition-all active:scale-95 cursor-pointer"
                          >
                            {lang === 'en' ? 'Request a quote' : 'Demander un devis / Audit'}
                          </button>
                        </div>
                      </div>

                      {/* Right Column: Stunning interactive / dynamic mockups representing the live service experience */}
                      <div className="lg:col-span-5 w-full flex items-center justify-center">
                        <motion.div
                          initial={{ opacity: 0, x: 20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.1 }}
                          className="w-full"
                        >
                          {item.id === 'general' && (
                            <div className="w-full bg-slate-950/80 border border-slate-800 rounded-3xl p-6 relative overflow-hidden shadow-2xl hover:border-accent-500/30 transition-all duration-300">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl pointer-events-none"></div>
                              
                              {/* New Rich Content Visual Photograph banner */}
                              <div className="relative h-44 mb-5 overflow-hidden rounded-2xl border border-slate-800/80 group/img">
                                <img 
                                  src={item.image} 
                                  alt={lang === 'en' ? item.title.en : item.title.fr} 
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                                <div className="absolute bottom-3 left-3 bg-accent-500 text-white text-[9px] font-black tracking-widest px-2.5 py-1 rounded uppercase shadow-sm">
                                  {lang === 'en' ? 'Live Workshop Session' : 'Atelier de Discussion Actif'}
                                </div>
                              </div>

                              {/* Live Voice Room header */}
                              <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-2.5">
                                  <div className="w-3.5 h-3.5 rounded-full bg-green-500 flex items-center justify-center">
                                    <div className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></div>
                                  </div>
                                  <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">
                                    {lang === 'en' ? 'LIVE DISCUSSION LAB' : 'LAB CONVERSATION LIVE'}
                                  </span>
                                </div>
                                <div className="bg-accent-500/10 border border-accent-500/20 rounded-lg px-2.5 py-1 text-[9px] font-extrabold text-accent-400">
                                  C1 ADVANCED
                                </div>
                              </div>

                              {/* Simulated Interactive Dialogue */}
                              <div className="space-y-4 mb-6">
                                <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-3.5 text-left">
                                  <div className="flex items-center gap-2 mb-1.5">
                                    <div className="w-5 h-5 rounded-full bg-slate-800 text-slate-300 flex items-center justify-center text-[9px] font-bold">U</div>
                                    <span className="text-[10px] text-slate-400 font-extrabold">You (Student)</span>
                                  </div>
                                  <p className="text-xs text-slate-200 font-medium leading-relaxed">
                                    "We must <span className="text-accent-400 font-black line-through bg-accent-500/5 px-1 py-0.5 rounded">start</span> the project very fast to stay ahead."
                                  </p>
                                </div>

                                <div className="bg-accent-500/5 border border-accent-500/10 rounded-2xl p-3.5 text-left relative">
                                  <div className="absolute -top-2 right-3 bg-accent-500 text-white text-[8px] font-black tracking-widest px-1.5 py-0.5 rounded uppercase">
                                    {lang === 'en' ? 'BETTER SYNTAX' : 'MEILLEURE SYNTAXE'}
                                  </div>
                                  <div className="flex items-center gap-2 mb-1.5">
                                    <div className="w-5 h-5 rounded-full bg-accent-500 text-white flex items-center justify-center text-[9px] font-bold">
                                      <Mic className="w-3 h-3" />
                                    </div>
                                    <span className="text-[10px] text-accent-400 font-extrabold">Senior Executive Coach</span>
                                  </div>
                                  <p className="text-xs text-slate-100 font-semibold italic leading-relaxed">
                                    "We must <span className="text-accent-400 font-black underline decoration-2 underline-offset-2 bg-accent-500/10 px-1 py-0.5 rounded">expedite</span> the project to secure our competitive edge."
                                  </p>
                                </div>
                              </div>

                              {/* Fluency Metrics HUD */}
                              <div className="grid grid-cols-2 gap-3 bg-slate-900/40 p-3 rounded-2xl border border-slate-800/60">
                                <div className="text-left">
                                  <div className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider mb-1">
                                    {lang === 'en' ? 'Vocabulary range' : 'Étendue Vocabulaire'}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="h-1.5 flex-1 bg-slate-800 rounded-full overflow-hidden">
                                      <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: '88%' }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="h-full bg-accent-500" 
                                      />
                                    </div>
                                    <span className="text-[10px] font-black text-slate-200">88%</span>
                                  </div>
                                </div>
                                <div className="text-left">
                                  <div className="text-[9px] text-slate-400 font-extrabold uppercase tracking-wider mb-1">
                                    {lang === 'en' ? 'Grammar accuracy' : 'Précision Grammaire'}
                                  </div>
                                  <div className="flex items-center gap-2">
                                    <div className="h-1.5 flex-1 bg-slate-800 rounded-full overflow-hidden">
                                      <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: '92%' }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="h-full bg-accent-500" 
                                      />
                                    </div>
                                    <span className="text-[10px] font-black text-slate-200">92%</span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {item.id === 'vip' && (
                            <div className="w-full bg-slate-950/80 border border-slate-800 rounded-3xl p-6 relative overflow-hidden shadow-2xl hover:border-accent-500/30 transition-all duration-300">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl pointer-events-none"></div>
                              
                              {/* New Rich Content Visual Photograph banner */}
                              <div className="relative h-44 mb-5 overflow-hidden rounded-2xl border border-slate-800/80 group/img">
                                <img 
                                  src={item.image} 
                                  alt={lang === 'en' ? item.title.en : item.title.fr} 
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                                <div className="absolute bottom-3 left-3 bg-accent-500 text-white text-[9px] font-black tracking-widest px-2.5 py-1 rounded uppercase shadow-sm">
                                  {lang === 'en' ? 'Exclusive Private Cabinet' : 'Cabinet VIP Individuel'}
                                </div>
                              </div>

                              {/* Executive Header */}
                              <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-2">
                                  <Crown className="w-4 h-4 text-accent-400 animate-pulse" />
                                  <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">
                                    {lang === 'en' ? 'VIP PORTAL ACTIVE' : 'CABINET VIP ACTIF'}
                                  </span>
                                </div>
                                <span className="bg-accent-500 text-white text-[8px] font-black tracking-widest px-2.5 py-1 rounded">
                                  1-ON-1 PRIVATE
                                </span>
                              </div>

                              {/* Dedicated Coach card */}
                              <div className="bg-slate-900/90 border border-slate-800/80 rounded-2xl p-4 mb-4 flex items-center justify-between gap-4">
                                <div className="flex items-center gap-3">
                                  <div className="relative">
                                    <div className="w-12 h-12 rounded-xl bg-accent-500/20 border border-accent-500/30 flex items-center justify-center text-accent-400 font-bold text-sm">
                                      MS
                                    </div>
                                    <div className="absolute -bottom-1 -right-1 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-slate-900 animate-pulse"></div>
                                  </div>
                                  <div className="text-left">
                                    <h4 className="text-xs font-black text-white">Mentor Sarah</h4>
                                    <p className="text-[10px] text-slate-400 font-semibold">Cambridge Alumna • 12 yrs exp</p>
                                  </div>
                                </div>
                                <div className="text-right">
                                  <span className="text-[9px] text-slate-400 font-bold block uppercase">{lang === 'en' ? 'Today' : 'Aujourd’hui'}</span>
                                  <span className="text-[10px] font-extrabold text-accent-400 block bg-accent-500/10 px-2 py-0.5 rounded border border-accent-500/20 mt-1">15:30 GMT</span>
                                </div>
                              </div>

                              {/* Customizable Curriculum Tracker */}
                              <div className="bg-slate-900/50 border border-slate-800/60 rounded-2xl p-4 text-left">
                                <h5 className="text-[10px] text-slate-400 font-black tracking-wider uppercase mb-3">
                                  {lang === 'en' ? 'Tailored Strategic Tracks' : 'Parcours Stratégiques Personnalisés'}
                                </h5>
                                <div className="space-y-3">
                                  <div className="flex items-center justify-between border-b border-slate-800/40 pb-2">
                                    <span className="text-xs font-bold text-slate-200">1. Executive Pitching & Speaking</span>
                                    <span className="text-[10px] font-black text-green-400 bg-green-500/10 px-1.5 py-0.5 rounded uppercase">
                                      {lang === 'en' ? 'Mastered' : 'Acquis'}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between border-b border-slate-800/40 pb-2">
                                    <span className="text-xs font-bold text-slate-200">2. Diplomatic & Business Negotiations</span>
                                    <span className="text-[10px] font-black text-accent-400 bg-accent-500/10 px-1.5 py-0.5 rounded uppercase animate-pulse">
                                      {lang === 'en' ? 'In Progress' : 'En Cours'}
                                    </span>
                                  </div>
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-bold text-slate-400">3. Cross-Border Mergers & Syntax</span>
                                    <span className="text-[10px] font-bold text-slate-500 uppercase">
                                      {lang === 'en' ? 'Queue' : 'Suivant'}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}

                          {item.id === 'exams' && (
                            <div className="w-full bg-slate-950/80 border border-slate-800 rounded-3xl p-6 relative overflow-hidden shadow-2xl hover:border-accent-500/30 transition-all duration-300">
                              <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl pointer-events-none"></div>
                              
                              {/* New Rich Content Visual Photograph banner */}
                              <div className="relative h-44 mb-5 overflow-hidden rounded-2xl border border-slate-800/80 group/img">
                                <img 
                                  src={item.image} 
                                  alt={lang === 'en' ? item.title.en : item.title.fr} 
                                  className="w-full h-full object-cover transition-transform duration-700 group-hover/img:scale-105"
                                  referrerPolicy="no-referrer"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
                                <div className="absolute bottom-3 left-3 bg-accent-500 text-white text-[9px] font-black tracking-widest px-2.5 py-1 rounded uppercase shadow-sm">
                                  {lang === 'en' ? 'Diagnostic & Prep Bootcamp' : 'Entraînement Chronométré'}
                                </div>
                              </div>

                              {/* Exam Score Tracker HUD */}
                              <div className="flex items-center justify-between mb-5">
                                <div className="flex items-center gap-2">
                                  <Award className="w-4 h-4 text-accent-400" />
                                  <span className="text-[10px] font-black tracking-widest text-slate-300 uppercase">
                                    {lang === 'en' ? 'DIAGNOSTIC BOOSTER HUD' : 'BOOSTER DE SCORE BOOTCAMP'}
                                  </span>
                                </div>
                                <span className="bg-red-500/10 border border-red-500/20 text-red-400 text-[8px] font-black tracking-widest px-2 py-1 rounded">
                                  OFFICIAL CERTIFICATION
                                </span>
                              </div>

                              {/* Big Radial Progress Score Panel */}
                              <div className="grid grid-cols-1 sm:grid-cols-12 gap-4 items-center mb-5">
                                <div className="sm:col-span-5 flex flex-col items-center justify-center bg-slate-900/90 border border-slate-800/80 rounded-2xl py-4 px-3 text-center">
                                  <span className="text-[9px] text-slate-400 font-black uppercase tracking-wider block mb-1">IELTS MOCK</span>
                                  <div className="text-3xl font-black text-white font-display">8.5</div>
                                  <div className="h-1 w-10 bg-accent-500 my-2 rounded"></div>
                                  <span className="text-[9px] text-green-400 font-extrabold uppercase">TARGET ACHIEVED</span>
                                </div>

                                <div className="sm:col-span-7 space-y-2.5 text-left">
                                  <div>
                                    <div className="flex justify-between text-[9px] font-bold text-slate-400 mb-0.5">
                                      <span>Listening</span>
                                      <span className="text-slate-200 font-extrabold">9.0 / 9.0</span>
                                    </div>
                                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                      <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ duration: 1, delay: 0.2 }}
                                        className="h-full bg-accent-500" 
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="flex justify-between text-[9px] font-bold text-slate-400 mb-0.5">
                                      <span>Speaking</span>
                                      <span className="text-slate-200 font-extrabold">8.0 / 9.0</span>
                                    </div>
                                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                      <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: '88%' }}
                                        transition={{ duration: 1, delay: 0.4 }}
                                        className="h-full bg-accent-500" 
                                      />
                                    </div>
                                  </div>
                                  <div>
                                    <div className="flex justify-between text-[9px] font-bold text-slate-400 mb-0.5">
                                      <span>Writing</span>
                                      <span className="text-slate-200 font-extrabold">8.5 / 9.0</span>
                                    </div>
                                    <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                      <motion.div 
                                        initial={{ width: 0 }}
                                        animate={{ width: '94%' }}
                                        transition={{ duration: 1, delay: 0.6 }}
                                        className="h-full bg-accent-500" 
                                      />
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* Quick Tip Alert */}
                              <div className="bg-accent-500/5 border border-accent-500/10 rounded-xl p-3 text-left flex items-start gap-2.5">
                                <Sparkles className="w-4 h-4 text-accent-400 shrink-0 mt-0.5" />
                                <p className="text-[10px] text-slate-300 font-medium leading-relaxed">
                                  {lang === 'en' 
                                    ? "Critical strategy: Focus heavily on IELTS Task 2 essay structure to secure a minimum band 8.5 on grammar range."
                                    : "Stratégie critique : Maîtrisez la structure d’essai IELTS Task 2 pour garantir au moins une note de 8.5 en précision linguistique."}
                                </p>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      </div>

                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2.5 mt-10">
            {carouselItems.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={() => setActiveSlide(dotIdx)}
                className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === dotIdx ? 'w-10 bg-accent-500' : 'w-2.5 bg-slate-800 hover:bg-slate-700'
                }`}
                aria-label={`Go to slide ${dotIdx + 1}`}
              ></button>
            ))}
          </div>

        </div>
      </section>

      {/* 
        2. THE LUXURIOUS INTERACTIVE CATALOG CAROUSEL
      */}
      <section id="bento-catalog" className="py-24 bg-slate-50/40 relative overflow-hidden">
        {/* Fine-art technical grid pattern background */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#e2e8f0_1px,transparent_1px),linear-gradient(to_bottom,#e2e8f0_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-25 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          
          {/* Header & Controls Area */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12 gap-8">
            <div className="text-left max-w-2xl">
              <span className="text-accent-600 font-extrabold text-[10px] tracking-widest uppercase bg-accent-500/10 px-4 py-2 rounded-full border border-accent-500/15 inline-flex items-center gap-1.5 shadow-sm mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></span>
                {lang === 'en' ? 'OUR INTERACTIVE CATALOGUE' : 'NOTRE CATALOGUE INTERACTIF'}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-950 tracking-tight font-display leading-[1.15]">
                {lang === 'en' ? (
                  <>
                    Explore Our Specialities <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-600">in Detail</span>
                  </>
                ) : (
                  <>
                    Explorez Toutes Nos <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-500 to-accent-600">Formations</span>
                  </>
                )}
              </h2>
              <p className="text-sm text-slate-500 leading-relaxed max-w-xl mt-4 font-medium">
                {lang === 'en'
                  ? 'Swipe or use navigation arrows to browse through our official programs, intensive clubs, and customized languages services.'
                  : 'Faites défiler ou utilisez les flèches pour parcourir nos programmes officiels, clubs intensifs et services sur-mesure.'}
              </p>
            </div>

            {/* Navigation Controls */}
            <div className="flex items-center gap-3 self-start lg:self-end">
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
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-start lg:justify-center gap-2 sm:gap-3 mb-10 border-b border-slate-100 pb-8">
            {(Object.keys(CATEGORIES) as Array<'all' | 'english' | 'services'>).map((catKey) => {
              const isSelected = selectedCategory === catKey;
              return (
                <button
                  key={catKey}
                  onClick={() => setSelectedCategory(catKey)}
                  className={`relative px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold tracking-wide transition-all duration-300 cursor-pointer ${
                    isSelected 
                      ? 'text-white' 
                      : 'text-slate-600 hover:text-slate-900 bg-white hover:bg-slate-50 border border-slate-200/60'
                  }`}
                >
                  {isSelected && (
                    <motion.div
                      layoutId="activeCatalogFilter"
                      className="absolute inset-0 bg-accent-500 rounded-full -z-10 shadow-md shadow-accent-500/20"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  <span>{lang === 'en' ? CATEGORIES[catKey].en : CATEGORIES[catKey].fr}</span>
                </button>
              );
            })}
          </div>

          {/* Sliding Carousel Container */}
          <div className="relative">
            {/* Subtle left gradient overlay for visual cues */}
            <div className={`absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-slate-50/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollLeft ? 'opacity-100' : 'opacity-0'}`}></div>
            {/* Subtle right gradient overlay */}
            <div className={`absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-slate-50/80 to-transparent z-10 pointer-events-none transition-opacity duration-300 ${canScrollRight ? 'opacity-100' : 'opacity-0'}`}></div>

            <div
              ref={scrollRef}
              onScroll={checkScroll}
              className="flex gap-6 overflow-x-auto snap-x snap-mandatory px-2 pb-10 pt-2 -mx-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none"
            >
              {filteredModules.map((module, idx) => {
                const IconComponent = iconMap[module.iconName] || Briefcase;
                const isProminent = module.isHighlighted || idx === 0;

                return (
                  <motion.div
                    key={module.id}
                    layout="position"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.05 }}
                    className={`snap-start shrink-0 w-[295px] sm:w-[355px] rounded-[2.5rem] p-6 sm:p-8 flex flex-col justify-between text-left relative overflow-hidden transition-all duration-500 group min-h-[460px] border ${
                      isProminent
                        ? 'bg-slate-900 text-white border-slate-800 shadow-xl shadow-slate-900/10 hover:border-slate-700'
                        : 'bg-white text-slate-950 border-slate-200/80 shadow-md shadow-slate-200/20 hover:border-accent-500/30'
                    }`}
                  >
                    {/* Hover bottom border glow indicator */}
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-accent-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>

                    {/* Background glows */}
                    {isProminent ? (
                      <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-accent-500/15 transition-all duration-500"></div>
                    ) : (
                      <div className="absolute top-0 right-0 w-64 h-64 bg-slate-100/50 rounded-full blur-3xl pointer-events-none group-hover:bg-accent-500/5 transition-all duration-500"></div>
                    )}

                    <div>
                      {/* Card Visual Header Image with floating icon & tag overlay */}
                      <div className="relative h-40 -mx-6 sm:-mx-8 -mt-6 sm:-mt-8 mb-6 overflow-hidden rounded-t-[2.5rem] group-hover:opacity-95 transition-opacity">
                        <img 
                          src={moduleImages[module.id] || 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop'} 
                          alt={lang === 'en' ? module.title : (module.frenchTitle || module.title)} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/10 to-transparent"></div>
                        
                        {/* Floating Icon */}
                        <div className="absolute top-4 left-4 flex items-center gap-2">
                          <div className={`w-10 h-10 rounded-xl flex items-center justify-center backdrop-blur-md shadow-sm border ${
                            isProminent
                              ? 'bg-accent-500/80 border-accent-400 text-white'
                              : 'bg-white/85 border-white/20 text-slate-800'
                          }`}>
                            <IconComponent className="w-5 h-5" />
                          </div>
                        </div>

                        {/* Floating Tag */}
                        <div className="absolute top-4 right-4">
                          {isProminent ? (
                            <span className="bg-accent-500 text-white text-[8px] font-black tracking-widest px-2.5 py-1.5 rounded-full uppercase shadow-sm">
                              {lang === 'en' ? 'RECOMMENDED' : 'RECOMMANDÉ'}
                            </span>
                          ) : (
                            <span className="bg-white/80 text-slate-800 backdrop-blur-sm text-[8px] font-black tracking-wider uppercase px-2 py-1 rounded-full border border-white/10">
                              {lang === 'en' ? 'MODULE' : 'FORMATION'}
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Title & Description */}
                      <h3 className={`text-lg sm:text-xl font-black font-display tracking-tight leading-snug mb-3 transition-colors ${
                        isProminent ? 'text-white' : 'text-slate-900 group-hover:text-brand-950'
                      }`}>
                        {lang === 'en' ? module.title : (module.frenchTitle || module.title)}
                      </h3>
                      
                      <p className={`text-xs leading-relaxed mb-6 font-semibold min-h-[54px] ${
                        isProminent ? 'text-slate-300' : 'text-slate-500'
                      }`}>
                        {lang === 'en' ? module.description : (module.frenchDescription || module.description)}
                      </p>

                      {/* Features Bullet points */}
                      <ul className={`space-y-2.5 border-t pt-5 mb-8 ${
                        isProminent ? 'border-slate-800/80' : 'border-slate-100'
                      }`}>
                        {((lang === 'en' ? module.features : module.featuresFrench) || module.features).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2.5">
                            <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 border ${
                              isProminent
                                ? 'bg-accent-500/20 text-accent-400 border-accent-500/30'
                                : 'bg-accent-50 text-accent-500 border-accent-100'
                            }`}>
                              <CheckCircle2 className="w-2.5 h-2.5" />
                            </div>
                            <span className={`text-[11px] font-bold leading-tight ${
                              isProminent ? 'text-slate-200' : 'text-slate-600'
                            }`}>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action button */}
                    <div>
                      <button
                        onClick={() => onSelectService(lang === 'en' ? module.title : (module.frenchTitle || module.title))}
                        className={`w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 group/btn active:scale-95 border ${
                          isProminent
                            ? 'bg-accent-500 text-white border-accent-500 hover:bg-accent-600 shadow-md shadow-accent-500/10 hover:shadow-accent-500/20'
                            : 'bg-slate-50 text-slate-700 border-slate-100/80 hover:bg-accent-500 hover:text-white hover:border-accent-500 hover:shadow-md hover:shadow-accent-500/15'
                        }`}
                      >
                        <span>{lang === 'en' ? 'Select Module' : 'Choisir Module'}</span>
                        <ChevronRight className="w-4 h-4 transform group-hover/btn:translate-x-1 transition-transform" />
                      </button>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom helper swipe tip */}
          <div className="text-center mt-4 text-[10px] text-slate-400 font-bold tracking-widest uppercase flex items-center justify-center gap-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-pulse"></span>
            {lang === 'en' ? 'Swipe to browse all programs' : 'Faites glisser pour tout voir'}
            <span className="w-1.5 h-1.5 rounded-full bg-slate-300 animate-pulse"></span>
          </div>

        </div>
      </section>
    </div>
  );
}
