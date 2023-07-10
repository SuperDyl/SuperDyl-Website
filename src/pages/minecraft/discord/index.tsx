import React, { memo } from "react";
import { MC_PAGES } from "../../../constants";
import { HeadFC } from "gatsby";
import { Text } from "../../../components/SharedStyles";
import MiniLayout, {
	BottomRightContainer,
	TopLeftContainer,
} from "../../../components/MiniLayout";
import DiscordIcon from "../../../components/icons/DiscordIcon";

const Discord = () => {
	return (
		<MiniLayout activeLink={MC_PAGES.DISCORD}>
			<TopLeftContainer>
				<Text>Here's some text about Discord</Text>
			</TopLeftContainer>
			<BottomRightContainer>
				<DiscordIcon />
			</BottomRightContainer>
		</MiniLayout>
	);
};

export default memo(Discord);

export const Head: HeadFC = () => <title>SD|Minecraft Discord</title>;
