import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Send, CheckCircle2, User, Mail, Phone, MessageSquare, Briefcase } from 'lucide-react';
import { TRAINING_MODULES } from '../data';

interface RegistrationFormProps {
  lang: string;
  selectedModuleName: string;
  setSelectedModuleName: (name: string) => void;
}

export default function RegistrationForm({ lang, selectedModuleName, setSelectedModuleName }: RegistrationFormProps) {
  const isEn = lang === 'en';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  // Auto-fill selected course based on parent state
  useEffect(() => {
    if (selectedModuleName) {
      const exists = TRAINING_MODULES.some(
        (m) => m.title === selectedModuleName || m.frenchTitle === selectedModuleName
      );
      if (!exists) {
        setSelectedModuleName(TRAINING_MODULES[0].title);
      }
    } else {
      setSelectedModuleName(TRAINING_MODULES[0].title);
    }
  }, [selectedModuleName, setSelectedModuleName]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !message.trim()) return;
    // TODO: send to backend / email service
    setSubmitted(true);
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
    setSubmitted(false);
  };

  const moduleLabel = (module: typeof TRAINING_MODULES[0]) =>
    isEn ? module.title : module.frenchTitle || module.title;

  return (
    <section className="py-24 bg-slate-50/50 relative overflow-hidden">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 sm:p-10"
        >
          <div className="text-center mb-8">
            <h2 className="text-2xl sm:text-3xl font-black text-brand-950 font-display tracking-tight">
              {isEn ? 'Register for a Program' : "Inscrivez-vous \u00e0 un Programme"}
            </h2>
            <p className="mt-2 text-sm text-slate-500 font-medium">
              {isEn
                ? 'Fill in your details and our admissions team will contact you within 24 hours.'
                : "Remplissez vos coordonn\u00e9es et notre \u00e9quipe admissions vous contactera sous 24 heures."}
            </p>
          </div>

          <AnimatePresence mode="wait">
            {submitted ? (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                className="text-center py-10"
              >
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-black text-brand-950 mb-2">
                  {isEn ? 'Thank you!' : 'Merci !'}
                </h3>
                <p className="text-sm text-slate-500 mb-6">
                  {isEn
                    ? 'Your registration request has been received. We will reach out soon.'
                    : "Votre demande d\u2019inscription a bien \u00e9t\u00e9 re\u00e7ue. Nous vous recontacterons rapidement."}
                </p>
                <button
                  onClick={handleReset}
                  className="text-sm font-bold text-brand-600 hover:text-brand-700 transition-colors cursor-pointer"
                >
                  {isEn ? 'Submit another request' : 'Envoyer une autre demande'}
                </button>
              </motion.div>
            ) : (
              <motion.form
                key="form"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onSubmit={handleSubmit}
                className="space-y-5"
              >
                {/* Full Name */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                    <User className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" />
                    {isEn ? 'Full Name' : 'Nom Complet'}
                  </label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    placeholder={isEn ? 'e.g. Koffi Mensah' : 'ex. Koffi Mensah'}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-950 placeholder:text-slate-400 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all font-semibold"
                  />
                </div>

                {/* Email & Phone */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                      <Mail className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" />
                      {isEn ? 'Email' : 'Email'}
                    </label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      placeholder={isEn ? 'you@example.com' : 'vous@exemple.com'}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-950 placeholder:text-slate-400 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all font-semibold"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                      <Phone className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" />
                      {isEn ? 'Phone' : "T\u00e9l\u00e9phone"}
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      placeholder="+228 XX XX XX XX"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-950 placeholder:text-slate-400 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all font-semibold"
                    />
                  </div>
                </div>

                {/* Program */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                    <Briefcase className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" />
                    {isEn ? 'Program of Interest' : "Programme Souhait\u00e9"}
                  </label>
                  <select
                    value={selectedModuleName}
                    onChange={(e) => setSelectedModuleName(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-950 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all font-semibold appearance-none cursor-pointer"
                  >
                    {TRAINING_MODULES.map((module) => (
                      <option key={module.id} value={module.title}>
                        {moduleLabel(module)}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-black uppercase tracking-wider text-slate-500 mb-2">
                    <MessageSquare className="w-3.5 h-3.5 inline-block mr-1.5 -mt-0.5" />
                    {isEn ? 'Message' : 'Message'}
                  </label>
                  <textarea
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={4}
                    placeholder={isEn ? 'Tell us about your goals...' : 'Parlez-nous de vos objectifs...'}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-brand-950 placeholder:text-slate-400 focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all font-semibold resize-none"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full py-4 rounded-xl bg-brand-600 hover:bg-brand-700 text-white text-sm font-black uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 shadow-lg shadow-brand-900/15"
                >
                  <span>{isEn ? 'Submit Registration' : 'Envoyer mon inscription'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </motion.form>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
