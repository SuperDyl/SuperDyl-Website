import { HeadFC } from "gatsby";
import React, { memo } from "react";
import Layout from "../../components/Layout";
import { Pages } from "../../constants";

const Minecraft = () => {
	return <Layout activeLink={Pages.MINECRAFT}></Layout>;
};

export default memo(Minecraft);

export const Head: HeadFC = () => <title>SuperDyl - Minecraft</title>;
