import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import translationEN from './locales/en/translation.json';
import translationES from './locales/es/translation.json';
import LanguageDetector from 'i18next-browser-languagedetector'

i18n.use(initReactI18next)
  .use(LanguageDetector)
  .init({
  fallbackLng: 'en',
  debug: true,
  interpolation: {
    escapeValue: false,
  },
  resources: {
    en: {
      translation: translationEN,
    },
    es: {
      translation: translationES,
    },
  },
  react: {
    wait: true,
  },
  detection: {
    order: ['navigator', 'querystring', 'cookie', 'localStorage', 'htmlTag', 'path', 'subdomain'],
    caches: ["localStorage"]
  },
  keySeparator: '-',
});

export default i18n;