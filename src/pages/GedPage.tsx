import { useOutletContext } from 'react-router-dom';
import type { AppContextValue } from '../App';
import GedPrepPage from '../components/GedPrepPage';
import RegistrationForm from '../components/RegistrationForm';
import { GedFlashCTA } from '../components/CoolCTAs';

export default function GedPage() {
  const { lang, onRegisterRedirect } = useOutletContext<AppContextValue>();
  return (
    <>
      <GedPrepPage
        lang={lang}
        onGetStarted={() => onRegisterRedirect('GED Prep - Examen Officiel')}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <GedFlashCTA lang={lang} onAction={(actName) => onRegisterRedirect(actName || 'GED Prep - Examen Officiel')} />
      </div>

      {/* <div id="contact-form-section">
        <RegistrationForm
          lang={lang}
          selectedModuleName={selectedModuleName || 'GED Prep - Examen Officiel'}
          setSelectedModuleName={setSelectedModuleName}
        />
      </div> */}
    </>
  );
}
