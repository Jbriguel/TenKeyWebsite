import React from 'react';
import { motion } from 'motion/react';
import { Shield, BookOpen, Clock, Users, Star, MessageSquare, Phone, CheckCircle2 } from 'lucide-react';

interface AboutProps {
  lang: 'en' | 'fr';
}

export default function About({ lang }: AboutProps) {
  const points = [
    {
      title: { en: 'VIP Executive Cabinets', fr: 'Cabinets Professionnels VIP' },
      desc: {
        en: 'Ultra-customized paths with flexible schedules designed for business directors and diplomatic officers.',
        fr: 'Parcours sur-mesure avec horaires flexibles conçus pour les cadres, dirigeants et diplomates.'
      },
      icon: Users
    },
    {
      title: { en: 'Official Certifications', fr: 'Certifications Internationales' },
      desc: {
        en: 'Comprehensive and rigorous bootcamps to ace the TOEFL, IELTS, TEF, and TCF with top scores.',
        fr: 'Préparations intensives et rigoureuses pour exceller aux examens officiels TOEFL, IELTS, TEF et TCF.'
      },
      icon: Shield
    },
    {
      title: { en: 'Active Immersion Method', fr: 'Méthode d’Immersion Active' },
      desc: {
        en: 'Speaking-first learning style focusing on active debates, negotiation roleplaying, and real cases.',
        fr: 'Pédagogie axée sur la pratique orale intensive, les débats d’affaires et les mises en situation.'
      },
      icon: MessageSquare
    },
    {
      title: { en: 'Interpretation & Translation', fr: 'Traduction & Interprétation' },
      desc: {
        en: 'Accredited legal translations and professional conference interpretation booths in Togo.',
        fr: 'Traductions juridiques certifiées et cabines d’interprétation professionnelles pour conférences.'
      },
      icon: BookOpen
    },
    {
      title: { en: 'Elite Native Coach Team', fr: 'Formateurs d’Élite Natifs' },
      desc: {
        en: 'Highly qualified professors and native speakers dedicated to your speed and success.',
        fr: 'Professeurs natifs et bilingues certifiés d’Afrique et d’Europe dévoués à votre réussite.'
      },
      icon: Star
    },
    {
      title: { en: 'Summer Vacation Camps', fr: 'Vacances Utiles Bilingues' },
      desc: {
        en: 'Creative linguistic summer camps with active play, games, and projects for children.',
        fr: 'Sessions d’anglais ludiques, de jeux et de projets créatifs pour les enfants et adolescents.'
      },
      icon: Clock
    }
  ];

  const handleScrollToForm = () => {
    const element = document.getElementById('contact-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* 
        Vertical Label on Left Margin (Sleek corporate branding)
      */}
      <div className="absolute left-6 top-32 text-[110px] font-black text-slate-100/40 select-none tracking-widest hidden xl:block origin-left -rotate-90">
        ABOUT
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header (NDC Africa / Energie inspired style) */}
        <div className="text-left mb-16 max-w-3xl">
          <span className="text-accent-500 font-black text-xs uppercase tracking-widest bg-accent-50 px-3 py-1.5 rounded-full border border-accent-100 inline-block mb-4">
            {lang === 'en' ? 'HOW WE OPERATE' : 'NOTRE VISION'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-display">
            {lang === 'en' 
              ? 'TEN KEY Solutions – 100% Immersive & Reliable' 
              : 'Solutions TEN KEY – 100% Immersives & Fiables'}
          </h2>
          <p className="text-sm text-slate-500 mt-4 leading-relaxed font-semibold">
            {lang === 'en'
              ? 'A trusted partner for West African professionals, diplomats, and institutions. We combine academic excellence with high-level corporate training.'
              : 'Partenaire privilégié des cadres, diplomates et grandes institutions d’Afrique de l’Ouest. Nous combinons rigueur académique et immersion professionnelle haut de gamme.'}
          </p>
        </div>

        {/* Dynamic Grid Layout matching screenshot */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: 6 point list with sub-heading and buttons */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full mb-10">
              {points.map((pt, idx) => {
                const Icon = pt.icon;
                return (
                  <div key={idx} className="flex gap-3 text-left">
                    <div className="w-9 h-9 rounded-xl bg-accent-50 text-accent-500 flex items-center justify-center shrink-0 mt-0.5 border border-accent-100/50">
                      <Icon className="w-5 h-5" />
                    </div>
                    <div>
                      <h4 className="text-sm font-black text-slate-900 leading-snug font-display mb-1">
                        {lang === 'en' ? pt.title.en : pt.title.fr}
                      </h4>
                      <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                        {lang === 'en' ? pt.desc.en : pt.desc.fr}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Red action button & call center info */}
            <div className="flex flex-col sm:flex-row items-center gap-6 w-full pt-4 border-t border-slate-100">
              <button
                onClick={handleScrollToForm}
                className="w-full sm:w-auto bg-accent-500 hover:bg-accent-600 text-white font-black text-xs uppercase tracking-wider px-6 py-4 rounded-xl shadow-lg shadow-accent-950/10 transition-colors cursor-pointer text-center"
              >
                {lang === 'en' ? 'Start Your Training' : 'Débuter Ma Formation →'}
              </button>
              
              <div className="flex items-center gap-3 self-start sm:self-center">
                <div className="w-10 h-10 rounded-full bg-accent-50 text-accent-600 flex items-center justify-center border border-accent-100 animate-pulse shrink-0">
                  <Phone className="w-4 h-4" />
                </div>
                <div className="text-left">
                  <p className="text-[9px] font-black text-slate-400 uppercase tracking-widest leading-none">
                    {lang === 'en' ? 'CALL US 24/7 (TOGO)' : 'SUPPORT & AUDIT 24J/7'}
                  </p>
                  <a href="tel:+22891883867" className="text-sm font-black text-slate-900 hover:text-accent-600 transition-colors">
                    +228 91 88 38 67
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 4-Card Asymmetric Bento Grid Collage (Exactly as seen in NDC design layout) */}
          <div className="lg:col-span-5 grid grid-cols-12 gap-3 sm:gap-4 w-full">
            
            {/* Card 1: Top Left - Profile Image */}
            <div className="col-span-6 rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&q=80&w=300"
                alt="Active corporate learning in Togo"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Card 2: Top Right - Bright solid accent red block */}
            <div className="col-span-6 bg-accent-500 text-white rounded-2xl p-5 flex flex-col justify-between aspect-[4/5] text-left shadow-lg">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white border border-white/10">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight leading-none text-white">
                  10+
                </h3>
                <p className="text-[10px] font-black uppercase tracking-wider text-white/90 mt-1">
                  {lang === 'en' ? 'Years of Local Excellence' : "Années d’Excellence Active"}
                </p>
                <p className="text-[10px] text-white/80 leading-normal mt-2 font-medium">
                  {lang === 'en' ? 'Pioneering immersive learning in Lomé.' : 'Leader de l’apprentissage immersif à Lomé.'}
                </p>
              </div>
            </div>

            {/* Card 3: Bottom Left - Dark visual with stat text */}
            <div className="col-span-6 bg-slate-950 text-white rounded-2xl p-5 flex flex-col justify-between aspect-[4/5] text-left relative overflow-hidden shadow-md">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 to-slate-900/60 pointer-events-none"></div>
              <div className="relative z-10 w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center text-white/80 border border-white/5">
                <Users className="w-5 h-5" />
              </div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl font-black font-display tracking-tight leading-none text-white">
                  2500+
                </h3>
                <p className="text-[10px] font-black uppercase tracking-wider text-slate-300 mt-1">
                  {lang === 'en' ? 'Certified Students' : 'Apprenants Certifiés'}
                </p>
                <p className="text-[10px] text-slate-400 leading-normal mt-2 font-medium">
                  {lang === 'en' ? 'Bilingual corporate agents & graduates.' : 'Cadres bilingues & boursiers d’études.'}
                </p>
              </div>
            </div>

            {/* Card 4: Bottom Right - Modern Landscape Student Success Image */}
            <div className="col-span-6 rounded-2xl overflow-hidden aspect-[4/5] bg-slate-100 shadow-md">
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=300"
                alt="Collaborative student workspace"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
