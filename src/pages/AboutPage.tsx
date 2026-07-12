import { Compass, HeartHandshake, BookOpen, Award } from 'lucide-react';
import About from '../components/About';
import TestimonialsFaq from '../components/TestimonialsFaq';
import LocationMap from '../components/LocationMap';
import { DiplomaticShowcaseCTA } from '../components/CoolCTAs';

interface AboutPageProps {
  lang: 'en' | 'fr';
  onRegisterRedirect: (moduleName?: string) => void;
}

export default function AboutPage({ lang, onRegisterRedirect }: AboutPageProps) {
  return (
    <>
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-brand-950 text-white overflow-hidden border-b border-brand-900/40">
        <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-5 right-10 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 bg-brand-900/80 border border-brand-800 text-accent-400 text-xs font-black tracking-widest px-4 py-2 rounded-full uppercase mb-6 shadow-sm">
                <Compass className="w-3.5 h-3.5 text-accent-500" />
                <span>{lang === 'en' ? 'WHO WE ARE' : 'QUI SOMMES-NOUS'}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-white font-display mb-6">
                {lang === 'en' ? 'Pedagogy &' : 'Pédagogie &'}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-amber-300">
                  {lang === 'en' ? 'Native Excellence' : 'Excellence Native'}
                </span>
              </h1>

              <p className="text-sm sm:text-base text-brand-100/70 leading-relaxed font-semibold mb-8 max-w-xl">
                {lang === 'en'
                  ? 'TEN KEY is Lomé\u2019s leading bilingual training ecosystem and certified translation hub. We train Togo\u2019s elite diplomats, corporate leaders, and professional translators.'
                  : 'TEN KEY est le premier écosystème bilingue et cabinet de traduction certifié de Lomé. Nous formons les cadres, diplomates et traducteurs d\u2019élite de la sous-région.'}
              </p>

              <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex items-center gap-2 bg-brand-900/50 border border-brand-800 rounded-xl px-4 py-2.5">
                  <Award className="w-4.5 h-4.5 text-accent-400 shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] font-extrabold text-brand-400 leading-none mb-0.5 uppercase tracking-wider">{lang === 'en' ? 'FOUNDED IN' : 'FONDÉ EN'}</p>
                    <p className="text-xs font-black text-white">2012</p>
                  </div>
                </div>

                <div className="flex items-center gap-2 bg-brand-900/50 border border-brand-800 rounded-xl px-4 py-2.5">
                  <HeartHandshake className="w-4.5 h-4.5 text-accent-400 shrink-0" />
                  <div className="text-left">
                    <p className="text-[10px] font-extrabold text-brand-400 leading-none mb-0.5 uppercase tracking-wider">{lang === 'en' ? 'ACCREDITATION' : 'AGRÉMENT'}</p>
                    <p className="text-xs font-black text-white">{lang === 'en' ? 'Official / Legal Togo' : 'Officiel / État Togolais'}</p>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onRegisterRedirect()}
                  className="bg-accent-500 hover:bg-accent-600 text-brand-950 font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                >
                  {lang === 'en' ? 'Read Achievements' : 'Découvrir nos Réussites'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-square">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-800/40 relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop"
                    alt="Bilingual workshop discussion"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/10"></div>
                </div>

                <div className="absolute -bottom-6 -left-6 bg-brand-900/90 backdrop-blur-md border border-brand-800 text-white rounded-2xl p-4 shadow-2xl z-20 flex items-center gap-3.5 max-w-[200px] text-left">
                  <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-400 flex items-center justify-center shrink-0">
                    <BookOpen className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <p className="text-xs font-black font-display text-accent-400">3,000+</p>
                    <p className="text-[9px] font-bold text-brand-100 leading-normal">
                      {lang === 'en' ? 'Bilingual Leaders Trained' : 'Diplômés et Cadres Formés'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <About lang={lang} />

      <TestimonialsFaq lang={lang} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
        <DiplomaticShowcaseCTA lang={lang} onAction={(actName) => onRegisterRedirect(actName || 'About Page - Diplomatic Audit')} />
      </div>

      <LocationMap lang={lang} />
    </>
  );
}
