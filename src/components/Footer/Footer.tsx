import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer``;

const StyledFooterInner = styled.div`
  width: 1080px;
  margin: 50px auto 0 auto;
  font-size: 12px;
  padding: 5px;
  box-sizing: border-box;
  @media only screen and (max-width: 1080px) {
    width: 100%;
  }
`;
const Footer = () => {
  return (
    <StyledFooter>
      <StyledFooterInner>&copy; 2020 Adam Webster</StyledFooterInner>
    </StyledFooter>
  );
};

export default Footer;
