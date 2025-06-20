import { Websites, ModUsages } from "./constants";
import { ExternalLink } from "./components/ExternalLinkList";

const UNAVAILABLE_TEXT = "UNAVAILABLE";

const MC_1_21_6 = "1.21.6";
const MC_1_21_5 = "1.21.5";
const MC_1_21_0 = "1.21.0";
const MC_1_20_4 = "1.20.4";
const MC_1_20_1 = "1.20.1";
const MC_1_19_4 = "1.19.4";

export const ALL_MC_VERSIONS = [
	MC_1_21_6,
	MC_1_21_5,
	MC_1_21_0,
	MC_1_20_4,
	MC_1_20_1,
	MC_1_19_4,
] as string[];

export type MC_VERSION = (typeof ALL_MC_VERSIONS)[number];
type MOD_VERSION = string;

export interface ModInfo {
	modName: string;
	versions: Map<MC_VERSION, MOD_VERSION>;
	downloadLinks: ExternalLink[];
	purpose: string;
	usage: keyof typeof ModUsages;
}

const allMods: ModInfo[] = [
	{
		modName: "Alternate Current",
		versions: new Map([
			[MC_1_19_4, "1.5.0"],
			[MC_1_20_1, "1.6.0"],
			[MC_1_20_4, "1.7.0"],
			[MC_1_21_0, "1.8.0"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/alternate-current/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/SpaceWalkerRS/alternate-current/releases",
			},
			{
				siteName: Websites.CurseForge,
				url: "https://www.curseforge.com/minecraft/mc-mods/alternate-current/files",
			},
		],
		purpose: "Optimizes redstone update order",
		usage: ModUsages.server,
	},
	{
		modName: "Audaki Cart Engine",
		versions: new Map([
			[MC_1_19_4, "2.0.3"],
			[MC_1_20_1, "2.0.5"],
			[MC_1_20_4, "2.0.6"],
			[MC_1_21_0, "3.1.1"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/audaki-cart-engine/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/audaki/minecraft-cart-engine/releases",
			},
			{
				siteName: Websites.CurseForge,
				url: "https://www.curseforge.com/minecraft/mc-mods/audaki-cart-engine/files",
			},
		],
		purpose: "Makes mine carts 4x faster",
		usage: ModUsages.serverOnly,
	},
	{
		modName: "c2me",
		versions: new Map([
			[MC_1_19_4, "0.2.0+alpha.10.51"],
			[MC_1_20_1, "0.2.0+alpha.10.91"],
			[MC_1_20_4, "0.2.0+alpha.11.58"],
			[MC_1_21_0, "0.2.0+alpha.11.101"],
			[MC_1_21_5, "0.3.2+rc.1.0"],
			[MC_1_21_6, "0.3.4+alpha.0.42"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/c2me-fabric/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/RelativityMC/C2ME-fabric/releases",
			},
			{
				siteName: Websites.CurseForge,
				url: "https://www.curseforge.com/minecraft/mc-mods/c2me-fabric/files",
			},
		],
		purpose: "Uses multiple CPU cores to speed up game",
		usage: ModUsages.server,
	},
	{
		modName: "Chunky",
		versions: new Map([
			[MC_1_19_4, "1.3.74"],
			[MC_1_20_1, "1.3.92"],
			[MC_1_20_4, "1.3.138"],
			[MC_1_21_0, "1.4.16"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/plugin/chunky/versions",
			},
			{
				siteName: Websites.CurseForge,
				url: "https://www.curseforge.com/minecraft/mc-mods/chunky-pregenerator",
			},
		],
		purpose: "Tool to pre-generate chunks",
		usage: ModUsages.server,
	},
	{
		modName: "Fabric API",
		versions: new Map([
			[MC_1_19_4, "0.81.1"],
			[MC_1_20_1, "0.83.1"],
			[MC_1_20_4, "0.96.11"],
			[MC_1_21_0, "0.100.3"],
			[MC_1_21_5, "0.121.0"],
			[MC_1_21_6, "0.127.1"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/fabric-api/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/FabricMC/fabric/releases",
			},
			{
				siteName: Websites.CurseForge,
				url: "https://www.curseforge.com/minecraft/mc-mods/fabric-api/files",
			},
		],
		purpose: "Library used by most fabric mods",
		usage: ModUsages.all,
	},
	{
		modName: "Fabric Language Kotlin",
		versions: new Map([
			[MC_1_19_4, "1.11.0+kotlin.2.0.0"],
			[MC_1_20_1, "1.11.0+kotlin.2.0.0"],
			[MC_1_20_4, "1.11.0+kotlin.2.0.0"],
			[MC_1_21_0, "1.11.0+kotlin.2.0.0"],
			[MC_1_21_5, "1.13.2+kotlin.2.1.20"],
			[MC_1_21_6, "1.13.3+kotlin.2.1.21"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/fabric-language-kotlin",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/FabricMC/fabric-language-kotlin/",
			},
			{
				siteName: Websites.CurseForge,
				url: "https://legacy.curseforge.com/minecraft/mc-mods/fabric-language-kotlin",
			},
		],
		purpose: "Dependency for Ledger",
		usage: ModUsages.serverOnly,
	},
	{
		modName: "FerriteCore",
		versions: new Map([
			[MC_1_19_4, "5.2.0"],
			[MC_1_20_1, "6.0.0"],
			[MC_1_20_4, "6.0.3"],
			[MC_1_21_0, "7.0.0"],
			[MC_1_21_5, "8.0.0"],
			[MC_1_21_6, "8.0.0"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/ferrite-core/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/malte0811/FerriteCore/tags",
			},
			{
				siteName: Websites.CurseForge,
				url: "https://www.curseforge.com/minecraft/mc-mods/ferritecore/files",
			},
		],
		purpose: "Optimizes memory usage",
		usage: ModUsages.all,
	},
	{
		modName: "Inv View",
		versions: new Map([
			[MC_1_19_4, "1.4.10"],
			[MC_1_20_1, "1.4.11"],
			[MC_1_20_4, "1.4.14"],
			[MC_1_21_0, "1.4.15"],
			[MC_1_21_5, "1.4.16"],
			[MC_1_21_6, "1.4.16"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/invview/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/PotatoPresident/InvView/releases",
			},
			{
				siteName: Websites.CurseForge,
				url: "https://www.curseforge.com/minecraft/mc-mods/inv-view/files",
			},
		],
		purpose: "Admin tool to view player inventories",
		usage: ModUsages.serverOnly,
	},
	{
		modName: "Keep Head Names",
		versions: new Map([
			[MC_1_19_4, "1.5.1"],
			[MC_1_20_1, "1.5.1"],
			[MC_1_20_4, "1.5.1"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/keepheadnames/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/Fourmisain/KeepHeadNames/releases",
			},
			{
				siteName: Websites.CurseForge,
				url: "https://www.curseforge.com/minecraft/mc-mods/keepheadnames/files",
			},
		],
		purpose:
			"Preserves extra data on player heads that are placed and picked up again",
		usage: ModUsages.serverOnly,
	},
	{
		modName: "Krypton",
		versions: new Map([
			[MC_1_20_4, "0.2.6"],
			[MC_1_21_0, "0.2.8"],
			[MC_1_21_5, "0.2.9"],
			[MC_1_21_6, "0.2.9"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/krypton/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/astei/krypton/releases",
			},
		],
		purpose: "Improves networking between client and server",
		usage: ModUsages.server,
	},
	{
		modName: "Ledger",
		versions: new Map([
			[MC_1_19_4, "1.2.7"],
			[MC_1_20_1, "1.2.8"],
			[MC_1_20_4, "1.2.10"],
			[MC_1_21_0, "1.3.4"],
			[MC_1_21_5, "1.3.10"],
			[MC_1_21_6, "1.3.10:1.21.6"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/ledger/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/QuiltServerTools/Ledger/releases",
			},
			{
				siteName: Websites.CurseForge,
				url: "https://www.curseforge.com/minecraft/mc-mods/ledger/files",
			},
		],
		purpose: "Logs player actions",
		usage: ModUsages.serverOnly,
	},
	{
		modName: "Lithium",
		versions: new Map([
			[MC_1_19_4, "0.11.1"],
			[MC_1_20_1, "0.11.2"],
			[MC_1_20_4, "0.12.1"],
			[MC_1_21_0, "0.12.7"],
			[MC_1_21_5, "0.16.2"],
			[MC_1_21_6, "0.17.0"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/lithium/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/CaffeineMC/lithium-fabric/releases",
			},
		],
		purpose: "Optimizes many game operations",
		usage: ModUsages.all,
	},
	{
		modName: "Memory Leak Fix",
		versions: new Map([
			[MC_1_20_4, "1.1.5"],
			[MC_1_21_0, UNAVAILABLE_TEXT],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/memoryleakfix/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/FxMorin/memoryleakfix/releases",
			},
		],
		purpose: "Keeps RAM from being wasted",
		usage: ModUsages.server,
	},
	{
		modName: "Mods Command",
		versions: new Map([
			[MC_1_19_4, "1.1.2"],
			[MC_1_20_1, "1.1.3"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/mods-command/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/jpenilla/mods-command/releases",
			},
		],
		purpose: "Shows installed mods",
		usage: ModUsages.server,
	},
	{
		modName: "More Culling",
		versions: new Map([
			[MC_1_20_4, "0.22.1"],
			[MC_1_21_0, "0.26.0"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/moreculling/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/FxMorin/MoreCulling/releases",
			},
		],
		purpose: "Hides out of view objects to speed up the game",
		usage: ModUsages.client,
	},
	{
		modName: "ServerCore",
		versions: new Map([
			[MC_1_19_4, "1.3.5"],
			[MC_1_20_1, "1.3.7"],
			[MC_1_20_4, "1.4.0"],
			[MC_1_21_0, "1.5.3"],
			[MC_1_21_5, "1.5.10"],
			[MC_1_21_6, "1.5.13"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/servercore/versions",
			},
			{
				siteName: Websites.CurseForge,
				url: "https://www.curseforge.com/minecraft/mc-mods/servercore/files",
			},
		],
		purpose: "Reduces server lag spikes",
		usage: ModUsages.serverOnly,
	},
	{
		modName: "Slumber",
		versions: new Map([
			[MC_1_19_4, "1.1.0"],
			[MC_1_20_1, "1.1.0"],
			[MC_1_20_4, "1.2.0"],
			[MC_1_21_0, "1.2.0"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/slumber/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/Tater-Certified/Slumber/releases",
			},
		],
		purpose: "Hibernates the server when no players are online",
		usage: ModUsages.serverOnly,
	},
	{
		modName: "Sodium",
		versions: new Map([
			[MC_1_19_4, "0.4.10"],
			[MC_1_20_1, "0.5.8"],
			[MC_1_20_4, "0.5.8"],
			[MC_1_21_0, "0.5.9"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/sodium/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/CaffeineMC/sodium-fabric/releases",
			},
		],
		purpose: "",
		usage: ModUsages.client,
	},
	{
		modName: "Smooth Boot",
		versions: new Map([[MC_1_19_4, "1.7.0"]]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/smoothboot-fabric/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/UltimateBoomer/mc-smoothboot/releases",
			},
			{
				siteName: Websites.CurseForge,
				url: "https://www.curseforge.com/minecraft/mc-mods/smooth-boot/files",
			},
		],
		purpose: "Makes multithreaded boot more efficient",
		usage: ModUsages.all,
	},
	{
		modName: "Starlight",
		versions: new Map([
			[MC_1_19_4, "1.1.1"],
			[MC_1_20_1, "1.1.2"],
			[MC_1_20_4, "1.1.3"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/starlight/versions",
			},
			{
				siteName: Websites.CurseForge,
				url: "https://www.curseforge.com/minecraft/mc-mods/starlight/files",
			},
		],
		purpose:
			"Most efficient rewrite of the lighting engine. Almost useless client-side 1.20+",
		usage: ModUsages.serverOnly,
	},
	{
		modName: "Very Many Player (VMP)",
		versions: new Map([
			[MC_1_19_4, "0.2.0+beta.7.736.37"],
			[MC_1_20_1, "0.2.0+beta.7.96"],
			[MC_1_20_4, "0.2.0+beta.7.138"],
			[MC_1_21_0, "0.2.0+beta.7.162"],
		]),
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/vmp-fabric/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/RelativityMC/VMP-fabric/releases",
			},
			{
				siteName: Websites.CurseForge,
				url: "https://www.curseforge.com/minecraft/mc-mods/vmp-fabric/files",
			},
		],
		purpose: "Optimizes server networking and entity collisions",
		usage: ModUsages.serverOnly,
	},
];

export const getServerMods = () => {
	return allMods.filter((mod) => mod.usage !== ModUsages.client);
};

export const getClientMods = () => {
	return allMods.filter(
		(mod) =>
			ModUsages.client === mod.usage ||
			ModUsages.all === mod.usage ||
			ModUsages.server === mod.usage
	);
};

export const filterVersion = (mods: ModInfo[], version: MC_VERSION) => {
	return mods.filter((mod) => {
		return mod.versions.has(version);
	});
};
