/**
 * 友情链接数据配置（结构与 Mizuki 同款，便于互相迁移）。
 * 用于管理友情链接页面的数据：src/pages/friends.astro → organisms/FriendSection。
 *
 * 添加友链：在 friendsData 中追加一项即可，页面 / 筛选标签自动生成。
 * tags 会聚合为页面顶部的筛选 chip（OR 命中：选中多个标签时命中任一即显示）。
 */
export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

// 友情链接数据
export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Mizuki",
		imgurl: "https://avatars.githubusercontent.com/u/225602409?v=4&s=640",
		desc: "Another Fuwari-based blog theme with docs",
		siteurl: "https://mizuki.mysqil.com",
		tags: ["Blog", "Theme"],
	},
	{
		id: 2,
		title: "QiuLingYanの小站",
		imgurl: "https://i.postimg.cc/R0Rb7Lgv/cgi-bin-mmwebwx-bin-webwxgetmsgimg-Msg-ID-7182137176871366394-skey-crypt-e10aef0c-d761f5527e6b8c6.jpg",
		desc: "QiuLingYan 的废纸篓喵～",
		siteurl: "https://qiulingyan.top",
		tags: ["fvv 喵","Blog"],
	},
	{
		id: 3,
		title: "Amachiromaker",
		imgurl: "https://nacho.zako.wf/favicon.png",
		desc: "这是一个被甘城猫猫下线的捏脸网站",
		siteurl: "https://nacho.zako.wf",
		tags: ["喵喵喵～"],
	},
	{
		id: 4,
		title: "Betsy Blog",
		imgurl: "https://img.micostar.cc/images/avatar.webp",
		desc: "爱我所爱，我们是彼此永远的动力",
		siteurl: "https://www.micostar.cc",
		tags: ["Unity","Blog"],
	},
	{
		id: 5,
		title: "LHL's Blog",
		imgurl: "https://cdn.sa.net/2025/04/18/KXpf8u5SQYNPkA3.jpg",
		desc: "想把海洋里所有鱼都握在手里，把森林里里所有花都插在心头.",
		siteurl: "https://blog.lhl.one",
		tags: ["Blog"],
	},
	{
		id: 6,
		title: "lx小窝",
		imgurl: "https://blog.lxlovo.top/wp-content/uploads/2025/12/luoxiao.jpg",
		desc: "一个爱写文的菜鸟",
		siteurl: "https://blog.lxlovo.top",
		tags: ["写文","Blog","日常"],
	},
	{
		id: 7,
		title: "yuyu的博客",
		imgurl: "https://yuyu09.com/wp-content/uploads/2026/03/1772795799546-scaled.jpeg",
		desc: "如果你欢迎加入yuyu的博客.这里不仅是资源与教程的聚集地,更是一群年轻创作者的成长社区.我们相信,每一次分享都能点亮一个人的探索之路.",
		siteurl: "https://yuyu09.com",
		tags: ["Blog"],
	},
	{
		id: 8,
		title: "Wan's Blog",
		imgurl: "https://blog.wanfory.top/assets/images/avatar.jpg",
		desc: "Love is my oath",
		siteurl: "https://blog.wanfory.top",
		tags: ["Blog"],
	},
	{
		id: 9,
		title: "洛屿的小站",
		imgurl: "https://www.drluo.top/img/avatar.webp",
		desc: "嗨，靓仔，今天也要有个好心情哦！",
		siteurl: "https://www.drluo.top",
		tags: ["Blog","洛屿"],
	},
];

// 获取所有友情链接数据（稳定顺序，测试可复现）
export function getFriendsList(): FriendItem[] {
	return friendsData;
}

// 获取随机排序的友情链接数据（避免固定排序，按需使用）
export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
