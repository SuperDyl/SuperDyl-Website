import React, { FunctionComponent, memo } from "react";
import TitledSection from "../components/TitledSection";
import ExternalTabLink from "../components/ExternalTabLink";
import FilteredModTable from "../components/FilteredModTable";
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
			<ExternalTabLink href={modsHref}>Suggest mod changes</ExternalTabLink>
			<p>
				All mods either optimize the game, add server utilities, or fix vanilla
				bugs. The server is supposed to feel vanilla, so mods {"shouldn't"}{" "}
				require players to download anything on their side.
			</p>
			<FilteredModTable mods={getServerMods()} />
		</TitledSection>
	);
};

export default memo(ServerMods);
