import { useFetchPerson } from '@/api/queries/usePeople';
import useStorage from '@/modules/common/hooks/useStorage';
import moment from 'moment';
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { changeLanguage } from '@/i18n';

export default function Home() {
  const { t, i18n } = useTranslation();
  const { data } = useFetchPerson('1');
  const [, setCache] = useStorage('storage-key');

  useEffect(() => {
    if (data) {
      setCache(data);
    }
  }, [data, setCache]);

  const changeLang = () => {
    if (i18n.language === 'cs') {
      changeLanguage('en');
    } else {
      changeLanguage('cs');
    }
  };

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      eteasasd da sd
      <p>{moment().fromNow()}</p>
      {t('test')}
      <button onClick={() => changeLang()}>change lang</button>
    </main>
  );
}
