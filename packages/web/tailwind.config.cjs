const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import("tailwindcss").Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  plugins: [require("@headlessui/tailwindcss")],
  theme: {
    extend: {
      backgroundImage: {
        "decoration-light": "url('/images/other/decoration-light.avif')",
        "decoration-dark": "url('/images/other/decoration-dark.avif')",
      },
      boxShadow: {
        1: [
          "0 1px 2px rgba(0, 0, 0, 0.3)",
          "0 1px 3px 1px rgba(0, 0, 0, 0.15)",
        ],
        2: [
          "0 1px 2px rgba(0, 0, 0, 0.3)",
          "0 2px 3px 1px rgba(0, 0, 0, 0.15)",
        ],
        3: [
          "0 1px 3px rgba(0, 0, 0, 0.3)",
          "0 4px 8px 3px rgba(0, 0, 0, 0.15)",
        ],
        4: [
          "0 2px 3px rgba(0, 0, 0, 0.3)",
          "0 6px 10px 4px rgba(0, 0, 0, 0.15)",
        ],
        5: [
          "0 4px 4px rgba(0, 0, 0, 0.3)",
          "0 8px 12px 6px rgba(0, 0, 0, 0.15)",
        ],
      },
      colors: {
        background: "rgb(var(--md-sys-color-background) / <alpha-value>)",
        error: "rgb(var(--md-sys-color-error) / <alpha-value>)",
        errorContainer:
          "rgb(var(--md-sys-color-error-container) / <alpha-value>)",
        inverseOnSurface:
          "rgb(var(--md-sys-color-inverse-on-surface) / <alpha-value>)",
        inversePrimary:
          "rgb(var(--md-sys-color-inverse-primary) / <alpha-value>)",
        inverseSurface:
          "rgb(var(--md-sys-color-inverse-surface) / <alpha-value>)",
        onBackground: "rgb(var(--md-sys-color-on-background) / <alpha-value>)",
        onError: "rgb(var(--md-sys-color-on-error) / <alpha-value>)",
        onErrorContainer:
          "rgb(var(--md-sys-color-on-error-container) / <alpha-value>)",
        onPrimary: "rgb(var(--md-sys-color-on-primary) / <alpha-value>)",
        onPrimaryContainer:
          "rgb(var(--md-sys-color-on-primary-container) / <alpha-value>)",
        onSecondary: "rgb(var(--md-sys-color-on-secondary) / <alpha-value>)",
        onSecondaryContainer:
          "rgb(var(--md-sys-color-on-secondary-container) / <alpha-value>)",
        onSurface: "rgb(var(--md-sys-color-on-surface) / <alpha-value>)",
        onSurfaceVariant:
          "rgb(var(--md-sys-color-on-surface-variant) / <alpha-value>)",
        onTertiary: "rgb(var(--md-sys-color-on-tertiary) / <alpha-value>)",
        onTertiaryContainer:
          "rgb(var(--md-sys-color-on-tertiary-container) / <alpha-value>)",
        outline: "rgb(var(--md-sys-color-outline) / <alpha-value>)",
        outlineVariant:
          "rgb(var(--md-sys-color-outline-variant) / <alpha-value>)",
        primary: "rgb(var(--md-sys-color-primary) / <alpha-value>)",
        primaryContainer:
          "rgb(var(--md-sys-color-primary-container) / <alpha-value>)",
        scrim: "rgb(var(--md-sys-color-scrim) / <alpha-value>)",
        secondary: "rgb(var(--md-sys-color-secondary) / <alpha-value>)",
        secondaryContainer:
          "rgb(var(--md-sys-color-secondary-container) / <alpha-value>)",
        shadow: "rgb(var(--md-sys-color-shadow) / <alpha-value>)",
        surface: "rgb(var(--md-sys-color-surface) / <alpha-value>)",
        surface1: "rgb(var(--md-sys-color-surface-1) / <alpha-value>)",
        surface2: "rgb(var(--md-sys-color-surface-2) / <alpha-value>)",
        surface3: "rgb(var(--md-sys-color-surface-3) / <alpha-value>)",
        surface4: "rgb(var(--md-sys-color-surface-4) / <alpha-value>)",
        surface5: "rgb(var(--md-sys-color-surface-5) / <alpha-value>)",
        surfaceVariant:
          "rgb(var(--md-sys-color-surface-variant) / <alpha-value>)",
        tertiary: "rgb(var(--md-sys-color-tertiary) / <alpha-value>)",
        tertiaryContainer:
          "rgb(var(--md-sys-color-tertiary-container) / <alpha-value>)",
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          "Roboto",
          "Noto Sans",
          "Segoe UI",
          "Segoe UI Emoji",
          ...defaultTheme.fontFamily.sans,
        ],
        serif: ["Segoe UI Emoji", ...defaultTheme.fontFamily.serif],
        art: ["Nunito", ...defaultTheme.fontFamily.serif],
      },
    },
  },
};
