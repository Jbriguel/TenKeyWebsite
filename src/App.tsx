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
      // Fallback: If not on home, scroll to top of the screen or keep active selection
      window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <main className={`relative min-h-[70vh] ${activePage !== 'home' ? 'pt-24 sm:pt-28' : ''}`}>
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

              {/* Our Selections Section */}
              <Selections lang={lang} />

              {/* Success Management Showcase */}
              <SuccessManagement lang={lang} />

              {/* Quick Services Preview */}
              <Services
                lang={lang}
                onSelectService={(name) => handleRegisterRedirect(name)}
              />

              {/* Value Proposition block */}
              <ValueProposition lang={lang} />

              {/* Quick Testimonials & FAQ Section */}
              <TestimonialsFaq lang={lang} />

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
              {/* Full Services detail catalog */}
              <div className="bg-brand-950 text-white py-16 text-center">
                <div className="max-w-3xl mx-auto px-4">
                  <span className="text-accent-400 text-xs font-extrabold uppercase tracking-widest">
                    {lang === 'en' ? 'CHOOSE YOUR PATHWAY' : 'VOTRE PARCOURS PROFESSIONNEL'}
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-black mt-2 font-display">
                    {lang === 'en' ? 'Our Specialized Training Modules' : 'Nos Modules de Formation Spécialisés'}
                  </h1>
                  <p className="text-brand-200 text-sm mt-3 leading-relaxed">
                    {lang === 'en' 
                      ? 'From General English to high-level Translation and Interpretation Cabinets in Togo. Explore curriculum highlights.'
                      : 'De l’Anglais Général aux cabinets de Traduction et d’Interprétation de haut niveau au Togo. Découvrez nos détails de cours.'}
                  </p>
                </div>
              </div>

              <Services
                lang={lang}
                onSelectService={(name) => handleRegisterRedirect(name)}
              />

              {/* Value Proposition block */}
              <ValueProposition lang={lang} />

              <div id="contact-form-section">
                <RegistrationForm
                  lang={lang}
                  selectedModuleName={selectedModuleName}
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
              <div className="bg-brand-950 text-white py-16 text-center">
                <div className="max-w-3xl mx-auto px-4">
                  <span className="text-accent-400 text-xs font-extrabold uppercase tracking-widest">
                    {lang === 'en' ? 'WHO WE ARE' : 'QUI SOMMES-NOUS'}
                  </span>
                  <h1 className="text-3xl sm:text-4xl font-black mt-2 font-display">
                    {lang === 'en' ? 'Pedagogy & Native Excellence' : 'Pédagogie & Excellence Native'}
                  </h1>
                  <p className="text-brand-200 text-sm mt-3">
                    {lang === 'en'
                      ? 'TEN KEY is Lomé’s leading bilingual ecosystem, training diplomats, corporate leaders, and translators.'
                      : 'TEN KEY est le premier écosystème bilingue de Lomé, formant les cadres, diplomates et traducteurs.'}
                  </p>
                </div>
              </div>

              <About lang={lang} />
              
              <TestimonialsFaq lang={lang} />
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

