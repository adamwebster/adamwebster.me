import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { AWMColors } from '../../styles/StyledVariables';

interface ButtonProps extends React.HtmlHTMLAttributes<HTMLButtonElement> {
  buttonColor?: string;
}
const StyledButton = styled.button<ButtonProps>`
  border-radius: 4px;
  height: 44px;
  padding: 0 16px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) =>
    theme.name === 'dark' ? darken(0.5, theme.colors.primary) : '#fff'};
  border: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${({ theme }) =>
      darken(0.1, theme.colors.primary as string)};
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
