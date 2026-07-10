import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight, Check, Search, Calendar, GraduationCap, Sparkles, Building2, Globe2 } from 'lucide-react';

interface HeroProps {
  lang: 'en' | 'fr';
  onGetStarted: () => void;
  onLearnMore: () => void;
}

export default function Hero({ lang, onGetStarted, onLearnMore }: HeroProps) {
  // Use the newly generated breathtaking corporate building background
  const bgImageSrc = '/src/assets/images/corporate_hero_bg_1783686207302.jpg';

  // Interactive Level Test tab states
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
        name: lang === 'en' ? 'Jean-Marc KOFFI' : 'Jean-Marc KOFFI',
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
        HERO WRAPPER CARD (Inspired by Uthao cargo mockup)
        A beautiful rounded card wrapper with outer spacing and ultra-premium shadow.
      */}
      <div className="max-w-7xl mx-auto px-4 pt-4 pb-12 sm:px-6">
        <div 
          className="relative rounded-[2.5rem] sm:rounded-[3.5rem] overflow-hidden shadow-2xl bg-slate-950 min-h-[620px] lg:min-h-[680px] flex flex-col justify-between"
          style={{
            backgroundImage: `url('${bgImageSrc}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Deep dark gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/85 to-slate-950/45 pointer-events-none"></div>

          {/* Glowing subtle light elements inside */}
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-brand-500/10 rounded-full filter blur-3xl pointer-events-none"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-accent-500/5 rounded-full filter blur-3xl pointer-events-none"></div>

          {/* Hero Content Area */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 px-6 sm:px-12 lg:px-16 py-12 sm:py-20 items-center my-auto w-full">
            
            {/* Left Column: Bold Catchy Headings */}
            <div className="lg:col-span-7 flex flex-col items-start text-left text-white">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-1.5 bg-accent-500/15 border border-accent-500/30 text-accent-300 text-[10px] sm:text-xs font-black tracking-widest px-3 py-1.5 rounded-full mb-6 uppercase"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {lang === 'en' ? 'Unmatched Academic Excellence' : 'Excellence Académique Inégalée'}
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 font-display"
              >
                {lang === 'en' ? (
                  <>
                    Executive English & French – <span className="text-accent-500">Efficient, Certifying</span> and Trusted.
                  </>
                ) : (
                  <>
                    L’Anglais Professionnel – <span className="text-accent-500">Fluide, Certifié</span> et Sur-Mesure.
                  </>
                )}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-sm sm:text-base text-slate-300 max-w-xl leading-relaxed mb-8 font-medium"
              >
                {lang === 'en'
                  ? 'Master international communication at TEN KEY Lomé. Accelerate your career with our elite immersive methods, VIP cabinet programs, and standard CEFR certificates.'
                  : 'Maîtrisez la communication internationale à TEN KEY Lomé. Boostez votre carrière grâce à nos méthodes immersives d\'élite, nos cabinets VIP et nos certifications agréées.'}
              </motion.p>

              {/* Pill action button like "Ship now →" in Uthao */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap gap-4 w-full sm:w-auto"
              >
                <button
                  onClick={onGetStarted}
                  className="bg-accent-500 hover:bg-accent-600 text-white font-black text-xs sm:text-sm px-8 py-4 rounded-full shadow-lg shadow-accent-950/20 hover:shadow-accent-500/20 transition-all duration-300 flex items-center gap-2 group cursor-pointer"
                >
                  <span>{lang === 'en' ? 'Register Now' : "S'inscrire En Ligne"}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={onLearnMore}
                  className="bg-white/10 hover:bg-white/15 backdrop-blur-sm text-white font-black text-xs sm:text-sm px-8 py-4 rounded-full transition-all duration-300 flex items-center gap-2 cursor-pointer border border-white/10"
                >
                  <span>{lang === 'en' ? 'View Pricing' : 'Voir les Tarifs'}</span>
                </button>
              </motion.div>
            </div>

            {/* Right Column: Floating Dark Glassmorphic Diagnostic Form (Matches the Uthao tracking form) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 relative w-full lg:max-w-md mx-auto"
            >
              {/* Dark Glass Card container */}
              <div className="backdrop-blur-xl bg-slate-950/75 border border-white/10 rounded-[2rem] shadow-2xl p-6 sm:p-8 text-left text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-accent-500/10 rounded-full blur-2xl pointer-events-none"></div>

                {/* Tab selectors with pill shape */}
                <div className="bg-slate-900/80 p-1.5 rounded-full flex gap-1.5 mb-6 border border-white/5">
                  <button
                    onClick={() => {
                      setActiveTab('test');
                      setSubmittedTest(false);
                    }}
                    className={`flex-1 py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === 'test' 
                        ? 'bg-accent-500 text-white shadow-md' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {lang === 'en' ? 'Level Diagnostic' : 'Test de Niveau'}
                  </button>
                  <button
                    onClick={() => {
                      setActiveTab('track');
                      setSearchedTicket(false);
                    }}
                    className={`flex-1 py-2.5 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-wider transition-all cursor-pointer ${
                      activeTab === 'track' 
                        ? 'bg-accent-500 text-white shadow-md' 
                        : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                  >
                    {lang === 'en' ? 'Track Ticket' : 'Suivre Reçu'}
                  </button>
                </div>

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
                        <form onSubmit={handleTestSubmit} className="space-y-4">
                          <p className="text-xs text-slate-400 leading-relaxed font-semibold mb-2">
                            {lang === 'en' 
                              ? 'Tell us your language goal to generate your certified learning pathway instantly.'
                              : 'Définissez votre objectif pour générer instantanément votre plan de cours certifié.'}
                          </p>

                          {/* Language Choice */}
                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                              {lang === 'en' ? 'Target Language' : 'Langue Ciblée'}
                            </label>
                            <div className="grid grid-cols-2 gap-2">
                              <button
                                type="button"
                                onClick={() => setTargetLang('english')}
                                className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                                  targetLang === 'english'
                                    ? 'bg-brand-500/20 border-brand-500 text-white'
                                    : 'bg-slate-900 border-white/5 text-slate-400 hover:bg-slate-800'
                                }`}
                              >
                                {lang === 'en' ? 'English 🇬🇧' : 'Anglais 🇬🇧'}
                              </button>
                              <button
                                type="button"
                                onClick={() => setTargetLang('french')}
                                className={`py-2 rounded-xl text-xs font-bold transition-all border ${
                                  targetLang === 'french'
                                    ? 'bg-brand-500/20 border-brand-500 text-white'
                                    : 'bg-slate-900 border-white/5 text-slate-400 hover:bg-slate-800'
                                }`}
                              >
                                {lang === 'en' ? 'French 🇫🇷' : 'Français 🇫🇷'}
                              </button>
                            </div>
                          </div>

                          {/* Self-assessed Level */}
                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                              {lang === 'en' ? 'Your Current Level' : 'Votre Niveau Actuel'}
                            </label>
                            <select
                              value={currentLevel}
                              onChange={(e) => setCurrentLevel(e.target.value)}
                              className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3 text-xs font-semibold text-white focus:outline-none focus:border-accent-500 cursor-pointer"
                            >
                              <option value="A1">A1 - {lang === 'en' ? 'Absolute Beginner' : 'Débutant Complet'}</option>
                              <option value="A2">A2 - {lang === 'en' ? 'Elementary' : 'Élémentaire'}</option>
                              <option value="B1">B1 - {lang === 'en' ? 'Pre-Intermediate' : 'Pré-Intermédiaire'}</option>
                              <option value="B2">B2 - {lang === 'en' ? 'Upper Intermediate' : 'Intermédiaire Supérieur'}</option>
                              <option value="C1">C1 - {lang === 'en' ? 'Advanced Business' : 'Avancé Affaires'}</option>
                              <option value="C2">C2 - {lang === 'en' ? 'Near Native' : 'Bilingue Courant'}</option>
                            </select>
                          </div>

                          {/* Action Button (Matches the bright Uthao Search button) */}
                          <button
                            type="submit"
                            className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-colors shadow-lg shadow-accent-950/40 flex items-center justify-center gap-2 cursor-pointer mt-2"
                          >
                            <span>{lang === 'en' ? 'Calculate Path →' : 'Lancer le Diagnostic →'}</span>
                          </button>
                        </form>
                      ) : (
                        <motion.div 
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-brand-950/50 border border-brand-500/20 rounded-2xl p-5 text-center"
                        >
                          <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                            <Check className="w-6 h-6" />
                          </div>
                          <h4 className="font-extrabold text-sm text-white font-display mb-1.5">
                            {lang === 'en' ? 'Optimal Program Found!' : 'Parcours Idéal Identifié !'}
                          </h4>
                          <p className="text-xs text-slate-400 mb-4 font-medium leading-relaxed">
                            {lang === 'en' 
                              ? 'Based on your diagnostic, we recommend:' 
                              : 'Selon votre diagnostic, nous vous recommandons :'}
                          </p>
                          <div className="bg-slate-900 border border-white/5 rounded-xl p-3 text-xs font-extrabold text-accent-300 leading-snug mb-5">
                            {calculatedPath}
                          </div>
                          <div className="flex gap-2">
                            <button
                              onClick={() => setSubmittedTest(false)}
                              className="flex-1 py-2 rounded-lg text-[10px] font-bold border border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
                            >
                              {lang === 'en' ? 'Reset' : 'Réinitialiser'}
                            </button>
                            <button
                              onClick={onGetStarted}
                              className="flex-1 py-2 rounded-lg text-[10px] font-black bg-accent-500 hover:bg-accent-600 text-white transition-colors cursor-pointer"
                            >
                              {lang === 'en' ? 'Reserve Seat' : 'Réserver Place'}
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
                        <form onSubmit={handleTrackSubmit} className="space-y-4">
                          <p className="text-xs text-slate-400 leading-relaxed font-semibold mb-2">
                            {lang === 'en'
                              ? "Verify your official admission status or tuition receipt in real-time."
                              : "Vérifiez votre statut d'admission officiel ou votre reçu d'inscription en temps réel."}
                          </p>

                          <div>
                            <label className="block text-[10px] font-black uppercase tracking-wider text-slate-400 mb-1.5">
                              {lang === 'en' ? 'Admission / Ticket ID' : 'Numéro d’Admission / Reçu'}
                            </label>
                            <input
                              type="text"
                              required
                              placeholder="e.g. TK-2026"
                              value={ticketId}
                              onChange={(e) => setTicketId(e.target.value)}
                              className="w-full bg-slate-900 border border-white/5 rounded-xl px-4 py-3 text-xs font-bold text-white uppercase placeholder-slate-500 focus:outline-none focus:border-accent-500"
                            />
                            <p className="text-[10px] text-slate-500 mt-1 font-semibold">
                              {lang === 'en' ? 'Hint: Enter TK-2026 for a live demo' : 'Astuce: Saisissez TK-2026 pour démo live'}
                            </p>
                          </div>

                          <button
                            type="submit"
                            className="w-full bg-accent-500 hover:bg-accent-600 text-white py-3.5 px-4 rounded-xl text-xs font-black uppercase tracking-wider transition-colors shadow-lg shadow-accent-950/40 flex items-center justify-center gap-2 cursor-pointer mt-2"
                          >
                            <Search className="w-4 h-4" />
                            <span>{lang === 'en' ? 'Verify Ticket →' : 'Vérifier Reçu →'}</span>
                          </button>
                        </form>
                      ) : (
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          className="bg-brand-950/50 border border-brand-500/20 rounded-2xl p-5"
                        >
                          {ticketResult ? (
                            <div className="space-y-4">
                              <div className="flex items-center gap-3 border-b border-white/5 pb-3">
                                <div className="w-10 h-10 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center justify-center shrink-0">
                                  <Check className="w-5 h-5" />
                                </div>
                                <div className="text-left">
                                  <h4 className="font-extrabold text-sm text-white font-display">
                                    {ticketResult.name}
                                  </h4>
                                  <p className="text-[10px] text-emerald-400 font-bold uppercase tracking-wider">
                                    {ticketResult.status}
                                  </p>
                                </div>
                              </div>
                              <div className="grid grid-cols-2 gap-2 text-left">
                                <div className="bg-slate-900 p-2.5 rounded-xl">
                                  <span className="block text-[9px] text-slate-400 uppercase font-bold">Campus</span>
                                  <span className="text-xs font-extrabold text-white">Lomé - Avedji</span>
                                </div>
                                <div className="bg-slate-900 p-2.5 rounded-xl">
                                  <span className="block text-[9px] text-slate-400 uppercase font-bold">Start Date</span>
                                  <span className="text-xs font-extrabold text-white">{ticketResult.date}</span>
                                </div>
                              </div>
                            </div>
                          ) : (
                            <div className="text-center py-4">
                              <p className="text-xs text-rose-400 font-bold mb-2">
                                {lang === 'en' ? 'Ticket ID not found.' : 'Identifiant introuvable.'}
                              </p>
                              <p className="text-[10px] text-slate-400 leading-normal max-w-xs mx-auto font-medium">
                                {lang === 'en'
                                  ? 'Please check the ID on your printed receipt or contact support.'
                                  : 'Veuillez vérifier le numéro sur votre ticket imprimé ou contactez le secrétariat.'}
                              </p>
                            </div>
                          )}

                          <button
                            onClick={() => setSearchedTicket(false)}
                            className="w-full mt-4 py-2 rounded-lg text-[10px] font-bold border border-white/10 hover:bg-white/5 transition-colors cursor-pointer"
                          >
                            {lang === 'en' ? 'Search Again' : 'Nouvelle Recherche'}
                          </button>
                        </motion.div>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </motion.div>

          </div>
        </div>
      </div>

      {/* 
        TRUST LOGO BANNER (Matches "Partners of world leading companies" in Uthao)
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
        SERVICE OVERVIEW WITH ASYMMETRIC COLLAGE (Matches bottom part of Uthao mockup)
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
                <div className="relative group rounded-2xl overflow-hidden shadow-md aspect-square bg-emerald-50">
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
