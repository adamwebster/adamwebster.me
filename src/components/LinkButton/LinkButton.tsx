import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Colors } from '@adamwebster/fused-components';
import { darken } from 'polished';
const StyledLink = styled(Link)`
  color: #fff;
  background-color: ${Colors.primary};
  border-radius: 5px;
  padding: 5px 10px;
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
