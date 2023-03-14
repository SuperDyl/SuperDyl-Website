import { Link } from "gatsby";
import styled from "styled-components";

export const NavBarContainer = styled.nav`
	background-color: ${(props) => props.theme.secondary};
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

export const NavItem = styled(Link)`
	color: ${(props) => props.theme.text};
	text-decoration: none;
	padding: 0.2em;
`;
