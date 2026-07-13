import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Phone, MessageSquare, Diamond } from 'lucide-react';

interface CtaSectionProps {
  lang: 'en' | 'fr';
  onRegisterClick: () => void;
}

export default function CtaSection({ lang, onRegisterClick }: CtaSectionProps) {
  const phone = '+228 91 88 38 67';

  const content = {
    en: {
      title: 'Ready to become bilingual?',
      subtitle:
        'Join TEN KEY and train with certified native trainers. Your registration includes the level test, learning materials, and an official centre T-shirt.',
      primaryBtn: 'Register now',
      secondaryBtn: 'Call us',
      bannerText: 'Tell us your goals and we will recommend the right program for you.',
      bannerBtn: 'Register now',
    },
    fr: {
      title: 'Prêt à devenir bilingue ?',
      subtitle:
        'Rejoignez TEN KEY et progressez avec des formateurs natifs certifiés. Votre inscription inclut le test de niveau, les supports pédagogiques et un T-shirt officiel du centre.',
      primaryBtn: "S'inscrire maintenant",
      secondaryBtn: 'Nous appeler',
      bannerText: 'Parlez-nous de vos objectifs et nous vous recommanderons le programme adapté.',
      bannerBtn: "S'inscrire maintenant",
    },
  };

  const t = content[lang];

  return (
    <section className="relative overflow-hidden">
      {/* Top CTA - Dark with background overlay */}
      <div className="relative bg-brand-600 py-20 sm:py-24">
        {/* Subtle background texture / gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-950 to-black pointer-events-none" />
        <div className="absolute inset-0 opacity-25 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-600/20 rounded-full filter blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent-500/10 rounded-full filter blur-3xl" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight mb-5 font-display"
          >
            {t.title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-9"
          >
            {t.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={onRegisterClick}
              className="group inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-600 text-white text-sm font-bold px-7 py-3.5 rounded-full transition-colors cursor-pointer shadow-lg shadow-accent-500/25"
            >
              {t.primaryBtn}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>

            <a
              href={`tel:${phone.replace(/\s/g, '')}`}
              className="group inline-flex items-center gap-2 text-white border border-white/20 hover:border-white/40 hover:bg-white/5 text-sm font-bold px-7 py-3.5 rounded-full transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              {t.secondaryBtn}
            </a>
          </motion.div>
        </div>
      </div>

      {/* Bottom Navy Banner */}
      <div className="bg-brand-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="hidden md:flex w-12 h-12 rounded-full bg-brand-700/40 items-center justify-center">
                <MessageSquare className="w-5 h-5 text-white" />
              </div>
              <p className="text-white font-bold text-lg sm:text-xl text-center md:text-left leading-snug">
                {t.bannerText}
              </p>
            </div>

            <div className="hidden lg:flex items-center justify-center w-16 h-16 rounded-full bg-accent-500/20 shrink-0">
              <Diamond className="w-7 h-7 text-accent-300 rotate-45" />
            </div>

            <button
              onClick={onRegisterClick}
              className="group inline-flex items-center gap-2 bg-white hover:bg-slate-50 text-brand-900 text-sm font-bold px-7 py-3 rounded-full transition-colors cursor-pointer shrink-0"
            >
              {t.bannerBtn}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
