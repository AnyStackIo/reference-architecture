// @ts-check
import {themes as prismThemes} from "prism-react-renderer";

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "AnyStack Reference Architecture",
  tagline: "Internal architecture references",
  favicon: "img/favicon.ico",

  // GitHub Pages custom domain:
  // https://architecture.any-stack.com/
  url: "https://architecture.any-stack.com",
  baseUrl: "/",

  organizationName: "AnyStackIo",
  projectName: "reference-architecture",

  onBrokenLinks: "throw",

  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  markdown: {
    mermaid: true,
    hooks: {
      onBrokenMarkdownLinks: "warn",
    },
  },

  themes: ["@docusaurus/theme-mermaid"],

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.js",
          routeBasePath: "/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: "AnyStack",
      items: [
        { type: "doc", docId: "index", label: "AWS Reference Architecture", position: "left" },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} AnyStack.`,
    },
    prism: {
      theme: prismThemes.oneLight,
      darkTheme: prismThemes.nightOwl,
    },
  },
};

export default config;
