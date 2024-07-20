import AttendanceList from '@/components/Custom/AttendanceList';
import SearchInput from '@/components/Custom/SearchInput';
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
      {/* <p>Hello Safdar</p>
      <SearchInput/> */}
      <AttendanceList/>
    </div>
  );
}
