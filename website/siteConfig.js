/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

// See https://docusaurus.io/docs/site-config for all the possible
// site configuration options.
const baseUrl = '/';

const siteConfig = {
  title: 'Haptik Docs',
  tagline: 'Haptik documentation in one place',
  url: 'https://docs.haptik.ai',
  baseUrl: baseUrl,
  projectName: 'docs_haptik',
  organizationName: 'hellohaptik',

  headerLinks: [
    // {
    //   page: '#getting-started',
    //   label: 'Getting Started'
    // },
    { search: true },
    {
      page: '#tools',
      label: 'Tools',
    },
    {
      page: '#integrations',
      label: 'Integrations',
    },
  ],

  headerIcon: 'img/image_0.png',
  footerIcon: 'img/image_0.png',
  favicon: 'img/image_0.png',

  colors: {
    primaryColor: '#333',
    secondaryColor: '#FFF',
  },

  copyright: `Copyright © ${new Date().getFullYear()} Haptik Inc.`,

  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks.
    theme: 'default',
  },

  algolia: {
    apiKey: '224c7079e67e84a978d8b4621f6af16d',
    indexName: 'haptik',
    algoliaOptions: {},
  },

  // Add custom scripts here that would be placed in <script> tags.
  scripts: ['https://buttons.github.io/buttons.js'],

  //Add custom css files that are not to be concatenated to main.css
  separateCss: ['css/sidebar.css'],
  // On page navigation for the current documentation page.
  onPageNav: 'separate',
  // No .html extensions for paths.
  cleanUrl: true,

  // Open Graph and Twitter card images.
  ogImage: 'img/image_0.png',
  twitterImage: 'img/image_0.png',

  // Show documentation's last contributor's name.
  // enableUpdateBy: true,

  // Show documentation's last update time.
  enableUpdateTime: true,
  docsUrl: '',
  scripts: [`${baseUrl}js/index.js`],

  fonts: {
    myFont: ['Roboto', 'sans-serif'],
    myOtherFont: ['Roboto', 'sans-serif'],
  },

  gaTrackingId: 'UA-106563119-6',
  cname: 'docs.haptik.ai',
};

module.exports = siteConfig;
