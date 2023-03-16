import React, { FunctionComponent, memo } from "react";
import { NavBarContainer, NavItem } from "./styles";

interface NavBarProps {
	className?: string;
	navItems: {
		to: string;
		text: string;
		active?: boolean;
	}[];
}

const NavBar: FunctionComponent<NavBarProps> = ({ className, navItems }) => {
	return (
		<NavBarContainer className={className}>
			{navItems.map(({ to, text, active = false }) => (
				<NavItem
					to={to}
					key={to}
					$active={active}
				>
					{text}
				</NavItem>
			))}
		</NavBarContainer>
	);
};

export default memo(NavBar);
