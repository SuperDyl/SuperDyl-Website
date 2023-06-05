import styled from "styled-components";

interface TooltipBoxProps {
	$visible: boolean;
}

export const TooltipBox = styled.div<TooltipBoxProps>`
	background-color: ${(props) => props.theme.base};
	/* translate: 0 -200%; */
	${({ $visible }) => ($visible ? "" : "display: none;")}
	position: absolute;
	z-index: 1;
	padding: 0.1em 0.4em;
	bottom: 100%;
	/* transform: translateX(50%); */
	color: ${(props) => props.theme.text};
	box-sizing: content-box;
	border: 0.2em solid ${(props) => props.theme.base};
	box-shadow: ${(props) => props.theme.baseAlt} 2px 2px 0.5em 5px;
	border-radius: 0.5em;

	::after {
		content: "";
		position: absolute;
		top: 100%;
		left: 50%;
		border-width: 9px;
		border-style: solid;
		border-color: ${(props) => props.theme.base} transparent transparent
			transparent;
		transform: translateX(-50%);
		z-index: -1;
	}
`;

export const CenteringBox = styled.div`
	width: 100%;
	position: absolute;
	display: flex;
	justify-content: center;
	translate: 0 -200%;
	z-index: 1;
	top: 0;
`;