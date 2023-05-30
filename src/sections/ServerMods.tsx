import React, { FunctionComponent, memo } from "react";
import TitledSection from "../components/TitledSection";
import { ExternalLink, Text } from "../components/SharedStyles";
import BasicTable from "../components/BasicTable";

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
			<BasicTable
				columnHeaders={["Mod Name", "Version", "Download link(s)", "Purpose"]}
				rows={[
					[
						"Alternate Current",
						"1.54.0",
						<ExternalLink
							key="alternate-current-download"
							href="https://github.com/SpaceWalkerRS/alternate-current/releases"
						>
							GitHub
						</ExternalLink>,
						"Optimizes update order of redstone wire and components",
					],
					[
						"c2me",
						"0.2.0+alpha.10.518",
						<ExternalLink
							key="c2me-download"
							href="https://github.com/RelativityMC/C2ME-fabric/releases"
						>
							GitHub
						</ExternalLink>,
						"Optimizes chunk loading by using multiple CPU cores",
					],
					[
						"Fabric API",
						"0.81.160.0+1.19.42",
						<ExternalLink
							key="fabric-api-download"
							href="https://github.com/FabricMC/fabric/releases"
						>
							GitHub
						</ExternalLink>,
						"Required library for most fabric mods",
					],
					[
						"FerriteCore",
						"5.20.0",
						<Text key="ferrite-core-download">
							<ExternalLink href="https://www.curseforge.com/minecraft/mc-mods/ferritecore/files">
								CurseForge
							</ExternalLink>
							{", "}
							<ExternalLink href="https://github.com/malte0811/FerriteCore/tags">
								GitHub
							</ExternalLink>
						</Text>,
						"Optimizes memory usage",
					],
					[
						"Lithium",
						"0.11.10.8.3+1.19.2",
						<ExternalLink
							key="lithium-download"
							href="https://github.com/CaffeineMC/lithium-fabric/releases"
						>
							GitHub
						</ExternalLink>,
						"Optimizes many game operations",
					],
					[
						"Servercore",
						"1.3.51",
						<ExternalLink
							key="server-core-download"
							href="https://modrinth.com/mod/servercore/versions"
						>
							Modrinth
						</ExternalLink>,
						"Reduces lag spikes (offers other optimization options as well)",
					],
					[
						"Smooth Boot",
						"1.19.4-1.7.01",
						<ExternalLink
							key="smooth-boot-download"
							href="https://github.com/UltimateBoomer/mc-smoothboot/releases"
						>
							GitHub
						</ExternalLink>,
						"Changes order of multithreading during game boot (speeds up boot)",
					],
					[
						"Starlight",
						"1.1.1",
						<Text key="starlight-download">
							<ExternalLink href="https://www.curseforge.com/minecraft/mc-mods/starlight/files">
								CurseForge
							</ExternalLink>
							{", "}
							<ExternalLink href="https://github.com/PaperMC/Starlight">
								GitHub
							</ExternalLink>
						</Text>,
						"Rewrites lighting engine. Much more efficient than using Phosphor",
					],
					[
						"Very Many Players (VMP)",
						"0.2.0+beta.7.736.37 for 1.19.1",
						<ExternalLink
							key="very-many-players-download"
							href="https://modrinth.com/mod/vmp-fabric/versions"
						>
							Modrinth
						</ExternalLink>,
						"Improves performance for large numbers of players. Probably not necessary, but why not?",
					],
				]}
			/>
		</TitledSection>
	);
};

export default memo(ServerMods);
