import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, MessageCircle } from 'lucide-react';
import PricingTable from '../components/PricingTable';
import EnrollmentForm from '../components/EnrollmentForm';
import { BentoLevelTesterCTA } from '../components/CoolCTAs';

interface PricingPageProps {
  currentLang: string;
  onRegisterRedirect: (moduleName?: string) => void;
  selectedModuleName: string;
  setSelectedModuleName: (name: string) => void;
}

export default function PricingPage({
  currentLang,
  onRegisterRedirect,
  selectedModuleName,
  setSelectedModuleName,
}: PricingPageProps) {
  const lang = currentLang === 'en' ? 'en' : 'fr';
  const [showStickyCta, setShowStickyCta] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const formSection = document.getElementById('contact-form-section');
      const formTop = formSection ? formSection.getBoundingClientRect().top : Infinity;
      const scrollY = window.scrollY;
      // Show after hero (scroll > 400) and hide when form is near viewport
      setShowStickyCta(scrollY > 400 && formTop > window.innerHeight * 0.6);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="w-full overflow-x-hidden">
      {/* ─── 1. HERO — Deep Immersive Dark ─── */}
      <section className="relative w-full min-h-[70vh] flex items-center justify-center bg-slate-950 text-white">
        {/* Metropolitan background image */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2000&auto=format&fit=crop"
            alt=""
            className="w-full h-full object-cover opacity-20 grayscale"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950" />
        </div>

        {/* Decorative glow */}
        <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 text-center pt-32 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="text-amber-500 text-[10px] font-black tracking-widest uppercase">
                {lang === 'en' ? 'Tuition & Schedules' : 'Tarifs & Horaires'}
              </span>
              <span className="w-16 h-0.5 bg-amber-500" />
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-display tracking-tight leading-tight mb-6">
              {lang === 'en' ? (
                <>
                  Clear Plans, <span className="text-amber-500">Built for Excellence</span>
                </>
              ) : (
                <>
                  Formules Claires, <span className="text-amber-500">Conçues pour l’Excellence</span>
                </>
              )}
            </h1>

            <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-2xl mx-auto mb-10 font-medium">
              {lang === 'en'
                ? 'Transparent executive-level investment for language training. No hidden fees. Fixed FCFA pricing. Structured around your professional obligations.'
                : 'Investissement institutionnel transparent pour la formation linguistique. Pas de frais cachés. Tarifs fixes en FCFA. Structuré autour de vos obligations professionnelles.'}
            </p>

            <div className="flex flex-wrap justify-center gap-4">
              <button
                onClick={() => {
                  const section = document.getElementById('pricing-core');
                  section?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-black uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all cursor-pointer flex items-center gap-2"
              >
                {lang === 'en' ? 'Explore Programs' : 'Explorer les Programmes'}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => onRegisterRedirect()}
                className="bg-white/5 hover:bg-white/10 text-white border border-white/10 text-[11px] font-black uppercase tracking-widest px-6 py-3.5 rounded-xl transition-all cursor-pointer"
              >
                {lang === 'en' ? 'Request a Quote' : 'Demander un Devis'}
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── 2. CORE ACADEMIC MODULES — Clean Crisp Light ─── */}
      <section id="pricing-core" className="w-full py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <PricingTable
            currentLang={currentLang}
            planIds={['p1', 'p2', 'p3']}
            variant="light"
            heroCardId="p2"
            label="Academic Tuition"
            labelFr="Tarification Académique"
            title="Core Academic Modules"
            titleFr="Modules Académiques Fondamentaux"
            subtitle="Structured trimester and intensive programs designed for measurable CEFR progression and official exam readiness."
            subtitleFr="Programmes structurés par trimestre ou intensifs, conçus pour une progression CECRL mesurable et la préparation aux examens officiels."
            onSelectPlan={onRegisterRedirect}
          />
        </div>
      </section>

      {/* ─── 3. ADVANCED SPECIALTIES — Ultra-Dark Contrast Injection ─── */}
      <section id="pricing-specialties" className="w-full py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Subtle geometric glow */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <PricingTable
            currentLang={currentLang}
            planIds={['p4', 'p5', 'p6', 'p7']}
            variant="dark"
            columns={4}
            label="Specialized & Bespoke"
            labelFr="Spécialisé & Sur Mesure"
            title="Advanced / Bespoke Specialties"
            titleFr="Spécialités Avancées & Sur Mesure"
            subtitle="Executive 1-on-1, weekend clubs, youth programs, and additional language tracks tailored to individual or organizational needs."
            subtitleFr="Cabinets exécutifs individuels, clubs weekend, programmes jeunes et options linguistiques additionnelles adaptées aux besoins individuels ou organisationnels."
            onSelectPlan={onRegisterRedirect}
          />
        </div>
      </section>

      {/* ─── 4. INSTITUTIONAL STANDARDS — Deep Blue Foundation ─── */}
      <section className="w-full py-24 bg-slate-900 text-white relative overflow-hidden">
        {/* Background glows */}
        <div className="absolute top-0 right-1/3 w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/3 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-amber-500 text-[10px] font-black tracking-widest uppercase">
                {lang === 'en' ? 'Institutional Guarantees' : 'Garanties Institutionnelles'}
              </span>
              <span className="w-16 h-0.5 bg-amber-500" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black font-display tracking-tight leading-tight mb-5">
              {lang === 'en' ? (
                <>
                  Built for <span className="text-amber-500">Enterprise & Embassy</span> Standards
                </>
              ) : (
                <>
                  Conçu pour les Standards <span className="text-amber-500">Entreprises & Ambassades</span>
                </>
              )}
            </h2>
            <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-medium">
              {lang === 'en'
                ? 'Certified processes, official B2B invoicing, and executive schedules adapted to institutional calendars.'
                : 'Processus certifiés, facturation B2B officielle et horaires adaptés aux agendas institutionnels.'}
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: lang === 'en' ? 'Certified Processes' : 'Processus Certifiés',
                desc: lang === 'en'
                  ? 'CEFR-aligned curricula, official exam prep protocols, and sworn translation procedures.'
                  : 'Cursus alignés CECRL, protocoles de préparation aux examens et procédures de traduction agréée.',
              },
              {
                title: lang === 'en' ? 'Corporate Invoicing' : 'Facturation Entreprise',
                desc: lang === 'en'
                  ? 'Detailed quotes for ministries, embassies, NGOs, and private sector partners.'
                  : 'Devis détaillés pour ministères, ambassades, ONG et partenaires du secteur privé.',
              },
              {
                title: lang === 'en' ? 'Executive Schedules' : 'Horaires Exécutifs',
                desc: lang === 'en'
                  ? 'Lunch, evening, weekend, and VIP on-demand slots arranged around your calendar.'
                  : 'Créneaux midi, soir, weekend et cabinets VIP sur demande, adaptés à votre agenda.',
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:bg-white/[0.05] hover:border-white/20 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-500/10 text-amber-500 flex items-center justify-center mb-6">
                  <span className="text-sm font-black">0{idx + 1}</span>
                </div>
                <h3 className="text-base font-medium text-white mb-3">{item.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── 5. DIAGNOSTIC FORM — Stark Minimalist White ─── */}
      <section id="contact-form-section" className="w-full bg-white py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6 }}
            className="text-center mb-14"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="text-brand-600 text-[10px] font-black tracking-widest uppercase">
                {lang === 'en' ? 'Institutional Enrollment' : 'Admission Institutionnelle'}
              </span>
              <span className="w-16 h-0.5 bg-brand-600" />
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-950 font-display tracking-tight leading-tight mb-4">
              {lang === 'en' ? 'Reserve Your Diagnostic Session' : 'Réservez Votre Session Diagnostique'}
            </h2>
            <p className="text-sm sm:text-base text-slate-500 leading-relaxed max-w-xl mx-auto font-medium">
              {lang === 'en'
                ? 'Submit your details. Our admissions team will confirm your level test and preferred module within one business day.'
                : 'Envoyez vos coordonnées. Notre équipe admissions confirmera votre test de niveau et votre module privilégié sous un jour ouvrable.'}
            </p>
          </motion.div>

          <EnrollmentForm
            currentLang={currentLang}
            selectedModuleName={selectedModuleName}
            setSelectedModuleName={setSelectedModuleName}
          />
        </div>
      </section>

      {/* ─── SLIM CTA BAND ─── */}
      <section className="w-full bg-slate-950 border-t border-white/5 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-400 font-medium leading-relaxed">
            {lang === 'en'
              ? 'Fixed FCFA pricing. Installments available. Questions? Our admissions team replies within one business day.'
              : 'Tarifs fixes en FCFA. Paiement échelonné disponible. Des questions ? Notre équipe admissions répond sous un jour ouvrable.'}
          </p>
          <button
            onClick={() => onRegisterRedirect()}
            className="inline-flex items-center gap-2 text-[11px] font-semibold text-amber-500 hover:text-amber-400 transition-colors cursor-pointer shrink-0"
          >
            {lang === 'en' ? 'Request a custom quote' : 'Demander un devis personnalisé'}
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </section>

      {/* ─── STICKY BOTTOM CTA ─── */}
      <motion.div
        initial={false}
        animate={{ y: showStickyCta ? 0 : 100, opacity: showStickyCta ? 1 : 0 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        className="fixed bottom-0 left-0 right-0 z-50 bg-slate-950/95 backdrop-blur-md border-t border-white/10 shadow-[0_-8px_30px_-12px_rgba(0,0,0,0.3)]"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3.5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="hidden sm:block">
              <p className="text-xs font-semibold text-white">
                {lang === 'en' ? 'Ready to start your executive training?' : 'Prêt à démarrer votre formation exécutive ?'}
              </p>
              <p className="text-[10px] text-slate-400">
                {lang === 'en' ? 'Enroll today and get your level test scheduled.' : 'Inscrivez-vous aujourd’hui et planifiez votre test de niveau.'}
              </p>
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={() => onRegisterRedirect()}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-slate-950 text-[11px] font-semibold tracking-wide px-5 py-3 rounded-lg transition-all cursor-pointer"
              >
                {lang === 'en' ? 'Start Enrollment' : "S'inscrire"}
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
              <a
                href="https://wa.me/22891883867"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 text-white border border-white/10 text-[11px] font-semibold tracking-wide px-4 py-3 rounded-lg transition-all cursor-pointer"
              >
                <MessageCircle className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      </motion.div>
    </main>
  );
}
