/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Services from './components/Services';
import About from './components/About';
import PricingTable from './components/PricingTable';
import RegistrationForm from './components/RegistrationForm';
import LocationMap from './components/LocationMap';
import TestimonialsFaq from './components/TestimonialsFaq';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';

export default function App() {
  // Localization: Defaults to 'fr' (French) for Lomé, Togo local audience, with a fast switch to 'en'
  const [lang, setLang] = useState<'en' | 'fr'>('fr');
  const [selectedModuleName, setSelectedModuleName] = useState<string>('');

  const handleRegisterRedirect = (moduleName?: string) => {
    if (moduleName) {
      setSelectedModuleName(moduleName);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950 font-sans antialiased overflow-x-hidden selection:bg-brand-500 selection:text-white">
      {/* 1. Header / Navigation Bar */}
      <Header
        lang={lang}
        setLang={setLang}
        onRegisterClick={() => handleRegisterRedirect()}
      />

      {/* 2. Hero Section */}
      <Hero
        lang={lang}
        onGetStarted={() => handleRegisterRedirect()}
        onLearnMore={() => {
          const element = document.getElementById('services');
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />

      {/* 3. Services / Modules Section */}
      <Services
        lang={lang}
        onSelectService={(name) => handleRegisterRedirect(name)}
      />

      {/* About Section */}
      <About lang={lang} />

      {/* 4. Detailed Pricing & Schedules Section */}
      <PricingTable
        lang={lang}
        onSelectPlan={(name) => handleRegisterRedirect(name)}
      />

      {/* 5. Registration & Onboarding Section */}
      <RegistrationForm
        lang={lang}
        selectedModuleName={selectedModuleName}
        setSelectedModuleName={setSelectedModuleName}
      />

      {/* Testimonials & FAQs Section */}
      <TestimonialsFaq lang={lang} />

      {/* 6. Contact & Location Section */}
      <LocationMap lang={lang} />

      {/* 7. Floating WhatsApp Widget */}
      <WhatsAppWidget lang={lang} />

      {/* Footer */}
      <Footer lang={lang} />
    </div>
  );
}

