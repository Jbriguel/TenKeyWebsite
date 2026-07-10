import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play, Clock } from 'lucide-react';
import Selections from './Selections';

interface AboutProps {
  lang: 'en' | 'fr';
}

export default function About({ lang }: AboutProps) {
  // Data for Section 2: Language Expertise You Can Count On
  const section2Data = {
    badge: { en: 'About Us', fr: 'À Propos de Nous' },
    title: { en: 'Language Expertise You Can Count On', fr: 'Une Expertise Linguistique de Confiance' },
    desc: {
      en: 'At TEN KEY, we focus on delivering tailored language solutions that meet your career and academic goals. With advanced immersion methodologies and certified expert coaching, we help individuals and organizations build stronger global relationships.',
      fr: 'Chez TEN KEY, nous concevons des solutions d’apprentissage sur-mesure pour vous aider à atteindre vos objectifs académiques et professionnels. Notre équipe d’experts vous accompagne vers la maîtrise bilingue.'
    },
  };

  const handleScrollToForm = () => {
    const element = document.getElementById('contact-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="w-full">
      {/* SECTION 1: Why Choose Us (Our Selections) */}
      <Selections lang={lang} />

      {/* SECTION 2: Language Expertise You Can Count On */}
      <section className="py-24 bg-white text-slate-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Header Row with Action Trigger buttons */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
            <div className="lg:col-span-6 text-left">
              <span className="text-violet-700 bg-violet-50 text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full uppercase inline-block mb-4">
                {lang === 'en' ? section2Data.badge.en : section2Data.badge.fr}
              </span>
              <h2 className="text-3xl sm:text-4.5xl font-black text-slate-950 tracking-tight font-display leading-tight">
                {lang === 'en' ? section2Data.title.en : section2Data.title.fr}
              </h2>
            </div>
            
            <div className="lg:col-span-6 text-left lg:text-right flex flex-col md:flex-row items-start md:items-center lg:justify-end gap-6">
              <p className="text-sm text-slate-500 max-w-md leading-relaxed font-medium text-left">
                {lang === 'en' ? section2Data.desc.en : section2Data.desc.fr}
              </p>
              
              <div className="flex items-center gap-3 shrink-0">
                <button
                  onClick={handleScrollToForm}
                  className="bg-slate-950 text-white font-black text-xs uppercase tracking-wider px-6 py-4 rounded-full shadow-lg transition-transform hover:scale-105 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  {lang === 'en' ? 'Learn More' : 'En Savoir Plus'} <ArrowUpRight className="w-4 h-4" />
                </button>
                
                {/* Micro Animated Play action loop to mimic the mockup */}
                <button 
                  onClick={handleScrollToForm}
                  className="w-12 h-12 rounded-full border border-slate-200 bg-slate-50 flex items-center justify-center text-slate-950 hover:bg-slate-100 hover:text-violet-600 transition-all shadow-sm shrink-0"
                >
                  <Play className="w-4 h-4 fill-slate-950 stroke-slate-950 ml-0.5" />
                </button>
              </div>
            </div>
          </div>

          {/* Bento-style Grid Layout */}
          <div className="grid grid-cols-12 gap-6 items-stretch">
            
            {/* Bento Card 1: Portrait close-up hands working */}
            <div className="col-span-12 md:col-span-6 lg:col-span-3 rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto min-h-[220px] shadow-sm border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop"
                alt="Intensive training and business planning"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Bento Card 2: Solid light violet - Years Experience */}
            <div className="col-span-12 md:col-span-6 lg:col-span-2 bg-[#e9e3f8] text-slate-950 rounded-3xl p-6 flex flex-col justify-between text-left shadow-sm">
              <div className="text-4xl sm:text-5xl font-black text-violet-800 font-display">
                14+
              </div>
              <div className="mt-4">
                <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                  {lang === 'en' ? 'Years Experience' : "Années d'Expérience"}
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed font-semibold">
                  {lang === 'en' 
                    ? 'Delivering elite bilingual instruction and authorized coaching in Lomé since 2012.' 
                    : 'Leader de l’apprentissage linguistique immersif et certifié au Togo depuis 2012.'}
                </p>
              </div>
            </div>

            {/* Bento Card 3: Micro White Badge card with clock and Happy Client tracker */}
            <div className="col-span-12 md:col-span-6 lg:col-span-2 bg-[#faf9fe] border border-slate-100 text-slate-950 rounded-3xl p-6 flex flex-col justify-between text-left shadow-sm relative overflow-hidden">
              <div className="w-8 h-8 rounded-lg bg-violet-100 text-violet-700 flex items-center justify-center shrink-0 mb-4">
                <Clock className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[9px] font-black uppercase tracking-wider text-slate-400 flex items-center gap-1">
                  {lang === 'en' ? 'Happy Client' : 'Apprenants Satisfaits'}
                </span>
                <div className="text-2xl sm:text-3xl font-black text-slate-950 font-display mt-1">
                  3,345+
                </div>
                <p className="text-[10px] text-slate-500 mt-1 leading-normal font-medium">
                  {lang === 'en' ? 'Students and professionals successfully certified.' : 'Diplomates, cadres et bacheliers formés avec succès.'}
                </p>
              </div>
            </div>

            {/* Bento Card 4: Solid light violet - Expert Coaches */}
            <div className="col-span-12 md:col-span-6 lg:col-span-2 bg-[#e9e3f8] text-slate-950 rounded-3xl p-6 flex flex-col justify-between text-left shadow-sm">
              <div className="text-4xl sm:text-5xl font-black text-violet-800 font-display">
                25
              </div>
              <div className="mt-4">
                <h4 className="text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1">
                  {lang === 'en' ? 'Expert Coaches' : 'Formateurs Experts'}
                </h4>
                <p className="text-[11px] text-slate-600 leading-relaxed font-semibold">
                  {lang === 'en' 
                    ? 'Native teachers, certified lecturers, and expert legal translators.' 
                    : 'Professeurs natifs qualifiés, bilingues et traducteurs-interprètes agréés.'}
                </p>
              </div>
            </div>

            {/* Bento Card 5: Gradient purple with overlapping avatars */}
            <div className="col-span-12 md:col-span-12 lg:col-span-3 bg-gradient-to-br from-violet-600 to-indigo-700 text-white rounded-3xl p-6 flex flex-col justify-between text-left shadow-lg relative overflow-hidden">
              {/* Overlapping Avatars Header mimicking mockup exactly */}
              <div className="flex items-center -space-x-2.5 mb-6">
                <img
                  className="w-8 h-8 rounded-full border-2 border-violet-600 object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=120&auto=format&fit=crop"
                  alt="Student 1"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-violet-600 object-cover"
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=120&auto=format&fit=crop"
                  alt="Student 2"
                  referrerPolicy="no-referrer"
                />
                <img
                  className="w-8 h-8 rounded-full border-2 border-violet-600 object-cover"
                  src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=120&auto=format&fit=crop"
                  alt="Student 3"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div>
                <h3 className="text-lg sm:text-xl font-black font-display tracking-tight leading-none text-white">
                  {lang === 'en' ? 'Get Start With Us' : 'Lancez-vous Avec Nous'}
                </h3>
                <p className="text-[11px] text-violet-100 leading-relaxed mt-2 font-medium">
                  {lang === 'en' 
                    ? 'Schedule a direct diagnostic interview or call to build your tailored linguistic curriculum.' 
                    : 'Inscrivez-vous maintenant pour réserver votre test d’évaluation et planifier vos cours.'}
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>
    </div>
  );
}
