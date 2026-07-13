import React from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight } from 'lucide-react';

interface HeroProps {
  lang: string;
  onGetStarted: () => void;
  onLearnMore: () => void;
}

export default function Hero({ lang, onGetStarted, onLearnMore }: HeroProps) {
  const bgImageSrc = '/src/assets/images/corporate_hero_bg_1783686207302.jpg';
  const { scrollY } = useScroll();
  const bgY = useTransform(scrollY, [0, 1000], [0, 180]);

  return (
    <section className="relative overflow-hidden bg-brand-600 w-full min-h-screen flex flex-col justify-center">
      <motion.div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('${bgImageSrc}')`,
          y: bgY,
          scale: 1.1,
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/30 pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-600/15 rounded-full filter blur-3xl pointer-events-none animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-50/5 rounded-full filter blur-3xl pointer-events-none"></div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-40 lg:pt-44 xl:pt-48 pb-28 sm:pb-36 lg:pb-44">
        <div className="max-w-3xl text-left text-white">

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black tracking-tight leading-[1.1] mb-6 font-display"
          >
            {/* {lang === 'en' ? (
                  <>
                    Master Business English <br />
                    <span className="text-accent-500">for Meetings & Missions.</span>
                  </>
                ) : (
                  <>
                    Maîtrisez l'Anglais des Affaires <br />
                    <span className="text-accent-500">pour vos Réunions & Missions.</span>
                  </>
                )} */}

            {lang === 'en' ? (
              <>
                Corporate Language Excellence <br />
                <span className="text-accent-500">for Executives and Diplomats.</span>
              </>
            ) : (
              <>
                L'Excellence Linguistique <br />
                <span className="text-accent-500">au Service des Cadres et Diplomates.</span>
              </>
            )}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed mb-8 font-medium"
          >
            {lang === 'en'
              ? 'At TEN KEY in Lomé, we train executives, diplomats, and professionals to speak and write with clarity. Flexible midday and evening schedules, native trainers, and certified exam preparation.'
              : "À TEN KEY à Lomé, nous formons cadres, diplomates et professionnels à parler et écrire avec clarté. Horaires midi et soir, formateurs natifs et préparation certifiante aux examens internationaux."}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={onGetStarted}
              className="bg-accent-500 hover:bg-accent-600 text-white font-black text-xs sm:text-sm px-8 py-4 rounded-xl shadow-lg shadow-accent-950/25 hover:shadow-accent-500/20 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
            >
              <span>{lang === 'en' ? 'Our Programs' : 'Nos Programmes'}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={onLearnMore}
              className="bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-black text-xs sm:text-sm px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-white/10"
            >
              <span>{lang === 'en' ? 'Explore our services' : 'Découvrir nos services'}</span>
            </button>
          </motion.div>
        </div>
      </div>

      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5 text-white/50 hover:text-white transition-colors cursor-pointer"
        onClick={() => {
          const element = document.getElementById('overview');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      >
        <span className="text-[9px] font-black tracking-widest uppercase">{lang === 'en' ? 'SCROLL' : 'DÉFILER'}</span>
        <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center p-1">
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-1 bg-accent-500 rounded-full"
          />
        </div>
      </div>

    </section>
  );
}
