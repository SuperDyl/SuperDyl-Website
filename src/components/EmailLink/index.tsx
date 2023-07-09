import React, { memo, FunctionComponent } from "react";
import ExternalTabLink from "../ExternalTabLink";

interface EmailLinkProps {
	className?: string;
	emailAddr?: string;
}

const EmailLink: FunctionComponent<EmailLinkProps> = ({
	className,
	emailAddr = "mailto:SuperDylEnt@gmail.com",
}) => {
	return (
		<ExternalTabLink
			className={className}
			href={emailAddr}
		>
			SuperDylEnt@gmail.com
		</ExternalTabLink>
	);
};

export default memo(EmailLink);
