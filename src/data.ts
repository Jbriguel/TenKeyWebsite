import { TrainingModule, PricingPlan, Testimonial } from './types';

export const TRAINING_MODULES: TrainingModule[] = [
  {
    id: 'general-professional',
    title: 'General & Professional English',
    frenchTitle: 'Anglais Général & Professionnel',
    description: 'Elevate your English to the level of your professional skills. Perfect for managers, executives, and modern professionals.',
    frenchDescription: 'Élevez votre anglais au niveau de vos compétences professionnelles. Idéal pour les cadres, managers et professionnels.',
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
    description: 'Prepares you for university studies, academic research, and international professional training programs.',
    frenchDescription: 'Préparez vos études universitaires, recherches académiques et formations professionnelles internationales.',
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
    description: 'Master international exams (TOEFL, IELTS, DUOLINGO, TOEIC) to secure your best score and open global doors.',
    frenchDescription: 'Maîtrisez les examens internationaux (TOEFL, IELTS, DUOLINGO, TOEIC) pour obtenir vos meilleurs scores.',
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
    description: 'Personalized 1-on-1 English classes. One premium trainer dedicated fully to your unique learning speed and schedule.',
    frenchDescription: 'Cours d\'anglais personnalisés en tête-à-tête. Un formateur dédié entièrement à votre rythme et vos objectifs.',
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
    description: 'Translate your official and personal documents. High-quality professional interpretation services for meetings.',
    frenchDescription: 'Traduisez vos documents officiels ou personnels. Services d\'interprétation haut de gamme pour vos événements.',
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
    description: 'Accelerated and flexible French learning programs for non-francophones living or working in Togo.',
    frenchDescription: 'Programmes de français accélérés et flexibles pour non-francophones vivant ou travaillant au Togo.',
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
    name: 'Koffi Mawulikplimi',
    role: 'Import-Export Officer',
    company: 'Port Autonome de Lomé',
    quote: 'Thanks to the VIP English sessions at TEN KEY, I was able to negotiate directly with partners in China and Ghana. The practical pedagogy is exactly what I needed.',
    quoteFrench: 'Grâce aux sessions d\'anglais VIP chez TEN KEY, j\'ai pu négocier directement avec des partenaires en Chine et au Ghana. La pédagogie pratique est exactement ce dont j\'avais besoin.',
    avatarSeed: 'Koffi',
    rating: 5
  },
  {
    id: 't2',
    name: 'Abla Jessica',
    role: 'Graduate Student',
    company: 'University of Lomé',
    quote: 'Preparing for the TOEFL at TEN KEY was the turning point in my academic career. I scored 105 and secured a scholarship for my Masters in the UK. Highly recommended!',
    quoteFrench: 'La préparation du TOEFL à TEN KEY a été le tournant de ma carrière académique. J\'ai obtenu un score de 105 et décroché une bourse pour mon Master au Royaume-Uni. Je recommande vivement !',
    avatarSeed: 'Jessica',
    rating: 5
  },
  {
    id: 't3',
    name: 'Emmanuel Johnson',
    role: 'Software Engineer',
    company: 'Fintech Togo',
    quote: 'The Saturday English Club is simply awesome. It gave me the daily courage and vocabulary flow to shine during my technical interviews with pan-African tech firms.',
    quoteFrench: 'Le Club d\'anglais du samedi est tout simplement génial. Cela m\'a donné l\'assurance et la fluidité nécessaires pour briller lors de mes entretiens techniques avec des entreprises panafricaines.',
    avatarSeed: 'Emmanuel',
    rating: 5
  }
];

export const FAQS = [
  {
    question: 'How do I register for courses at TEN KEY?',
    frenchQuestion: 'Comment s\'inscrire aux cours de TEN KEY ?',
    answer: 'You can start by filling the contact form above, call our office, or visit our physical center at Avedji/Adidoadin near the LAUS DEO pharmacy. Registration requires a 10,000 FCFA fee which covers your Level Test, didactic materials, and an official center T-Shirt.',
    frenchAnswer: 'Vous pouvez commencer par remplir le formulaire d\'inscription ci-dessus, nous appeler, ou visiter notre centre à Avedji/Adidoadin près de la pharmacie LAUS DEO. L\'inscription coûte 10 000 FCFA et comprend votre Test de Niveau, les supports didactiques et un T-Shirt officiel.'
  },
  {
    question: 'Where is the center located in Lomé?',
    frenchQuestion: 'Où est situé le centre à Lomé ?',
    answer: 'We are located at Avedji/Adidoadin, Carrefour Adroukpape, right next to the LAUS DEO pharmacy in Lomé, Togo.',
    frenchAnswer: 'Nous sommes situés à Avedji/Adidoadin, Carrefour Adroukpape, juste à côté de la pharmacie LAUS DEO à Lomé, Togo.'
  },
  {
    question: 'What does the registration fee include?',
    frenchQuestion: 'Que comprennent les frais d\'inscription ?',
    answer: 'The registration fee is 10,000 FCFA. It includes a compulsory level test to assign you to the correct class level, custom-made printed and digital learning materials, and an official TEN KEY T-Shirt.',
    frenchAnswer: 'Les frais d\'inscription s\'élèvent à 10 000 FCFA. Ils comprennent un test de niveau obligatoire pour vous orienter, les supports d\'apprentissage imprimés et numériques personnalisés, ainsi qu\'un T-Shirt officiel TEN KEY.'
  },
  {
    question: 'Are there flexible schedule options for workers?',
    frenchQuestion: 'Existe-t-il des horaires flexibles pour les professionnels ?',
    answer: 'Yes! Our General and Professional English program has flexible hours: Midday sessions from 12:30 to 14:00, and evening sessions from 18:30 to 20:30. VIP classes offer total flexibility based on your customized program and availability.',
    frenchAnswer: 'Oui ! Notre programme d\'Anglais Général et Professionnel propose des horaires adaptés : la pause déjeuner de 12h 30 à 14h 00 ou le soir de 18h 30 à 20h 30. Les cours VIP offrent quant à eux une flexibilité totale.'
  }
];
