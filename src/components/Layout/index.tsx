import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import {
	FullViewContainer,
	BannerText,
	Banner,
	PageContent,
	MainContainer,
} from "./styles";

const darkGreen = "#11862c";
const lightGreen = "#1aa63e";
const darkPurple = "#75349e";
const lightPurple = "#883297";
const darkGray = "#252525";
const lightGray = "#d9d9d9";

const darkTheme = {
	primary: darkGreen,
	secondary: darkPurple,
	base: darkGray,
	text: lightGray,
};

const lightTheme = {
	primary: lightGreen,
	secondary: lightPurple,
	base: lightGray,
	text: darkGray,
};

interface LayoutProps {
	children?: ReactNode;
	className?: string;
}

const Layout = ({ children, className }: LayoutProps) => {
	return (
		//TODO override html with theme base color
		//TODO add actual switching between themes
		// eslint-disable-next-line no-constant-condition
		<ThemeProvider theme={true ? darkTheme : lightTheme}>
			<FullViewContainer>
				<Banner>
					<BannerText>SuperDyl.net</BannerText>
					<nav></nav>
				</Banner>
				<MainContainer>
					<PageContent className={className}>{children}</PageContent>
				</MainContainer>
			</FullViewContainer>
		</ThemeProvider>
	);
};

export default Layout;
