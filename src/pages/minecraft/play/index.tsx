import React, { memo } from "react";
import { Forms, MC_PAGES, serverIp } from "../../../constants";
import { InlineEmphasis } from "../../../components/SharedStyles";
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
				<p>
					<ClipboardLink text={serverIp}>{serverIp}</ClipboardLink> is a
					survival Minecraft server with only small changes made through
					datapacks. The server is whitelisted—if you would like to join the
					server, please contact me at <EmailLink /> or fill out{" "}
					<ExternalTabLink href={Forms.whitelistHref}>
						this form
					</ExternalTabLink>
					. Please let me know if you are a relative or friend of someone else
					on the server.
				</p>
				<p>
					After you are added to the whitelist, you can add the server ip
					address and join.
				</p>
			</TopLeftContainer>
			<BottomRightContainer>
				<h2>
					Server ip:{" "}
					<InlineEmphasis>
						<ClipboardLink text={serverIp}>{serverIp}</ClipboardLink>
					</InlineEmphasis>
				</h2>
				<h2>
					Minecraft version:{" "}
					<InlineEmphasis>{ALL_MC_VERSIONS[0]}</InlineEmphasis>
				</h2>
			</BottomRightContainer>
		</MiniLayout>
	);
};

export default memo(Play);

export const Head: HeadFC = () => <title>SD|Minecraft Play</title>;
