// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import starlightImageZoom from 'starlight-image-zoom'
import rehypeExternalLinksTargetBlank from './src/rehype/external-links-target-blank.js';

// https://astro.build/config
export default defineConfig({
	redirects: {
		'/': '/ko',
	},
	markdown: {
		rehypePlugins: [rehypeExternalLinksTargetBlank],
	},
	integrations: [
		starlight({
			plugins: [starlightImageZoom()],
			title: {
				ko: '런치패드 길라잡이',
			},
			customCss: ['./src/styles/custom.css'],
			head: [
				{
					tag: 'link',
					attrs: { rel: 'preconnect', href: 'https://cdn.jsdelivr.net', crossorigin: 'anonymous' },
				},
				{
					tag: 'link',
					attrs: {
						rel: 'stylesheet',
						as: 'style',
						crossorigin: 'anonymous',
						href: 'https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css',
					},
				},
			],
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
						{ label: '처음부터 배우기: 1장', slug: 'lessons/zero2intro/01' },
						{ label: '처음부터 배우기: 2장', slug: 'lessons/zero2intro/02' },
						{ label: '처음부터 배우기: 3장', slug: 'lessons/zero2intro/03' },
						{ label: '처음부터 배우기: 4장', slug: 'lessons/zero2intro/04' },
					],
				},
				{
					label: '프로젝트 제작 튜토리얼',
					collapsed: false,
					items: [
						{ label: '프로젝트 제작: 초보자 편', slug: 'lessons/make-proj/noob' },
						{ label: '프로젝트 제작: 입문 편', slug: 'lessons/make-proj/intro' },
						{ label: '프로젝트 제작: 파생·심화 편', slug: 'lessons/make-proj/advance' },
					],
				},
					{
						label: '기타 강좌',
						collapsed: false,
						items: [
							{ label: '런치패드 프로 MK2 CFW 매뉴얼', slug: 'lessons/others/cfwmanual' },
							{ label: 'Ableton | 런치패드 포트 설정', slug: 'lessons/others/midiportset' },
							{ label: 'Ableton Push 2 설정', slug: 'lessons/others/push2dev' },
							{ label: 'Ableton Live 완전 삭제', slug: 'lessons/others/resetlive' },
							{ label: '오디오 시각화', slug: 'lessons/others/audiovisualization' },
							{ label: '브릭 복구(언브릭)', slug: 'lessons/others/unbrick' },
						],
					},
						{
						label: '유용한 정보',
						collapsed: false,
						items: [
							{ label: '추천 프로젝트', slug: 'useful/projects' },
							{ label: '추천 런치패더', slug: 'useful/launchpadders' },
						],
					},
					{
						label: '자료 다운로드',
						collapsed: false,
						items: [
							{ label: '소프트웨어', slug: 'res/software' },
						{ label: 'Max For Live 플러그인', slug: 'res/amxd' },
						{ label: 'Launchpad 공식 설명서', slug: 'res/manual' },
						{ label: 'Novation USB 드라이버', slug: 'res/driver' },
						{ label: '팔레트', slug: 'res/palette' },
						{ label: '영상 제작 소재', slug: 'res/vfootage' },
						{ label: '펌웨어 업데이트 프로그램', slug: 'res/fwupdater' },
					],
				},
			],
		}),
	],
});
