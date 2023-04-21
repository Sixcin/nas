import { HeadConfig } from "vitepress";
import { KEYWORDS, META_TITLE } from "./info";

const script: HeadConfig[] = [];
const meta: HeadConfig[] = [
  [
    "meta",
    {
      name: "title",
      content: META_TITLE,
    },
  ],
  [
    "meta",
    {
      name: "keywords",
      href: KEYWORDS,
    },
  ],
];
const facebook: HeadConfig[] = [];
const twitter: HeadConfig[] = [];
const headConfig: HeadConfig[] = [...script, ...meta, ...facebook, ...twitter];

export default headConfig;
