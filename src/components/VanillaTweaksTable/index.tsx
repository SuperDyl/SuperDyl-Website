import React, { FunctionComponent, memo } from "react";
import { Text, Table, TableRow, TableData, TableHeader } from "../SharedStyles";

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
	const columnCount = columnHeaders.length;

	return (
		<Table className={className}>
			<thead>
				<TableRow>
					<TableHeader
						colSpan={columnCount}
					>{`${header}—${subheader}`}</TableHeader>
				</TableRow>
				<TableRow>
					{columnHeaders.map((colHeader) => (
						<TableHeader key={colHeader}>{colHeader}</TableHeader>
					))}
				</TableRow>
			</thead>
			<tbody>
				{rows.map((row, i) => (
					<TableRow key={`row-${i}`}>
						{row.map((item) => (
							<TableData key={item}>{item}</TableData>
						))}
					</TableRow>
				))}
			</tbody>
		</Table>
	);
};

export default memo(VanillaTweaksTable);
