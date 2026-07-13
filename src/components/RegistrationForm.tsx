import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { TRAINING_MODULES } from '../data';
import { Send, CheckCircle2, Ticket, QrCode, ClipboardList, RefreshCw, Star, Info, HelpCircle } from 'lucide-react';
import { RegistrationSubmission } from '../types';

interface RegistrationFormProps {
  lang: string;
  selectedModuleName: string;
  setSelectedModuleName: (name: string) => void;
}

// Interactive English Level Quiz data
const QUIZ_QUESTIONS = [
  {
    id: 1,
    question: "Select the correct option: 'He ______ to the training center every evening.'",
    frenchQuestion: "Sélectionnez l'option correcte : 'He ______ to the training center every evening.'",
    options: ['go', 'goes', 'going', 'is go'],
    correctIdx: 1,
  },
  {
    id: 2,
    question: "Choose the correct preposition: 'I have been studying English ______ 2024.'",
    frenchQuestion: "Choisissez la bonne préposition : 'I have been studying English ______ 2024.'",
    options: ['for', 'since', 'during', 'ago'],
    correctIdx: 1,
  },
  {
    id: 3,
    question: "Complete the conditional: 'If I ______ enough time, I would join the VIP class.'",
    frenchQuestion: "Complétez le conditionnel : 'If I ______ enough time, I would join the VIP class.'",
    options: ['have', 'had', 'will have', 'would have'],
    correctIdx: 1,
  },
  {
    id: 4,
    question: "Choose the correct active verb: 'The official documents ______ by TEN KEY last week.'",
    frenchQuestion: "Choisissez la forme verbale correcte : 'The official documents ______ by TEN KEY last week.'",
    options: ['translated', 'were translated', 'had translate', 'were translating'],
    correctIdx: 1,
  }
];

export default function RegistrationForm({ lang, selectedModuleName, setSelectedModuleName }: RegistrationFormProps) {
  // Form State
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [createdTicket, setCreatedTicket] = useState<RegistrationSubmission | null>(null);

  // Quiz State
  const [quizActive, setQuizActive] = useState(false);
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [score, setScore] = useState(0);
  const [quizCompleted, setQuizCompleted] = useState(false);
  const [estimatedLevel, setEstimatedLevel] = useState('');

  // Auto-fill selected course based on local state change
  useEffect(() => {
    if (selectedModuleName) {
      const exists = TRAINING_MODULES.some(
        (m) => m.title === selectedModuleName || m.frenchTitle === selectedModuleName
      );
      if (!exists) {
        // Find best match or default
        setSelectedModuleName(TRAINING_MODULES[0].title);
      }
    } else {
      setSelectedModuleName(TRAINING_MODULES[0].title);
    }
  }, [selectedModuleName]);

  const handleQuizAnswer = (optionIdx: number) => {
    setSelectedAnswer(optionIdx);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer === QUIZ_QUESTIONS[currentQuestionIdx].correctIdx) {
      setScore((prev) => prev + 1);
    }

    if (currentQuestionIdx + 1 < QUIZ_QUESTIONS.length) {
      setCurrentQuestionIdx((prev) => prev + 1);
      setSelectedAnswer(null);
    } else {
      // Calculate grade and auto fill module
      const finalScore = score + (selectedAnswer === QUIZ_QUESTIONS[currentQuestionIdx].correctIdx ? 1 : 0);
      let level = 'Beginner (A1)';
      let recommendedModule = 'General & Professional English';
      if (finalScore === 4) {
        level = 'Advanced (C1/B2)';
        recommendedModule = 'Exam Preparation';
      } else if (finalScore >= 2) {
        level = 'Intermediate (B1)';
        recommendedModule = 'General & Professional English';
      } else {
        level = 'Elementary (A2)';
        recommendedModule = 'General & Professional English';
      }

      setEstimatedLevel(level);
      setSelectedModuleName(recommendedModule);
      setQuizCompleted(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestionIdx(0);
    setSelectedAnswer(null);
    setScore(0);
    setQuizCompleted(false);
    setQuizActive(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    // Generate unique level test ticket details
    const submissionId = 'TK-' + Math.floor(100000 + Math.random() * 900000);
    const newSubmission: RegistrationSubmission = {
      id: submissionId,
      name,
      email: email || 'not-provided@tenkey.com',
      phone,
      selectedModule: selectedModuleName,
      message: message || '',
      createdAt: new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'fr-TG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      }),
      status: 'pending'
    };

    // Save submission locally
    try {
      const existing = localStorage.getItem('tenkey_submissions');
      const list = existing ? JSON.parse(existing) : [];
      list.push(newSubmission);
      localStorage.setItem('tenkey_submissions', JSON.stringify(list));
    } catch (err) {
      console.error('Error saving registration', err);
    }

    setCreatedTicket(newSubmission);
    setFormSubmitted(true);
  };

  const handleResetForm = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setFormSubmitted(false);
    setCreatedTicket(null);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50/30">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* LEFT: Mini-Quiz Interactive Widget & Info Banner */}
          <div className="lg:col-span-5 flex flex-col gap-6 text-left">
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <HelpCircle className="w-5 h-5 text-accent-500" />
                <h3 className="font-extrabold text-brand-950 font-display text-lg">
                  {lang === 'en' ? 'Free Level Self-Assessment' : 'Auto-évaluation de Niveau'}
                </h3>
              </div>
              <p className="text-gray-500 text-xs mb-5 leading-relaxed">
                {lang === 'en'
                  ? "Not sure which class fits your current proficiency? Spend 1 minute taking our quick quiz to get instantly recommended for the perfect module."
                  : "Vous ne savez pas quel groupe correspond à votre niveau ? Faites notre test rapide en 1 minute pour trouver la formule idéale."}
              </p>

              {!quizActive && !quizCompleted && (
                <button
                  onClick={() => setQuizActive(true)}
                  className="w-full bg-brand-50 hover:bg-brand-100 text-brand-800 font-bold text-xs py-3 rounded-xl border border-brand-200/50 transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Start 1-Min Level Quiz' : 'Démarrer le Test de Niveau'}
                </button>
              )}

              {/* Active Quiz Card */}
              {quizActive && !quizCompleted && (
                <div className="bg-brand-50/50 border border-brand-100 rounded-2xl p-4">
                  <div className="flex justify-between items-center text-[10px] text-brand-600 font-bold uppercase tracking-wider mb-2">
                    <span>
                      {lang === 'en' ? 'Question' : 'Question'} {currentQuestionIdx + 1} of {QUIZ_QUESTIONS.length}
                    </span>
                    <span>{Math.round(((currentQuestionIdx) / QUIZ_QUESTIONS.length) * 100)}% Complete</span>
                  </div>

                  <p className="text-xs font-bold text-brand-950 leading-relaxed mb-4">
                    {lang === 'en' ? QUIZ_QUESTIONS[currentQuestionIdx].question : QUIZ_QUESTIONS[currentQuestionIdx].frenchQuestion}
                  </p>

                  <div className="space-y-2">
                    {QUIZ_QUESTIONS[currentQuestionIdx].options.map((option, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleQuizAnswer(idx)}
                        className={`w-full text-left text-xs p-3 rounded-xl border font-semibold transition-all ${
                          selectedAnswer === idx
                            ? 'bg-brand-600 text-white border-transparent'
                            : 'bg-white hover:bg-gray-50 text-gray-700 border-gray-200'
                        }`}
                      >
                        {option}
                      </button>
                    ))}
                  </div>

                  <div className="flex justify-end mt-4">
                    <button
                      disabled={selectedAnswer === null}
                      onClick={handleNextQuestion}
                      className={`font-bold text-xs px-4 py-2 rounded-lg transition-colors ${
                        selectedAnswer === null
                          ? 'bg-gray-200 text-gray-400 cursor-not-allowed'
                          : 'bg-accent-500 hover:bg-accent-600 text-white cursor-pointer'
                      }`}
                    >
                      {currentQuestionIdx + 1 === QUIZ_QUESTIONS.length
                        ? (lang === 'en' ? 'See Result' : 'Voir le Résultat')
                        : (lang === 'en' ? 'Next' : 'Suivant')}
                    </button>
                  </div>
                </div>
              )}

              {/* Quiz Completed Banner */}
              {quizCompleted && (
                <div className="bg-brand-50 border border-brand-100 rounded-2xl p-4 text-center">
                  <span className="text-2xl">🎉</span>
                  <h4 className="font-extrabold text-brand-950 text-sm font-display mt-2">
                    {lang === 'en' ? 'Quiz Completed!' : 'Test de Niveau Terminé !'}
                  </h4>
                  <p className="text-gray-500 text-[11px] mt-1 mb-3">
                    {lang === 'en' ? 'Your estimated proficiency is:' : 'Votre niveau estimé est :'}
                  </p>
                  <div className="inline-block bg-accent-500 text-white font-extrabold text-xs px-4 py-1.5 rounded-full uppercase tracking-wider mb-3">
                    {estimatedLevel}
                  </div>
                  <p className="text-[10px] text-brand-800 font-semibold leading-relaxed mb-4">
                    {lang === 'en'
                      ? `We have automatically selected "${selectedModuleName}" in your registration form below.`
                      : `Nous avons automatiquement présélectionné "${selectedModuleName}" dans le formulaire ci-dessous.`}
                  </p>
                  <button
                    onClick={resetQuiz}
                    className="flex items-center justify-center gap-1.5 mx-auto text-[10px] text-brand-700 font-bold hover:text-brand-950 transition-colors"
                  >
                    <RefreshCw className="w-3.5 h-3.5" />
                    <span>{lang === 'en' ? 'Retake Test' : 'Refaire le Test'}</span>
                  </button>
                </div>
              )}
            </div>

            {/* Quick Registration inclusions */}
            <div className="bg-white border border-gray-100 rounded-3xl p-6 shadow-sm">
              <div className="flex items-center gap-2 mb-4">
                <ClipboardList className="w-5 h-5 text-brand-600" />
                <h3 className="font-extrabold text-brand-950 font-display text-lg">
                  {lang === 'en' ? 'Registration Guidelines' : 'Consignes d\'Admission'}
                </h3>
              </div>

              <div className="space-y-4">
                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-50 text-brand-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    1
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-xs text-brand-950 mb-0.5">
                      {lang === 'en' ? 'Submit Registration Details' : 'Remplir le formulaire'}
                    </h4>
                    <p className="text-[11px] text-gray-400 leading-normal">
                      {lang === 'en' ? 'Enter your legal name, email, WhatsApp phone, and desired training module.' : 'Indiquez votre nom, email, téléphone et le module souhaité.'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-50 text-brand-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    2
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-xs text-brand-950 mb-0.5">
                      {lang === 'en' ? 'Get Level Test Ticket' : 'Obtenir votre ticket'}
                    </h4>
                    <p className="text-[11px] text-gray-400 leading-normal">
                      {lang === 'en' ? 'Instantly download your registration level test ticket with a unique QR code.' : 'Générez et imprimez votre reçu avec code QR de test de niveau.'}
                    </p>
                  </div>
                </div>

                <div className="flex gap-3">
                  <div className="w-6 h-6 rounded-full bg-brand-50 text-brand-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5">
                    3
                  </div>
                  <div className="text-left">
                    <h4 className="font-bold text-xs text-brand-950 mb-0.5">
                      {lang === 'en' ? 'Onsite Validation & Testing' : 'Validation au centre'}
                    </h4>
                    <p className="text-[11px] text-gray-400 leading-normal">
                      {lang === 'en' ? 'Bring your ticket to Avedji near Laus Deo pharmacy to complete assessment.' : 'Rendez-vous à notre centre muni de votre reçu pour débuter le test.'}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT: Dynamic Form / Interactive Ticket */}
          <div className="lg:col-span-7">
            <AnimatePresence mode="wait">
              {!formSubmitted ? (
                /* Registration Form */
                <motion.div
                  key="form"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-xl text-left"
                >
                  <h3 className="text-2xl font-extrabold text-brand-950 font-display mb-2">
                    {lang === 'en' ? 'Online Student Registration' : 'Formulaire d\'Inscription'}
                  </h3>
                  <p className="text-gray-500 text-xs mb-6">
                    {lang === 'en'
                      ? 'Reserve your seat or secure translation/interpretation slots instantly.'
                      : 'Réservez votre place ou formulez votre demande de traduction en ligne.'}
                  </p>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-brand-900 uppercase tracking-wide mb-1.5">
                        {lang === 'en' ? 'Full Name / Nom Complet' : 'Nom Complet *'}
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={lang === 'en' ? 'e.g., Koffi Mensah' : 'Ex: Koffi Mensah'}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all font-semibold text-brand-950"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Email */}
                      <div>
                        <label className="block text-xs font-bold text-brand-900 uppercase tracking-wide mb-1.5">
                          {lang === 'en' ? 'Email Address' : 'Adresse Email'}
                        </label>
                        <input
                          type="email"
                          placeholder="koffi@example.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all font-semibold text-brand-950"
                        />
                      </div>

                      {/* Phone */}
                      <div>
                        <label className="block text-xs font-bold text-brand-900 uppercase tracking-wide mb-1.5">
                          {lang === 'en' ? 'Phone Number (WhatsApp)' : 'Numéro WhatsApp *'}
                        </label>
                        <input
                          type="tel"
                          required
                          placeholder="e.g., +228 90 01 02 03"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all font-semibold text-brand-950"
                        />
                      </div>
                    </div>

                    {/* Module Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-brand-900 uppercase tracking-wide mb-1.5">
                        {lang === 'en' ? 'Selected Module / Cabinet' : 'Module de Formation *'}
                      </label>
                      <select
                        value={selectedModuleName}
                        onChange={(e) => setSelectedModuleName(e.target.value)}
                        className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all font-bold text-brand-950"
                      >
                        {TRAINING_MODULES.map((mod) => (
                          <option key={mod.id} value={lang === 'en' ? mod.title : (mod.frenchTitle || mod.title)}>
                            {lang === 'en' ? mod.title : (mod.frenchTitle || mod.title)}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-bold text-brand-900 uppercase tracking-wide mb-1.5">
                        {lang === 'en' ? 'Additional message or notes' : 'Message ou remarques spécifiques'}
                      </label>
                      <textarea
                        rows={3}
                        placeholder={
                          lang === 'en'
                            ? 'Let us know if you want home training, are preparing for exams, or have document translation requests...'
                            : "Précisez vos besoins : horaires spécifiques, traduction de documents, cours VIP à domicile..."
                        }
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full bg-gray-50/50 border border-gray-200 rounded-xl px-4 py-3 text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all font-semibold text-brand-950"
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold text-sm py-4 rounded-xl shadow-lg shadow-accent-100 hover:shadow-accent-200 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>{lang === 'en' ? 'Generate Level Test Ticket' : 'Générer mon Reçu de Test'}</span>
                      <Send className="w-4 h-4" />
                    </button>
                  </form>
                </motion.div>
              ) : (
                /* Dynamic Interactive Admission Ticket View */
                <motion.div
                  key="ticket"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="bg-white border border-gray-100 rounded-3xl p-6 sm:p-8 shadow-2xl text-left"
                >
                  <div className="bg-brand-50 text-brand-800 p-4 rounded-2xl flex items-center gap-3 mb-6">
                    <CheckCircle2 className="w-5 h-5 shrink-0 text-accent-500" />
                    <div className="text-xs font-bold leading-normal">
                      {lang === 'en'
                        ? 'Admission Reservation Confirmed! Your official boarding pass is listed below.'
                        : 'Réservation validée ! Votre ticket d\'accès au test de niveau a été généré.'}
                    </div>
                  </div>

                  {/* Interactive Ticket Layout */}
                  <div className="border border-brand-100 rounded-2xl overflow-hidden shadow-md">
                    {/* Ticket Header */}
                    <div className="bg-brand-600 text-white p-4 flex justify-between items-center border-b border-dashed border-brand-800">
                      <div>
                        <p className="text-[9px] uppercase tracking-wider text-brand-300 font-bold leading-none mb-1">
                          TEN KEY CENTER
                        </p>
                        <h4 className="font-extrabold text-sm font-display leading-none">
                          LEVEL TEST PASS
                        </h4>
                      </div>
                      <Ticket className="w-6 h-6 text-accent-400" />
                    </div>

                    {/* Ticket Body */}
                    <div className="bg-brand-50/40 p-5 grid grid-cols-1 sm:grid-cols-3 gap-6 items-center">
                      <div className="sm:col-span-2 space-y-4 text-xs">
                        <div>
                          <p className="text-[10px] text-gray-400 uppercase font-semibold leading-none mb-1">
                            {lang === 'en' ? "Candidate's Name" : "Nom du Candidat"}
                          </p>
                          <p className="font-bold text-brand-950 text-sm">
                            {createdTicket?.name}
                          </p>
                        </div>

                        <div>
                          <p className="text-[10px] text-gray-400 uppercase font-semibold leading-none mb-1">
                            {lang === 'en' ? "Selected Training" : "Module Sélectionné"}
                          </p>
                          <p className="font-bold text-brand-950">
                            {createdTicket?.selectedModule}
                          </p>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <p className="text-[10px] text-gray-400 uppercase font-semibold leading-none mb-1">
                              {lang === 'en' ? "Ticket Serial" : "N° de Ticket"}
                            </p>
                            <p className="font-mono font-bold text-brand-800">
                              {createdTicket?.id}
                            </p>
                          </div>
                          <div>
                            <p className="text-[10px] text-gray-400 uppercase font-semibold leading-none mb-1">
                              {lang === 'en' ? "Issued Date" : "Date de Création"}
                            </p>
                            <p className="font-bold text-brand-950">
                              {createdTicket?.createdAt.split(',')[0]}
                            </p>
                          </div>
                        </div>
                      </div>

                      {/* Mock QR Code for entry */}
                      <div className="bg-white border border-brand-100 rounded-xl p-4 flex flex-col items-center justify-center shadow-sm">
                        <QrCode className="w-16 h-16 text-brand-900" />
                        <span className="text-[9px] font-bold text-gray-400 mt-2 uppercase tracking-wide">
                          {createdTicket?.id}
                        </span>
                      </div>
                    </div>

                    {/* Ticket Footer (Onsite Instruction) */}
                    <div className="bg-white p-4 border-t border-gray-100 text-[10px] text-gray-500 leading-normal flex items-start gap-2">
                      <Info className="w-4 h-4 text-accent-500 shrink-0" />
                      <span>
                        {lang === 'en'
                          ? 'Please print or screenshot this ticket and present it at the main desk at Avedji near LAUS DEO pharmacy to complete your 10,000 FCFA level test onboarding.'
                          : 'Veuillez imprimer ou photographier ce ticket et le présenter au secrétariat d\'Avedji près de la pharmacie LAUS DEO pour valider votre test de niveau (10 000 FCFA).'}
                      </span>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-4 mt-6">
                    <button
                      onClick={() => window.print()}
                      className="flex-1 bg-brand-700 hover:bg-brand-600 text-white font-bold text-xs py-3 rounded-xl transition-colors text-center cursor-pointer"
                    >
                      {lang === 'en' ? 'Print Ticket' : 'Imprimer le Ticket'}
                    </button>
                    <button
                      onClick={handleResetForm}
                      className="flex-1 bg-gray-100 hover:bg-gray-200 text-gray-700 font-bold text-xs py-3 rounded-xl transition-colors text-center cursor-pointer"
                    >
                      {lang === 'en' ? 'Register Another Student' : "Inscrire un autre étudiant"}
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Premium Travel-Style Newsletter Subscription Banner (matches mockup 1 perfectly) */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-24 bg-zinc-400 rounded-[3rem] p-8 md:p-14 text-center max-w-5xl mx-auto relative overflow-hidden"
        > 
          <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px]"></div>
          
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
            <h3 className="text-2xl sm:text-4xl font-black text-white font-display tracking-tight leading-tight mb-4">
              {lang === 'en'
                ? 'Get Your Language Inspiration Straight to Your Inbox'
                : 'Recevez nos Conseils de Formation Directement par Mail'}
            </h3>
            <p className="text-zinc-50 text-xs sm:text-sm mb-8 font-medium max-w-md leading-relaxed">
              {lang === 'en'
                ? 'Subscribe to get exclusive study tips, level-test updates, and special discounts from TEN KEY.'
                : 'Abonnez-vous pour recevoir des astuces de langues exclusives, des offres et des actualités de formation.'}
            </p>
 
            <form
              onSubmit={(e) => {
                e.preventDefault();
                const input = (e.currentTarget.elements[0] as HTMLInputElement);
                if (input.value) {
                  alert(lang === 'en' ? `Subscribed successfully with: ${input.value}` : `Inscription réussie avec : ${input.value}`);
                  input.value = '';
                }
              }}
              className="flex flex-col sm:flex-row gap-3 w-full max-w-md"
            >
              <input
                type="email"
                required
                placeholder={lang === 'en' ? 'Enter your email address' : 'Votre adresse email...'}
                className="flex-grow bg-white text-zinc-900 placeholder-zinc-400 text-xs px-6 py-4 rounded-full border-none outline-none focus:ring-4 focus:ring-white/20 font-semibold shadow-sm"
              />
              <button
                type="submit"
                className="bg-zinc-800 hover:bg-zinc-900 text-white font-bold text-xs px-8 py-4 rounded-full transition-colors whitespace-nowrap cursor-pointer shadow-md"
              >
                {lang === 'en' ? 'Subscribe' : "S'abonner"}
              </button>
            </form>

            <p className="text-[10px] text-zinc-100 mt-6 font-semibold opacity-90">
              {lang === 'en'
                ? 'Subscribe to our newsletter and exclusive promotions. Read our Privacy Policy.'
                : 'Abonnez-vous à notre newsletter et promotions exclusives. Lire notre Politique de Confidentialité.'}
            </p>
          </div>
        </motion.div> */}
      </div>
    </section>
  );
}
