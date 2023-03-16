import { Link } from "gatsby";
import styled from "styled-components";

export const NavBarContainer = styled.nav`
	background-color: ${(props) => props.theme.secondary};
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

interface NavItemProps {
	$active: boolean;
}

export const NavItem = styled(Link)<NavItemProps>`
	color: ${(props) => props.theme.text};
	text-decoration: ${({ $active }) => ($active ? "underline" : "none")};
	padding: 0.2em;
`;
