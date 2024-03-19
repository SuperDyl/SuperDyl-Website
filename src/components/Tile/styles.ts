import { Link } from "gatsby";
import styled, { css } from "styled-components";
import { DefaultTextStyling } from "../SharedStyles";
import Clickable from "../Clickable";

export const OuterContainer = styled.div`
	${DefaultTextStyling}
	padding: 0;
	border-radius: 1em;
	display: flex;
	justify-content: center;
	min-height: 5em;
	font-size: 1.7em;
	align-items: center;
	flex-direction: column;
`;

const TopContainerStylings = css`
	background: ${(props) => props.theme.baseAlt};
	height: 66%;
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	font-size: 1.5em;
	margin-bottom: 4px;
	border-radius: 0.75em 0.75em 0 0;
`;

export const TopContainer = styled.div`
	${TopContainerStylings}
`;

export const TopLocalLink = styled(Link)`
	${TopContainerStylings}
	&:hover {
		background-color: ${(props) => props.theme.primary};
	}
`;

export const TopExternalLink = styled.a`
	${TopContainerStylings}
	&:hover {
		background-color: ${(props) => props.theme.primary};
	}
`;

export const BottomContainer = styled.div`
	background: ${(props) => props.theme.baseAlt};
	height: 34%;
	width: 100%;
	border-radius: 0 0 1em 1em;

	display: flex;
	justify-content: center;
	align-items: center;
`;

export const StyledTopTile = styled(Clickable)`
	${TopContainerStylings}
	&:hover {
		background-color: ${(props) => props.theme.primary};
	}
`;

export const StyledBottomTile = styled(Clickable)`
	background: ${(props) => props.theme.baseAlt};
	height: 34%;
	width: 100%;
	border-radius: 0 0 1em 1em;

	display: flex;
	justify-content: center;
	align-items: center;
`;
