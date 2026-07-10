import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, Star, Users, Flame, BookOpen, Target } from 'lucide-react';

interface AboutProps {
  lang: 'en' | 'fr';
}

export default function About({ lang }: AboutProps) {
  const pillars = [
    {
      title: { en: 'Differentiated Pedagogy', fr: 'Pédagogie Différenciée' },
      desc: {
        en: 'We do not believe in one-size-fits-all. Every student undergoes an active level assessment and receives custom coursework aligned with their specific profession or academic track.',
        fr: "Nous n'appliquons pas de méthode uniforme. Chaque apprenant bénéficie d'un suivi personnalisé et de supports de cours adaptés à ses besoins professionnels ou académiques."
      },
      icon: BookOpen
    },
    {
      title: { en: 'Immersive Learning', fr: 'Immersion Interactive' },
      desc: {
        en: 'Our modern classrooms focus entirely on oral practice, live debates, and interactive roleplaying scenarios to build speaking confidence fast.',
        fr: 'Nos salles modernes sont conçues pour privilégier la communication orale, les débats et les mises en situation réelles afin d\'accélérer votre aisance.'
      },
      icon: Flame
    },
    {
      title: { en: 'Certified Native Trainers', fr: 'Formateurs Certifiés' },
      desc: {
        en: 'Learn from highly qualified trainers and native speakers who bring rich cultural experiences and certified international expertise (TOEFL/IELTS coachings).',
        fr: 'Bénéficiez de l\'accompagnement d\'experts certifiés et de locuteurs natifs possédant une solide expérience de la préparation aux tests internationaux.'
      },
      icon: Users
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-500 font-extrabold text-xs uppercase tracking-widest bg-accent-50 px-3 py-1.5 rounded-full border border-accent-100">
            {lang === 'en' ? 'WHO WE ARE' : 'QUI SOMMES-NOUS'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 mt-4 mb-5 tracking-tight font-display">
            {lang === 'en' ? 'The Language Learning Reference in Lomé' : 'La Référence de l’Apprentissage de Langues à Lomé'}
          </h2>
          <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mb-5"></div>
        </div>

        {/* Brand Mission & Visual Pillars */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-16">
          {/* Mission Text */}
          <div className="lg:col-span-6 text-left space-y-6">
            <h3 className="text-xl sm:text-2xl font-bold text-brand-950 font-display">
              {lang === 'en'
                ? 'Empowering African Students and Professionals for Global Opportunities'
                : 'Donner aux étudiants et cadres togolais les clés de la réussite internationale'}
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              {lang === 'en'
                ? 'TEN KEY Centre de Formations was founded with a single mission: to break linguistic barriers for West African youth and working professionals. Located in the heart of Lomé, we provide cutting-edge language instruction using internationally recognized techniques.'
                : 'TEN KEY Centre de Formations est né avec une mission claire : briser les barrières linguistiques pour la jeunesse et les professionnels d’Afrique de l’Ouest. Situé au cœur de Lomé, nous offrons un enseignement moderne combinant rigueur académique et pratique immersive.'}
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              {lang === 'en'
                ? 'Whether you need to clear the TOEFL to study abroad, coordinate international business deals in English, translate professional contracts, or give your children an active start with Vacances Utiles, we have the ideal modular curriculum for you.'
                : 'Que vous deviez réussir le TOEFL pour étudier à l\'étranger, négocier des contrats internationaux, faire traduire des documents certifiés, ou offrir à vos enfants des vacances utiles, nous disposons du module idéal adapté à votre rythme.'}
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <div className="flex items-center gap-2 text-xs font-bold text-brand-800 bg-brand-50 px-4 py-2.5 rounded-xl border border-brand-100/60">
                <Target className="w-4 h-4 text-brand-600 shrink-0" />
                <span>{lang === 'en' ? '100% Client-Oriented' : '100% Orienté Résultat'}</span>
              </div>
              <div className="flex items-center gap-2 text-xs font-bold text-brand-800 bg-brand-50 px-4 py-2.5 rounded-xl border border-brand-100/60">
                <Star className="w-4 h-4 text-brand-600 shrink-0" />
                <span>{lang === 'en' ? 'Approved Curriculums' : 'Programmes Agréés'}</span>
              </div>
            </div>
          </div>

          {/* Pillars Cards */}
          <div className="lg:col-span-6 space-y-5">
            {pillars.map((pil, idx) => {
              const Icon = pil.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="bg-gray-50/50 border border-gray-100 p-5 rounded-2xl flex gap-4 text-left hover:shadow-md transition-shadow"
                >
                  <div className="bg-brand-600 text-white p-3.5 rounded-xl h-12 w-12 flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-brand-950 text-sm font-display mb-1.5">
                      {lang === 'en' ? pil.title.en : pil.title.fr}
                    </h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      {lang === 'en' ? pil.desc.en : pil.desc.fr}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
