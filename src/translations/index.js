import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationEn from "./locales/en.json";

const LOCALE_ENG = "en";

export const LOCALES = [LOCALE_ENG];
export const DEFAULT_LOCALE = LOCALE_ENG;

const resources = {
  en: {
    translation: translationEn,
  },
};

i18n.use(initReactI18next).init({
  lng: DEFAULT_LOCALE,
  fallbackLng: "en",
  debug: true,

  interpolation: {
    escapeValue: false,
  },
  resources,
});

export const $t = (key, params = {}) => {
  return i18n.t(key, params);
};

export default i18n;
