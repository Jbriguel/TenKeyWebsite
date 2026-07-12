import StudentPortal from '../components/StudentPortal';

interface StudentSpacePageProps {
  lang: 'en' | 'fr';
  onStudentPortalRedirect: (levelCode: string) => void;
}

export default function StudentSpacePage({ lang, onStudentPortalRedirect }: StudentSpacePageProps) {
  return (
    <StudentPortal
      lang={lang}
      onRegisterRedirect={onStudentPortalRedirect}
    />
  );
}
