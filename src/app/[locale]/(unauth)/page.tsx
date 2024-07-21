import AttendanceList from '@/components/Custom/AttendanceList';
import Home from '@/components/Custom/Home';
import Dashboard from '@/components/Dashboard/Dashboar';
import { getTranslations } from 'next-intl/server';
export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'Index',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

export default function Index() {
  return (
    <div>
      <Dashboard/>
      {/* <AttendanceList/> */}
      {/* <Home/> */}
    </div>
  );
}
