import React, { ReactNode } from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { Colors } from '@adamwebster/fused-components';

const StyledLink = styled(Link)`
  color: #fff;
  background-color: ${Colors.primary};
  border-radius: 5px;
  padding: 5px 10px;
  box-sizing: border-box;
  text-align: center;
  text-decoration: none;
  display: inline-block;
`;

interface Props {
  to: string;
  children: ReactNode;
}
const LinkButton = ({ to, ...rest }: Props) => {
  return <StyledLink role="button" to={to} {...rest} />;
};

export default LinkButton;
