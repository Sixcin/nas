import { createI18n } from "vue-i18n";
import ar from "./locales/ar.json";
import en from "./locales/en.json";
import fr from "./locales/fr.json";
import zhCN from "./locales/zh-CN.json";

export const i18n = createI18n({
  fallbackLocale: "en",
  locale: localStorage.getItem("locale") || undefined,
  messages: {
    ar,
    en,
    fr,
    "zh-CN": zhCN,
  },
});
