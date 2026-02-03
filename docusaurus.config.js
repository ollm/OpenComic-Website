// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
	title: 'OpenComic',
	tagline: 'Comic and manga reader',
	favicon: 'img/favicon.ico',

	// Set the production url of your site here
	url: 'https://opencomic.app',
	// Set the /<baseUrl>/ pathname under which your site is served
	// For GitHub pages deployment, it is often '/<projectName>/'
	baseUrl: '/',

	// GitHub pages deployment config.
	// If you aren't using GitHub pages, you don't need these.
	organizationName: 'ollm', // Usually your GitHub org/user name.
	projectName: 'OpenComic', // Usually your repo name.

	onBrokenLinks: 'throw',
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
			/** @type {import('@docusaurus/preset-classic').Options} */
			({
				docs: {
					sidebarPath: './sidebars.js',
					sidebarCollapsed: false,
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/ollm/OpenComic-Website/tree/main/',
				},
				blog: {
					id: 'releases',
					routeBasePath: 'releases',
    			    path: './releases',

					blogTitle: 'Releases',
					blogDescription: 'All OpenComic releases',

					showReadingTime: true,
					feedOptions: {
						type: ['rss', 'atom'],
						xslt: true,
					},
					// Please change this to your repo.
					// Remove this to remove the "edit this page" links.
					editUrl:
						'https://github.com/ollm/OpenComic-Website/tree/main/',
					// Useful options to enforce blogging best practices
					onInlineTags: 'warn',
					onInlineAuthors: 'warn',
					onUntruncatedBlogPosts: 'warn',
					blogSidebarTitle: 'Realeses',
					blogSidebarCount: 'ALL',
				},
				theme: {
					customCss: './src/css/custom.css',
				},
			}),
		],
	],

	themeConfig:
		/** @type {import('@docusaurus/preset-classic').ThemeConfig} */
		({
			// Replace with your project's social card
			image: 'img/docusaurus-social-card.jpg',
			navbar: {
				title: 'OpenComic',
				logo: {
					alt: 'OpenComic Logo',
					src: 'img/logo.png',
				},
				items: [
					{
						to: '/docs/category/guides',
						label: 'Docs',
						position: 'left',
						activeBaseRegex: '^/docs/(?!installation/download|donate|contributing)',
					},
					{
						to: '/releases',
						label: 'releases',
						position: 'left'
					},
					{
						to: '/docs/installation/download',
						label: 'Download',
						position: 'left'
					},
					{
						to: '/docs/contributing',
						label: 'Contributing',
						position: 'left'
					},
					{
						to: '/docs/donate',
						label: 'Donate ❤️', // 💖
						position: 'left'
					},
                    {
                        href: 'https://github.com/ollm/OpenComic',
                        className: 'header-github-link',
                        'aria-label': 'GitHub repository',
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
								label: 'Docs',
								to: '/docs/category/installation',
							},
							{
								label: 'Releases',
								to: '/releases',
							},
							{
								label: 'Download',
								to: '/docs/installation/download',
							},
							{
								label: 'Contributing',
								to: '/docs/contributing',
							},
							{
								label: 'Donate ❤️', // 💖
								to: '/docs/donate',
							},
						],
					},
					/*{
						title: 'Community',
						items: [
							{
								label: 'Stack Overflow',
								href: 'https://stackoverflow.com/questions/tagged/docusaurus',
							},
							{
								label: 'Discord',
								href: 'https://discordapp.com/invite/docusaurus',
							},
							{
								label: 'X',
								href: 'https://x.com/docusaurus',
							},
						],
					},*/
					{
						title: 'More',
						items: [
							{
								label: 'Features',
								to: '/docs/guides/features',
							},
							{
								label: 'Screenshots',
								to: '/docs/guides/screenshots',
							},
							{
								label: 'Changelog',
								href: 'https://github.com/ollm/OpenComic/blob/master/CHANGELOG.md',
							},
							{
								label: 'GitHub',
								href: 'https://github.com/ollm/OpenComic',
							},
							{
								label: 'Website GitHub',
								href: 'https://github.com/ollm/OpenComic-Website',
							},
						],
					},
				],
				copyright: `Copyright © ${new Date().getFullYear()}. Built with Docusaurus.`,
			},
			prism: {
				theme: prismThemes.github,
				darkTheme: prismThemes.dracula,
			},
			algolia: {
				// The application ID provided by Algolia
				appId: 'X9Z9O0TU7Y',

				// Public API key: it is safe to commit it
				apiKey: 'd712a4ff1680ff1918b2369363b1a36f',

				indexName: 'opencomic',

				// Optional: see doc section below
				contextualSearch: true,

				// Optional: Specify domains where the navigation should occur through window.location instead on history.push. Useful when our Algolia config crawls multiple documentation sites and we want to navigate with window.location.href to them.
				//externalUrlRegex: 'external\\.com|domain\\.com',

				// Optional: Replace parts of the item URLs from Algolia. Useful when using the same search index for multiple deployments using a different baseUrl. You can use regexp or string in the `from` param. For example: localhost:3000 vs myCompany.com/docs
				//replaceSearchResultPathname: {
				//	from: '/docs/', // or as RegExp: /\/docs\//
				//	to: '/',
				//},

				// Optional: Algolia search parameters
				searchParameters: {},

				// Optional: path for search page that enabled by default (`false` to disable it)
				searchPagePath: 'search',

				// Optional: whether the insights feature is enabled or not on Docsearch (`false` by default)
				insights: true,

				//... other Algolia params
			},
		}),
};

export default config;
