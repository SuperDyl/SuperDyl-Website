import styled, { css } from "styled-components";
import { ListItem, UnorderedList } from "../SharedStyles";

const border = ``; //`border: 0.1em solid red;`;

interface MinifiedListProps {
	$visible: boolean;
}

const MinifiedStyling = css`
	background-color: aqua;
	cursor: pointer;
	display: inline-block;
	${border}
	border-width: 0.2em;
	width: 100%;
	padding: 0.3em 0.5em;
`;

export const MinifiedList = styled.div<MinifiedListProps>`
	${MinifiedStyling}
	visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
	border-radius: 0.7em;
`;

export const ExpandedListHeader = styled.div`
	${MinifiedStyling}
	border-radius: 0.7em 0.7em 0 0;
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

export const ExpandedListItem = styled(ListItem)`
	background-color: blue;
	${border}
	margin: 0;
	padding: 0.3em;
	cursor: pointer;

	&:last-child {
		border-radius: 0 0 0.7em 0.7em;
	}
`;

export const DropDownContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: baseline;
	width: fit-content;

	position: relative;
`;
