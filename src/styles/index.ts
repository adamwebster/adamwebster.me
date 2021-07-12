import styled, { css } from 'styled-components';
import { HTMLAttributes } from 'react';
import { Button, Colors } from '@adamwebster/fused-components';
import { AWMVariables } from './StyledVariables';

export const StyledContentWrapper = styled.div`
  max-width: 1248px;
  margin: 64px auto;
  @media (max-width: 1248px) {
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

export const StyledSectionHeader = styled.h2``;
export const StyledButton = styled(Button)`
  border-radius: ${AWMVariables.borderRadius};
  padding: 0 25px;
`;

export const StyledTag = styled.div`
  font-size: 0.8rem;
  background-color: #ccc;
  padding: 8px 16px;
  border-radius: 30px;
  display: inline-block;
  background-color: ${({ theme }) =>
    `var(--color-tagBackground, ${theme.colors.tag.background})`};
  color: ${({ theme }) => `var(--color-tagTxt, ${theme.colors.tag.text})`};
  margin-top: 8px;
`;

export const StyledAvatar = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: ${({ theme }) =>
    `var(--color-primary, ${theme.colors.primary})`};
  color: ${({ theme }) =>
    `var(--color-buttonText, ${theme.colors.button.textColor})`};
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
`;
