import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

interface TrustedExpertise2Props {
  lang: string;
}

const services = [
  {
    id: 'corporate',
    badge: { en: 'Corporate', fr: 'Entreprises' },
    title: {
      en: 'Business & Professional English',
      fr: 'Anglais des Affaires & Professionnel',
    },
    desc: {
      en: 'Tailored programs for banking, logistics, ministries, and NGO teams. Executive workflows, reports, and global summits.',
      fr: 'Programmes sur mesure pour banques, logistique, ministères et ONG. Rapports, négociations et sommets internationaux.',
    },
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'translation',
    badge: { en: 'Legal', fr: 'Traduction Officielle' },
    title: {
      en: 'Certified Legal Translation',
      fr: 'Traduction Agréée & Juridique',
    },
    desc: {
      en: 'Certified translations of contracts, diplomas, and corporate acts accepted by international courts and embassies.',
      fr: 'Traductions certifiées de contrats, diplômes et actes reconnues par les ministères, tribunaux et ambassades.',
    },
    image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'exams',
    badge: { en: 'Certifications', fr: 'Examens' },
    title: {
      en: 'Official Exam Preparation',
      fr: 'Préparation Aux Examens Officiels',
    },
    desc: {
      en: 'Structured training for TOEFL, IELTS, TOEIC, TEF, and TCF with simulation tests under real institutional conditions.',
      fr: 'Cursus structurés pour TOEFL, IELTS, TOEIC, TEF et TCF avec examens blancs en conditions réelles.',
    },
    image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
  },
  {
    id: 'leadership',
    badge: { en: 'Executive', fr: 'Art Oratoire' },
    title: {
      en: 'Executive Speaking & Leadership',
      fr: 'Art Oratoire & Leadership',
    },
    desc: {
      en: 'High-level coaching for public speaking, diplomatic meetings, and cross-border strategic negotiations.',
      fr: 'Accompagnement de haut niveau pour prises de parole publiques, réunions diplomatiques et négociations stratégiques.',
    },
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
  },
];

export default function TrustedExpertise2({ lang }: TrustedExpertise2Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setCanScrollLeft(scrollLeft > 10);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const cardWidth = 380;
    const to = scrollRef.current.scrollLeft + (direction === 'left' ? -cardWidth : cardWidth);
    scrollRef.current.scrollTo({ left: to, behavior: 'smooth' });
  };

  useEffect(() => {
    const currentRef = scrollRef.current;
    if (currentRef) {
      currentRef.addEventListener('scroll', checkScroll);
      checkScroll();
    }
    return () => currentRef?.removeEventListener('scroll', checkScroll);
  }, []);

  const navigate = useNavigate();

  const handleExplore = () => {
    navigate('/services');
  };

  return (
    <section className="py-24 bg-brand-600 text-white relative overflow-hidden">
      {/* Subtle Background Geometric Light */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 border-b border-white/5 pb-10">
          <div className="max-w-xl">
            <span className="text-xs font-semibold tracking-[0.2em] text-accent-500/90 uppercase block mb-3">
              {lang === 'en' ? 'Expertise Domains' : 'Domaines d’Excellence'}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light tracking-tight text-white leading-tight">
              {lang === 'en' ? (
                <>Programs & <span className="font-semibold text-neutral-200">Solutions</span></>
              ) : (
                <>Ce Que Nous <span className="font-semibold text-neutral-200">Formons & Traduisons</span></>
              )}
            </h2>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 max-w-md">
            <p className="text-sm text-slate-400 leading-relaxed">
              {lang === 'en'
                ? 'High-level language solutions designed for institutions, corporate groups, and executive tracks in Lomé.'
                : 'Solutions linguistiques de haut niveau conçues pour les institutions, les grands groupes et les cadres dirigeants à Lomé.'}
            </p>

            {/* Navigation Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={() => scroll('left')}
                disabled={!canScrollLeft}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  canScrollLeft
                    ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                    : 'border-white/5 bg-transparent text-white/20 cursor-not-allowed'
                }`}
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => scroll('right')}
                disabled={!canScrollRight}
                className={`w-10 h-10 rounded-full border flex items-center justify-center transition-all ${
                  canScrollRight
                    ? 'border-white/10 bg-white/5 text-white hover:bg-white/10'
                    : 'border-white/5 bg-transparent text-white/20 cursor-not-allowed'
                }`}
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Viewport */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {services.map((svc, idx) => (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group snap-start shrink-0 w-[300px] sm:w-[360px] h-[460px] rounded-xl border border-white/5 bg-white/[0.02] backdrop-blur-md relative overflow-hidden flex flex-col justify-between p-8 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.04]"
              >
                {/* Background Image Container with Gradient Overlay */}
                <div className="absolute inset-0 z-0 overflow-hidden">
                  <img
                    src={svc.image}
                    alt=""
                    className="w-full h-full object-cover opacity-15 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-25 group-hover:grayscale-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent" />
                </div>

                {/* Card Top Content */}
                <div className="relative z-10">
                  <span className="inline-block text-[10px] font-medium tracking-widest uppercase bg-white/5 border border-white/10 text-slate-300 px-3 py-1 rounded-md mb-6">
                    {lang === 'en' ? svc.badge.en : svc.badge.fr}
                  </span>
                  <h3 className="text-xl font-medium tracking-tight text-white leading-snug group-hover:text-accent-400 transition-colors duration-300">
                    {lang === 'en' ? svc.title.en : svc.title.fr}
                  </h3>
                </div>

                {/* Card Bottom Content */}
                <div className="relative z-10 pt-4 border-t border-white/5">
                  <p className="text-xs leading-relaxed text-slate-400 mb-6 font-light line-clamp-3 group-hover:text-slate-300 transition-colors">
                    {lang === 'en' ? svc.desc.en : svc.desc.fr}
                  </p>
                  
                  <div className="flex items-center justify-between">
                    <span className="text-[11px] font-medium text-white/40 tracking-wider group-hover:text-white transition-colors duration-300">
                      {lang === 'en' ? 'Explore details' : 'Voir le programme'}
                    </span>
                    <button
                      onClick={handleExplore}
                      className="w-10 h-10 rounded-full border border-white/10 bg-white/5 text-white flex items-center justify-center transition-all duration-300 group-hover:bg-accent-500 group-hover:text-brand-950 group-hover:border-transparent cursor-pointer"
                      aria-label="Explore services"
                    >
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

// import React, { useRef, useState, useEffect } from 'react';
// import { motion } from 'motion/react';
// import { ChevronLeft, ChevronRight, ArrowUpRight } from 'lucide-react';

// interface TrustedExpertise2Props {
//   currentLang: string; // Utilisation de l'architecture multi-langue évolutive
//   onSelectService?: (serviceName: string) => void;
// }

// const services = [
//   {
//     id: 'corporate',
//     badge: { en: 'Executive', fr: 'Entreprises & Cadres' },
//     title: {
//       en: 'Business & Professional English',
//       fr: 'Anglais des Affaires & Professionnel',
//     },
//     desc: {
//       en: 'High-level training for banking, logistics, and diplomatic teams. Focused on international negotiations and corporate governance.',
//       fr: 'Formations de haut niveau pour les secteurs bancaires, logistiques et représentations diplomatiques. Négociations et gouvernance.',
//     },
//     image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop',
//   },
//   {
//     id: 'translation',
//     badge: { en: 'Institutional', fr: 'Traduction Officielle' },
//     title: {
//       en: 'Certified Legal Translation',
//       fr: 'Traduction Agréée & Juridique',
//     },
//     desc: {
//       en: 'Certified translation services for contracts, treaties, and official acts. Authenticated for ministries, courts, and embassies.',
//       fr: 'Traductions certifiées de contrats, accords et actes officiels. Agréées auprès des ministères, tribunaux et ambassades.',
//     },
//     image: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?q=80&w=800&auto=format&fit=crop',
//   },
//   {
//     id: 'exams',
//     badge: { en: 'Certifications', fr: 'Examens Officiels' },
//     title: {
//       en: 'Official Exam Preparation',
//       fr: 'Préparation Aux Examens Officiels',
//     },
//     desc: {
//       en: 'Rigorous preparation matrices for TOEFL, IELTS, TOEIC, and academic language assessments under strict institutional criteria.',
//       fr: 'Programmes rigoureux de préparation aux examens TOEFL, IELTS, TOEIC et certifications académiques selon les critères officiels.',
//     },
//     image: 'https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop',
//   },
//   {
//     id: 'leadership',
//     badge: { en: 'Diplomacy', fr: 'Art Oratoire' },
//     title: {
//       en: 'Executive Speaking & Leadership',
//       fr: 'Art Oratoire & Leadership',
//     },
//     desc: {
//       en: 'Elite executive coaching for international summits, public speaking, and strategic cross-border diplomacy workflows.',
//       fr: 'Coaching d’élite pour les interventions en sommets internationaux, la prise de parole publique et les négociations stratégiques.',
//     },
//     image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop',
//   },
// ];

// export default function TrustedExpertise2({ currentLang, onSelectService }: TrustedExpertise2Props) {
//   const scrollRef = useRef<HTMLDivElement>(null);
//   const [canScrollLeft, setCanScrollLeft] = useState(false);
//   const [canScrollRight, setCanScrollRight] = useState(true);

//   const checkScroll = () => {
//     if (scrollRef.current) {
//       const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
//       setCanScrollLeft(scrollLeft > 10);
//       setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
//     }
//   };

//   const scroll = (direction: 'left' | 'right') => {
//     if (!scrollRef.current) return;
//     const cardWidth = 400; // Largeur de carte augmentée pour asseoir le design
//     const to = scrollRef.current.scrollLeft + (direction === 'left' ? -cardWidth : cardWidth);
//     scrollRef.current.scrollTo({ left: to, behavior: 'smooth' });
//   };

//   useEffect(() => {
//     const t = setTimeout(checkScroll, 100);
//     return () => clearTimeout(t);
//   }, []);

//   const handleAction = (titleObj: Record<string, string>) => {
//     const serviceName = titleObj[currentLang] || titleObj['fr'];
//     if (onSelectService) {
//       onSelectService(serviceName);
//     } else {
//       document.getElementById('contact-form-section')?.scrollIntoView({ behavior: 'smooth' });
//     }
//   };

//   return (
//     <section className="py-28 bg-brand-600 relative overflow-hidden border-t border-slate-900">
//       {/* Subtiles lignes de fond géométriques pour le côté corporate architectural */}
//       <div className="absolute inset-0 opacity-[0.02] pointer-events-none mix-blend-overlay">
//         <div className="absolute left-1/4 top-0 bottom-0 w-px bg-white" />
//         <div className="absolute left-2/4 top-0 bottom-0 w-px bg-white" />
//         <div className="absolute left-3/4 top-0 bottom-0 w-px bg-white" />
//       </div>

//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         {/* Header de section épuré */}
//         <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 mb-16">
//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, ease: [0.215, 0.61, 0.355, 1] }}
//             className="max-w-xl"
//           >
//             <p className="text-xs font-semibold tracking-widest text-accent-500 uppercase mb-3">
//               {currentLang === 'en' ? 'Expertise Matrix' : 'Domaines d’Intervention'}
//             </p>
//             <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white tracking-tight leading-[1.15]">
//               {currentLang === 'en' ? (
//                 <>Programs Structured for <br /><span className="text-slate-400 font-light">Global Leadership</span></>
//               ) : (
//                 <>Cursus Conçus pour <br /><span className="text-slate-400 font-light">l’Impact International</span></>
//               )}
//             </h2>
//           </motion.div>

//           <motion.div
//             initial={{ opacity: 0, y: 20 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.6, delay: 0.1 }}
//             className="flex flex-col sm:flex-row items-start sm:items-center gap-8 lg:max-w-lg"
//           >
//             <p className="text-sm text-slate-400 leading-relaxed font-normal">
//               {currentLang === 'en'
//                 ? 'Aligning professional profiles with international operational frameworks from our specialized training facility in Lomé.'
//                 : 'Alignement des compétences linguistiques et techniques sur les exigences des institutions internationales et des grands groupes.'}
//             </p>

//             {/* Controles de navigation épurés */}
//             <div className="flex items-center gap-2 shrink-0">
//               <button
//                 onClick={() => scroll('left')}
//                 disabled={!canScrollLeft}
//                 className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
//                   canScrollLeft
//                     ? 'border-slate-800 bg-brand-700 text-white hover:bg-slate-800 hover:border-slate-700'
//                     : 'border-slate-900/50 bg-brand-600 text-brand-700 cursor-not-allowed'
//                 }`}
//                 aria-label="Previous service"
//               >
//                 <ChevronLeft className="w-4 h-4" />
//               </button>
//               <button
//                 onClick={() => scroll('right')}
//                 disabled={!canScrollRight}
//                 className={`w-12 h-12 rounded-full border flex items-center justify-center transition-all ${
//                   canScrollRight
//                     ? 'border-slate-800 bg-brand-700 text-white hover:bg-slate-800 hover:border-slate-700'
//                     : 'border-slate-900/50 bg-brand-600 text-brand-700 cursor-not-allowed'
//                 }`}
//                 aria-label="Next service"
//               >
//                 <ChevronRight className="w-4 h-4" />
//               </button>
//             </div>
//           </motion.div>
//         </div>

//         {/* Zone du Slider */}
//         <div className="relative">
//           <div
//             ref={scrollRef}
//             onScroll={checkScroll}
//             className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
//           >
//             {services.map((svc, idx) => {
//               const badgeText = svc.badge[currentLang as 'fr' | 'en'] || svc.badge.fr;
//               const titleText = svc.title[currentLang as 'fr' | 'en'] || svc.title.fr;
//               const descText = svc.desc[currentLang as 'fr' | 'en'] || svc.desc.fr;

//               return (
//                 <motion.div
//                   key={svc.id}
//                   initial={{ opacity: 0, y: 20 }}
//                   whileInView={{ opacity: 1, y: 0 }}
//                   viewport={{ once: true, margin: '-40px' }}
//                   transition={{ duration: 0.5, delay: idx * 0.08 }}
//                   className="group snap-start shrink-0 w-[310px] sm:w-[380px] bg-brand-700/40 border border-slate-900 rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 hover:border-slate-800 hover:bg-brand-700/60"
//                 >
//                   <div>
//                     {/* Badge institutionnel discret */}
//                     <div className="flex items-center justify-between mb-8">
//                       <span className="text-[10px] font-medium tracking-widest uppercase text-accent-500/90 bg-accent-500/5 px-3 py-1 rounded-md border border-accent-500/10">
//                         {badgeText}
//                       </span>
//                     </div>

//                     <h3 className="text-xl font-medium text-white tracking-tight leading-snug mb-4 min-h-[3rem] group-hover:text-accent-500 transition-colors duration-300">
//                       {titleText}
//                     </h3>

//                     {/* Image avec traitement sobre */}
//                     <div className="relative rounded-lg overflow-hidden aspect-[16/10] mb-6 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-90 transition-all duration-500">
//                       <img
//                         src={svc.image}
//                         alt={titleText}
//                         className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
//                         referrerPolicy="no-referrer"
//                       />
//                       <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-40" />
//                     </div>

//                     <p className="text-xs leading-relaxed text-slate-400 font-normal mb-8">
//                       {descText}
//                     </p>
//                   </div>

//                   {/* Bouton d'action épuré */}
//                   <div className="flex justify-between items-center pt-4 border-t border-slate-900/80">
//                     <span className="text-[11px] text-slate-500 uppercase tracking-wider font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
//                       {currentLang === 'en' ? 'Review Curricula' : 'Consulter l’offre'}
//                     </span>
//                     <button
//                       onClick={() => handleAction(svc.title)}
//                       className="w-10 h-10 rounded-full bg-brand-600 border border-slate-800 text-slate-400 flex items-center justify-center transition-all duration-300 group-hover:bg-white group-hover:text-brand-950 group-hover:border-white"
//                       aria-label={`${currentLang === 'en' ? 'Learn more about' : 'En savoir plus sur'} ${titleText}`}
//                     >
//                       <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
//                     </button>
//                   </div>
//                 </motion.div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }