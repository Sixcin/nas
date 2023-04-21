import type { DefaultTheme } from "vitepress";
import nav from "./nav";
import sidebar from "./sidebar";
import { LOGO as logo, REPO } from "./info";

const themeConfig: DefaultTheme.Config = {
  editLink: {
    pattern: `${REPO}/edit/main/packages/doc/docs/:path`,
  },
  footer: {
    message:
      'Code licensed under GPL-3.0, documentation under <a href="https://creativecommons.org/licenses/by-sa/4.0/deed.zh" class="grabient-text">CC BY-SA 4.0</a>.',
    copyright: `Made with ❤️️ love by <span class="grabient-text">icekylin</span>.`,
  },
  logo,
  nav,
  sidebar,
  siteTitle: false,
  socialLinks: [{ icon: "github", link: REPO }],
};

export default themeConfig;
