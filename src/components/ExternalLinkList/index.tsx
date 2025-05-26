import React, { memo, FunctionComponent } from "react";
import { Websites } from "../../constants";
import ExternalTabLink from "../ExternalTabLink";

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
				<React.Fragment key={`${keyPrepend}-${link.siteName}-download`}>
					<ExternalTabLink
						href={link.url}
					>
						{link.siteName}
					</ExternalTabLink>
					{index !== externalLinks.length - 1 && separator}
				</React.Fragment>
			))}
		</>
	);
};

export default memo(ExternalLinkList);
