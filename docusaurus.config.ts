import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Redocs',
  tagline: 'The Community-Driven Hub for All Things Inventor',
  favicon: 'https://assets.redux.wtf/redocs/redocs.svg',
  

  // Set the production url of your site here
  url: 'https://redocs.xyz',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',


  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: '/',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/Inventor-Redux/Redocs/tree/main/',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          sidebarCollapsible: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {},
      } satisfies Preset.Options,
    ],
  ],
  
  themeConfig: {
    metadata:[{name:"twitter:card", "content": "summary"}],
    image: "https://assets.redux.wtf/redocs/redocs.png",
    docs:{
      sidebar:{
        hideable: true,
        autoCollapseCategories: true,
      }
    },
    // Replace with your project's social card
    colorMode: {
      defaultMode: "dark",

      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    navbar: {
      title: 'Redocs',
      logo: {
        alt: 'Redocs Logo White',
        src: 'https://assets.redux.wtf/redocs/redocslight.png',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          label: 'Documentation',
          docId: "inventor-reference/index"
        },
        {
          position: 'left',
          label: 'Tools',
          href: "/tools"
        },
        {
          href: 'https://github.com/Inventor-Redux/Redocs',
          label: 'GitHub',
          position: 'right',
        },
        {
          href: 'https://inventor.gg',
          label: 'Inventor',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Blocks',
              to: '/inventor-reference/blocks/',
            },{
              label: 'Triggers',
              to: '/inventor-reference/triggers/',
            },{
              label: 'Types',
              to: '/inventor-reference/types/',
            },
          ],
        },
        {
          title: 'Social',
          items: [
            {
              label: 'Discord',
              href: 'https://redux.wtf/join',
            },
            {
              label: 'Twitter',
              href: 'https://x.com/_itsastro_',
            },
            {
              label: 'Mastodon',
              href: 'https://mastodon.social/@its_astro',
            },
          ],
        },
        {
          title: 'Legal',
          items: [
            {
              label: 'Privacy Policy',
              to: 'legal/privacy'
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Inventor Redux`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
  plugins: [
    [
    "posthog-docusaurus",
      {
        apiKey: "phc_amrHDZ4ACBgPeo5gamWNGRuq9ZIExybkyxH5W7C72G6",
        appUrl: "https://eu.i.posthog.com", // optional, defaults to "https://us.i.posthog.com"
        enableInDevelopment: false, // optional,
        persistence: 'memory'
      },
    ],
    [
      require.resolve("@cmfcmf/docusaurus-search-local"),
      {
        indexPages: true
      },
    ],
    async function myPlugin(context, options) {
      return {
        name: "docusaurus-tailwindcss",
        configurePostCss(postcssOptions) {
          // Appends TailwindCSS and AutoPrefixer.
          postcssOptions.plugins.push(require("tailwindcss"));
          postcssOptions.plugins.push(require("autoprefixer"));
          return postcssOptions;
        },
      };
    },
  ]
};

export default config;
