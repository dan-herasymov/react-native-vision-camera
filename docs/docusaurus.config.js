module.exports = {
  title: 'VisionCamera',
  tagline: '📸 The Camera library that sees the vision.',
  url: 'https://cuvent.github.io',
  baseUrl: '/react-native-vision-camera/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: './favicon.ico',
  organizationName: 'cuvent',
  projectName: 'react-native-vision-camera',
  themeConfig: {
    navbar: {
      title: 'VisionCamera',
      logo: {
        alt: 'Logo',
        src: './img/11.png',
      },
      items: [
        {
          label: 'Guides',
          to: 'docs/',
          position: 'left',
        },
        {
          to: 'docs/api',
          label: 'API',
          position: 'left'
        },
        {
          href: 'https://github.com/cuvent/react-native-vision-camera/tree/main/example',
          label: 'Example App',
          position: 'left'
        },
        {
          href: 'https://github.com/cuvent/react-native-vision-camera',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Guides',
              to: 'docs/'
            },
            {
              label: 'API',
              to: 'docs/api',
            },
            {
              label: 'Example App',
              href: 'https://github.com/cuvent/react-native-vision-camera/tree/main/example',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub discussions',
              href: 'https://github.com/cuvent/react-native-vision-camera/discussions',
            },
            {
              label: 'Twitter (@mrousavy)',
              href: 'https://twitter.com/mrousavy',
            },
            {
              label: 'Twitter (@CuventTech)',
              href: 'https://twitter.com/CuventTech',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/cuvent/react-native-vision-camera',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Cuvent`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/cuvent/react-native-vision-camera/edit/main/docs/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      'docusaurus-plugin-typedoc',
      {
        entryPoints: ['../src'],
        exclude: "../src/index.ts",
        tsconfig: '../tsconfig.docs.json',
        readme: "none",
        sidebar: {
          sidebarFile: 'typedoc-sidebar.js',
          fullNames: false,
          indexLabel: 'Overview'
        }
      },
    ],
  ],
};