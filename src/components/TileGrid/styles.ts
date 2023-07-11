import styled from "styled-components";

export interface ColumnGroup {
	columns: number;
	minWidth: string;
}

interface TileGridContainerProps {
	$columnGroups: ColumnGroup[];
}

export const TileGridContainer = styled.div<TileGridContainerProps>`
	display: grid;
	grid-template-columns: repeat(auto-fit, 1fr);
	grid-auto-rows: auto;
	grid-gap: 1em;
	margin: 1em;

	${({ $columnGroups }) =>
		$columnGroups
			.map(
				({ columns, minWidth: maxWidth }) =>
					`@media (min-width:${maxWidth}){grid-template-columns: repeat(${columns}, 1fr);}`
			)
			.join("")}
`;
