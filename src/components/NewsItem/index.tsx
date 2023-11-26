import React, { memo, FunctionComponent, ReactNode } from "react";
import { News } from "../../news";
import ReactMarkdown from "react-markdown";
import {
	Header1,
	Header2,
	ListItem,
	Text,
	UnorderedList,
} from "../SharedStyles";
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
				<Header1>{news.title}</Header1>
				<DisappearingHeader1>—</DisappearingHeader1>
				<Header2>{news.date}</Header2>
			</HeaderContainer>
			<ReactMarkdown
				components={{
					p: Text,
					ul: UnorderedList,
					li: ListItem,
					h1: Header1,
					h2: Header2,
				}}
			>
				{news.markdown}
			</ReactMarkdown>
		</NewsItemContainer>
	);
};

export default memo(NewsItem);
