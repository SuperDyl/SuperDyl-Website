import React, { FunctionComponent, memo, useMemo } from "react";
import { Text } from "../components/SharedStyles";
import TitledSection from "../components/TitledSection";
import ExternalTabLink from "../components/ExternalTabLink";
import ClipboardLink from "../components/ClipboardLink";

interface HelpfulLinksProps {
	datapacksHref: string;
	modsHref: string;
	whitelistHref: string;
	otherHref: string;
	underReviewHref: string;
	discordHref: string;
}

const HelpfulLinks: FunctionComponent<HelpfulLinksProps> = ({
	datapacksHref,
	modsHref,
	whitelistHref,
	otherHref,
	underReviewHref,
	discordHref,
}) => {
	const datapacks = useMemo(
		() => <ExternalTabLink href={datapacksHref}>datapacks</ExternalTabLink>,
		[]
	);
	const mods = useMemo(
		() => <ExternalTabLink href={modsHref}>mods</ExternalTabLink>,
		[]
	);
	const whitelist = useMemo(
		() => <ExternalTabLink href={whitelistHref}>whitelist</ExternalTabLink>,
		[]
	);
	const other = useMemo(
		() => <ExternalTabLink href={otherHref}>other</ExternalTabLink>,
		[]
	);
	const underReview = useMemo(
		() => (
			<ExternalTabLink href={underReviewHref}>
				changes under review
			</ExternalTabLink>
		),
		[]
	);

	const serverIP = "mc.superdyl.net";

	return (
		<TitledSection header={"Helpful Links"}>
			<Text>
				Minecraft server ip:{" "}
				<ClipboardLink text={serverIP}>{serverIP}</ClipboardLink>
			</Text>
			<Text>
				Discord:{" "}
				<ExternalTabLink href={discordHref}>
					discord.superdyl.net
				</ExternalTabLink>
			</Text>
			<Text>
				Change suggestion forms: {whitelist} {datapacks} {mods} {underReview}{" "}
				{other}
			</Text>
		</TitledSection>
	);
};

export default memo(HelpfulLinks);
