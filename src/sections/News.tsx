import React, { FunctionComponent, memo } from "react";
import { ListItem, UnorderedList, Text } from "../components/SharedStyles";
import TitledSection from "../components/TitledSection";
import TitledSubSection from "../components/TitledSubSection";

interface NewsProps {
	email: JSX.Element;
}

const News: FunctionComponent<NewsProps> = ({ email }) => {
	return (
		<TitledSection header="News">
			<TitledSubSection header="August 21">
				<Text>
					The server has been updated to 1.19.2. Players will need to update
					their mods and Minecraft version to play. Of special note:
				</Text>
				<UnorderedList>
					<ListItem>
						Optifine needs a 1.19.2 version for either stand-alone or Forge;
					</ListItem>
					<ListItem>Lithium for Fabric requires 0.8.3 for 1.19.2</ListItem>
					<ListItem>FabricAPI requires 0.60.0+1.19.2</ListItem>
				</UnorderedList>
				<Text>Datapacks have been added:</Text>
				<UnorderedList>
					<ListItem>
						Ender Dragon now drops an Ender Dragon egg and Elytra on death
					</ListItem>
					<ListItem>
						{
							"Tag can now be played. The number of times you've been tagged displays beneath your name"
						}
					</ListItem>
					<ListItem>
						Custom name prefixes should return after a player is afk
					</ListItem>
					<ListItem>
						Wandering traders have a 30% chance to sell a map to the nearest
						Ancient City
					</ListItem>
					<ListItem>
						Nether Portals can be made very small (minimum 4 obsidian)
					</ListItem>
					<ListItem>
						{
							"Equipping armor from the hotbar will swap it with the armor you're wearing. Works with Elytra by the way"
						}
					</ListItem>
				</UnorderedList>
			</TitledSubSection>
			<TitledSubSection header="August 3">
				<Text>
					The server has been updated to 1.19.1. If there is any trouble caused
					by the update, let me know at {email}, by text, or by discord. This
					also means some of the mods have been updated along with the vanilla
					tweaks more mob heads datapack.
				</Text>
			</TitledSubSection>
			<TitledSubSection header="July">
				<Text>
					The armor switch datapack has been removed. An armor-duping exploit
					was found with it, and so it will not return to the server unless that
					gets patched.
				</Text>
			</TitledSubSection>
		</TitledSection>
	);
};

export default memo(News);
