import { HeadFC } from "gatsby";
import React, { memo } from "react";
import Layout from "../../components/Layout";

const Minecraft = () => {
	return <Layout></Layout>;
};

export default memo(Minecraft);

export const Head: HeadFC = () => <title>SuperDyl - Minecraft</title>;
