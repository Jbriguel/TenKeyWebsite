import Hero from '../components/Hero';
import Selections from '../components/Selections';
import TrustedExpertise from '../components/TrustedExpertise';
import TestimonialsFaq from '../components/TestimonialsFaq';
import RegistrationForm from '../components/RegistrationForm';

interface HomePageProps {
  lang: 'en' | 'fr';
  onRegisterRedirect: (moduleName?: string) => void;
  onLearnMore: () => void;
  selectedModuleName: string;
  setSelectedModuleName: (name: string) => void;
}

export default function HomePage({
  lang,
  onRegisterRedirect,
  onLearnMore,
  selectedModuleName,
  setSelectedModuleName,
}: HomePageProps) {
  return (
    <>
      <Hero
        lang={lang}
        onGetStarted={() => onRegisterRedirect()}
        onLearnMore={onLearnMore}
      />

      <section className="py-12 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          <div>
            <div className="text-3xl sm:text-4xl font-black text-brand-600 font-display">10+</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              {lang === 'en' ? 'Years of Experience' : "Années d'Expérience"}
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-brand-600 font-display">98%</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              {lang === 'en' ? 'Success Rate' : 'Taux de Réussite'}
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-brand-600 font-display">2500+</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              {lang === 'en' ? 'Students Certified' : 'Étudiants Certifiés'}
            </div>
          </div>
          <div>
            <div className="text-3xl sm:text-4xl font-black text-brand-600 font-display">100%</div>
            <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
              {lang === 'en' ? 'Native Translators' : 'Traducteurs Natifs'}
            </div>
          </div>
        </div>
      </section>

      <Selections lang={lang} />

      <TrustedExpertise lang={lang} onSelectService={(name) => onRegisterRedirect(name)} />

      <TestimonialsFaq lang={lang} />

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
