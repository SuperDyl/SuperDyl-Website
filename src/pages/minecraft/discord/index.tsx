import React, { memo } from "react";
import { MC_PAGES, externalDiscordHref } from "../../../constants";
import { HeadFC } from "gatsby";
import { Header2, Text } from "../../../components/SharedStyles";
import MiniLayout, {
	BottomRightContainer,
	TopLeftContainer,
} from "../../../components/MiniLayout";
import DiscordIcon from "../../../components/icons/DiscordIcon";
import { InlineEmphasis } from "../../../components/SharedStyles";
import ExternalLink from "../../../components/ExternalLink";
import ClipboardLink from "../../../components/ClipboardLink";

const Discord = () => {
	return (
		<MiniLayout activeLink={MC_PAGES.DISCORD}>
			<TopLeftContainer>
				<Text>
					I have provided a discord channel to make playing together easier.
					Feel free to share the link and use the provided text and voice
					channels. Please use the space respectfully and have a good time.
				</Text>
				<Header2>
					Join the{" "}
					<InlineEmphasis>
						<ExternalLink href={externalDiscordHref}>
							Discord channel
						</ExternalLink>
					</InlineEmphasis>
				</Header2>
				<Header2>
					Share{" "}
					<InlineEmphasis>
						<ClipboardLink text={externalDiscordHref}>
							discord.superdyl.net
						</ClipboardLink>
					</InlineEmphasis>
				</Header2>
			</TopLeftContainer>
			<BottomRightContainer>
				<DiscordIcon />
			</BottomRightContainer>
		</MiniLayout>
	);
};

export default memo(Discord);

export const Head: HeadFC = () => <title>SD|Minecraft Discord</title>;
