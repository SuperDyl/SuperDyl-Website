import React, { memo } from "react";
import TitledSection from "../components/TitledSection";
import TitledSubSection from "../components/TitledSubSection";

const RejectedChanges = () => {
	return (
		<TitledSection header="Rejected Changes">
			<p>
				These are (unless otherwise specified) my current stance against changes
				I have rejected:
			</p>
			<TitledSubSection header="Hack Clients">
				<p>Hack clients are not allowed</p>
			</TitledSubSection>
			<TitledSubSection header="Operators, Moderators, Administrators">
				<p>
					Operator status is not being given to other players. This decision may
					be reviewed if later there are lots of players often using the server
					and there are good players to trust with operator powers
				</p>
				<p>
					Further, ownership of the server will not be switching hands at any
					time. Running a server is not just having access to the admin console,
					it requires keeping the server up to date, managing backups, reviewing
					changes, and keeping peace between players. It also costs money to
					run.
				</p>
			</TitledSubSection>
			<TitledSubSection header="Large Phantoms (Vanilla Tweaks)">
				<p>
					Large Phantoms from Vanilla Tweaks will not be added anytime soon. The
					main problem with the pack is that phantoms spawn for all players in
					the world if at least one player {"hasn't"} slept for a while. I{" "}
					{"don't"} want players that sleep consistently to be punished for
					other players choosing to not sleep.
				</p>
			</TitledSubSection>
		</TitledSection>
	);
};

export default memo(RejectedChanges);
