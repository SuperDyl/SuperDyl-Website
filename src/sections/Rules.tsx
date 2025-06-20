import React, { FunctionComponent, memo } from "react";
import TitledSection from "../components/TitledSection";
import TitledSubSection from "../components/TitledSubSection";
import ExternalTabLink from "../components/ExternalTabLink";
import EmailLink from "../components/EmailLink";

interface RulesProps {
	whitelistHref: string;
}

const Rules: FunctionComponent<RulesProps> = ({ whitelistHref }) => {
	return (
		<TitledSection header="Rules">
			<p>
				I want to keep rules brief, so they are more spirit-of-the-law rather
				than word-of-the-law
			</p>
			<TitledSubSection header="Be considerate of others">
				<p>
					If they don't (or probably don't) like something, don't do it to them.
					Depending on the person and situation, this could include stealing,
					killing players or their animals, building too close to someone's
					builds, destroying other player's stuff, etc.This also includes
					avoiding profanity and pretty much anything crass. Within reason, if
					someone asks you to stop, you stop.
				</p>
			</TitledSubSection>
			<TitledSubSection header="The server is whitelisted">
				<p>
					Let me know who you want added to the whitelist and I probably will
					add them to the server whitelist. Just give me their username (spelled
					correctly with capital/lowercase also correct) and how they're related
					to you (such as friend, relative, alternate account, etc.) You can
					email me directly at <EmailLink />
					{" or use this "}
					<ExternalTabLink href={whitelistHref}>whitelist form</ExternalTabLink>
				</p>
			</TitledSubSection>
			<TitledSubSection header="Client-side mods/resource packs">
				<p>
					Client-side mods/resource packs should not give play advantages over
					using plain vanilla Minecraft. If a mod gives a slight play advantage,
					those features are discouraged and I would encourage turning those
					specific options off (for example, minimap mods usually show nearby
					players and mobs and some inventory management mods automatically
					replace armor and totems of undying as it breaks).
				</p>
			</TitledSubSection>
			<TitledSubSection header="Bugs/exploits">
				<p>
					Bugs/exploits which allow seeing through normally opaque blocks,
					duplicating items/blocks/entities, etc. are not allowed. Bugs allowing
					faster clicking speeds and breaking bedrock are fine. If a bug may
					seem cheaty, ask me about it before using it.
				</p>
			</TitledSubSection>
			<TitledSubSection header="If rules are broken">
				<p>
					If rules are broken, they will be encouraged to try reconciling the
					issue with each other first. If the issue isn't resolved, then I will
					act as arbiter if possible before giving punishments. Taden defaults
					as arbiter if needed if an issue arises between me and another player
					that we cannot resolve on our own.
				</p>
			</TitledSubSection>
		</TitledSection>
	);
};

export default memo(Rules);
