import React, { useState } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface SuccessManagementProps {
  lang: 'en' | 'fr';
}

export default function SuccessManagement({ lang }: SuccessManagementProps) {
  const [activeSlide, setActiveSlide] = useState(0);

  // Content data for multilingual support
  const content = {
    badge: {
      en: 'Why Choose Us',
      fr: 'Pourquoi Nous Choisir'
    },
    titlePre: {
      en: 'Unlocking ',
      fr: 'Déverrouiller '
    },
    titleHighlight: {
      en: 'Bilingual Success',
      fr: 'la Réussite Bilingue'
    },
    titlePost: {
      en: ' & Professional Leadership',
      fr: ' & le Leadership'
    },
    desc: {
      en: 'Our program delves into the intricacies of professional communication, offering candidates comprehensive strategies to grow and protect their global career assets. It covers topics ranging from active business immersion to advanced certifications.',
      fr: 'Notre programme explore les subtilités de l’aisance bilingue, offrant aux candidats des stratégies complètes pour propulser leur carrière à l’international. Il couvre des modules allant de l’immersion professionnelle aux certifications.'
    },
    cards: [
      {
        id: 1,
        title: {
          en: 'Active Business Immersion',
          fr: 'Immersion Professionnelle Intensive'
        },
        desc: {
          en: 'Engage in simulation sessions, role-plays and custom modules tailored directly to your corporate sector.',
          fr: 'Participez à des ateliers pratiques, des simulations et des modules calibrés sur votre secteur d’activité.'
        },
        image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=600&auto=format&fit=crop'
      },
      {
        id: 2,
        title: {
          en: 'Certified Test Preparation',
          fr: 'Préparation Aux Examens Officiels'
        },
        desc: {
          en: 'Achieve elite scores in TOEFL, IELTS, and TOEIC with diagnostic tests, simulated conditions and expert native reviews.',
          fr: 'Obtenez des scores de premier plan au TOEFL, IELTS et TOEIC avec nos examens blancs et l’accompagnement de coachs certifiés.'
        },
        image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop'
      },
      {
        id: 3,
        title: {
          en: 'Executive Speaking & Leadership',
          fr: 'Art Oratoire & Leadership Exécutif'
        },
        desc: {
          en: 'Command attention in international boardrooms, lead dynamic keynotes, and master the art of cross-border persuasion.',
          fr: 'Prenez la parole avec assurance dans les conseils d’administration et maîtrisez l’art de la négociation internationale.'
        },
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop'
      }
    ]
  };

  const handleScrollToForm = () => {
    const element = document.getElementById('contact-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-white text-slate-900 relative overflow-hidden">
      {/* Decorative Light Glows */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-50 rounded-full blur-3xl pointer-events-none opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Row */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16">
          <div className="lg:col-span-7 text-left">
            {/* Green dot preceding the badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="w-2 h-2 rounded-full bg-[#2d8a6b] inline-block animate-pulse"></span>
              <span className="text-slate-500 font-extrabold text-xs uppercase tracking-widest">
                {lang === 'en' ? content.badge.en : content.badge.fr}
              </span>
            </div>
            
            {/* Elegant Heading with customized emerald/green highlighting */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight font-display leading-tight">
              {lang === 'en' ? content.titlePre.en : content.titlePre.fr}
              <span className="text-[#2d8a6b]">
                {lang === 'en' ? content.titleHighlight.en : content.titleHighlight.fr}
              </span>
              {lang === 'en' ? content.titlePost.en : content.titlePost.fr}
            </h2>
          </div>

          <div className="lg:col-span-5 text-left pt-2 lg:pt-8">
            <p className="text-sm text-slate-500 leading-relaxed font-medium border-l-2 border-[#2d8a6b]/20 pl-4">
              {lang === 'en' ? content.desc.en : content.desc.fr}
            </p>
          </div>
        </div>

        {/* Mockup Row Layout with 3 Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* CARD 1: White Card with underline heading and image below */}
          <div className="lg:col-span-4 bg-white border border-slate-100 rounded-[2rem] p-8 shadow-xl flex flex-col justify-between text-left transition-transform duration-300 hover:-translate-y-1">
            <div>
              <h3 className="text-lg font-black tracking-tight text-slate-900 mb-6 relative pb-2 inline-block">
                {lang === 'en' ? content.cards[0].title.en : content.cards[0].title.fr}
                <span className="absolute bottom-0 left-0 w-1/2 h-[2px] bg-slate-900"></span>
              </h3>
            </div>
            
            <div className="h-56 sm:h-60 overflow-hidden rounded-2xl w-full relative mt-4">
              <img
                src={content.cards[0].image}
                alt="Active Business Immersion"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-slate-900/5 mix-blend-multiply"></div>
            </div>
          </div>

          {/* CARD 2: Central Dark Emerald Green Card with progress/carousel indicators */}
          <div className="lg:col-span-4 bg-[#2d8a6b] text-white rounded-[2rem] p-8 shadow-xl flex flex-col justify-between text-left relative overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            {/* Subtle background overlay */}
            <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
            
            <div className="relative z-10">
              <h3 className="text-lg font-black tracking-tight text-white mb-6 relative pb-2 inline-block">
                {lang === 'en' ? content.cards[1].title.en : content.cards[1].title.fr}
                <span className="absolute bottom-0 left-0 w-1/3 h-[2px] bg-white"></span>
              </h3>
              
              <p className="text-xs sm:text-sm text-emerald-100/90 leading-relaxed font-semibold mt-4">
                {lang === 'en' ? content.cards[1].desc.en : content.cards[1].desc.fr}
              </p>
            </div>

            {/* Bottom Carousel-style Horizontal Indicators like the mockup */}
            <div className="flex gap-2 items-center mt-12 relative z-10">
              <button 
                onClick={() => setActiveSlide(0)} 
                className={`h-1 rounded-full transition-all duration-300 ${activeSlide === 0 ? 'w-10 bg-white' : 'w-4 bg-white/40'}`}
                aria-label="Slide 1"
              />
              <button 
                onClick={() => setActiveSlide(1)} 
                className={`h-1 rounded-full transition-all duration-300 ${activeSlide === 1 ? 'w-10 bg-white' : 'w-4 bg-white/40'}`}
                aria-label="Slide 2"
              />
              <button 
                onClick={() => setActiveSlide(2)} 
                className={`h-1 rounded-full transition-all duration-300 ${activeSlide === 2 ? 'w-10 bg-white' : 'w-4 bg-white/40'}`}
                aria-label="Slide 3"
              />
            </div>
          </div>

          {/* CARD 3: Modern rounded-corner photo with Floating Circular Button in the bottom-right corner */}
          <div className="lg:col-span-4 relative rounded-[2rem] overflow-hidden shadow-xl aspect-[4/3] lg:aspect-auto min-h-[300px] bg-slate-100 group transition-transform duration-300 hover:-translate-y-1">
            <img
              src={content.cards[2].image}
              alt="Executive Coaching and Leadership"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            
            {/* Multi-layered darkened overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-slate-900/10 to-transparent"></div>
            
            {/* Absolute overlay elements like the mockup (floating white circle icon at the bottom-right corner) */}
            <div className="absolute bottom-0 right-0 p-4">
              <div className="relative">
                {/* Custom cut-out outline matching mockup style */}
                <button
                  onClick={handleScrollToForm}
                  className="w-14 h-14 rounded-full bg-white text-[#2d8a6b] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 cursor-pointer focus:outline-none"
                  title={lang === 'en' ? 'Get Started' : 'Commencer'}
                >
                  <ArrowUpRight className="w-6 h-6 stroke-[2.5]" />
                </button>
              </div>
            </div>

            {/* Bottom-left minimal title overlay */}
            <div className="absolute bottom-6 left-6 text-left max-w-[70%]">
              <h4 className="text-white text-sm font-black tracking-tight leading-tight uppercase bg-slate-900/40 backdrop-blur-md px-3 py-1.5 rounded-xl">
                {lang === 'en' ? content.cards[2].title.en : content.cards[2].title.fr}
              </h4>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
