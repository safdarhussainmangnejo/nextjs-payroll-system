import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";
import page from "../../page";

export async function generateMetadata(props: { params: { locale: string } }) {
  const t = await getTranslations({
    locale: props.params.locale,
    namespace: 'BonusMentor',
  });

  return {
    title: t('meta_title'),
    description: t('meta_description'),
  };
}

const BonusMentor = () => {
  const t = useTranslations('BonusMentor');
  return (
    <div>
      <h1>A page for mentor bonus</h1>
    </div>
  );
}
export default BonusMentor;