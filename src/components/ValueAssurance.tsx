import React from 'react';
import { motion } from 'motion/react';
import { BadgeCheck, FileText, CalendarDays } from 'lucide-react';

interface ValueAssuranceProps {
  currentLang: string;
}

export default function ValueAssurance({ currentLang }: ValueAssuranceProps) {
  const lang = currentLang === 'en' ? 'en' : 'fr';
  const t = (en: string, fr: string) => (lang === 'en' ? en : fr);

  const items = [
    {
      icon: BadgeCheck,
      title: t('Certified Processes', 'Processus Certifiés'),
      desc: t(
        'Curricula aligned with CEFR standards, official exam preparation protocols, and sworn translation procedures recognized by institutional bodies.',
        'Cursus alignés sur les standards CECRL, protocoles de préparation aux examens officiels et procédures de traduction agréée reconnues par les institutions.'
      ),
    },
    {
      icon: FileText,
      title: t('Corporate Invoicing', 'Facturation Entreprise'),
      desc: t(
        'Detailed quotes for ministries, embassies, NGOs, and private sector partners. Official receipts, purchase-order support, and multi-student enrollment management.',
        'Devis détaillés pour ministères, ambassades, ONG et partenaires privés. Reçus officiels, bon de commande et gestion des inscriptions collectives.'
      ),
    },
    {
      icon: CalendarDays,
      title: t('Flexible Executive Schedules', 'Horaires Flexibles pour Cadres'),
      desc: t(
        'Lunch-time sessions, evening shifts, weekend masterclasses, and VIP on-demand cabinets arranged around executive calendars.',
        'Sessions midi, soirées, masterclasses weekend et cabinets VIP sur demande, organisés selon l’agenda des cadres.'
      ),
    },
  ];

  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.6 }}
        className="mb-14 max-w-2xl"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="text-brand-600 text-[10px] font-black tracking-widest uppercase">
            {t('Institutional Guarantees', 'Garanties Institutionnelles')}
          </span>
          <span className="w-16 h-0.5 bg-brand-600" />
        </div>
        <h2 className="text-3xl sm:text-4xl font-black text-brand-950 font-display tracking-tight leading-tight mb-5">
          {t('Built for Enterprise & Embassy Expectations', 'Conçu pour les Exigences Entreprises & Ambassades')}
        </h2>
        <p className="text-sm sm:text-base text-slate-500 leading-relaxed font-medium">
          {t(
            'Institutional standards applied to every enrollment: certified curricula, official invoicing, and schedules adapted to executive calendars.',
            'Des standards institutionnels appliqués à chaque inscription : cursus certifiés, facturation officielle et horaires adaptés aux agendas de cadres.'
          )}
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, idx) => {
          const IconComponent = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-white border border-slate-200 p-8 rounded-2xl hover:border-slate-300 transition-colors"
            >
              <div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center mb-6 text-brand-700">
                <IconComponent className="w-4 h-4" strokeWidth={1.5} />
              </div>
              <h3 className="text-base font-medium text-brand-950 mb-3">{item.title}</h3>
              <p className="text-xs leading-relaxed text-slate-500">{item.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
