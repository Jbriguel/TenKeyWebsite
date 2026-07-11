import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, Award, Crown, Sun, FileText, Users, Globe, CheckCircle2, ChevronLeft, ChevronRight, Phone, Send, Mic, Sparkles } from 'lucide-react';
import { TRAINING_MODULES } from '../data';
import TrustedExpertise from './TrustedExpertise';

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

  return (
    <div>
      {/* Trusted Expertise Section exactly matching the user mockup */}
      <TrustedExpertise lang={lang} onSelectService={onSelectService} />
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
                      {/* Top Row: Icon & Tag */}
                      <div className="flex justify-between items-center mb-6">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                          isProminent
                            ? 'bg-accent-500/10 border border-accent-500/20 text-accent-400'
                            : 'bg-slate-50 border border-slate-100 text-slate-700 group-hover:bg-accent-500 group-hover:text-white group-hover:border-accent-500'
                        }`}>
                          <IconComponent className="w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        
                        {isProminent ? (
                          <span className="bg-accent-500 text-white text-[9px] font-black tracking-widest px-3 py-1.5 rounded-full uppercase shadow-sm shadow-accent-500/20">
                            {lang === 'en' ? 'RECOMMENDED' : 'RECOMMANDÉ'}
                          </span>
                        ) : (
                          <span className={`text-[9px] font-black tracking-wider uppercase px-2.5 py-1.5 rounded-full border ${
                            isProminent 
                              ? 'bg-slate-800 text-slate-300 border-slate-700' 
                              : 'bg-slate-50 text-slate-400 border-slate-100'
                          }`}>
                            {lang === 'en' ? 'MODULE' : 'FORMATION'}
                          </span>
                        )}
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
