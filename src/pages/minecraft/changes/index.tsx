import React, { memo } from "react";
import { Forms, MC_PAGES, getPageUrl } from "../../../constants";
import { HeadFC } from "gatsby";
import MiniLayout, {
	BottomRightContainer,
	TopLeftContainer,
} from "../../../components/MiniLayout";
import {
	Header2,
	InlineEmphasis,
	LocalLink,
	Text,
} from "../../../components/SharedStyles";
import ExternalTabLink from "../../../components/ExternalTabLink";

const Changes = () => {
	return (
		<MiniLayout activeLink={MC_PAGES.CHANGES}>
			<TopLeftContainer>
				<Text>
					I want the server to run well and be fun for everyone. I want everyone
					on the server to be able to make suggestions for how the server can be
					better run, what datapacks and mods can make the server run better. I
					already have a couple datapacks that players have suggested and I'm
					open to suggestions on fabric mods to improve game performance or
					patch glitches
				</Text>
			</TopLeftContainer>
			<BottomRightContainer>
				<InlineEmphasis>
					<Header2>
						<ExternalTabLink href={Forms.datapacksHref}>
							Datapack form
						</ExternalTabLink>
					</Header2>
				</InlineEmphasis>
				<InlineEmphasis>
					<Header2>
						<ExternalTabLink href={Forms.modsHref}>Mods form</ExternalTabLink>
					</Header2>
				</InlineEmphasis>
				<InlineEmphasis>
					<Header2>
						<ExternalTabLink href={Forms.underReviewHref}>
							Under review form
						</ExternalTabLink>
					</Header2>
				</InlineEmphasis>
				<InlineEmphasis>
					<Header2>
						<ExternalTabLink href={Forms.otherHref}>
							Other changes form
						</ExternalTabLink>
					</Header2>
				</InlineEmphasis>
				<InlineEmphasis>
					<Header2>
						<LocalLink to={getPageUrl(MC_PAGES.WHITELIST)}></LocalLink>
					</Header2>
				</InlineEmphasis>
			</BottomRightContainer>
		</MiniLayout>
	);
};

export default memo(Changes);

export const Head: HeadFC = () => <title>SD|Minecraft Changes</title>;
