import React, { useState, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PRICING_PLANS } from '../data';
import {
  Search,
  Check,
  Sparkles,
  Coins,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  Crown,
  Globe,
  LayoutGrid,
  ArrowRight,
  BookOpen,
  Shirt,
  ClipboardCheck,
  X,
} from 'lucide-react';

interface PricingTableProps {
  lang: 'en' | 'fr';
  onSelectPlan: (moduleName: string) => void;
}

type TabId = 'all' | 'english' | 'special' | 'other';

const TAB_CONFIG: {
  id: TabId;
  label: Record<string, string>;
  icon: React.ElementType;
}[] = [
  { id: 'all', label: { en: 'All Modules', fr: 'Tous les Modules' }, icon: LayoutGrid },
  { id: 'english', label: { en: 'English Courses', fr: "Cours d'Anglais" }, icon: GraduationCap },
  { id: 'special', label: { en: 'VIP & Kids', fr: 'VIP & Jeunes' }, icon: Crown },
  { id: 'other', label: { en: 'French & Services', fr: 'Français & Services' }, icon: Globe },
];

const CATEGORY_MAP: Record<TabId, string[] | null> = {
  all: null,
  english: ['p1', 'p2', 'p3'],
  special: ['p4', 'p5', 'p6'],
  other: ['p7'],
};

export default function PricingTable({ lang, onSelectPlan }: PricingTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<TabId>('all');
  const scrollRef = useRef<HTMLDivElement>(null);

  const t = (en: string, fr: string) => (lang === 'en' ? en : fr);

  const filteredPlans = useMemo(() => {
    const query = searchTerm.toLowerCase();
    return PRICING_PLANS.filter((plan) => {
      const matchesSearch =
        !query ||
        plan.moduleName.toLowerCase().includes(query) ||
        plan.frenchModuleName.toLowerCase().includes(query) ||
        plan.schedule.toLowerCase().includes(query) ||
        plan.frenchSchedule.toLowerCase().includes(query);

      if (!matchesSearch) return false;

      const allowedIds = CATEGORY_MAP[activeTab];
      return allowedIds ? allowedIds.includes(plan.id) : true;
    });
  }, [searchTerm, activeTab]);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const amount = 360;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -amount : amount,
      behavior: 'smooth',
    });
  };

  const parseCost = (raw: string) => {
    const firstLine = raw.split('\n')[0].replace(/^[-•*]\s*/, '').trim();
    const parts = firstLine.split('/');
    return {
      amount: parts[0].trim(),
      period: parts.length > 1 ? parts.slice(1).join('/').trim() : null,
    };
  };

  const parseOptions = (raw: string) =>
    raw
      .split('\n')
      .filter(Boolean)
      .map((l) => l.replace(/^[-•*]\s*/, ''));

  return (
    <div id="pricing" className="bg-slate-50 min-h-screen">
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-brand-950 text-white overflow-hidden border-b border-brand-900/40">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-10 w-[350px] h-[350px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 text-left">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <span className="text-accent-400 text-[10px] font-black tracking-widest uppercase">
                    {t('TRANSPARENT PRICING', 'TARIFS TRANSPARENTS')}
                  </span>
                  <span className="w-16 h-0.5 bg-accent-400" />
                </div>

                <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] font-display mb-6">
                  {t('Schedules, Options', 'Horaires, Options')}{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-amber-300">
                    {t('& Costs', '& Coûts')}
                  </span>
                </h1>

                <p className="text-sm sm:text-base text-brand-100/70 leading-relaxed font-semibold mb-8 max-w-xl">
                  {t(
                    'Choose a course that fits your work schedule. Prices are fixed in FCFA, with installment plans available for longer programs.',
                    "Choisissez un cours compatible avec votre emploi du temps. Les tarifs sont fixes en Francs CFA, avec possibilité d'écheancier pour les programmes longs."
                  )}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    t('Installment Payments Available', 'Paiement Échelonné Disponible'),
                    t('No Hidden Admin Fees', 'Pas de Frais Cachés'),
                    t('Certificate of Completion', 'Attestation de Formation'),
                    t('Work-Compatible Schedules', 'Horaires Compatibles avec le Travail'),
                  ].map((perk, i) => (
                    <div key={i} className="flex items-center gap-2.5">
                      <span className="w-5 h-5 rounded-full bg-accent-500/15 flex items-center justify-center shrink-0">
                        <Check className="w-3 h-3 text-accent-400" />
                      </span>
                      <span className="text-xs font-bold text-brand-100">{perk}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              className="lg:col-span-5 relative flex justify-center"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="relative w-full max-w-[380px] aspect-square">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-800/40 relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
                    alt={t('Corporate training schedules', 'Programmes de formation')}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/10" />
                </div>

                <div className="absolute -bottom-6 -right-6 bg-brand-900/90 backdrop-blur-md border border-brand-800 text-white rounded-2xl p-4 shadow-2xl z-20 flex items-center gap-3.5 max-w-[210px]">
                  <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black font-display text-accent-400">100%</p>
                    <p className="text-[9px] font-bold text-brand-100 leading-normal">
                      {t('Native-Led Training', 'Formations Animées par des Natifs')}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-10 bg-white p-3 rounded-2xl border border-slate-100 shadow-sm">
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {TAB_CONFIG.map(({ id, label, icon: Icon }) => {
              const active = activeTab === id;
              return (
                <button
                  key={id}
                  onClick={() => setActiveTab(id)}
                  className={`
                    relative flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold transition-all
                    ${
                      active
                        ? 'bg-brand-600 text-white shadow-lg shadow-brand-600/20'
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-600 border border-slate-100'
                    }
                  `}
                >
                  <Icon className="w-3.5 h-3.5" />
                  {label[lang]}
                </button>
              );
            })}
          </div>

          {/* Search */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder={t('Search courses or times…', 'Rechercher un cours…')}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-slate-50 border border-slate-200 rounded-xl py-2.5 pl-10 pr-10 text-xs font-semibold focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        {/* Scroll navigation arrows (desktop) */}
        {filteredPlans.length > 3 && (
          <div className="hidden lg:flex justify-end gap-2 mb-4">
            <button
              onClick={() => scroll('left')}
              className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-all shadow-sm"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-9 h-9 rounded-xl bg-white border border-slate-200 flex items-center justify-center text-slate-500 hover:bg-brand-50 hover:text-brand-600 hover:border-brand-200 transition-all shadow-sm"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {/* Cards */}
        <AnimatePresence mode="wait">
          {filteredPlans.length > 0 ? (
            <motion.div
              key={activeTab + searchTerm}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.3 }}
              className="relative mb-12"
            >
              <div
                ref={scrollRef}
                className="flex gap-5 overflow-x-auto pb-6 snap-x snap-mandatory scroll-smooth scrollbar-hide"
              >
                {filteredPlans.map((plan, idx) => {
                  const isPopular = plan.id === 'p2';
                  const isFree = plan.id === 'p6';
                  const { amount, period } = parseCost(plan.cost);
                  const options = parseOptions(lang === 'en' ? plan.option : plan.frenchOption);

                  return (
                    <motion.div
                      key={plan.id}
                      initial={{ opacity: 0, y: 24 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: '-40px' }}
                      transition={{ duration: 0.4, delay: idx * 0.06 }}
                      className={`
                        group relative min-w-[280px] sm:min-w-[320px] lg:min-w-[340px] flex-1 max-w-[400px]
                        snap-start rounded-3xl flex flex-col transition-all duration-300
                        ${
                          isPopular
                            ? 'bg-gradient-to-br from-brand-600 via-brand-600 to-brand-700 text-white shadow-2xl shadow-brand-600/30 scale-[1.02] z-10 ring-1 ring-brand-500/30'
                            : 'bg-white border border-slate-100 text-slate-900 shadow-lg shadow-slate-900/[0.04] hover:shadow-xl hover:-translate-y-1'
                        }
                      `}
                    >
                      {/* Popular ribbon */}
                      {isPopular && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                          <span className="inline-flex items-center gap-1 bg-accent-500 text-white text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full shadow-lg shadow-accent-500/30">
                            <Sparkles className="w-3 h-3" />
                            {t('Most Popular', 'Le Plus Populaire')}
                          </span>
                        </div>
                      )}

                      <div className="p-6 sm:p-8 flex flex-col flex-1">
                        {/* Free badge */}
                        <div className="h-6 mb-3">
                          {isFree && !isPopular && (
                            <span className="inline-block text-[10px] font-black uppercase tracking-widest bg-emerald-50 text-emerald-600 px-3 py-1 rounded-full">
                              {t('Free', 'Gratuit')}
                            </span>
                          )}
                        </div>

                        {/* Plan Name */}
                        <h3
                          className={`text-lg sm:text-xl font-black font-display mb-4 leading-tight ${
                            isPopular ? 'text-white' : 'text-brand-950'
                          }`}
                        >
                          {lang === 'en' ? plan.moduleName : plan.frenchModuleName}
                        </h3>

                        {/* Price */}
                        <div className="mb-1 flex items-baseline gap-1">
                          <span className="text-3xl sm:text-4xl font-black font-display tracking-tight">
                            {amount}
                          </span>
                          {period && (
                            <span
                              className={`text-sm font-bold ${
                                isPopular ? 'text-brand-200' : 'text-slate-400'
                              }`}
                            >
                              /{period}
                            </span>
                          )}
                        </div>

                        {/* Schedule */}
                        <p
                          className={`text-xs sm:text-sm leading-relaxed mb-6 ${
                            isPopular ? 'text-brand-100/80' : 'text-slate-500'
                          }`}
                        >
                          {lang === 'en' ? plan.schedule : plan.frenchSchedule}
                        </p>

                        {/* Divider */}
                        <div
                          className={`h-px mb-6 ${
                            isPopular ? 'bg-white/15' : 'bg-slate-100'
                          }`}
                        />

                        {/* Features */}
                        <ul className="space-y-3 mb-8 flex-1">
                          {options.map((opt, oIdx) => (
                            <li key={oIdx} className="flex items-start gap-3 text-xs sm:text-sm">
                              <span
                                className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${
                                  isPopular
                                    ? 'bg-white/15 text-white'
                                    : 'bg-brand-50 text-brand-600'
                                }`}
                              >
                                <Check className="w-3 h-3" />
                              </span>
                              <span
                                className={`font-medium leading-snug ${
                                  isPopular ? 'text-white/90' : 'text-slate-600'
                                }`}
                              >
                                {opt}
                              </span>
                            </li>
                          ))}
                        </ul>

                        {/* CTA */}
                        <button
                          onClick={() =>
                            onSelectPlan(lang === 'en' ? plan.moduleName : plan.frenchModuleName)
                          }
                          className={`
                            w-full py-3.5 rounded-xl text-xs font-black uppercase tracking-widest
                            transition-all duration-200 cursor-pointer flex items-center justify-center gap-2
                            ${
                              isPopular
                                ? 'bg-white text-brand-600 hover:bg-brand-50 shadow-lg shadow-brand-900/10'
                                : 'bg-brand-600 text-white hover:bg-brand-700 shadow-md shadow-brand-600/10'
                            }
                          `}
                        >
                          {t("S'inscrire", "S'inscrire")}
                          <ArrowRight className="w-3.5 h-3.5" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="empty"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="bg-white text-slate-400 rounded-2xl py-16 text-center text-sm font-medium border border-slate-100 shadow-sm mb-12"
            >
              <Search className="w-8 h-8 mx-auto mb-3 text-slate-300" />
              <p>{t('No courses found matching your criteria.', 'Aucun module trouvé pour votre recherche.')}</p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveTab('all');
                }}
                className="mt-4 text-xs font-bold text-brand-600 hover:text-brand-700 underline underline-offset-2"
              >
                {t('Clear filters', 'Effacer les filtres')}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ═══════════════════════════════════════════
            REGISTRATION BANNER
        ═══════════════════════════════════════════ */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.5 }}
          className="relative overflow-hidden bg-gradient-to-br from-brand-900 via-brand-950 to-brand-950 text-white rounded-3xl shadow-2xl"
        >
          {/* Background decorations */}
          <div className="absolute top-0 right-0 w-72 h-72 bg-accent-500 rounded-full mix-blend-soft-light blur-[80px] opacity-20 -mr-24 -mt-24 pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-brand-500 rounded-full blur-[60px] opacity-15 -ml-16 -mb-16 pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row gap-8 items-center justify-between p-8 sm:p-10 lg:p-12">
            {/* Info */}
            <div className="text-left max-w-2xl">
              <span className="inline-flex items-center gap-1.5 bg-accent-500 text-white text-[10px] font-extrabold px-3 py-1.5 rounded-full uppercase tracking-wider mb-5 shadow-md shadow-accent-500/25">
                <Sparkles className="w-3.5 h-3.5" />
                {t('Welcome Package Included', "Pack d'Accueil Inclus")}
              </span>

              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 font-display leading-tight">
                {t('Ready to Start?', 'Prêt à démarrer ?')}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-amber-300">
                  {t('Registration Details', "Détails d'Inscription")}
                </span>
              </h3>

              <p className="text-brand-200 text-xs sm:text-sm leading-relaxed max-w-lg">
                {t(
                  'All admissions require a one-time onboarding setup fee. This unlocks our full specialized materials and assigns you to the exact curriculum matching your proficiency.',
                  "Toute admission requiert un droit d'inscription unique. Cela débloque l'accès à nos supports de cours imprimés et vous oriente vers le groupe de niveau idéal."
                )}
              </p>
            </div>

            {/* Value Box */}
            <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-6 w-full lg:w-[340px] shrink-0">
              {/* Price header */}
              <div className="flex justify-between items-baseline mb-5 pb-5 border-b border-white/10">
                <span className="text-sm font-semibold text-brand-200">
                  {t('One-time Fee:', 'Frais de Dossier :')}
                </span>
                <span className="text-2xl font-extrabold text-accent-400 font-display">
                  10,000 <span className="text-sm font-bold">FCFA</span>
                </span>
              </div>

              <p className="text-[10px] font-bold text-brand-300 uppercase tracking-widest mb-4">
                {t('What you receive:', 'Ce qui est inclus :')}
              </p>

              <div className="space-y-3.5">
                {[
                  {
                    icon: ClipboardCheck,
                    text: t('Compulsory LEVEL TEST', 'TEST DE NIVEAU obligatoire'),
                  },
                  {
                    icon: BookOpen,
                    text: t('Teaching & Didactic Books', 'Matériels & Manuels didactiques'),
                  },
                  {
                    icon: Shirt,
                    text: t('Official School T-Shirt', 'T-Shirt officiel du centre'),
                  },
                ].map(({ icon: Icon, text }, i) => (
                  <div key={i} className="flex items-center gap-3 text-xs">
                    <span className="w-7 h-7 rounded-lg bg-accent-500/15 text-accent-400 flex items-center justify-center shrink-0">
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <span className="font-semibold text-brand-100">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}