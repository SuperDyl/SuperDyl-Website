import styled from "styled-components";

export const FullViewContainer = styled.div`
	height: 100vh;
	width: 100vw;
	display: flex;
	flex-direction: column;
`;

//TODO should I set a max and min for the banner/banner text?
export const Banner = styled.div`
	height: 12vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.primary};
`;

export const BannerText = styled.h1`
	font-size: min(8vh, 15vw);
	margin: 0;
	color: ${(props) => props.theme.secondary};
	text-shadow: 1px 1px 0px ${(props) => props.theme.base};
`;

export const PageContent = styled.main`
	height: 100%;
	width: 100%;

	@media (min-width: 1000px) {
		width: 1000px;
		justify-content: center;
	}
`;

export const MainContainer = styled.div`
	padding-top: 10px;
	background-color: ${(props) => props.theme.base};
	flex-grow: 1;
	display: flex;
	justify-content: center;
`;
