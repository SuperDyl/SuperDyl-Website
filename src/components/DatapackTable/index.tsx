import React, { memo, FunctionComponent } from "react";
import BasicTable, { TableContainer } from "../BasicTable";
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
	datapacks: DatapackInfo[];
}

const DatapackTable: FunctionComponent<DatapackTableProps> = ({
	datapacks,
}) => {
	return (
		<TableContainer>
			<BasicTable
				columnHeaders={[
					"Datapack",
					"Download",
					"Author",
					"Changes",
					"Reasoning",
				]}
				rows={datapacks.map((pack) => [
					<p key={`${pack.datapackName}-name`}>
						{pack.datapackName}
						{pack.version && " v" + pack.version}
					</p>,
					<p key={`${pack.datapackName}-downloads`}>
						<ExternalLinkList
							keyPrepend={`${pack.datapackName}-download`}
							externalLinks={pack.downloadLinks}
						/>
					</p>,
					<p key={`${pack.datapackName}-author`}>
						{pack.author}
						{": "}
						<ExternalLinkList
							keyPrepend={`${pack.datapackName}-author-link`}
							externalLinks={pack.authorLinks}
						/>
					</p>,
					<p key={`${pack.datapackName}-changes`}>{pack.changes}</p>,
					<p key={`${pack.datapackName}-reasoning`}>{pack.reasoning}</p>,
				])}
			/>
		</TableContainer>
	);
};

export default memo(DatapackTable);
