import { createHashRouter, Navigate, Outlet } from 'react-router-dom';
import App from './App';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import GedPage from './pages/GedPage';
import PricingPage from './pages/PricingPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';

export const ROUTES = {
  home: '/',
  services: '/services',
  gedPrep: '/ged-prep',
  pricing: '/pricing',
  about: '/about',
  contact: '/contact',
  terms: '/terms',
  privacy: '/privacy',
} as const;

export const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: ROUTES.services, element: <ServicesPage /> },
      { path: ROUTES.gedPrep, element: <GedPage /> },
      { path: ROUTES.pricing, element: <PricingPage /> },
      { path: ROUTES.about, element: <AboutPage /> },
      { path: ROUTES.contact, element: <ContactPage /> },
      { path: ROUTES.terms, element: <TermsPage /> },
      { path: ROUTES.privacy, element: <PrivacyPage /> },
      { path: '*', element: <Navigate to="/" replace /> },
    ],
  },
]);
