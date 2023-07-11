import React, { memo, FunctionComponent } from "react";
import TileGrid from "../components/TileGrid";
import Tile from "../components/Tile";
import { TightText } from "../components/SharedStyles";
import ClipboardLink from "../components/ClipboardLink";
import ExternalTabLink from "../components/ExternalTabLink";
import { Forms, MC_PAGES, externalDiscordHref, getPageUrl } from "../constants";

const playUrl: string = getPageUrl(MC_PAGES.PLAY);
const discordUrl: string = getPageUrl(MC_PAGES.DISCORD);
const whitelistUrl: string = getPageUrl(MC_PAGES.WHITELIST);
const changesUrl: string = getPageUrl(MC_PAGES.CHANGES);

interface HelpfulLinksProps {
	className?: string;
}

const HelpfulLinks: FunctionComponent<HelpfulLinksProps> = ({ className }) => {
	return (
		<TileGrid className={className}>
			<Tile
				url={playUrl}
				isLocal
			>
				<TightText>Play!</TightText>
				<ClipboardLink text={"mc.superdyl.net"}>mc.superdyl.net</ClipboardLink>
			</Tile>
			<Tile
				url={discordUrl}
				isLocal
			>
				<TightText>Chat!</TightText>
				<TightText>
					<ExternalTabLink
						href={externalDiscordHref}
						overrideParent
					>
						Discord
					</ExternalTabLink>
				</TightText>
			</Tile>
			<Tile
				url={whitelistUrl}
				isLocal
			>
				<TightText>Join!</TightText>
				<TightText>
					<ExternalTabLink
						href={Forms.whitelistHref}
						overrideParent
					>
						Whitelist
					</ExternalTabLink>
				</TightText>
			</Tile>
			<Tile
				url={changesUrl}
				isLocal
			>
				<TightText>Suggest!</TightText>
				<TightText>
					<ExternalTabLink
						href={Forms.otherHref}
						overrideParent
					>
						Changes
					</ExternalTabLink>
				</TightText>
			</Tile>
		</TileGrid>
	);
};

export default memo(HelpfulLinks);
