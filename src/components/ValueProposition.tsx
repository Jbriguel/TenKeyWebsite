import React from 'react';
import { Check } from 'lucide-react';
import { motion } from 'motion/react';

interface ValuePropositionProps {
  lang: 'en' | 'fr';
}

export default function ValueProposition({ lang }: ValuePropositionProps) {
  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-slate-50 rounded-full blur-3xl pointer-events-none opacity-40"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Side: Mockup Image and Animated Floating Overview Card */}
          <div className="lg:col-span-5 relative">
            {/* The main laptop work image */}
            <div className="relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/3] sm:aspect-[1.3] lg:aspect-[1.1] bg-slate-100 border border-slate-100">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800"
                alt="Professional coaching and laptop work"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply"></div>
            </div>

            {/* Floating Performance Overview Card - Perfect pixel match of the mockup overlay */}
            <motion.div
              initial={{ opacity: 0, y: 30, x: -20 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="absolute top-6 left-6 bg-white/95 backdrop-blur-md rounded-2xl p-4 sm:p-5 shadow-2xl border border-slate-100/80 max-w-[240px] sm:max-w-[290px] text-left"
            >
              <h4 className="text-[10px] sm:text-xs font-black text-slate-900 tracking-tight mb-3 uppercase">
                {lang === 'en' ? 'Language Performance' : 'Suivi des Performances'}
              </h4>
              
              <div className="space-y-3">
                {/* Row 1 */}
                <div>
                  <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-extrabold text-slate-500 mb-1">
                    <span>{lang === 'en' ? 'Fluency Boost' : 'Gain d’Aisance'}</span>
                    <span className="text-slate-900 font-black">75.2%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '75.2%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="h-full bg-[#0a5c36]" 
                    />
                  </div>
                </div>

                {/* Row 2 */}
                <div>
                  <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-extrabold text-slate-500 mb-1">
                    <span>{lang === 'en' ? 'Vocabulary Range' : 'Vocabulaire Acquis'}</span>
                    <span className="text-slate-900 font-black">56.7%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '56.7%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.4 }}
                      className="h-full bg-[#0a5c36]" 
                    />
                  </div>
                </div>

                {/* Row 3 */}
                <div>
                  <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-extrabold text-slate-500 mb-1">
                    <span>{lang === 'en' ? 'Grammar Accuracy' : 'Précision Grammaire'}</span>
                    <span className="text-slate-900 font-black">48.6%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '48.6%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      className="h-full bg-[#0a5c36]" 
                    />
                  </div>
                </div>

                {/* Row 4 */}
                <div>
                  <div className="flex justify-between items-center text-[9px] sm:text-[10px] font-extrabold text-slate-500 mb-1">
                    <span>{lang === 'en' ? 'Exam Readiness' : 'Préparation Examen'}</span>
                    <span className="text-slate-900 font-black">39.7%</span>
                  </div>
                  <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: '39.7%' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.6 }}
                      className="h-full bg-[#0a5c36]" 
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Side: Copy, bullet list grid, and key counters from mockup */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <span className="text-accent-600 font-black text-[10px] uppercase tracking-widest bg-accent-50/80 border border-accent-100/50 px-3 py-1 rounded-full inline-block mb-4 self-start">
              {lang === 'en' ? 'BEYOND AN ACADEMY' : 'PLUS QU’UNE SIMPLE ACADÉMIE'}
            </span>
            
            <h2 className="text-3xl sm:text-4xl lg:text-[2.5rem] font-black text-slate-900 tracking-tight font-display mb-5 leading-tight">
              {lang === 'en' 
                ? 'Customer-Driven Solutions with TEN KEY' 
                : 'Des Solutions Axées Client avec TEN KEY'}
            </h2>
            
            <p className="text-sm text-slate-500 leading-relaxed mb-8 font-medium max-w-2xl">
              {lang === 'en'
                ? 'At TEN KEY, we focus on delivering tailored language solutions that meet your career and academic goals. With advanced immersion methodologies and certified expert coaching, we help individuals and organizations build stronger global relationships.'
                : 'Chez TEN KEY, nous nous concentrons sur la fourniture de solutions linguistiques et de formation sur mesure qui répondent à vos objectifs. Grâce à des méthodes d’immersion avancées et un coaching d’experts, nous aidons les professionnels et les étudiants à renforcer leurs compétences internationales.'}
            </p>

            {/* Bullet point checklist grid exactly like mockup */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6 mb-10">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0a5c36] flex items-center justify-center text-white shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  {lang === 'en' ? 'Personalized Engagement' : 'Accompagnement Personnalisé'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0a5c36] flex items-center justify-center text-white shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  {lang === 'en' ? 'Seamless Integration' : 'Intégration Transparente'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0a5c36] flex items-center justify-center text-white shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  {lang === 'en' ? 'Smart Data Analytics' : 'Analyse de Progression'}
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#0a5c36] flex items-center justify-center text-white shrink-0">
                  <Check className="w-3.5 h-3.5 stroke-[3]" />
                </div>
                <span className="text-xs sm:text-sm font-bold text-slate-800">
                  {lang === 'en' ? '24/7 Customer Support' : 'Support Client 24/7'}
                </span>
              </div>
            </div>

            {/* Three key statistical counters at bottom from mockup */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-100">
              <div>
                <div className="text-2xl sm:text-3.5xl font-black text-slate-900 font-display mb-1">
                  200+
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-500 leading-snug">
                  {lang === 'en' ? 'Business Partners' : 'Partenaires d’Affaires'}
                </div>
              </div>
              
              <div>
                <div className="text-2xl sm:text-3.5xl font-black text-slate-900 font-display mb-1">
                  30K+
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-500 leading-snug">
                  {lang === 'en' ? 'Satisfied Customers' : 'Apprenants Satisfaits'}
                </div>
              </div>

              <div>
                <div className="text-2xl sm:text-3.5xl font-black text-slate-900 font-display mb-1">
                  10+
                </div>
                <div className="text-[10px] sm:text-xs font-bold text-slate-500 leading-snug">
                  {lang === 'en' ? 'Years of Excellence' : 'Années d’Excellence'}
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
