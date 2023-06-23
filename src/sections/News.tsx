import React, { FunctionComponent, memo } from "react";
import TitledSection from "../components/TitledSection";
import { news } from "../news";
import NewsItem from "../components/NewsItem";

interface NewsProps {}

const News: FunctionComponent<NewsProps> = () => {
	return (
		<TitledSection header="News">
			{news.map((newsItem) => (
				<NewsItem news={newsItem} />
			))}
		</TitledSection>
	);
};

export default memo(News);
