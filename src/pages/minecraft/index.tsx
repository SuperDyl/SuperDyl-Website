import { HeadFC } from "gatsby";
import React, { memo } from "react";
import Layout from "../../components/Layout";
import { Pages } from "../../constants";
import { ExternalLink, Text } from "../../components/SharedStyles";
import TitledSection from "../../components/TitledSection";

const Minecraft = () => {
	return (
		<Layout activeLink={Pages.MINECRAFT}>
			<TitledSection header={"Helpful Links"}>
				<Text>Minecraft server ip: mc.superdyl.net</Text>
				<Text>
					Discord: <ExternalLink>discord.superdyl.net</ExternalLink>
				</Text>
				<Text>
					Change suggestion forms: <ExternalLink>whitelist</ExternalLink>{" "}
					<ExternalLink>datapacks</ExternalLink>{" "}
					<ExternalLink>mods</ExternalLink>{" "}
					<ExternalLink>changes under review</ExternalLink>{" "}
					<ExternalLink>other</ExternalLink>
				</Text>
			</TitledSection>
		</Layout>
	);
};

export default memo(Minecraft);

export const Head: HeadFC = () => <title>SuperDyl - Minecraft</title>;
