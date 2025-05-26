import React, { ReactElement, ReactNode, RefObject, useMemo, useRef } from 'react';
import {
    DropdownBodyContainer,
    DropdownContainer,
    DropdownHeaderButton,
    DropdownItemContainer,
    DropdownSpacerContainer,
    Spacer
} from './styles';
import useSize from '../../hooks/useSize';

export type DropdownItemProps = {
    children: ReactNode;
    [other: string]: any;
};

export const DropdownItem = ({ children, ...other }: DropdownItemProps) => {
    return (
        <DropdownItemContainer {...other}>
            {children}
        </DropdownItemContainer>
    );
}

export type DropdownHeaderProps = {
    children: ReactNode;
    onClick: () => void;
    innerRef?: RefObject<ReactElement | null>;
    [other: string]: any;
};

export const DropdownHeader = ({ children, onClick, innerRef, ...other }: DropdownHeaderProps) => {

    const innerButton = innerRef as RefObject<HTMLButtonElement> | undefined;

    return (
        <DropdownHeaderButton
            onClick={onClick}
            {...(innerButton === undefined ? {} : { ref: innerButton })}
            {...other}>
            {children}
        </DropdownHeaderButton>
    );
}

export type DropdownBodyProps = {
    children: ReactElement<DropdownItemProps> | ReactElement<DropdownItemProps>[],
    open: boolean;
    [other: string]: any;
};

export const DropdownBody = ({ children, open, ...other }: DropdownBodyProps) => {
    return (
        <DropdownBodyContainer open={open} {...other}>
            {children}
        </DropdownBodyContainer>
    );
}

export type DropdownProps = {
    children: [ReactElement<DropdownHeaderProps>, ReactElement<DropdownBodyProps>],
    className?: string;
    innerRef?: RefObject<HTMLElement | null>;
    [other: string]: any;
};

/**
 * This is a generic, stateless component.
 * It should be handed two children (a header and a body).
 * The body's open state is managed by the parent.
 * Even the on-click for the header has no default implementation.
 * 
 * The calling class is expected to handle opening and closing the component
 * and storing it's entire state.
 */
export const Dropdown = ({ children, innerRef, className, ...other }: DropdownProps) => {
    const headerRef: RefObject<ReactElement | null> = useRef(null);
    const { height: headerHeight, width: headerWidth } = useSize(headerRef as RefObject<HTMLElement | null>);

    const [dropdownHeader, dropdownBody, ...otherChildren] = children;
    if (otherChildren.length > 0) {
        console.error('Received more than 2 children for Dropdown. Children: ', children);
    }

    const clonedDropdownHeader = useMemo(
        () => React.cloneElement(dropdownHeader, { innerRef: headerRef }),
        [dropdownHeader]);

    return (
        <DropdownSpacerContainer className={className}>
            <Spacer
                $height={(headerHeight === null) ? undefined : `${headerHeight}px`}
                $width={(headerWidth === null) ? undefined : `${headerWidth}px`} />
            <DropdownContainer
                ref={innerRef as RefObject<HTMLDivElement>}
                {...other}>
                {clonedDropdownHeader}
                {dropdownBody}
            </DropdownContainer>
        </DropdownSpacerContainer>
    );
}
