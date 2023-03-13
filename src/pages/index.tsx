import * as React from "react";
import type { HeadFC } from "gatsby";
import Layout from "../components/Layout";
import { Text } from "./styles";

const IndexPage = () => {
	return (
		<Layout>
			<Text>heyo!!</Text>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>Home Page</title>;
