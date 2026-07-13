import { HeartHandshake, BookOpen, Award, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import About from '../components/About';
import TestimonialsFaq from '../components/TestimonialsFaq';
import LocationMap from '../components/LocationMap';

interface AboutPageProps {
  lang: 'en' | 'fr';
  onRegisterRedirect: (moduleName?: string) => void;
}

export default function AboutPage({ lang, onRegisterRedirect }: AboutPageProps) {
  return (
    <>
      {/* ─── HERO — Institutional Dark Cinematic ─── */}
      <section className="relative w-full min-h-[75vh] flex items-center bg-slate-950 text-white overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2000&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        {/* Glow accents */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-brand-600/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full pt-36 pb-28">
          <div className="max-w-3xl text-left">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="flex items-center gap-3 mb-5">
                <span className="text-amber-500 text-[10px] font-black tracking-widest uppercase">
                  {lang === 'en' ? 'Who We Are' : 'Qui Sommes-Nous'}
                </span>
                <span className="w-16 h-0.5 bg-amber-500" />
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[1.08] mb-6">
                {lang === 'en' ? (
                  <>
                    Pedagogy & <span className="text-amber-500">Native Excellence</span>
                  </>
                ) : (
                  <>
                    Pédagogie & <span className="text-amber-500">Excellence Native</span>
                  </>
                )}
              </h1>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mb-10 font-medium">
                {lang === 'en'
                  ? 'TEN KEY is Lomé’s leading bilingual training ecosystem and certified translation hub. We train Togo’s elite diplomats, corporate leaders, and professional translators.'
                  : 'TEN KEY est le premier écosystème bilingue et cabinet de traduction certifié de Lomé. Nous formons les cadres, diplomates et traducteurs d’élite de la sous-région.'}
              </p>

              

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <button
                  onClick={() => onRegisterRedirect()}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-widest px-7 py-4 rounded-xl transition-all cursor-pointer shadow-lg shadow-amber-500/20"
                >
                  {lang === 'en' ? 'Start Your Journey' : 'Démarrer Votre Parcours'}
                  <ArrowRight className="w-4 h-4" />
                </button>
                <button
                  onClick={() => {
                    const section = document.getElementById('about-story');
                    section?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-[11px] font-black uppercase tracking-widest px-7 py-4 rounded-xl transition-all cursor-pointer"
                >
                  {lang === 'en' ? 'Read Our Story' : 'Lire Notre Histoire'}
                </button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <About lang={lang} />

      {/* ─── MISSION & VALUES — Deep Blue Foundation ─── */}
      <section className="w-full py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-5"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-amber-500 text-[10px] font-black tracking-widest uppercase">
                  {lang === 'en' ? 'Mission & Values' : 'Mission & Valeurs'}
                </span>
                <span className="w-16 h-0.5 bg-amber-500" />
              </div>
              <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight leading-tight mb-5">
                {lang === 'en' ? (
                  <>
                    Shaping <span className="text-amber-500">Bilingual Leaders</span> for West Africa
                  </>
                ) : (
                  <>
                    Former des <span className="text-amber-500">Leaders Bilingues</span> pour l’Afrique de l’Ouest
                  </>
                )}
              </h2>
              <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium mb-8">
                {lang === 'en'
                  ? 'We believe language mastery is a strategic asset. Our mission is to equip professionals, diplomats, and students with the clarity, confidence, and credentials to operate across borders.'
                  : 'Nous croyons que la maîtrise des langues est un atout stratégique. Notre mission est de doter professionnels, diplomates et étudiants de clarté, confiance et références pour opérer au-delà des frontières.'}
              </p>
              <button
                onClick={() => onRegisterRedirect()}
                className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-widest px-7 py-4 rounded-xl transition-all cursor-pointer shadow-lg shadow-amber-500/20"
              >
                {lang === 'en' ? 'Join the Mission' : 'Rejoindre la Mission'}
                <ArrowRight className="w-4 h-4" />
              </button>
            </motion.div>

            <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                {
                  title: lang === 'en' ? 'Excellence' : 'Excellence',
                  desc: lang === 'en'
                    ? 'Native and certified trainers, official exam preparation, and sworn translation standards.'
                    : 'Formateurs natifs et certifiés, préparation aux examens officiels et standards de traduction assermentée.',
                },
                {
                  title: lang === 'en' ? 'Accessibility' : 'Accessibilité',
                  desc: lang === 'en'
                    ? 'Lunch, evening, and weekend schedules designed around working professionals and executives.'
                    : 'Horaires midi, soir et weekend conçus pour les professionnels et cadres en activité.',
                },
                {
                  title: lang === 'en' ? 'Impact' : 'Impact',
                  desc: lang === 'en'
                    ? 'Over 3,000 graduates applying bilingual skills in government, business, and international organizations.'
                    : 'Plus de 3 000 diplômés appliquant leurs compétences bilingues dans le gouvernement, les entreprises et les organisations internationales.',
                },
                {
                  title: lang === 'en' ? 'Integrity' : 'Intégrité',
                  desc: lang === 'en'
                    ? 'Accredited programs, transparent pricing, and official documentation you can trust.'
                    : 'Programmes agréés, tarification transparente et documentation officielle digne de confiance.',
                },
              ].map((item, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 hover:bg-white/[0.05] hover:border-white/20 transition-all"
                >
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-4">
                    <span className="text-xs font-black">0{idx + 1}</span>
                  </div>
                  <h3 className="text-sm font-medium text-white mb-2">{item.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* <TestimonialsFaq lang={lang} /> */}
 
      <LocationMap lang={lang} />
    </>
  );
}
