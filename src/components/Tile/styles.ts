import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { DefaultTextStyling } from "../SharedStyles";

const ContainerStyling = css`
	${DefaultTextStyling}
	padding: 0.5em;
	background: ${(props) => props.theme.baseAlt};
	border-radius: 1em;
	display: flex;
	justify-content: center;
	min-height: 4em;
	font-size: 1.7em;
	align-items: center;
	flex-direction: column;
`;

const LinkStyling = css`
	${ContainerStyling}

	:hover {
		background-color: ${(props) => props.theme.primary};
	}
`;

export const TileContainer = styled.div`
	${ContainerStyling}
`;

export const LocalLinkContainer = styled(Link)`
	${LinkStyling}
`;

export const ExternalLinkContainer = styled.a`
	${LinkStyling};
`;
