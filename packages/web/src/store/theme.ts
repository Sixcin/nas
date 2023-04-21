import { defineStore } from "pinia";
import { computed, reactive, ref } from "vue";
import m3CssColor, { CssScheme } from "../utils/m3-css-color";

export const useThemeStore = defineStore("theme", () => {
  let color = localStorage.getItem("theme-color");
  let dark = localStorage.getItem("theme-dark");

  if (color === null) {
    color = "#4285f4";
  }

  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const cssSchemes = reactive(m3CssColor(color));
  const system = ref(!Boolean(dark));
  const darkMode = system.value ? ref(media.matches) : ref(dark === "1");
  const isDarkMode = computed(() => darkMode.value);
  const cssStyle = computed(() => {
    let twScheme: CssScheme;

    if (darkMode.value) {
      twScheme = cssSchemes.darkTwScheme;
    } else {
      twScheme = cssSchemes.lightTwScheme;
    }

    return `--md-sys-color-primary: ${twScheme.primary};
--md-sys-color-on-primary: ${twScheme.onPrimary};
--md-sys-color-primary-container: ${twScheme.primaryContainer};
--md-sys-color-on-primary-container: ${twScheme.onPrimaryContainer};
--md-sys-color-secondary: ${twScheme.secondary};
--md-sys-color-on-secondary: ${twScheme.onSecondary};
--md-sys-color-secondary-container: ${twScheme.secondaryContainer};
--md-sys-color-on-secondary-container: ${twScheme.onSecondaryContainer};
--md-sys-color-tertiary: ${twScheme.tertiary};
--md-sys-color-on-tertiary: ${twScheme.onTertiary};
--md-sys-color-tertiary-container: ${twScheme.tertiaryContainer};
--md-sys-color-on-tertiary-container: ${twScheme.onTertiaryContainer};
--md-sys-color-error: ${twScheme.error};
--md-sys-color-on-error: ${twScheme.onError};
--md-sys-color-error-container: ${twScheme.errorContainer};
--md-sys-color-on-error-container: ${twScheme.onErrorContainer};
--md-sys-color-background: ${twScheme.background};
--md-sys-color-on-background: ${twScheme.onBackground};
--md-sys-color-surface: ${twScheme.surface};
--md-sys-color-surface-1: ${twScheme.surface1};
--md-sys-color-surface-2: ${twScheme.surface2};
--md-sys-color-surface-3: ${twScheme.surface3};
--md-sys-color-surface-4: ${twScheme.surface4};
--md-sys-color-surface-5: ${twScheme.surface5};
--md-sys-color-on-surface: ${twScheme.onSurface};
--md-sys-color-surface-variant: ${twScheme.surfaceVariant};
--md-sys-color-on-surface-variant: ${twScheme.onSurfaceVariant};
--md-sys-color-outline: ${twScheme.outline};
--md-sys-color-outline-variant: ${twScheme.outlineVariant};
--md-sys-color-shadow: ${twScheme.shadow};
--md-sys-color-shadow-scrim: ${twScheme.scrim};
--md-sys-color-inverse-surface: ${twScheme.inverseSurface};
--md-sys-color-inverse-on-surface: ${twScheme.inverseOnSurface};
--md-sys-color-inverse-primary: ${twScheme.inversePrimary};`;
  });

  function applyStyle() {
    document.body.setAttribute("style", cssStyle.value);
  }

  function removeStyle() {
    document.body.removeAttribute("style");
  }

  function changeToDark() {
    system.value = false;
    darkMode.value = true;

    applyStyle();
    localStorage.setItem("theme-dark", "1");
  }

  function changeToLight() {
    system.value = false;
    darkMode.value = false;

    applyStyle();
    localStorage.setItem("theme-dark", "0");
  }

  function changeToSystem() {
    system.value = true;
    darkMode.value = media.matches;

    applyStyle();
    localStorage.removeItem("theme-dark");
  }

  function changeColor(color: string) {
    const schemes = m3CssColor(color);
    cssSchemes.lightTwScheme = schemes.lightTwScheme;
    cssSchemes.darkTwScheme = schemes.darkTwScheme;

    applyStyle();
  }

  function updateTheme() {
    if (system.value) {
      darkMode.value = media.matches;
    }
  }

  media.addEventListener("change", () => {
    updateTheme();
    applyStyle();
  });

  return {
    applyStyle,
    changeColor,
    changeToDark,
    changeToLight,
    changeToSystem,
    isDarkMode,
    removeStyle,
  };
});
