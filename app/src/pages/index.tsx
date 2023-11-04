import moment from 'moment'
import { useTranslation } from 'react-i18next'


export default function Home() {
  const { t } = useTranslation()

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      eteasasd da sd
      <p>{moment().fromNow()}</p>
      {t("test")}
    </main>
  )
}
