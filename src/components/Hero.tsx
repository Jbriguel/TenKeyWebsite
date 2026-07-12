import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Search, Globe2, Shield, Users, Trophy, Building2 } from 'lucide-react';

interface HeroProps {
  lang: 'en' | 'fr';
  onGetStarted: () => void;
  onLearnMore: () => void;
}

export default function Hero({ lang, onGetStarted, onLearnMore }: HeroProps) {
  const bgImageSrc = '/src/assets/images/corporate_hero_bg_1783686207302.jpg';

  // Interactive Level Test / Tracking Panel Tab states
  const [activeTab, setActiveTab] = useState<'test' | 'track'>('test');
  
  // Tab 1: Level test state
  const [targetLang, setTargetLang] = useState<'english' | 'french'>('english');
  const [currentLevel, setCurrentLevel] = useState<string>('B1');
  const [submittedTest, setSubmittedTest] = useState<boolean>(false);
  const [calculatedPath, setCalculatedPath] = useState<string>('');

  // Tab 2: Track admission state
  const [ticketId, setTicketId] = useState<string>('');
  const [searchedTicket, setSearchedTicket] = useState<boolean>(false);
  const [ticketResult, setTicketResult] = useState<{name: string, status: string, date: string} | null>(null);

  const handleTestSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    let recommendation = '';
    if (targetLang === 'english') {
      if (currentLevel === 'A1' || currentLevel === 'A2') {
        recommendation = lang === 'en' 
          ? 'Intensive General English (3 Months Level Booster) - Target A2/B1'
          : 'Anglais Général Intensif (Booster de Niveau 3 Mois) - Cible A2/B1';
      } else {
        recommendation = lang === 'en'
          ? 'VIP Executive English (CEFR Certifying) + TOEFL Preparation'
          : 'Anglais Professionnel VIP (Certifiant CECRL) + Préparation TOEFL';
      }
    } else {
      recommendation = lang === 'en'
        ? 'Professional French immersion & TEF Prep'
        : 'Français Professionnel & Préparation TEF / TCF';
    }
    setCalculatedPath(recommendation);
    setSubmittedTest(true);
  };

  const handleTrackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSearchedTicket(true);
    if (ticketId.trim().toUpperCase() === 'TK-2026') {
      setTicketResult({
        name: 'Jean-Marc KOFFI',
        status: lang === 'en' ? 'Admission Confirmed (Pre-Intermediate)' : 'Admission Confirmée (Pré-Intermédiaire)',
        date: '15/07/2026'
      });
    } else {
      setTicketResult(null);
    }
  };

  return (
    <div className="bg-white">
      {/* 
        HERO BANNER - FULLSCREEN & FULL-BLEED
        Spans 100% of viewport width and occupies the full viewport height.
      */}
      <div 
        className="relative overflow-hidden bg-slate-950 w-full min-h-screen flex flex-col justify-center"
        style={{
          backgroundImage: `url('${bgImageSrc}')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        {/* Deep dark gradient overlay - Dark heavy on the left for text, clear on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/30 pointer-events-none"></div>

        {/* Glowing dynamic crimson red ambient lights inside */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent-600/15 rounded-full filter blur-3xl pointer-events-none animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-50/5 rounded-full filter blur-3xl pointer-events-none"></div>

        {/* Hero Content Area inside standard grid */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-32 sm:pt-40 lg:pt-44 xl:pt-48 pb-20 sm:pb-28 lg:pb-36">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Bold headings following NDC style */}
            <div className="lg:col-span-7 flex flex-col items-start text-left text-white">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 bg-accent-500/15 border border-accent-500/30 text-accent-400 text-[10px] sm:text-xs font-black tracking-widest px-3.5 py-2 rounded-full mb-6 uppercase"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-ping"></span>
                <span>
                  {lang === 'en' ? 'YOUR BILINGUAL CAREER PARTNER' : 'VOTRE PARTENAIRE BILINGUE'}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-[3.5rem] xl:text-[4rem] font-black tracking-tight leading-[1.1] mb-6 font-display"
              >
                {lang === 'en' ? (
                  <>
                    Your Partner for <br />
                    <span className="text-accent-500">Bilingual Fluency & Growth.</span>
                  </>
                ) : (
                  <>
                    Votre Partenaire pour <br />
                    <span className="text-accent-500">L'Anglais & Le Succès.</span>
                  </>
                )}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-xs sm:text-sm text-slate-300 max-w-xl leading-relaxed mb-8 font-medium"
              >
                {lang === 'en'
                  ? 'Complete accredited solutions for professional language training, legal translations, conference interpretation, and international study visas in Lomé, Togo.'
                  : "Des solutions d’excellence à Lomé : formations d'anglais ultra-intensives adaptées à votre métier, traduction certifiée de documents juridiques, et interprétation de conférence."}
              </motion.p>

              {/* Custom Action Buttons matching NDC layout */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
              >
                <button
                  onClick={onGetStarted}
                  className="bg-accent-500 hover:bg-accent-600 text-white font-black text-xs sm:text-sm px-8 py-4 rounded-xl shadow-lg shadow-accent-950/25 hover:shadow-accent-500/20 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  <span>{lang === 'en' ? 'Our Programs' : 'Nos Programmes'}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onLearnMore}
                  className="bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-black text-xs sm:text-sm px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer border border-white/10"
                >
                  <span>{lang === 'en' ? 'Request a quote' : 'Demander un devis'}</span>
                </button>
              </motion.div>
            </div>

            {/* Right Column: Premium Floating Badges (NDC Web Mockup Style) */}
            <div className="lg:col-span-5 relative w-full h-[320px] lg:h-[400px] flex items-center justify-center mt-8 lg:mt-0">
              
              {/* Card 1: Top overlapping student avatars card */}
              <motion.div
                initial={{ opacity: 0, x: -30, y: -20 }}
                animate={{ opacity: 1, x: 0, y: 0 }}
                transition={{ duration: 0.7, delay: 0.3 }}
                className="absolute top-[8%] left-0 sm:left-[10%] lg:left-0 z-20 bg-slate-900/80 backdrop-blur-md border border-white/15 rounded-2xl p-4 shadow-xl max-w-[240px] text-left flex items-center gap-3.5"
              >
                <div className="flex -space-x-2.5 shrink-0">
                  <div className="w-8 h-8 rounded-full border border-slate-900 bg-slate-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=120" alt="Executive student" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-slate-900 bg-slate-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120" alt="Executive student" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-8 h-8 rounded-full border border-slate-900 bg-slate-200 overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120" alt="Executive student" className="w-full h-full object-cover" />
                  </div>
                </div>
                <div className="flex flex-col text-left">
                  <h4 className="text-[11px] font-black text-white leading-tight uppercase tracking-wider">
                    {lang === 'en' ? '+500 Executives' : '+500 Cadres Formés'}
                  </h4>
                  <p className="text-[10px] text-slate-300 font-semibold leading-none mt-0.5">
                    {lang === 'en' ? 'Mines, Bank, NGO, Gov' : 'Mines, Banques, ONG, État'}
                  </p>
                </div>
              </motion.div>

              {/* Card 2: Center crisp white card with a red progress bar */}
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="absolute z-10 bg-white text-slate-950 rounded-2xl p-5 shadow-2xl w-full max-w-[260px] text-left top-[35%] left-[5%] sm:left-[15%] lg:left-[5%]"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-xl bg-accent-50 flex items-center justify-center text-accent-600 shrink-0">
                    <Shield className="w-5 h-5" />
                  </div>
                  <div className="text-left">
                    <h3 className="text-xs font-black tracking-tight text-slate-900 uppercase font-display leading-none">
                      {lang === 'en' ? 'TOEFL & IELTS iBT®' : 'TOEFL & IELTS iBT®'}
                    </h3>
                    <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-1 leading-none">
                      {lang === 'en' ? 'FULL CEFR SOLUTION' : 'SOLUTION AGRÉÉE CECRL'}
                    </p>
                  </div>
                </div>
                <p className="text-[11px] text-slate-600 leading-normal font-semibold">
                  {lang === 'en' ? 'Official score boosting bootcamps and diagnostics.' : 'Entraînement intensif et diagnostics certifiés.'}
                </p>
                <div className="mt-3.5 h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-accent-500 rounded-full w-[88%]"></div>
                </div>
              </motion.div>

            </div>

          </div>
        </div>

        {/* Scroll Down Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1.5 text-white/50 hover:text-white transition-colors cursor-pointer"
          onClick={() => {
            const element = document.getElementById('diagnostic-console');
            if (element) {
              element.scrollIntoView({ behavior: 'smooth' });
            }
          }}
        >
          <span className="text-[9px] font-black tracking-widest uppercase">{lang === 'en' ? 'SCROLL' : 'DÉFILER'}</span>
          <div className="w-5 h-9 border-2 border-white/20 rounded-full flex justify-center p-1">
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
              className="w-1 h-1 bg-accent-500 rounded-full"
            />
          </div>
        </div>

        {/* Card 3: Anchored solid Red block flush with bottom-right corner of the rounded hero card (Iconic NDC look) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="absolute bottom-0 right-0 z-20 bg-accent-500 text-white rounded-tl-[2.5rem] p-6 sm:p-8 flex flex-col justify-center text-left min-w-[200px] sm:min-w-[250px] shadow-2xl"
        >
          <span className="text-[9px] sm:text-[10px] font-black tracking-widest uppercase text-white/80 leading-none">
            {lang === 'en' ? 'SUCCESS RATE' : 'TAUX DE RÉUSSITE'}
          </span>
          <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tighter leading-none text-white my-1.5 font-display">
            98.4%
          </h3>
          <p className="text-[10px] sm:text-xs text-white/90 font-bold leading-tight">
            {lang === 'en' ? 'Official CEFRL score achieved' : 'Scores officiels CECRL validés'}
          </p>
        </motion.div>

      </div>

      {/* 
        FLOATING ACCREDITED DIAGNOSTIC & TICKET TRACKER CONSOLE
        A horizontal panel right under the main Hero card. Highly interactive and extremely clean!
      */}
      <div id="diagnostic-console" className="max-w-7xl mx-auto px-4 pb-12 sm:px-6 pt-16">
        <div className="bg-slate-900 text-white rounded-3xl border border-slate-800 p-6 sm:p-8 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left side info */}
            <div className="lg:col-span-4 text-left">
              <span className="bg-accent-500/10 border border-accent-500/30 text-accent-400 text-[10px] font-black tracking-wider px-3 py-1 rounded-full uppercase">
                {lang === 'en' ? 'STUDENT TOOLS' : 'CONSOLE APPRENANT'}
              </span>
              <h3 className="text-xl sm:text-2xl font-black mt-3 font-display tracking-tight">
                {lang === 'en' ? 'Lomé Diagnostic Console' : 'Console d’Évaluation & Suivi'}
              </h3>
              <p className="text-xs text-slate-400 mt-2 leading-relaxed">
                {lang === 'en' 
                  ? 'Calculate your optimal training path or track your tuition receipt and admission files instantly.' 
                  : 'Générez votre parcours d’apprentissage sur-mesure ou vérifiez le statut de votre dossier en direct.'}
              </p>
              
              {/* Tab selectors */}
              <div className="bg-slate-950 p-1 rounded-xl flex gap-1.5 mt-5 border border-slate-850">
                <button
                  onClick={() => {
                    setActiveTab('test');
                    setSubmittedTest(false);
                  }}
                  className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === 'test' 
                      ? 'bg-accent-500 text-white shadow-md' 
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {lang === 'en' ? 'Level Assessment' : 'Test de Niveau'}
                </button>
                <button
                  onClick={() => {
                    setActiveTab('track');
                    setSearchedTicket(false);
                  }}
                  className={`flex-1 py-2 rounded-lg text-[10px] font-black uppercase tracking-wider transition-all cursor-pointer ${
                    activeTab === 'track' 
                      ? 'bg-accent-500 text-white shadow-md' 
                      : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {lang === 'en' ? 'Track Ticket' : 'Vérifier Reçu'}
                </button>
              </div>
            </div>

            {/* Right side form container */}
            <div className="lg:col-span-8 bg-slate-950/70 border border-slate-800 rounded-2xl p-5 sm:p-6 text-left">
              <AnimatePresence mode="wait">
                {activeTab === 'test' ? (
                  <motion.div
                    key="test-pane"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {!submittedTest ? (
                      <form onSubmit={handleTestSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                        <div className="md:col-span-5">
                          <label className="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                            {lang === 'en' ? 'Target Language' : 'Langue Ciblée'}
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            <button
                              type="button"
                              onClick={() => setTargetLang('english')}
                              className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                                targetLang === 'english'
                                  ? 'bg-accent-500/10 border-accent-500/50 text-white'
                                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                              }`}
                            >
                              {lang === 'en' ? 'English 🇬🇧' : 'Anglais 🇬🇧'}
                            </button>
                            <button
                              type="button"
                              onClick={() => setTargetLang('french')}
                              className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                                targetLang === 'french'
                                  ? 'bg-accent-500/10 border-accent-500/50 text-white'
                                  : 'bg-slate-900 border-slate-800 text-slate-400 hover:bg-slate-850'
                              }`}
                            >
                              {lang === 'en' ? 'French 🇫🇷' : 'Français 🇫🇷'}
                            </button>
                          </div>
                        </div>

                        <div className="md:col-span-4">
                          <label className="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                            {lang === 'en' ? 'Current Level' : 'Votre Niveau Actuel'}
                          </label>
                          <select
                            value={currentLevel}
                            onChange={(e) => setCurrentLevel(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2.5 text-xs font-semibold text-white focus:outline-none focus:border-accent-500 cursor-pointer"
                          >
                            <option value="A1">A1 - {lang === 'en' ? 'Absolute Beginner' : 'Débutant Complet'}</option>
                            <option value="A2">A2 - {lang === 'en' ? 'Elementary' : 'Élémentaire'}</option>
                            <option value="B1">B1 - {lang === 'en' ? 'Pre-Intermediate' : 'Pré-Intermédiaire'}</option>
                            <option value="B2">B2 - {lang === 'en' ? 'Upper Intermediate' : 'Intermédiaire Supérieur'}</option>
                            <option value="C1">C1 - {lang === 'en' ? 'Advanced Business' : 'Avancé Affaires'}</option>
                          </select>
                        </div>

                        <div className="md:col-span-3">
                          <button
                            type="submit"
                            className="w-full bg-accent-500 hover:bg-accent-600 text-white py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <span>{lang === 'en' ? 'Calculate Path' : 'Calculer'}</span>
                          </button>
                        </div>
                      </form>
                    ) : (
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col md:flex-row items-center justify-between gap-4"
                      >
                        <div className="text-left">
                          <h4 className="font-extrabold text-sm text-accent-400 flex items-center gap-1.5">
                            <Check className="w-4 h-4" />
                            {lang === 'en' ? 'Optimal Pathway Identified!' : 'Parcours Idéal Déterminé !'}
                          </h4>
                          <p className="text-xs text-slate-100 font-extrabold mt-1">
                            {calculatedPath}
                          </p>
                        </div>
                        <div className="flex gap-2 shrink-0">
                          <button
                            onClick={() => setSubmittedTest(false)}
                            className="py-1.5 px-4 rounded-lg text-[10px] font-bold border border-slate-800 hover:bg-white/5 transition-colors cursor-pointer"
                          >
                            {lang === 'en' ? 'Reset' : 'Réinitialiser'}
                          </button>
                          <button
                            onClick={onGetStarted}
                            className="py-1.5 px-4 rounded-lg text-[10px] font-black bg-accent-500 hover:bg-accent-600 text-white transition-colors cursor-pointer animate-bounce"
                          >
                            {lang === 'en' ? 'Reserve Seat' : 'Réserver'}
                          </button>
                        </div>
                      </motion.div>
                    )}
                  </motion.div>
                ) : (
                  <motion.div
                    key="track-pane"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.2 }}
                  >
                    {!searchedTicket ? (
                      <form onSubmit={handleTrackSubmit} className="grid grid-cols-1 md:grid-cols-12 gap-4 items-end">
                        <div className="md:col-span-8 text-left">
                          <label className="block text-[9px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                            {lang === 'en' ? 'Admission / Receipt ID' : 'Numéro d’Admission / Reçu'}
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="e.g. TK-2026"
                            value={ticketId}
                            onChange={(e) => setTicketId(e.target.value)}
                            className="w-full bg-slate-900 border border-slate-800 rounded-xl px-4 py-2 text-xs font-bold text-white uppercase placeholder-slate-500 focus:outline-none focus:border-accent-500"
                          />
                          <p className="text-[10px] text-slate-500 mt-1 font-semibold">
                            {lang === 'en' ? 'Hint: Enter "TK-2026" for a live simulation' : 'Saisissez "TK-2026" pour simuler un dossier'}
                          </p>
                        </div>

                        <div className="md:col-span-4">
                          <button
                            type="submit"
                            className="w-full bg-accent-500 hover:bg-accent-600 text-white py-2.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-colors shadow-md flex items-center justify-center gap-1.5 cursor-pointer"
                          >
                            <Search className="w-3.5 h-3.5" />
                            <span>{lang === 'en' ? 'Verify Status' : 'Vérifier Reçu'}</span>
                          </button>
                        </div>
                      </form>
                    ) : (
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="flex flex-col md:flex-row items-center justify-between gap-4"
                      >
                        {ticketResult ? (
                          <div className="text-left flex items-center gap-3">
                            <div className="w-9 h-9 rounded-full bg-accent-500/15 border border-accent-500/30 text-accent-400 flex items-center justify-center shrink-0">
                              <Check className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-extrabold text-xs text-white">
                                Student: Jean-Marc KOFFI | <span className="text-accent-400">ID: TK-2026</span>
                              </h4>
                              <p className="text-[11px] text-accent-400 font-bold mt-0.5">
                                {ticketResult.status} (Lomé Campus) - Start: {ticketResult.date}
                              </p>
                            </div>
                          </div>
                        ) : (
                          <div className="text-left">
                            <p className="text-xs text-rose-400 font-black">
                              {lang === 'en' ? 'File or Receipt ID not found.' : 'Identifiant introuvable.'}
                            </p>
                            <p className="text-[10px] text-slate-400">
                              {lang === 'en' ? 'Please double check or search TK-2026.' : 'Veuillez saisir "TK-2026" pour tester.'}
                            </p>
                          </div>
                        )}
                        <button
                          onClick={() => setSearchedTicket(false)}
                          className="py-1.5 px-3.5 rounded-lg text-[10px] font-bold border border-slate-800 hover:bg-white/5 transition-colors shrink-0 cursor-pointer"
                        >
                          {lang === 'en' ? 'Search Again' : 'Nouvelle Recherche'}
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>
      </div>

      {/* 
        TRUST LOGO BANNER (Matches "Partners of world leading companies" in Uthao/NDC)
        Crisp, clean, grayscale professional trust alignment.
      */}
      <div className="border-b border-slate-100 bg-white py-10">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-6">
            {lang === 'en' 
              ? 'Authorized Training Center & Strategic Partners' 
              : 'Centre de Formation Agréé & Partenaires Institutionnels'}
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 sm:gap-16 opacity-65 grayscale hover:grayscale-0 transition-all duration-300">
            {/* TOEFL / ETS */}
            <div className="flex items-center gap-1.5 font-display text-slate-900 font-extrabold text-base">
              <span className="bg-slate-900 text-white rounded px-1.5 py-0.5 text-xs font-black">ETS</span>
              <span>TOEFL iBT®</span>
            </div>
            {/* CEFR */}
            <div className="flex items-center gap-1 font-display text-slate-900 font-bold text-sm tracking-tighter">
              <span className="text-accent-500 font-black">CEFRL</span>
              <span>STANDARD</span>
            </div>
            {/* British Council */}
            <div className="text-slate-900 font-display font-extrabold text-sm tracking-tight flex items-center gap-1">
              <Globe2 className="w-4 h-4 text-slate-600" />
              <span>BRITISH COUNCIL</span>
            </div>
            {/* West Africa Corp (Institutional) */}
            <div className="text-slate-900 font-display font-black text-xs tracking-widest uppercase">
              <span>★ BOAD PARTNER</span>
            </div>
            {/* Lomé Port Authority style indicator */}
            <div className="text-slate-900 font-display font-extrabold text-sm flex items-center gap-1">
              <Building2 className="w-4 h-4 text-slate-600" />
              <span>PAL TOGO</span>
            </div>
          </div>
        </div>
      </div>

      {/* 
        SERVICE OVERVIEW WITH ASYMMETRIC COLLAGE (Matches bottom part of NDC mockup)
      */}
      <div className="py-20 sm:py-28 bg-white" id="overview">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Left side: Content block with label and button */}
            <div className="lg:col-span-6 flex flex-col items-start text-left">
              <span className="bg-accent-50 text-accent-600 text-[10px] font-black tracking-widest px-3 py-1.5 rounded-full uppercase mb-4 border border-accent-100">
                {lang === 'en' ? 'Academy Overview' : 'Aperçu de l’Académie'}
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 font-display tracking-tight leading-tight mb-6">
                {lang === 'en' 
                  ? 'Command Global Business with Elite Language Mastery' 
                  : 'Dominez le commerce mondial avec une maîtrise parfaite des langues.'}
              </h2>
              <p className="text-sm sm:text-base text-slate-500 leading-relaxed mb-6 font-medium">
                {lang === 'en'
                  ? 'Our Lomé campus bridges the gap between learning and executive practice. We don’t just teach grammar rules—we cultivate bilingual business leadership, diplomatic fluency, and instant operational capability.'
                  : 'Notre campus de Lomé comble le fossé entre la théorie académique et la pratique exécutive. Nous ne formons pas seulement aux règles grammaticales : nous cultivons le leadership bilingue des affaires, l\'aisance diplomatique et la capacité opérationnelle.'}
              </p>
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed mb-8 font-medium">
                {lang === 'en'
                  ? 'Equipped with specialized translation equipment, VIP private booths, and accredited CEFR assessment simulators, we prepare you directly for global roles and international certifications.'
                  : 'Équipés de cabines d\'interprétation spécialisées, de box d\'apprentissage VIP et de simulateurs certifiés CECRL, nous vous préparons directement à exceller à l\'échelle mondiale.'}
              </p>
              
              <button
                onClick={onGetStarted}
                className="bg-slate-950 hover:bg-slate-900 text-white font-black text-xs px-6 py-3.5 rounded-xl transition-all flex items-center gap-2 group cursor-pointer shadow-md"
              >
                <span>{lang === 'en' ? 'Get Started' : 'Commencer Maintenant'}</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            {/* Right side: 3-Part Premium Bento Collage */}
            <div className="lg:col-span-6 grid grid-cols-12 gap-3.5">
              {/* Tall portrait image card */}
              <div className="col-span-7 relative group rounded-3xl overflow-hidden shadow-lg aspect-[3/4]">
                <img
                  src="/src/assets/images/lome_bilingual_students_1783685197179.jpg"
                  alt="Students collaborating at Lomé language academy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/50 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <p className="text-[10px] font-black uppercase text-accent-400 tracking-wider">Lomé Campus</p>
                  <p className="text-xs sm:text-sm font-extrabold text-white">Elite Classrooms</p>
                </div>
              </div>

              {/* Two stacked square image cards */}
              <div className="col-span-5 flex flex-col gap-3.5">
                {/* 1. Translation Booth */}
                <div className="relative group rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-100">
                  <img
                    src="/src/assets/images/lome_interpreter_booth_1783685229916.jpg"
                    alt="Translation cabin conference"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
                  <div className="absolute bottom-3 left-3">
                    <p className="text-[9px] font-black uppercase text-accent-400 tracking-wider">VIP Cabinet</p>
                    <p className="text-[11px] font-bold text-white">Interpretation</p>
                  </div>
                </div>

                {/* 2. Abstract Waves Path */}
                <div className="relative group rounded-2xl overflow-hidden shadow-md aspect-square bg-slate-50">
                  <img
                    src="/src/assets/images/learning_path_bg_1783685214853.jpg"
                    alt="Adaptive CEFR learning path background"
                    className="w-full h-full object-cover opacity-95 transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/45 via-transparent to-transparent"></div>
                  <div className="absolute bottom-3 left-3 text-left">
                    <p className="text-[9px] font-black uppercase text-brand-900 tracking-wider">Adaptive</p>
                    <p className="text-[11px] font-extrabold text-slate-900">CEFRL Pathways</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
