import { useEffect, useState } from "react"
import { Inter } from 'next/font/google'
import { useTranslation } from 'react-i18next'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const { t } = useTranslation()

  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      eteasasd da sd
      {t("test")}
    </main>
  )
}
