import React from 'react';
import { motion } from 'motion/react';
import { BookOpen, FileText, Users, ArrowRight, Star, CheckCircle } from 'lucide-react';

interface GedPrepPageProps {
  lang: string;
  onGetStarted?: () => void;
}

export default function GedPrepPage({ lang, onGetStarted }: GedPrepPageProps) {
  // Multilingual content structure to fit Lomé, Togo dual audience
  const content = {
    badgeHero: {
      en: 'Learn Like A Pro',
      fr: 'Apprendre Comme Un Pro'
    },
    titlePre: {
      en: 'Pass Your ',
      fr: 'Réussissez Votre '
    },
    titleHighlight: {
      en: 'GED Exam',
      fr: 'Examen GED'
    },
    titlePost: {
      en: ' with Confidence',
      fr: ' avec Assurance'
    },
    subtitleHero: {
      en: 'A simple, flexible online learning platform designed for adults. Learn at your own pace with expert video lessons, quizzes, and progress tracking.',
      fr: 'Une plateforme d’apprentissage en ligne simple et flexible conçue pour les adultes. Progressez à votre rythme avec des leçons vidéo, des quiz et un suivi personnalisé.'
    },
    btnHero: {
      en: 'Start Learning',
      fr: 'Commencer l’Apprentissage'
    },
    socialProof: {
      en: 'Joined 120k+ people already',
      fr: 'Déjà plus de 120k+ candidats inscrits'
    },
    expertBadge: {
      en: 'Expert GED Instructors',
      fr: 'Formateurs GED Experts'
    },
    // Stats Section
    statsTitle: {
      en: 'Success\nMeasured by the\nNumbers',
      fr: 'Le Succès\nMesuré par les\nChiffres'
    },
    stats: [
      {
        num: '1K+',
        title: { en: 'Certified Students', fr: 'Étudiants Certifiés' },
        desc: { en: 'Thousands passed with guided, flexible GED preparation.', fr: 'Des milliers de réussites grâce à notre préparation guidée.' }
      },
      {
        num: '1.1+',
        title: { en: 'Improved Scores', fr: 'Scores Améliorés' },
        desc: { en: 'Students achieved higher scores through focused learning.', fr: 'Des scores en hausse grâce à un apprentissage structuré.' }
      },
      {
        num: '950+',
        title: { en: 'Future Learners', fr: 'Futurs Candidats' },
        desc: { en: 'Learn with flexible plans tailored to your pace and goals.', fr: 'Des plans flexibles adaptés à votre rythme et vos objectifs.' }
      }
    ],
    // Why Choose Us Section
    whyBadge: {
      en: 'Why Choose Us',
      fr: 'Pourquoi Nous Choisir'
    },
    whyTitle: {
      en: 'Empowering Your GED Journey',
      fr: 'Propulser Votre Parcours GED'
    },
    whyCards: [
      {
        title: { en: 'Custom Study Plans', fr: 'Plans d’Étude Sur-Mesure' },
        desc: { en: 'Personalized plans focus on your strengths and weaknesses, helping you learn smarter and reach your goals faster.', fr: 'Des plans d’études ciblés sur vos forces et faiblesses pour vous aider à progresser plus vite et plus intelligemment.' }
      },
      {
        title: { en: 'Real Exam Practice', fr: 'Entraînements Réels' },
        desc: { en: 'Practice with real exam-style questions to build confidence, improve timing, and track your progress.', fr: 'Entraînez-vous avec des questions types réelles pour booster votre confiance et maîtriser le timing officiel.' }
      },
      {
        title: { en: 'Expert Support Team', fr: 'Équipe de Formateurs Experts' },
        desc: { en: 'Get instant help from experienced educators who guide and motivate you every step of the way.', fr: 'Bénéficiez de l’aide instantanée de professeurs expérimentés qui vous guident et vous coachent en continu.' }
      }
    ],
    // How It Works Section
    processBadge: {
      en: 'Our Process',
      fr: 'Notre Processus'
    },
    processTitlePre: {
      en: 'How It ',
      fr: 'Comment Ça '
    },
    processTitleHighlight: {
      en: 'Works',
      fr: 'Fonctionne'
    },
    processSubtitle: {
      en: 'Discover how easy learning can be: choose your subject, follow expert-led lessons, and track your progress with ease.',
      fr: 'Découvrez la simplicité de l’apprentissage : choisissez votre matière, suivez les cours d’experts et observez vos progrès.'
    },
    processSteps: [
      {
        num: '01',
        title: { en: 'Choose Your Subject', fr: 'Sélectionnez Votre Matière' },
        desc: { en: 'Begin learning with expert-designed lessons that simplify complex topics. Each step is crafted to boost your confidence and keep you moving forward.', fr: 'Commencez avec des cours conçus par des spécialistes pour simplifier les concepts complexes et avancer en toute sérénité.' }
      },
      {
        num: '02',
        title: { en: 'Start Your Lessons', fr: 'Démarrez Vos Sessions' },
        desc: { en: 'Begin learning with expert-designed lessons that simplify complex topics. Each step is structured to build your confidence.', fr: 'Suivez nos sessions méthodologiques et nos explications interactives formulées pour maximiser votre compréhension.' }
      },
      {
        num: '03',
        title: { en: 'Explore All Courses', fr: 'Explorez Tous les Modules' },
        desc: { en: 'Take quizzes and review your progress after each lesson. Identify your strengths, work on weak areas, and stay on track for success.', fr: 'Évaluez vos acquis avec des mini-tests après chaque cours. Repérez vos axes d’amélioration et consolidez vos acquis.' }
      }
    ],
    processBtn: {
      en: 'Get Started Today',
      fr: 'Commencez Dès Aujourd’hui'
    }
  };

  const handleAction = () => {
    if (onGetStarted) {
      onGetStarted();
    } else {
      const element = document.getElementById('contact-form-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="bg-brand-600 text-white">
      
      {/* 1. IMMERSIVE HERO SECTION (Navy Blue bg-brand-600) */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-brand-600">
        {/* Soft elegant gold glowing light behind the hero */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-10 left-10 w-[300px] h-[300px] bg-brand-500/10 rounded-full blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-6 text-left">
              {/* Gold Accent Badge */}
              <div className="inline-block mb-6">
                <span className="bg-brand-700/80 border border-brand-800 text-accent-400 text-xs font-black tracking-widest px-4 py-2 rounded-full uppercase">
                  {lang === 'en' ? content.badgeHero.en : content.badgeHero.fr}
                </span>
              </div>

              {/* Bold Title */}
              <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-black tracking-tight leading-[1.1] text-white font-display mb-6">
                {lang === 'en' ? content.titlePre.en : content.titlePre.fr}
                <span className="text-accent-400">
                  {lang === 'en' ? content.titleHighlight.en : content.titleHighlight.fr}
                </span>
                {lang === 'en' ? content.titlePost.en : content.titlePost.fr}
              </h1>

              {/* Subtitle Description */}
              <p className="text-sm sm:text-base text-brand-100/70 leading-relaxed font-semibold mb-8 max-w-xl">
                {lang === 'en' ? content.subtitleHero.en : content.subtitleHero.fr}
              </p>

              {/* CTA Button */}
              <div className="flex flex-wrap items-center gap-6 mb-10">
                <button
                  onClick={handleAction}
                  className="bg-accent-500 hover:bg-accent-600 text-brand-950 font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                >
                  {lang === 'en' ? content.btnHero.en : content.btnHero.fr}
                </button>
              </div>

              {/* Candidate Social Proof Row */}
              <div className="flex items-center gap-3 border-t border-brand-900/60 pt-6">
                {/* Simulated Avatar Stack */}
                <div className="flex -space-x-2.5">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop"
                    alt="Candidate A"
                    className="w-8.5 h-8.5 rounded-full border-2 border-brand-950 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop"
                    alt="Candidate B"
                    className="w-8.5 h-8.5 rounded-full border-2 border-brand-950 object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=100&auto=format&fit=crop"
                    alt="Candidate C"
                    className="w-8.5 h-8.5 rounded-full border-2 border-brand-950 object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="text-[11px] sm:text-xs font-bold text-brand-100/60">
                  {lang === 'en' ? content.socialProof.en : content.socialProof.fr}
                </span>
              </div>
            </div>

            {/* Right Column: Hero Visual Photo & Expert Badge Card */}
            <div className="lg:col-span-6 relative flex justify-center">
              <div className="relative w-full max-w-md md:max-w-lg aspect-[10/9] sm:aspect-square bg-brand-700 rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-800/40">
                {/* High quality student image matching mockup */}
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=800&auto=format&fit=crop"
                  alt="Student with headphones preparing for GED"
                  className="w-full h-full object-cover grayscale-[10%]"
                  referrerPolicy="no-referrer"
                />
                
                {/* Warm filter overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/80 via-transparent to-brand-950/20"></div>

                {/* Floating Rating Card Badge in bottom right corner */}
                <div className="absolute bottom-6 right-6 bg-white text-brand-900 rounded-3xl p-5 shadow-2xl flex flex-col items-center max-w-[210px] text-center border border-slate-100/80">
                  <span className="text-3xl font-black text-brand-900 leading-none mb-1 font-display">
                    200<span className="text-accent-500 font-black">+</span>
                  </span>
                  <p className="text-[10px] font-black text-slate-500 uppercase tracking-wider mb-2 leading-tight">
                    {lang === 'en' ? content.expertBadge.en : content.expertBadge.fr}
                  </p>
                  
                  {/* Rating Stars */}
                  <div className="flex gap-0.5 text-accent-400">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. NUMERICAL STATS ROW (Clean White Background as shown in the mockup) */}
      <section className="py-16 sm:py-20 bg-white text-brand-900 border-b border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column title */}
            <div className="lg:col-span-4 text-left">
              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-brand-900 whitespace-pre-line leading-tight font-display">
                {lang === 'en' ? content.statsTitle.en : content.statsTitle.fr}
              </h2>
            </div>

            {/* Right Three Columns of numerical data */}
            <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-8 items-start border-l-0 lg:border-l lg:border-slate-100 lg:pl-12">
              {content.stats.map((stat, i) => (
                <div key={i} className="text-left">
                  <div className="text-4xl sm:text-5xl font-black text-brand-600 mb-2 font-display">
                    {stat.num}
                  </div>
                  <h3 className="text-sm font-extrabold text-brand-900 mb-2 leading-snug">
                    {lang === 'en' ? stat.title.en : stat.title.fr}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed font-semibold">
                    {lang === 'en' ? stat.desc.en : stat.desc.fr}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* 3. "WHY CHOOSE US" / FEATURES SECTION (Light gray clean backdrop) */}
      <section className="py-24 bg-brand-50 text-brand-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          
          {/* Header Row */}
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="bg-brand-600/10 border border-brand-600/10 text-brand-600 text-[10px] font-black tracking-widest px-4 py-2 rounded-full uppercase inline-block mb-4">
              {lang === 'en' ? content.whyBadge.en : content.whyBadge.fr}
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-600 tracking-tight font-display">
              {lang === 'en' ? content.whyTitle.en : content.whyTitle.fr}
            </h2>
          </div>

          {/* Feature Grid - 3 pristine customized white cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {content.whyCards.map((card, i) => (
              <div
                key={i}
                className="bg-white border border-slate-100/60 rounded-[2rem] p-8 shadow-xl flex flex-col justify-between text-left transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:border-brand-500/10"
              >
                <div>
                  {/* Distinct Icon Container */}
                  <div className="w-12 h-12 rounded-2xl bg-brand-500/10 text-brand-600 flex items-center justify-center mb-6">
                    {i === 0 && <BookOpen className="w-6 h-6 stroke-[2]" />}
                    {i === 1 && <FileText className="w-6 h-6 stroke-[2]" />}
                    {i === 2 && <Users className="w-6 h-6 stroke-[2]" />}
                  </div>

                  <h3 className="text-lg font-black tracking-tight text-brand-900 mb-4 font-display">
                    {lang === 'en' ? card.title.en : card.title.fr}
                  </h3>
                  
                  <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-semibold">
                    {lang === 'en' ? card.desc.en : card.desc.fr}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 4. PROCESS SECTION (Immersive Navy Blue bg-brand-600) */}
      <section className="py-24 bg-brand-600 text-white border-t border-brand-800/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Left Column: Title, description & picture */}
            <div className="lg:col-span-5 text-left">
              <span className="text-accent-400 bg-brand-700/80 border border-brand-800 text-[10px] font-black tracking-widest px-4 py-2 rounded-full uppercase inline-block mb-4">
                {lang === 'en' ? content.processBadge.en : content.processBadge.fr}
              </span>
              
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight mb-4 font-display">
                {lang === 'en' ? content.processTitlePre.en : content.processTitlePre.fr}
                <span className="text-accent-400">
                  {lang === 'en' ? content.processTitleHighlight.en : content.processTitleHighlight.fr}
                </span>
              </h2>

              <p className="text-xs sm:text-sm text-brand-100/60 leading-relaxed font-semibold mb-8">
                {lang === 'en' ? content.processSubtitle.en : content.processSubtitle.fr}
              </p>

              {/* Picture of a student writing */}
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden border border-brand-800/40 relative shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop"
                  alt="Student taking notes in active study session"
                  className="w-full h-full object-cover grayscale-[10%]"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-950/60 via-transparent to-brand-950/10"></div>
              </div>
            </div>

            {/* Right Column: Stacked process steps */}
            <div className="lg:col-span-7 space-y-5">
              {content.processSteps.map((step, i) => (
                <div
                  key={i}
                  className="bg-white/[0.02] hover:bg-white/[0.04] border border-white/[0.04] hover:border-brand-500/40 transition-all duration-300 rounded-3xl p-6 flex flex-col sm:flex-row gap-5 items-start text-left"
                >
                  {/* Step Number in Gold */}
                  <div className="text-2xl font-black text-accent-400 font-display leading-none bg-accent-500/10 px-4 py-2.5 rounded-xl border border-accent-500/20">
                    {step.num}
                  </div>
                  
                  {/* Step Content */}
                  <div>
                    <h3 className="text-base font-extrabold text-white mb-2 font-display">
                      {lang === 'en' ? step.title.en : step.title.fr}
                    </h3>
                    <p className="text-xs text-brand-100/60 leading-relaxed font-semibold">
                      {lang === 'en' ? step.desc.en : step.desc.fr}
                    </p>
                  </div>
                </div>
              ))}

              {/* Bottom interactive link */}
              <div className="pt-4 flex justify-start">
                <button
                  onClick={handleAction}
                  className="inline-flex items-center gap-2 text-accent-400 font-black text-xs uppercase tracking-widest hover:text-accent-300 transition-colors duration-300 cursor-pointer focus:outline-none"
                >
                  <span>{lang === 'en' ? content.processBtn.en : content.processBtn.fr}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}
