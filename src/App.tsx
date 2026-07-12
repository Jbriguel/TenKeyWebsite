/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Header from './components/Header';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GedPage from './pages/GedPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import StudentSpacePage from './pages/StudentSpacePage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

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
              <HomePage
                lang={lang}
                onRegisterRedirect={handleRegisterRedirect}
                onLearnMore={() => setActivePage('services')}
                selectedModuleName={selectedModuleName}
                setSelectedModuleName={setSelectedModuleName}
              />
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
              <ServicesPage
                lang={lang}
                onRegisterRedirect={handleRegisterRedirect}
                selectedModuleName={selectedModuleName}
                setSelectedModuleName={setSelectedModuleName}
              />
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
              <GedPage
                lang={lang}
                onRegisterRedirect={handleRegisterRedirect}
                selectedModuleName={selectedModuleName}
                setSelectedModuleName={setSelectedModuleName}
              />
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
              <PricingPage
                lang={lang}
                onRegisterRedirect={handleRegisterRedirect}
                selectedModuleName={selectedModuleName}
                setSelectedModuleName={setSelectedModuleName}
              />
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
              <AboutPage
                lang={lang}
                onRegisterRedirect={handleRegisterRedirect}
              />
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
              <StudentSpacePage
                lang={lang}
                onStudentPortalRedirect={handleStudentPortalRedirect}
              />
            </motion.div>
          )}

          {activePage === 'terms' && (
            <motion.div
              key="terms-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <TermsPage lang={lang} />
            </motion.div>
          )}

          {activePage === 'privacy' && (
            <motion.div
              key="privacy-page"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
            >
              <PrivacyPage lang={lang} />
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

