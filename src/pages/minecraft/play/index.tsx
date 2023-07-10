import React, { memo } from "react";
import { Forms, MC_PAGES, serverIp } from "../../../constants";
import { Header2, Text } from "../../../components/SharedStyles";
import { StyledClipboardLink, StyledHeader2 } from "./styles";
import { HeadFC } from "gatsby";
import ClipboardLink from "../../../components/ClipboardLink";
import { ALL_MC_VERSIONS } from "../../../mods";
import ExternalTabLink from "../../../components/ExternalTabLink";
import EmailLink from "../../../components/EmailLink";
import MiniLayout, {
	BottomRightContainer,
	TopLeftContainer,
} from "../../../components/MiniLayout";

const Play = () => {
	return (
		<MiniLayout activeLink={MC_PAGES.PLAY}>
			<TopLeftContainer>
				<Text>
					<ClipboardLink text={serverIp}>{serverIp}</ClipboardLink> is a
					survival Minecraft server with only small changes made through
					datapacks. The server is whitelisted—if you would like to join the
					server, please contact me at <EmailLink /> or fill out{" "}
					<ExternalTabLink href={Forms.whitelistHref}>
						this form
					</ExternalTabLink>
					. Please let me know if you are a relative or friend of someone else
					on the server.
				</Text>
				<Text>
					After you are added to the whitelist, you can add the server ip
					address and join.
				</Text>
			</TopLeftContainer>
			<BottomRightContainer>
				<Header2>
					Server ip:{" "}
					<StyledClipboardLink text={serverIp}>{serverIp}</StyledClipboardLink>
				</Header2>
				<Header2>
					Minecraft version: <StyledHeader2>{ALL_MC_VERSIONS[0]}</StyledHeader2>
				</Header2>
			</BottomRightContainer>
		</MiniLayout>
	);
};

export default memo(Play);

export const Head: HeadFC = () => <title>SD|Minecraft Play</title>;
