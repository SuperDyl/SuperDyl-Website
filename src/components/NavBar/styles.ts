import styled from "styled-components";
import { LocalLink } from "../SharedStyles";

export const NavBarContainer = styled.nav`
	background-color: ${(props) => props.theme.secondary};
	display: flex;
	align-items: center;
	justify-content: space-evenly;
`;

interface NavItemProps {
	$active: boolean;
}

export const NavItem = styled(LocalLink)<NavItemProps>`
	text-decoration: ${({ $active }) => ($active ? "underline" : "none")};
	padding: 0.2em;
`;
