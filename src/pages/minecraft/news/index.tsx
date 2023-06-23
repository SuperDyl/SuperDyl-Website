import React, { memo, FunctionComponent } from "react";
import Layout from "../../../components/Layout";
import { MC_PAGES } from "../../../constants";
import { news } from "../../../news";
import NewsItem from "../../../components/NewsItem";

interface NewsPageProps {}

const NewsPage: FunctionComponent<NewsPageProps> = ({}) => {
	return (
		<Layout activeLink={MC_PAGES.NEWS}>
			{news.map((newsItem) => (
				<NewsItem news={newsItem} />
			))}
		</Layout>
	);
};

export default memo(NewsPage);
