import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import ru from "./assets/locales/ru.json"
import en from "./assets/locales/en.json"
i18n
    .use(initReactI18next)
    .init({
        lng: "ru",
        supportedLngs: ["en", "ru"],
        interpolation: {
            escapeValue: false
        },
        resources: {
            ru: {
              translation: ru,
            },
            en:{
              translation: en,
            },
        },
    });

export default i18n;