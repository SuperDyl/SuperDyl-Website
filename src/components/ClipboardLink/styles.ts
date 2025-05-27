import styled from "styled-components";
import { SharedLinkStyling } from "../SharedStyles";

export const CopyToClipboard = styled.button`
	border: unset;
	padding: unset;

	${SharedLinkStyling}
	display: flex;
	position: relative;
	cursor: copy;

	&:hover svg {
		color: ${(props) => props.theme.secondary};
	}
`;
