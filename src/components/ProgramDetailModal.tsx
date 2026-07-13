import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Check, ArrowRight } from 'lucide-react';
import type { TrainingModule } from '../types';

interface ProgramDetailModalProps {
  module: TrainingModule | null;
  isOpen: boolean;
  onClose: () => void;
  currentLang: string;
  onRegister: () => void;
}

export default function ProgramDetailModal({
  module,
  isOpen,
  onClose,
  currentLang,
  onRegister,
}: ProgramDetailModalProps) {
  if (!module) return null;

  const isEn = currentLang === 'en';
  const title = isEn ? module.title : module.frenchTitle || module.title;
  const description = isEn ? module.description : module.frenchDescription || module.description;
  const features = isEn ? module.features : module.featuresFrench || module.features;

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-brand-950/60 backdrop-blur-sm"
          onClick={onClose}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="bg-brand-600 p-6 sm:p-8 text-white">
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
              <h2 className="text-xl sm:text-2xl font-black font-display pr-8">{title}</h2>
              <p className="mt-2 text-sm text-white/80 leading-relaxed">{description}</p>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-400 mb-4">
                {isEn ? 'Program Highlights' : 'Points Forts du Programme'}
              </h3>
              <ul className="space-y-3 mb-8">
                {features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-accent-500 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => {
                  onRegister();
                  onClose();
                }}
                className="w-full py-3.5 rounded-xl bg-accent-500 hover:bg-accent-400 text-brand-950 text-xs font-black uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <span>{isEn ? 'Register for this program' : "S'inscrire à ce programme"}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
