import React, { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { FullViewContainer, BannerText } from "./styles";

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
};

const lightTheme = {
	primary: lightGreen,
	secondary: lightPurple,
	base: lightGray,
};

interface LayoutProps {
	children?: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		//TODO add split
		// eslint-disable-next-line no-constant-condition
		<ThemeProvider theme={true ? darkTheme : lightTheme}>
			<FullViewContainer>
				<nav>
					<BannerText>mc.SuperDyl.net</BannerText>
				</nav>
				<main>{children}</main>
			</FullViewContainer>
		</ThemeProvider>
	);
};

export default Layout;
