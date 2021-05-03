import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { darken, cssVar } from 'polished';
import { AWMColors } from '../../styles/StyledVariables';

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  buttonColor?: string;
}
const StyledButton = styled.button<ButtonProps>`
  border-radius: 4px;
  height: 44px;
  padding: 0 16px;
  background-color: ${({ theme }) =>
    `var(--color-buttonBackground, ${theme.colors.button.background})`};
  color: ${({ theme }) =>
    `var(--color-buttonText, ${theme.colors.button.textColor})`};
  border: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      `var(--color-buttonHover, ${theme.colors.button.hoverColor})`};
  }
`;

interface Props extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  buttonColor?: string;
}
const Button = ({ children, ...rest }: Props) => {
  return <StyledButton {...rest}>{children}</StyledButton>;
};

export default Button;
