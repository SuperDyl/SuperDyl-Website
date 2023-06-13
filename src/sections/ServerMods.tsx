import React, { FunctionComponent, memo, useState } from "react";
import TitledSection from "../components/TitledSection";
import { Text } from "../components/SharedStyles";
import ModTable from "../components/ModTable";
import { filterVersion, getServerMods } from "../mods";
import ExternalTabLink from "../components/ExternalTabLink";
import DropdownList from "../components/DropdownList";
import { ALL_MC_VERSIONS } from "../mods";
import { TableContainer } from "../components/BasicTable";

interface ServerModsProps {
	className?: string;
	modsHref: string;
}

const ServerMods: FunctionComponent<ServerModsProps> = ({
	className,
	modsHref,
}) => {
	const [mcSelection, setMcSelection] = useState(0);

	return (
		<TitledSection
			className={className}
			header="Server Mods"
		>
			<ExternalTabLink href={modsHref}>Suggest mod changes</ExternalTabLink>
			<Text>
				All mods either optimize the game, add server utilities, or fix vanilla
				bugs. The server is supposed to feel vanilla, so mods {"shouldn't"}{" "}
				require players to download anything on their side.
			</Text>
			<DropdownList
				select={mcSelection}
				options={ALL_MC_VERSIONS}
				onSelect={(selection: string, result?: number) =>
					setMcSelection(result || 0)
				}
			/>
			<ModTable
				mods={filterVersion(getServerMods(), ALL_MC_VERSIONS[mcSelection])}
			/>
		</TitledSection>
	);
};

export default memo(ServerMods);
