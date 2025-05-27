import React, { memo } from "react";
import { Forms, MC_PAGES, getPageUrl } from "../../../constants";
import { HeadFC, Link } from "gatsby";
import MiniLayout, {
	BottomRightContainer,
	TopLeftContainer,
} from "../../../components/MiniLayout";
import {
	InlineEmphasis,
} from "../../../components/SharedStyles";
import ExternalTabLink from "../../../components/ExternalTabLink";

const Changes = () => {
	return (
		<MiniLayout activeLink={MC_PAGES.CHANGES}>
			<TopLeftContainer>
				<p>
					I want the server to run well and be fun for everyone. I want everyone
					on the server to be able to make suggestions for how the server can be
					better run, what datapacks and mods can make the server run better. I
					already have a couple datapacks that players have suggested and I'm
					open to suggestions on fabric mods to improve game performance or
					patch glitches
				</p>
			</TopLeftContainer>
			<BottomRightContainer>
				<InlineEmphasis>
					<h2>
						<ExternalTabLink href={Forms.datapacksHref}>
							Datapack form
						</ExternalTabLink>
					</h2>
				</InlineEmphasis>
				<InlineEmphasis>
					<h2>
						<ExternalTabLink href={Forms.modsHref}>Mods form</ExternalTabLink>
					</h2>
				</InlineEmphasis>
				<InlineEmphasis>
					<h2>
						<ExternalTabLink href={Forms.underReviewHref}>
							Under review form
						</ExternalTabLink>
					</h2>
				</InlineEmphasis>
				<InlineEmphasis>
					<h2>
						<ExternalTabLink href={Forms.otherHref}>
							Other changes form
						</ExternalTabLink>
					</h2>
				</InlineEmphasis>
				<InlineEmphasis>
					<h2>
						<Link to={getPageUrl(MC_PAGES.WHITELIST)}></Link>
					</h2>
				</InlineEmphasis>
			</BottomRightContainer>
		</MiniLayout>
	);
};

export default memo(Changes);

export const Head: HeadFC = () => <title>SD|Minecraft Changes</title>;
