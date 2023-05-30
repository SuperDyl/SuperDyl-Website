import { HeadFC } from "gatsby";
import React, { memo, useMemo } from "react";
import Layout from "../../components/Layout";
import { Forms, Pages } from "../../constants";
import { ExternalLink } from "../../components/SharedStyles";
import HelpfulLinks from "../../sections/HelpfulLinks";
import News from "../../sections/News";
import Rules from "../../sections/Rules";
import Changes from "../../sections/Changes";
import UnderReview from "../../sections/UnderReview";
import RejectedChanges from "../../sections/RejectedChanges";
import Datapacks from "../../sections/Datapacks";
import ServerMods from "../../sections/ServerMods";
import ClientMods from "../../sections/ClientMods";

const Minecraft = () => {
	const email = useMemo(
		() => (
			<ExternalLink href="mailto:SuperDylEnt@gmail.com">
				SuperDylEnt@gmail.com
			</ExternalLink>
		),
		[]
	);

	return (
		<Layout activeLink={Pages.MINECRAFT}>
			<HelpfulLinks
				datapacksHref={Forms.datapacksHref}
				modsHref={Forms.modsHref}
				whitelistHref={Forms.whitelistHref}
				otherHref={Forms.otherHref}
				underReviewHref={Forms.underReviewHref}
			/>
			<News email={email} />
			<Rules email={email} />
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
			<Datapacks />
			<ServerMods modsHref={Forms.modsHref} />
			<ClientMods />
		</Layout>
	);
};

export default memo(Minecraft);

export const Head: HeadFC = () => <title>SuperDyl - Minecraft</title>;
