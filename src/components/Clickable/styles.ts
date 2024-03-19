import styled, { css } from "styled-components";
import { Link } from "gatsby";

const SharedStyling = css``;

const SharedHover = css`
	&:hover {
		background-color: ${(props) => props.theme.primary};
	}
`;

export const DefaultContainer = styled.div`
	${SharedStyling}
	${SharedHover}
`;

export const LocalLinkContainer = styled(Link)`
	${SharedStyling}
	${SharedHover}
`;

export const ExternalLinkContainer = styled.a`
	${SharedStyling}
	${SharedHover}
`;

export const ButtonContainer = styled.button`
	${SharedStyling}
	${SharedHover}
`;
