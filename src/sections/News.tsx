import React, { FunctionComponent, memo } from "react";
import { news } from "../news";
import NewsItem from "../components/NewsItem";

interface NewsProps {}

const News: FunctionComponent<NewsProps> = () => {
	return (
		<div>
			{news.map((newsItem) => (
				<NewsItem news={newsItem} />
			))}
		</div>
	);
};

export default memo(News);
