import * as React from "react";
import { HeadFC, navigate } from "gatsby";
import Layout from "../components/Layout";
import { useEffect } from "react";

const IndexPage = () => {
	useEffect(() => {
		navigate("/minecraft");
	}, []);

	return (
		<Layout>
			<p>{"Redirecting..."}</p>
		</Layout>
	);
};

export default IndexPage;

export const Head: HeadFC = () => <title>SuperDyl.net</title>;
