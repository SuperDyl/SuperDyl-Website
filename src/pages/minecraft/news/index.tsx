import React, { memo, FunctionComponent } from "react";
import Layout from "../../../components/Layout";
import { MC_PAGES } from "../../../constants";
import News from "../../../sections/News";
import { HeadFC } from "gatsby";

interface NewsPageProps {}

const NewsPage: FunctionComponent<NewsPageProps> = ({}) => {
	return (
		<Layout activeLink={MC_PAGES.NEWS}>
			<News teaser={false} />
		</Layout>
	);
};

export default memo(NewsPage);

export const Head: HeadFC = () => <title>SD|Minecraft News</title>;
