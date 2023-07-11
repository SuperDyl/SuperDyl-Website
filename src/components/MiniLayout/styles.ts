import styled, { css } from "styled-components";
import Layout from "../../components/Layout";
import { mobileWidth } from "../../constants";

export const StyledLayout = styled(Layout)`
	padding: 2em;
	display: grid;
	grid-template-rows: auto auto;
	grid-template-columns: 1fr;
	gap: 1em;

	@media (min-width: ${mobileWidth}px) {
		grid-template-columns: 1fr 1fr;
		grid-template-rows: 1fr;
	}
`;

const SharedContainerStylings = css`
	display: flex;
	flex-direction: column;
	justify-content: center;
`;

export const StyledTopLeftContainer = styled.div`
	${SharedContainerStylings}
`;

export const StyledBottomRightContainer = styled.div`
	${SharedContainerStylings}
	align-items: center;
`;
