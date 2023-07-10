import React, { memo } from "react";
import { Forms, MC_PAGES } from "../../../constants";
import { HeadFC } from "gatsby";
import MiniLayout, {
	BottomRightContainer,
	TopLeftContainer,
} from "../../../components/MiniLayout";
import { Header2, Text } from "../../../components/SharedStyles";
import { InlineEmphasis } from "../../../components/SharedStyles";
import EmailLink from "../../../components/EmailLink";
import ExternalLink from "../../../components/ExternalLink";

const Whitelist = () => {
	return (
		<MiniLayout activeLink={MC_PAGES.WHITELIST}>
			<TopLeftContainer>
				<Text>
					The Minecraft server is private, or whitelisted. This decreases issues
					with bad actors. This also means I have a line of communication with
					everyone on the server, so it's easier to inform people of news or
					talk to someone when there's a problem.
				</Text>
				<Text>
					I'm very lenient on who we add to the server. If they are willing to
					follow the rules and I have a way to communicate with them, then they
					can join. I just need to know their username and their relation to you
					(friend, sibling, cousin, a second account you own, etc.)
				</Text>
			</TopLeftContainer>
			<BottomRightContainer>
				<Header2>
					Fill out this{" "}
					<InlineEmphasis>
						<ExternalLink href={Forms.whitelistHref}>form</ExternalLink>
					</InlineEmphasis>
				</Header2>
				<Header2>
					Email me at{" "}
					<InlineEmphasis>
						<EmailLink />
					</InlineEmphasis>
				</Header2>
			</BottomRightContainer>
		</MiniLayout>
	);
};

export default memo(Whitelist);

export const Head: HeadFC = () => <title>SD|Minecraft Whitelist</title>;
