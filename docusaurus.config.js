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
          editUrl: "https://github.com/AnyStackIo/reference-architecture/tree/main/",
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
        { href: "https://github.com/AnyStackIo/reference-architecture", label: "Repo", position: "right" },
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
