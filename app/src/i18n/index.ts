import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import cs from '@/i18n/locales/cs/common';
import en from '@/i18n/locales/en/common';
import moment from 'moment';

export const availableLanguages: { [key: string]: string } = {
  cs: 'cs',
  en: 'en-US',
};

const detectionOptions = {
  order: ['localStorage', 'navigator'],
  caches: ['localStorage'],
  checkWhitelist: true,
};

export const changeLanguage = (lng: 'cs' | 'en') => {
  i18n.changeLanguage(lng);
  moment.locale(availableLanguages[lng]);
};

i18n.use(initReactI18next).init({
  lng: 'cs',
  debug: false,
  fallbackLng: 'cs',
  supportedLngs: Object(availableLanguages).keys,
  interpolation: {
    escapeValue: false,
  },
  detection: detectionOptions,
  resources: {
    cs: {
      translation: cs,
    },
    en: {
      translation: en,
    },
  },
});

export default i18n;
