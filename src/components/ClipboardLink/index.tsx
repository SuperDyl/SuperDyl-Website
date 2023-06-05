import React, {
	memo,
	FunctionComponent,
	ReactNode,
	useCallback,
	useState,
} from "react";
import { CopyToClipboard } from "./styles";
import Tooltip from "../Tooltip";

function copyTextToClipboard(text: string) {
	return navigator.clipboard.writeText(text);
}

interface ClipboardLinkProps {
	children?: ReactNode;
	className?: string;
	text: string;
}

const ClipboardLink: FunctionComponent<ClipboardLinkProps> = ({
	children,
	className,
	text,
}) => {
	const [tooltipVisible, setTooltipVisible] = useState(false);
	const [tooltipContent, setTooltipContent] = useState("Copy");

	const onClick = useCallback(() => {
		copyTextToClipboard(text).then(
			() => {
				setTooltipContent("Copied!");
			},
			() => {
				setTooltipContent("Copy failed");
			}
		);
	}, [text]);

	return (
		<CopyToClipboard
			className={className}
			onClick={onClick}
			onMouseEnter={() => setTooltipVisible(true)}
			onMouseLeave={() => {
				setTooltipVisible(false);
				setTooltipContent("Copy");
			}}
		>
			<Tooltip
				content={tooltipContent}
				visible={tooltipVisible}
			>
				{children}
			</Tooltip>
		</CopyToClipboard>
	);
};

export default memo(ClipboardLink);
