import React from 'react';
import { motion } from 'motion/react';
import { useOutletContext } from 'react-router-dom';
import { Clock, TrendingUp, Users, Award, ArrowRight } from 'lucide-react';
import type { AppContextValue } from '../App';
import Hero from '../components/Hero';
import Selections from '../components/Selections';
import TrustedExpertise from '../components/TrustedExpertise';
import TestimonialsFaq from '../components/TestimonialsFaq';
import FaqSection from '../components/FaqSection';
import CtaSection from '../components/CtaSection'; 
import TrustedExpertise2 from '../components/TrustedExpertise2';

export default function HomePage() {
  const {
    lang,
    onRegisterRedirect,
    onLearnMore,
  } = useOutletContext<AppContextValue>();
  const stats = [
    { value: '10+', label: lang === 'en' ? 'Years of Experience' : "Années d'Expérience", icon: Clock },
    { value: '98%', label: lang === 'en' ? 'Success Rate' : 'Taux de Réussite', icon: TrendingUp },
    { value: '2,500+', label: lang === 'en' ? 'Professionals Trained' : 'Professionnels Formés', icon: Users },
    { value: '100%', label: lang === 'en' ? 'Native Trainers' : 'Formateurs Natifs', icon: Award },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <Hero lang={lang} onGetStarted={() => onRegisterRedirect()} onLearnMore={onLearnMore} />

      {/* Authority Metrics */}
      <section className="relative z-20 -mt-20 lg:-mt-28 mx-4 sm:mx-6 lg:mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white border border-slate-100 rounded-2xl shadow-xl shadow-slate-900/5 p-6 sm:p-8"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: 'easeOut' }}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-brand-50 text-brand-700 mb-3 group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-5 h-5" />
                </div>
                <div className="text-2xl sm:text-3xl font-black text-brand-950 font-display mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] font-bold text-slate-500 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Our Setup in Lomé */}
      <motion.section
        id="overview"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className="py-20 sm:py-28 bg-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-brand-600 text-[10px] font-black tracking-widest uppercase">
                  {lang === 'en' ? 'Our Setup in Lomé' : 'Notre Installation à Lomé'}
                </span>
                <span className="w-16 h-0.5 bg-brand-600" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-brand-900 font-display tracking-tight leading-tight mb-6">
                {lang === 'en'
                  ? 'A Practical Space for Professionals'
                  : 'Un Espace Pratique pour Professionnels'}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6 font-medium">
                {lang === 'en'
                  ? 'Our classrooms at Avedji/Adidoadin are set up for real work scenarios: role-play negotiations, presentation practice, document translation, and mock exams. Classes run on schedule thanks to backup power.'
                  : 'Nos salles à Avedji/Adidoadin sont aménagées pour des scénarios de travail concrets : jeux de rôle en négociation, pratique de présentations, traduction de documents et examens blancs. Les cours se tiennent à l’heure grâce à l’énergie de secours.'}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-8 font-medium">
                {lang === 'en'
                  ? 'Whether you are preparing for a TOEFL deadline, a diplomatic posting, or a contract in English, the environment is built around your objectives and your schedule.'
                  : 'Vous préparez une échéance TOEFL, une affectation diplomatique ou un contrat en anglais : l’environnement est construit autour de vos objectifs et de votre emploi du temps.'}
              </p>

              <button
                onClick={onLearnMore}
                className="bg-brand-600 hover:bg-brand-700 text-white font-black text-xs px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 group cursor-pointer shadow-md"
              >
                <span>{lang === 'en' ? 'See our programs' : 'Voir nos programmes'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="lg:col-span-6 grid grid-cols-12 gap-3.5">
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="col-span-7 relative group rounded-3xl overflow-hidden shadow-lg aspect-[3/4]"
              >
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                  alt="Students collaborating at Lomé language academy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent" />
                <div className="absolute bottom-4 left-4">
                  <p className="text-[10px] font-black uppercase text-brand-500 tracking-wider">Lomé Campus</p>
                  <p className="text-xs sm:text-sm font-extrabold text-white">Executive Classrooms</p>
                </div>
              </motion.div>

              <div className="col-span-5 flex flex-col gap-3.5">
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="relative group rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-100"
                >
                  <img
                    src="https://images.unsplash.com/photo-1457369804613-52c61a468e7d?q=80&w=800&auto=format&fit=crop"
                    alt="Translation cabin conference"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
                  <div className="absolute bottom-3 left-3">
                    <p className="text-[9px] font-black uppercase text-brand-500 tracking-wider">VIP Cabinet</p>
                    <p className="text-[11px] font-bold text-white">Interpretation</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-100px' }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="relative group rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-50"
                >
                  <img
                    src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=800&auto=format&fit=crop"
                    alt="Adaptive CEFR learning path background"
                    className="w-full h-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 text-left">
                    <p className="text-[9px] font-black uppercase text-brand-900 tracking-wider">Structured</p>
                    <p className="text-[11px] font-extrabold text-brand-900">CEFRL Pathways</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Core Selections */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <Selections lang={lang} />
      </motion.div>

      {/* Trusted Expertise */}
      {/* <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <TrustedExpertise lang={lang} />
      </motion.div> */}

       <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        {/* <TrustedExpertise2 currentLang={lang}  /> */}
        <TrustedExpertise2 lang={lang} />
      </motion.div>


      {/* Testimonials */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <TestimonialsFaq lang={lang} />
      </motion.div>

      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <FaqSection lang={lang} />
      </motion.div>

      {/* Call-to-Action */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <CtaSection lang={lang} onRegisterClick={() => onRegisterRedirect()} />
      </motion.div>

      {/* CTA */}
    </div>
  );
}
