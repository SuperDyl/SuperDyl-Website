import React, { FunctionComponent, memo } from "react";
import TitledSection from "../components/TitledSection";
import { ExternalLink, Text } from "../components/SharedStyles";
import BasicTable from "../components/BasicTable";

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
			<BasicTable
				columnHeaders={["Mod Name", "Version", "Download link(s)", "Purpose"]}
				rows={[
					[
						"c2me",
						"0.2.0+alpha.8",
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
						"0.60.058.5+1.19.2",
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
						"5.0.0",
						<Text key="ferrite-core-download">
							<ExternalLink href="https://www.curseforge.com/minecraft/mc-mods/ferritecore/files">
								CurseForge
							</ExternalLink>
							{", "}
							<ExternalLink href="https://github.com/malte0811/FerriteCore/tags">
								GitHub
							</ExternalLink>
						</Text>,
						"Optimizes memory usage. ",
					],
					[
						"LazyDFU",
						"0.1.3",
						<ExternalLink
							key="lazy-dfu-download"
							href="https://github.com/astei/lazydfu/releases"
						>
							GitHub
						</ExternalLink>,
					],
					[
						"Lithium",
						"0.8.3+1.19.2",
						<ExternalLink
							key="lithium-download"
							href="https://github.com/CaffeineMC/lithium-fabric/releases"
						>
							GitHub
						</ExternalLink>,
						"Optimizes many game operations",
					],
					[
						"Smooth Boot",
						"1.19-1.7.1",
						<ExternalLink
							key="smooth-boot-download"
							href="https://github.com/UltimateBoomer/mc-smoothboot/releases"
						>
							GitHub
						</ExternalLink>,
						"Changes order of multithreading during game boot (speeds up boot)",
					],
					[
						"Sodium",
						"0.4.2",
						<ExternalLink
							key="sodium-download"
							href="https://github.com/CaffeineMC/sodium-fabric/releases"
						>
							GitHub
						</ExternalLink>,
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
				]}
			/>
		</TitledSection>
	);
};

export default memo(ClientMods);
