import React from 'react';
import { ShieldAlert, TrendingUp, Sparkles, CheckCircle } from 'lucide-react';

interface ValuePropositionProps {
  lang: 'en' | 'fr';
}

export default function ValueProposition({ lang }: ValuePropositionProps) {
  return (
    <section className="py-24 bg-accent-600 text-white relative overflow-hidden">
      {/* Background Abstract Grid Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:16px_16px] opacity-10"></div>
      
      {/* Absolute label on the side */}
      <div className="absolute left-6 top-32 text-[110px] font-black text-white/10 select-none tracking-widest hidden xl:block origin-left -rotate-90">
        VALUE
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Modern Vertical Banner with text overlay */}
          <div className="lg:col-span-5 relative group rounded-3xl overflow-hidden shadow-2xl aspect-[4/5] bg-slate-900">
            <img
              src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80&w=400"
              alt="TEN KEY Lomé active academic success"
              className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent"></div>
            <div className="absolute bottom-6 left-6 text-left">
              <span className="bg-accent-500 text-white text-[9px] font-black tracking-wider px-2 py-0.5 rounded uppercase mb-1 inline-block">
                {lang === 'en' ? 'OUR PRIORITY' : 'NOTRE PRIORITÉ'}
              </span>
              <h4 className="text-sm font-black text-white">
                {lang === 'en' ? 'Learning Continuity Guaranteed' : 'Continuité d’Apprentissage Garantie'}
              </h4>
              <p className="text-[11px] text-slate-300 font-semibold mt-0.5">
                {lang === 'en' ? 'Lomé Campus - Adidoadin' : 'Campus de Lomé - Avedji Adroukpape'}
              </p>
            </div>
          </div>

          {/* Right Side: Bold value cards */}
          <div className="lg:col-span-7 text-left flex flex-col justify-center">
            <span className="text-white font-black text-[10px] uppercase tracking-widest bg-white/10 border border-white/20 px-3.5 py-1.5 rounded-full inline-block mb-4 self-start">
              {lang === 'en' ? 'BEYOND AN ACADEMY' : 'PLUS QU’UNE SIMPLE ACADÉMIE'}
            </span>
            <h2 className="text-3xl sm:text-4.5xl font-black text-white tracking-tight font-display mb-6 leading-tight">
              {lang === 'en' 
                ? 'TEN KEY – More Than Just a Language School' 
                : 'TEN KEY – Plus Qu’un Simple Centre de Formations'}
            </h2>
            <p className="text-xs sm:text-sm text-white/95 leading-relaxed mb-10 font-semibold max-w-2xl">
              {lang === 'en'
                ? 'We deploy high-impact training ecosystems, specialized corporate audits, and premium translation solutions to eliminate linguistic friction for executives and students.'
                : 'Nous déployons des solutions d’apprentissage intensives, des audits d’entreprises et un cabinet de traduction certifié pour éliminer définitivement les barrières linguistiques.'}
            </p>

            {/* Two Cards Column Grid (Exactly like NDC Energie mockup) */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              
              {/* Card 1: RISK REDUCTION */}
              <div className="bg-white text-slate-950 rounded-2xl p-6 shadow-xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center shrink-0">
                      <ShieldAlert className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-black tracking-tight text-slate-900 uppercase font-display">
                      {lang === 'en' ? 'RISK REDUCTION' : 'RÉDUCTION DES RISQUES'}
                    </h3>
                  </div>
                  <ul className="space-y-3.5">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                      <div className="text-left">
                        <h4 className="text-[11px] font-black text-slate-950">
                          {lang === 'en' ? 'Zero Interruption' : 'Zéro Interruption'}
                        </h4>
                        <p className="text-[10px] text-slate-500 leading-normal font-semibold">
                          {lang === 'en' ? 'Contractual progress monitoring.' : 'Progression pédagogique garantie et suivie.'}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-rose-500 mt-0.5 shrink-0" />
                      <div className="text-left">
                        <h4 className="text-[11px] font-black text-slate-950">
                          {lang === 'en' ? 'Simplicity First' : 'Simplicité Administrative'}
                        </h4>
                        <p className="text-[10px] text-slate-500 leading-normal font-semibold">
                          {lang === 'en' ? 'One dedicated officer for all modules.' : 'Un conseiller unique pour tous vos dossiers d’études.'}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Card 2: PERFORMANCE GAIN */}
              <div className="bg-white text-slate-950 rounded-2xl p-6 shadow-xl border border-white/10 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                      <TrendingUp className="w-5 h-5" />
                    </div>
                    <h3 className="text-xs sm:text-sm font-black tracking-tight text-slate-900 uppercase font-display">
                      {lang === 'en' ? 'PERFORMANCE GAIN' : 'GAIN DE PERFORMANCE'}
                    </h3>
                  </div>
                  <ul className="space-y-3.5">
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <div className="text-left">
                        <h4 className="text-[11px] font-black text-slate-950">
                          {lang === 'en' ? 'International Visibility' : 'Visibilité Internationale'}
                        </h4>
                        <p className="text-[10px] text-slate-500 leading-normal font-semibold">
                          {lang === 'en' ? 'Guaranteed TOEFL / IELTS scoring.' : 'Validation accélérée des scores TOEFL & IELTS.'}
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <div className="text-left">
                        <h4 className="text-[11px] font-black text-slate-950">
                          {lang === 'en' ? 'Operational Focus' : 'Efficacité Métier'}
                        </h4>
                        <p className="text-[10px] text-slate-500 leading-normal font-semibold">
                          {lang === 'en' ? 'Curriculums matched to your business.' : 'Vocabulaire calibré sur vos activités professionnelles.'}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
