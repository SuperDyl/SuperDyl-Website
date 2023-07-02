import NewsItem from "../NewsItem";
import { ExternalLink, LocalLink } from "./../SharedStyles";
import styled, { css } from "styled-components";

export const TeaserContainer = styled.div`
	background-color: ${(props) => props.theme.baseAlt};
`;

export const LinkContainer = styled.div`
	padding: 1em;
	display: flex;
	justify-content: flex-end;
	padding-top: 0.5em;
`;

const LinkStyling = css`
	color: ${(props) => props.theme.primary};
	font-size: 1.2em;
	font-weight: bold;
	text-decoration: none;
`;

export const StyledLocalLink = styled(LocalLink)`
	${LinkStyling}
`;

export const StyledExternalLink = styled(ExternalLink)`
	${LinkStyling}
`;

export const StyledNewsItem = styled(NewsItem)`
	margin: 0;
	padding-bottom: 0.5em;
`;
