import styled from "styled-components";
import { Dropdown, DropdownHeader } from "../Dropdown";

export const HeaderText = styled.span`
	padding-right: 0.5em;
`;

export const StyledDropdownHeader = styled(DropdownHeader)`
	display: flex;
`;

export type DropdownItemButtonProps = {
	$disabled?: boolean;
};

export const DropdownItemButton = styled.button<DropdownItemButtonProps>`
	border: unset;
	border-radius: unset;

	width: 100%;

	&:hover {
		background-color: ${({ theme }) => theme.secondary};
	}

	${({ $disabled, theme }) => $disabled
		&& 'background-color: ' + theme.base + ';\n'
			+ 'color: ' + theme.textAlt + ';\n'
			+ 'cursor: unset;'}
`;

export const StyledDropdown = styled(Dropdown)`
	margin-top: .5rem;
	margin-bottom: .7rem;
`