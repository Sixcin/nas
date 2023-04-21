import { defineConfig } from "vitepress";
import themeConfig from "./theme";
import head from "./head";
import {
  BASE as base,
  DESCRIPTION as description,
  LANG as lang,
  TITLE as title,
} from "./info";

// noinspection JSUnusedGlobalSymbols
export default defineConfig({
  base,
  description,
  head,
  ignoreDeadLinks: false,
  lang,
  lastUpdated: true,
  markdown: {
    lineNumbers: true,
  },
  themeConfig,
  title,
});
