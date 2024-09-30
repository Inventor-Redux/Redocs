import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'Redocs',
  tagline: 'The Community-Driven Hub for All Things Inventor',
  favicon: 'img/Redocs Logo.svg',
  

  // Set the production url of your site here
  url: 'https://docs.redux.wtf',
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
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
        sitemap: {},
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: "@site/static/img/Redocs Logo.svg",
    docs:{
      sidebar:{
        hideable: true
      }
    },
    // Replace with your project's social card
    metadata:[
      {name: "og:site_name", content:"Inventor Redux"}
    ],
    colorMode: {
      defaultMode: "dark",
      disableSwitch: true,
      respectPrefersColorScheme: false
    },
    navbar: {
      title: 'Redocs',
      logo: {
        alt: 'Redocs Logo White',
        src: 'img/Redocs_Logo_White.png',
      },
      items: [
        {
          type: 'doc',
          position: 'left',
          label: 'Inventor Reference',
          docId: "inventor-reference/index"
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
              to: '/docs/inventor-reference/blocks/',
            },{
              label: 'Triggers',
              to: '/docs/inventor-reference/triggers/',
            },{
              label: 'Types',
              to: '/docs/inventor-reference/types/',
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
          title: 'More',
          items: [
            {
              label: 'Inventor',
              href: "https://inventor.gg"
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
  themes: [
    require.resolve("@easyops-cn/docusaurus-search-local"),
  ]
};

export default config;
