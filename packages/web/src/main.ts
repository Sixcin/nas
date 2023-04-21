import { createApp } from "vue";
import { createPinia } from "pinia";
import router from "./router";
import "normalize.css";
import "./style/vars.css";
import "./style/fonts.css";
import "./style/more.css";
import "./style.css";
import App from "./App.vue";
import { i18n } from "./i18n";

createApp(App).use(i18n).use(router).use(createPinia()).mount("#app");
