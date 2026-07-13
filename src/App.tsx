/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import Header from './components/Header';
import WhatsAppWidget from './components/WhatsAppWidget';
import Footer from './components/Footer';

export interface AppContextValue {
  lang: 'en' | 'fr';
  setLang: (lang: 'en' | 'fr') => void;
  selectedModuleName: string;
  setSelectedModuleName: (name: string) => void;
  onRegisterRedirect: (moduleName?: string) => void;
  onLearnMore: () => void;
}

export default function App() {
  const navigate = useNavigate();
  const location = useLocation();

  // Localization: Defaults to 'fr' (French) for Lomé, Togo local audience, with a fast switch to 'en'
  const [lang, setLang] = useState<'en' | 'fr'>('fr');
  const [selectedModuleName, setSelectedModuleName] = useState<string>('');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const handleRegisterRedirect = (moduleName?: string) => {
    if (moduleName) {
      setSelectedModuleName(moduleName);
    }
    // Scroll to contact form on Pricing, or navigate to Pricing first
    const element = document.getElementById('contact-form-section');
    if (element && location.pathname === '/pricing') {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/pricing');
      setTimeout(() => {
        const pricingElement = document.getElementById('contact-form-section');
        if (pricingElement) {
          pricingElement.scrollIntoView({ behavior: 'smooth' });
        }
      }, 200);
    }
  };

  const handleLearnMore = () => {
    navigate('/services');
  };

  const contextValue: AppContextValue = {
    lang,
    setLang,
    selectedModuleName,
    setSelectedModuleName,
    onRegisterRedirect: handleRegisterRedirect,
    onLearnMore: handleLearnMore,
  };

  return (
    <div className="min-h-screen bg-slate-50 text-brand-950 font-sans antialiased overflow-x-hidden selection:bg-brand-500 selection:text-white">
      <Header
        lang={lang}
        setLang={setLang}
        onRegisterClick={() => handleRegisterRedirect()}
      />

      <main className="relative min-h-[70vh]">
        <Outlet context={contextValue} />
      </main>

      <WhatsAppWidget lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

