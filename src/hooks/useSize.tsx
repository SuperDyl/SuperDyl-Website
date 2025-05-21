import { RefObject, useEffect, useLayoutEffect, useRef, useState } from "react";

export enum Directions {
    HEIGHT = "height",
    WIDTH = "width",
    BOTH = "both",
};

/**
 * Hand this function a component and when it changes size the element calling this hook will redraw.
 * 
 * If the writing-type is vertical instead of horizontal,
 * height and width are swapped.
 * 
 * See https://developer.mozilla.org/en-US/docs/Web/API/ResizeObserverEntry/contentBoxSize
 * 
 * blockSize usually represents
 * 
 * @param componentRef The component to watch the size of
 * @param directions Option to choose which of height and width to observe. Defaults to both
 * @returns {height, width} 
 */
const useSize = (
    componentRef: RefObject<HTMLElement | null>,
    directions: Directions = Directions.BOTH,
): { height: number | null, width: number | null } => {
    const [height, setHeight] = useState<number | null>(null);
    const [width, setWidth] = useState<number | null>(null);

    const resizeObserver = useRef<ResizeObserver | null>(null);

    useEffect(() => {

        resizeObserver.current?.disconnect();

        if (componentRef.current === null || componentRef.current === undefined) {
            resizeObserver.current = new ResizeObserver(() => { });
        } else {
            setHeight(componentRef.current.offsetHeight);
            setWidth(componentRef.current.offsetWidth);

            resizeObserver.current = new ResizeObserver(
                (entries: ResizeObserverEntry[]) => {
                    if (entries.length > 1) {
                        console.warn(
                            "Received multiple entries from 'useSize()'. Tracked component=",
                            componentRef.current,
                            "Entries=",
                            entries,
                        );
                    }

                    if (entries[0].contentBoxSize.length > 1) {
                        console.warn(
                            "Received multiple entires[0].contentBoxSize from 'useSize()'. Tracked component=",
                            componentRef.current,
                            "contentBoxSize=",
                            entries[0].contentBoxSize,
                        );
                    }

                    // height and width are swapped if writing-mode is set to vertical
                    if ([Directions.BOTH, Directions.HEIGHT].includes(directions)) {
                        setHeight(entries[0].contentBoxSize[0].blockSize);
                    }

                    if ([Directions.BOTH, Directions.WIDTH].includes(directions)) {
                        setWidth(entries[0].contentBoxSize[0].inlineSize);
                    }
                });

            resizeObserver.current.observe(componentRef.current);
        }

    }, [componentRef.current]);

    return ({ height: height, width: width });
}

export default useSize;