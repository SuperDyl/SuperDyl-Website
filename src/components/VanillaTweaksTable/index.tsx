import React, { FunctionComponent, memo } from "react";
import BasicTable, { TableContainer } from "../BasicTable";

interface TableProps {
	header: string;
	subheader: string;
	columnHeaders: string[];
	rows: string[][];
}

const VanillaTweaksTable: FunctionComponent<TableProps> = ({
	header,
	subheader,
	columnHeaders,
	rows,
}) => {
	return (
		<TableContainer>
			<BasicTable
				header={`${header}—${subheader}`}
				columnHeaders={columnHeaders}
				rows={rows}
			/>
		</TableContainer>
	);
};

export default memo(VanillaTweaksTable);
