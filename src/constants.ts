export enum MC_PAGES {
	HOME,
	NEWS,
	PLAY,
}

export const PAGE_URLS: Map<MC_PAGES, string> = new Map([
	[MC_PAGES.HOME, "/minecraft"],
	[MC_PAGES.NEWS, "/minecraft/news"],
	[MC_PAGES.PLAY, "/minecraft/play"],
]);

export const getPageUrl = (page: MC_PAGES): string => {
	return PAGE_URLS.get(page) || "/404";
};

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

export const mobileWidth: number = 600;
export const tabletWidth: number = 1000;

export type OptionalUrlProps =
	| ({ url: string } & (
			| { isExternal: boolean; isLocal?: never }
			| { isExternal?: never; isLocal: boolean }
	  ))
	| { url?: never; isExternal?: never; isLocal?: never };

export type RequiredUrlProps = { url: string } & (
	| { isExternal: boolean; isLocal?: never }
	| { isExternal?: never; isLocal: boolean }
);
