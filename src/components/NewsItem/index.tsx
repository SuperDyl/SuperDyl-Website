import React, { memo, FunctionComponent, ReactNode } from "react";
import { News } from "../../news";
import Markdown from "markdown-to-jsx";
import {
	DisappearingHeader1,
	HeaderContainer,
	NewsItemContainer,
} from "./styles";

interface NewsItemProps {
	className?: string;
	news: News;
}

const NewsItem: FunctionComponent<NewsItemProps> = ({ className, news }) => {
	const content: ReactNode[] = [];

	return (
		<NewsItemContainer className={className}>
			<HeaderContainer>
				<h1>{news.title}</h1>
				<DisappearingHeader1>—</DisappearingHeader1>
				<h2>{news.date}</h2>
			</HeaderContainer>
			<Markdown>
				{news.markdown}
			</Markdown>
		</NewsItemContainer>
	);
};

export default memo(NewsItem);
