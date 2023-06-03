import React, { FunctionComponent, memo } from "react";
import { Table, TableRow, TableData, TableHeader } from "../SharedStyles";

interface TableProps {
	className?: string;
	header?: string;
	columnHeaders: string[];
	rows: string[][] | React.ReactNode[][];
}

const SimpleTable: FunctionComponent<TableProps> = ({
	className,
	header,
	columnHeaders,
	rows,
}) => {
	const columnCount = columnHeaders.length;

	return (
		<Table className={className}>
			<thead>
				{header && (
					<TableRow>
						<TableHeader colSpan={columnCount}>{header}</TableHeader>
					</TableRow>
				)}
				<TableRow>
					{columnHeaders.map((colHeader) => (
						<TableHeader key={colHeader}>{colHeader}</TableHeader>
					))}
				</TableRow>
			</thead>
			<tbody>
				{rows.map((row, i) => (
					<TableRow key={`row-${i}`}>
						{row.map((item, index) => (
							<TableData key={`item-${index}-row-${row}`}>{item}</TableData>
						))}
					</TableRow>
				))}
			</tbody>
		</Table>
	);
};

export default memo(SimpleTable);
