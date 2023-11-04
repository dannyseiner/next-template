import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import cs from "@/i18n/locales/cs/common";
import en from "@/i18n/locales/en/common";


const availableLanguages = ["cs", "en"];

const detectionOptions = {
  order: ["localStorage", "navigator"],
  caches: ["localStorage"],
  checkWhitelist: true,
};

i18n.use(initReactI18next).init({
  lng: "cs",
  debug: false,
  fallbackLng: "cs",
  supportedLngs: availableLanguages,
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