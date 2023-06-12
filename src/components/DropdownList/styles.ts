import styled, { css } from "styled-components";
import { ListItem, UnorderedList } from "../SharedStyles";

const border = css`
	border: 0.2em solid ${(props) => props.theme.base};
`;

interface MinifiedListProps {
	$visible: boolean;
}

const MinifiedStyling = css`
	cursor: pointer;
	display: inline-block;
	width: 100%;
	padding: 0.3em 0.5em;
	background-color: ${(props) => props.theme.secondary};
	color: ${(props) => props.theme.text};
`;

export const MinifiedList = styled.div<MinifiedListProps>`
	${MinifiedStyling}
	${border}

	visibility: ${({ $visible }) => ($visible ? "visible" : "hidden")};
	border-radius: 0.7em;
`;

export const ExpandedListHeader = styled.div`
	${MinifiedStyling}
	border-radius: 0.5em 0.5em 0px 0px;
	display: flex;
	justify-content: space-between;
`;

export const ExpandedListContainer = styled.div`
	display: inline-block;
	z-index: 3;

	position: absolute;
	white-space: nowrap;

	border-radius: 0.7em;
	background-color: ${(props) => props.theme.baseAlt};
	${border}
`;

export const ExpandedList = styled(UnorderedList)`
	list-style: none;
	margin: 0;
`;

export const ExpandedListItem = styled(ListItem)`
	margin: 0;
	padding: 0.3em 0.5em;
	cursor: pointer;
`;

export const DropDownContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: baseline;
	width: fit-content;

	position: relative;
`;
