import React, { FunctionComponent, memo } from "react";
import { news } from "../news";
import NewsItem from "../components/NewsItem";
import Teaser from "../components/Teaser";
import { StyledNewsItem } from "../components/Teaser/styles";

interface NewsProps {
	teaser: boolean;
}

const News: FunctionComponent<NewsProps> = ({ teaser }) => {
	return teaser ? (
		<Teaser
			url="/minecraft/news"
			isLocal
			linkText="See all News"
		>
			<StyledNewsItem news={news[0]} />
		</Teaser>
	) : (
		<div>
			{news.map((newsItem) => (
				<NewsItem news={newsItem} />
			))}
		</div>
	);
};

export default memo(News);
