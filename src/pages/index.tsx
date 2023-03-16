import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout";
import { Text } from "./styles";

const IndexPage = () => {
	return (
		<Layout>
			<Text>{"Eh, I don't know what you were expecting"}</Text>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>SuperDyl.net</title>;
