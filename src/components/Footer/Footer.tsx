import React, { useContext } from 'react';
import styled from 'styled-components';
import { Colors } from '@adamwebster/fused-components';
import { useSelector } from 'react-redux';

const StyledFooter = styled.footer`
  border-top: solid 1px
    ${({ theme }) => (theme === 'dark' ? Colors.darkModeMedium : Colors.border)};
`;

const StyledFooterInner = styled.div`
  width: 1080px;
  margin: 0 auto;
  font-size: 12px;
  padding: 5px;
  box-sizing: border-box;
  @media only screen and (max-width: 1080px) {
    width: 100%;
  }
`;
const Footer = () => {
  const theme = useSelector((state: { theme: string }) => state.theme);
  return (
    <StyledFooter theme={theme}>
      <StyledFooterInner>&copy; 2020 Adam Webster</StyledFooterInner>
    </StyledFooter>
  );
};

export default Footer;
