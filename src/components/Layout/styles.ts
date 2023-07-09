import { Link } from "gatsby";
import styled from "styled-components";
import { tabletWidth } from "../../constants";

export const FullViewContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
`;

//TODO should I set a max and min for the banner/banner text?
export const Banner = styled.div`
	padding: 1vh 1vw;
	height: 12vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.primary};
`;

export const BannerText = styled(Link)`
	cursor: pointer;
	font-size: min(8vh, 15vw);
	font-weight: bold;
	margin: 0;
	color: ${(props) => props.theme.secondary};
	text-shadow: 1px 1px 0px ${(props) => props.theme.base};
`;

export const PageContent = styled.main`
	height: 100%;
	width: 100%;
	padding-top: 0.6em;

	@media (min-width: ${tabletWidth}px) {
		width: ${tabletWidth}px;
		justify-content: center;
	}
`;

export const MainContainer = styled.div`
	background-color: ${(props) => props.theme.base};
	flex-grow: 1;
	display: flex;
	justify-content: center;
`;
