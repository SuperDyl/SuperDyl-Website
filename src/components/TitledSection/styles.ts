import styled, { css } from "styled-components";

export const TitledSectionContainer = styled.div`
	margin: 1em;
	padding: 1.5em 2em 1em;
	background-color: ${(props) => props.theme.baseAlt};
	border-radius: 1em;
`;

export const StickyHeaderShared = css`
	position: sticky;
	top: 0;
	margin-bottom: 0;
	padding-bottom: 10px;
	padding-top: 10px;
`;

export const StickyHeader1 = styled.h1`
	${StickyHeaderShared}
	background-color: ${(props) => props.theme.baseAlt};
	z-index: 1;
`;
