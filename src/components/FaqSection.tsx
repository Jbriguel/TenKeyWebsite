import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, Check, Plus, Minus } from 'lucide-react';
import { FAQS } from '../data';

interface FaqSectionProps {
  lang: 'en' | 'fr';
}

export default function FaqSection({ lang }: FaqSectionProps) {
  const [openIdx, setOpenIdx] = useState<number>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  const label = lang === 'en' ? 'Questions & Answers' : 'Questions & Réponses';
  const title = lang === 'en' ? 'Frequently Asked Questions' : 'Questions fréquentes';
  const description =
    lang === 'en'
      ? 'Find clear answers to the most common questions about our courses, schedules, and registration process.'
      : 'Trouvez des réponses claires aux questions les plus courantes sur nos cours, horaires et processus d\'inscription.';

  const highlights = [
    {
      en: 'Native trainers & certified pedagogical methods',
      fr: 'Formateurs natifs et méthodes pédagogiques certifiées',
    },
    {
      en: 'Flexible schedules designed for busy professionals',
      fr: 'Horaires flexibles conçus pour les professionnels',
    },
    {
      en: 'Official materials & didactic books included',
      fr: 'Supports officiels et manuels didactiques inclus',
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <div className="text-left">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-brand-600 text-[10px] font-black tracking-widest uppercase">
                {label}
              </span>
              <span className="w-16 h-0.5 bg-brand-600" />
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black text-brand-950 leading-tight mb-5 font-display">
              {title}
            </h2>

            <p className="text-slate-500 text-sm leading-relaxed max-w-md mb-8">
              {description}
            </p>

            <div className="space-y-4">
              {highlights.map((item, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <span className="mt-0.5 w-5 h-5 rounded-full bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </span>
                  <span className="text-slate-600 text-sm font-medium leading-snug">
                    {lang === 'en' ? item.en : item.fr}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Accordion */}
          <div className="space-y-3">
            {FAQS.map((faq, idx) => {
              const isOpen = openIdx === idx;
              const question = lang === 'en' ? faq.question : faq.frenchQuestion;
              const answer = lang === 'en' ? faq.answer : faq.frenchAnswer;

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.08 }}
                  className={`rounded-xl overflow-hidden border transition-colors ${
                    isOpen
                      ? 'bg-brand-700 border-brand-900'
                      : 'bg-white border-slate-100 hover:border-slate-200'
                  }`}
                >
                  <button
                    onClick={() => toggle(idx)}
                    className="w-full px-5 py-4 flex items-center justify-between gap-4 text-left cursor-pointer"
                  >
                    <span
                      className={`text-sm font-bold leading-snug ${
                        isOpen ? 'text-white' : 'text-brand-900'
                      }`}
                    >
                      {question}
                    </span>
                    <span
                      className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${
                        isOpen
                          ? 'bg-accent-500/30 text-white'
                          : 'bg-slate-100 text-slate-600'
                      }`}
                    >
                      {isOpen ? (
                        <Minus className="w-3.5 h-3.5" />
                      ) : (
                        <Plus className="w-3.5 h-3.5" />
                      )}
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.25, ease: 'easeInOut' }}
                      >
                        <div className="px-5 pb-5 text-brand-100 text-sm leading-relaxed font-medium border-t border-brand-700/40 pt-4">
                          {answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
