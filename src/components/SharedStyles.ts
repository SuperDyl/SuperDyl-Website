import styled, { css } from "styled-components";

const DefaultTextStyling = css`
	margin: 0;
	color: ${(props) => props.theme.text};
`;

export const Text = styled.p`
	${DefaultTextStyling}
`;

export const Header1 = styled.h1`
	${DefaultTextStyling}
`;
