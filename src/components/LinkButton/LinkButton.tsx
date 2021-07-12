import React, { ReactNode } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { Colors } from '@adamwebster/fused-components';
import { darken } from 'polished';
import { AWMVariables } from '../../styles/StyledVariables';

interface SLProps {
  primary?: boolean;
}
const StyledLink = styled(Link)<SLProps>`
  border-radius: 4px;
  height: 44px;
  box-sizing: border-box;
  padding: 8px 16px;
  text-decoration: none;
  display: inline-block;
  background-color: ${({ theme }) =>
    `var(--color-primary, ${theme.colors.primary})`};
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

export const StyledLinkStandard = styled.a`
  border-radius: 4px;
  height: 44px;
  padding: 8px 16px;
  display: inline-block;
  box-sizing: border-box;
  text-decoration: none;
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

interface Props {
  to: string;
  children: ReactNode;
  primary?: boolean;
}
const LinkButton = ({ to, primary, ...rest }: Props) => {
  return <StyledLink role="button" primary={primary} to={to} {...rest} />;
};

export default LinkButton;
