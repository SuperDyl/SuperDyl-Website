import styled, { css } from "styled-components";
import { Header2 } from "./SharedStyles";
import ClipboardLink from "./ClipboardLink";

export const EmphasisStylings = css`
	color: ${(props) => props.theme.tertiary};
`;

export const EmphasisClipboardLink = styled(ClipboardLink)`
	${EmphasisStylings}
`;

export const EmphasisHeader2 = styled(Header2)`
	${EmphasisStylings}
	display: inline;
`;
