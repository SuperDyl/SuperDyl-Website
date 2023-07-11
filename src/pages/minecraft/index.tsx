import { HeadFC } from "gatsby";
import React, { memo } from "react";
import Layout from "../../components/Layout";
import { Forms, MC_PAGES } from "../../constants";
import News from "../../sections/News";
import Rules from "../../sections/Rules";
import Changes from "../../sections/Changes";
import UnderReview from "../../sections/UnderReview";
import RejectedChanges from "../../sections/RejectedChanges";
import Datapacks from "../../sections/Datapacks";
import ServerMods from "../../sections/ServerMods";
import ClientMods from "../../sections/ClientMods";
import HelpfulLinks from "../../sections/HelpfulLinks";

const vtDatapacks = "https://vanillatweaks.net/share#XI164f";
const vtCrafting = "https://vanillatweaks.net/share#2h8GfZ";

const Minecraft = () => {
	return (
		<Layout activeLink={MC_PAGES.HOME}>
			<News teaser={true} />
			<HelpfulLinks />
			<Rules whitelistHref={Forms.whitelistHref} />
			<Changes
				datapacksHref={Forms.datapacksHref}
				modsHref={Forms.modsHref}
				whitelistHref={Forms.whitelistHref}
				otherHref={Forms.otherHref}
			/>
			<UnderReview underReviewHref={Forms.underReviewHref} />
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
