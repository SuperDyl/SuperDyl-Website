import React, { memo, FunctionComponent } from "react";
import Layout from "../../../components/Layout";
import { MC_PAGES } from "../../../constants";
import News from "../../../sections/News";

interface NewsPageProps {}

const NewsPage: FunctionComponent<NewsPageProps> = ({}) => {
	return (
		<Layout activeLink={MC_PAGES.NEWS}>
			<News />
		</Layout>
	);
};

export default memo(NewsPage);
