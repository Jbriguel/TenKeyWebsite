import React, { useState } from 'react';
import { MapPin, Navigation, Car, Compass, Landmark, Info } from 'lucide-react';

interface LocationMapProps {
  lang: 'en' | 'fr';
}

interface TransitRoute {
  name: { en: string; fr: string };
  time: string;
  steps: { en: string; fr: string }[];
}

export default function LocationMap({ lang }: LocationMapProps) {
  const [selectedRouteKey, setSelectedRouteKey] = useState<'airport' | 'university' | 'port'>('university');

  const routes: Record<'airport' | 'university' | 'port', TransitRoute> = {
    university: {
      name: { en: 'From University of Lomé (Campus)', fr: 'Depuis l\'Université de Lomé (Campus)' },
      time: '8 - 12 mins',
      steps: [
        { en: 'Head north on Boulevard Eyadema.', fr: 'Prendre la direction nord sur le Boulevard Eyadema.' },
        { en: 'Turn left at Carrefour Limousine towards Avedji.', fr: 'Tourner à gauche au Carrefour Limousine vers Avedji.' },
        { en: 'Continue straight to Carrefour Adroukpape.', fr: 'Continuer tout droit jusqu\'au Carrefour Adroukpape.' },
        { en: 'We are right next to the LAUS DEO Pharmacy.', fr: 'Nous sommes situés juste à côté de la pharmacie LAUS DEO.' }
      ]
    },
    airport: {
      name: { en: 'From Lomé Airport (AIGLE)', fr: 'Depuis l\'Aéroport de Lomé (AIGLE)' },
      time: '15 - 20 mins',
      steps: [
        { en: 'Take Boulevard de la Paix heading west.', fr: 'Prendre le Boulevard de la Paix en direction de l\'ouest.' },
        { en: 'Turn right at the main Adidoadin junction.', fr: 'Prendre à droite au grand carrefour de Adidoadin.' },
        { en: 'Follow indications to Carrefour Adroukpape.', fr: 'Suivre les indications vers le Carrefour Adroukpape.' },
        { en: 'Spot the TEN KEY building on your right.', fr: 'Le bâtiment TEN KEY est visible sur votre droite.' }
      ]
    },
    port: {
      name: { en: 'From Port Autonome de Lomé / Beachfront', fr: 'Depuis le Port Autonome de Lomé / Plage' },
      time: '20 - 25 mins',
      steps: [
        { en: 'Drive north via Boulevard Circulaire.', fr: 'Prendre l\'axe nord via le Boulevard Circulaire.' },
        { en: 'Continue on Route d\'Atakpamé/Boulevard Gnassingbé Eyadéma.', fr: 'Continuer sur la Route d\'Atakpamé/Boulevard Eyadéma.' },
        { en: 'Turn left at the Limousine intersection.', fr: 'Prendre à gauche à l\'intersection Limousine.' },
        { en: 'Arrive at Adroukpape near the pharmacy.', fr: 'Arriver à Adroukpape à côté de la pharmacie.' }
      ]
    }
  };

  return (
    <section id="location" className="py-20 bg-white border-t border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-accent-500 font-extrabold text-xs uppercase tracking-widest bg-accent-50 px-3 py-1.5 rounded-full border border-accent-100">
            {lang === 'en' ? 'OUR GEOGRAPHY' : 'SITUATION GEOGRAPHIQUE'}
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-brand-950 mt-4 mb-5 tracking-tight font-display">
            {lang === 'en' ? 'Find Us in Lomé' : 'Où nous trouver à Lomé'}
          </h2>
          <div className="w-16 h-1 bg-accent-500 mx-auto rounded-full mb-5"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          {/* LEFT: Location descriptions & directions */}
          <div className="lg:col-span-5 flex flex-col justify-between text-left">
            <div>
              {/* Primary Address */}
              <div className="bg-brand-950 text-white rounded-2xl p-6 shadow-xl mb-6">
                <div className="flex gap-4 items-start">
                  <div className="bg-accent-500 text-white p-3 rounded-xl shrink-0">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-extrabold text-base tracking-wide uppercase font-display mb-2">
                      {lang === 'en' ? 'Physical Center Address' : 'Adresse Physique du Centre'}
                    </h4>
                    <p className="text-sm text-brand-100 leading-relaxed font-semibold">
                      Avedji/Adidoadin, Carrefour Adroukpape.
                      <br />
                      {lang === 'en'
                        ? 'Right next to the LAUS DEO Pharmacy.'
                        : 'Juste à côté de la Pharmacie LAUS DEO.'}
                      <br />
                      Lomé - Togo.
                    </p>
                  </div>
                </div>
              </div>

              {/* Interactive Router Selector */}
              <div className="space-y-4">
                <h5 className="font-bold text-xs uppercase tracking-wider text-gray-400">
                  {lang === 'en' ? 'Interactive Directions Helper' : 'Calculateur d\'Itinéraire Simplifié'}
                </h5>

                <div className="flex flex-wrap gap-2">
                  {(Object.keys(routes) as Array<keyof typeof routes>).map((routeKey) => (
                    <button
                      key={routeKey}
                      onClick={() => setSelectedRouteKey(routeKey)}
                      className={`px-3 py-2 rounded-xl text-xs font-bold transition-all flex items-center gap-1.5 cursor-pointer ${
                        selectedRouteKey === routeKey
                          ? 'bg-brand-600 text-white shadow-md'
                          : 'bg-gray-100 hover:bg-gray-200 text-gray-600'
                      }`}
                    >
                      <Car className="w-3.5 h-3.5" />
                      <span>
                        {routeKey === 'university' && (lang === 'en' ? 'Campus' : 'Campus')}
                        {routeKey === 'airport' && (lang === 'en' ? 'Airport' : 'Aéroport')}
                        {routeKey === 'port' && (lang === 'en' ? 'Port / Ville' : 'Port / Ville')}
                      </span>
                    </button>
                  ))}
                </div>

                {/* Selected Direction steps */}
                <div className="bg-gray-50/70 border border-gray-100 rounded-2xl p-5 text-xs text-left">
                  <div className="flex justify-between items-center mb-3 pb-2 border-b border-gray-100">
                    <span className="font-bold text-brand-950 text-xs">
                      {lang === 'en' ? routes[selectedRouteKey].name.en : routes[selectedRouteKey].name.fr}
                    </span>
                    <span className="bg-brand-100 text-brand-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full uppercase shrink-0">
                      {routes[selectedRouteKey].time}
                    </span>
                  </div>

                  <ol className="space-y-2.5">
                    {routes[selectedRouteKey].steps.map((step, idx) => (
                      <li key={idx} className="flex gap-2.5 text-gray-600">
                        <span className="text-[10px] font-extrabold text-brand-600 mt-0.5 shrink-0">
                          0{idx + 1}.
                        </span>
                        <span className="font-semibold leading-relaxed">
                          {lang === 'en' ? step.en : step.fr}
                        </span>
                      </li>
                    ))}
                  </ol>
                </div>
              </div>
            </div>

            {/* Note */}
            <div className="mt-6 flex gap-2.5 bg-accent-50 text-accent-800 p-4 rounded-xl border border-accent-100/60 text-xs">
              <Info className="w-4.5 h-4.5 shrink-0 text-accent-500 mt-0.5" />
              <p className="font-semibold leading-normal">
                {lang === 'en'
                  ? 'Our premises are open Monday to Saturday from 08:00 to 20:30. Visitors are welcome for physical registrations and consultations.'
                  : 'Nos locaux sont ouverts du Lundi au Samedi de 08h 00 à 20h 30. Vous êtes les bienvenus pour vos inscriptions directes.'}
              </p>
            </div>
          </div>

          {/* RIGHT: Beautiful Vector Map Simulation */}
          <div className="lg:col-span-7 bg-brand-50/50 rounded-3xl border border-gray-100 p-6 flex flex-col justify-between min-h-[400px]">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-1.5">
                <Compass className="w-5 h-5 text-brand-600" />
                <span className="font-bold text-xs text-brand-950 uppercase tracking-wide">
                  {lang === 'en' ? 'Interactive Area Map' : 'Plan d\'Accès Interactif'}
                </span>
              </div>
              <span className="bg-emerald-500 text-white text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider animate-pulse">
                {lang === 'en' ? 'Near Laus Deo' : 'Quartier Avedji'}
              </span>
            </div>

            {/* Simulated interactive map using precise and beautifully styled SVGs */}
            <div className="relative bg-[#f8fafc] border border-gray-200/60 rounded-2xl flex-1 overflow-hidden h-72 shadow-inner">
              <svg viewBox="0 0 800 400" className="w-full h-full text-slate-400">
                {/* Background Grid */}
                <defs>
                  <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#e2e8f0" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />

                {/* Major Roads / Boulevards */}
                {/* Boulevard Eyadéma / Route d'Atakpamé */}
                <path d="M 680 0 L 680 400" stroke="#cbd5e1" strokeWidth="48" strokeLinecap="round" fill="none" />
                <path d="M 680 0 L 680 400" stroke="#ffffff" strokeWidth="6" strokeDasharray="12,12" strokeLinecap="round" fill="none" />

                {/* Boulevard de l'Union / Boulevard de la Paix */}
                <path d="M 0 350 L 800 350" stroke="#cbd5e1" strokeWidth="36" strokeLinecap="round" fill="none" />
                <path d="M 0 350 L 800 350" stroke="#ffffff" strokeWidth="4" strokeDasharray="8,8" strokeLinecap="round" fill="none" />

                {/* Route d'Avedji - Adidoadin (Route Secondaire) */}
                <path d="M 100 200 Q 300 210 500 200 T 800 210" stroke="#e2e8f0" strokeWidth="24" strokeLinecap="round" fill="none" />
                <path d="M 100 200 Q 300 210 500 200 T 800 210" stroke="#ffffff" strokeWidth="2" strokeDasharray="4,4" strokeLinecap="round" fill="none" />

                {/* Adroukpape Connector Road */}
                <path d="M 400 0 L 400 400" stroke="#e2e8f0" strokeWidth="20" strokeLinecap="round" fill="none" />

                {/* District Labels */}
                <text x="140" y="80" fill="#94a3b8" fontSize="11" fontWeight="bold" fontFamily="system-ui" letterSpacing="1">AVEDJI</text>
                <text x="560" y="80" fill="#94a3b8" fontSize="11" fontWeight="bold" fontFamily="system-ui" letterSpacing="1">ADIDOADIN</text>

                {/* Roads labels */}
                <text x="696" y="160" fill="#64748b" fontSize="9" fontWeight="bold" transform="rotate(90,696,160)">BOULEVARD EYADEMA</text>
                <text x="240" y="222" fill="#64748b" fontSize="9" fontWeight="bold">ROUTE D'AVEDJI-ADIDOADIN</text>
                <text x="412" y="300" fill="#64748b" fontSize="9" fontWeight="bold" transform="rotate(90,412,300)">CARREFOUR ADROUKPAPE</text>

                {/* Landmark 1: LAUS DEO Pharmacy */}
                <g transform="translate(320, 160)">
                  <rect x="0" y="0" width="100" height="35" rx="6" fill="#ffffff" stroke="#22c55e" strokeWidth="1.5" filter="drop-shadow(0px 2px 4px rgba(0,0,0,0.05))" />
                  <rect x="5" y="5" width="25" height="25" rx="4" fill="#22c55e" />
                  {/* Plus icon inside */}
                  <path d="M12 17 L12 11 M9 14 L15 14" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" />
                  <text x="36" y="16" fill="#1e293b" fontSize="8" fontWeight="extrabold">PHARMACIE</text>
                  <text x="36" y="25" fill="#22c55e" fontSize="7" fontWeight="black">LAUS DEO</text>
                </g>

                {/* Landmark 2: Carrefour Limousine */}
                <g transform="translate(680, 200)">
                  <circle r="12" fill="#3b82f6" fillOpacity="0.1" stroke="#3b82f6" strokeWidth="1.5" />
                  <circle r="4" fill="#3b82f6" />
                  <text x="16" y="4" fill="#1e293b" fontSize="8" fontWeight="extrabold">CARR. LIMOUSINE</text>
                </g>

                {/* SCHOOL DESTINATION POINT: TEN KEY CENTRE DE FORMATIONS */}
                <g transform="translate(400, 150)">
                  {/* Pulsing ring */}
                  <circle r="22" fill="#ff5a36" fillOpacity="0.15" className="animate-ping" style={{ transformOrigin: '0px 0px' }} />
                  <circle r="12" fill="#ff5a36" fillOpacity="0.25" />
                  {/* Pin shape */}
                  <path d="M 0 -16 C -6 -16 -10 -12 -10 -6 C -10 2 0 16 0 16 C 0 16 10 2 10 -6 C 10 -12 6 -16 0 -16 Z" fill="#ff5a36" />
                  <circle r="4" cy="-6" fill="#ffffff" />

                  {/* School Signboard overlay */}
                  <g transform="translate(18, -25)">
                    <rect x="0" y="0" width="150" height="42" rx="8" fill="#0c4b6e" filter="drop-shadow(0px 4px 10px rgba(12,75,110,0.25))" />
                    <text x="10" y="18" fill="#ffffff" fontSize="9" fontWeight="black" fontFamily="system-ui" letterSpacing="0.5">TEN KEY FORMATIONS</text>
                    <text x="10" y="30" fill="#38adf8" fontSize="7" fontWeight="bold" fontFamily="system-ui">Language School & Center</text>
                  </g>
                </g>
              </svg>

              {/* Float Compass label */}
              <div className="absolute bottom-3 left-3 bg-white/95 backdrop-blur-sm border border-gray-100 rounded-xl px-3 py-1.5 shadow-sm text-[10px] font-bold text-gray-500 flex items-center gap-1.5">
                <Landmark className="w-3.5 h-3.5 text-brand-600" />
                <span>Lomé, Togo</span>
              </div>
            </div>

            <p className="text-[10px] text-gray-400 mt-3 text-center">
              {lang === 'en'
                ? '★ Our custom routing engine maps nearby landmarks. Laus Deo Pharmacy is located exactly 25 meters from our main gate.'
                : '★ Notre plan d\'accès indique les repères locaux. La pharmacie Laus Deo est située à 25 mètres de l\'entrée principale du centre.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
