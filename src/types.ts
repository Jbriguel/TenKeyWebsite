export interface TrainingModule {
  id: string;
  title: string;
  frenchTitle?: string;
  description: string;
  frenchDescription?: string;
  iconName: string; // Used to determine which Lucide icon to render
  features: string[];
  featuresFrench?: string[];
  isHighlighted?: boolean;
}

export interface PricingPlan {
  id: string;
  moduleName: string;
  frenchModuleName: string;
  schedule: string;
  frenchSchedule: string;
  option: string;
  frenchOption: string;
  cost: string;
  costNum: number; // for sorting / filtering if needed
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  quote: string;
  quoteFrench: string;
  avatarSeed: string;
  rating: number;
}

export interface RegistrationSubmission {
  id: string;
  name: string;
  email: string;
  phone: string;
  selectedModule: string;
  message?: string;
  createdAt: string;
  status: 'pending' | 'contacted' | 'registered';
}
