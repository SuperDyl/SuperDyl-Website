import React, { memo, FunctionComponent, ReactNode } from "react";
import { OptionalUrlProps } from "../../constants";
import {
	ButtonContainer,
	DefaultContainer,
	ExternalLinkContainer,
	LocalLinkContainer,
} from "./styles";

type OnClickProps = {
	onClick: () => void;
};

export type ClickableProps = {
	className?: string;
	children?: ReactNode;
} & OptionalUrlProps;

// & (
// 	| (OptionalUrlProps & { onClick: never })
// 	| (OnClickProps & { [K in keyof OptionalUrlProps]: never })
// );

const Clickable: FunctionComponent<ClickableProps> = ({
	className,
	children,
	url = undefined,
	isLocal = false,
	isExternal = false,
	// onClick = undefined,
}) => {
	// if (onClick !== undefined) {
	// 	return <ButtonContainer className={className}>{children}</ButtonContainer>;
	// }
	if (url === undefined) {
		return (
			<DefaultContainer className={className}>{children}</DefaultContainer>
		);
	}
	if (isLocal) {
		return (
			<LocalLinkContainer
				className={className}
				to={url}
			>
				{children}
			</LocalLinkContainer>
		);
	}
	if (isExternal) {
		return (
			<ExternalLinkContainer
				className={className}
				href={url}
			>
				{children}
			</ExternalLinkContainer>
		);
	}
	//else: Shouldn't happen
	return <div />;
};

export default memo(Clickable);
