export enum MC_PAGES {
	HOME,
	NEWS,
}

export const Forms = {
	datapacksHref: "https://forms.gle/u2FAnFn7dc8Ft3qm6",
	modsHref: "https://forms.gle/Dar8qVgWhtgiRb9R6",
	whitelistHref: "https://forms.gle/DHTS7QoJncuD7F2w8",
	otherHref: "https://forms.gle/F2SRkzgNiijYyPD88",
	underReviewHref: "https://forms.gle/5iKmjReTPGDpCVed7",
} as const;

export const Websites = {
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
