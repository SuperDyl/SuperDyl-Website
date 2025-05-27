import React, { FunctionComponent, memo } from "react";
import TitledSection from "../components/TitledSection";
import { getClientMods } from "../mods";
import FilteredModTable from "../components/FilteredModTable";

interface ClientModsProps {
	className?: string;
}

const ClientMods: FunctionComponent<ClientModsProps> = ({ className }) => {
	return (
		<TitledSection
			className={className}
			header="Client Mods"
		>
			<p>
				This list is some Fabric mods that just optimize {"Minecraft's"} code,
				making the game run faster and smoother. If you also want to use mods
				for singleplayer, I would suggest using pretty much all the mods used by
				the server and here. If you only use mods for multiplayer, these are the
				mods I use:
			</p>
			<FilteredModTable mods={getClientMods()} />
		</TitledSection>
	);
};

export default memo(ClientMods);
