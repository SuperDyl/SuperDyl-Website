import { HeadFC } from "gatsby";
import React, { memo, useMemo } from "react";
import Layout from "../../components/Layout";
import { Forms, MC_PAGES, PAGE_URLS, getPageUrl } from "../../constants";
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
import { LocalLink, Text, TightText } from "../../components/SharedStyles";
import ClipboardLink from "../../components/ClipboardLink";
import EmailLink from "../../components/EmailLink";

const minecraftUrl: string = getPageUrl(MC_PAGES.HOME);
const playUrl: string = getPageUrl(MC_PAGES.PLAY);

const Minecraft = () => {
	const vtDatapacks = "https://vanillatweaks.net/share#XI164f";
	const vtCrafting = "https://vanillatweaks.net/share#2h8GfZ";
	const discordHref = "https://discord.superdyl.net";

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
					url={minecraftUrl}
					isLocal
				>
					<TightText>Chat!</TightText>
					<ExternalTabLink
						href={discordHref}
						overrideParent
					>
						Discord
					</ExternalTabLink>
				</Tile>
				<Tile
					url={minecraftUrl}
					isLocal
				>
					<TightText>Join!</TightText>
					<LocalLink to={minecraftUrl}>Whitelist</LocalLink>
				</Tile>
				<Tile
					url={minecraftUrl}
					isLocal
				>
					<TightText>Suggest!</TightText>
					<LocalLink to={minecraftUrl}>Changes</LocalLink>
				</Tile>
			</TileGrid>
			<HelpfulLinks
				datapacksHref={Forms.datapacksHref}
				modsHref={Forms.modsHref}
				whitelistHref={Forms.whitelistHref}
				otherHref={Forms.otherHref}
				underReviewHref={Forms.underReviewHref}
				discordHref={discordHref}
			/>
			<Rules
				email={<EmailLink />}
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
				email={<EmailLink />}
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
