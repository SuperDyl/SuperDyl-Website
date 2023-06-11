import React, { memo, FunctionComponent, useState, useCallback } from "react";
import {
	DropDownContainer,
	ExpandedList,
	ExpandedListContainer,
	ExpandedListItem,
	MinifiedList,
} from "./styles";
import ScreenBlocker from "../ScreenBlocker";
import { cursorTo } from "readline";

interface DropDownListProps {
	className?: string;
	options: string[];
	select: number;
}

type CallbackFunction = (result: number) => void;

const DropDownList: FunctionComponent<DropDownListProps> = ({
	className,
	options,
	select,
}) => {
	const [selected, setSelected] = useState(select);
	const [isExpanded, setIsExpanded] = useState(false);

	const minifiedList = useCallback(
		(visible: boolean) => {
			const minifiedText =
				selected < 0 || selected >= options.length ? "" : options[selected];

			return (
				<MinifiedList
					className={className}
					onClick={() => setIsExpanded((curr) => !curr)}
					$visible={visible}
				>
					{minifiedText}
				</MinifiedList>
			);
		},
		[className, selected, isExpanded]
	);

	const expandedList = useCallback(
		(selectItem: CallbackFunction) => {
			const listItems = options.map((item, index) => {
				return (
					<ExpandedListItem
						$selected={index === selected}
						onClick={() => selectItem(index)}
					>
						{item}
					</ExpandedListItem>
				);
			});

			return (
				<ExpandedListContainer className={className}>
					{minifiedList(true)}
					<ExpandedList>{listItems}</ExpandedList>
				</ExpandedListContainer>
			);
		},
		[options, className, selected]
	);

	return (
		<DropDownContainer>
			{minifiedList(!isExpanded)}
			{isExpanded &&
				expandedList((index) => {
					setSelected(index);
					setIsExpanded(false);
				})}
			{isExpanded && <ScreenBlocker onClick={() => setIsExpanded(false)} />}
		</DropDownContainer>
	);
};

export default DropDownList;
