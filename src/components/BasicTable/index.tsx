import React, { FunctionComponent, memo } from "react";
import styled from "styled-components";

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
		<table className={className}>
			<thead>
				{header && (
					<tr>
						<th colSpan={columnCount}>{header}</th>
					</tr>
				)}
				<tr>
					{columnHeaders.map((colHeader) => (
						<th key={colHeader}>{colHeader}</th>
					))}
				</tr>
			</thead>
			<tbody>
				{rows.map((row, i) => (
					<tr key={`row-${i}`}>
						{row.map((item, index) => (
							<td key={`item-${index}-row-${row}`}>{item}</td>
						))}
					</tr>
				))}
			</tbody>
		</table>
	);
};

export const TableContainer = styled.div`
	width: 100%;
	overflow: auto;
`;

export default memo(SimpleTable);
