import type { ProfileConfig } from "@/types/config";
import { withUserConfig } from "../utils/config-overlay.ts";

/**
 * 博主资料：头像 / 名称 / 简介 / 社交链接（侧栏 Profile 卡片、页脚、RSS 作者等消费）。
 * 类型见 src/types/config.ts。
 */
export const profileConfig: ProfileConfig = withUserConfig("profile", {
	avatar: "assets/images/demo-avatar.webp", // Relative to the /src directory. Relative to the /public directory if it starts with '/'
	name: "XiaoXhan1234",
	bio: "你是一只大杂鱼,还是大baka!",
	links: [
		{
			name: "Bilibili",
			icon: "fa6-brands:bilibili", // Visit https://icones.js.org/ for icon codes
			// You will need to install the corresponding icon set if it's not already included
			// `pnpm add @iconify-json/<icon-set-name>`
			url: "https://space.bilibili.com/3546647371975467",
		},
		{
			name: "QQ",
			icon: "fa6-brands:qq",
			url: "https://res.abeim.cn/api/qq/?qq=3789656106",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/xiaoxhan1234",
		},
		{
			name: "Telegram",
			icon: "fa6-brands:telegram",
			url: "https://t.me/xiaoxhan1234",
		},
		{
			name: "Twitch",
			icon: "fa6-brands:twitch",
			url: "https://www.twitch.tv/xiaoxhan1234",
		},
		{
			name: "Twitter",
			icon: "fa6-brands:x-twitter",
			url: "https://x.com/xiaoxhan520",
		},
	],
});
