import styled, { css } from "styled-components";
import ClipboardLink from "../../../components/ClipboardLink";
import { Header2 } from "../../../components/SharedStyles";

const EmphasisStylings = css`
	color: ${(props) => props.theme.tertiary};
`;

export const StyledClipboardLink = styled(ClipboardLink)`
	${EmphasisStylings}
`;

export const StyledHeader2 = styled(Header2)`
	${EmphasisStylings}
	display: inline;
`;
