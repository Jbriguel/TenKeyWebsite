import React from 'react';
import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { motion } from 'motion/react';

interface LocationMapProps {
  lang: string;
}

export default function LocationMap({ lang }: LocationMapProps) {
  const isEn = lang === 'en';

  return (
    <section id="location" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mb-14"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="text-brand-600 text-[10px] font-black tracking-widest uppercase">
              {isEn ? 'Our Location' : 'Notre Adresse'}
            </span>
            <span className="w-16 h-0.5 bg-brand-600" />
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-brand-950 font-display tracking-tight leading-tight mb-5">
            {isEn ? 'Find Us in Lomé' : 'Où Nous Trouver à Lomé'}
          </h2>
          <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
            {isEn
              ? 'Visit our training center in Avedji/Adidoadin, right next to the LAUS DEO Pharmacy.'
              : 'Visitez notre centre de formation à Avedji/Adidoadin, juste à côté de la Pharmacie LAUS DEO.'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* LEFT: Essential info cards */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xs font-black text-brand-950 uppercase tracking-wider mb-1">
                  {isEn ? 'Address' : 'Adresse'}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Avedji/Adidoadin, Carrefour Adroukpape
                  <br />
                  {isEn ? 'Next to LAUS DEO Pharmacy' : 'À côté de la Pharmacie LAUS DEO'}
                  <br />
                  Lomé, Togo
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <Clock className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xs font-black text-brand-950 uppercase tracking-wider mb-1">
                  {isEn ? 'Opening Hours' : 'Horaires'}
                </h4>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {isEn ? 'Monday — Saturday' : 'Lundi — Samedi'}
                  <br />
                  08:00 — 20:30
                </p>
              </div>
            </div>

            <div className="bg-white border border-slate-200 rounded-2xl p-6 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-brand-50 text-brand-600 flex items-center justify-center shrink-0">
                <Phone className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <h4 className="text-xs font-black text-brand-950 uppercase tracking-wider mb-1">
                  {isEn ? 'Phone' : 'Téléphone'}
                </h4>
                <a
                  href="tel:+22891883867"
                  className="text-sm text-slate-600 hover:text-brand-600 transition-colors font-medium"
                >
                  +228 91 88 38 67
                </a>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Avedji+Adidoadin+Carrefour+Adroukpape+Lome+Togo"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-brand-600 hover:bg-brand-700 text-white text-[11px] font-semibold tracking-wide py-3.5 rounded-xl transition-all cursor-pointer"
            >
              <Navigation className="w-3.5 h-3.5" />
              {isEn ? 'Get Directions' : 'Obtenir l\'Itinéraire'}
            </a>
          </div>

          {/* RIGHT: Real interactive map */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="lg:col-span-8 bg-white border border-slate-200 rounded-2xl p-3 overflow-hidden"
          >
            <div className="relative w-full h-[420px] rounded-xl overflow-hidden">
              <iframe
                title={isEn ? 'TEN KEY Location Map' : 'Carte d\'accès TEN KEY'}
                src="https://www.openstreetmap.org/export/embed.html?bbox=1.211%2C6.169%2C1.222%2C6.176&layer=mapnik&marker=6.1723%2C1.2164"
                className="absolute inset-0 w-full h-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
