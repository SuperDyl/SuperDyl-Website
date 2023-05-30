import React, { FunctionComponent, memo } from "react";
import BasicTable from "../BasicTable";

interface TableProps {
	className?: string;
	header: string;
	subheader: string;
	columnHeaders: string[];
	rows: string[][];
}

const VanillaTweaksTable: FunctionComponent<TableProps> = ({
	className,
	header,
	subheader,
	columnHeaders,
	rows,
}) => {
	return (
		<BasicTable
			className={className}
			header={`${header}—${subheader}`}
			columnHeaders={columnHeaders}
			rows={rows}
		/>
	);
};

export default memo(VanillaTweaksTable);
