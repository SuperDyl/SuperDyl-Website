import { HeadFC } from "gatsby";
import React, { memo, useMemo } from "react";
import Layout from "../../components/Layout";
import {
	Forms,
	MC_PAGES,
	externalDiscordHref,
	getPageUrl,
} from "../../constants";
import HelpfulLinks from "../../sections/HelpfulLinks";
import News from "../../sections/News";
import Rules from "../../sections/Rules";
import Changes from "../../sections/Changes";
import UnderReview from "../../sections/UnderReview";
import RejectedChanges from "../../sections/RejectedChanges";
import Datapacks from "../../sections/Datapacks";
import ServerMods from "../../sections/ServerMods";
import ClientMods from "../../sections/ClientMods";
import ExternalTabLink from "../../components/ExternalTabLink";
import Tile from "../../components/Tile";
import TileGrid from "../../components/TileGrid";
import { LocalLink, TightText } from "../../components/SharedStyles";
import ClipboardLink from "../../components/ClipboardLink";

const minecraftUrl: string = getPageUrl(MC_PAGES.HOME);
const playUrl: string = getPageUrl(MC_PAGES.PLAY);
const discordUrl: string = getPageUrl(MC_PAGES.DISCORD);
const whitelistUrl: string = getPageUrl(MC_PAGES.WHITELIST);
const changesUrl: string = getPageUrl(MC_PAGES.CHANGES);

const emailAddress: string = "SuperDylEnt@gmail.com";

const vtDatapacks = "https://vanillatweaks.net/share#XI164f";
const vtCrafting = "https://vanillatweaks.net/share#2h8GfZ";

const Minecraft = () => {
	return (
		<Layout activeLink={MC_PAGES.HOME}>
			<News teaser={true} />
			<TileGrid>
				<Tile
					url={playUrl}
					isLocal
				>
					<TightText>Play!</TightText>
					<ClipboardLink text={"mc.superdyl.net"}>
						mc.superdyl.net
					</ClipboardLink>
				</Tile>
				<Tile
					url={discordUrl}
					isLocal
				>
					<TightText>Chat!</TightText>
					<ExternalTabLink
						href={externalDiscordHref}
						overrideParent
					>
						Discord
					</ExternalTabLink>
				</Tile>
				<Tile
					url={whitelistUrl}
					isLocal
				>
					<TightText>Join!</TightText>
					<LocalLink to={Forms.whitelistHref}>Whitelist</LocalLink>
				</Tile>
				<Tile
					url={changesUrl}
					isLocal
				>
					<TightText>Suggest!</TightText>
					<LocalLink to={Forms.otherHref}>Changes</LocalLink>
				</Tile>
			</TileGrid>
			<HelpfulLinks
				datapacksHref={Forms.datapacksHref}
				modsHref={Forms.modsHref}
				whitelistHref={Forms.whitelistHref}
				otherHref={Forms.otherHref}
				underReviewHref={Forms.underReviewHref}
				discordHref={externalDiscordHref}
			/>
			<Rules
				email={emailAddress}
				whitelistHref={Forms.whitelistHref}
			/>
			<Changes
				datapacksHref={Forms.datapacksHref}
				modsHref={Forms.modsHref}
				whitelistHref={Forms.whitelistHref}
				otherHref={Forms.otherHref}
			/>
			<UnderReview
				underReviewHref={Forms.underReviewHref}
				email={emailAddress}
			/>
			<RejectedChanges />
			<Datapacks
				vtDatapacksHref={vtDatapacks}
				vtCraftingHref={vtCrafting}
				suggestDatapackChangesHref={Forms.datapacksHref}
			/>
			<ServerMods modsHref={Forms.modsHref} />
			<ClientMods />
		</Layout>
	);
};

export default memo(Minecraft);

export const Head: HeadFC = () => <title>SuperDyl - Minecraft</title>;
