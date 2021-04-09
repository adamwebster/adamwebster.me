import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  max-width: 1120px;
  margin: 0 auto;
  padding: 16px;
  clear: both;
  font-size: 0.8rem;
`;
const Footer = () => (
  <StyledFooter>&copy;{new Date().getFullYear()} Adam Webster</StyledFooter>
);

export default Footer;
