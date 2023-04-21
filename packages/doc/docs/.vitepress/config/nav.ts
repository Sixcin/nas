import { DefaultTheme } from "vitepress";

const navConfig: DefaultTheme.NavItem[] = [
  {
    text: "🧭 Documentation",
    items: [{ text: "📚 Introduction", link: "/doc/" }],
  },
  {
    text: "📚 API Reference",
    items: [{ text: "🔌 API", link: "/api/" }],
  },
  {
    text: "📜 Appendix",
    items: [
      { text: "📃 License", link: "/appendix/license" },
      { text: "📜 GDPR Policy", link: "/appendix/gdpr" },
    ],
  },
];

export default navConfig;
