import React from 'react';
import { motion } from 'motion/react';
import { Building2, FileText, Award, Mic, ArrowRight } from 'lucide-react';

interface TrustedExpertiseProps {
  lang: string;
  onSelectService?: (serviceName: string) => void;
}

export default function TrustedExpertise({ lang, onSelectService }: TrustedExpertiseProps) {
  const services = [
    {
      id: 'corporate',
      icon: Building2,
      title: { en: 'Corporate & Business English', fr: 'Anglais des Affaires & Professionnel' },
      desc: {
        en: 'Group and one-on-one classes for teams in banking, logistics, ministries, and NGOs. Focus on emails, reports, calls, and presentations.',
        fr: 'Cours en groupe ou individuels pour des équipes en banque, logistique, ministères et ONG. Emails, rapports, appels et présentations.'
      },
    },
    {
      id: 'translation',
      icon: FileText,
      title: { en: 'Legal & Sworn Translation', fr: 'Traduction Agréée & Juridique' },
      desc: {
        en: 'Certified translations of contracts, diplomas, birth certificates, and legal acts. Accepted by courts, ministries, and embassies.',
        fr: 'Traductions certifiées de contrats, diplômes, actes de naissance et documents légaux. Acceptées par tribunaux, ministères et ambassades.'
      },
    },
    {
      id: 'exams',
      icon: Award,
      title: { en: 'Official Exams Bootcamps', fr: 'Préparation Aux Examens Officiels' },
      desc: {
        en: 'Structured prep for TOEFL, IELTS, TOEIC, TEF, and TCF with mock tests under real conditions and progress tracking.',
        fr: 'Préparation structurée aux TOEFL, IELTS, TOEIC, TEF et TCF avec examens blancs en conditions réelles et suivi des progrès.'
      },
    },
    {
      id: 'leadership',
      icon: Mic,
      title: { en: 'Executive Speaking & Coaching', fr: 'Art Oratoire & Leadership' },
      desc: {
        en: 'Coaching for public speaking, chairing meetings, and negotiating in English and French. Built for executives and public-sector leaders.',
        fr: 'Coaching pour parler en public, animer des réunions et négocier en anglais et en français. Conçu pour cadres et responsables publics.'
      },
    },
  ];

  const handleAction = (serviceName: string) => {
    if (onSelectService) {
      onSelectService(serviceName);
    } else {
      const element = document.getElementById('contact-form-section');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-950 tracking-tight leading-tight font-display mb-4">
            {lang === 'en' ? (
              <>What We Train <span className="text-brand-600">& Translate</span></>
            ) : (
              <>Ce Que Nous Formons <span className="text-brand-600">& Traduisons</span></>
            )}
          </h2>
          <p className="text-slate-500 text-sm sm:text-base leading-relaxed font-medium">
            {lang === 'en'
              ? 'From corporate communication to official certification, we design every program around real professional outcomes.'
              : 'De la communication d’entreprise à la certification officielle, chaque programme est conçu autour de résultats professionnels concrets.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => {
            const IconComponent = svc.icon;
            return (
              <motion.div
                key={svc.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="group bg-slate-50 border border-slate-100 rounded-3xl p-7 hover:bg-white hover:border-brand-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-100 text-brand-700 flex items-center justify-center mb-5 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-all duration-300">
                  <IconComponent className="w-5 h-5" />
                </div>

                <h3 className="text-lg font-extrabold font-display text-slate-900 mb-3 leading-tight">
                  {lang === 'en' ? svc.title.en : svc.title.fr}
                </h3>

                <p className="text-xs leading-relaxed text-slate-500 font-medium mb-6">
                  {lang === 'en' ? svc.desc.en : svc.desc.fr}
                </p>

                <button
                  onClick={() => handleAction(lang === 'en' ? svc.title.en : svc.title.fr)}
                  className="inline-flex items-center gap-1.5 text-xs font-black uppercase tracking-wider text-slate-700 hover:text-brand-600 transition-colors cursor-pointer"
                >
                  {lang === 'en' ? 'Learn more' : 'En savoir plus'}
                  <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
