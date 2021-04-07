import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { AWMColors } from '../../styles/StyledVariables';

const StyledButton = styled.button`
  border-radius: 4px;
  height: 44px;
  padding: 0 16px;
  background-color: ${AWMColors.primaryColor};
  color: #fff;
  border: none;
  font-weight: bold;
  cursor: pointer;
  &:hover {
    background-color: ${darken(0.3, AWMColors.primaryColor)};
  }
`;

interface Props {
  children: ReactNode;
}
const Button = ({ children }: Props) => {
  return <StyledButton>{children}</StyledButton>;
};

export default Button;
