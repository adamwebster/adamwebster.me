import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { AWMColors } from '../../styles/StyledVariables';

interface ButtonProps {
  buttonColor?: string;
}
const StyledButton = styled.button<ButtonProps>`
  border-radius: 4px;
  height: 44px;
  padding: 0 16px;
  background-color: ${({ buttonColor }) => buttonColor};
  color: #fff;
  border: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${({ buttonColor }) =>
      darken(0.1, buttonColor as string)};
  }
`;

interface Props {
  children: ReactNode;
  buttonColor?: string;
}
const Button = ({ children, buttonColor = AWMColors.primaryColor }: Props) => {
  return <StyledButton buttonColor={buttonColor}>{children}</StyledButton>;
};

export default Button;