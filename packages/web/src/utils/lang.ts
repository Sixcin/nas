export function applyLang(locale: string) {
  document.documentElement.setAttribute("lang", locale);
}

export function removeLang() {
  document.documentElement.removeAttribute("lang");
}
