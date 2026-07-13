import React from 'react';
import { useOutletContext } from 'react-router-dom';
import type { AppContextValue } from '../App';

export default function PrivacyPage() {
  const { lang } = useOutletContext<AppContextValue>();
  const isEn = lang === 'en';

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white text-brand-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <span className="text-brand-600 text-[10px] font-black tracking-widest uppercase">
          {isEn ? 'PRIVACY POLICY' : 'POLITIQUE DE CONFIDENTIALITÉ'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-brand-900 mt-3 mb-8 font-display tracking-tight">
          {isEn ? 'Privacy Policy' : 'Politique de Confidentialité'}
        </h1>

        <div className="prose prose-sm max-w-none text-slate-600 leading-relaxed space-y-6">
          <p>
            {isEn
              ? 'TEN KEY Centre de Formations respects your privacy. This policy explains how we collect, use, and protect the personal information you provide when registering or contacting us.'
              : 'TEN KEY Centre de Formations respecte votre vie privée. Cette politique explique comment nous collectons, utilisons et protégeons les informations personnelles que vous nous communiquez lors de votre inscription ou de votre prise de contact.'}
          </p>

          <h2 className="text-lg font-black text-brand-900">
            {isEn ? '1. Information We Collect' : '1. Informations Collectées'}
          </h2>
          <p>
            {isEn
              ? 'We collect your name, phone number, email address, current language level, and professional objectives. This information is used exclusively to place you in the right program and communicate with you.'
              : 'Nous collectons votre nom, numéro de téléphone, adresse e-mail, niveau de langue actuel et objectifs professionnels. Ces informations sont utilisées exclusivement pour vous orienter vers le bon programme et communiquer avec vous.'}
          </p>

          <h2 className="text-lg font-black text-brand-900">
            {isEn ? '2. Use of Data' : '2. Utilisation des Données'}
          </h2>
          <p>
            {isEn
              ? 'Your data is used for registration, scheduling, progress follow-up, and occasional updates about our programs. We do not sell or share your personal information with third parties for marketing purposes.'
              : 'Vos données sont utilisées pour l’inscription, la planification, le suivi de vos progrès et l’envoi occasionnel d’informations sur nos programmes. Nous ne vendons ni ne partageons vos informations personnelles à des tiers à des fins marketing.'}
          </p>

          <h2 className="text-lg font-black text-brand-900">
            {isEn ? '3. Data Security' : '3. Sécurité des Données'}
          </h2>
          <p>
            {isEn
              ? 'We apply reasonable technical and organizational measures to protect your information from unauthorized access, loss, or disclosure.'
              : 'Nous mettons en place des mesures techniques et organisationnelles raisonnables pour protéger vos informations contre tout accès non autorisé, perte ou divulgation.'}
          </p>

          <h2 className="text-lg font-black text-brand-900">
            {isEn ? '4. Your Rights' : '4. Vos Droits'}
          </h2>
          <p>
            {isEn
              ? 'You may request access, correction, or deletion of your personal data at any time by contacting us at contact@tenkeycenter.com or +228 91 88 38 67.'
              : 'Vous pouvez demander l’accès, la correction ou la suppression de vos données personnelles à tout moment en nous contactant à contact@tenkeycenter.com ou au +228 91 88 38 67.'}
          </p>
        </div>
      </div>
    </section>
  );
}
