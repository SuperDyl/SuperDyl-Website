import React, { FunctionComponent, memo } from "react";
import TitledSection from "../components/TitledSection";
import { Text } from "../components/SharedStyles";
import ModTable from "../components/ModTable";
import { getClientMods } from "../mods";

interface ClientModsProps {
	className?: string;
}

const ClientMods: FunctionComponent<ClientModsProps> = ({ className }) => {
	return (
		<TitledSection
			className={className}
			header="Client Mods"
		>
			<Text>
				This list is some Fabric mods that just optimize {"Minecraft's"} code,
				making the game run faster and smoother. If you also want to use mods
				for singleplayer, I would suggest using pretty much all the mods used by
				the server and here. If you only use mods for multiplayer, these are the
				mods I use:
			</Text>
			<ModTable mods={getClientMods()} />
		</TitledSection>
	);
};

export default memo(ClientMods);
