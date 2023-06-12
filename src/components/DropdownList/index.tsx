import React, {
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
import ExpandMore from "../icons/ExpandMore";
import ExpandLess from "../icons/ExpandLess";

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
				<ExpandMore />
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
				<ExpandLess />
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
									onSelect(options[index], index);
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
	}, [className, selected]);

	return (
		<DropDownContainer>
			{!isExpanded ? minifiedState(true) : expandedState}
		</DropDownContainer>
	);
};

export default DropDownList;
