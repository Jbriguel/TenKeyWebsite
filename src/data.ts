import { TrainingModule, PricingPlan, Testimonial } from './types';

export const TRAINING_MODULES: TrainingModule[] = [
  {
    id: 'general-professional',
    title: 'General & Professional English',
    frenchTitle: 'Anglais Général & Professionnel',
    description: 'Practical English for daily professional situations : emails, calls, presentations, and negotiations. Built for managers, executives, and teams in Lomé.',
    frenchDescription: 'Anglais pratique pour les situations professionnelles quotidiennes : emails, appels, présentations et négociations. Conçu pour cadres, managers et équipes à Lomé.',
    iconName: 'Briefcase',
    features: [
      'Tailored for workplace scenarios',
      'Focus on presentation & emails',
      'Flexible night & afternoon sessions',
      'Differentiated training methods'
    ],
    featuresFrench: [
      'Adapté aux situations professionnelles',
      'Focus sur les présentations & emails',
      'Horaires flexibles (midi & soir)',
      'Méthodes pédagogiques différenciées'
    ],
    isHighlighted: true
  },
  {
    id: 'academic',
    title: 'Academic English',
    frenchTitle: 'Anglais Académique',
    description: 'Structured preparation for university studies, academic writing, and international professional training programs. Twenty hours per week, Monday to Friday.',
    frenchDescription: 'Préparation structurée aux études universitaires, à l’écrit académique et aux formations professionnelles internationales. Vingt heures par semaine, du lundi au vendredi.',
    iconName: 'GraduationCap',
    features: [
      'Intensive 20 hours per week',
      'Academic writing & listening',
      'University prep curriculum',
      'Daily Monday-to-Friday structure'
    ],
    featuresFrench: [
      'Intensif, 20 heures par semaine',
      'Écrit académique et compréhension orale',
      'Préparation aux études supérieures',
      'Cours du lundi au vendredi'
    ]
  },
  {
    id: 'exams',
    title: 'Exam Preparation',
    frenchTitle: 'Préparation aux Examens',
    description: 'Targeted preparation for TOEFL, IELTS, DUOLINGO, and TOEIC. Diagnostic tests, official-format exercises, and feedback sessions to reach the score you need.',
    frenchDescription: 'Préparation ciblée aux TOEFL, IELTS, DUOLINGO et TOEIC. Tests diagnostiques, exercices au format officiel et séances de correction pour atteindre le score requis.',
    iconName: 'Award',
    features: [
      'Official practice exam patterns',
      'Proven test-taking strategies',
      'Diagnostic mock tests with scoring',
      'Targeted vocabulary & grammar'
    ],
    featuresFrench: [
      'Sujets d\'examens officiels',
      'Stratégies de réussite éprouvées',
      'Examens blancs de diagnostic',
      'Vocabulaire et grammaire ciblés'
    ],
    isHighlighted: true
  },
  {
    id: 'vip',
    title: 'VIP English',
    frenchTitle: 'Anglais VIP (1-on-1)',
    description: 'One-to-one English classes built around your diary and objectives. Ideal for executives, diplomats, and professionals preparing for a specific mission or deadline.',
    frenchDescription: 'Cours d\'anglais en tête-à-tête construits autour de votre agenda et de vos objectifs. Idéal pour cadres, diplomates et professionnels qui préparent une mission ou une échéance spécifique.',
    iconName: 'Crown',
    features: [
      '1 trainer for 1 learner only',
      'Customized curriculum based on field',
      'Learn at our center or your office',
      'Total schedule flexibility'
    ],
    featuresFrench: [
      '1 formateur dédié pour 1 apprenant',
      'Programme adapté à votre secteur',
      'Au centre ou à votre domicile/bureau',
      'Flexibilité totale d\'horaires'
    ]
  },
  {
    id: 'vacances',
    title: 'Vacances Utiles',
    frenchTitle: 'Vacances Utiles (Jeunes)',
    description: 'Special active vacation courses tailored for Primary, Middle, and High School students during school breaks.',
    frenchDescription: 'Cours de vacances spéciaux conçus pour les élèves du Primaire, Collège et Lycée pendant les congés.',
    iconName: 'Sun',
    features: [
      'Age-appropriate fun activities',
      'Speaking & vocabulary games',
      'Strong foundational grammar boost',
      'Interactive learning materials'
    ],
    featuresFrench: [
      'Activités ludiques adaptées à l\'âge',
      'Jeux de parole & de vocabulaire',
      'Renforcement des bases grammaticales',
      'Supports didactiques interactifs'
    ]
  },
  {
    id: 'translation',
    title: 'Translation & Interpretation',
    frenchTitle: 'Cabinet de Traduction & Interprétation',
    description: 'Certified translation of administrative, legal, and business documents. Interpretation available for conferences, hearings, and corporate meetings in Lomé and the sub-region.',
    frenchDescription: 'Traduction certifiée de documents administratifs, légaux et commerciaux. Interprétation disponible pour conférences, audiences et réunions d’entreprise à Lomé et dans la sous-région.',
    iconName: 'FileText',
    features: [
      'Certified document translations',
      'Business contracts & legal papers',
      'Conference & corporate interpreters',
      'Fast delivery and high confidentiality'
    ],
    featuresFrench: [
      'Traductions certifiées conformes',
      'Contrats commerciaux & actes légaux',
      'Interprétation de conférence',
      'Délais rapides et confidentialité'
    ]
  },
  {
    id: 'english-club',
    title: 'English Club',
    frenchTitle: 'Club d\'Anglais',
    description: 'Free interactive practice sessions focused entirely on real-world communication. Speak, speak, speak!',
    frenchDescription: 'Séances de pratique interactives gratuites, axées entièrement sur la communication. Parlez, parlez, parlez !',
    iconName: 'Users',
    features: [
      '100% focused on conversational practice',
      'Dynamic discussions & debate topics',
      'Friendly, non-judgmental environment',
      'Every Saturday - Free for all'
    ],
    featuresFrench: [
      'Pratique 100% conversationnelle',
      'Discussions dynamiques & débats d\'idées',
      'Cadre convivial et bienveillant',
      'Tous les samedis - Entièrement Gratuit'
    ]
  },
  {
    id: 'french-classes',
    title: 'French Classes',
    frenchTitle: 'Cours de Français',
    description: 'Practical French for non-francophones living or working in Togo. Conversation, professional writing, and local integration with flexible twice or thrice weekly sessions.',
    frenchDescription: 'Français pratique pour non-francophones vivant ou travaillant au Togo. Conversation, expression écrite professionnelle et intégration locale, avec des séances flexibles deux ou trois fois par semaine.',
    iconName: 'Globe',
    features: [
      'Practical conversational French',
      'Integration into the local culture',
      'Flexible bi-weekly/tri-weekly schedule',
      'Professional writing & expression'
    ],
    featuresFrench: [
      'Français pratique de conversation',
      'Intégration dans la culture locale',
      'Séances flexibles 2 ou 3 fois/semaine',
      'Expression écrite & professionnelle'
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    id: 'p1',
    moduleName: 'General & Professional English',
    frenchModuleName: 'Anglais Général & Professionnel',
    schedule: '12:30 - 14:00 OR 18:30 - 20:30',
    frenchSchedule: '12h 30 à 14h 00 OU 18h 30 à 20h 30',
    option: 'Every Monday, Tuesday, Thursday',
    frenchOption: 'Lundi, Mardi, Jeudi',
    cost: '99,900 FCFA / Trimester',
    costNum: 99900
  },
  {
    id: 'p2',
    moduleName: 'Academic English',
    frenchModuleName: 'Anglais Académique',
    schedule: '08:00 - 12:00 (20 hours/week)',
    frenchSchedule: '08h 00 à 12h 00 (20h/semaine)',
    option: 'Monday to Friday',
    frenchOption: 'Lundi au Vendredi',
    cost: '• 299,900 FCFA / 3 months\n• 449,900 FCFA / 6 months\n• 599,900 FCFA / 9 months',
    costNum: 299900
  },
  {
    id: 'p3',
    moduleName: 'TOEFL, IELTS, DUOLINGO, TOEIC',
    frenchModuleName: 'Prépa Examens Internationaux',
    schedule: 'Negotiable / Flexible',
    frenchSchedule: 'Négociable / Flexible',
    option: '3 times / week (Negotiable days)',
    frenchOption: '3 fois / semaine (jours négociables)',
    cost: '149,900 FCFA / 2 months',
    costNum: 149900
  },
  {
    id: 'p4',
    moduleName: 'VIP English',
    frenchModuleName: 'Anglais VIP (1-on-1)',
    schedule: "Based on learner's availability",
    frenchSchedule: 'Selon la disponibilité de l\'apprenant',
    option: '1. At the center\n2. At home / Offsite',
    frenchOption: '1. Au centre\n2. À domicile / Extérieur',
    cost: '• 5,000 FCFA / hour\n• Offsite: Negotiable',
    costNum: 5000
  },
  {
    id: 'p5',
    moduleName: 'Vacances Utiles',
    frenchModuleName: 'Vacances Utiles (Jeunes)',
    schedule: '08:00 - 10:00 OR 10:00 - 12:00',
    frenchSchedule: '08h 00 à 10h 00 OU 10h 00 à 12h 00',
    option: '5 times / week\nOR 3 times / week',
    frenchOption: '5 fois / semaine\nOU 3 fois / semaine',
    cost: '• 5 times/wk: 49,900 FCFA / month\n• 3 times/wk: 29,900 FCFA / month',
    costNum: 49900
  },
  {
    id: 'p6',
    moduleName: 'English Club',
    frenchModuleName: 'Club d\'Anglais',
    schedule: '10:00 - 12:00',
    frenchSchedule: '10h 00 à 12h 00',
    option: 'Every Saturday',
    frenchOption: 'Chaque Samedi',
    cost: 'Free / Gratuit',
    costNum: 0
  },
  {
    id: 'p7',
    moduleName: 'French Classes',
    frenchModuleName: 'Cours de Français',
    schedule: 'Negotiable / Flexible',
    frenchSchedule: 'Négociable / Flexible',
    option: 'Twice per week\nOR Thrice per week',
    frenchOption: '2 fois / semaine\nOU 3 fois / semaine',
    cost: '• Twice: 119,900 FCFA / 3 months\n• Thrice: 149,900 FCFA / 3 months',
    costNum: 119900
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    name: 'M. Kossi A.',
    role: 'Responsable Import-Export',
    company: 'Port Autonome de Lomé',
    quote: 'After twelve weeks of Executive English at TEN KEY, I led my first negotiation with suppliers in Ghana and China without a translator. The sessions are concrete and directly usable.',
    quoteFrench: 'Après douze semaines d\'anglais exécutif à TEN KEY, j\'ai piloté ma première négociation avec des fournisseurs au Ghana et en Chine sans interprète. Les séances sont concrètes et immédiatement utilisables.',
    avatarSeed: 'Kossi',
    rating: 5
  },
  {
    id: 't2',
    name: 'Mme. Améyo K.',
    role: 'Consultante Internationale',
    company: 'Cabinet Afrique Conseils',
    quote: 'I needed a strong TOEFL score for a consulting contract in Canada. TEN KEY prepared me with real exam conditions and I got 102. The mock tests made the difference.',
    quoteFrench: 'J\'avais besoin d\'un bon score au TOEFL pour un contrat de consulting au Canada. TEN KEY m\'a préparée dans les conditions réelles de l\'examen et j\'ai obtenu 102. Les examens blancs ont fait la différence.',
    avatarSeed: 'Ameyo',
    rating: 5
  },
  {
    id: 't3',
    name: 'Dr. Kouamé B.',
    role: 'Cadre en Institution Publique',
    company: 'Cité Administrative, Lomé',
    quote: 'The Saturday English Club helped me handle official correspondence and protocol meetings in English with much more confidence. Highly recommended for any public-sector manager.',
    quoteFrench: 'Le Club d\'anglais du samedi m\'a aidé à gérer la correspondance officielle et les réunions de protocole en anglais avec beaucoup plus d\'assurance. Fortement recommandé pour tout cadre de la fonction publique.',
    avatarSeed: 'Kouame',
    rating: 5
  }
];

export const FAQS = [
  {
    question: 'How do I register for courses at TEN KEY?',
    frenchQuestion: 'Comment s\'inscrire aux cours de TEN KEY ?',
    answer: 'You can call us on +228 91 88 38 67, write via WhatsApp, or visit the center at Avedji/Adidoadin near the LAUS DEO pharmacy. Registration is 10,000 FCFA and includes your level test, learning materials, and an official TEN KEY T-Shirt.',
    frenchAnswer: 'Vous pouvez nous appeler au +228 91 88 38 67, nous écrire sur WhatsApp, ou passer au centre à Avedji/Adidoadin près de la pharmacie LAUS DEO. L\'inscription est de 10 000 FCFA et comprend votre test de niveau, les supports pédagogiques et un T-Shirt officiel TEN KEY.'
  },
  {
    question: 'Where is the center located, and is parking available?',
    frenchQuestion: 'Où est situé le centre et y a-t-il un parking ?',
    answer: 'We are at Avedji/Adidoadin, Carrefour Adroukpape, next to the LAUS DEO pharmacy. Parking space is available nearby and the area is accessible from the city center and the port district.',
    frenchAnswer: 'Nous sommes à Avedji/Adidoadin, Carrefour Adroukpape, juste à côté de la pharmacie LAUS DEO. Un parking est disponible à proximité et le quartier est accessible depuis le centre-ville et le port.'
  },
  {
    question: 'How do classes continue during power cuts?',
    frenchQuestion: 'Comment les cours continuent-ils en cas de coupure EDM ?',
    answer: 'Our classrooms are equipped with a backup generator and solar inverter system. Classes run on schedule even during neighborhood power cuts.',
    frenchAnswer: 'Nos salles sont équipées d\'un groupe électrogène de secours et d\'un onduleur solaire. Les cours se déroulent normalement même en cas de coupure EDM dans le quartier.'
  },
  {
    question: 'What does the registration fee include?',
    frenchQuestion: 'Que comprennent les frais d\'inscription ?',
    answer: 'The 10,000 FCFA registration fee covers a compulsory level test, printed and digital learning materials, and an official TEN KEY T-Shirt. Course fees are listed separately and can be paid in installments.',
    frenchAnswer: 'Les frais d\'inscription de 10 000 FCFA couvrent le test de niveau obligatoire, les supports pédagogiques imprimés et numériques, ainsi qu\'un T-Shirt officiel TEN KEY. Les frais de cours sont indiqués à part et peuvent être payés en plusieurs tranches.'
  },
  {
    question: 'Can I reach you on WhatsApp for quick questions?',
    frenchQuestion: 'Puis-je vous joindre sur WhatsApp pour des questions rapides ?',
    answer: 'Yes. Message us on +228 91 88 38 67. We reply during business hours and can send you the schedule, prices, and registration steps directly in the chat.',
    frenchAnswer: 'Oui. Écrivez-nous au +228 91 88 38 67. Nous répondons pendant les heures de bureau et pouvons vous envoyer directement les horaires, les tarifs et les étapes d\'inscription dans la discussion.'
  },
  {
    question: 'Are there flexible schedule options for workers?',
    frenchQuestion: 'Existe-t-il des horaires adaptés aux professionnels ?',
    answer: 'Yes. Our General & Professional English runs at 12:30-14:00 and 18:30-20:30, Monday to Thursday. VIP classes are arranged around your agenda, including weekends.',
    frenchAnswer: 'Oui. Notre Anglais Général et Professionnel a lieu de 12h 30 à 14h 00 et de 18h 30 à 20h 30, du lundi au jeudi. Les cours VIP s\'organisent selon votre agenda, y compris le week-end.'
  }
];
