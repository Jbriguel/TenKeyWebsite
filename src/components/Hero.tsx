import React from 'react';
import { motion } from 'motion/react';
import { ArrowRight, BookOpen, Users, Trophy, Star } from 'lucide-react';

interface HeroProps {
  lang: 'en' | 'fr';
  onGetStarted: () => void;
  onLearnMore: () => void;
}

export default function Hero({ lang, onGetStarted, onLearnMore }: HeroProps) {
  // Use the exact generated file name
  const heroImageSrc = '/src/assets/images/lome_classroom_hero_1783681629919.jpg';

  const stats = [
    {
      value: '100%',
      label: { en: 'Differentiated Learning', fr: 'Apprentissage Différencié' },
      icon: BookOpen,
    },
    {
      value: '1-to-1',
      label: { en: 'VIP Personalized Sessions', fr: 'Sessions VIP Personnalisées' },
      icon: Users,
    },
    {
      value: '98%',
      label: { en: 'Exam Success Rate', fr: 'Taux de Réussite aux Examens' },
      icon: Trophy,
    },
  ];

  return (
    <section id="home" className="relative bg-gradient-to-b from-brand-50 via-white to-white pt-8 pb-16 overflow-hidden">
      {/* Decorative colored blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-100 rounded-full mix-blend-multiply filter blur-3xl opacity-60 animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-pulse delay-700"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-1.5 bg-brand-100 text-brand-800 text-xs font-bold px-3 py-1.5 rounded-full mb-5 border border-brand-200"
            >
              <Star className="w-3.5 h-3.5 fill-accent-500 text-accent-500" />
              <span>
                {lang === 'en'
                  ? 'The Premier Language Academy in Lomé'
                  : "L'Académie de Référence à Lomé"}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-brand-950 tracking-tight leading-tight mb-6 font-display"
            >
              {lang === 'en' ? (
                <>
                  Master <span className="text-brand-600">English</span> and{' '}
                  <span className="text-accent-500">French</span> in Lomé.
                </>
              ) : (
                <>
                  Maîtrisez <span className="text-brand-600">l'Anglais</span> et{' '}
                  <span className="text-accent-500">le Français</span> à Lomé.
                </>
              )}
              <span className="block mt-1 text-gray-800 text-3xl sm:text-4xl lg:text-5xl font-medium">
                {lang === 'en' ? 'Open New Doors to Your Future.' : 'Ouvrez de nouvelles portes à votre avenir.'}
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg text-gray-600 max-w-2xl leading-relaxed mb-8"
            >
              {lang === 'en'
                ? 'Learn with us using our immersive, interactive, and differentiated learning techniques. The best language learning center in Lomé, Togo.'
                : 'Apprenez avec nous grâce à nos techniques d\'apprentissage immersives, interactives et différenciées. Le meilleur centre d\'apprentissage de langues à Lomé, Togo.'}
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
            >
              <button
                onClick={onGetStarted}
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold text-base px-8 py-4 rounded-xl shadow-lg shadow-accent-100 hover:shadow-accent-200 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <span>{lang === 'en' ? 'Get Started' : 'Commencer'}</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={onLearnMore}
                className="bg-white hover:bg-gray-50 text-brand-900 border border-gray-200 font-bold text-base px-8 py-4 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>{lang === 'en' ? 'Learn More' : 'En Savoir Plus'}</span>
              </button>
            </motion.div>
          </div>

          {/* Visual Presentation Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/3] sm:aspect-[16/9] lg:aspect-[4/3] bg-brand-50">
              <img
                src={heroImageSrc}
                alt="Diverse African students learning together in Lomé"
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>

            {/* Float badge */}
            <div className="absolute -bottom-6 -left-6 bg-white border border-gray-100 rounded-2xl p-4 shadow-xl flex items-center gap-3 animate-bounce-slow">
              <div className="bg-emerald-50 text-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center font-extrabold text-lg">
                ★
              </div>
              <div>
                <p className="text-xs text-gray-400 font-medium tracking-wide uppercase leading-none mb-1">
                  {lang === 'en' ? 'ACCID ADIDOADIN' : 'AVEDJI ADIDOADIN'}
                </p>
                <p className="font-extrabold text-brand-950 text-sm leading-none font-display">
                  {lang === 'en' ? 'Modern Premises' : 'Locaux Modernes'}
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlight Stats Bar */}
        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 border-t border-gray-100 pt-10">
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white/50 backdrop-blur-sm border border-gray-100/80 p-5 rounded-2xl flex items-center gap-4 hover:shadow-md transition-all"
            >
              <div className="bg-brand-50 text-brand-600 p-3.5 rounded-xl">
                <stat.icon className="w-6 h-6" />
              </div>
              <div className="text-left">
                <div className="text-2xl font-extrabold text-brand-950 font-display leading-none mb-1">
                  {stat.value}
                </div>
                <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  {lang === 'en' ? stat.label.en : stat.label.fr}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
