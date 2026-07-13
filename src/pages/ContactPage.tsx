import React, { useState } from 'react';
import { motion } from 'motion/react';
import { useOutletContext } from 'react-router-dom';
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  MessageCircle,
  Send,
  Check,
  ArrowRight,
} from 'lucide-react';
import type { AppContextValue } from '../App';
import FaqSection from '../components/FaqSection';

export default function ContactPage() {
  const { lang, onRegisterRedirect } = useOutletContext<AppContextValue>();
  const isEn = lang === 'en';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !message) return;

    const submission = {
      id: 'MSG-' + Math.floor(100000 + Math.random() * 900000),
      name,
      email: email || 'not-provided@tenkey.com',
      phone: phone || '',
      subject: subject || 'General Inquiry',
      message,
      createdAt: new Date().toLocaleDateString(isEn ? 'en-US' : 'fr-TG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
      status: 'pending',
    };

    try {
      const existing = localStorage.getItem('tenkey_messages');
      const list = existing ? JSON.parse(existing) : [];
      list.push(submission);
      localStorage.setItem('tenkey_messages', JSON.stringify(list));
    } catch (err) {
      console.error('Error saving message', err);
    }

    setSubmitted(true);
  };

  const inputClass =
    'w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 text-sm text-brand-900 placeholder-slate-400 focus:outline-none focus:border-slate-400 focus:ring-1 focus:ring-slate-200 transition-all';

  const labelClass =
    'block text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-1.5';

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative w-full min-h-[55vh] flex items-center bg-brand-600 text-white overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?q=80&w=2000&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-15 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950/95 via-slate-950/80 to-slate-950/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-slate-950/40" />
        </div>

        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 w-full pt-32 pb-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="text-accent-500 text-[10px] font-black tracking-widest uppercase">
                {isEn ? 'Contact' : 'Contact'}
              </span>
              <span className="w-16 h-0.5 bg-accent-500" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[1.08] mb-6">
              {isEn ? (
                <>
                  Get in <span className="text-accent-500">Touch</span>
                </>
              ) : (
                <>
                  Restons en <span className="text-accent-500">Contact</span>
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
              {isEn
                ? 'Have a question about courses, schedules, or corporate training? Our team is ready to help you choose the right program.'
                : 'Vous avez une question sur nos cours, horaires ou formations entreprise ? Notre équipe est prête à vous orienter vers le bon programme.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => onRegisterRedirect()}
                className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-brand-950 text-[11px] font-black uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all cursor-pointer shadow-lg shadow-accent-500/20"
              >
                {isEn ? 'Start Enrollment' : "S'inscrire"}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://wa.me/22891883867"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-[11px] font-black uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CONTACT CONTENT ─── */}
      <section className="w-full py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-7 bg-white border border-slate-200 rounded-2xl p-6 sm:p-10"
            >
              <h2 className="text-2xl font-black text-brand-950 font-display tracking-tight mb-2">
                {isEn ? 'Send us a Message' : 'Envoyez-nous un Message'}
              </h2>
              <p className="text-sm text-slate-500 mb-8">
                {isEn
                  ? 'Fill out the form below and our admissions team will reply within one business day.'
                  : 'Remplissez le formulaire ci-dessous et notre équipe admissions vous répondra sous un jour ouvrable.'}
              </p>

              {!submitted ? (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>{isEn ? 'Full Name *' : 'Nom complet *'}</label>
                      <input
                        type="text"
                        required
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder={isEn ? 'Koffi Mensah' : 'Koffi Mensah'}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>{isEn ? 'Email' : 'Email'}</label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="koffi@example.com"
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>{isEn ? 'Phone / WhatsApp' : 'Téléphone / WhatsApp'}</label>
                      <input
                        type="tel"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        placeholder="+228 90 01 02 03"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>{isEn ? 'Subject' : 'Sujet'}</label>
                      <select
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        className={`${inputClass} appearance-none`}
                      >
                        <option value="">{isEn ? 'Select a topic' : 'Sélectionnez un sujet'}</option>
                        <option value={isEn ? 'Course Inquiry' : 'Renseignement Cours'}>
                          {isEn ? 'Course Inquiry' : 'Renseignement Cours'}
                        </option>
                        <option value={isEn ? 'Corporate Training' : 'Formation Entreprise'}>
                          {isEn ? 'Corporate Training' : 'Formation Entreprise'}
                        </option>
                        <option value={isEn ? 'Exam Preparation' : 'Préparation Examen'}>
                          {isEn ? 'Exam Preparation' : 'Préparation Examen'}
                        </option>
                        <option value={isEn ? 'Translation Service' : 'Service de Traduction'}>
                          {isEn ? 'Translation Service' : 'Service de Traduction'}
                        </option>
                        <option value={isEn ? 'Other' : 'Autre'}>
                          {isEn ? 'Other' : 'Autre'}
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>{isEn ? 'Message *' : 'Message *'}</label>
                    <textarea
                      required
                      rows={5}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={isEn ? 'Tell us about your goals or questions...' : 'Parlez-nous de vos objectifs ou questions...'}
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-brand-600 hover:bg-brand-700 text-white text-[11px] font-semibold tracking-wide py-4 rounded-lg transition-all cursor-pointer flex items-center justify-center gap-2"
                  >
                    <span>{isEn ? 'Send Message' : 'Envoyer le Message'}</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="text-center py-10"
                >
                  <div className="w-14 h-14 rounded-full bg-slate-50 border border-slate-200 flex items-center justify-center mx-auto mb-5">
                    <Check className="w-6 h-6 text-brand-900" strokeWidth={1.5} />
                  </div>
                  <h3 className="text-xl font-medium text-brand-950 mb-2">
                    {isEn ? 'Message Sent' : 'Message Envoyé'}
                  </h3>
                  <p className="text-sm text-slate-500 max-w-md mx-auto leading-relaxed">
                    {isEn
                      ? 'Thank you. Our team will get back to you within one business day.'
                      : 'Merci. Notre équipe vous répondra sous un jour ouvrable.'}
                  </p>
                </motion.div>
              )}
            </motion.div>

            {/* Info cards + map */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="bg-white border border-slate-200 rounded-2xl p-6 space-y-5"
              >
                <h3 className="text-lg font-black text-brand-950 font-display tracking-tight">
                  {isEn ? 'Contact Details' : 'Coordonnées'}
                </h3>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-0.5">
                      {isEn ? 'Address' : 'Adresse'}
                    </p>
                    <p className="text-sm text-brand-700 leading-relaxed">
                      Avedji/Adidoadin, Carrefour Adroukpape
                      <br />
                      {isEn ? 'Next to LAUS DEO Pharmacy' : 'À côté de la Pharmacie LAUS DEO'}
                      <br />
                      Lomé, Togo
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                    <Clock className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-0.5">
                      {isEn ? 'Opening Hours' : 'Horaires'}
                    </p>
                    <p className="text-sm text-brand-700 leading-relaxed">
                      {isEn ? 'Monday — Saturday' : 'Lundi — Samedi'}
                      <br />
                      08:00 — 20:30
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-0.5">
                      {isEn ? 'Phone' : 'Téléphone'}
                    </p>
                    <a
                      href="tel:+22891883867"
                      className="text-sm text-brand-700 hover:text-brand-600 transition-colors font-medium"
                    >
                      +228 91 88 38 67
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-[10px] font-semibold text-slate-500 uppercase tracking-widest mb-0.5">
                      {isEn ? 'Email' : 'Email'}
                    </p>
                    <a
                      href="mailto:contact@tenkey.tg"
                      className="text-sm text-brand-700 hover:text-brand-600 transition-colors font-medium"
                    >
                      contact@tenkey.tg
                    </a>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white border border-slate-200 rounded-2xl p-3 overflow-hidden"
              >
                <div className="relative w-full h-[220px] sm:h-[300px] rounded-xl overflow-hidden">
                  <iframe
                    title={isEn ? 'TEN KEY Location Map' : "Carte d'accès TEN KEY"}
                    src="https://www.openstreetmap.org/export/embed.html?bbox=1.211%2C6.169%2C1.222%2C6.176&layer=mapnik&marker=6.1723%2C1.2164"
                    className="absolute inset-0 w-full h-full border-0"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <FaqSection lang={lang} />
      </motion.div>
    </div>
  );
}
