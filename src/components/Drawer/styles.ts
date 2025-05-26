import styled from "styled-components";


export type DrawerOutsideProps = {
    $height?: 0 | string;
    $width?: 0 | string;
};

export const DrawerOutside = styled.div<DrawerOutsideProps>`
    overflow: hidden;
    transition: height 100ms, width 100ms;

    ${({$height}) => ($height === undefined) ? '':(`height: ${$height};`)}
    ${({$width}) => ($width === undefined) ? '':(`width: ${$width};`)}
`;

export const DrawerInside = styled.div`
    height: fit-content;
    width: fit-content;
`;