import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, Play, Clock } from 'lucide-react';
import Selections from './Selections';

interface AboutProps {
  lang: string;
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

      {/* SECTION 2: MORE ABOUT US - Highly polished premium layout matching the screenshot */}
      <section className="py-24 bg-white text-brand-900 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Content, Bullet Points, Founder, Call Callout */}
            <div className="lg:col-span-6 text-left">
              {/* Badge: MORE ABOUT US */}
              <span className="text-accent-500 text-xs font-black tracking-widest uppercase block mb-4">
                {lang === 'en' ? 'MORE ABOUT US' : 'À PROPOS DE NOUS'}
              </span>
              
              {/* Heading */}
              <h2 className="text-3xl sm:text-4.5xl font-black text-brand-600 tracking-tight font-display leading-tight mb-6">
                {lang === 'en' 
                  ? 'We Provide the Best Bilingual & Prep Solutions in Town' 
                  : 'Nous Proposons les Meilleures Solutions Bilingues en Ville'}
              </h2>
              
              {/* Description paragraph */}
              <p className="text-sm text-slate-500 leading-relaxed font-medium mb-8">
                {lang === 'en'
                  ? 'TEN KEY is Lomé’s premier accredited bilingual training hub and official translation center. We provide structured executive programs, GED/TOEFL/IELTS preparation bootcamps, and high-precision certified translations designed to elevate your global career.'
                  : 'TEN KEY est le premier centre de formation bilingue agréé et de préparation aux examens officiels à Lomé. Nous proposons des programmes d’excellence pour cadres, des bootcamps intensifs GED/TOEFL/IELTS et des traductions certifiées de haute précision.'}
              </p>
              
              {/* 2-Column Bullet List */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
                {/* Left Column Bullets */}
                <div className="space-y-3.5">
                  {[
                    lang === 'en' ? '24/7 Call Services Available' : 'Services d’appel 24h/24',
                    lang === 'en' ? 'Great Skilled Consultant' : 'Consultants hautement qualifiés',
                    lang === 'en' ? 'Expert Team Members' : 'Formateurs certifiés experts'
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent-500/10 text-accent-500 flex items-center justify-center shrink-0">
                        <span className="text-xs font-black">✓</span>
                      </div>
                      <span className="text-xs font-extrabold text-brand-800 tracking-wide uppercase">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
                
                {/* Right Column Bullets */}
                <div className="space-y-3.5">
                  {[
                    lang === 'en' ? 'How to improve business' : 'Comment réussir vos examens',
                    lang === 'en' ? 'Business is the best plan' : 'Ateliers bilingues intensifs',
                    lang === 'en' ? 'Services we provide' : 'Formations certifiantes adaptées'
                  ].map((bullet, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent-500/10 text-accent-500 flex items-center justify-center shrink-0">
                        <span className="text-xs font-black">✓</span>
                      </div>
                      <span className="text-xs font-extrabold text-brand-800 tracking-wide uppercase">
                        {bullet}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Founder/CEO block & Contact Button Row */}
              <div className="flex flex-wrap items-center justify-between gap-6 pt-8 border-t border-slate-100">
                {/* Founder Info */}
                <div className="flex items-center gap-4">
                  <img
                    src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=120&auto=format&fit=crop"
                    alt="Andrew David"
                    className="w-12 h-12 rounded-full object-cover border-2 border-brand-100"
                    referrerPolicy="no-referrer"
                  />
                  <div>
                    <h4 className="text-sm font-black text-brand-900 font-display">Adrew David</h4>
                    <p className="text-[10px] text-accent-500 font-extrabold uppercase tracking-wider">
                      {lang === 'en' ? 'CEO & Founder' : 'CEO & Fondateur'}
                    </p>
                  </div>
                </div>
                
                {/* Contact Phone Callout */}
                <a
                  href="tel:+22891883867"
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-accent-500 text-white flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110 shadow-lg">
                    <Play className="w-4 h-4 fill-white stroke-white rotate-90 ml-0.5" />
                  </div>
                  <div className="text-left">
                    <p className="text-[10px] text-slate-400 font-extrabold uppercase tracking-wider leading-none mb-1">
                      {lang === 'en' ? 'Call us anytime' : 'Appelez-nous à tout moment'}
                    </p>
                    <p className="text-xs sm:text-sm font-black text-brand-900 group-hover:text-accent-500 transition-colors">
                      +228 91 88 38 67
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Layout with overlapping images & floating experience badge */}
            <div className="lg:col-span-6 relative flex items-center justify-center">
              <div className="relative w-full max-w-[480px] aspect-[4/3] md:aspect-[1.2] rounded-[2rem]">
                
                {/* Primary Large Image */}
                <div className="w-full h-full rounded-[2rem] overflow-hidden shadow-2xl border border-slate-100/40 relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
                    alt="Consultants working at laptop"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Secondary Small Overlapping Image (Top-Left) */}
                <div className="absolute -top-10 -left-6 w-1/3 min-w-[130px] aspect-[4/3] rounded-2xl overflow-hidden border-4 border-white shadow-2xl z-20">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop"
                    alt="Consultation meeting"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                
                {/* Floating Experience Badge (Bottom-Left) */}
                <div className="absolute -bottom-6 -left-6 bg-accent-500 text-white rounded-2xl p-5 shadow-2xl z-20 flex items-center gap-4 max-w-[240px] text-left border border-white/20">
                  <div className="text-2xl sm:text-3xl font-black font-display tracking-tight leading-none">
                    25+
                  </div>
                  <div className="h-8 w-[1px] bg-white/20"></div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-wider leading-tight">
                      {lang === 'en' ? 'Years' : 'Ans'}
                    </p>
                    <p className="text-[9px] font-extrabold text-white/80 leading-normal">
                      {lang === 'en' ? 'Of experience in consulting service' : "D'expérience dans l'éducation et conseil"}
                    </p>
                  </div>
                </div>

              </div>
            </div>
            
          </div>
        </div>
      </section>
    </div>
  );
}
