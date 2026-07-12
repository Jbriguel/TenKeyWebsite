import PricingTable from '../components/PricingTable';
import RegistrationForm from '../components/RegistrationForm';
import { BentoLevelTesterCTA } from '../components/CoolCTAs';

interface PricingPageProps {
  lang: 'en' | 'fr';
  onRegisterRedirect: (moduleName?: string) => void;
  selectedModuleName: string;
  setSelectedModuleName: (name: string) => void;
}

export default function PricingPage({
  lang,
  onRegisterRedirect,
  selectedModuleName,
  setSelectedModuleName,
}: PricingPageProps) {
  return (
    <>
      <PricingTable
        lang={lang}
        onSelectPlan={(name) => onRegisterRedirect(name)}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <BentoLevelTesterCTA lang={lang} onAction={onRegisterRedirect} />
      </div>

      <div id="contact-form-section">
        <RegistrationForm
          lang={lang}
          selectedModuleName={selectedModuleName}
          setSelectedModuleName={setSelectedModuleName}
        />
      </div>
    </>
  );
}
