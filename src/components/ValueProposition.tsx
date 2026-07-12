import React from 'react';
import { Target, Users, Clock, Award } from 'lucide-react';
import { motion } from 'motion/react';

interface ValuePropositionProps {
  lang: string;
}

export default function ValueProposition({ lang }: ValuePropositionProps) {
  const features = [
    {
      icon: Target,
      en: 'Personalized Engagement',
      fr: 'Accompagnement Personnalisé',
    },
    {
      icon: Users,
      en: 'Seamless Integration',
      fr: 'Intégration Transparente',
    },
    {
      icon: Clock,
      en: 'Smart Data Analytics',
      fr: 'Analyse de Progression',
    },
    {
      icon: Award,
      en: 'Certified Expert Coaching',
      fr: 'Coaching par Experts Certifiés',
    },
  ];

  const stats = [
    { value: '200+', en: 'Business Partners', fr: 'Partenaires d’Affaires' },
    { value: '30K+', en: 'Satisfied Customers', fr: 'Apprenants Satisfaits' },
    { value: '10+', en: 'Years of Excellence', fr: 'Années d’Excellence' },
  ];

  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-3xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight font-display mb-5">
            {lang === 'en' 
              ? 'Why Organizations Trust TEN KEY' 
              : 'Pourquoi les Entreprises Font Confiance à TEN KEY'}
          </h2>
          
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            {lang === 'en'
              ? 'We deliver tailored language solutions that meet your career and academic goals, with certified expert coaching and advanced immersion methodologies.'
              : 'Nous fournissons des solutions linguistiques sur mesure qui répondent à vos objectifs professionnels et académiques, avec un coaching d’experts certifiés.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {features.map((feat, idx) => {
            const IconComponent = feat.icon;
            return (
              <motion.div
                key={feat.en}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="flex items-start gap-4 bg-white rounded-2xl p-6 border border-slate-100"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                  <IconComponent className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-extrabold font-display text-slate-900 mb-1">
                    {lang === 'en' ? feat.en : feat.fr}
                  </h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">
                    {lang === 'en'
                      ? 'Built into every program to guarantee measurable outcomes.'
                      : 'Intégré à chaque programme pour garantir des résultats mesurables.'}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-10 border-t border-slate-200">
          {stats.map((stat, idx) => (
            <motion.div
              key={stat.en}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-center"
            >
              <div className="text-4xl sm:text-5xl font-black text-slate-950 font-display mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-slate-500">
                {lang === 'en' ? stat.en : stat.fr}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
