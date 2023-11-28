import styled from "styled-components";
import { SharedLinkStyling } from "../SharedStyles";

export const StyledExternalLink = styled.a`
	${SharedLinkStyling}

	&:hover svg {
		color: ${(props) => props.theme.secondary};
	}
`;
