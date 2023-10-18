import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './locales/en.json';
import { LocalesVariantsENUM } from './models';

const resources = {
  en: {
    translation: en,
  },
};

i18n.use(initReactI18next).init({
  lng: LocalesVariantsENUM.En,
  resources,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
