import React, { FunctionComponent, memo, useMemo } from "react";
import TitledSection from "../components/TitledSection";
import TitledSubSection from "../components/TitledSubSection";
import { ExternalLink, Text } from "../components/SharedStyles";

interface UnderReviewProps {
	underReviewHref: string;
	email: JSX.Element;
}

const UnderReview: FunctionComponent<UnderReviewProps> = ({
	underReviewHref,
	email,
}) => {
	const underReview = useMemo(
		() => (
			<ExternalLink href={underReviewHref}>changes under review</ExternalLink>
		),
		[]
	);

	return (
		<TitledSection header="Changes Under Review">
			<Text>
				To give feedback specific to this section, please use the form{" "}
				{underReview} or email me at {email} and mention the title of the change
				{"you're"} giving feedback on. I will consider all feedback on these
				potential changes before making a final decision.
			</Text>
			<TitledSubSection header="Vanilla Tweaks Custom Nether Portals">
				<Text>
					Decided: Default configuration forces nether portals to use at least
					10 obsidian, giving no unfair advantage to using this datapack. After
					the Ender Dragon fight, {"I'll"} consider allowing smaller nether
					portals in the config settings. Allowing vanilla tweaks custom nether
					portals before the ender dragon fight ({"I'm"} thinking of not
					allowing custom shapes until after the ender dragon, but allowing
					crying obsidian before).
				</Text>
			</TitledSubSection>
		</TitledSection>
	);
};

export default memo(UnderReview);
