/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  GraduationCap, Award, BookOpen, Clock, Calendar, CheckCircle2, 
  Sparkles, Search, Printer, HelpCircle, ChevronRight, User, 
  Phone, Ticket, RefreshCw, ArrowRight, ShieldCheck 
} from 'lucide-react';

interface StudentPortalProps {
  lang: string;
  onRegisterRedirect: (moduleName: string) => void;
}

// Interactive English / Translation Placement Test Questions
const QUESTIONS = [
  {
    id: 1,
    text: {
      en: "Choose the correct sentence to introduce yourself in a professional setting:",
      fr: "Choisissez la phrase correcte pour vous présenter dans un cadre professionnel :"
    },
    options: [
      { text: "I is working as an accountant since three years.", score: 0, explanation: "Incorrect grammar ('I is', 'since' with duration)." },
      { text: "I have been working as an accountant for three years.", score: 3, explanation: "Perfect! Present Perfect Continuous + 'for' to state duration." },
      { text: "I work as accountant from three years.", score: 1, explanation: "Preposition 'from' is incorrect for duration." }
    ]
  },
  {
    id: 2,
    text: {
      en: "What is the correct English translation for 'Je soussigné, Monsieur Lawson, certifie que...':",
      fr: "Quelle est la traduction anglaise correcte pour 'Je soussigné, Monsieur Lawson, certifie que...' :"
    },
    options: [
      { text: "I the undersigned, Mr. Lawson, hereby certify that...", score: 3, explanation: "Excellent! Standard professional legal translation." },
      { text: "Me signed under, Mr. Lawson, certify that...", score: 0, explanation: "Word-for-word translation mistake." },
      { text: "I signed Mr. Lawson certify that...", score: 1, explanation: "Lacks professional legal phrasing." }
    ]
  },
  {
    id: 3,
    text: {
      en: "Select the sentence with the correct prepositions:",
      fr: "Sélectionnez la phrase contenant les prépositions correctes :"
    },
    options: [
      { text: "We are meeting in Monday at 9 AM on the office.", score: 0, explanation: "Wrong prepositions ('in Monday', 'on the office')." },
      { text: "We are meeting on Monday at 9 AM in the office.", score: 3, explanation: "Perfect! 'on' + day, 'at' + time, 'in' + place." },
      { text: "We are meeting at Monday in 9 AM to the office.", score: 0, explanation: "Highly incorrect preposition usage." }
    ]
  },
  {
    id: 4,
    text: {
      en: "Complete: 'If the client _______ on time, we would have signed the contract.'",
      fr: "Complétez : 'If the client _______ on time, we would have signed the contract.'"
    },
    options: [
      { text: "arrived", score: 1, explanation: "Incorrect tense for third conditional." },
      { text: "had arrived", score: 3, explanation: "Correct! Past perfect is required for third conditional structures." },
      { text: "would arrive", score: 0, explanation: "Double would is incorrect." }
    ]
  },
  {
    id: 5,
    text: {
      en: "Translate professionally: 'Veuillez trouver ci-joint notre grille tarifaire.'",
      fr: "Traduisez de manière professionnelle : 'Veuillez trouver ci-joint notre grille tarifaire.'"
    },
    options: [
      { text: "Please find enclosed our pricing schedule.", score: 3, explanation: "Spot on! 'Enclosed' or 'attached' are appropriate." },
      { text: "Look here my pricing table.", score: 0, explanation: "Too informal and grammatically incorrect." },
      { text: "Find please our prices.", score: 1, explanation: "Poor professional syntax." }
    ]
  },
  {
    id: 6,
    text: {
      en: "What does the abbreviation 'asap' stand for in business English?",
      fr: "Que signifie l'abréviation 'asap' en anglais des affaires ?"
    },
    options: [
      { text: "As soon as possible", score: 3, explanation: "Correct! Very common in professional emails." },
      { text: "Always stay at peace", score: 0, explanation: "Nice sentiment, but incorrect!" },
      { text: "As simple as plan", score: 1, explanation: "Incorrect abbreviation definition." }
    ]
  }
];

// Mock Ticket Data for Retrieval
const MOCK_TICKETS = [
  {
    phone: "90901010",
    name: "Afi Mawuena LAWSON",
    ticketId: "TK-2026-8841",
    module: "English for Professionals (Anglais Professionnel)",
    level: "Intermediate B1",
    status: { en: "Admission Confirmed", fr: "Admission Confirmée" },
    payment: { en: "Onboarding Fee Paid (10,000 FCFA)", fr: "Frais de dossier réglés (10 000 FCFA)" },
    testScore: "15/18",
    date: "2026-07-09"
  },
  {
    phone: "91234567",
    name: "Koffi Messan ADJO",
    ticketId: "TK-2026-9032",
    module: "Cabinet d'Interprétation & Traduction",
    level: "Advanced C1",
    status: { en: "Pending Level Test Verification", fr: "En attente du Test Oral" },
    payment: { en: "Onboarding Fee Paid (10,000 FCFA)", fr: "Frais de dossier réglés (10 000 FCFA)" },
    testScore: "18/18",
    date: "2026-07-10"
  },
  {
    phone: "99887766",
    name: "Fatimata DIALLO",
    ticketId: "TK-2026-1049",
    module: "General English (Anglais Général)",
    level: "Beginner A2",
    status: { en: "Admission Confirmed", fr: "Admission Confirmée" },
    payment: { en: "Onboarding Fee Paid (10,000 FCFA)", fr: "Frais de dossier réglés (10 000 FCFA)" },
    testScore: "6/18",
    date: "2026-07-08"
  }
];

export default function StudentPortal({ lang, onRegisterRedirect }: StudentPortalProps) {
  // Tab states: 'test' | 'ticket' | 'schedule'
  const [activeTab, setActiveTab] = useState<'test' | 'ticket' | 'schedule'>('test');

  // Level Test States
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [testCompleted, setTestCompleted] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  // Ticket Lookup States
  const [searchPhone, setSearchPhone] = useState('');
  const [retrievedTicket, setRetrievedTicket] = useState<typeof MOCK_TICKETS[0] | null>(null);
  const [searchAttempted, setSearchAttempted] = useState(false);

  // Study Planner States
  const [targetLevel, setTargetLevel] = useState<'beginner' | 'intermediate' | 'advanced'>('intermediate');
  const [studyPace, setStudyPace] = useState<'regular' | 'intensive'>('regular');

  // Handle Level Test Answer Choice
  const handleNextQuestion = () => {
    if (selectedOption === null) return;
    
    const newAnswers = [...answers, selectedOption];
    setAnswers(newAnswers);
    setSelectedOption(null);

    if (currentQuestionIdx + 1 < QUESTIONS.length) {
      setCurrentQuestionIdx(currentQuestionIdx + 1);
    } else {
      setTestCompleted(true);
    }
  };

  const handleResetTest = () => {
    setCurrentQuestionIdx(0);
    setAnswers([]);
    setSelectedOption(null);
    setTestCompleted(false);
  };

  // Compute CEFR Level based on accumulated score
  const totalScore = answers.reduce((acc, curr) => acc + curr, 0);
  const maxPossibleScore = QUESTIONS.length * 3;
  const computedCEFR = (() => {
    if (totalScore <= 5) return { code: "A1/A2", name: "Beginner / Faux Débutant", desc: lang === 'en' ? "Basic comprehension. Perfect match for General English Course." : "Bases rudimentaires. Recommandation : Anglais Général." };
    if (totalScore <= 11) return { code: "B1", name: "Pre-Intermediate / Intermediate", desc: lang === 'en' ? "Moderate comprehension. Great fit for Academic & Business English." : "Niveau intermédiaire. Recommandation : Anglais Professionnel ou Anglais Académique." };
    if (totalScore <= 15) return { code: "B2", name: "Upper-Intermediate", desc: lang === 'en' ? "Confident professional exchange. Ideal for TOEFL Preparation & Leadership Speak." : "Bonne fluidité professionnelle. Recommandation : TOEFL Prep & Cabinet Traduction." };
    return { code: "C1/C2", name: "Advanced / Fluent Specialist", desc: lang === 'en' ? "Native-level proficiency. Perfect for our specialized Cabinet and Interpretation Services." : "Maîtrise bilingue. Recommandation : Cabinet d'Interprétation & Traduction Professionnelle." };
  })();

  // Ticket Lookup function
  const handleTicketSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanPhone = searchPhone.replace(/\s+/g, '').trim();
    const match = MOCK_TICKETS.find(t => t.phone.includes(cleanPhone) || t.ticketId.toLowerCase().includes(cleanPhone.toLowerCase()));
    setRetrievedTicket(match || null);
    setSearchAttempted(true);
  };

  // Static printable/mock calendar data generator
  const getWeeklyCalendar = () => {
    const regularSchedule = [
      { day: "Lundi / Monday", activity: "18:30 - 20:30", topic: "Grammar Foundations & Legal/Corporate Syntax" },
      { day: "Mardi / Tuesday", activity: "18:30 - 20:30", topic: "Translation Clinic & Professional Writing Workshops" },
      { day: "Jeudi / Thursday", activity: "18:30 - 20:30", topic: "Oral Fluidity, Simulated Debates & Phonetics Lab" },
      { day: "Samedi / Saturday", activity: "09:00 - 12:00", topic: "Specialized English Club (Interactive Debates & Guest Speakers)" }
    ];

    const intensiveSchedule = [
      { day: "Every Weekday", activity: "Daily Drills", topic: "1.5 hours of audio-visual immersion in listening and translation models." },
      { day: "Tues / Thurs / Sat", activity: "Classroom Instruction", topic: "Direct face-to-face modules with our native translators in Lomé." },
      { day: "Weekend Showcase", activity: "English Club Speeches", topic: "Deliver a presentation on a corporate or international development topic." }
    ];

    return studyPace === 'intensive' ? intensiveSchedule : regularSchedule;
  };

  return (
    <div className="bg-slate-50 min-h-screen text-left">
      {/* IMMERSIVE PREMIUM STUDENT PORTAL HERO */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-brand-950 text-white overflow-hidden border-b border-brand-900/40">
        {/* Glowing gold and brand blue backdrop light leaks */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-5 left-10 w-[300px] h-[300px] bg-brand-500/10 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            {/* Left Column: Text & Workspace info */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 bg-brand-900/80 border border-brand-800 text-accent-400 text-xs font-black tracking-widest px-4 py-2 rounded-full uppercase mb-6 shadow-sm">
                <GraduationCap className="w-4.5 h-4.5 text-accent-500" />
                <span>{lang === 'en' ? 'ONLINE STUDENT PORTAL' : 'PORTAIL ÉTUDIANT & CANDIDATS'}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-white font-display mb-6">
                {lang === 'en' ? 'Candidate' : 'Espace Numérique'}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-amber-300">
                  {lang === 'en' ? 'Workspace' : 'Candidat'}
                </span>
              </h1>

              <p className="text-sm sm:text-base text-brand-100/70 leading-relaxed font-semibold mb-8 max-w-xl">
                {lang === 'en'
                  ? 'Self-assess your English level, search & download your official physical onboarding registration pass, or custom-plan your future weekly schedules.'
                  : 'Évaluez instantanément votre niveau d\'anglais, recherchez & téléchargez votre ticket d\'inscription officiel, ou planifiez votre futur calendrier d\'études.'}
              </p>

              {/* Workspace quick highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  lang === 'en' ? 'Interactive placement test' : 'Test de placement interactif',
                  lang === 'en' ? 'Onboarding pass lookups' : 'Recherche de ticket d’inscription',
                  lang === 'en' ? 'Interactive study planners' : 'Simulateur d’emploi du temps',
                  lang === 'en' ? 'Instant result certifications' : 'Attestation de niveau immédiate'
                ].map((hl, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-400 shrink-0" />
                    <span className="text-xs font-bold text-brand-100">{hl}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual illustration element */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[380px] aspect-square">
                {/* Visual Collage Card */}
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-800/40 relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=800&auto=format&fit=crop"
                    alt="Digital learning dashboard workspace"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/10"></div>
                </div>

                {/* Floating Glassmorphism Metric Badge */}
                <div className="absolute -bottom-6 -right-6 bg-brand-900/90 backdrop-blur-md border border-brand-800 text-white rounded-2xl p-4 shadow-2xl z-20 flex items-center gap-3.5 max-w-[200px] text-left">
                  <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <p className="text-xs font-black font-display text-accent-400">A1 - C2</p>
                    <p className="text-[9px] font-bold text-brand-100 leading-normal">
                      {lang === 'en' ? 'CEFR Level Assessment Standards' : 'Normes d’Évaluation Cadre Européen'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Main Workspace Workspace Tabs Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">

        {/* Dynamic Multi-Tab Switcher (PREMIUM FEEL) */}
        <div className="grid grid-cols-3 gap-2 p-1.5 bg-slate-200/60 rounded-2xl mb-8 border border-slate-200">
          <button
            onClick={() => setActiveTab('test')}
            className={`py-3.5 px-2 rounded-xl text-xs sm:text-sm font-bold flex flex-col sm:flex-row items-center justify-center gap-2 transition-all ${
              activeTab === 'test'
                ? 'bg-white text-brand-950 shadow-md shadow-slate-300'
                : 'text-slate-600 hover:text-slate-950 hover:bg-white/40'
            }`}
          >
            <Award className={`w-4.5 h-4.5 ${activeTab === 'test' ? 'text-accent-500' : 'text-slate-400'}`} />
            <span>{lang === 'en' ? 'Placement Level Test' : 'Test d\'Anglais'}</span>
          </button>
          
          <button
            onClick={() => setActiveTab('ticket')}
            className={`py-3.5 px-2 rounded-xl text-xs sm:text-sm font-bold flex flex-col sm:flex-row items-center justify-center gap-2 transition-all ${
              activeTab === 'ticket'
                ? 'bg-white text-brand-950 shadow-md shadow-slate-300'
                : 'text-slate-600 hover:text-slate-950 hover:bg-white/40'
            }`}
          >
            <Ticket className={`w-4.5 h-4.5 ${activeTab === 'ticket' ? 'text-accent-500' : 'text-slate-400'}`} />
            <span>{lang === 'en' ? 'My Admission Ticket' : 'Mon Ticket d\'Entrée'}</span>
          </button>

          <button
            onClick={() => setActiveTab('schedule')}
            className={`py-3.5 px-2 rounded-xl text-xs sm:text-sm font-bold flex flex-col sm:flex-row items-center justify-center gap-2 transition-all ${
              activeTab === 'schedule'
                ? 'bg-white text-brand-950 shadow-md shadow-slate-300'
                : 'text-slate-600 hover:text-slate-950 hover:bg-white/40'
            }`}
          >
            <Calendar className={`w-4.5 h-4.5 ${activeTab === 'schedule' ? 'text-accent-500' : 'text-slate-400'}`} />
            <span>{lang === 'en' ? 'Study Schedule Planner' : 'Mon Planning d’Études'}</span>
          </button>
        </div>

        {/* Tab Contents */}
        <AnimatePresence mode="wait">
          
          {/* TAB 1: PLACEMENT LEVEL TEST */}
          {activeTab === 'test' && (
            <motion.div
              key="placement-test"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-xl shadow-slate-200/50"
            >
              {!testCompleted ? (
                <div>
                  {/* Progress Indicator */}
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-accent-600 bg-accent-50 px-2.5 py-1 rounded-full">
                      {lang === 'en' ? `Question ${currentQuestionIdx + 1} of ${QUESTIONS.length}` : `Question ${currentQuestionIdx + 1} sur ${QUESTIONS.length}`}
                    </span>
                    <span className="text-xs font-bold text-slate-400">
                      {Math.round(((currentQuestionIdx) / QUESTIONS.length) * 100)}% {lang === 'en' ? 'Completed' : 'Complété'}
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full bg-slate-100 h-1.5 rounded-full mb-8 overflow-hidden">
                    <div 
                      className="bg-accent-500 h-full transition-all duration-300"
                      style={{ width: `${((currentQuestionIdx) / QUESTIONS.length) * 100}%` }}
                    ></div>
                  </div>

                  {/* Question Prompt */}
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-6 font-display leading-snug">
                    {lang === 'en' ? QUESTIONS[currentQuestionIdx].text.en : QUESTIONS[currentQuestionIdx].text.fr}
                  </h3>

                  {/* Options List */}
                  <div className="space-y-3 mb-8">
                    {QUESTIONS[currentQuestionIdx].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => setSelectedOption(option.score)}
                        className={`w-full text-left p-4 rounded-xl border text-xs sm:text-sm font-semibold transition-all flex items-start gap-3 ${
                          selectedOption === option.score
                            ? 'bg-brand-50/70 border-brand-500 text-brand-950 ring-2 ring-brand-500/10'
                            : 'bg-white border-slate-200 hover:border-slate-300 text-slate-700 hover:text-slate-900'
                        }`}
                      >
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 ${
                          selectedOption === option.score
                            ? 'border-brand-500 bg-brand-500 text-white'
                            : 'border-slate-300'
                        }`}>
                          {selectedOption === option.score && <div className="w-1.5 h-1.5 bg-white rounded-full"></div>}
                        </div>
                        <span>{option.text}</span>
                      </button>
                    ))}
                  </div>

                  {/* Navigation Button */}
                  <div className="flex justify-end">
                    <button
                      onClick={handleNextQuestion}
                      disabled={selectedOption === null}
                      className={`px-6 py-3 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all ${
                        selectedOption === null
                          ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                          : 'bg-brand-600 hover:bg-brand-700 text-white shadow-md shadow-brand-100'
                      }`}
                    >
                      <span>{currentQuestionIdx + 1 === QUESTIONS.length ? (lang === 'en' ? 'Get My Results' : 'Voir mon Résultat') : (lang === 'en' ? 'Next Question' : 'Question Suivante')}</span>
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                /* TEST COMPLETED VIEW - VERY PREMIUM GAUGES */
                <div className="text-center py-6">
                  <div className="w-20 h-20 bg-accent-50 text-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-md border border-accent-100">
                    <ShieldCheck className="w-10 h-10" />
                  </div>

                  <span className="text-accent-500 font-extrabold text-xs uppercase tracking-widest bg-accent-50 px-3 py-1.5 rounded-full border border-accent-100">
                    {lang === 'en' ? 'ASSESSMENT ACCOMPLISHED' : 'EVALUATION REUSSIE'}
                  </span>
                  
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mt-4 mb-2 font-display">
                    {lang === 'en' ? 'Your Recommended Level' : 'Votre Niveau Recommandé'}
                  </h2>

                  {/* Level Gauge Display */}
                  <div className="my-8 max-w-md mx-auto bg-slate-50 border border-slate-100 rounded-3xl p-6 shadow-inner text-left">
                    <div className="flex items-center justify-between gap-4 mb-4">
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest">{lang === 'en' ? 'CEFR ESTIMATION' : 'ESTIMATION CEFR'}</span>
                        <div className="text-3xl font-black text-brand-950 font-display mt-1">{computedCEFR.code}</div>
                      </div>
                      <div className="bg-brand-600 text-white font-extrabold text-xs px-3.5 py-2 rounded-xl">
                        {totalScore} / {maxPossibleScore} Pts
                      </div>
                    </div>

                    <div className="h-2 bg-slate-200 rounded-full overflow-hidden mb-4">
                      <div 
                        className="bg-brand-500 h-full rounded-full transition-all duration-1000"
                        style={{ width: `${(totalScore / maxPossibleScore) * 100}%` }}
                      ></div>
                    </div>

                    <h4 className="font-extrabold text-slate-900 text-sm mb-1">{computedCEFR.name}</h4>
                    <p className="text-slate-500 text-xs leading-relaxed">{computedCEFR.desc}</p>
                  </div>

                  <p className="text-slate-500 text-xs sm:text-sm max-w-xl mx-auto mb-8 leading-relaxed">
                    {lang === 'en'
                      ? 'Note: This automated diagnostic is indicative. An official 15-minute speaking panel session occurs during physical onboarding in our Lomé facility to complete registration.'
                      : 'Remarque : Ce diagnostic en ligne est indicatif. Un entretien oral de validation de 15 minutes aura lieu lors de votre premier passage au centre pour finaliser l\'affectation de groupe.'}
                  </p>

                  {/* Post-Test Actions */}
                  <div className="flex flex-col sm:flex-row gap-3 justify-center max-w-md mx-auto">
                    <button
                      onClick={() => onRegisterRedirect(computedCEFR.code)}
                      className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs py-3 px-6 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-brand-100 transition-all"
                    >
                      <span>{lang === 'en' ? 'Finish Registration with This Level' : 'S\'inscrire avec ce Niveau'}</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                    
                    <button
                      onClick={handleResetTest}
                      className="bg-white hover:bg-slate-50 text-slate-700 font-bold text-xs py-3 px-6 rounded-xl border border-slate-200 transition-all flex items-center justify-center gap-1.5"
                    >
                      <RefreshCw className="w-3.5 h-3.5 text-slate-400" />
                      <span>{lang === 'en' ? 'Retake Test' : 'Refaire le Test'}</span>
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}

          {/* TAB 2: ONBOARDING TICKET RETRIEVER */}
          {activeTab === 'ticket' && (
            <motion.div
              key="ticket-retriever"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-xl shadow-slate-200/50"
            >
              <div className="max-w-2xl mx-auto">
                <div className="text-center mb-8">
                  <div className="w-12 h-12 bg-accent-50 text-accent-600 rounded-xl flex items-center justify-center mx-auto mb-3">
                    <Ticket className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 font-display">
                    {lang === 'en' ? 'Find Your Admission Pass' : 'Récupérer votre Reçu d\'Admission'}
                  </h3>
                  <p className="text-slate-500 text-xs sm:text-sm mt-1">
                    {lang === 'en'
                      ? 'Registered students can search by WhatsApp number or ticket code (e.g. "90901010", "TK-2026-8841")'
                      : 'Les étudiants inscrits peuvent effectuer une recherche par numéro WhatsApp ou numéro de reçu (ex: "90901010", "TK-2026-8841")'}
                  </p>
                </div>

                {/* Search Form */}
                <form onSubmit={handleTicketSearch} className="flex gap-2 mb-8 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
                    <input
                      type="text"
                      placeholder={lang === 'en' ? 'Enter WhatsApp or Ticket Code...' : 'Numéro WhatsApp ou Code...'}
                      value={searchPhone}
                      onChange={(e) => setSearchPhone(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl py-3 pl-10 pr-4 text-xs font-semibold focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-brand-600 hover:bg-brand-700 text-white px-5 rounded-xl text-xs font-bold transition-all shadow-md shadow-brand-100"
                  >
                    {lang === 'en' ? 'Search' : 'Rechercher'}
                  </button>
                </form>

                {/* Search Result */}
                <AnimatePresence mode="wait">
                  {retrievedTicket ? (
                    <motion.div
                      key="ticket-card"
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      className="border-2 border-dashed border-slate-200 rounded-2xl p-6 bg-slate-50/50"
                    >
                      {/* Ticket Header */}
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-dashed border-slate-200 pb-4 mb-4 gap-3">
                        <div>
                          <p className="text-[10px] text-slate-400 uppercase tracking-widest font-extrabold">TEN KEY CENTER PASSPORT</p>
                          <h4 className="text-base font-extrabold text-slate-900 font-display mt-0.5">{retrievedTicket.name}</h4>
                        </div>
                        <span className="bg-brand-100 text-brand-800 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase">
                          {lang === 'en' ? retrievedTicket.status.en : retrievedTicket.status.fr}
                        </span>
                      </div>

                      {/* Ticket Grid Info */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs mb-6">
                        <div>
                          <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">{lang === 'en' ? 'TICKET SERIAL CODE' : 'N° DE SÉRIE ADMISSION'}</p>
                          <p className="font-extrabold text-slate-900 mt-1 font-mono">{retrievedTicket.ticketId}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">{lang === 'en' ? 'SELECTED CURRICULUM' : 'MODULE SÉLECTIONNÉ'}</p>
                          <p className="font-extrabold text-slate-900 mt-1">{retrievedTicket.module}</p>
                        </div>
                        <div>
                          <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">{lang === 'en' ? 'REGISTERED LEVEL' : 'NIVEAU ENREGISTRÉ'}</p>
                          <p className="font-extrabold text-slate-900 mt-1">{retrievedTicket.level} (Test: {retrievedTicket.testScore})</p>
                        </div>
                        <div>
                          <p className="text-slate-400 font-bold uppercase tracking-wider text-[10px]">{lang === 'en' ? 'PAYMENT STATUS' : 'STATUT FINANCIER'}</p>
                          <p className="font-extrabold text-accent-500 mt-1">{lang === 'en' ? retrievedTicket.payment.en : retrievedTicket.payment.fr}</p>
                        </div>
                      </div>

                      {/* Barcode Mock Rendering */}
                      <div className="border-t border-dashed border-slate-200 pt-5 flex flex-col sm:flex-row justify-between items-center gap-4">
                        <div className="text-center sm:text-left">
                          <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">{lang === 'en' ? 'Onboarding Date' : 'Date de convocation'}</p>
                          <p className="font-extrabold text-slate-800 text-xs mt-0.5">{retrievedTicket.date} (Lomé HQ)</p>
                        </div>
                        {/* Fake Barcode Graphic */}
                        <div className="flex flex-col items-center shrink-0">
                          <div className="h-8 flex gap-0.5 bg-white p-1 rounded-sm border border-slate-200">
                            <div className="w-[1px] bg-slate-900 h-full"></div>
                            <div className="w-[2px] bg-slate-900 h-full"></div>
                            <div className="w-[1px] bg-slate-900 h-full"></div>
                            <div className="w-[4px] bg-slate-900 h-full"></div>
                            <div className="w-[1px] bg-slate-900 h-full"></div>
                            <div className="w-[2px] bg-slate-900 h-full"></div>
                            <div className="w-[3px] bg-slate-900 h-full"></div>
                            <div className="w-[1px] bg-slate-900 h-full"></div>
                            <div className="w-[2px] bg-slate-900 h-full"></div>
                            <div className="w-[4px] bg-slate-900 h-full"></div>
                            <div className="w-[1px] bg-slate-900 h-full"></div>
                          </div>
                          <span className="text-[8px] text-slate-400 font-mono tracking-widest mt-1">*{retrievedTicket.ticketId}*</span>
                        </div>
                      </div>

                      {/* Ticket Download Actions */}
                      <div className="mt-6 flex justify-end gap-2 border-t border-slate-100 pt-4">
                        <button
                          onClick={() => window.print()}
                          className="bg-white hover:bg-slate-100 text-slate-700 font-bold text-[11px] px-3.5 py-2 rounded-lg border border-slate-200 flex items-center gap-1.5 transition-all"
                        >
                          <Printer className="w-3.5 h-3.5 text-slate-400" />
                          <span>{lang === 'en' ? 'Print Pass' : 'Imprimer'}</span>
                        </button>
                        <a
                          href={`https://wa.me/22890901010?text=Bonjour,%20je%20viens%20de%20consulter%20mon%20ticket%20${retrievedTicket.ticketId}%20sur%20le%20site.`}
                          target="_blank"
                          rel="noreferrer"
                          className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-[11px] px-3.5 py-2 rounded-lg flex items-center gap-1.5 transition-all"
                        >
                          <Phone className="w-3.5 h-3.5 text-brand-200" />
                          <span>{lang === 'en' ? 'Contact Secrétariat' : 'Contacter Secrétariat'}</span>
                        </a>
                      </div>
                    </motion.div>
                  ) : searchAttempted ? (
                    <motion.div
                      key="no-ticket-found"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      className="text-center py-6 text-slate-400 font-semibold text-xs bg-red-50/40 border border-red-100 rounded-xl"
                    >
                      {lang === 'en'
                        ? 'No active onboarding ticket found with this identifier. Please verify your number or Register first.'
                        : 'Aucun ticket d’admission trouvé pour cet identifiant. Veuillez vérifier la saisie ou procéder à une inscription.'}
                    </motion.div>
                  ) : (
                    /* Initial prompt hints */
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-5 text-slate-500 text-xs text-center">
                      <p className="font-bold mb-2">💡 {lang === 'en' ? 'Quick demo logins for evaluation:' : 'Démos rapides pour tester :'}</p>
                      <ul className="inline-block text-left space-y-1 font-semibold font-mono text-slate-600">
                        <li>• 90901010 (Afi Lawson - Anglais Professionnel)</li>
                        <li>• 91234567 (Koffi Adjo - Cabinet)</li>
                        <li>• 99887766 (Fatimata Diallo - Anglais Général)</li>
                      </ul>
                    </div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>
          )}

          {/* TAB 3: STUDY SCHEDULE PLANNER */}
          {activeTab === 'schedule' && (
            <motion.div
              key="schedule-planner"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-3xl border border-slate-100 p-6 sm:p-8 shadow-xl shadow-slate-200/50"
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                
                {/* Left Controls */}
                <div className="lg:col-span-1 border-r border-slate-100 lg:pr-8">
                  <h3 className="text-base font-bold text-slate-900 font-display mb-4">
                    {lang === 'en' ? 'Custom Study Roadmap' : 'Calculateur de Planning d’Études'}
                  </h3>

                  {/* Level Picker */}
                  <div className="mb-5">
                    <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Select Target Level:' : 'Niveau Visé :'}
                    </label>
                    <div className="grid grid-cols-3 gap-1.5">
                      {(['beginner', 'intermediate', 'advanced'] as const).map((lvl) => (
                        <button
                          key={lvl}
                          onClick={() => setTargetLevel(lvl)}
                          className={`py-2 px-1 rounded-lg text-[10px] font-bold uppercase transition-all ${
                            targetLevel === lvl
                              ? 'bg-brand-600 text-white'
                              : 'bg-slate-50 text-slate-600 border border-slate-150'
                          }`}
                        >
                          {lvl}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Study Pace Selector */}
                  <div className="mb-6">
                    <label className="block text-xs font-extrabold text-slate-400 uppercase tracking-wider mb-2">
                      {lang === 'en' ? 'Learning Velocity:' : 'Rythme d\'Étude :'}
                    </label>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setStudyPace('regular')}
                        className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all border ${
                          studyPace === 'regular'
                            ? 'bg-white border-brand-500 text-brand-950 ring-2 ring-brand-500/10'
                            : 'bg-slate-50 border-slate-200 text-slate-600'
                        }`}
                      >
                        {lang === 'en' ? 'Regular (3 days/wk)' : 'Régulier (3 jrs/sem)'}
                      </button>
                      <button
                        onClick={() => setStudyPace('intensive')}
                        className={`flex-1 py-3 rounded-xl text-xs font-bold transition-all border ${
                          studyPace === 'intensive'
                            ? 'bg-white border-brand-500 text-brand-950 ring-2 ring-brand-500/10'
                            : 'bg-slate-50 border-slate-200 text-slate-600'
                        }`}
                      >
                        {lang === 'en' ? 'Intensive Daily' : 'Intensif Quotidien'}
                      </button>
                    </div>
                  </div>

                  {/* Info helper block */}
                  <div className="bg-slate-50 rounded-2xl p-4 border border-slate-100 text-xs text-slate-500 leading-relaxed">
                    <p className="font-bold text-slate-700 mb-1">📅 {lang === 'en' ? 'Our Pedagogy Rule' : 'Règle Pédagogique'}</p>
                    {lang === 'en'
                      ? 'Our cohorts run on alternating evenings in Lomé, with specialized translation clubs on Saturday mornings.'
                      : 'Les promotions se réunissent les soirs en alternance de 18h30 à 20h30. Les samedis matins sont dédiés aux clubs d\'anglais.'}
                  </div>
                </div>

                {/* Right Interactive Table Schedule Output */}
                <div className="lg:col-span-2">
                  <div className="flex justify-between items-center mb-4">
                    <h4 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                      {lang === 'en' ? 'Calculated Weekly Agenda' : 'Emploi du Temps Hebdomadaire'}
                    </h4>
                    <span className="text-[10px] font-bold text-accent-600 bg-accent-50 border border-accent-100 px-2 py-0.5 rounded-full uppercase">
                      {studyPace === 'intensive' ? (lang === 'en' ? 'High Velocity' : 'Haute Vitesse') : (lang === 'en' ? 'Balanced' : 'Équilibré')}
                    </span>
                  </div>

                  {/* Generated Timetable */}
                  <div className="space-y-3.5">
                    {getWeeklyCalendar().map((slot, idx) => (
                      <div 
                        key={idx}
                        className="bg-slate-50/50 border border-slate-100 rounded-xl p-4 flex flex-col sm:flex-row justify-between gap-3 text-xs"
                      >
                        <div className="text-left">
                          <p className="font-extrabold text-brand-950 uppercase tracking-wider text-[10px]">{slot.day}</p>
                          <p className="text-slate-500 font-semibold mt-1">{slot.topic}</p>
                        </div>
                        <div className="bg-white px-3 py-1.5 rounded-lg border border-slate-150 font-mono font-bold text-brand-900 shrink-0 self-start sm:self-center">
                          {slot.activity}
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-8 pt-5 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
                    <span className="text-slate-400 font-semibold text-center sm:text-left">
                      {lang === 'en'
                        ? 'Would you like to reserve a customized private slot with our native tutors?'
                        : 'Souhaitez-vous un créneau personnalisé ou un horaire sur-mesure ?'}
                    </span>
                    <button
                      onClick={() => onRegisterRedirect(`Planning: ${targetLevel} - ${studyPace}`)}
                      className="bg-brand-600 hover:bg-brand-700 text-white font-bold px-4 py-2.5 rounded-xl transition-all shadow-md shadow-brand-100 shrink-0"
                    >
                      {lang === 'en' ? 'Consult Admissions' : 'Consulter les Inscriptions'}
                    </button>
                  </div>
                </div>

              </div>
            </motion.div>
          )}

        </AnimatePresence>

      </div>
    </div>
  );
}
