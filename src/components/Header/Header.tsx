import React from 'react';
import styled from 'styled-components';
import { AWMColors } from '../../styles/StyledVariables';
import Logo from '../../assets/svgs/logo.svg';

const StyledHeader = styled.header`
  width: 100%;
  background-color: ${AWMColors.heroBGColor};
`;

const StyledHeaderInner = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 16px;
  display: flex;
  align-items: center;
`;

const StyledLogo = styled.div`
  height: 50px;
  display: inline-block;
  width: 50px;
  color: ${AWMColors.primaryColor};
`;

const StyledNavigation = styled.nav`
  flex: 1 1;
  display: flex;
  justify-content: flex-end;
  a {
    padding: 0 16px;
    text-decoration: none;
  }
`;
const Header = () => (
  <StyledHeader>
    <StyledHeaderInner>
      <StyledLogo>
        <Logo />
      </StyledLogo>
      <StyledNavigation>
        <a href="/">Home</a> <a href="/">Portfolio</a>
        <a href="/">Articles </a>
        <a href="/">Contact</a>
      </StyledNavigation>
    </StyledHeaderInner>
  </StyledHeader>
);

export default Header;
