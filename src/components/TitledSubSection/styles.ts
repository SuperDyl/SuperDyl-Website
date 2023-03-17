import styled from "styled-components";
import { TitledSectionContainer } from "../TitledSection/styles";

export const TitledSubSectionContainer = styled(TitledSectionContainer)`
	background-color: ${(props) => props.theme.base};
	margin: 1em 0;
`;
