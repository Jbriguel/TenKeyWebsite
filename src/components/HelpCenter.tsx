import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  HelpCircle,
  Search,
  ChevronDown,
  MessageCircle,
  Mail,
  Phone,
  ArrowRight,
  BookOpen,
  CreditCard,
  Award,
  Calendar,
  Users,
} from 'lucide-react';
import LocationMap from './LocationMap';

interface HelpCenterProps {
  lang: string;
  onContact?: () => void;
}

export default function HelpCenter({ lang, onContact }: HelpCenterProps) {
  const isEn = lang === 'en';
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [openQuestions, setOpenQuestions] = useState<Set<string>>(new Set());

  const categories = [
    { id: 'registration', icon: Users, label: isEn ? 'Registration' : 'Inscription' },
    { id: 'courses', icon: BookOpen, label: isEn ? 'Courses & Levels' : 'Cours & Niveaux' },
    { id: 'schedule', icon: Calendar, label: isEn ? 'Schedules' : 'Horaires' },
    { id: 'payment', icon: CreditCard, label: isEn ? 'Payment' : 'Paiement' },
    { id: 'certification', icon: Award, label: isEn ? 'Certifications' : 'Certifications' },
  ];

  const faqItems = [
    {
      id: 'reg-1',
      category: 'registration',
      question: {
        en: 'How do I register for a course at TEN KEY?',
        fr: 'Comment s’inscrire à un cours chez TEN KEY ?',
      },
      answer: {
        en: 'You can register online through our enrollment form, by WhatsApp, or by visiting our center in Avedji/Adidoadin. A 10,000 FCFA registration fee covers your level test and learning materials.',
        fr: 'Vous pouvez vous inscrire en ligne via notre formulaire, par WhatsApp ou en passant au centre à Avedji/Adidoadin. Des frais d’inscription de 10 000 FCFA couvrent le test de niveau et les supports pédagogiques.',
      },
    },
    {
      id: 'reg-2',
      category: 'registration',
      question: {
        en: 'Do I need to take a placement test before enrolling?',
        fr: 'Dois-je passer un test de niveau avant de m’inscrire ?',
      },
      answer: {
        en: 'Yes. Every new student completes a short diagnostic test (online or in-person) so we can recommend the right CEFR level and module.',
        fr: 'Oui. Chaque nouvel élève passe un test de diagnostic (en ligne ou au centre) afin que nous puissions recommander le bon niveau CECRL et le bon module.',
      },
    },
    {
      id: 'crs-1',
      category: 'courses',
      question: {
        en: 'What CEFR levels do you offer?',
        fr: 'Quels niveaux CECRL proposez-vous ?',
      },
      answer: {
        en: 'We offer structured tracks from A1 to C2, including General English, Business English, Academic English, TOEFL/IELTS preparation, and professional Translation & Interpretation.',
        fr: 'Nous proposons des parcours structurés de A1 à C2, incluant l’anglais général, l’anglais des affaires, l’anglais académique, la préparation TOEFL/IELTS et la traduction-interprétation professionnelle.',
      },
    },
    {
      id: 'crs-2',
      category: 'courses',
      question: {
        en: 'Are the trainers native or certified?',
        fr: 'Les formateurs sont-ils natifs ou certifiés ?',
      },
      answer: {
        en: 'Both. Our team includes native English speakers and certified Togolese trainers with field experience in ministries, NGOs, and international organizations.',
        fr: 'Les deux. Notre équipe comprend des formateurs natifs anglophones et des formateurs togolais certifiés avec une expérience terrain auprès de ministères, ONG et organisations internationales.',
      },
    },
    {
      id: 'sch-1',
      category: 'schedule',
      question: {
        en: 'What schedules are available for working professionals?',
        fr: 'Quels horaires sont disponibles pour les professionnels ?',
      },
      answer: {
        en: 'We run lunch-break, evening (18:30–20:30), Saturday masterclasses, and private VIP cabinets. Schedules are designed around executive obligations.',
        fr: 'Nous proposons des créneaux en pause déjeuner, le soir (18h30–20h30), des masterclasses le samedi et des cabinets privés VIP. Les horaires sont conçus autour des obligations professionnelles.',
      },
    },
    {
      id: 'sch-2',
      category: 'schedule',
      question: {
        en: 'Can I change my class schedule after registration?',
        fr: 'Puis-je changer d’horaire après inscription ?',
      },
      answer: {
        en: 'Schedule changes are possible within the first two weeks of the trimester, subject to seat availability in the desired slot.',
        fr: 'Les changements d’horaire sont possibles dans les deux premières semaines du trimestre, sous réserve de places disponibles dans le créneau souhaité.',
      },
    },
    {
      id: 'pay-1',
      category: 'payment',
      question: {
        en: 'What payment options do you accept?',
        fr: 'Quelles options de paiement acceptez-vous ?',
      },
      answer: {
        en: 'We accept cash, mobile money, bank transfer, and corporate B2B invoicing. Installment plans are available for trimester packages.',
        fr: 'Nous acceptons les espèces, le mobile money, le virement bancaire et la facturation B2B entreprise. Des paiements échelonnés sont disponibles pour les forfaits trimestriels.',
      },
    },
    {
      id: 'pay-2',
      category: 'payment',
      question: {
        en: 'Do you offer refunds if I cannot attend?',
        fr: 'Proposez-vous des remboursements si je ne peux pas assister ?',
      },
      answer: {
        en: 'Fees are non-refundable after the second week of classes, but missed sessions can often be recovered in parallel groups or via catch-up workshops.',
        fr: 'Les frais ne sont pas remboursables après la deuxième semaine de cours, mais les séances manquées peuvent souvent être rattrapées dans des groupes parallèles ou via des ateliers de rattrapage.',
      },
    },
    {
      id: 'cert-1',
      category: 'certification',
      question: {
        en: 'Will I receive a certificate at the end of my course?',
        fr: 'Recevrai-je un certificat à la fin de mon cours ?',
      },
      answer: {
        en: 'Yes. Students who complete the required hours and pass the final assessment receive a TEN KEY certificate indicating their CEFR level and module.',
        fr: 'Oui. Les élèves ayant accompli les heures requises et réussi l’évaluation finale reçoivent un certificat TEN KEY indiquant leur niveau CECRL et leur module.',
      },
    },
    {
      id: 'cert-2',
      category: 'certification',
      question: {
        en: 'Do you prepare for official exams like TOEFL, IELTS, or TEF?',
        fr: 'Préparez-vous aux examens officiels comme le TOEFL, IELTS ou TEF ?',
      },
      answer: {
        en: 'Yes. We offer dedicated exam-preparation bootcamps with simulation tests under real institutional conditions.',
        fr: 'Oui. Nous proposons des bootcamps dédiés à la préparation aux examens avec des examens blancs en conditions réelles.',
      },
    },
  ];

  const filteredFaq = useMemo(() => {
    const query = searchQuery.toLowerCase();
    return faqItems.filter((item) => {
      const matchesCategory = activeCategory ? item.category === activeCategory : true;
      const matchesSearch =
        item.question.en.toLowerCase().includes(query) ||
        item.question.fr.toLowerCase().includes(query) ||
        item.answer.en.toLowerCase().includes(query) ||
        item.answer.fr.toLowerCase().includes(query);
      return matchesCategory && matchesSearch;
    });
  }, [searchQuery, activeCategory]);

  const toggleQuestion = (id: string) => {
    setOpenQuestions((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* ─── HERO ─── */}
      <section className="relative w-full min-h-[55vh] flex items-center bg-brand-600 text-white overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2000&auto=format&fit=crop"
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
                {isEn ? 'Help Center' : 'Centre d’Aide'}
              </span>
              <span className="w-16 h-0.5 bg-accent-500" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-[1.08] mb-6">
              {isEn ? (
                <>
                  How Can We <span className="text-accent-500">Help You?</span>
                </>
              ) : (
                <>
                  Comment Pouvons-Nous <span className="text-accent-500">Vous Aider ?</span>
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
              {isEn
                ? 'Find answers about registration, courses, schedules, payments, and certifications. Still need help? Reach out to our support team.'
                : 'Trouvez des réponses sur l’inscription, les cours, les horaires, les paiements et les certifications. Besoin d’aide ? Contactez notre équipe support.'}
            </p>

            {/* Search */}
            <div className="max-w-xl mx-auto relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" strokeWidth={1.5} />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder={isEn ? 'Search for answers...' : 'Rechercher une réponse...'}
                className="w-full bg-white/5 border border-white/10 rounded-xl py-4 pl-11 pr-4 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-accent-500/50 focus:ring-1 focus:ring-accent-500/20 transition-all"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── CATEGORIES ─── */}
      <section className="w-full py-12 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex flex-wrap justify-center gap-3">
            <button
              onClick={() => setActiveCategory(null)}
              className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[11px] font-semibold tracking-wide transition-all cursor-pointer ${
                activeCategory === null
                  ? 'bg-brand-600 text-white'
                  : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
              }`}
            >
              <HelpCircle className="w-3.5 h-3.5" strokeWidth={1.5} />
              {isEn ? 'All Topics' : 'Tous les Sujets'}
            </button>
            {categories.map((cat) => {
              const IconComponent = cat.icon;
              return (
                <button
                  key={cat.id}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-[11px] font-semibold tracking-wide transition-all cursor-pointer ${
                    activeCategory === cat.id
                      ? 'bg-brand-600 text-white'
                      : 'bg-slate-50 text-slate-600 hover:bg-slate-100'
                  }`}
                >
                  <IconComponent className="w-3.5 h-3.5" strokeWidth={1.5} />
                  {cat.label}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ─── FAQ ACCORDION ─── */}
     

      {/* ─── SUPPORT CTA ─── */}
      <section className="w-full py-20 bg-brand-700 text-white relative overflow-hidden">
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="text-accent-500 text-[10px] font-black tracking-widest uppercase">
              {isEn ? 'Still Need Help?' : 'Toujours Besoin d’Aide ?'}
            </span>
            <span className="w-16 h-0.5 bg-accent-500" />
          </div>

          <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight leading-tight mb-5">
            {isEn ? (
              <>
                Contact Our <span className="text-accent-500">Support Team</span>
              </>
            ) : (
              <>
                Contactez Notre <span className="text-accent-500">Équipe Support</span>
              </>
            )}
          </h2>

          <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
            {isEn
              ? 'Our admissions and student support team is available Monday to Saturday, 08:00 to 20:30. Reach out via WhatsApp, email, or phone.'
              : 'Notre équipe admissions et support est disponible du lundi au samedi, de 08h00 à 20h30. Contactez-nous par WhatsApp, email ou téléphone.'}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="https://wa.me/22891883867"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white text-[11px] font-semibold tracking-wide px-6 py-3.5 rounded-xl transition-all cursor-pointer"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <a
              href="mailto:contact@tenkey.tg"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-[11px] font-semibold tracking-wide px-6 py-3.5 rounded-xl transition-all cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              contact@tenkey.tg
            </a>
            <a
              href="tel:+22891883867"
              className="inline-flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-[11px] font-semibold tracking-wide px-6 py-3.5 rounded-xl transition-all cursor-pointer"
            >
              <Phone className="w-4 h-4" />
              +228 91 88 38 67
            </a>
          </div>

          <button
            onClick={onContact}
            className="inline-flex items-center gap-2 bg-accent-500 hover:bg-accent-400 text-brand-950 text-[11px] font-black uppercase tracking-widest px-8 py-4 rounded-xl transition-all cursor-pointer shadow-lg shadow-accent-500/20"
          >
            {isEn ? 'Go to Contact Form' : 'Aller au Formulaire de Contact'}
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>
      <LocationMap lang={lang} />
    </div>
  );
}
