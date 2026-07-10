import React from 'react';
import { motion } from 'motion/react';
import { TRAINING_MODULES } from '../data';
import { Briefcase, GraduationCap, Award, Crown, Sun, FileText, Users, Globe, CheckCircle2 } from 'lucide-react';

interface ServicesProps {
  lang: 'en' | 'fr';
  onSelectService: (serviceName: string) => void;
}

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Briefcase,
  GraduationCap,
  Award,
  Crown,
  Sun,
  FileText,
  Users,
  Globe,
};

export default function Services({ lang, onSelectService }: ServicesProps) {
  return (
    <section id="services" className="py-20 bg-gray-50/50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-500 font-extrabold text-xs uppercase tracking-widest bg-accent-50 px-3 py-1.5 rounded-full border border-accent-100">
            {lang === 'en' ? 'OUR CURRICULUM' : 'NOS PROGRAMMES'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 mt-4 mb-5 tracking-tight font-display">
            {lang === 'en' ? 'Professional Languages & Cabinets' : 'Programmes de Langues & Cabinets'}
          </h2>
          <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mb-5"></div>
          <p className="text-gray-600 text-base sm:text-lg">
            {lang === 'en'
              ? 'Differentiated instruction designed for professionals, young academics, kids, and non-francophones. Explore our key offerings below.'
              : 'Un enseignement différencié adapté aux professionnels, universitaires, enfants et non-francophones. Découvrez nos modules ci-dessous.'}
          </p>
        </div>

        {/* Bento Grid layout (Inspired by the premium education & travel mockups) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TRAINING_MODULES.map((module, idx) => {
            const IconComponent = iconMap[module.iconName] || Briefcase;
            
            // Asymmetric layout logic for premium Bento effect
            const isFirst = idx === 0;
            const isVIP = module.id === 'vip';
            const isExam = module.id === 'exams';
            const isInterpretation = module.id === 'interpretation'; // We also have a translation cabinet module

            if (isFirst) {
              // Huge Main Highlight Bento Card (matches the "New-packed education" or primary travel card style)
              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5 }}
                  className="md:col-span-2 group relative bg-gradient-to-br from-brand-950 via-brand-900 to-slate-900 rounded-[2.5rem] p-8 hover:shadow-2xl transition-all duration-300 flex flex-col justify-between overflow-hidden border border-brand-800/30 min-h-[350px]"
                >
                  {/* Decorative curved vector background element inside the card */}
                  <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-tr from-brand-500/20 to-accent-500/20 rounded-full blur-3xl group-hover:scale-110 transition-transform duration-700"></div>
                  
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      {/* Icon */}
                      <div className="w-14 h-14 rounded-2xl bg-brand-500/10 border border-brand-500/30 flex items-center justify-center text-brand-400">
                        <IconComponent className="w-7 h-7" />
                      </div>
                      <span className="bg-gradient-to-r from-accent-500 to-amber-500 text-white text-[10px] font-black tracking-widest px-3 py-1 rounded-full uppercase">
                        {lang === 'en' ? 'Core Module' : 'Module Principal'}
                      </span>
                    </div>

                    <div className="max-w-md">
                      <h3 className="text-xl sm:text-2xl font-black text-white font-display tracking-tight leading-tight mb-3">
                        {lang === 'en' ? module.title : (module.frenchTitle || module.title)}
                      </h3>
                      <p className="text-brand-100 text-xs sm:text-sm leading-relaxed mb-6">
                        {lang === 'en' ? module.description : (module.frenchDescription || module.description)}
                      </p>
                    </div>

                    {/* Features list in columns */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 border-t border-brand-800/40 pt-6 mb-8">
                      {((lang === 'en' ? module.features : module.featuresFrench) || module.features).map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-4 h-4 text-accent-400 mt-0.5 shrink-0" />
                          <span className="text-[11px] sm:text-xs font-bold text-brand-200">
                            {feat}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Button */}
                  <button
                    onClick={() => onSelectService(lang === 'en' ? module.title : (module.frenchTitle || module.title))}
                    className="self-start bg-accent-500 hover:bg-accent-600 text-white px-6 py-3 rounded-xl text-xs font-extrabold shadow-lg shadow-accent-950/20 hover:shadow-accent-500/20 transition-all duration-300 flex items-center gap-1.5 cursor-pointer"
                  >
                    <span>{lang === 'en' ? 'Register Now' : "S'inscrire Maintenant"}</span>
                  </button>
                </motion.div>
              );
            }

            if (isVIP) {
              // Ultra VIP Luxury Bento Card with golden/orange gradient highlights (similar to the orange team card)
              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="group relative bg-gradient-to-b from-amber-50/70 to-amber-100/30 border border-amber-200 rounded-[2rem] p-6 hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-amber-500 text-white flex items-center justify-center shadow-lg shadow-amber-500/20">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="bg-amber-100 text-amber-800 border border-amber-200 text-[9px] font-black tracking-wider px-2.5 py-0.5 rounded-full uppercase">
                        VIP 1-to-1
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-amber-950 font-display leading-tight mb-2">
                      {lang === 'en' ? module.title : (module.frenchTitle || module.title)}
                    </h3>
                    <p className="text-amber-900/70 text-xs leading-relaxed mb-6">
                      {lang === 'en' ? module.description : (module.frenchDescription || module.description)}
                    </p>

                    <div className="border-t border-amber-200/50 pt-4 mb-6">
                      <ul className="space-y-2">
                        {((lang === 'en' ? module.features : module.featuresFrench) || module.features).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 mt-0.5 shrink-0" />
                            <span className="text-[11px] font-bold text-amber-950/80 leading-tight">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectService(lang === 'en' ? module.title : (module.frenchTitle || module.title))}
                    className="w-full py-2.5 rounded-xl text-xs font-black bg-amber-950 text-white hover:bg-amber-900 transition-colors shadow-md cursor-pointer"
                  >
                    {lang === 'en' ? 'Book VIP Consult' : 'Réserver Cabinet VIP'}
                  </button>
                </motion.div>
              );
            }

            if (isExam) {
              // High-conversion Exam prep card with colorful orange background representing target accomplishments
              return (
                <motion.div
                  key={module.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.5, delay: 0.15 }}
                  className="group relative bg-white border border-slate-100 rounded-[2rem] p-6 hover:shadow-xl hover:border-accent-200/50 transition-all duration-300 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className="w-12 h-12 rounded-xl bg-accent-50 text-accent-600 flex items-center justify-center">
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <span className="bg-accent-50 text-accent-600 text-[9px] font-black tracking-wider px-2.5 py-0.5 rounded-full uppercase border border-accent-100">
                        {lang === 'en' ? 'Certifying' : 'Certifiant'}
                      </span>
                    </div>

                    <h3 className="text-lg font-extrabold text-slate-900 font-display leading-tight mb-2">
                      {lang === 'en' ? module.title : (module.frenchTitle || module.title)}
                    </h3>
                    <p className="text-slate-500 text-xs leading-relaxed mb-6">
                      {lang === 'en' ? module.description : (module.frenchDescription || module.description)}
                    </p>

                    <div className="border-t border-slate-100 pt-4 mb-6">
                      <ul className="space-y-2">
                        {((lang === 'en' ? module.features : module.featuresFrench) || module.features).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-accent-500 mt-0.5 shrink-0" />
                            <span className="text-[11px] font-bold text-slate-600 leading-tight">
                              {feat}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <button
                    onClick={() => onSelectService(lang === 'en' ? module.title : (module.frenchTitle || module.title))}
                    className="w-full py-2.5 rounded-xl text-xs font-bold bg-accent-500 hover:bg-accent-600 text-white transition-colors shadow-md shadow-accent-100 cursor-pointer"
                  >
                    {lang === 'en' ? 'Get Certified' : 'Se Préparer'}
                  </button>
                </motion.div>
              );
            }

            // Default Elegant Minimalist Card (like the travel destination cards)
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className="group relative bg-white border border-slate-100 rounded-[2rem] p-6 hover:shadow-xl hover:border-brand-200 transition-all duration-300 flex flex-col justify-between shadow-sm"
              >
                <div>
                  <div className="flex justify-between items-start mb-6">
                    <div className="w-12 h-12 rounded-xl bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors duration-300 flex items-center justify-center">
                      <IconComponent className="w-6 h-6" />
                    </div>
                  </div>

                  <h3 className="text-base font-extrabold text-slate-950 font-display leading-tight mb-2 group-hover:text-brand-600 transition-colors">
                    {lang === 'en' ? module.title : (module.frenchTitle || module.title)}
                  </h3>
                  <p className="text-slate-500 text-xs leading-relaxed mb-6">
                    {lang === 'en' ? module.description : (module.frenchDescription || module.description)}
                  </p>

                  <div className="border-t border-slate-100 pt-4 mb-6">
                    <ul className="space-y-2">
                      {((lang === 'en' ? module.features : module.featuresFrench) || module.features).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 mt-0.5 shrink-0" />
                          <span className="text-[11px] font-bold text-slate-600 leading-tight">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <button
                  onClick={() => onSelectService(lang === 'en' ? module.title : (module.frenchTitle || module.title))}
                  className="w-full py-2.5 rounded-xl text-xs font-bold bg-slate-50 hover:bg-brand-50 text-slate-700 hover:text-brand-900 border border-slate-100 hover:border-brand-200 transition-all cursor-pointer"
                >
                  {lang === 'en' ? 'Learn More' : 'Détails & Tarifs'}
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
