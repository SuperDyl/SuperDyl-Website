import React, { memo, FunctionComponent } from "react";
import { Websites } from "../constants";
import ExternalTabLink from "./ExternalTabLink";

export interface ExternalLink {
	siteName: keyof typeof Websites;
	url: string;
}

interface ExternalLinkListProps {
	externalLinks: ExternalLink[];
	keyPrepend: string;
	separator?: string;
}

const ExternalLinkList: FunctionComponent<ExternalLinkListProps> = ({
	externalLinks,
	keyPrepend,
	separator = " ",
}) => {
	return (
		<>
			{externalLinks.map((link, index) => (
				<>
					<ExternalTabLink
						key={`${keyPrepend}-${link.siteName}-download`}
						href={link.url}
					>
						{link.siteName}
					</ExternalTabLink>
					{index !== externalLinks.length - 1 && separator}
				</>
			))}
		</>
	);
};

export default memo(ExternalLinkList);
