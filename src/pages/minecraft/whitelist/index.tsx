import React, { memo } from "react";
import { Forms, MC_PAGES } from "../../../constants";
import { HeadFC } from "gatsby";
import MiniLayout, {
	BottomRightContainer,
	TopLeftContainer,
} from "../../../components/MiniLayout";
import { InlineEmphasis } from "../../../components/SharedStyles";
import EmailLink from "../../../components/EmailLink";
import ExternalTabLink from "../../../components/ExternalTabLink";

const Whitelist = () => {
	return (
		<MiniLayout activeLink={MC_PAGES.WHITELIST}>
			<TopLeftContainer>
				<p>
					The Minecraft server is private, or whitelisted. This decreases issues
					with bad actors. This also means I have a line of communication with
					everyone on the server, so it's easier to inform people of news or
					talk to someone when there's a problem.
				</p>
				<p>
					I'm very lenient on who we add to the server. If they are willing to
					follow the rules and I have a way to communicate with them, then they
					can join. I just need to know their username and their relation to you
					(friend, sibling, cousin, a second account you own, etc.)
				</p>
			</TopLeftContainer>
			<BottomRightContainer>
				<h2>
					Fill out this{" "}
					<InlineEmphasis>
						<ExternalTabLink href={Forms.whitelistHref}>form</ExternalTabLink>
					</InlineEmphasis>
				</h2>
				<h2>
					Email:{" "}
					<InlineEmphasis>
						<EmailLink />
					</InlineEmphasis>
				</h2>
			</BottomRightContainer>
		</MiniLayout>
	);
};

export default memo(Whitelist);

export const Head: HeadFC = () => <title>SD|Minecraft Whitelist</title>;
