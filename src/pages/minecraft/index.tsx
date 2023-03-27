import { HeadFC } from "gatsby";
import React, { FunctionComponent, memo, useMemo } from "react";
import Layout from "../../components/Layout";
import { Forms, Pages } from "../../constants";
import {
	ExternalLink,
	ListItem,
	Text,
	WeakText,
	UnorderedList,
} from "../../components/SharedStyles";
import TitledSection from "../../components/TitledSection";
import TitledSubSection from "../../components/TitledSubSection";
import VanillaTweaksTable from "../../components/VanillaTweaksTable";
import HelpfulLinks from "../../sections/HelpfulLinks";
import News from "../../sections/News";
import Rules from "../../sections/Rules";

interface DatapackListItemProps {
	children?: JSX.Element | JSX.Element[] | string | string[];
	className?: string;
	datapack: string;
}

const DatapackListItem: FunctionComponent<DatapackListItemProps> = ({
	children,
	className,
	datapack,
}) => {
	return (
		<ListItem className={className}>
			{children}

			<WeakText>
				{" ("}
				{datapack}
				{")"}
			</WeakText>
		</ListItem>
	);
};

const Minecraft = () => {
	const datapacks = useMemo(() => <ExternalLink>datapacks</ExternalLink>, []);
	const mods = useMemo(() => <ExternalLink>mods</ExternalLink>, []);
	const whitelist = useMemo(() => <ExternalLink>whitelist</ExternalLink>, []);
	const other = useMemo(() => <ExternalLink>other</ExternalLink>, []);
	const underReview = useMemo(
		() => <ExternalLink>changes under review</ExternalLink>,
		[]
	);

	const email = useMemo(
		() => (
			<ExternalLink href="mailto:SuperDylEnt@gmail.com">
				SuperDylEnt@gmail.com
			</ExternalLink>
		),
		[]
	);

	const columnHeaders = ["Pack", "Version", "Changes", "Reasoning"];

	return (
		<Layout activeLink={Pages.MINECRAFT}>
			<HelpfulLinks
				datapacksHref={Forms.datapacksHref}
				modsHref={Forms.modsHref}
				whitelistHref={Forms.whitelistHref}
				otherHref={Forms.otherHref}
				underReviewHref={Forms.underReviewHref}
			/>
			<News email={email} />
			<Rules email={email} />
			<TitledSection header="Changes">
				<Text>
					The server is meant to have a mostly vanilla feel, but some datapacks
					have been used to add small features. You can suggest changes you
					would like by messaging me personally or by filling out any of these
					forms: {datapacks}, {mods}, {whitelist}, {other}. This is the current
					list of server changes
				</Text>
				<UnorderedList>
					<DatapackListItem datapack="Vanilla Tweaks: dragon drops">
						The Ender Dragon drops an Ender Dragon Egg and Elytra every time it
						dies
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: tag">
						A game of tag now exists on the server. Whoever is It will have a
						red name and a special name tag. They can tag by hitting another
						player, transferring the tag and yellow name to that player. They
						cannot tag afk players. The number of times someone has been tagged
						is displayed below their name
					</DatapackListItem>
					<DatapackListItem datapack="Ancient City Map Trader">
						Wandering Traders have a 30% chance to sell maps to the nearest
						Ancient City
					</DatapackListItem>
					<DatapackListItem datapack="take a seat">
						The player can sit anywhere by using `/trigger sit` and then right
						clicking the block at their feet
					</DatapackListItem>
					<DatapackListItem datapack="quick armor swapper">
						REMOVED: Attempting to equip armor while armor is already equipped
						in that slot swaps the equipped armor with the held armor. Side
						effect: you cannot attack or mine while holding armor
					</DatapackListItem>
					<DatapackListItem datapack="item frame color">
						Item frames can be recolored by shift clicking them with dye. Undo
						the color by shift clicking with a water bucket or breaking the item
						frame
					</DatapackListItem>
					<DatapackListItem datapack="invisible item frames">
						Item frames can be made invisible by shift clicking them with
						shears. Includes a set of hidden advancements. Items in invisible
						frames can only be rotated if the player is sneaking.
						{
							" Some of these settings don't apply if the frames are made invisible using a `Statues` book. "
						}
						Undo by breaking the item frame
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: unlock all recipes">
						All recipes are unlocked for players immediately
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: afk display">
						afk players have a grayed out name after 5 minutes of inactivity
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: cauldron concrete">
						Concrete can be crafted by throwing it in a cauldron
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: armor statues">
						Armor stands can be edited. Use `/trigger as_help` to get a book
						which edits the nearest armor stand/item frame. Item frames can also
						be made invisible and rotation locked, though invisible item frames
						have more support by shift clicking them with shears
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: durability ping">
						{
							"The game can give the player a notice if they're tool or armor is at 10% durability. "
						}
						{"Off by default, configure with `/trigger duraping`"}
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: player head drops">
						{"A player's head drops if another player kills them"}
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: silence mobs">
						Mobs can be silenced by naming them `Silence me`, `silence me`, or
						`silence_me`
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: more mob heads">
						All mobs have a chance of dropping their head upon death. Chances
						depend on the mob. Unique heads exist for different zombie
						villagers; colors of parrots, llamas, and cats; and different wither
						variants exist. Pre-existing heads/skulls still only drop in the
						normal ways
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: real world clock">
						How long the server has been up in real world time can be viewed
						using a function
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: custom nether portals">
						Nether portals can be created using crying obsidian and in any shape
						as long as you use a minimum of 4 obsidian blocks for the frame
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: dropper to dispenser">
						Extra recipes for crafting dispensers. Uses same number of
						materials, just allows quicker crafting
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: straight to shapeless">
						Bread, shulker boxes, paper, etc. are now shapeless recipes
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: universal dyeing">
						Wool, terracotta, and stained glass can be re-dyed different colors
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: blackstone cobblestone">
						Most recipes that use cobblestone can now alternatively use
						blackstone
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: powder to glass">
						Concrete powder can be smelted into stained glass of the same color
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: more bark">
						Bark crafting now gives 4 blocks instead of 3
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: more bricks">
						Brick block crafting now gives 4 blocks instead of 1
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: craftable coral blocks 3x3">
						Coral blocks can be crafted from 9 tubes/fans of the same color
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: craftable gravel">
						Gravel can be crafted from 4 flint
					</DatapackListItem>
					<DatapackListItem datapack="Vanilla Tweaks: craftable bundles rabbit hide">
						Bundles can be crafted using rabbit hide, string, and sticks
					</DatapackListItem>
					<DatapackListItem datapack="such as alternate current">
						Some mods
					</DatapackListItem>
				</UnorderedList>
			</TitledSection>
			<TitledSection header="Changes Under Review">
				<Text>
					To give feedback specific to this section, please use the form{" "}
					{underReview} or email me at {email} and mention the title of the
					change
					{"you're"} giving feedback on. I will consider all feedback on these
					potential changes before making a final decision.
				</Text>
				<TitledSubSection header="Vanilla Tweaks Custom Nether Portals">
					<Text>
						Decided: Default configuration forces nether portals to use at least
						10 obsidian, giving no unfair advantage to using this datapack.
						After the Ender Dragon fight, {"I'll"} consider allowing smaller
						nether portals in the config settings. Allowing vanilla tweaks
						custom nether portals before the ender dragon fight ({"I'm"}{" "}
						thinking of not allowing custom shapes until after the ender dragon,
						but allowing crying obsidian before).
					</Text>
				</TitledSubSection>
			</TitledSection>
			<TitledSection header="Rejected Changes">
				<Text>
					These are (unless otherwise specified) my current stance against
					changes I have rejected:
				</Text>
				<TitledSubSection header="Hack Clients">
					<Text>Hack clients are not allowed</Text>
				</TitledSubSection>
				<TitledSubSection header="Operators, Moderators, Administrators">
					<Text>
						Operator status is not being given to other players. This decision
						may be reviewed if later there are lots of players often using the
						server and there are good players to trust with operator powers
					</Text>
					<Text>
						Further, ownership of the server will not be switching hands at any
						time. Running a server is not just having access to the admin
						console, it requires keeping the server up to date, managing
						backups, reviewing changes, and keeping peace between players. It
						also costs money to run.
					</Text>
				</TitledSubSection>
				<TitledSubSection header="Large Phantoms (Vanilla Tweaks)">
					<Text>
						Large Phantoms from Vanilla Tweaks will not be added anytime soon.
						The main problem with the pack is that phantoms spawn for all
						players in the world if at least one player {"hasn't"} slept for a
						while. I {"don't"} want players that sleep consistently to be
						punished for other players choosing to not sleep.
					</Text>
				</TitledSubSection>
			</TitledSection>
			<TitledSection header="Datapacks">
				<TitledSubSection header="Vanilla Tweaks">
					<Text>
						Download links: <ExternalLink>Datapacks</ExternalLink> |{" "}
						<ExternalLink>Crafting</ExternalLink>
					</Text>
					<Text>
						<ExternalLink>Suggest datapack changes</ExternalLink>
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
			</TitledSection>
		</Layout>
	);
};

export default memo(Minecraft);

export const Head: HeadFC = () => <title>SuperDyl - Minecraft</title>;
