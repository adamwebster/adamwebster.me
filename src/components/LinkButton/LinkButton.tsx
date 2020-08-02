import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Colors } from '@adamwebster/fused-components';
import { darken } from 'polished';
import { AWMVariables } from '../../styles/StyledVariables';
const StyledLink = styled(Link)`
  color: #fff;
  background-color: ${Colors.primary};
  border-radius: ${AWMVariables.borderRadius};
  padding: 5px 25px;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease 0s;
  text-transform: uppercase;
  &:hover {
    background-color: ${darken(0.1, Colors.primary)};
    transform: scale(1.05);
  }
`;

export const StyledLinkStandard = styled.a`
  color: #fff;
  background-color: ${Colors.primary};
  border-radius: ${AWMVariables.borderRadius};
  padding: 5px 25px;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  transition: all 0.2s ease 0s;
  &:hover {
    background-color: ${darken(0.1, Colors.primary)};
    transform: scale(1.05);
  }
`;

interface Props {
  to: string;
  children: ReactNode;
}
const LinkButton = ({ to, ...rest }: Props) => {
  return <StyledLink role="button" to={to} {...rest} />;
};

export default LinkButton;
