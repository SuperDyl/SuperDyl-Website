import React, { FunctionComponent, memo } from "react";
import TitledSection from "../components/TitledSection";
import { ExternalLink, Text } from "../components/SharedStyles";
import ModTable from "../components/ModTable";
import { getServerMods } from "../mods";

interface ServerModsProps {
	className?: string;
	modsHref: string;
}

const ServerMods: FunctionComponent<ServerModsProps> = ({
	className,
	modsHref,
}) => {
	return (
		<TitledSection
			className={className}
			header="Server Mods"
		>
			<ExternalLink href={modsHref}>Suggest mod changes</ExternalLink>
			<Text>
				All mods either optimize the game, add server utilities, or fix vanilla
				bugs. The server is supposed to feel vanilla, so mods {"shouldn't"}{" "}
				require players to download anything on their side.
			</Text>
			<ModTable mods={getServerMods()} />
		</TitledSection>
	);
};

export default memo(ServerMods);
