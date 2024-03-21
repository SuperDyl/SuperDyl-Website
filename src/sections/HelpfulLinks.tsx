import React, { memo, FunctionComponent } from "react";
import TileGrid from "../components/TileGrid";
import { Tile, TileBottom, TileTop } from "../components/Tile";
import { TightText } from "../components/SharedStyles";
import ClipboardLink from "../components/ClipboardLink";
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
			<Tile>
				<TileTop
					url={playUrl}
					isLocal={true}
				>
					<TightText>Play!</TightText>
				</TileTop>
				<TileBottom>
					<ClipboardLink text={"mc.superdyl.net"}>
						mc.superdyl.net
					</ClipboardLink>
				</TileBottom>
			</Tile>
			<Tile>
				<TileTop
					url={discordUrl}
					isLocal
				>
					<TightText>Chat!</TightText>
				</TileTop>
				<TileBottom
					url={externalDiscordHref}
					isExternal
				>
					<TightText>Discord</TightText>
				</TileBottom>
			</Tile>
			<Tile>
				<TileTop
					url={whitelistUrl}
					isLocal
				>
					<TightText>Join!</TightText>
				</TileTop>
				<TileBottom
					url={Forms.whitelistHref}
					isExternal
				>
					<TightText>Whitelist</TightText>
				</TileBottom>
			</Tile>
			<Tile>
				<TileTop
					url={changesUrl}
					isLocal
				>
					<TightText>Suggest!</TightText>
				</TileTop>
				<TileBottom
					url={Forms.otherHref}
					isExternal
				>
					<TightText>Changes</TightText>
				</TileBottom>
			</Tile>
		</TileGrid>
	);
};

export default memo(HelpfulLinks);
