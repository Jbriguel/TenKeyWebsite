import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight, ChevronLeft, ChevronRight, GripHorizontal } from 'lucide-react';

interface TrustedExpertiseProps {
  lang: string;
  onSelectService?: (serviceName: string) => void;
}

export default function TrustedExpertise({ lang, onSelectService }: TrustedExpertiseProps) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  useEffect(() => {
    const el = scrollContainerRef.current;
    if (el) {
      el.addEventListener('scroll', checkScroll);
      // Run once initially
      checkScroll();
      // Handle resize
      window.addEventListener('resize', checkScroll);
    }
    return () => {
      if (el) el.removeEventListener('scroll', checkScroll);
      window.removeEventListener('resize', checkScroll);
    };
  }, []);

  const handleScroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      // Scroll by one card width (approx 360px) plus gap
      const offset = direction === 'left' ? -380 : 380;
      scrollContainerRef.current.scrollTo({
        left: scrollLeft + offset,
        behavior: 'smooth',
      });
    }
  };

  const services = [
    {
      id: 'corporate',
      badge: { en: 'CORPORATE', fr: 'ENTREPRISES' },
      title: { en: 'Corporate &\nBusiness English', fr: 'Anglais des Affaires\n& Professionnel' },
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=600&auto=format&fit=crop',
      desc: {
        en: 'Group and one-on-one classes for teams in banking, logistics, ministries, and NGOs. Focus on emails, reports, calls, and presentations.',
        fr: 'Cours en groupe ou individuels pour des équipes en banque, logistique, ministères et ONG. Emails, rapports, appels et présentations.'
      },
      isDark: false,
    },
    {
      id: 'translation',
      badge: { en: 'TRANSLATION', fr: 'TRADUCTION' },
      title: { en: 'Legal & Sworn\nTranslation', fr: 'Traduction Agréée\n& Juridique' },
      image: 'https://images.unsplash.com/photo-1450133064473-71024230f91b?q=80&w=600&auto=format&fit=crop',
      desc: {
        en: 'Certified translations of contracts, diplomas, birth certificates, and legal acts. Accepted by courts, ministries, and embassies in the sub-region.',
        fr: 'Traductions certifiées de contrats, diplômes, actes de naissance et documents légaux. Acceptées par tribunaux, ministères et ambassades de la sous-région.'
      },
      isDark: true,
      hasDragOverlay: true,
    },
    {
      id: 'exams',
      badge: { en: 'CERTIFICATION', fr: 'CERTIFICATIONS' },
      title: { en: 'Official Exams\nBootcamps', fr: 'Préparation Aux\nExamens Officiels' },
      image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=600&auto=format&fit=crop',
      desc: {
        en: 'Structured prep for TOEFL, IELTS, TOEIC, TEF, and TCF with mock tests under real conditions, correction sessions, and progress tracking.',
        fr: 'Préparation structurée aux TOEFL, IELTS, TOEIC, TEF et TCF avec examens blancs en conditions réelles, séances de correction et suivi des progrès.'
      },
      isDark: false,
    },
    {
      id: 'leadership',
      badge: { en: 'LEADERSHIP', fr: 'ART ORATOIRE' },
      title: { en: 'Executive Speaking\n& Coaching', fr: 'Art Oratoire\n& Leadership' },
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop',
      desc: {
        en: 'Coaching for public speaking, chairing meetings, and negotiating in English and French. Built for executives and public-sector leaders.',
        fr: 'Coaching pour parler en public, animer des réunions et négocier en anglais et en français. Conçu pour cadres et responsables publics.'
      },
      isDark: false,
    },
    {
      id: 'immersion',
      badge: { en: 'IMMERSION', fr: 'IMMERSION' },
      title: { en: 'General English\n& Debate Clubs', fr: 'Anglais Général\n& Immersion Active' },
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop',
      desc: {
        en: 'Saturday conversation club, debate sessions, and intensive holiday programs for young learners and adults who want to speak without overthinking.',
        fr: 'Club de conversation du samedi, débats d’actualité et stages intensifs de vacances pour jeunes et adultes qui veulent parler sans bloquer.'
      },
      isDark: false,
    }
  ];

  const handleAction = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    } else {
      const element = document.getElementById('contact-form-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-24 bg-[#0a0f1d] text-white relative overflow-hidden">
      {/* Background Silhouette / Subtle Corporate Office overlay */}
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat opacity-10 mix-blend-luminosity pointer-events-none"
      ></div>
      {/* Heavy slate gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-[#0a0f1d]/90 to-slate-950/40 pointer-events-none"></div>

      {/* Ambient background glows */}
      <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-1/4 -left-20 w-[400px] h-[400px] bg-amber-600/5 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Row: Matches the mockup typography & alignment exactly */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-end mb-16">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 text-left"
          >
            <div className="flex items-center gap-3 mb-5">
              <span className="text-white text-[10px] font-black tracking-widest uppercase">
                {lang === 'en' ? 'OUR FIELDS' : 'NOS DOMAINES'}
              </span>
              <span className="w-16 h-0.5 bg-white" />
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-white tracking-tight font-display leading-[1.1] mt-1">
              {lang === 'en' ? (
                <>
                  What We Train <br />
                  <span className="text-[#d97706] font-black">& Translate</span>
                </>
              ) : (
                <>
                  Ce Que Nous <br />
                  <span className="text-[#d97706] font-black">Formons & Traduisons</span>
                </>
              )}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 text-left lg:text-right flex flex-col md:flex-row items-start md:items-center lg:justify-end gap-6 pt-4 lg:pt-0"
          >
            <p className="text-sm text-slate-400 max-w-md leading-relaxed font-semibold text-left">
              {lang === 'en' 
                ? 'Language training for work, certified translations for administration, and exam preparation that follows official standards. All from our center in Avedji/Adidoadin.'
                : 'Formations linguistiques pour le travail, traductions certifiées pour l’administration, et préparation aux examens selon les standards officiels. Le tout depuis notre centre à Avedji/Adidoadin.'}
            </p>

            {/* Micro navigation buttons exactly inspired by the mockup top right */}
            <div className="flex gap-2.5 shrink-0">
              <button
                onClick={() => handleScroll('left')}
                className={`w-11 h-11 rounded-full border flex items-center justify-center transition-all duration-300 cursor-pointer ${
                  canScrollLeft
                    ? 'border-slate-800 bg-slate-900/60 text-white hover:bg-slate-800'
                    : 'border-slate-900 bg-slate-950/20 text-slate-600 cursor-not-allowed'
                }`}
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => handleScroll('right')}
                className="w-11 h-11 rounded-full bg-white text-slate-950 hover:bg-slate-100 flex items-center justify-center transition-all duration-300 shadow-lg cursor-pointer"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Carousel container with mouse/touch drag scrolling and hidden scrollbar */}
        <div className="relative">
          <div
            ref={scrollContainerRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-12 pt-2 -mx-4 px-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none] select-none scroll-smooth"
          >
            {services.map((svc, idx) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="snap-start shrink-0 relative"
              >
                {/* Individual Card */}
                <div
                  className={`w-[290px] sm:w-[340px] rounded-[2rem] p-6 sm:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-1.5 shadow-xl min-h-[440px] border ${
                    svc.isDark
                      ? 'bg-[#121829] text-white border-slate-800/80 shadow-[#03060f]/60'
                      : 'bg-white text-slate-950 border-slate-100 shadow-slate-900/10'
                  }`}
                >
                  <div>
                    {/* Badge */}
                    <div className="mb-6 flex justify-between items-center">
                      <span className={`text-[9px] font-black tracking-widest px-3.5 py-1.5 rounded-full uppercase border ${
                        svc.isDark
                          ? 'text-slate-300 border-slate-700/80 bg-slate-800/40'
                          : 'text-slate-500 border-slate-200 bg-slate-50'
                      }`}>
                        {lang === 'en' ? svc.badge.en : svc.badge.fr}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl font-extrabold tracking-tight font-display leading-tight whitespace-pre-line mb-4">
                      {lang === 'en' ? svc.title.en : svc.title.fr}
                    </h3>

                    {/* Custom Visual Photograph representing the service */}
                    <div className="h-40 overflow-hidden rounded-2xl w-full relative mb-6">
                      <img
                        src={svc.image}
                        alt={lang === 'en' ? svc.title.en : svc.title.fr}
                        className="w-full h-full object-cover grayscale-[15%] group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-slate-950/5 mix-blend-multiply"></div>
                    </div>

                    {/* Description */}
                    <p className={`text-xs leading-relaxed font-semibold mb-6 ${
                      svc.isDark ? 'text-slate-400' : 'text-slate-500'
                    }`}>
                      {lang === 'en' ? svc.desc.en : svc.desc.fr}
                    </p>
                  </div>

                  {/* Actions / Floating Round Arrow at the bottom-right corner */}
                  <div className="flex justify-end pt-2">
                    <button
                      onClick={() => handleAction(lang === 'en' ? svc.title.en : svc.title.fr)}
                      className={`w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300 border hover:scale-105 cursor-pointer focus:outline-none ${
                        svc.isDark
                          ? 'border-slate-800 bg-slate-800/40 text-white hover:bg-slate-700 hover:text-[#d97706]'
                          : 'border-slate-200 bg-slate-50 text-slate-950 hover:bg-slate-100 hover:text-[#d97706]'
                      }`}
                      title={lang === 'en' ? 'Get Started' : 'Commencer'}
                    >
                      <ArrowUpRight className="w-5 h-5 stroke-[2.5]" />
                    </button>
                  </div>
                </div>

                {/* Draggable Badge sitting between card 2 and card 3 exactly like the mockup! */}
                {/* {svc.hasDragOverlay && (
                  <div className="absolute top-1/2 -right-4.5 -translate-y-1/2 z-20 pointer-events-none hidden md:flex items-center justify-center">
                    <div className="bg-white text-slate-950 text-[9px] font-black tracking-widest px-3.5 py-2.5 rounded-full shadow-2xl border border-slate-100 flex items-center gap-1.5 uppercase">
                      <GripHorizontal className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                      <span>{lang === 'en' ? 'DRAG' : 'GLISSER'}</span>
                    </div>
                  </div>
                )} */}
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
