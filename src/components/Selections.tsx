import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface SelectionsProps {
  lang: 'en' | 'fr';
}

export default function Selections({ lang }: SelectionsProps) {
  const sectionData = {
    badge: { en: 'Why Choose Us', fr: 'Pourquoi Nous Choisir' },
    title: { en: 'Our Selections', fr: 'Nos Sélections' },
    desc: {
      en: 'We are committed to delivering the highest caliber of bilingual education, professional certification prep, and authorized corporate language training in Lomé. Discover our pathways.',
      fr: 'Nous nous engageons à fournir le plus haut niveau d’éducation bilingue, de préparation aux examens officiels et de formation professionnelle continue au Togo.'
    },
    cards: [
      {
        title: { en: 'Industry Recognition', fr: 'Reconnaissance Officielle' },
        desc: {
          en: 'Our language assessments are universally aligned with international benchmarks and recognized by regional bodies.',
          fr: 'Nos évaluations de niveau et certificats sont alignés sur les standards internationaux (CECRL) reconnus partout.'
        },
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
        isDark: false,
      },
      {
        title: { en: 'Competitive Advantage', fr: 'Avantage Compétitif' },
        desc: {
          en: 'Accelerate your career with customized executive workshops and interactive language training suites.',
          fr: 'Propulsez votre carrière avec nos ateliers d’immersion active et nos cabinets linguistiques de pointe.'
        },
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
        isDark: true,
      },
      {
        title: { en: 'Commit To Professionalism', fr: 'Engagement Professionnel' },
        desc: {
          en: 'Learn from highly qualified certified native professors and professional legal translators.',
          fr: 'Apprenez aux côtés d’experts chevronnés, de professeurs natifs et de traducteurs-interprètes agréés.'
        },
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop',
        isDark: false,
      }
    ]
  };

  return (
    <section className="py-24 bg-[#f4effc] text-slate-900 relative overflow-hidden">
      {/* Subtle decorative curves to emulate the mockup wave context */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-violet-200/20 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-violet-100/30 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <div className="lg:col-span-6 text-left">
            <span className="text-violet-700 bg-violet-100 text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full uppercase inline-block mb-4">
              {lang === 'en' ? sectionData.badge.en : sectionData.badge.fr}
            </span>
            <h2 className="text-3xl sm:text-4.5xl font-black text-slate-950 tracking-tight font-display leading-tight">
              {lang === 'en' ? sectionData.title.en : sectionData.title.fr}
            </h2>
          </div>
          <div className="lg:col-span-6 text-left lg:text-right">
            <p className="text-sm text-slate-500 max-w-xl lg:ml-auto leading-relaxed font-medium">
              {lang === 'en' ? sectionData.desc.en : sectionData.desc.fr}
            </p>
          </div>
        </div>

        {/* Three Column Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectionData.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.15 }}
              className={`flex flex-col justify-between rounded-[2rem] p-6 sm:p-8 transition-transform duration-300 hover:-translate-y-1 shadow-md ${
                card.isDark 
                  ? 'bg-slate-950 text-white' 
                  : 'bg-[#e9e3f8] text-slate-900 border border-violet-100'
              }`}
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-lg sm:text-xl font-black tracking-tight leading-tight">
                    {lang === 'en' ? card.title.en : card.title.fr}
                  </h3>
                  <div className={`p-2 rounded-full shrink-0 ${
                    card.isDark ? 'bg-white/10 text-white' : 'bg-slate-950/5 text-slate-950'
                  }`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className={`text-xs leading-relaxed mb-6 font-medium ${
                  card.isDark ? 'text-slate-400' : 'text-slate-600'
                }`}>
                  {lang === 'en' ? card.desc.en : card.desc.fr}
                </p>
              </div>

              {/* Card Visual Image below content */}
              <div className="h-44 sm:h-48 overflow-hidden rounded-2xl w-full">
                <img
                  src={card.image}
                  alt={lang === 'en' ? card.title.en : card.title.fr}
                  className="w-full h-full object-cover grayscale-10 transition-transform duration-500 hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
