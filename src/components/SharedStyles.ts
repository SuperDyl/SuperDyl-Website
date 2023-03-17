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

const SharedLinkStyling = css`
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
	list-style: circle;
	margin-left: 2em;
	margin-bottom: 0.75em;
`;

export const ListItem = styled.li`
	margin-bottom: 0.3em;
	padding-left: 1em;
`;
