import React, { ReactNode, useRef } from "react";
import { DrawerInside, DrawerOutside } from "./styles";
import useSize from "../../hooks/useSize";

export enum Direction {
    VERTICAL = 'vertical',
    HORIZONTAL = 'horizontal',
    BOTH = 'both',
};

interface DrawerProps {
    className?: string;
    children?: ReactNode;
    open: boolean;
    direction?: Direction;
};

/**
 * If text is vertical, than the directions are swapped
 */
const Drawer = ({
    className,
    children,
    open,
    direction = Direction.VERTICAL,
}: DrawerProps) => {
    const drawerInsideRef = useRef<HTMLDivElement | null>(null);
    const { height, width } = useSize(drawerInsideRef);

    const displayedHeight = (height === null || direction === Direction.HORIZONTAL)
        ? undefined
        : (open
            ? `${height}px`
            : "0");

    const displayedWidth = (width === null || direction === Direction.VERTICAL)
        ? undefined
        : (open
            ? `${width}px`
            : "0");

    return (
        <DrawerOutside $height={displayedHeight} $width={displayedWidth}>
            <DrawerInside ref={drawerInsideRef} className={className}>
                {children}
            </DrawerInside>
        </DrawerOutside>
    );
};

export default Drawer;
