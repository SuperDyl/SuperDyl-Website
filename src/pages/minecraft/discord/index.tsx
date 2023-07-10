import React, { memo } from "react";
import { MC_PAGES } from "../../../constants";
import { HeadFC } from "gatsby";
import { StyledLayout } from "./styles";
import { Text } from "../../../components/SharedStyles";

const Discord = () => {
	return (
		<StyledLayout activeLink={MC_PAGES.DISCORD}>
			<Text></Text>
		</StyledLayout>
	);
};

export default memo(Discord);

export const Head: HeadFC = () => <title>SD|Minecraft Discord</title>;
