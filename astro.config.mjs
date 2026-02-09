// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: {
				ko: '런치패드 길라잡이',
			},
			defaultLocale: 'ko',
			locales: {
				ko: {
					label: '한국어',
					lang: 'ko',
				},
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/sihyunlts/launchpad-getting-started' }],
			sidebar: [
				{
					label: '처음부터 배우기',
					collapsed: false,
					items: [
						{ label: '시작하기', slug: 'getting-started/introduction' },
						{ label: '설정하기', slug: 'getting-started/setup' },
						{ label: 'Ableton Live 사용법', slug: 'getting-started/ableton-live' },
						{ label: '프로젝트 연주', slug: 'getting-started/playing' },
					],
				},
			],
		}),
	],
});
