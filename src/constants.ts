export enum Pages {
	HOME,
	MINECRAFT,
	BLOG,
	ARCHIVE,
}

export const Forms = {
	datapacksHref: "/",
	modsHref: "/",
	whitelistHref: "/",
	otherHref: "/",
	underReviewHref: "/",
} as const;

export const DownloadSites = {
	GitHub: "GitHub",
	Modrinth: "Modrinth",
	CurseForge: "CurseForge",
	PlanetMC: "PlanetMC",
	Twitch: "Twitch",
	YouTube: "YouTube",
	Instagram: "Instagram",
} as const;

export const ModUsages = {
	client: "client",
	server: "server",
	serverOnly: "serverOnly",
	all: "all",
} as const;
