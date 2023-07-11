import React, { memo, FunctionComponent, ReactNode } from "react";
import { News, NewsContent, NewsContentType } from "../../news";
import TitledSubSection from "../TitledSubSection";
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

	let item: NewsContent;
	for (item of news.content) {
		if (item.type === NewsContentType.PARAGRAPHS) {
			let paragraph: string;
			for (paragraph of item.items) {
				content.push(<Text>{paragraph}</Text>);
			}
		} else if (item.type === NewsContentType.LIST) {
			content.push(
				<UnorderedList>
					{item.items.map((listItem) => (
						<ListItem>{listItem}</ListItem>
					))}
				</UnorderedList>
			);
		} else {
			//this shouldn't be reachable
		}
	}

	return (
		<NewsItemContainer className={className}>
			<HeaderContainer>
				<Header1>{news.title}</Header1>
				<DisappearingHeader1>—</DisappearingHeader1>
				<Header2>{news.date}</Header2>
			</HeaderContainer>

			{content}
		</NewsItemContainer>
	);
};

export default memo(NewsItem);
