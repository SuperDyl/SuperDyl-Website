import React, {
	FunctionComponent,
	useState,
	useRef,
	RefObject,
	FocusEvent,
} from "react";
import {
	DropdownItemButton,
	HeaderText,
	StyledDropdown,
	StyledDropdownHeader,
} from "./styles";
import ExpandMore from "../icons/ExpandMore";
import ExpandLess from "../icons/ExpandLess";
import { DropdownBody, DropdownItem } from "../Dropdown";

type CallbackFunction = (selection: string, result?: number) => void;

interface DropDownListProps {
	className?: string;
	options: string[];
	select: number;
	onSelect?: CallbackFunction;
}

const DropDownList: FunctionComponent<DropDownListProps> = ({
	className,
	options,
	select,
	onSelect = () => undefined,
}) => {
	const [selected, setSelected] = useState(select);
	const [open, setOpen] = useState(false);

	const dropdownRef: RefObject<HTMLElement | null> = useRef(null);

	const headerText = (selected < 0 || selected >= options.length)
		? ""
		: options[selected];

	return (
		<StyledDropdown
			className={className}
			innerRef={dropdownRef as RefObject<HTMLElement | null>}
			onBlur={(event: FocusEvent<HTMLElement>) => {
				if (event.relatedTarget !== null
					&& dropdownRef.current !== null
					&& !dropdownRef.current.contains(event.relatedTarget)) {
					setOpen(false);

					console.log(event);
				}
			}}
		>
			<StyledDropdownHeader onClick={() => setOpen(!open)}>
				<HeaderText>{headerText}</HeaderText>
				{open ? <ExpandLess /> : <ExpandMore />}
			</StyledDropdownHeader>
			<DropdownBody open={open}>
				{options
					.map((option, index) => (
						<DropdownItem
							key={index}>
							<DropdownItemButton
								disabled={index === selected}
								$disabled={index === selected}
								onClick={
									() => {
										setOpen(false);
										setSelected(index);
										onSelect(options[index], index);
									}
								}
								onMouseDown={
									(event) => {
										event.preventDefault();
									}
								}
								{...(!open && { tabIndex: -1 }) /* Don't allow tabbing while hidden */}
							>
								{option}
							</DropdownItemButton>
						</DropdownItem>
					))
				}
			</DropdownBody>
		</StyledDropdown>
	);
};

export default DropDownList;
