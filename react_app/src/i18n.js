import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Pro tip: Move them into their own JSON files
const resources = {
  en: {
    translation: {
      "welcome_message": "Hello and Welcome to React"
    }
  },
  fr: {
    translation: {
      "welcome_message": "Bonjour et bienvenue à React"
    }
  }
};

i18n
  .use(initReactI18next) // Connect react-i18next to React
  .init({
    resources,
    lng: "en", // default language
    interpolation: {
      escapeValue: false // react already safes from xss
    }
  });

  export default i18n;