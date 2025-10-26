import React, { FunctionComponent, memo } from "react";
import TitledSection from "../components/TitledSection";
import TitledSubSection from "../components/TitledSubSection";
import VanillaTweaksTable from "../components/VanillaTweaksTable";
import ExternalTabLink from "../components/ExternalTabLink";
import DatapackTable from "../components/DatapackTable";
import { Websites } from "../constants";

const otherDatapacks = [
	{
		datapackName: "Better Compass",
		version: "3.0.0",
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/datapack/better-compass/versions",
			},
			{
				siteName: Websites.PlanetMC,
				url: "https://www.planetminecraft.com/data-pack/better-compass-display-coordinates-and-cardinal-direction/",
			},
		],
		author: "KawaMood",
		authorLinks: [
			{
				siteName: Websites.PlanetMC,
				url: "https://www.planetminecraft.com/member/kawamood/",
			},
			{ siteName: Websites.GitHub, url: "https://github.com/KawaMood" },
		],
		changes: "Compasses now show coordinates and cardinal direction",
		reasoning: "Adds a good use to compasses",
	},
	{
		datapackName: "Deepslate Stonecutting",
		version: "v1.1.4",
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/datapack/deepslate-stonecutting/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/SuperDyl/deepslate-stonecutting",
			},
		],
		author: "SuperDyl",
		authorLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/user/SuperDyl",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/Superdyl",
			},
		],
		changes:
			"Gives deepslate the same stonecutter recipes as cobbled deepslate",
		reasoning: "I got tired of mining these two resources separate",
	},
	{
		datapackName: "Item Frame Color",
		version: "3.3",
		downloadLinks: [
			{
				siteName: Websites.CurseForge,
				url: "https://legacy.curseforge.com/minecraft/customization/item-frame-color-datapack/files",
			},
			{
				siteName: Websites.PlanetMC,
				url: "https://www.planetminecraft.com/data-pack/item-frame-color/",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/kikipunk/Item-Frame-Color-DataPack",
			},
		],
		author: "kikpunk",
		authorLinks: [
			{
				siteName: Websites.PlanetMC,
				url: "https://www.planetminecraft.com/member/kikipunk/",
			},
			{
				siteName: Websites.YouTube,
				url: "https://www.youtube.com/channel/UC0l_FnZ6USWl-obEocIlaoA",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/kikipunk",
			},
		],
		changes:
			"Item frames can be recolored by shift clicking them with dye. Undo the color by shift clicking with a water bucket or breaking the item frame",
		reasoning:
			"Seemed like a nice decoration choice and since it seems to work well, I added it",
	},
	{
		datapackName: "Take a Seat",
		version: "4.0",
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/datapack/take-a-seat/versions",
			},
			{
				siteName: Websites.PlanetMC,
				url: "https://www.planetminecraft.com/data-pack/take-a-seat/",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/dragon3025/My-Datapacks",
			},
		],
		author: "dragon3025",
		authorLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/user/dragon3025",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/dragon3025",
			},
			{
				siteName: Websites.PlanetMC,
				url: "https://www.planetminecraft.com/member/dragon3025/",
			},
		],
		changes: "The player can sit anywhere by using `/trigger sit`",
		reasoning:
			"It's a fun and simple emote. This seemed to me the most elegant way to implement this",
	},
	{
		datapackName: "Invisible Item Frames",
		version: "2.3.1",
		downloadLinks: [
			{
				siteName: Websites.PlanetMC,
				url: "https://www.planetminecraft.com/data-pack/invisible-item-frames-5403610/",
			},
		],
		author: "8BitMonkey",
		authorLinks: [
			{
				siteName: Websites.PlanetMC,
				url: "https://www.planetminecraft.com/member/the8bitmonkey/",
			},
			{
				siteName: Websites.YouTube,
				url: "https://www.youtube.com/channel/UC6N_YXUtiys1atyGZqNylKw",
			},
			{
				siteName: Websites.Twitch,
				url: "https://www.twitch.tv/The8BitMonkey",
			},
			{
				siteName: Websites.Instagram,
				url: "https://www.instagram.com/The8BitMonkey",
			},
		],
		changes:
			"Item frames can be made invisible by shift clicking them with shears. Includes a set of hidden advancements. Items in invisible frames can only be rotated if the player is sneaking. Some of these settings don’t apply if the frames are made invisible using a `Statues` book. Undo by breaking the item frame",
		reasoning: "Very vanilla feeling way to allow invisible item frames",
	},
	{
		datapackName: "Keep Head Data",
		version: "1.0.0",
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/datapack/keepheadnames/versions",
			},
			{
				siteName: Websites.CurseForge,
				url: "https://www.curseforge.com/minecraft/data-packs/keep-head-data",
			},
		],
		author: "Fourmisain",
		authorLinks: [
			{
				siteName: Websites.GitHub,
				url: "https://github.com/Fourmisain",
			},
			{
				siteName: Websites.CurseForge,
				url: "https://www.curseforge.com/members/fourmisain/projects",
			},
		],
		changes: "Saves custom item data to placed heads",
		reasoning:
			"Players can keep data like item lore when they place player/mob heads",
	},
	{
		datapackName: "Tag Game",
		version: "1.2.5",
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/datapack/tag-game/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/SuperDyl/tag-game",
			},
		],
		author: "SuperDyl",
		authorLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/user/SuperDyl",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/Superdyl",
			},
		],
		changes: "Continues the tag game originally part of Vanilla Tweaks",
		reasoning:
			"I enjoy tag, it's keep players from killing each other as often",
	},
	{
		datapackName: "Arrested Development",
		version: "25.10.08",
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/datapack/arrested-development/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/OpenBagTwo/Arrested-Development",
			},
		],
		author: "OpenBagTwo",
		authorLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/user/OpenBagTwo",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/OpenBagTwo",
			},
		],
		changes: "Allows players to keep mobs as babies forever!",
		reasoning:
			"There are now more cute baby mobs like ghastlings",
	},
	{
		datapackName: "Statue Crafting",
		version: "1.0.0",
		downloadLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/datapack/statue-crafting/versions",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/SuperDyl/statue-crafting",
			},
		],
		author: "SuperDyl",
		authorLinks: [
			{
				siteName: Websites.Modrinth,
				url: "https://modrinth.com/user/SuperDyl",
			},
			{
				siteName: Websites.GitHub,
				url: "https://github.com/Superdyl",
			},
		],
		changes: "Allows crafting copper golem statues directly.",
		reasoning: "Makes it easier to build with the statues.",
	},
];

const vtCraftingVersion = "v1.21.5";

interface DatapacksProps {
	vtDatapacksHref: string;
	vtCraftingHref: string;
	suggestDatapackChangesHref: string;
}

const Datapacks: FunctionComponent<DatapacksProps> = ({
	vtDatapacksHref,
	vtCraftingHref,
	suggestDatapackChangesHref: suggestChangesHref,
}) => {
	const columnHeaders = ["Pack", "Version", "Changes", "Reasoning"];

	return (
		<TitledSection header="Datapacks">
			<TitledSubSection header="Vanilla Tweaks">
				<p>
					Download links:{" "}
					<ExternalTabLink href={vtDatapacksHref}>Datapacks</ExternalTabLink> |{" "}
					<ExternalTabLink href={vtCraftingHref}>Crafting</ExternalTabLink>
				</p>
				<p>
					<ExternalTabLink href={suggestChangesHref}>
						Suggest datapack changes
					</ExternalTabLink>
				</p>
				<p>
					Information for each can also be found in the Vanilla Tweaks section
					of the advancements window.
				</p>
				<VanillaTweaksTable
					header="Datapacks"
					subheader="Decorative/Cosmetic"
					columnHeaders={columnHeaders}
					rows={[
						[
							"armor statues",
							"v2.8.20",
							"Use `/trigger as_help` or title a written book `Statues` to get a book for editing armor stands",
							"It's nice to be able to give armor stands something in their off hand. Also allows creating invisible item frames",
						],
						[
							"custom nether portals",
							"v2.3.17",
							"Portals can be made using crying obsidian and unique shapes. They only require 4+ obsidian",
							"Adds more options for decorating with a portal",
						],
						[
							"more mob heads",
							"v2.17.3",
							"All mobs have a chance of dropping their head upon death. Chances depend on the mob. Unique heads exist for different zombie villagers; colors of parrots, llamas, and cats; and different wither variants exist. Pre-existing heads/skulls still only drop in the normal ways",
							"Another set of interesting trophies",
						],
						[
							"player head drops",
							"v1.1.14",
							"Players drop their head when killed by another player",
							"As long as it doesn't become a problem, player heads are cool trophies",
						],
						[
							"silence mobs",
							"v1.2.8",
							"Mobs can be silenced by naming them `Silence me`, `silence me`, or `silence_me`",
							"As long as it doesn't become a problem, avoids annoying mob noises in certain situations",
						],
						[
							"Wandering Trades",
							"v1.7.13",
							"Wandering traders sell mini versions of blocks as player heads",
							"Adds variety to building and reduces wandering trader murder",
						],
					]}
				/>
				<VanillaTweaksTable
					header="Datapacks"
					subheader="Convenience"
					columnHeaders={columnHeaders}
					rows={[
						[
							"cauldron concrete",
							"v3.0.7",
							"Adds crafting concrete by throwing concrete powder in a cauldron of water",
							"Getting large amounts of concrete is a very menial task",
						],
						[
							"cauldron mud",
							"v1.0.7",
							"Adds crafting mud by throwing dirt in a cauldron of water",
							"Getting large amounts of mud is a very menial task",
						],
						[
							"double shulker shells",
							"v1.3.14",
							"Shulkers always drop 2 shells",
							"It was a request to make shulker boxes easier to acquire",
						],
						[
							"dragon drops",
							"v1.3.14",
							"Ender dragon drops an Elytra and Dragon Egg each time it dies",
							"A very multiplayer friendly way for dragon eggs and elytra to be accessible",
						],
						[
							"painting picker",
							"v1.1.1",
							"Specific paintings can be chosen using a stonecutter",
							"There are a lot of paintings and this makes getting specific ones significantly easier",
						],
						[
							"unlock all recipes",
							"v2.0.15",
							"Immediately unlocks all recipes in the recipe book",
							"I find it more annoying to forget a recipe and look it up than I feel overwhelmed by the number of recipes in the book",
						],
					]}
				/>
				<VanillaTweaksTable
					header="Datapacks"
					subheader="Gameplay Changes"
					columnHeaders={columnHeaders}
					rows={[
						[
							"anti enderman grief",
							"v1.1.14",
							"Endermen no longer pickup and move blocks",
							"We get an unusual amount of blocks moved by endermen",
						],
						[
							"husks drop sand",
							"v1.0.7",
							"Husks have sand added to their drops",
							"There is no good renewable way to get sand",
						],
					]}
				/>
				<VanillaTweaksTable
					header="Datapacks"
					subheader="Informative"
					columnHeaders={columnHeaders}
					rows={[
						[
							"afk display",
							"v1.1.14",
							"Grays out player names if they haven't moved in a while",
							"Rather annoying to message someone who isn't actually at their computer",
						],
						[
							"durability ping",
							"v1.1.15",
							"Gives a noise notification when a tool is low on durability. Turned off by default: configure with `/trigger duraPing`",
							"Gives the option for players that want the notifications",
						],
						[
							"Nether Portal Coords",
							"v1.1.14",
							"Use /trigger nc_inNether or nc_inOverworld to see get calculation of coords to link nether portals",
							"It should make linking portals easier",
						],
						[
							"real time clock",
							"v1.1.14",
							"How long the world has been running in real time can be seen via a function",
							"It's a helpful debug tool to see if the world has been down recently",
						],
						[
							"track raw statistics",
							"v1.7.10",
							"Tracks more extra statistics about player activity",
							"Ditto ^",
						],
						[
							"track statistics",
							"v1.1.16",
							"Tracks extra statistics about player activity",
							"I thought it might be fun to look at sometime",
						],
					]}
				/>
				<VanillaTweaksTable
					header="Crafting"
					subheader="Quality-of-life"
					columnHeaders={columnHeaders}
					rows={[
						[
							"dropper to dispenser",
							vtCraftingVersion,
							"Extra recipes for crafting dispensers. Uses same number of materials, just allows quicker crafting ",
							"Makes crafting many dispensers quicker without changing material requirements",
						],
						[
							"sandstone dyeing",
							vtCraftingVersion,
							"Sand and sandstone can be dyed into red sand and sandstone",
							"There is no good renewable way to get red sand",
						],
						[
							"universal dyeing",
							vtCraftingVersion,
							"Wool, terracotta, and stained glass can be re-dyed different colors",
							"Reusability for dyed items",
						],
						[
							"straight to shapeless",
							vtCraftingVersion,
							"Bread, shulker boxes, paper, etc. are now shapeless recipes",
							"Makes some simple recipes easier to craft",
						],
						[
							"blackstone cobblestone",
							vtCraftingVersion,
							"Most recipes that use cobblestone can now alternatively use blackstone",
							"Probably should just be a feature",
						],
						[
							"powder to glass",
							vtCraftingVersion,
							"Concrete powder can be smelted into stained glass of the same color",
							"If this helps someone, I figured this didn't cause any harm",
						],
					]}
				/>
				<VanillaTweaksTable
					header="Crafting"
					subheader="More-blocks"
					columnHeaders={columnHeaders}
					rows={[
						[
							"more bark",
							vtCraftingVersion,
							"Bark crafting now gives 4 blocks instead of 3",
							"Removes a needless expense",
						],
						[
							"more bricks",
							vtCraftingVersion,
							"Brick block crafting now gives 4 blocks instead of 1",
							"Encourages people to build using brick blocks",
						],
					]}
				/>
				<VanillaTweaksTable
					header="Crafting"
					subheader="Craftables"
					columnHeaders={columnHeaders}
					rows={[
						[
							"craftable gravel",
							vtCraftingVersion,
							"Gravel can be crafted from 4 flint",
							"If someone needs it, here it is",
						],
						[
							"craftable coral blocks 3x3",
							vtCraftingVersion,
							"Coral blocks can be crafted from 9 tubes/fans of the same color",
							"Encourages people to not absolutely destroy coral reefs in warm oceans",
						],
					]}
				/>
			</TitledSubSection>
			<TitledSubSection header="Other Datapacks">
				<DatapackTable datapacks={otherDatapacks} />
			</TitledSubSection>
		</TitledSection>
	);
};

export default memo(Datapacks);
