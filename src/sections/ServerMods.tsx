import React, { FunctionComponent, memo } from "react";
import TitledSection from "../components/TitledSection";
import { ExternalLink, Text } from "../components/SharedStyles";
import ModTable from "../components/ModTable";
import { DownloadSites } from "../constants";

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
			<ModTable
				mods={[
					{
						modName: "Alternate Current",
						version: "1.54.0",
						downloadLinks: [
							{
								siteName: DownloadSites.GitHub,
								url: "https://github.com/SpaceWalkerRS/alternate-current/releases",
							},
						],
						purpose: "Optimizes update order of redstone wire and components",
					},
					{
						modName: "c2me",
						version: "0.2.0+alpha.10.518",
						downloadLinks: [
							{
								siteName: DownloadSites.GitHub,
								url: "https://github.com/RelativityMC/C2ME-fabric/releases",
							},
						],
						purpose: "Optimizes chunk loading by using multiple CPU cores",
					},
					{
						modName: "Fabric API",
						version: "0.81.160.0+1.19.42",
						downloadLinks: [
							{
								siteName: DownloadSites.GitHub,
								url: "https://github.com/FabricMC/fabric/releases",
							},
						],
						purpose: "Required library for most fabric mods",
					},
					{
						modName: "FerriteCore",
						version: "5.20.0",
						downloadLinks: [
							{
								siteName: DownloadSites.CurseForge,
								url: "https://www.curseforge.com/minecraft/mc-mods/ferritecore/files",
							},
							{
								siteName: DownloadSites.GitHub,
								url: "https://github.com/malte0811/FerriteCore/tags",
							},
						],
						purpose: "Optimizes memory usage",
					},
					{
						modName: "Lithium",
						version: "0.11.10.8.3+1.19.2",
						downloadLinks: [
							{
								siteName: DownloadSites.GitHub,
								url: "https://github.com/CaffeineMC/lithium-fabric/releases",
							},
						],
						purpose: "Optimizes many game operations",
					},
					{
						modName: "Servercore",
						version: "1.3.51",
						downloadLinks: [
							{
								siteName: DownloadSites.Modrinth,
								url: "https://modrinth.com/mod/servercore/versions",
							},
						],
						purpose:
							"Reduces lag spikes (offers other optimization options as well)",
					},
					{
						modName: "Smooth Boot",
						version: "1.19.4-1.7.01",
						downloadLinks: [
							{
								siteName: DownloadSites.GitHub,
								url: "https://github.com/UltimateBoomer/mc-smoothboot/releases",
							},
						],
						purpose:
							"Changes order of multithreading during game boot (speeds up boot)",
					},
					{
						modName: "Starlight",
						version: "1.1.1",
						downloadLinks: [
							{
								siteName: DownloadSites.CurseForge,
								url: "https://www.curseforge.com/minecraft/mc-mods/starlight/files",
							},
							{
								siteName: DownloadSites.GitHub,
								url: "https://github.com/PaperMC/Starlight",
							},
						],
						purpose:
							"Rewrites lighting engine. Much more efficient than using Phosphor",
					},
					{
						modName: "Very Many Player (VMP)",
						version: "0.2.0+beta.7.736.37 for 1.19.1",
						downloadLinks: [
							{
								siteName: DownloadSites.Modrinth,
								url: "https://modrinth.com/mod/vmp-fabric/versions",
							},
						],
						purpose:
							"Improves performance for large numbers of players. Probably not necessary, but why not?",
					},
				]}
			/>
		</TitledSection>
	);
};

export default memo(ServerMods);
