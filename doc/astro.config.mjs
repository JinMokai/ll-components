import starlight from "@astrojs/starlight";
import { defineConfig } from "astro/config";

import vue from "@astrojs/vue";

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: "ll-components 文档",
			social: {
				github: "https://github.com/JinMokai/ll-components",
			},
			sidebar: [
				{
					label: "指南",
					items: [
						// Each item here is one entry in the navigation menu.
						{
							label: "指南示例",
							link: "/guides/start/",
						},
					],
				},
				{
					label: "组件",
					autogenerate: {
						directory: "components",
					},
				},
			],
		}),
		vue({
			jsx: true,
		}),
	],
});
