import styled from "styled-components";
import { Header1 } from "../SharedStyles";
import { mobileWidth } from "../../constants";

export const NewsItemContainer = styled.div`
	padding: 1.5em;
	margin-bottom: 0.5em;
	background: ${(props) => props.theme.baseAlt};
`;

export const HeaderContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;

	@media (min-width: ${mobileWidth}px) {
		flex-direction: row;
		align-items: center;
	}
`;

export const DisappearingHeader1 = styled(Header1)`
	display: none;
	@media (min-width: ${mobileWidth}px) {
		display: unset;
	}
`;
