import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import RNLanguageDetector from '@os-team/i18next-react-native-language-detector';
import en from './src/locales/en.json';
import es from './src/locales/es.json';

i18n
  .use(initReactI18next)
  .use(RNLanguageDetector)
  .init({
    resources: {
      en,
      es,
    },
    fallbackLng: 'en',
    compatibilityJSON: 'v3',
    interpolation: {
      escapeValue: false, // react already safes from xss
    },
  });

export default i18n;
