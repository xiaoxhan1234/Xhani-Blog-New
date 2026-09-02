/**
 * 设备展示页数据源（纯内容）。
 * 页面展示与筛选规则由 src/config/devicesConfig.ts 控制。
 */
import type { DeviceItem } from "@/types/devicesConfig";

export const devicesData: DeviceItem[] = [
	{
		id: "redmi-turbo-5-max",
		name: 'REDMI Turbo 5 Max',
		brand: "REDMI",
		category: "mobile",
		status: "active",
		specs: "海风蓝 / 16G + 512GB",
		description:
			"天玑旗舰芯, 9000mAh大容量，100W秒充.",
		icon: "material-symbols:phone-iphone",
		featured: true,
		year: "2026",
		link: "https://www.mi.com/prod/redmi-turbo-5-max/",
	},
	{
		id: "redmi-buds-5-pro",
		name: "REDMI Buds 5 Pro",
		brand: "REDMI",
		category: "audio",
		status: "active",
		specs: "冰瓷蓝 / AAC / LHDC5.0",
		description:
			"旗舰降噪耳机, 声场开阔通透, 入耳即入迷.",
		icon: "material-symbols:headphones-rounded",
		year: "2023",
		link: "https://www.mi.com/redmi-buds-5-pro",
	},
	{
		id: "custom-keyboard-75",
		name: "Custom 75% Mechanical Keyboard",
		brand: "Custom",
		category: "peripheral",
		status: "active",
		specs: "Anodized Aluminum / Linear Switches",
		description:
			"Custom gasket-mounted keyboard tuned for deep, quiet typing acoustics.",
		icon: "material-symbols:keyboard-outline-rounded",
		year: "2025",
	},
	{
		id: "ipad-pro-11",
		name: 'iPad Pro 11"',
		brand: "Apple",
		category: "mobile",
		status: "backup",
		specs: "Space Gray / 128GB",
		description:
			"Secondary mobile screen and digital notepad for sketching ideas and reading papers.",
		icon: "material-symbols:tablet-mac-rounded",
		year: "2021",
	},
];

/** 获取所有设备数据列表 */
export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
