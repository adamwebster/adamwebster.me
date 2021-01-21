import styled, { css } from 'styled-components';
import { HTMLAttributes } from 'react';
import { Colors } from '@adamwebster/fused-components';

export const StyledContentWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 16px;
`;


interface StyledFullWidthWrapperProps extends HTMLAttributes<HTMLDivElement> {
    bgColor?: string;
    bgImage?: string;

    show?: boolean;
}
export const StyledFullWidthWrapper = styled.div<StyledFullWidthWrapperProps>`
    position: relative;
    background-color: ${({ bgColor }) => (bgColor ? bgColor : Colors.primary)};
    padding: 32px 16px;
    transition: all 1s ease-in;
    ${({ show }) =>
        css`
            opacity: ${show ? '1' : '0'};
        `}
    ${({ bgImage }) =>
        bgImage &&
        css`
            background-image: url(${bgImage});
            background-size: cover;
            background-position: center;
            &:after {
                content: '';
                position: absolute;
                background-color: rgba(0, 0, 0, 0.8);
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                z-index: 0;
            }
        `}
`;
