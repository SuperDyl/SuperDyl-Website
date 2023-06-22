import styled, { createGlobalStyle } from "styled-components";

interface BlockerProps {
	$zIndex?: number;
}

export const Blocker = styled.div<BlockerProps>`
	height: 100vh;
	width: 100vw;
	position: fixed;
	top: 0;
	left: 0;
	z-index: ${({ $zIndex }) => ($zIndex !== undefined ? $zIndex : 2)};
	background: ${(props) => props.theme.primary};
	opacity: 0.2;
	overflow: hidden;
`;

export const ScrollBlock = createGlobalStyle`
  html {
    overflow: hidden;
  }
`;
