import { Link } from "gatsby";
import styled, { css } from "styled-components";

export const DefaultTextStyling = css`
	color: ${(props) => props.theme.text};
`;

export const Text = styled.p`
	${DefaultTextStyling}
	margin: 0;
	padding-bottom: 0.4em;
`;

export const TightText = styled.p`
	${DefaultTextStyling}
	margin: 0;
`;

export const WeakText = styled.em`
	${DefaultTextStyling}
	color: ${(props) => props.theme.textAlt};
`;

export const Header1 = styled.h1`
	${DefaultTextStyling}
	color: ${(props) => props.theme.primary};
	font-size: 1.7em;
	font-weight: bold;
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

	&:hover {
		color: ${(props) => props.theme.secondary};
	}
	&:active {
		text-decoration: none;
	}
`;

export const LocalLink = styled(Link)`
	${SharedLinkStyling}
`;

const ListStyling = css`
	${DefaultTextStyling}
	margin-left: 2em;
	margin-bottom: 0.75em;
`;

export const UnorderedList = styled.ul`
	${ListStyling}
	list-style: disc;
`;

export const OrderedList = styled.ol`
	${ListStyling}
	list-style: lower-alpha;
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

interface StyledSVGProps {
	$strokeWidth?: string;
}

export const StyledSVG = styled.svg<StyledSVGProps>`
	fill: currentColor;
	stroke: currentColor;
	color: ${(props) => props.theme.text};
	font-size: 1em;
	height: 1em;
	width: auto;

	path {
		stroke-width: ${({ $strokeWidth }) =>
			$strokeWidth !== undefined ? $strokeWidth : "5em"};
	}
`;

export const HorizontalLine = styled.hr`
	background: ${(props) => props.theme.primary};
	height: 0.2em;
	border-radius: 1em;
	margin: 0 1em;
`;

const EmphasisStylings = css`
	color: ${(props) => props.theme.tertiary};
`;

export const InlineEmphasis = styled.span`
	${EmphasisStylings}

	& *:not(div) {
		${EmphasisStylings}
	}
`;
