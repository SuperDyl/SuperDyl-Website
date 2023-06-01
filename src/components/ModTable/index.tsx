import React, { FunctionComponent, memo } from "react";
import BasicTable from "../BasicTable";
import { Text } from "../SharedStyles";
import { ModUsages } from "../../constants";
import ExternalTabLink from "../ExternalTabLink";
import { ExternalLink } from "../ExternalLinkList";

interface ModInfo {
	modName: string;
	version: string;
	downloadLinks: ExternalLink[];
	purpose: string;
	usage: keyof typeof ModUsages;
}

interface ModTableProps {
	className?: string;
	mods: ModInfo[];
}

interface CreateModLinksProps {
	downloadLinks: ExternalLink[];
	modName: string;
}

const CreateModLinks: FunctionComponent<CreateModLinksProps> = ({
	downloadLinks,
	modName,
}) => {
	return (
		<Text key={`${modName}-download-links-inside`}>
			{downloadLinks.map((link, index) => (
				<>
					<ExternalTabLink
						key={`${modName}-${link.siteName}-download`}
						href={link.url}
					>
						{link.siteName}
					</ExternalTabLink>
					{index !== downloadLinks.length - 1 && " "}
				</>
			))}
		</Text>
	);
};

const ModTable: FunctionComponent<ModTableProps> = ({ className, mods }) => {
	return (
		<BasicTable
			className={className}
			columnHeaders={["Mod Name", "Version", "Download link(s)", "Purpose"]}
			rows={mods.map((mod) => [
				mod.modName,
				mod.version,
				<CreateModLinks
					downloadLinks={mod.downloadLinks}
					modName={mod.modName}
					key={`${mod.modName}-download-links-outside`}
				/>,
				mod.purpose,
			])}
		></BasicTable>
	);
};

export default memo(ModTable);
