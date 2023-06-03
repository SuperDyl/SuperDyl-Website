import React, { memo } from "react";
import TitledSection from "../components/TitledSection";
import TitledSubSection from "../components/TitledSubSection";
import { Text } from "../components/SharedStyles";

const RejectedChanges = () => {
	return (
		<TitledSection header="Rejected Changes">
			<Text>
				These are (unless otherwise specified) my current stance against changes
				I have rejected:
			</Text>
			<TitledSubSection header="Hack Clients">
				<Text>Hack clients are not allowed</Text>
			</TitledSubSection>
			<TitledSubSection header="Operators, Moderators, Administrators">
				<Text>
					Operator status is not being given to other players. This decision may
					be reviewed if later there are lots of players often using the server
					and there are good players to trust with operator powers
				</Text>
				<Text>
					Further, ownership of the server will not be switching hands at any
					time. Running a server is not just having access to the admin console,
					it requires keeping the server up to date, managing backups, reviewing
					changes, and keeping peace between players. It also costs money to
					run.
				</Text>
			</TitledSubSection>
			<TitledSubSection header="Large Phantoms (Vanilla Tweaks)">
				<Text>
					Large Phantoms from Vanilla Tweaks will not be added anytime soon. The
					main problem with the pack is that phantoms spawn for all players in
					the world if at least one player {"hasn't"} slept for a while. I{" "}
					{"don't"} want players that sleep consistently to be punished for
					other players choosing to not sleep.
				</Text>
			</TitledSubSection>
		</TitledSection>
	);
};

export default memo(RejectedChanges);
