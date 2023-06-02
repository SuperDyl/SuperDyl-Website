import React, { FunctionComponent, memo } from "react";
import { Text } from "../components/SharedStyles";
import TitledSection from "../components/TitledSection";
import TitledSubSection from "../components/TitledSubSection";
import VanillaTweaksTable from "../components/VanillaTweaksTable";
import ExternalTabLink from "../components/ExternalTabLink";
import DatapackTable from "../components/DatapackTable";
import { Websites } from "../constants";

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
				<Text>
					Download links:{" "}
					<ExternalTabLink href={vtDatapacksHref}>Datapacks</ExternalTabLink> |{" "}
					<ExternalTabLink href={vtCraftingHref}>Crafting</ExternalTabLink>
				</Text>
				<Text>
					<ExternalTabLink href={suggestChangesHref}>
						Suggest datapack changes
					</ExternalTabLink>
				</Text>
				<Text>
					Information for each can also be found in the Vanilla Tweaks section
					of the advancements window.
				</Text>
				<VanillaTweaksTable
					header="Datapacks"
					subheader="Survival"
					columnHeaders={columnHeaders}
					rows={[
						[
							"armor statues",
							"v2.8.4",
							"Use `/trigger as_help` or title a written book `Statues` to get a book for editing armor stands",
							"It's nice to be able to give armor stands something in their off hand. Also allows creating invisible item frames",
						],
						[
							"unlock all recipes",
							"v2.0.4",
							"Immediately unlocks all recipes in the recipe book",
							"I find it more annoying to forget a recipe and look it up than I feel overwhelmed by the number of recipes in the book",
						],
						[
							"afk display",
							"v1.1.3",
							"Grays out player names if they haven't moved in a while",
							"Rather annoying to message someone who isn't actually at their computer",
						],
						[
							"custom nether portals",
							"v2.3.6",
							"Portals can be made using crying obsidian and unique shapes. They only require 4+ obsidian",
							"Adds more options for decorating with a portal",
						],
						[
							"durability ping",
							"v1.1.3",
							"Gives a noise notification when a tool is low on durability. Turned off by default: configure with `/trigger duraPing`",
							"Gives the option for players that want the notifications",
						],
						[
							"cauldron concrete",
							"v2.0.6",
							"Allows crafting concrete by throwing concrete powder in a cauldron of water",
							"Getting large amounts of concrete is a very menial task",
						],
						[
							"track raw statistics",
							"v1.5.3",
							"Tracks more extra statistics about player activity",
							"Ditto ^",
						],
						[
							"track statistics",
							"v1.1.4",
							"Tracks extra statistics about player activity",
							"I thought it might be fun to look at sometime",
						],
						[
							"Nether Portal Coords",
							"v1.1.3",
							"Use /trigger nc_inNether or nc_inOverworld to see get calculation of coords to link nether portals",
							"It should make linking portals easier",
						],
						[
							"real time clock",
							"v1.1.3",
							"How long the world has been running in real time can be seen via a function",
							"It's a helpful debug tool to see if the world has been down recently",
						],
					]}
				/>
				<VanillaTweaksTable
					header="Datapacks"
					subheader="Items"
					columnHeaders={columnHeaders}
					rows={[
						[
							"player head drops",
							"v1.1.3",
							"Players drop their head when killed by another player",
							"As long as it doesn't become a problem, player heads are cool trophies",
						],
					]}
				/>
				<VanillaTweaksTable
					header="Datapacks"
					subheader="Mobs"
					columnHeaders={columnHeaders}
					rows={[
						[
							"dragon drops",
							"v1.3.3",
							"Ender dragon drops an Elytra and Dragon Egg each time it dies",
							"A very multiplayer friendly way for dragon eggs and elytra to be accessible",
						],
						[
							"more mob heads",
							"v2.10.1",
							"All mobs have a chance of dropping their head upon death. Chances depend on the mob. Unique heads exist for different zombie villagers; colors of parrots, llamas, and cats; and different wither variants exist. Pre-existing heads/skulls still only drop in the normal ways",
							"Another set of interesting trophies",
						],
						[
							"silence mobs",
							"v1.1.3",
							"Mobs can be silenced by naming them `Silence me`, `silence me`, or `silence_me`",
							"As long as it doesn't become a problem, avoids annoying mob noises in certain situations",
						],
						[
							"double shulker shells",
							"v1.3.3",
							"Shulkers always drop 2 shells",
							"It was a request to make shulker boxes easier to acquire",
						],
					]}
				/>
				<VanillaTweaksTable
					header="Datapacks"
					subheader="Hermitcraft"
					columnHeaders={columnHeaders}
					rows={[["tag", "v2.1.3", "A game of tag!", "It seemed fun"]]}
				/>
				<VanillaTweaksTable
					header="Crafting"
					subheader="Quality-of-life"
					columnHeaders={columnHeaders}
					rows={[
						[
							"dropper to dispenser",
							"v1.19",
							"Extra recipes for crafting dispensers. Uses same number of materials, just allows quicker crafting ",
							"Makes crafting many dispensers quicker without changing material requirements",
						],
						[
							"straight to shapeless",
							"v1.19",
							"Bread, shulker boxes, paper, etc. are now shapeless recipes",
							"Makes some simple recipes easier to craft",
						],
						[
							"universal dyeing",
							"v1.19",
							"Wool, terracotta, and stained glass can be re-dyed different colors",
							"Reusability for dyed items",
						],
						[
							"blackstone cobblestone",
							"v1.19",
							"Most recipes that use cobblestone can now alternatively use blackstone",
							"Probably should just be a feature",
						],
						[
							"powder to glass",
							"v1.19",
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
							"v1.19",
							"Bark crafting now gives 4 blocks instead of 3",
							"Removes a needless expense",
						],
						[
							"more bricks",
							"v1.19",
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
							"craftable coral blocks 3x3",
							"v1.19",
							"Coral blocks can be crafted from 9 tubes/fans of the same color",
							"Encourages people to not absolutely destroy coral reefs in warm oceans",
						],
						[
							"craftable gravel",
							"v1.19",
							"Gravel can be crafted from 4 flint",
							"If someone needs it, here it is",
						],
						[
							"craftable bundles rabbit hide",
							"v1.19",
							"Bundles can be crafted using rabbit hide, string, and sticks",
							"Bundles sound fun, I'd like to try them out in their current state",
						],
					]}
				/>
			</TitledSubSection>
			<TitledSubSection header="Other Datapacks">
				<DatapackTable
					datapacks={[
						{
							datapackName: "Better Compass",
							downloadLinks: [
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
							],
							changes: "Compasses now show coordinates and cardinal direction",
							reasoning: "Adds a good use to compasses",
						},
						{
							datapackName: "Better Deepslate Stonecutting",
							downloadLinks: [
								{
									siteName: Websites.PlanetMC,
									url: "https://www.planetminecraft.com/data-pack/better-deepslate-stonecutting/",
								},
							],
							author: "Xigzagamer",
							authorLinks: [
								{
									siteName: Websites.PlanetMC,
									url: "https://www.planetminecraft.com/member/xigzagamer/",
								},
							],
							changes:
								"Gives deepslate the same stonecutter recipes as cobbled deepslate",
							reasoning: "I got tired of mining these two resources separate",
						},
						{
							datapackName: "Item Frame Color",
							version: "1.4",
							downloadLinks: [
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
							downloadLinks: [
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
							version: "2.2",
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
							reasoning:
								"Very vanilla feeling way to allow invisible item frames",
						},
						{
							datapackName: "Wandering Cities",
							downloadLinks: [
								{
									siteName: Websites.PlanetMC,
									url: "https://www.planetminecraft.com/data-pack/wandering-cities-trader-sells-city-maps/",
								},
							],
							author: "Aceplante",
							authorLinks: [
								{
									siteName: Websites.PlanetMC,
									url: "https://www.planetminecraft.com/data-pack/wandering-cities-trader-sells-city-maps/",
								},
							],
							changes:
								"Wandering traders have a chance to sell maps to the nearest Ancient City. 30% of wandering traders will sell an 'Ancient City Map Crate'",
							reasoning: "Adds an easier way to find Ancient Cities",
						},
					]}
				/>
			</TitledSubSection>
		</TitledSection>
	);
};

export default memo(Datapacks);
