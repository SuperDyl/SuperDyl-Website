import React, { FunctionComponent, memo, useMemo } from "react";
import { ExternalLink, Text } from "../components/SharedStyles";
import TitledSection from "../components/TitledSection";

interface HelpfulLinksProps {
	datapacksHref: string;
	modsHref: string;
	whitelistHref: string;
	otherHref: string;
	underReviewHref: string;
}

const HelpfulLinks: FunctionComponent<HelpfulLinksProps> = ({
	datapacksHref,
	modsHref,
	whitelistHref,
	otherHref,
	underReviewHref,
}) => {
	const datapacks = useMemo(
		() => <ExternalLink href={datapacksHref}>datapacks</ExternalLink>,
		[]
	);
	const mods = useMemo(
		() => <ExternalLink href={modsHref}>mods</ExternalLink>,
		[]
	);
	const whitelist = useMemo(
		() => <ExternalLink href={whitelistHref}>whitelist</ExternalLink>,
		[]
	);
	const other = useMemo(
		() => <ExternalLink href={otherHref}>other</ExternalLink>,
		[]
	);
	const underReview = useMemo(
		() => (
			<ExternalLink href={underReviewHref}>changes under review</ExternalLink>
		),
		[]
	);

	return (
		<TitledSection header={"Helpful Links"}>
			<Text>Minecraft server ip: mc.superdyl.net</Text>
			<Text>
				Discord: <ExternalLink>discord.superdyl.net</ExternalLink>
			</Text>
			<Text>
				Change suggestion forms: {whitelist} {datapacks} {mods} {underReview}{" "}
				{other}
			</Text>
		</TitledSection>
	);
};

export default memo(HelpfulLinks);
