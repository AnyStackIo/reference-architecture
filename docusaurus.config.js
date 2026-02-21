// @ts-check
import {themes as prismThemes} from "prism-react-renderer";

/** @type {import("@docusaurus/types").Config} */
const config = {
  title: "AnyStack Diagram Library",
  tagline: "Internal architecture references",
  favicon: "img/favicon.ico",

  // GitHub Pages project site:
  // https://anystackio.github.io/diagram-library/
  url: "https://anystackio.github.io",
  baseUrl: "/diagram-library/",

  organizationName: "AnyStackIo",
  projectName: "diagram-library",

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
          editUrl: "https://github.com/AnyStackIo/diagram-library/tree/main/",
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      },
    ],
  ],

  themeConfig: {
    navbar: {
      title: "AnyStack",
      items: [
        { type: "doc", docId: "index", label: "Diagrams", position: "left" },
        { href: "https://github.com/AnyStackIo/diagram-library", label: "Repo", position: "right" },
      ],
    },
    footer: {
      style: "dark",
      copyright: `Copyright © ${new Date().getFullYear()} AnyStack.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  },
};

export default config;
