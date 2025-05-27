import styled, { css } from "styled-components";

export const TightText = styled.p`
	margin: 0;
`;

export const WeakText = styled.em`
	color: ${(props) => props.theme.textAlt};
`;

export const SharedLinkStyling = css`
	text-decoration: underline;
	cursor: pointer;

	&:hover {
		color: ${(props) => props.theme.secondary};
	}
	&:active {
		text-decoration: none;
	}
`;

interface StyledSVGProps {
	$strokeWidth?: string;
}

export const StyledSVG = styled.svg<StyledSVGProps>`
	fill: currentColor;
	stroke: currentColor;
	color: ${(props) => props.theme.text};
	font-size: 1em;
	height: 1em;
	width: auto;

	path {
		stroke-width: ${({ $strokeWidth }) =>
		$strokeWidth !== undefined ? $strokeWidth : "5em"};
	}
`;

export const InlineEmphasis = styled.span`
	color: ${(props) => props.theme.tertiary};

	& *:not(div) {
		color: ${(props) => props.theme.tertiary};
	}
`;
