/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import Hero from './components/Hero';
import Selections from './components/Selections';
import SuccessManagement from './components/SuccessManagement';
import Services from './components/Services';
import About from './components/About';
import ValueProposition from './components/ValueProposition';
import PricingTable from './components/PricingTable';
import RegistrationForm from './components/RegistrationForm';
import StudentPortal from './components/StudentPortal';
import LocationMap from './components/LocationMap';
import TestimonialsFaq from './components/TestimonialsFaq';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';
import GedPrepPage from './components/GedPrepPage';
import { NeonGlowCTA, ExecutiveLuxuryCTA, BentoLevelTesterCTA, DiplomaticShowcaseCTA, GedFlashCTA } from './components/CoolCTAs';
import { Sparkles, CheckCircle, Award, Compass, HeartHandshake, ArrowRight, BookOpen, Star } from 'lucide-react';

export default function App() {
  // Localization: Defaults to 'fr' (French) for Lomé, Togo local audience, with a fast switch to 'en'
  const [lang, setLang] = useState<'en' | 'fr'>('fr');
  const [activePage, setActivePage] = useState<string>('home');
  const [selectedModuleName, setSelectedModuleName] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [activePage]);

  const handleRegisterRedirect = (moduleName?: string) => {
    if (moduleName) {
      setSelectedModuleName(moduleName);
    }
    // Switch to page where the registration form is visible or scroll to it
    const element = document.getElementById('contact-form-section');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      // If we are on a page without a registration form, switch to Home first and then scroll down
      setActivePage('home');
      setTimeout(() => {
        const homeElement = document.getElementById('contact-form-section');
        if (homeElement) {
          homeElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 150);
    }
  };

  const handleStudentPortalRedirect = (levelCode: string) => {
    setSelectedModuleName(`Anglais - Niveau Estimé: ${levelCode}`);
    setActivePage('student-space');
    // Scroll smoothly to ticket or planner
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 font-sans antialiased overflow-x-hidden selection:bg-brand-500 selection:text-white">
      {/* 1. Header / Navigation Bar with Active Page awareness */}
      <Header
        lang={lang}
        setLang={setLang}
        onRegisterClick={() => handleRegisterRedirect()}
        activePage={activePage}
        setActivePage={setActivePage}
      />

      {/* Main Page Containers with Animated Route Transitions */}
      <main className="relative min-h-[70vh]">
        <AnimatePresence mode="wait">
          {activePage === 'home' && (
            <motion.div
              key="home-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Hero Section */}
              <Hero
                lang={lang}
                onGetStarted={() => handleRegisterRedirect()}
                onLearnMore={() => setActivePage('services')}
              />

              {/* Home Highlights Stat Block / Intro */}
              <section className="py-12 bg-white border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-brand-600 font-display">10+</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                      {lang === 'en' ? 'Years of Experience' : "Années d'Expérience"}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-brand-600 font-display">98%</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                      {lang === 'en' ? 'Success Rate' : 'Taux de Réussite'}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-brand-600 font-display">2500+</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                      {lang === 'en' ? 'Students Certified' : 'Étudiants Certifiés'}
                    </div>
                  </div>
                  <div>
                    <div className="text-3xl sm:text-4xl font-black text-brand-600 font-display">100%</div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mt-1">
                      {lang === 'en' ? 'Native Translators' : 'Traducteurs Natifs'}
                    </div>
                  </div>
                </div>
              </section>

              {/* Success Management Showcase */}
              <SuccessManagement lang={lang} />

              {/* Our Selections Section */}
              <Selections lang={lang} />

              {/* STYLISH NEON GLOW CALL TO ACTION */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <NeonGlowCTA lang={lang} onAction={handleRegisterRedirect} />
              </div>

              {/* Registration Form directly on home */}
              <div id="contact-form-section">
                <RegistrationForm
                  lang={lang}
                  selectedModuleName={selectedModuleName}
                  setSelectedModuleName={setSelectedModuleName}
                />
              </div>

              {/* Physical Location Map */}
              <LocationMap lang={lang} />
            </motion.div>
          )}

          {activePage === 'services' && (
            <motion.div
              key="services-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* IMMERSIVE PREMIUM SERVICES HERO */}
              <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-brand-950 text-white overflow-hidden border-b border-brand-900/40">
                {/* Golden glowing accent light leaks */}
                <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[110px] pointer-events-none"></div>
                <div className="absolute bottom-5 left-10 w-[300px] h-[300px] bg-brand-500/10 rounded-full blur-[90px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
                    
                    {/* Left Column: Text & Features list */}
                    <div className="lg:col-span-7">
                      <div className="inline-flex items-center gap-1.5 bg-brand-900/80 border border-brand-800 text-accent-400 text-xs font-black tracking-widest px-4 py-2 rounded-full uppercase mb-6 shadow-sm">
                        <Sparkles className="w-3.5 h-3.5 text-accent-500" />
                        <span>{lang === 'en' ? 'CHOOSE YOUR PATHWAY' : 'VOTRE PARCOURS PROFESSIONNEL'}</span>
                      </div>

                      <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-white font-display mb-6">
                        {lang === 'en' ? 'Our Specialized' : 'Nos Modules de'}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-amber-300">
                          {lang === 'en' ? 'Training Modules' : 'Formation Spécialisés'}
                        </span>
                      </h1>

                      <p className="text-sm sm:text-base text-brand-100/70 leading-relaxed font-semibold mb-8 max-w-xl">
                        {lang === 'en'
                          ? 'From General English to high-level Translation and Interpretation Cabinets in Togo. Explore our accredited corporate curriculum highlights below.'
                          : 'De l’Anglais Général aux cabinets de Traduction et d’Interprétation de haut niveau au Togo. Découvrez nos détails de cours et programmes d’excellence.'}
                      </p>

                      {/* Micro Benefits Grid */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
                        {[
                          lang === 'en' ? 'Accredited Curriculum' : 'Cursus Officiel Agréé',
                          lang === 'en' ? '100% Native Speakers' : 'Professeurs 100% Natifs',
                          lang === 'en' ? 'Corporate Executive Focus' : 'Spécialisation Cadres & Leaders',
                          lang === 'en' ? 'Flexible Modern Schedules' : 'Horaires Flexibles Adaptés'
                        ].map((bullet, idx) => (
                          <div key={idx} className="flex items-center gap-2.5">
                            <CheckCircle className="w-4 h-4 text-accent-400 shrink-0" />
                            <span className="text-xs font-bold text-brand-100">{bullet}</span>
                          </div>
                        ))}
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        <button
                          onClick={() => handleRegisterRedirect()}
                          className="bg-accent-500 hover:bg-accent-600 text-brand-950 font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                        >
                          {lang === 'en' ? 'Book Placement Test' : 'Réserver Mon Test'}
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Dynamic Collage & Floating Experience Widget */}
                    <div className="lg:col-span-5 relative flex justify-center">
                      <div className="relative w-full max-w-[400px] aspect-square">
                        {/* Primary Image Container */}
                        <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-800/40 relative z-10">
                          <img
                            src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=800&auto=format&fit=crop"
                            alt="Executive classroom group"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/10"></div>
                        </div>

                        {/* Floating Glassmorphism Metric Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-brand-900/90 backdrop-blur-md border border-brand-800 text-white rounded-2xl p-4 shadow-2xl z-20 flex items-center gap-3.5 max-w-[200px] text-left">
                          <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-400 flex items-center justify-center shrink-0">
                            <Award className="w-5.5 h-5.5" />
                          </div>
                          <div>
                            <p className="text-xs font-black font-display text-accent-400">98%</p>
                            <p className="text-[9px] font-bold text-brand-100 leading-normal">
                              {lang === 'en' ? 'TOEFL & Exam Success Rate' : 'Réussite aux Examens Officiels'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              <Services
                lang={lang}
                onSelectService={(name) => handleRegisterRedirect(name)}
              />

              {/* Value Proposition block */}
              <ValueProposition lang={lang} />

              {/* EXECUTIVE LUXURY CALL TO ACTION */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <ExecutiveLuxuryCTA lang={lang} onAction={handleRegisterRedirect} />
              </div>

              <div id="contact-form-section">
                <RegistrationForm
                  lang={lang}
                  selectedModuleName={selectedModuleName}
                  setSelectedModuleName={setSelectedModuleName}
                />
              </div>
            </motion.div>
          )}

          {activePage === 'ged-prep' && (
            <motion.div
              key="ged-prep-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <GedPrepPage
                lang={lang}
                onGetStarted={() => handleRegisterRedirect('GED Prep - Examen Officiel')}
              />

              {/* VIBRANT GED FLASH CALL TO ACTION */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <GedFlashCTA lang={lang} onAction={(actName) => handleRegisterRedirect(actName || 'GED Prep - Examen Officiel')} />
              </div>

              <div id="contact-form-section">
                <RegistrationForm
                  lang={lang}
                  selectedModuleName={selectedModuleName || 'GED Prep - Examen Officiel'}
                  setSelectedModuleName={setSelectedModuleName}
                />
              </div>
            </motion.div>
          )}

          {activePage === 'pricing' && (
            <motion.div
              key="pricing-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <PricingTable
                lang={lang}
                onSelectPlan={(name) => handleRegisterRedirect(name)}
              />

              {/* BENTO INTERACTIVE SCHEDULER CALL TO ACTION */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <BentoLevelTesterCTA lang={lang} onAction={handleRegisterRedirect} />
              </div>

              <div id="contact-form-section">
                <RegistrationForm
                  lang={lang}
                  selectedModuleName={selectedModuleName}
                  setSelectedModuleName={setSelectedModuleName}
                />
              </div>
            </motion.div>
          )}

          {activePage === 'about' && (
            <motion.div
              key="about-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* IMMERSIVE PREMIUM ABOUT HERO */}
              <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-brand-950 text-white overflow-hidden border-b border-brand-900/40">
                {/* Golden & Blue glowing accent light leaks */}
                <div className="absolute top-1/3 left-0 w-[500px] h-[500px] bg-brand-500/10 rounded-full blur-[110px] pointer-events-none"></div>
                <div className="absolute bottom-5 right-10 w-[300px] h-[300px] bg-accent-500/10 rounded-full blur-[90px] pointer-events-none"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
                    
                    {/* Left Column: Mission & Identity info */}
                    <div className="lg:col-span-7">
                      <div className="inline-flex items-center gap-1.5 bg-brand-900/80 border border-brand-800 text-accent-400 text-xs font-black tracking-widest px-4 py-2 rounded-full uppercase mb-6 shadow-sm">
                        <Compass className="w-3.5 h-3.5 text-accent-500" />
                        <span>{lang === 'en' ? 'WHO WE ARE' : 'QUI SOMMES-NOUS'}</span>
                      </div>

                      <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-white font-display mb-6">
                        {lang === 'en' ? 'Pedagogy &' : 'Pédagogie &'}{' '}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-amber-300">
                          {lang === 'en' ? 'Native Excellence' : 'Excellence Native'}
                        </span>
                      </h1>

                      <p className="text-sm sm:text-base text-brand-100/70 leading-relaxed font-semibold mb-8 max-w-xl">
                        {lang === 'en'
                          ? 'TEN KEY is Lomé’s leading bilingual training ecosystem and certified translation hub. We train Togo’s elite diplomats, corporate leaders, and professional translators.'
                          : 'TEN KEY est le premier écosystème bilingue et cabinet de traduction certifié de Lomé. Nous formons les cadres, diplomates et traducteurs d’élite de la sous-région.'}
                      </p>

                      {/* Highlight Badges */}
                      <div className="flex flex-wrap gap-4 mb-8">
                        <div className="flex items-center gap-2 bg-brand-900/50 border border-brand-800 rounded-xl px-4 py-2.5">
                          <Award className="w-4.5 h-4.5 text-accent-400 shrink-0" />
                          <div className="text-left">
                            <p className="text-[10px] font-extrabold text-brand-400 leading-none mb-0.5 uppercase tracking-wider">{lang === 'en' ? 'FOUNDED IN' : 'FONDÉ EN'}</p>
                            <p className="text-xs font-black text-white">2012</p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 bg-brand-900/50 border border-brand-800 rounded-xl px-4 py-2.5">
                          <HeartHandshake className="w-4.5 h-4.5 text-accent-400 shrink-0" />
                          <div className="text-left">
                            <p className="text-[10px] font-extrabold text-brand-400 leading-none mb-0.5 uppercase tracking-wider">{lang === 'en' ? 'ACCREDITATION' : 'AGRÉMENT'}</p>
                            <p className="text-xs font-black text-white">{lang === 'en' ? 'Official / Legal Togo' : 'Officiel / État Togolais'}</p>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap items-center gap-4">
                        <button
                          onClick={() => handleRegisterRedirect()}
                          className="bg-accent-500 hover:bg-accent-600 text-brand-950 font-black text-xs uppercase tracking-widest px-8 py-4 rounded-full transition-all duration-300 shadow-xl hover:-translate-y-0.5 active:scale-95 cursor-pointer"
                        >
                          {lang === 'en' ? 'Read Achievements' : 'Découvrir nos Réussites'}
                        </button>
                      </div>
                    </div>

                    {/* Right Column: Graphic Collage & Floating Milestone Widget */}
                    <div className="lg:col-span-5 relative flex justify-center">
                      <div className="relative w-full max-w-[400px] aspect-square">
                        {/* Primary Image Container */}
                        <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-800/40 relative z-10">
                          <img
                            src="https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=800&auto=format&fit=crop"
                            alt="Bilingual workshop discussion"
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/10"></div>
                        </div>

                        {/* Floating Glassmorphism Metric Badge */}
                        <div className="absolute -bottom-6 -left-6 bg-brand-900/90 backdrop-blur-md border border-brand-800 text-white rounded-2xl p-4 shadow-2xl z-20 flex items-center gap-3.5 max-w-[200px] text-left">
                          <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-400 flex items-center justify-center shrink-0">
                            <BookOpen className="w-5.5 h-5.5" />
                          </div>
                          <div>
                            <p className="text-xs font-black font-display text-accent-400">3,000+</p>
                            <p className="text-[9px] font-bold text-brand-100 leading-normal">
                              {lang === 'en' ? 'Bilingual Leaders Trained' : 'Diplômés et Cadres Formés'}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              </section>

              <About lang={lang} />
              
              <TestimonialsFaq lang={lang} />

              {/* DIPLOMATIC SHOWCASE CALL TO ACTION */}
              <div className="max-w-7xl mx-auto px-4 sm:px-6 pb-16">
                <DiplomaticShowcaseCTA lang={lang} onAction={(actName) => handleRegisterRedirect(actName || 'About Page - Diplomatic Audit')} />
              </div>
            </motion.div>
          )}

          {activePage === 'student-space' && (
            <motion.div
              key="student-space-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              {/* Espace Candidat dedicated workspace */}
              <StudentPortal 
                lang={lang} 
                onRegisterRedirect={handleStudentPortalRedirect} 
              />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Floating WhatsApp Widget */}
      <WhatsAppWidget lang={lang} />

      {/* Footer */}
      <Footer lang={lang} setActivePage={setActivePage} />
    </div>
  );
}

