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
import { SharedHeader, SharedLinkStyling } from "../SharedStyles";

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
		/* CSS Reset https://www.joshwcomeau.com/css/custom-css-reset/ */

		/* 1. Use a more-intuitive box-sizing model */
		*, *::before, *::after {
			box-sizing: border-box;
		}

		/* 2. Remove default margin */
		* {
			margin: 0;
		}

		/* 3. Enable keyword animations */
		@media (prefers-reduced-motion: no-preference) {
			html {
				interpolate-size: allow-keywords;
			}
		}

		body {
			/* 4. Add accessible line-height */
			line-height: 1.5;
			/* 5. Improve text rendering */
			-webkit-font-smoothing: antialiased;
		}

		/* 6. Improve media defaults */
		img, picture, video, canvas, svg {
			display: block;
			max-width: 100%;
		}

		/* 7. Inherit fonts for form controls */
		input, button, textarea, select {
			font: inherit;
		}

		/* 8. Avoid text overflows */
		p, h1, h2, h3, h4, h5, h6 {
			overflow-wrap: break-word;
		}

		/* 9. Improve line wrapping */
		p {
			text-wrap: pretty;
		}
		h1, h2, h3, h4, h5, h6 {
			text-wrap: balance;
		}

		/*
		10. Create a root stacking context
		*/
		#root, #__next {
			isolation: isolate;
		}

		* {
  			font-family: sans-serif;
			color: ${(props) => props.theme.text}
		}

		*:focus-visible {
			outline: unset;
		}
		
		html {
			background-color: ${(props) => props.theme.base}
		}

		body {
			margin: 0;
		}

		span {
			display: inline-block;
		}

		h1 {
			${SharedHeader}
			font-size: 1.7em;
		}

		h2 {
			${SharedHeader}
			font-size: 1.2em;
		}

		a, a > * {
			${SharedLinkStyling}
		}

		ul, ol {
			margin-left: 0;
			margin-bottom: 0.75em;
			margin-top: 0;
		}

		ul {
			list-style: disc;
		}

		ol {
			list-style: lower-alpha;
		}

		button {
			background-color: unset;

			border: ${(props) => props.theme.primary} 2px solid;
			padding: 0.5rem;
			border-radius: 10px;
			user-select: none;
			cursor: pointer;

			&:hover {
				border-color: ${(props) => props.theme.secondary};
			}

			&:active {
				border-color: ${(props) => props.theme.tertiary};
				color: ${(props) => props.theme.textAlt};
			}

			&:focus-visible {
				background-color: ${(props) => props.theme.secondary};
			}
		}

		table {
			border-collapse: collapse;

			min-width: 100%;
			overflow: scroll;
			border: solid 0.2em ${(props) => props.theme.primary};
			display: table;
		}

		thead, tbody  {
			vertical-align: inherit;
		}

		tr {
			padding: 0.2em;
			border-bottom: solid 0.1em ${(props) => props.theme.primary};
		}

		th {
			text-align: unset;

			border: solid 0.1em ${(props) => props.theme.primary};
			padding: 0.25em;
			font-weight: bold;
		}

		td {
			border: solid 0.1em ${(props) => props.theme.primary};
			padding: 0.25em;
		}

		hr {
			background: ${(props) => props.theme.primary};
			height: 0.2rem;
			border-radius: 1rem;
			margin: 0 1rem;
		}
	`;

interface LayoutProps {
	children?: ReactNode;
	className?: string;
	activeLink?: MC_PAGES;
}

const navbarItems: [MC_PAGES, string][] = [
	[MC_PAGES.HOME, "Home"],
	[MC_PAGES.NEWS, "News"],
	[MC_PAGES.PLAY, "Play"],
	[MC_PAGES.DISCORD, "Discord"],
	[MC_PAGES.WHITELIST, "Whitelist"],
	[MC_PAGES.CHANGES, "Changes"],
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
