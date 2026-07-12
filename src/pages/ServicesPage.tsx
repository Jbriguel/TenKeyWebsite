import { Sparkles, CheckCircle, Award } from 'lucide-react';
import Services from '../components/Services';
import ValueProposition from '../components/ValueProposition';
import RegistrationForm from '../components/RegistrationForm';
import { ExecutiveLuxuryCTA } from '../components/CoolCTAs';

interface ServicesPageProps {
  lang: 'en' | 'fr';
  onRegisterRedirect: (moduleName?: string) => void;
  selectedModuleName: string;
  setSelectedModuleName: (name: string) => void;
}

export default function ServicesPage({
  lang,
  onRegisterRedirect,
  selectedModuleName,
  setSelectedModuleName,
}: ServicesPageProps) {
  return (
    <>
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-brand-950 text-white overflow-hidden border-b border-brand-900/40">
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-5 left-10 w-[300px] h-[300px] bg-brand-500/10 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 bg-brand-900/80 border border-brand-800 text-accent-400 text-xs font-black tracking-widest px-4 py-2 rounded-full uppercase mb-6 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-accent-500" />
                <span>{lang === 'en' ? 'CHOOSE YOUR PATHWAY' : 'VOTRE PARCOURS PROFESSIONNEL'}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-white font-display mb-6">
                {lang === 'en' ? 'Our Specialized' : 'Nos Modules de'}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-amber-300">
                  {lang === 'en' ? 'Training Modules' : 'Formation Spécialisés'}
                </span>
              </h1>

              <p className="text-sm sm:text-base text-brand-100/70 leading-relaxed font-semibold mb-8 max-w-xl">
                {lang === 'en'
                  ? 'From General English to high-level Translation and Interpretation Cabinets in Togo. Explore our accredited corporate curriculum highlights below.'
                  : 'De l\u2019Anglais Général aux cabinets de Traduction et d\u2019Interprétation de haut niveau au Togo. Découvrez nos détails de cours et programmes d\u2019excellence.'}
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                {[
                  lang === 'en' ? 'Accredited Curriculum' : 'Cursus Officiel Agréé',
                  lang === 'en' ? '100% Native Speakers' : 'Professeurs 100% Natifs',
                  lang === 'en' ? 'Corporate Executive Focus' : 'Spécialisation Cadres & Leaders',
                  lang === 'en' ? 'Flexible Modern Schedules' : 'Horaires Flexibles Adaptés'
                ].map((bullet, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle className="w-4 h-4 text-accent-400 shrink-0" />
                    <span className="text-xs font-bold text-brand-100">{bullet}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onRegisterRedirect()}
                  className="bg-accent-500 hover:bg-accent-600 text-brand-950 font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                >
                  {lang === 'en' ? 'Book Placement Test' : 'Réserver Mon Test'}
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[400px] aspect-square">
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-800/40 relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
                    alt="Executive classroom group"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/10"></div>
                </div>

                <div className="absolute -bottom-6 -right-6 bg-brand-900/90 backdrop-blur-md border border-brand-800 text-white rounded-2xl p-4 shadow-2xl z-20 flex items-center gap-3.5 max-w-[200px] text-left">
                  <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-400 flex items-center justify-center shrink-0">
                    <Award className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <p className="text-xs font-black font-display text-accent-400">98%</p>
                    <p className="text-[9px] font-bold text-brand-100 leading-normal">
                      {lang === 'en' ? 'TOEFL & Exam Success Rate' : 'Réussite aux Examens Officiels'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Services
        lang={lang}
        onSelectService={(name) => onRegisterRedirect(name)}
      />

      <ValueProposition lang={lang} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <ExecutiveLuxuryCTA lang={lang} onAction={onRegisterRedirect} />
      </div>

      <div id="contact-form-section">
        <RegistrationForm
          lang={lang}
          selectedModuleName={selectedModuleName}
          setSelectedModuleName={setSelectedModuleName}
        />
      </div>
    </>
  );
}
