import React, { memo, FunctionComponent } from "react";
import BasicTable from "../BasicTable";
import { Text } from "../SharedStyles";
import ExternalLinkList, { ExternalLink } from "../ExternalLinkList";

interface DatapackInfo {
	datapackName: string;
	version?: string;
	downloadLinks: ExternalLink[];
	author: string;
	authorLinks: ExternalLink[];
	changes: string;
	reasoning: string;
}

interface DatapackTableProps {
	className?: string;
	datapacks: DatapackInfo[];
}

const DatapackTable: FunctionComponent<DatapackTableProps> = ({
	className,
	datapacks,
}) => {
	return (
		<BasicTable
			className={className}
			columnHeaders={["Datapack", "Download", "Author", "Changes", "Reasoning"]}
			rows={datapacks.map((pack) => [
				<Text key={`${pack.datapackName}-name`}>
					{pack.datapackName}
					{pack.version && " v" + pack.version}
				</Text>,
				<Text key={`${pack.datapackName}-downloads`}>
					<ExternalLinkList
						keyPrepend={`${pack.datapackName}-download`}
						externalLinks={pack.downloadLinks}
					/>
				</Text>,
				<Text key={`${pack.datapackName}-author`}>
					{pack.author}
					{": "}
					<ExternalLinkList
						keyPrepend={`${pack.datapackName}-author-link`}
						externalLinks={pack.authorLinks}
					/>
				</Text>,
				<Text key={`${pack.datapackName}-changes`}>{pack.changes}</Text>,
				<Text key={`${pack.datapackName}-reasoning`}>{pack.reasoning}</Text>,
			])}
		></BasicTable>
	);
};

export default memo(DatapackTable);
