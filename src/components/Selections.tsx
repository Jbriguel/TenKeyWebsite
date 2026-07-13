import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface SelectionsProps {
  lang: string;
}

export default function Selections({ lang }: SelectionsProps) {
  const sectionData = {
    badge: { en: 'Why TEN KEY', fr: 'Pourquoi TEN KEY' },
    title: { en: 'What We Deliver', fr: 'Ce Que Nous Apportons' },
    desc: {
      en: 'Practical language training built around real schedules in Lomé. Midday and evening sessions for working professionals, certified exam prep, and sworn translation services.',
      fr: 'Des formations pratiques adaptées aux vrais rythmes de Lomé. Sessions de midi et de soir pour professionnels actifs, préparation certifiante aux examens et traductions assermentées.'
    },
    cards: [
      {
        title: { en: 'Recognized Standards', fr: 'Des Standards Reconnus' },
        desc: {
          en: 'Our courses follow the CEFR framework and prepare you for TOEFL, IELTS, TOEIC, TEF, and TCF with official practice patterns.',
          fr: 'Nos cours suivent le cadre CECRL et préparent aux examens TOEFL, IELTS, TOEIC, TEF et TCF avec des sujets d’entraînement officiels.'
        },
        image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
        isDark: false,
      },
      {
        title: { en: 'Schedules That Fit', fr: 'Des Horaires Qui Collent' },
        desc: {
          en: 'Lunch-break and after-work classes so you do not have to choose between your job and your progress. VIP coaching is available on demand.',
          fr: 'Cours en pause déjeuner et après le travail pour ne pas choisir entre votre emploi et votre progression. Coaching VIP sur demande.'
        },
        image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
        isDark: true,
      },
      {
        title: { en: 'Trainers With Field Experience', fr: 'Formateurs D’Expérience Terrain' },
        desc: {
          en: 'Native and certified trainers who have worked with companies, ministries, and international organizations in West Africa.',
          fr: 'Formateurs natifs et certifiés ayant travaillé avec des entreprises, des ministères et des organisations internationales en Afrique de l’Ouest.'
        },
        image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=600&auto=format&fit=crop',
        isDark: false,
      }
    ]
  };

  return (
    <section className="py-24 bg-brand-50 text-brand-900 relative overflow-hidden">
      {/* Subtle decorative curves to emulate the mockup wave context */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-10 left-10 w-[400px] h-[400px] bg-brand-500/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 text-left"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="text-brand-600 text-[10px] font-black tracking-widest uppercase">
                {lang === 'en' ? sectionData.badge.en : sectionData.badge.fr}
              </span>
              <span className="w-16 h-0.5 bg-brand-600" />
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-brand-600 tracking-tight font-display leading-tight">
              {lang === 'en' ? sectionData.title.en : sectionData.title.fr}
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 text-left lg:text-right"
          >
            <p className="text-sm text-slate-500 max-w-xl lg:ml-auto leading-relaxed font-medium">
              {lang === 'en' ? sectionData.desc.en : sectionData.desc.fr}
            </p>
          </motion.div>
        </div>

        {/* Three Column Cards Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sectionData.cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.12, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -8, transition: { duration: 0.25, ease: 'easeOut' } }}
              className={`group flex flex-col justify-between rounded-[2rem] p-6 sm:p-8 shadow-md transition-shadow duration-300 hover:shadow-xl ${
                card.isDark
                  ? 'bg-brand-600 text-white border border-brand-800'
                  : 'bg-white text-brand-900 border border-brand-100'
              }`}
            >
              <div>
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-lg sm:text-xl font-black tracking-tight leading-tight font-display">
                    {lang === 'en' ? card.title.en : card.title.fr}
                  </h3>
                  <div className={`p-2 rounded-full shrink-0 transition-transform duration-300 group-hover:rotate-45 ${
                    card.isDark ? 'bg-white/10 text-white' : 'bg-brand-100 text-brand-600'
                  }`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <p className={`text-xs leading-relaxed mb-6 font-medium ${
                  card.isDark ? 'text-brand-100/70' : 'text-slate-500'
                }`}>
                  {lang === 'en' ? card.desc.en : card.desc.fr}
                </p>
              </div>

              {/* Card Visual Image below content */}
              <div className="h-44 sm:h-48 overflow-hidden rounded-2xl w-full">
                <img
                  src={card.image}
                  alt={lang === 'en' ? card.title.en : card.title.fr}
                  className="w-full h-full object-cover grayscale-10 transition-transform duration-700 group-hover:scale-110"
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
