import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { PRICING_PLANS } from '../data';
import { Search, Calendar, BadgePercent, Coins, Check, AlertCircle, Sparkles, BookOpen } from 'lucide-react';

interface PricingTableProps {
  lang: 'en' | 'fr';
  onSelectPlan: (moduleName: string) => void;
}

export default function PricingTable({ lang, onSelectPlan }: PricingTableProps) {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState<'all' | 'english' | 'special' | 'other'>('all');

  const categories = [
    { id: 'all', label: { en: 'All Modules', fr: 'Tous les Modules' } },
    { id: 'english', label: { en: 'English Courses', fr: 'Cours d\'Anglais' } },
    { id: 'special', label: { en: 'VIP & Kids', fr: 'VIP & Jeunes' } },
    { id: 'other', label: { en: 'French & Services', fr: 'Français & Services' } }
  ];

  // Helper to categorize plans on the fly
  const filteredPlans = useMemo(() => {
    return PRICING_PLANS.filter((plan) => {
      const matchSearch =
        plan.moduleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plan.frenchModuleName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plan.schedule.toLowerCase().includes(searchTerm.toLowerCase()) ||
        plan.frenchSchedule.toLowerCase().includes(searchTerm.toLowerCase());

      if (!matchSearch) return false;

      if (activeTab === 'all') return true;
      if (activeTab === 'english') {
        return (
          plan.id === 'p1' || // General & Professional English
          plan.id === 'p2' || // Academic English
          plan.id === 'p3'    // TOEFL Prep
        );
      }
      if (activeTab === 'special') {
        return (
          plan.id === 'p4' || // VIP
          plan.id === 'p5' || // Vacances Utiles
          plan.id === 'p6'    // English Club
        );
      }
      if (activeTab === 'other') {
        return (
          plan.id === 'p7' // French
        );
      }
      return true;
    });
  }, [searchTerm, activeTab]);

  return (
    <div id="pricing" className="bg-slate-50 min-h-screen">
      {/* IMMERSIVE PREMIUM PRICING HERO */}
      <section className="relative pt-32 pb-24 md:pt-40 md:pb-32 bg-brand-950 text-white overflow-hidden border-b border-brand-900/40">
        {/* Glowing light leaks */}
        <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-accent-500/10 rounded-full blur-[110px] pointer-events-none"></div>
        <div className="absolute bottom-5 left-10 w-[300px] h-[300px] bg-brand-500/10 rounded-full blur-[90px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center text-left">
            
            {/* Left Column: Text & Perks */}
            <div className="lg:col-span-7">
              <div className="inline-flex items-center gap-1.5 bg-brand-900/80 border border-brand-800 text-accent-400 text-xs font-black tracking-widest px-4 py-2 rounded-full uppercase mb-6 shadow-sm">
                <Coins className="w-3.5 h-3.5 text-accent-500" />
                <span>{lang === 'en' ? 'TRANSPARENT PRICING' : 'TARIFS TRANSPARENTS'}</span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-[3.25rem] font-black tracking-tight leading-[1.1] text-white font-display mb-6">
                {lang === 'en' ? 'Schedules, Options' : 'Horaires, Options'}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-amber-300">
                  {lang === 'en' ? '& Costs' : '& Coûts'}
                </span>
              </h1>

              <p className="text-sm sm:text-base text-brand-100/70 leading-relaxed font-semibold mb-8 max-w-xl">
                {lang === 'en'
                  ? 'Find the perfect schedule and package adapted to your routine. All pricing is clear, fixed, value-packed, and fully transparent.'
                  : 'Trouvez l\'horaire et la formule parfaitement adaptés à votre quotidien. Des tarifs clairs, fixes, transparents et sans aucune surprise.'}
              </p>

              {/* Perks Checklist */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  lang === 'en' ? 'Installment Payments Allowed' : 'Paiement Échelonné Possible',
                  lang === 'en' ? 'Zero Hidden Admin Fees' : 'Frais de Dossier Transparents',
                  lang === 'en' ? 'Official Certifications Included' : 'Attestation Officielle Incluse',
                  lang === 'en' ? 'Flexible Routine Adaptation' : 'Formules Adaptables à Votre Rythme'
                ].map((perk, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <Check className="w-4 h-4 text-accent-400 shrink-0 bg-accent-500/10 rounded-full p-0.5" />
                    <span className="text-xs font-bold text-brand-100">{perk}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: Visual Component representing calendar/schedule */}
            <div className="lg:col-span-5 relative flex justify-center">
              <div className="relative w-full max-w-[380px] aspect-square">
                {/* Visual Collage Card */}
                <div className="w-full h-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-brand-800/40 relative z-10">
                  <img
                    src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=800&auto=format&fit=crop"
                    alt="Corporate training schedules"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-950/70 via-transparent to-brand-950/10"></div>
                </div>

                {/* Floating Badge */}
                <div className="absolute -bottom-6 -right-6 bg-brand-900/90 backdrop-blur-md border border-brand-800 text-white rounded-2xl p-4 shadow-2xl z-20 flex items-center gap-3.5 max-w-[200px] text-left">
                  <div className="w-10 h-10 rounded-xl bg-accent-500/10 text-accent-400 flex items-center justify-center shrink-0">
                    <Sparkles className="w-5.5 h-5.5" />
                  </div>
                  <div>
                    <p className="text-xs font-black font-display text-accent-400">100%</p>
                    <p className="text-[9px] font-bold text-brand-100 leading-normal">
                      {lang === 'en' ? 'Value-Packed Premium Modules' : 'Garantie d’Excellence et Clarté'}
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Pricing List Content Area */}
      <section className="py-16 max-w-7xl mx-auto px-4">
        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row gap-4 justify-between items-center mb-8 bg-gray-50 p-4 rounded-2xl border border-gray-100">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id as any)}
                className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                  activeTab === cat.id
                    ? 'bg-brand-600 text-white shadow-md shadow-brand-100'
                    : 'bg-white hover:bg-gray-100 text-gray-600 border border-gray-100'
                }`}
              >
                {lang === 'en' ? cat.label.en : cat.label.fr}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-gray-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={lang === 'en' ? 'Search courses or times...' : 'Rechercher un cours...'}
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white border border-gray-200 rounded-xl py-2 pl-10 pr-4 text-xs focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 outline-none transition-all font-semibold"
            />
          </div>
        </div>

        {/* Desktop Table View (Hidden on Mobile) */}
        <div className="hidden lg:block overflow-hidden bg-white border border-gray-100 rounded-2xl shadow-xl shadow-gray-50/50 mb-10">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-brand-950 text-white text-xs uppercase tracking-wider font-display font-bold">
                <th className="py-5 px-6">{lang === 'en' ? 'Modules' : 'Modules de Formation'}</th>
                <th className="py-5 px-6">{lang === 'en' ? 'Schedules / Horaires' : 'Schedules / Horaires'}</th>
                <th className="py-5 px-6">{lang === 'en' ? 'Options' : 'Options'}</th>
                <th className="py-5 px-6">{lang === 'en' ? 'Costs / Coûts (FCFA)' : 'Coûts / Tarifs'}</th>
                <th className="py-5 px-6 text-center">{lang === 'en' ? 'Actions' : 'Actions'}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 text-sm">
              {filteredPlans.length > 0 ? (
                filteredPlans.map((plan, idx) => (
                  <tr
                    key={plan.id}
                    className={`hover:bg-brand-50/30 transition-colors ${
                      idx % 2 === 1 ? 'bg-gray-50/20' : 'bg-white'
                    }`}
                  >
                    {/* Module Title */}
                    <td className="py-5 px-6">
                      <div className="font-extrabold text-brand-950 font-display">
                        {lang === 'en' ? plan.moduleName : plan.frenchModuleName}
                      </div>
                    </td>

                    {/* Schedule */}
                    <td className="py-5 px-6 text-gray-600 font-medium">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4 text-brand-500 shrink-0" />
                        <span>{lang === 'en' ? plan.schedule : plan.frenchSchedule}</span>
                      </div>
                    </td>

                    {/* Options */}
                    <td className="py-5 px-6 text-gray-500 font-medium">
                      <div className="whitespace-pre-line text-xs leading-relaxed">
                        {lang === 'en' ? plan.option : plan.frenchOption}
                      </div>
                    </td>

                    {/* Cost */}
                    <td className="py-5 px-6">
                      <div className="whitespace-pre-line font-bold text-brand-900 bg-brand-50 text-brand-800 text-xs px-3 py-1.5 rounded-lg inline-block leading-relaxed">
                        {plan.cost}
                      </div>
                    </td>

                    {/* Action Button */}
                    <td className="py-5 px-6 text-center">
                      <button
                        onClick={() => onSelectPlan(lang === 'en' ? plan.moduleName : plan.frenchModuleName)}
                        className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-4 py-2 rounded-lg cursor-pointer transition-colors"
                      >
                        {lang === 'en' ? 'Select' : 'Choisir'}
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-gray-400 font-medium">
                    {lang === 'en' ? 'No courses found matching your criteria.' : 'Aucun module trouvé pour votre recherche.'}
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Mobile Cards / List View (Visible on Mobile & Tablet) */}
        <div className="lg:hidden flex flex-col gap-4 mb-10">
          {filteredPlans.length > 0 ? (
            filteredPlans.map((plan) => (
              <div
                key={plan.id}
                className="bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md transition-shadow text-left"
              >
                <div className="flex justify-between items-start gap-4 mb-3">
                  <h3 className="font-extrabold text-brand-950 font-display text-base">
                    {lang === 'en' ? plan.moduleName : plan.frenchModuleName}
                  </h3>
                  <span className="bg-brand-50 text-brand-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase shrink-0">
                    {plan.id === 'p6' ? (lang === 'en' ? 'Free' : 'Gratuit') : (lang === 'en' ? 'Premium' : 'Premium')}
                  </span>
                </div>

                <div className="space-y-2.5 text-xs border-t border-b border-gray-50 py-3 my-3">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar className="w-4 h-4 text-brand-400 shrink-0" />
                    <span className="font-medium">
                      {lang === 'en' ? plan.schedule : plan.frenchSchedule}
                    </span>
                  </div>
                  <div className="flex items-start gap-2 text-gray-500">
                    <Check className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                    <span className="whitespace-pre-line font-medium leading-normal">
                      {lang === 'en' ? plan.option : plan.frenchOption}
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-center gap-4 mt-4 pt-1">
                  <div>
                    <p className="text-[10px] uppercase tracking-wider text-gray-400 font-bold mb-0.5">
                      {lang === 'en' ? 'FEES / COÛTS' : 'TARIFS / COÛTS'}
                    </p>
                    <div className="whitespace-pre-line text-xs font-extrabold text-brand-900 bg-brand-50/50 text-brand-800 px-3 py-1 rounded-lg">
                      {plan.cost}
                    </div>
                  </div>
                  <button
                    onClick={() => onSelectPlan(lang === 'en' ? plan.moduleName : plan.frenchModuleName)}
                    className="bg-brand-600 hover:bg-brand-700 text-white font-bold text-xs px-4 py-2.5 rounded-xl cursor-pointer transition-colors"
                  >
                    {lang === 'en' ? 'Choose' : "S'inscrire"}
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="bg-gray-50 text-gray-400 rounded-2xl py-8 text-center text-sm font-medium border border-gray-100">
              {lang === 'en' ? 'No courses found matching your criteria.' : 'Aucun module trouvé.'}
            </div>
          )}
        </div>

        {/* 5. REGISTRATION & ONBOARDING BANNER SECTION */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden bg-gradient-to-r from-brand-900 to-brand-950 text-white rounded-3xl p-6 sm:p-10 shadow-2xl"
        >
          {/* Subtle design element */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 -mr-20 -mt-20"></div>

          <div className="relative z-10 flex flex-col md:flex-row gap-8 items-center justify-between">
            {/* Left Info Column */}
            <div className="text-left max-w-2xl">
              <span className="inline-flex items-center gap-1.5 bg-accent-500 text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider mb-4 shadow-sm shadow-accent-950/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{lang === 'en' ? 'Welcome Package Included' : 'Pack d\'Accueil Inclus'}</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-3 font-display">
                {lang === 'en' ? 'Ready to Start? Registration Details' : "Prêt à démarrer ? Détails d'Inscription"}
              </h3>
              <p className="text-brand-200 text-xs sm:text-sm leading-relaxed">
                {lang === 'en'
                  ? 'All admissions require a one-time onboarding setup fee. This unlocks our full specialized materials and assigns you to the exact curriculum matching your proficiency.'
                  : "Toute admission requiert un droit d'inscription unique. Cela débloque l'accès à nos supports de cours imprimés et vous oriente vers le groupe de niveau idéal."}
              </p>
            </div>

            {/* Right Value Box Column */}
            <div className="bg-brand-800/60 backdrop-blur-sm border border-brand-700 rounded-2xl p-6 w-full md:w-80 shrink-0 text-left">
              <div className="flex justify-between items-baseline mb-4 pb-4 border-b border-brand-700/60">
                <span className="text-sm font-semibold text-brand-200">
                  {lang === 'en' ? 'One-time Fee:' : 'Frais de Dossier :'}
                </span>
                <span className="text-2xl font-extrabold text-accent-400 font-display">
                  10,000 FCFA
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-[10px] font-bold text-brand-300 uppercase tracking-widest leading-none mb-1">
                  {lang === 'en' ? 'What you receive:' : 'Ce qui est inclus :'}
                </p>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-4 h-4 rounded-full bg-accent-500/20 text-accent-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-medium text-brand-100">
                    {lang === 'en' ? 'Compulsory LEVEL TEST' : 'TEST DE NIVEAU obligatoire'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-4 h-4 rounded-full bg-accent-500/20 text-accent-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-medium text-brand-100">
                    {lang === 'en' ? 'Teaching & Didactic Books' : 'Matériels & Manuels didactiques'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  <div className="w-4 h-4 rounded-full bg-accent-500/20 text-accent-400 flex items-center justify-center shrink-0">
                    <Check className="w-3 h-3" />
                  </div>
                  <span className="font-medium text-brand-100">
                    {lang === 'en' ? 'Official School T-Shirt' : 'T-Shirt officiel du centre'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
