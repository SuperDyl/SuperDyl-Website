import React, {
	memo,
	FunctionComponent,
	useState,
	useCallback,
	useMemo,
} from "react";
import {
	DropDownContainer,
	ExpandedList,
	ExpandedListContainer,
	ExpandedListHeader,
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

	const minifiedText =
		selected < 0 || selected >= options.length ? "" : options[selected];

	const minifiedState = useCallback(
		(visible: boolean) => (
			<MinifiedList
				className={className}
				onClick={() => setIsExpanded(true)}
				$visible={visible}
			>
				{minifiedText}
			</MinifiedList>
		),
		[minifiedText, className]
	);

	const expandedHeader = useMemo(
		() => (
			<ExpandedListHeader
				className={className}
				onClick={() => setIsExpanded(false)}
			>
				{minifiedText}
			</ExpandedListHeader>
		),
		[minifiedText, className]
	);

	const expandedList = useMemo(
		() => (
			<ExpandedList>
				{options.map(
					(item, index) =>
						index !== selected && (
							<ExpandedListItem
								onClick={() => {
									setSelected(index);
									setIsExpanded(false);
								}}
							>
								{item}
							</ExpandedListItem>
						)
				)}
			</ExpandedList>
		),
		[options, selected]
	);

	const expandedState = useMemo(() => {
		return (
			<>
				{minifiedState(false)}
				<ExpandedListContainer className={className}>
					{expandedHeader}
					{expandedList}
				</ExpandedListContainer>
				<ScreenBlocker onClick={() => setIsExpanded(false)} />
			</>
		);
	}, [className]);

	return (
		<DropDownContainer>
			{!isExpanded ? minifiedState(true) : expandedState}
		</DropDownContainer>
	);
};

export default DropDownList;
