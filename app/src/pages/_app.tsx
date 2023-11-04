import '@/modules/common/styles/globals.css'
import type { AppProps } from 'next/app'
import { QueryClient, QueryClientProvider } from 'react-query'
import { I18nextProvider } from 'react-i18next'

import moment from 'moment'
import "moment/locale/cs"
import "moment/locale/en-gb"

import i18n from "@/i18n"
import MainLayout from '@/modules/common/layouts/Main'

const langs: { [key: string]: string } = {
  cs: "cs",
  en: "en-gb"
}

moment.locale(langs[i18n.language])

export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient()

  return (
    <I18nextProvider i18n={i18n}>
      <QueryClientProvider client={queryClient}>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </QueryClientProvider>
    </I18nextProvider>
  )
}
