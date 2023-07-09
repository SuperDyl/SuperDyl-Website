import React, { memo, FunctionComponent } from "react";
import ExternalTabLink from "../ExternalTabLink";

interface EmailLinkProps {
	className?: string;
	emailAddr?: string;
}

const EmailLink: FunctionComponent<EmailLinkProps> = ({
	className,
	emailAddr = "SuperDylEnt@gmail.com",
}) => {
	return (
		<ExternalTabLink
			className={className}
			href={`mailto:${emailAddr}`}
		>
			{emailAddr}
		</ExternalTabLink>
	);
};

export default memo(EmailLink);
