export enum NewsContentType {
	PARAGRAPHS,
	LIST,
}

export interface NewsContent {
	type: NewsContentType;
	items: string[];
}

export interface News {
	date: string;
	title: string;
	content: NewsContent[];
}

export const news: News[] = [
	{
		date: "June 21",
		title: "Trails & Tales Update",
		content: [
			{
				type: NewsContentType.PARAGRAPHS,
				items: [
					"The server has been updated to 1.20.1, the Trails and Tales update. " +
						"This update includes new terrain generation such as suspicious " +
						"sand/gravel, the trail ruins structure, and the cherry grove biome.",
					"To make this update easier, I have deleted all Overworld chunks which " +
						"more lag from loading new chunks. It also means that content from the " +
						"players have not visited for more than a few minutes. This will mean " +
						"new update will be closer to already loaded chunks.",
					"Also, here again is a reminder to update the mods you use. If you are " +
						"using the suggested client-side mods, you will need to update these " +
						"mods:",
				],
			},
			{
				type: NewsContentType.LIST,
				items: [
					"Alternate Current --> 1.6.0",
					"c2me --> 0.2.0+alpha.10.91",
					"Chunky --> 1.3.92",
					"Fabric API --> 0.83.1",
					"FerriteCore --> 6.0.0",
					"Lithium --> 0.11.2",
					"Mods Command --> 1.1.3",
				],
			},
		],
	},
	{
		date: "June 4",
		title: "Summer Carnival Community Event",
		content: [
			{
				type: NewsContentType.PARAGRAPHS,
				items: [
					"Summer Carnival Community Event",
					"I originally intended community events to happen rather often, but we " +
						"haven't had one since the Ender Dragon fight last August. It's time " +
						"for another event: the summer carnival! For this event, everyone is " +
						"invited to create some type of carnival ride or game at the carnival " +
						"grounds. This Friday or Saturday (depending on scheduling), everyone " +
						"can get on the server together to play the games together.",
					"Other details:",
				],
			},
			{
				type: NewsContentType.LIST,
				items: [
					"All the games will be free to play. If a game requires a gamble, " +
						"you will need to provide some form of tokens to freely use (and " +
						"plenty for the duration of the carnival)",
					"The carnival fairgrounds are southeast of the cobblestone " +
						"wall/lava cast",
					"Everyone who puts in effort in building at least one game/event " +
						"will be compensated a couple diamonds for their effort",
					"Prizes will be given to the best games/events",
					"I expect the carnival to last about 90 minutes, but players can " +
						"stay on afterward or return to the carnival on other days",
					"Generally, games should be low risk: players shouldn't be at risk " +
						"of losing valuable items. If possible, please provide all items " +
						"players will need for your games",
				],
			},
			{
				type: NewsContentType.PARAGRAPHS,
				items: ["Some suggestions:"],
			},
			{
				type: NewsContentType.LIST,
				items: [
					"Ice boat racing",
					"Parkour course",
					"Spleef",
					"PvP arena",
					"Elytra race course",
					"Bow/Crossbow shooting range",
					"Pig jousting",
					"Rollercoaster",
				],
			},
		],
	},
	{
		date: "June 2",
		title: "Website & 1.19.4 Mods",
		content: [
			{
				type: NewsContentType.PARAGRAPHS,
				items: [
					"The original Google Docs page has been replaced with this website! " +
						"Feel free to offer suggestions on how I can improve this page.",
					"Here is the promised list of mod changes:",
				],
			},
			{
				type: NewsContentType.LIST,
				items: [
					"Audaki Cart Engine: Makes mine carts 4 times faster on straight sections",
					"Chunky: Tool to pre-generate chunks",
					"Inv View: Gives admins the ability to view and edit inventories",
					"Keep Head: Preserves extra data on player heads that are placed and picked up again",
					"Ledger: Gives admins a log of player actions",
					"Mods Command: Shows installed mods",
					"Slumber: Hibernates the server when no players are online",
				],
			},
			{
				type: NewsContentType.PARAGRAPHS,
				items: ["And a list of datapack changes"],
			},
			{
				type: NewsContentType.LIST,
				items: [
					"Better Compass: Compasses show player coordinates and direction",
					"Better Deepslate Stonecutting: Gives deepslate the stonecutter recipes of cobbled deepslate",
					"Vanilla Tweaks Double Shulker Shells: Shulkers always drop two shells",
				],
			},
		],
	},
	{
		date: "May 24",
		title: "1.19.4 Update",
		content: [
			{
				type: NewsContentType.PARAGRAPHS,
				items: [
					"The server has been updated to 1.19.4. Players will need to update " +
						"Minecraft and any mods they use in order to play. Specifics on mods " +
						"and versions being used will be updated later.",
					"Some quick notes:",
				],
			},
			{
				type: NewsContentType.LIST,
				items: [
					"Shulkers now always drop 2 shells",
					"A held compass will show your current coordinates and direction",
					"Armor swapping now exists in the game, no datapacks needed",
					"Non-cobbled deepslate can be used in stone-cutters",
					"Mine carts are now up to 4x faster",
				],
			},
		],
	},
	{
		date: "August 21",
		title: "1.19.2 Update",
		content: [
			{
				type: NewsContentType.PARAGRAPHS,
				items: [
					"The server has been updated to 1.19.2. Players will need to update " +
						"their mods and Minecraft version to play. Of special note:",
				],
			},
			{
				type: NewsContentType.LIST,
				items: [
					"Optifine needs a 1.19.2 version for either stand-alone or Forge;",
					"Lithium for Fabric requires 0.8.3 for 1.19.2",
					"FabricAPI requires 0.60.0+1.19.2",
				],
			},
			{
				type: NewsContentType.PARAGRAPHS,
				items: ["Datapacks have been added:"],
			},
			{
				type: NewsContentType.LIST,
				items: [
					"Ender Dragon now drops an Ender Dragon egg and Elytra on death",
					"Tag can now be played. The number of times you've been tagged displays beneath your name",
					"Custom name prefixes should return after a player is afk",
					"Wandering traders have a 30% chance to sell a map to the nearest Ancient City",
					"Nether Portals can be made very small (minimum 4 obsidian)",
					"Equipping armor from the hotbar will swap it with the armor you're wearing. Works with Elytra by the way",
				],
			},
		],
	},
	{
		date: "August 3",
		title: "1.19.1 Update",
		content: [
			{
				type: NewsContentType.PARAGRAPHS,
				items: [
					"The server has been updated to 1.19.1. If there is any trouble caused " +
						"by the update, let me know. This also means some of the mods have been " +
						"updated along with the vanilla tweaks more mob heads datapack.",
				],
			},
		],
	},
	{
		date: "July",
		title: "Armor Switch Datapack",
		content: [
			{
				type: NewsContentType.PARAGRAPHS,
				items: [
					"The armor switch datapack has been removed. An armor-duping exploit " +
						"was found with it, and so it will not return to the server unless that " +
						"gets patched.",
				],
			},
		],
	},
];
