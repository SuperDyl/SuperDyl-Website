import { Websites, ModUsages } from "./constants";
import { ExternalLink } from "./components/ExternalLinkList";

const MC_1_19_4 = "1.19.4";
const MC_1_20_0 = "1.20.0";

type MC_VERSION = typeof MC_1_19_4 | typeof MC_1_20_0;
type MOD_VERSION = string;

export interface ModInfo {
	modName: string;
	versions: Map<MC_VERSION, MOD_VERSION>;
	version?: MOD_VERSION;
	downloadLinks: ExternalLink[];
	purpose: string;
	usage: keyof typeof ModUsages;
}

const allMods: ModInfo[] = [
	{
		modName: "Alternate Current",
		versions: new Map([[MC_1_19_4, "1.5.0"]]),
		version: "1.5.0",
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
		purpose: "Optimizes update order of redstone wire and components",
		usage: ModUsages.server,
	},
	{
		modName: "Audaki Cart Engine",
		versions: new Map([[MC_1_19_4, "2.0.3"]]),
		version: "2.0.3",
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
		purpose: "Makes mine carts 4 times faster on straight sections",
		usage: ModUsages.serverOnly,
	},
	{
		modName: "c2me",
		versions: new Map([[MC_1_19_4, "0.2.0+alpha.10.51"]]),
		version: "0.2.0+alpha.10.51",
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
		purpose: "Optimizes chunk loading by using multiple CPU cores",
		usage: ModUsages.server,
	},
	{
		modName: "Chunky",
		versions: new Map([[MC_1_19_4, "1.3.74"]]),
		version: "1.3.74",
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
		versions: new Map([[MC_1_19_4, "0.81.1"]]),
		version: "0.81.1",
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
		modName: "FerriteCore",
		versions: new Map([[MC_1_19_4, "5.2.0"]]),
		version: "5.2.0",
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
		versions: new Map([[MC_1_19_4, "1.4.10"]]),
		version: "1.4.10",
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
		purpose: "Gives admins the ability to view and edit inventories",
		usage: ModUsages.serverOnly,
	},
	{
		modName: "Keep Head Names",
		version: "1.5.1",
		versions: new Map([[MC_1_19_4, "1.5.1"]]),
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
		modName: "Ledger",
		versions: new Map([[MC_1_19_4, "1.2.7"]]),
		version: "1.2.7",
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
		purpose: "Gives admins a log of player actions",
		usage: ModUsages.serverOnly,
	},
	{
		modName: "Lithium",
		versions: new Map([[MC_1_19_4, "0.11.1"]]),
		version: "0.11.1",
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
		modName: "Mods Command",
		versions: new Map([[MC_1_19_4, "1.1.2"]]),
		version: "1.1.2",
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
		modName: "ServerCore",
		versions: new Map([[MC_1_19_4, "1.3.51"]]),
		version: "1.3.51",
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
		versions: new Map([[MC_1_19_4, "1.1.0"]]),
		version: "1.1.0",
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/mod/mods-command",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/jpenilla/mods-command/releases",
			},
		],
		purpose: "Hibernates the server when no players are online",
		usage: ModUsages.serverOnly,
	},
	{
		modName: "Sodium",
		versions: new Map([[MC_1_19_4, "0.4.10"]]),
		version: "0.4.10",
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
		version: "1.7.0",
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
		versions: new Map([[MC_1_19_4, "1.1.1"]]),
		version: "1.1.1",
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
		purpose: "Most efficient rewrite of the lighting engine. Useless 1.20+",
		usage: ModUsages.server,
	},
	{
		modName: "Very Many Player (VMP)",
		versions: new Map([[MC_1_19_4, "0.2.0+beta.7.736.37"]]),
		version: "0.2.0+beta.7.736.37",
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
