import React, { FunctionComponent, memo, ReactNode } from "react";
import {
	createGlobalStyle,
	ThemeProps,
	ThemeProvider,
} from "styled-components";
import { getPageUrl, MC_PAGES } from "../../constants";
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
const darkishGray = "#353535";
const lightishGray = "#999999";

interface Theme {
	primary: string;
	secondary: string;
	tertiary: string;
	base: string;
	baseAlt: string;
	text: string;
	textAlt: string;
}

const darkTheme: Theme = {
	primary: darkGreen,
	secondary: darkPurple,
	tertiary: darkMagenta,
	base: darkGray,
	baseAlt: darkishGray,
	text: lightGray,
	textAlt: lightishGray,
};

const lightTheme: Theme = {
	primary: lightGreen,
	secondary: lightPurple,
	tertiary: lightMagenta,
	base: lightGray,
	baseAlt: lightishGray,
	text: darkGray,
	textAlt: darkishGray,
};

const GlobalStyle = createGlobalStyle<ThemeProps<Theme>>`
		* {
  		font-family: sans-serif;
		}
		
		html {
			background-color: ${(props) => props.theme.base}
		}
	`;

interface LayoutProps {
	children?: ReactNode;
	className?: string;
	activeLink?: MC_PAGES;
}

const navbarItems: [MC_PAGES, string][] = [
	[MC_PAGES.NEWS, "News"],
	[MC_PAGES.PLAY, "Play"],
	[MC_PAGES.DISCORD, "Discord"],
];

const Layout: FunctionComponent<LayoutProps> = ({
	children,
	className,
	activeLink,
}) => {
	return (
		//TODO override html with theme base color
		//TODO add actual switching between themes
		// eslint-disable-next-line no-constant-condition
		<ThemeProvider theme={true ? darkTheme : lightTheme}>
			<FullViewContainer>
				<Banner>
					<BannerText to={getPageUrl(MC_PAGES.HOME)}>SD | Minecraft</BannerText>
				</Banner>
				<NavBar
					navItems={navbarItems.map(([id, text]) => ({
						to: getPageUrl(id),
						text,
						active: activeLink === id,
					}))}
				/>
				<MainContainer>
					<PageContent className={className}>{children}</PageContent>
				</MainContainer>
			</FullViewContainer>
			<GlobalStyle />
		</ThemeProvider>
	);
};

export default memo(Layout);
