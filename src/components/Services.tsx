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

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {TRAINING_MODULES.map((module, idx) => {
            const IconComponent = iconMap[module.iconName] || Briefcase;
            return (
              <motion.div
                key={module.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: idx * 0.05 }}
                className={`group relative bg-white border rounded-2xl p-6 hover:shadow-xl hover:border-brand-100 transition-all duration-300 flex flex-col justify-between ${
                  module.isHighlighted
                    ? 'shadow-lg border-brand-200/60 ring-2 ring-brand-500/10'
                    : 'border-gray-100 shadow-sm'
                }`}
              >
                {/* Highlight ribbon */}
                {module.isHighlighted && (
                  <span className="absolute top-4 right-4 bg-amber-500 text-white text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase tracking-wider">
                    {lang === 'en' ? 'Popular' : 'Populaire'}
                  </span>
                )}

                <div>
                  {/* Icon Container */}
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-6 transition-colors duration-300 ${
                    module.isHighlighted
                      ? 'bg-brand-600 text-white'
                      : 'bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold text-brand-950 font-display group-hover:text-brand-600 transition-colors leading-snug mb-3">
                    {lang === 'en' ? module.title : (module.frenchTitle || module.title)}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-500 text-xs leading-relaxed mb-6">
                    {lang === 'en' ? module.description : (module.frenchDescription || module.description)}
                  </p>

                  <div className="border-t border-gray-50 pt-4 mb-6">
                    <ul className="space-y-2">
                      {((lang === 'en' ? module.features : module.featuresFrench) || module.features).map((feat, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-left">
                          <CheckCircle2 className="w-3.5 h-3.5 text-accent-500 mt-0.5 shrink-0" />
                          <span className="text-[11px] font-semibold text-gray-600 leading-tight">
                            {feat}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => onSelectService(lang === 'en' ? module.title : (module.frenchTitle || module.title))}
                  className={`w-full py-2.5 rounded-xl text-xs font-bold transition-all duration-300 flex items-center justify-center gap-1.5 cursor-pointer border ${
                    module.isHighlighted
                      ? 'bg-brand-600 hover:bg-brand-700 text-white border-transparent'
                      : 'bg-gray-50 hover:bg-brand-50 text-brand-900 border-gray-100 hover:border-brand-200'
                  }`}
                >
                  <span>{lang === 'en' ? 'Register' : "S'inscrire"}</span>
                </button>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
