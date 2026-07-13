import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, Check, User, Mail, Phone, MessageSquare, Briefcase } from 'lucide-react';
import { TRAINING_MODULES } from '../data';

interface EnrollmentFormProps {
  currentLang: string;
  selectedModuleName: string;
  setSelectedModuleName: (name: string) => void;
}

export default function EnrollmentForm({
  currentLang,
  selectedModuleName,
  setSelectedModuleName,
}: EnrollmentFormProps) {
  const lang = currentLang === 'en' ? 'en' : 'fr';
  const t = (en: string, fr: string) => (lang === 'en' ? en : fr);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [role, setRole] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const roles = [
    { value: 'individual', label: t('Individual learner', 'Apprenant individuel') },
    { value: 'corporate', label: t('Corporate / HR', 'Entreprise / RH') },
    { value: 'embassy', label: t('Embassy / Institution', 'Ambassade / Institution') },
    { value: 'parent', label: t('Parent / Guardian', 'Parent / Tuteur') },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone) return;

    const submission = {
      id: 'TK-' + Math.floor(100000 + Math.random() * 900000),
      name,
      email: email || 'not-provided@tenkey.com',
      phone,
      role,
      selectedModule: selectedModuleName,
      message: message || '',
      createdAt: new Date().toLocaleDateString(lang === 'en' ? 'en-US' : 'fr-TG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      status: 'pending',
    };

    try {
      const existing = localStorage.getItem('tenkey_enrollments');
      const list = existing ? JSON.parse(existing) : [];
      list.push(submission);
      localStorage.setItem('tenkey_enrollments', JSON.stringify(list));
    } catch (err) {
      console.error('Error saving enrollment', err);
    }

    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-200 transition-all';

  const labelClass =
    'block text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5';

  return (
    <AnimatePresence mode="wait">
      {!submitted ? (
        <motion.form
          key="enrollment-form"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          onSubmit={handleSubmit}
          className="bg-white border border-slate-200 rounded-2xl p-6 sm:p-10 text-left"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <div>
              <label className={labelClass}>
                {t('Full Name *', 'Nom complet *')}
              </label>
              <div className="relative">
                <User className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" strokeWidth={1.5} />
                <input
                  type="text"
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder={t('e.g., Koffi Mensah', 'Ex: Koffi Mensah')}
                  className={`${inputClass} pl-10`}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>
                {t('Phone / WhatsApp *', 'Téléphone / WhatsApp *')}
              </label>
              <div className="relative">
                <Phone className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" strokeWidth={1.5} />
                <input
                  type="tel"
                  required
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder={t('+228 90 01 02 03', '+228 90 01 02 03')}
                  className={`${inputClass} pl-10`}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>{t('Email Address', 'Adresse email')}</label>
              <div className="relative">
                <Mail className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" strokeWidth={1.5} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="koffi@example.com"
                  className={`${inputClass} pl-10`}
                />
              </div>
            </div>

            <div>
              <label className={labelClass}>{t('Profile', 'Profil')}</label>
              <div className="relative">
                <Briefcase className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" strokeWidth={1.5} />
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className={`${inputClass} pl-10 appearance-none`}
                >
                  <option value="">{t('Select your profile', 'Sélectionnez votre profil')}</option>
                  {roles.map((r) => (
                    <option key={r.value} value={r.value}>
                      {r.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          <div className="mb-6">
            <label className={labelClass}>{t('Selected Module', 'Module sélectionné')}</label>
            <select
              value={selectedModuleName}
              onChange={(e) => setSelectedModuleName(e.target.value)}
              className={`${inputClass} appearance-none`}
            >
              {TRAINING_MODULES.map((mod) => {
                const label = lang === 'en' ? mod.title : mod.frenchTitle || mod.title;
                return (
                  <option key={mod.id} value={mod.title}>
                    {label}
                  </option>
                );
              })}
            </select>
          </div>

          <div className="mb-8">
            <label className={labelClass}>{t('Message', 'Message')}</label>
            <div className="relative">
              <MessageSquare className="w-3.5 h-3.5 text-slate-400 absolute left-3.5 top-3.5" strokeWidth={1.5} />
              <textarea
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t(
                  'Preferred schedule, group size, or special requirements...',
                  'Horaires préférés, taille du groupe, ou besoins spécifiques...'
                )}
                className={`${inputClass} pl-10 resize-none`}
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-slate-950 hover:bg-slate-900 text-white text-xs font-semibold tracking-wide py-4 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2"
          >
            <span>{t('Submit Enrollment Request', 'Envoyer la demande d\'inscription')}</span>
            <Send className="w-3.5 h-3.5" />
          </button>

          <p className="text-[10px] text-slate-400 text-center mt-4">
            {t(
              'A 10,000 FCFA registration fee applies for level testing and materials.',
              'Des frais d\'inscription de 10 000 FCFA s\'appliquent pour le test de niveau et les supports.'
            )}
          </p>
        </motion.form>
      ) : (
        <motion.div
          key="enrollment-success"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.98 }}
          transition={{ duration: 0.4 }}
          className="bg-white border border-slate-200 rounded-2xl p-10 text-center"
        >
          <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mx-auto mb-5">
            <Check className="w-6 h-6 text-slate-900" strokeWidth={1.5} />
          </div>
          <h3 className="text-xl font-medium text-slate-950 mb-2">
            {t('Enrollment Request Received', 'Demande d\'inscription reçue')}
          </h3>
          <p className="text-sm text-slate-500 mb-6 max-w-md mx-auto leading-relaxed">
            {t(
              'Thank you. Our admissions team will contact you within one business day to confirm your level test and module selection.',
              'Merci. Notre équipe admissions vous contactera sous un jour ouvrable pour confirmer votre test de niveau et votre module.'
            )}
          </p>
          <button
            onClick={() => {
              setName('');
              setEmail('');
              setPhone('');
              setRole('');
              setMessage('');
              setSubmitted(false);
            }}
            className="text-xs font-semibold text-slate-600 hover:text-slate-900 underline underline-offset-2 cursor-pointer"
          >
            {t('Submit another request', 'Envoyer une autre demande')}
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
