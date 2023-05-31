import { HeadFC } from "gatsby";
import React, { memo, useMemo } from "react";
import Layout from "../../components/Layout";
import { Forms, Pages } from "../../constants";
import HelpfulLinks from "../../sections/HelpfulLinks";
import News from "../../sections/News";
import Rules from "../../sections/Rules";
import Changes from "../../sections/Changes";
import UnderReview from "../../sections/UnderReview";
import RejectedChanges from "../../sections/RejectedChanges";
import Datapacks from "../../sections/Datapacks";
import ServerMods from "../../sections/ServerMods";
import ClientMods from "../../sections/ClientMods";
import ExternalTabLink from "../../components/ExternalTabLink";

const Minecraft = () => {
	const email = useMemo(
		() => (
			<ExternalTabLink href="mailto:SuperDylEnt@gmail.com">
				SuperDylEnt@gmail.com
			</ExternalTabLink>
		),
		[]
	);
	const vtDatapacks = "https://vanillatweaks.net/share#XI164f";
	const vtCrafting = "https://vanillatweaks.net/share#2h8GfZ";
	const discordHref = "https://discord.superdyl.net";

	return (
		<Layout activeLink={Pages.MINECRAFT}>
			<HelpfulLinks
				datapacksHref={Forms.datapacksHref}
				modsHref={Forms.modsHref}
				whitelistHref={Forms.whitelistHref}
				otherHref={Forms.otherHref}
				underReviewHref={Forms.underReviewHref}
				discordHref={discordHref}
			/>
			<News email={email} />
			<Rules
				email={email}
				whitelistHref={Forms.whitelistHref}
			/>
			<Changes
				datapacksHref={Forms.datapacksHref}
				modsHref={Forms.modsHref}
				whitelistHref={Forms.whitelistHref}
				otherHref={Forms.otherHref}
			/>
			<UnderReview
				underReviewHref={Forms.underReviewHref}
				email={email}
			/>
			<RejectedChanges />
			<Datapacks
				vtDatapacksHref={vtDatapacks}
				vtCraftingHref={vtCrafting}
				suggestDatapackChangesHref={Forms.datapacksHref}
			/>
			<ServerMods modsHref={Forms.modsHref} />
			<ClientMods />
		</Layout>
	);
};

export default memo(Minecraft);

export const Head: HeadFC = () => <title>SuperDyl - Minecraft</title>;
