import styled from "styled-components";

export const StyledExternalLink = styled.a`
	&:hover svg {
		color: ${(props) => props.theme.secondary};
	}
`;
