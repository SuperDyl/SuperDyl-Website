import { HeadFC } from "gatsby";
import React, { FunctionComponent, memo, useMemo } from "react";
import Layout from "../../components/Layout";
import { Pages } from "../../constants";
import {
	ExternalLink,
	ListItem,
	Text,
	WeakText,
	UnorderedList,
} from "../../components/SharedStyles";
import TitledSection from "../../components/TitledSection";
import TitledSubSection from "../../components/TitledSubSection";

interface DatapackListItemProps {
	children?: JSX.Element | JSX.Element[] | string;
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

	return (
		<Layout activeLink={Pages.MINECRAFT}>
			<TitledSection header={"Helpful Links"}>
				<Text>Minecraft server ip: mc.superdyl.net</Text>
				<Text>
					Discord: <ExternalLink>discord.superdyl.net</ExternalLink>
				</Text>
				<Text>
					Change suggestion forms: {whitelist} {datapacks} {mods} {underReview}{" "}
					{other}
				</Text>
			</TitledSection>
			<TitledSection header="News">
				<TitledSubSection header="August 21">
					<Text>
						The server has been updated to 1.19.2. Players will need to update
						their mods and Minecraft version to play. Of special note:
					</Text>
					<UnorderedList>
						<ListItem>
							Optifine needs a 1.19.2 version for either stand-alone or Forge;
						</ListItem>
						<ListItem>Lithium for Fabric requires 0.8.3 for 1.19.2</ListItem>
						<ListItem>FabricAPI requires 0.60.0+1.19.2</ListItem>
					</UnorderedList>
					<Text>Datapacks have been added:</Text>
					<UnorderedList>
						<ListItem>
							Ender Dragon now drops an Ender Dragon egg and Elytra on death
						</ListItem>
						<ListItem>
							{
								"Tag can now be played. The number of times you've been tagged displays beneath your name"
							}
						</ListItem>
						<ListItem>
							Custom name prefixes should return after a player is afk
						</ListItem>
						<ListItem>
							Wandering traders have a 30% chance to sell a map to the nearest
							Ancient City
						</ListItem>
						<ListItem>
							Nether Portals can be made very small (minimum 4 obsidian)
						</ListItem>
						<ListItem>
							{
								"Equipping armor from the hotbar will swap it with the armor you're wearing. Works with Elytra by the way"
							}
						</ListItem>
					</UnorderedList>
				</TitledSubSection>
				<TitledSubSection header="August 3">
					<Text>
						The server has been updated to 1.19.1. If there is any trouble
						caused by the update, let me know at{" "}
						<ExternalLink href="mailto:SuperDylEnt@gmail.com">
							SuperDylEnt@gmail.com
						</ExternalLink>
						, by text, or by discord. This also means some of the mods have been
						updated along with the vanilla tweaks more mob heads datapack.
					</Text>
				</TitledSubSection>
				<TitledSubSection header="July">
					<Text>
						The armor switch datapack has been removed. An armor-duping exploit
						was found with it, and so it will not return to the server unless
						that gets patched.
					</Text>
				</TitledSubSection>
			</TitledSection>
			<TitledSection header="Rules">
				<Text>
					I want to keep rules brief, so they are more spirit-of-the-law rather
					than word-of-the-law
				</Text>
				<TitledSubSection header="Be considerate of others">
					<Text>
						{
							"If they don't (or probably don't) like something, don't do it to them. Depending on the person and situation, this could include stealing, killing players or their animals, building too close to someone's builds, destroying other player's stuff, etc.This also includes avoiding profanity and pretty much anything crass. Within reason, if someone asks you to stop, you stop."
						}
					</Text>
				</TitledSubSection>
				<TitledSubSection header="The server is whitelisted">
					<Text>
						{
							"Let me know who you want added to the whitelist and I probably will add them to the server whitelist. Just give me their username (spelled correctly with capital/lowercase also correct) and how they're related to you (such as friend, relative, alternate account, etc.) You can email me directly at "
						}
						<ExternalLink href="mailto:SuperDylEnt@gmail.com">
							SuperDylEnt@gmail.com
						</ExternalLink>
						{" or use this "}
						<ExternalLink>whitelist form</ExternalLink>
					</Text>
				</TitledSubSection>
				<TitledSubSection header="Client-side mods/resource packs">
					<Text>
						Client-side mods/resource packs should not give play advantages over
						using plain vanilla Minecraft. If a mod gives a slight play
						advantage, those features are discouraged and I would encourage
						turning those specific options off (for example, minimap mods
						usually show nearby players and mobs and some inventory management
						mods automatically replace armor and totems of undying as it
						breaks).
					</Text>
				</TitledSubSection>
				<TitledSubSection header="Bugs/exploits">
					<Text>
						Bugs/exploits which allow seeing through normally opaque blocks,
						duplicating items/blocks/entities, etc. are not allowed. Bugs
						allowing faster clicking speeds and breaking bedrock are fine. If a
						bug may seem cheaty, ask me about it before using it.
					</Text>
				</TitledSubSection>
				<TitledSubSection header="If rules are broken">
					<Text>
						If rules are broken, they will be encouraged to try reconciling the
						issue with each other first. If the issue isn’t resolved, then I
						will act as arbiter if possible before giving punishments. Taden
						defaults as arbiter if needed if an issue arises between me and
						another player that we cannot resolve on our own.
					</Text>
				</TitledSubSection>
			</TitledSection>
			<TitledSection header="Changes">
				<Text>
					The server is meant to have a mostly vanilla feel, but some datapacks
					have been used to add small features. You can suggest changes you
					would like by messaging me personally or by filling out any of these
					forms: {datapacks}, {mods}, {whitelist}, {other}. This is the current
					list of server changes
				</Text>
				<UnorderedList>
					<DatapackListItem datapack={"Vanilla Tweaks: dragon drops"}>
						The Ender Dragon drops an Ender Dragon Egg and Elytra every time it
						dies
					</DatapackListItem>
				</UnorderedList>
			</TitledSection>
		</Layout>
	);
};

export default memo(Minecraft);

export const Head: HeadFC = () => <title>SuperDyl - Minecraft</title>;
