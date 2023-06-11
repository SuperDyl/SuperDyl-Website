import styled from "styled-components";
import { ListItem, UnorderedList } from "../SharedStyles";

const border = `border: 0.1em solid red;`;

interface MinifiedListProps {
	$visible: boolean;
}

export const MinifiedList = styled.div<MinifiedListProps>`
	background-color: aqua;
	cursor: pointer;
	display: inline-block;
	padding: 0.3em;
	visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
	${border}
	border-width: 0.2em;
	width: 100%;
`;

export const ExpandedListContainer = styled.div`
	display: inline-block;
	z-index: 3;

	position: absolute;
	white-space: nowrap;
`;

export const ExpandedList = styled(UnorderedList)`
	list-style: none;
	margin: 0;
	${border}
`;

interface ExpandedListItemProps {
	$selected?: boolean;
}

export const ExpandedListItem = styled(ListItem)<ExpandedListItemProps>`
	background-color: ${({ $selected = false }) =>
		$selected ? "green" : "blue"};
	${border}
	margin: 0;
	padding: 0.3em;
	cursor: pointer;
`;

export const DropDownContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: baseline;
	width: fit-content;

	position: relative;
`;
