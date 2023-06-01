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
			<TitledSubSection header="May 31">
				<Text>
					The original Google Docs page has been replaced with this website!
					Feel free to offer suggestions on how I can improve this page.
				</Text>
				<Text>
					Here is the promised list of mod changes:
					<UnorderedList>
						<ListItem>
							Audaki Cart Engine: Makes mine carts 4 times faster on straight
							sections
						</ListItem>
						<ListItem>Chunky: Tool to pre-generate chunks</ListItem>
						<ListItem>
							Inv View: Gives admins the ability to view and edit inventories
						</ListItem>
						<ListItem>
							Keep Head: Preserves extra data on player heads that are placed
							and picked up again
						</ListItem>
						<ListItem>Ledger: Gives admins a log of player actions</ListItem>
						<ListItem>Mods Command: Shows installed mods</ListItem>
						<ListItem>
							Slumber: Hibernates the server when no players are online
						</ListItem>
					</UnorderedList>
					And a list of datapack changes:
					<UnorderedList>
						<ListItem>ADD THE LIST HERE {/*TODO*/}</ListItem>
					</UnorderedList>
				</Text>
			</TitledSubSection>
			<TitledSubSection header="May 24">
				<Text>
					The server has been updated to 1.19.4. Players will need to update
					Minecraft and any mods they use in order to play. Specifics on mods
					and versions being used will be updated later.
				</Text>
				<Text>
					Some quick notes:
					<UnorderedList>
						<ListItem>Shulkers now always drop 2 shells</ListItem>
						<ListItem>
							A held compass will show your current coordinates and direction
						</ListItem>
						<ListItem>
							Armor swapping now exists in the game, no datapacks needed
						</ListItem>
						<ListItem>
							Non-cobbled deepslate can be used in stone-cutters
						</ListItem>
						<ListItem>Mine carts are now up to 4x faster</ListItem>
					</UnorderedList>
				</Text>
			</TitledSubSection>

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
