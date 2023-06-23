import React, { memo, FunctionComponent, ReactNode } from "react";
import { News, NewsContent, NewsContentType } from "../../news";
import TitledSubSection from "../TitledSubSection";
import { ListItem, Text, UnorderedList } from "../SharedStyles";

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
			//this shouldn't be possible
		}
	}

	return (
		<TitledSubSection
			header={news.date}
			className={className}
		>
			{content}
		</TitledSubSection>
	);
};

export default memo(NewsItem);
