import React, { FunctionComponent, memo } from "react";
import { ExternalLink, Text } from "../components/SharedStyles";
import TitledSection from "../components/TitledSection";
import TitledSubSection from "../components/TitledSubSection";

interface RulesProps {
	email: JSX.Element;
}

const Rules: FunctionComponent<RulesProps> = ({ email }) => {
	return (
		<TitledSection header="Rules">
			<Text>
				I want to keep rules brief, so they are more spirit-of-the-law rather
				than word-of-the-law
			</Text>
			<TitledSubSection header="Be considerate of others">
				<Text>
					{
						"If they don't (or probably don't) like something, don't do it to them. Depending on the person and situation, this could include stealing, killing players or their animals, building too close to someone's builds, destroying other player's stuff, etc.This also includes avoiding profanity and pretty much anything crass. Within reason, if someone asks you to stop, you stop."
					}
				</Text>
			</TitledSubSection>
			<TitledSubSection header="The server is whitelisted">
				<Text>
					{
						"Let me know who you want added to the whitelist and I probably will add them to the server whitelist. Just give me their username (spelled correctly with capital/lowercase also correct) and how they're related to you (such as friend, relative, alternate account, etc.) You can email me directly at "
					}
					{email}
					{" or use this "}
					<ExternalLink>whitelist form</ExternalLink>
				</Text>
			</TitledSubSection>
			<TitledSubSection header="Client-side mods/resource packs">
				<Text>
					Client-side mods/resource packs should not give play advantages over
					using plain vanilla Minecraft. If a mod gives a slight play advantage,
					those features are discouraged and I would encourage turning those
					specific options off (for example, minimap mods usually show nearby
					players and mobs and some inventory management mods automatically
					replace armor and totems of undying as it breaks).
				</Text>
			</TitledSubSection>
			<TitledSubSection header="Bugs/exploits">
				<Text>
					Bugs/exploits which allow seeing through normally opaque blocks,
					duplicating items/blocks/entities, etc. are not allowed. Bugs allowing
					faster clicking speeds and breaking bedrock are fine. If a bug may
					seem cheaty, ask me about it before using it.
				</Text>
			</TitledSubSection>
			<TitledSubSection header="If rules are broken">
				<Text>
					If rules are broken, they will be encouraged to try reconciling the
					issue with each other first. If the issue isn’t resolved, then I will
					act as arbiter if possible before giving punishments. Taden defaults
					as arbiter if needed if an issue arises between me and another player
					that we cannot resolve on our own.
				</Text>
			</TitledSubSection>
		</TitledSection>
	);
};

export default memo(Rules);
