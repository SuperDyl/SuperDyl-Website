import React, { FunctionComponent, memo, ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import NavBar from "../NavBar";
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
const darkMagenta = "#d73996";
const lightMagenta = "#e931f3";

interface Theme {
	primary: string;
	secondary: string;
	tertiary: string;
	base: string;
	text: string;
}

const darkTheme: Theme = {
	primary: darkGreen,
	secondary: darkPurple,
	tertiary: darkMagenta,
	base: darkGray,
	text: lightGray,
};

const lightTheme: Theme = {
	primary: lightGreen,
	secondary: lightPurple,
	tertiary: lightMagenta,
	base: lightGray,
	text: darkGray,
};

interface LayoutProps {
	children?: ReactNode;
	className?: string;
}

const Layout: FunctionComponent<LayoutProps> = ({ children, className }) => {
	const links = [
		{ to: "/minecraft", text: "Minecraft" },
		{ to: "/", text: "Blog" },
		{ to: "/", text: "Archive" },
	];

	return (
		//TODO override html with theme base color
		//TODO add actual switching between themes
		// eslint-disable-next-line no-constant-condition
		<ThemeProvider theme={true ? darkTheme : lightTheme}>
			<FullViewContainer>
				<Banner>
					<BannerText>SuperDyl.net</BannerText>
				</Banner>
				<NavBar navItems={links}></NavBar>
				<MainContainer>
					<PageContent className={className}>{children}</PageContent>
				</MainContainer>
			</FullViewContainer>
		</ThemeProvider>
	);
};

export default memo(Layout);
