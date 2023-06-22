import { Link } from "gatsby";
import styled, { css } from "styled-components";

const DefaultTextStyling = css`
	color: ${(props) => props.theme.text};
`;

export const Text = styled.p`
	${DefaultTextStyling}
	margin: 0;
	padding-bottom: 0.4em;
`;

export const WeakText = styled.em`
	${DefaultTextStyling}
	color: ${(props) => props.theme.textAlt};
`;

export const Header1 = styled.h1`
	${DefaultTextStyling}
	color: ${(props) => props.theme.primary};
	font-size: 1.5em;
	font-weight: bold;
	text-decoration: underline;
	margin-bottom: 0.4em;
`;

export const Header2 = styled.h2`
	${DefaultTextStyling}
	color: ${(props) => props.theme.primary};
	font-size: 1.2em;
	font-weight: bold;
	margin-bottom: 0.4em;
`;

export const SharedLinkStyling = css`
	${DefaultTextStyling}
	text-decoration: underline;
	cursor: pointer;

	:hover {
		color: ${(props) => props.theme.secondary};
	}
	:active {
		text-decoration: none;
	}
`;

export const LocalLink = styled(Link)`
	${SharedLinkStyling}
`;

export const ExternalLink = styled.a`
	${SharedLinkStyling}
`;

export const UnorderedList = styled.ul`
	${DefaultTextStyling}
	list-style: disc;
	margin-left: 2em;
	margin-bottom: 0.75em;
`;

export const ListItem = styled.li`
	margin-bottom: 0.3em;
	padding-left: 0.25em;
`;

export const Table = styled.table`
	${DefaultTextStyling}
	min-width: 100%;
	overflow: scroll;
	border: solid 0.2em ${(props) => props.theme.primary};
	display: table;
`;

export const TableHeader = styled.th`
	border: solid 0.1em ${(props) => props.theme.primary};
	padding: 0.25em;
	font-weight: bold;
`;

export const TableRow = styled.tr`
	/* padding: 0.2em;
	border-bottom: solid 0.1em ${(props) => props.theme.primary}; */
`;

export const TableData = styled.td`
	border: solid 0.1em ${(props) => props.theme.primary};
	padding: 0.25em;
`;

export const StyledSVG = styled.svg`
	fill: currentColor;
	stroke: currentColor;
	color: ${(props) => props.theme.text};
	font-size: 1em;
	height: 1em;
	width: auto;

	path {
		stroke-width: 5em;
	}
`;
