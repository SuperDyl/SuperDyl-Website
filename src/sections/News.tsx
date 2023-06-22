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
			<TitledSubSection header="June 21">
				<Text>
					The server has been updated to 1.20.1, the Trails and Tales update.
					This update includes new terrain generation such as suspicious
					sand/gravel, the trail ruins structure, and the cherry grove biome.
				</Text>
				<Text>
					To make this update easier, I have deleted all Overworld chunks which
					players have not visited for more than a few minutes. This will mean
					more lag from loading new chunks. It also means that content from the
					new update will be closer to already loaded chunks.
				</Text>
				<Text>
					Also, here again is a reminder to update the mods you use. If you are
					using the suggested client-side mods, you will need to update these
					mods:
				</Text>
				<UnorderedList>
					<ListItem>Alternate Current --{">"} 1.6.0</ListItem>
					<ListItem>c2me --{">"} 0.2.0+alpha.10.91</ListItem>
					<ListItem>Chunky --{">"} 1.3.92</ListItem>
					<ListItem>Fabric API --{">"} 0.83.1</ListItem>
					<ListItem>FerriteCore --{">"} 6.0.0</ListItem>
					<ListItem>Lithium --{">"} 0.11.2</ListItem>
					<ListItem>Mods Command --{">"} 1.1.3</ListItem>
				</UnorderedList>
			</TitledSubSection>
			<TitledSubSection header="June 4">
				<Text>Summer Carnival Community Event</Text>
				<Text>
					I originally intended community events to happen rather often, but we
					haven't had one since the Ender Dragon fight last August. It's time
					for another event: the summer carnival! For this event, everyone is
					invited to create some type of carnival ride or game at the carnival
					grounds. This Friday or Saturday (depending on scheduling), everyone
					can get on the server together to play the games together.
				</Text>
				<Text>
					Other details:
					<UnorderedList>
						<ListItem>
							All the games will be free to play. If a game requires a gamble,
							you will need to provide some form of tokens to freely use (and
							plenty for the duration of the carnival)
						</ListItem>
						<ListItem>
							The carnival fairgrounds are southeast of the cobblestone
							wall/lava cast
						</ListItem>
						<ListItem>
							Everyone who puts in effort in building at least one game/event
							will be compensated a couple diamonds for their effort
						</ListItem>
						<ListItem>Prizes will be given to the best games/events</ListItem>
						<ListItem>
							I expect the carnival to last about 90 minutes, but players can
							stay on afterward or return to the carnival on other days
						</ListItem>
						<ListItem>
							Generally, games should be low risk: players shouldn't be at risk
							of losing valuable items. If possible, please provide all items
							players will need for your games
						</ListItem>
					</UnorderedList>
				</Text>
				<Text>
					Some suggestions:
					<UnorderedList>
						<ListItem>Ice boat racing</ListItem>
						<ListItem>Parkour course</ListItem>
						<ListItem>Spleef</ListItem>
						<ListItem>PvP arena</ListItem>
						<ListItem>Elytra race course</ListItem>
						<ListItem>Bow/Crossbow shooting range</ListItem>
						<ListItem>Pig jousting</ListItem>
						<ListItem>Rollercoaster</ListItem>
					</UnorderedList>
				</Text>
			</TitledSubSection>
			<TitledSubSection header="June 2">
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
						<ListItem>
							Better Compass: Compasses show player coordinates and direction
						</ListItem>
						<ListItem>
							Better Deepslate Stonecutting: Gives deepslate the stonecutter
							recipes of cobbled deepslate
						</ListItem>
						<ListItem>
							Vanilla Tweaks Double Shulker Shells: Shulkers always drop two
							shells
						</ListItem>
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
