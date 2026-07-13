import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Briefcase,
  GraduationCap,
  Award,
  Crown,
  Sun,
  FileText,
  Users,
  Globe,
  Check,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { TRAINING_MODULES } from '../data';

interface TrainingCatalogProps {
  currentLang: string; // Utilisation de l'infrastructure évolutive
  onSelect: (moduleName: string) => void;
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
  english: { en: 'English Masterclasses', fr: 'Programmes Anglais' },
  services: { en: 'Specialties & Translations', fr: 'Spécificités & Options' },
};

export default function TrainingCatalog({ currentLang, onSelect }: TrainingCatalogProps) {
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
      const { scrollLeft } = scrollRef.current;
      const cardWidth = 380;
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
    const isEnglish = ['general-professional', 'academic', 'exams', 'vip', 'english-club'].includes(
      module.id
    );
    if (selectedCategory === 'english') return isEnglish;
    return !isEnglish;
  });

  return (
    <section id="detailed-offers" className="py-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* En-tête de section minimaliste */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
            className="max-w-2xl"
          >
            <p className="text-xs font-semibold tracking-widest text-accent-500 uppercase mb-3">
              {currentLang === 'en' ? 'Academic Curricula' : 'Catalogue des Formations'}
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-brand-950 leading-[1.15]">
              {currentLang === 'en' ? (
                <>Explore Our <span className="text-slate-400 font-light">Programs</span></>
              ) : (
                <>Explorez Toutes Nos <span className="text-slate-400 font-light">Formations</span></>
              )}
            </h2>
          </motion.div>
          
          {/* Contôles épurés */}
          <div className="flex items-center gap-2 shrink-0 self-end">
            <button
              onClick={() => scroll('left')}
              disabled={!canScrollLeft}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                canScrollLeft
                  ? 'border-slate-200 bg-white text-brand-800 hover:bg-slate-50'
                  : 'border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed'
              }`}
              aria-label="Previous programs"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              disabled={!canScrollRight}
              className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
                canScrollRight
                  ? 'border-slate-200 bg-white text-brand-800 hover:bg-slate-50'
                  : 'border-slate-100 bg-slate-50 text-slate-300 cursor-not-allowed'
              }`}
              aria-label="Next programs"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Système de navigation par onglets minimaliste et discret */}
        <div className="flex gap-8 mb-12 border-b border-slate-100">
          {(Object.keys(CATEGORIES) as Array<'all' | 'english' | 'services'>).map((catKey) => {
            const isSelected = selectedCategory === catKey;
            const label = CATEGORIES[catKey][currentLang as 'fr' | 'en'] || CATEGORIES[catKey].fr;
            return (
              <button
                key={catKey}
                onClick={() => setSelectedCategory(catKey)}
                className={`relative pb-4 text-sm font-medium tracking-wide transition-colors cursor-pointer ${
                  isSelected ? 'text-brand-950 font-semibold' : 'text-slate-400 hover:text-slate-600'
                }`}
              >
                <span>{label}</span>
                {isSelected && (
                  <motion.div
                    layoutId="activeCatalogTab"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-brand-600"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Liste des Cartes */}
        <div className="relative">
          <div
            ref={scrollRef}
            onScroll={checkScroll}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 pt-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden select-none"
          >
            <AnimatePresence mode="popLayout">
              {filteredModules.map((module, idx) => {
                const IconComponent = iconMap[module.iconName] || Briefcase;
                const isProminent = module.isHighlighted;
                const title = module[`${currentLang}Title` as keyof typeof module] || module.title;
                const description = module[`${currentLang}Description` as keyof typeof module] || module.description;
                const featuresList = (currentLang === 'en' ? module.features : module.featuresFrench) || module.features;

                return (
                  <motion.div
                    key={module.id}
                    layout="position"
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.4, delay: idx * 0.04 }}
                    className={`group snap-start shrink-0 w-[310px] sm:w-[370px] rounded-2xl p-8 flex flex-col justify-between border bg-white transition-all duration-300 hover:border-slate-300 hover:bg-slate-50/30 ${
                      isProminent ? 'border-accent-500/40 shadow-sm shadow-accent-500/5' : 'border-slate-100'
                    }`}
                  >
                    <div>
                      <div className="flex justify-between items-center mb-8">
                        <div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 text-brand-700 flex items-center justify-center group-hover:bg-brand-600 group-hover:text-white group-hover:border-slate-950 transition-colors duration-300">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        {isProminent && (
                          <span className="text-[9px] font-semibold tracking-wider px-2.5 py-1 rounded-md bg-accent-500/10 text-accent-700 border border-accent-500/10">
                            {currentLang === 'en' ? 'RECOMMENDED' : 'RECOMMANDÉ'}
                          </span>
                        )}
                      </div>

                      <h3 className="text-lg font-medium tracking-tight text-brand-900 leading-snug mb-3">
                        {title as string}
                      </h3>

                      <p className="text-xs leading-relaxed text-slate-400 font-normal mb-6 min-h-[3rem]">
                        {description as string}
                      </p>

                      {/* Liste de caractéristiques propre et fine */}
                      <ul className="space-y-3 border-t border-slate-100 pt-6 mb-8">
                        {featuresList.map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-3">
                            <Check className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                            <span className="text-xs font-normal text-slate-600 leading-tight">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bouton corporate d'action */}
                    <button
                      onClick={() => onSelect(title as string)}
                      className="w-full py-3 rounded-lg text-xs font-medium tracking-wide transition-all duration-300 cursor-pointer flex items-center justify-center gap-1.5 active:scale-[0.99] border border-slate-900 bg-brand-600 text-white hover:bg-brand-700"
                    >
                      <span>{currentLang === 'en' ? 'Review Program Details' : 'Consulter le programme'}</span>
                    </button>
                  </motion.div>
                );
              })}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}