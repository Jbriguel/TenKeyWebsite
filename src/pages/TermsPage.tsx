import React from 'react';

interface TermsPageProps {
  lang: 'en' | 'fr';
}

export default function TermsPage({ lang }: TermsPageProps) {
  const isEn = lang === 'en';

  return (
    <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-white text-slate-900">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <span className="text-brand-600 text-[10px] font-black tracking-widest uppercase">
          {isEn ? 'TERMS & CONDITIONS' : 'CONDITIONS GÉNÉRALES DE VENTE'}
        </span>
        <h1 className="text-3xl sm:text-4xl font-black text-slate-900 mt-3 mb-8 font-display tracking-tight">
          {isEn ? 'Terms & Conditions' : 'Conditions Générales de Vente'}
        </h1>

        <div className="prose prose-sm max-w-none text-slate-600 leading-relaxed space-y-6">
          <p>
            {isEn
              ? 'These terms govern registration and participation in language training, translation, and interpretation services provided by TEN KEY Centre de Formations in Lomé, Togo.'
              : 'Les présentes conditions régissent l’inscription et la participation aux formations linguistiques, traductions et interprétations proposées par TEN KEY Centre de Formations à Lomé, Togo.'}
          </p>

          <h2 className="text-lg font-black text-slate-900">
            {isEn ? '1. Registration & Payment' : '1. Inscription et Paiement'}
          </h2>
          <p>
            {isEn
              ? 'Registration is confirmed upon payment of the 10,000 FCFA enrollment fee, which includes the level test, learning materials, and an official centre T-shirt. Module fees are due before the first session or according to the chosen payment plan.'
              : 'L’inscription est confirmée après paiement des frais d’inscription de 10 000 FCFA, incluant le test de niveau, les supports pédagogiques et le T-shirt officiel du centre. Les frais de module sont dus avant la première session ou selon l’échéancier choisi.'}
          </p>

          <h2 className="text-lg font-black text-slate-900">
            {isEn ? '2. Cancellation & Refunds' : '2. Annulation et Remboursement'}
          </h2>
          <p>
            {isEn
              ? 'Cancellations made at least 7 days before the start date are eligible for a full refund of module fees minus the enrollment fee. No refund is granted once sessions have started, except in cases of force majeure.'
              : 'Les annulations effectuées au moins 7 jours avant la date de début donnent droit au remboursement intégral des frais de module, hors frais d’inscription. Aucun remboursement n’est accordé une fois les sessions commencées, sauf cas de force majeure.'}
          </p>

          <h2 className="text-lg font-black text-slate-900">
            {isEn ? '3. Attendance & Punctuality' : '3. Assiduité et Ponctualité'}
          </h2>
          <p>
            {isEn
              ? 'Students are expected to attend all scheduled sessions. Missed classes may not be rescheduled individually unless previously agreed with the administration.'
              : 'Les stagiaires doivent assister à l’ensemble des sessions prévues. Les absences ne donnent pas lieu à des cours de rattrapage individuels, sauf accord préalable avec l’administration.'}
          </p>

          <h2 className="text-lg font-black text-slate-900">
            {isEn ? '4. Liability' : '4. Responsabilité'}
          </h2>
          <p>
            {isEn
              ? 'TEN KEY is committed to delivering quality training and translation services. We are not liable for delays caused by third-party partners, technical issues, or events beyond our control.'
              : 'TEN KEY s’engage à fournir des formations et traductions de qualité. Nous ne pouvons être tenus responsables des retards imputables à des tiers, des problèmes techniques ou à des événements hors de notre contrôle.'}
          </p>
        </div>
      </div>
    </section>
  );
}
