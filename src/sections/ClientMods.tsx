import React, { FunctionComponent, memo } from "react";
import TitledSection from "../components/TitledSection";
import { Text } from "../components/SharedStyles";
import ModTable from "../components/ModTable";
import { DownloadSites } from "../constants";

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
			<ModTable
				mods={[
					{
						modName: "c2me",
						version: "0.2.0+alpha.8",
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
						version: "0.60.058.5+1.19.2",
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
						version: "5.0.0",
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
						modName: "LazyDFU",
						version: "0.1.3",
						downloadLinks: [
							{
								siteName: DownloadSites.GitHub,
								url: "https://github.com/astei/lazydfu/releases",
							},
						],
						purpose: "",
					},

					{
						modName: "Lithium",
						version: "0.8.3+1.19.2",
						downloadLinks: [
							{
								siteName: DownloadSites.GitHub,
								url: "https://github.com/CaffeineMC/lithium-fabric/releases",
							},
						],
						purpose: "Optimizes many game operations",
					},

					{
						modName: "Smooth Boot",
						version: "1.19-1.7.1",
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
						modName: "Sodium",
						version: "0.4.2",
						downloadLinks: [
							{
								siteName: DownloadSites.GitHub,
								url: "https://github.com/CaffeineMC/sodium-fabric/releases",
							},
						],
						purpose: "",
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
				]}
			/>
		</TitledSection>
	);
};

export default memo(ClientMods);
