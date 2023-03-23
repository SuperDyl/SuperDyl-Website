import styled from "styled-components";
import { Header2 } from "../SharedStyles";
import {
	StickyHeaderShared,
	TitledSectionContainer,
} from "../TitledSection/styles";

export const TitledSubSectionContainer = styled(TitledSectionContainer)`
	background-color: ${(props) => props.theme.base};
	margin: 1em 0;
	position: relative;
`;

interface StickyHeader2Props {
	stickyOffset?: string;
}

export const StickyHeader2 = styled(Header2)<StickyHeader2Props>`
	${StickyHeaderShared}
	background-color: ${(props) => props.theme.base};
	top: calc(15px + ${({ stickyOffset = "1.5em" }) => stickyOffset});
`;
