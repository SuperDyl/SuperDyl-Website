import React, { memo } from "react";
import { MC_PAGES } from "../../../constants";
import { ListItem, OrderedList, Text } from "../../../components/SharedStyles";
import { StyledLayout } from "./styles";
import { HeadFC } from "gatsby";

const Play = () => {
	return (
		<StyledLayout activeLink={MC_PAGES.PLAY}>
			<Text>
				mc.superdyl.net is a survival Minecraft server with only small changes
				made through datapacks. The server is whitelisted—if you would like to
				join the server, please contact me at EMAIL or fill out THIS FORM.
				Please let me know if you are a relative or friend of someone else on
				the server.
			</Text>
			<Text>
				Once you are added to the whitelist, you can add the server ip address
				and join.
			</Text>
			<OrderedList>
				<ListItem>Open Minecraft Java Edition in VERSION 1.20.1</ListItem>
				<ListItem>Open the Multiplayer menu and click "Add Server"</ListItem>
				<ListItem>The name can be anything, for example SuperDyl.net</ListItem>
				<ListItem>For the ip address, put mc.superdyl.net</ListItem>
				<ListItem>You can join the server at any time</ListItem>
			</OrderedList>
		</StyledLayout>
	);
};

export default memo(Play);

export const Head: HeadFC = () => <title>SD|Minecraft Play</title>;
