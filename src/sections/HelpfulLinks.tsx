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
				topText="Play!"
				url={playUrl}
				isLocal
			>
				<ClipboardLink text={"mc.superdyl.net"}>mc.superdyl.net</ClipboardLink>
			</Tile>
			<Tile
				topText="Chat!"
				url={discordUrl}
				isLocal
			>
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
				topText="Join!"
				url={whitelistUrl}
				isLocal
			>
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
				topText="Suggest!"
				url={changesUrl}
				isLocal
			>
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
