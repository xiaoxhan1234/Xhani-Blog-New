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
		id: "honor-band-9",
		name: "HONOR-Band-9",
		brand: "HONOR",
		category: "wearables",
		status: "backup",
		specs: "曜石黑 / 4MB+48MB",
		description:
			"TPU材质表带, 5ATM防水, 14天超长续航.",
		icon: "material-symbols:fitness-tracker",
		year: "2024",
		link: "https://www.honor.com/cn/wearables/honor-band-9",
	},
	{
		id: "honor-band-10-nfc",
		name: 'HONOR-Band-10 NFC',
		brand: "HONOR",
		category: "wearables",
		status: "active",
		specs: "曜石黑 / 4MB+48MB",
		description:
			"TPU外扣式表带, 5ATM防水, 14天超长续航.",
		icon: "material-symbols:fitness-tracker",
		year: "2025",
		link: "https://www.honor.com/cn/wearables/honor-band-10",
	},
];

/** 获取所有设备数据列表 */
export function getDevicesList(): DeviceItem[] {
	return devicesData;
}
