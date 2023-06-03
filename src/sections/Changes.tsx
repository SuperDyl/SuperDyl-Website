import React, { FunctionComponent, memo, useMemo } from "react";
import {
	ListItem,
	UnorderedList,
	WeakText,
	Text,
} from "../components/SharedStyles";
import TitledSection from "../components/TitledSection";
import { ExternalTabLink } from "../components/ExternalTabLink";

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

interface ChangesProps {
	datapacksHref: string;
	modsHref: string;
	whitelistHref: string;
	otherHref: string;
}

const Changes: FunctionComponent<ChangesProps> = ({
	datapacksHref,
	modsHref,
	whitelistHref,
	otherHref,
}) => {
	const datapacks = useMemo(
		() => <ExternalTabLink href={datapacksHref}>datapacks</ExternalTabLink>,
		[]
	);
	const mods = useMemo(
		() => <ExternalTabLink href={modsHref}>mods</ExternalTabLink>,
		[]
	);
	const whitelist = useMemo(
		() => <ExternalTabLink href={whitelistHref}>whitelist</ExternalTabLink>,
		[]
	);
	const other = useMemo(
		() => <ExternalTabLink href={otherHref}>other</ExternalTabLink>,
		[]
	);

	return (
		<TitledSection header="Changes">
			<Text>
				The server is meant to have a mostly vanilla feel, but some datapacks
				have been used to add small features. You can suggest changes you would
				like by messaging me personally or by filling out any of these forms:{" "}
				{datapacks}, {mods}, {whitelist}, {other}. This is the current list of
				server changes
			</Text>
			<UnorderedList>
				<DatapackListItem datapack="Vanilla Tweaks: dragon drops">
					The Ender Dragon drops an Ender Dragon Egg and Elytra every time it
					dies
				</DatapackListItem>
				<DatapackListItem datapack="Vanilla Tweaks: tag">
					A game of tag now exists on the server. Whoever is It will have a red
					name and a special name tag. They can tag by hitting another player,
					transferring the tag and yellow name to that player. They cannot tag
					afk players. The number of times someone has been tagged is displayed
					below their name
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
					REMOVED: Attempting to equip armor while armor is already equipped in
					that slot swaps the equipped armor with the held armor. Side effect:
					you cannot attack or mine while holding armor
				</DatapackListItem>
				<DatapackListItem datapack="item frame color">
					Item frames can be recolored by shift clicking them with dye. Undo the
					color by shift clicking with a water bucket or breaking the item frame
				</DatapackListItem>
				<DatapackListItem datapack="invisible item frames">
					Item frames can be made invisible by shift clicking them with shears.
					Includes a set of hidden advancements. Items in invisible frames can
					only be rotated if the player is sneaking.
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
					Armor stands can be edited. Use `/trigger as_help` to get a book which
					edits the nearest armor stand/item frame. Item frames can also be made
					invisible and rotation locked, though invisible item frames have more
					support by shift clicking them with shears
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
					depend on the mob. Unique heads exist for different zombie villagers;
					colors of parrots, llamas, and cats; and different wither variants
					exist. Pre-existing heads/skulls still only drop in the normal ways
				</DatapackListItem>
				<DatapackListItem datapack="Vanilla Tweaks: real world clock">
					How long the server has been up in real world time can be viewed using
					a function
				</DatapackListItem>
				<DatapackListItem datapack="Vanilla Tweaks: custom nether portals">
					Nether portals can be created using crying obsidian and in any shape
					as long as you use a minimum of 4 obsidian blocks for the frame
				</DatapackListItem>
				<DatapackListItem datapack="Vanilla Tweaks: dropper to dispenser">
					Extra recipes for crafting dispensers. Uses same number of materials,
					just allows quicker crafting
				</DatapackListItem>
				<DatapackListItem datapack="Vanilla Tweaks: straight to shapeless">
					Bread, shulker boxes, paper, etc. are now shapeless recipes
				</DatapackListItem>
				<DatapackListItem datapack="Vanilla Tweaks: universal dyeing">
					Wool, terracotta, and stained glass can be re-dyed different colors
				</DatapackListItem>
				<DatapackListItem datapack="Vanilla Tweaks: blackstone cobblestone">
					Most recipes that use cobblestone can now alternatively use blackstone
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
	);
};

export default memo(Changes);
