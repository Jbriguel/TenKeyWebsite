import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TESTIMONIALS, FAQS } from '../data';
import { Star, MessageSquare, ChevronDown, ChevronUp, Sparkles, HelpCircle } from 'lucide-react';

interface TestimonialsFaqProps {
  lang: string;
}

export default function TestimonialsFaq({ lang }: TestimonialsFaqProps) {
  const [openFaqIdx, setOpenFaqIdx] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaqIdx(openFaqIdx === idx ? null : idx);
  };

  return (
    <section className="py-10 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Testimonials Block */}
        <div className="mb-5">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-brand-600 text-[10px] font-black tracking-widest uppercase">
                {lang === 'en' ? 'TRAINED PROFESSIONALS' : 'PROFESSIONNELS FORMÉS'}
              </span>
              <span className="w-16 h-0.5 bg-brand-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 mt-4 mb-5 tracking-tight font-display">
              {lang === 'en' ? 'What Our Trainees Say' : 'Ce Que Disent Nos Stagiaires'}
            </h2>
            <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mb-5"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS.map((test, idx) => (
              <motion.div
                key={test.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                className="bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between"
              >
                <div>
                  {/* Rating Stars */}
                  <div className="flex gap-1 mb-4 text-amber-500">
                    {[...Array(test.rating)].map((_, rIdx) => (
                      <Star key={rIdx} className="w-4.5 h-4.5 fill-amber-500 text-amber-500" />
                    ))}
                  </div>

                  {/* Quote */}
                  <p className="text-gray-600 text-xs leading-relaxed italic mb-6">
                    "{lang === 'en' ? test.quote : test.quoteFrench}"
                  </p>
                </div>

                {/* Author Info */}
                <div className="flex items-center gap-3 border-t border-gray-50 pt-4">
                  {/* Avatar Circle with initials */}
                  <div className="w-10 h-10 rounded-full bg-brand-100 text-brand-800 font-extrabold text-sm flex items-center justify-center border border-brand-200">
                    {test.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div>
                    <h4 className="font-extrabold text-brand-950 text-xs">
                      {test.name}
                    </h4>
                    <p className="text-[10px] text-gray-400 font-semibold">
                      {test.role} {test.company ? `• ${test.company}` : ''}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* FAQs Block */}
        {/* <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-accent-500 font-extrabold text-xs uppercase tracking-widest bg-accent-50 px-3 py-1.5 rounded-full border border-accent-100">
              {lang === 'en' ? 'COMMON INQUIRIES' : 'QUESTIONS FREQUENTES'}
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-brand-950 mt-3 mb-4 tracking-tight font-display">
              {lang === 'en' ? 'Frequently Asked Questions' : 'Foire aux Questions'}
            </h2>
            <div className="w-12 h-1 bg-accent-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-4">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaqIdx === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all text-left"
                >
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full py-4 px-5 flex justify-between items-center gap-4 text-left cursor-pointer hover:bg-brand-50/10 transition-colors"
                  >
                    <div className="flex items-start gap-3">
                      <HelpCircle className="w-5 h-5 text-brand-600 shrink-0 mt-0.5" />
                      <span className="font-extrabold text-brand-950 text-xs sm:text-sm font-display">
                        {lang === 'en' ? faq.question : faq.frenchQuestion}
                      </span>
                    </div>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 text-gray-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500 shrink-0" />
                    )}
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        <div className="p-5 pt-0 border-t border-gray-50 text-xs text-gray-500 leading-relaxed font-medium">
                          {lang === 'en' ? faq.answer : faq.frenchAnswer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div> */}
      </div>
    </section>
  );
}
