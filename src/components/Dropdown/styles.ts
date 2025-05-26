import styled from "styled-components";
import Drawer from "../Drawer";

export const DropdownItemContainer = styled.li`
    list-style: none;
    padding: .3rem;
`;

export const DropdownHeaderButton = styled.button`
    border: unset;
    border-radius: unset;
    width: 100%;
    cursor: pointer;
    padding: .5rem;

    background-color: ${({theme}) => theme.base};
`;

export const DropdownBodyContainer = styled(Drawer)`
    border-top: ${({theme}) => theme.primary} solid 2px;
    overflow: hidden;
    min-width: 100%;
`;

export const DropdownContainer = styled.div`
    border-radius: .75rem;
    border: ${({theme}) => theme.primary} solid 2px;
    width: fit-content;
    overflow: hidden;

    position: absolute;
    top: 0;
    left: 0;

    background-color: ${({theme}) => theme.baseAlt};
`;

export type SpacerProps = {
    $height: string | 0 | undefined;
    $width: string | 0 | undefined;
};

export const Spacer = styled.div<SpacerProps>`
    height: ${({$height}) => $height};
    width: ${({$width}) => $width};
`;

export const DropdownSpacerContainer = styled.div`
    position: relative;
`;