// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "We are Democratizing Privacy Technology",
  tagline:
    "Join the movement towards making privacy technology accessible to everyone",
  url: "https://openprivacytech.org",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "OpenPrivacyTech", // Usually your GitHub org/user name.
  projectName: "openprivacytech", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "contents/docs",
          sidebarPath: require.resolve("./sidebars/docs.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/openprivacytech/openprivacytech.org/blob/main",
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/openprivacytech/openprivacytech.org/blob/main",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  plugins: [
    [
      "@docusaurus/plugin-content-docs",
      {
        id: "resources",
        path: "contents/resources",
        routeBasePath: "resources",
        sidebarPath: require.resolve("./sidebars/resources.js"),
        editUrl:
          "https://github.com/openprivacytech/openprivacytech.org/blob/main",
        editLocalizedFiles: true,
        showLastUpdateTime: true,
        showLastUpdateAuthor: true,
      },
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "OpenPrivacyTech",
                logo: {
                  alt: 'OpenPrivacyTech Logo',
                  src: 'img/logo.png',
               },
        items: [
          {
            type: "doc",
            docId: "intro",
            position: "right",
            label: "Docs",
          },
          { to: "/blog", label: "Blog", position: "right" },
          { to: "/resources", label: "Resources", position: "right" },
          { to: "/jobs", label: "Job Board", position: "right" },
          {
            href: "https://github.com/openprivacytech",
            position: "right",
            className: "header-github-link",
            "aria-label": "GitHub repository",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Docs",
                to: "/docs",
              },
              {
                label: "Resources",
                to: "/resources",
              },
            ],
          },
          {
            title: "Community",
            items: [
              {
                label: "Code of Conduct",
                href: "/code-of-conduct",
              },
              {
                label: "Twitter",
                href: "https://twitter.com/openprivacytech",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/openprivacytech",
              },
              {
                label: "Slack",
                href: "https://slack.openprivacytech.org",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Blog",
                to: "/blog",
              },
              {
                label: "GitHub",
                href: "https://github.com/openprivacytech",
              },
              {
                label: "Donate",
                href: "https://opencollective.com/openprivacytech",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} OpenPrivacyTech.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      announcementBar: {
        content:
          'We are updating the website, please open an issue if you want to contribute and don\'t forget to star the repo on <a target="_blank" rel="noopener noreferrer" href="https://github.com/openprivacytech/openprivacytech.org">GitHub</a>',
        backgroundColor: "rgba(241, 81, 81, 0.89)",
        textColor: "#FFFFFF",
        isCloseable: false,
      },
    }),
};

module.exports = config;
