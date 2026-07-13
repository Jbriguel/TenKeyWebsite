import React from 'react';
import { motion } from 'motion/react';
import { PRICING_PLANS } from '../data';
import { Check, ArrowRight, Sparkles } from 'lucide-react';

export interface PricingTierProps {
  currentLang: string;
  planIds: string[];
  variant: 'light' | 'dark';
  heroCardId?: string;
  label: string;
  labelFr: string;
  title: string;
  titleFr: string;
  subtitle: string;
  subtitleFr: string;
  columns?: 3 | 4;
  onSelectPlan: (moduleName: string) => void;
}

interface Plan {
  id: string;
  moduleName: string;
  frenchModuleName: string;
  schedule: string;
  frenchSchedule: string;
  option: string;
  frenchOption: string;
  cost: string;
  costNum: number;
}

const getPlanById = (id: string): Plan => PRICING_PLANS.find((p) => p.id === id) as Plan;

const parseCost = (raw: string) =>
  raw
    .split('\n')
    .filter(Boolean)
    .map((line) => line.replace(/^[-•*]\s*/, '').trim());

const parseOptions = (raw: string) =>
  raw
    .split('\n')
    .filter(Boolean)
    .map((line) => line.replace(/^[-•*]\s*/, '').trim());

export default function PricingTable(props: PricingTierProps) {
  const {
    currentLang,
    planIds,
    variant,
    heroCardId,
    label,
    labelFr,
    title,
    titleFr,
    subtitle,
    subtitleFr,
    columns = 3,
    onSelectPlan,
  } = props;

  const lang = currentLang === 'en' ? 'en' : 'fr';
  const isDark = variant === 'dark';

  const plans = planIds.map(getPlanById);
  const gridCols =
    columns === 4
      ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

  const renderCard = (plan: Plan, idx: number) => {
    const isHero = plan.id === heroCardId;
    const isFree = plan.cost.toLowerCase().includes('free') || plan.cost.toLowerCase().includes('gratuit');
    const titleLabel = lang === 'en' ? plan.moduleName : plan.frenchModuleName;
    const schedule = lang === 'en' ? plan.schedule : plan.frenchSchedule;
    const costLines = parseCost(plan.cost);
    const options = parseOptions(lang === 'en' ? plan.option : plan.frenchOption);

    const cardBase = isDark
      ? 'bg-white/[0.02] border-white/10 hover:border-white/20 hover:bg-white/[0.04]'
      : isHero
      ? 'bg-white border-accent-500/30 shadow-[0_8px_30px_-12px_rgba(245,158,11,0.15)] hover:border-accent-500/50'
      : 'bg-white border-slate-100 hover:border-slate-200 hover:shadow-sm';

    const titleClass = isDark ? 'text-white' : 'text-brand-950';
    const priceClass = isDark ? 'text-white' : 'text-brand-900';
    const scheduleClass = isDark ? 'text-slate-400' : 'text-slate-500';
    const dividerClass = isDark ? 'bg-white/10' : 'bg-slate-100';
    const featureText = isDark ? 'text-slate-300' : 'text-slate-600';
    const checkColor = isDark ? 'text-accent-500' : 'text-slate-400';
    const badgeClass = isDark
      ? 'text-accent-500'
      : isHero
      ? 'text-accent-600'
      : 'text-slate-400';

    return (
      <motion.div
        key={plan.id}
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-40px' }}
        transition={{ duration: 0.5, delay: idx * 0.06 }}
        className={`group h-full flex flex-col rounded-2xl border transition-all duration-300 ${cardBase}`}
      >
        <div className="flex flex-col h-full p-6 sm:p-7">
          {/* Header */}
          <div className="mb-6">
            <div className="flex items-center justify-between mb-4">
              <span className={`text-[9px] font-semibold tracking-[0.15em] uppercase ${badgeClass}`}>
                {isHero
                  ? lang === 'en' ? 'Recommended' : 'Recommandé'
                  : isFree
                  ? lang === 'en' ? 'Community Access' : 'Accès Communautaire'
                  : lang === 'en' ? 'Module' : 'Module'}
              </span>
              {isHero && <Sparkles className="w-3.5 h-3.5 text-accent-500" strokeWidth={1.5} />}
            </div>

            <h3 className={`text-base font-medium leading-snug mb-3 min-h-[2.75rem] ${titleClass}`}>
              {titleLabel}
            </h3>

            <div className="space-y-1">
              {costLines.map((line, cIdx) => (
                <p key={cIdx} className={`text-xl font-light tracking-tight ${priceClass}`}>
                  {line}
                </p>
              ))}
            </div>

            <p className={`text-[11px] mt-3 leading-relaxed ${scheduleClass}`}>{schedule}</p>
          </div>

          <div className={`h-px mb-6 ${dividerClass}`} />

          {/* Features - flex-1 pushes button down */}
          <div className="flex-1">
            <ul className="space-y-3">
              {options.map((opt, oIdx) => (
                <li key={oIdx} className={`flex items-start gap-2.5 text-xs ${featureText}`}>
                  <Check className={`w-3 h-3 shrink-0 mt-0.5 ${checkColor}`} strokeWidth={1.5} />
                  <span className="leading-relaxed">{opt}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA - always at bottom */}
          <div className="mt-8">
            <button
              onClick={() => onSelectPlan(titleLabel)}
              className={`w-full py-3 rounded-lg text-[11px] font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-2 ${
                isDark
                  ? 'bg-white/5 text-white border border-white/10 hover:bg-white/10'
                  : isHero
                  ? 'bg-brand-600 text-white hover:bg-brand-700'
                  : 'bg-white text-brand-900 border border-slate-200 hover:bg-slate-50'
              }`}
            >
              {lang === 'en' ? 'Select this module' : 'Choisir ce module'}
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </motion.div>
    );
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-16 max-w-2xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className={`text-[10px] font-black tracking-widest uppercase ${isDark ? 'text-accent-500' : 'text-brand-600'}`}>
            {lang === 'en' ? label : labelFr}
          </span>
          <span className={`w-16 h-0.5 ${isDark ? 'bg-accent-500' : 'bg-brand-600'}`} />
        </div>
        <h2 className={`text-3xl sm:text-4xl font-black font-display tracking-tight leading-tight mb-5 ${isDark ? 'text-white' : 'text-brand-950'}`}>
          {lang === 'en' ? title : titleFr}
        </h2>
        <p className={`text-sm sm:text-base leading-relaxed font-medium ${isDark ? 'text-slate-400' : 'text-slate-500'}`}>
          {lang === 'en' ? subtitle : subtitleFr}
        </p>
      </motion.div>

      <div className={`grid ${gridCols} gap-6`}>
        {plans.map((plan, idx) => renderCard(plan, idx))}
      </div>
    </>
  );
}