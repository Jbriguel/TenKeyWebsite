import HelpCenter from '../components/HelpCenter';

interface StudentSpacePageProps {
  lang: 'en' | 'fr';
  onStudentPortalRedirect: () => void;
}

export default function StudentSpacePage({ lang, onStudentPortalRedirect }: StudentSpacePageProps) {
  return (
    <HelpCenter
      lang={lang}
      onContact={onStudentPortalRedirect}
    />
  );
}
