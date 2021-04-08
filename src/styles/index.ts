import styled, { css } from 'styled-components';
import { HTMLAttributes } from 'react';
import { Button, Colors } from '@adamwebster/fused-components';
import { AWMColors, AWMVariables } from './StyledVariables';

export const StyledContentWrapper = styled.div`
    max-width: 1120px;
    margin: 64px auto;
    @media (max-width: 1120px) {
        padding: 0 16px;
    }
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


export const StyledSectionHeader = styled.h2`
  font-family: 'Dosis', sans-serif;
  color: ${AWMColors.primaryColor};
  font-weight: 800;
  font-size: 2rem;

`
export const StyledButton = styled(Button)`
  border-radius: ${AWMVariables.borderRadius};
  padding: 0 25px;
`;