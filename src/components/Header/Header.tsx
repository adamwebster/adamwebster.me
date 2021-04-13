import { Button } from '../Button';
import React, { useContext } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/svgs/logo.svg';
import { SiteContext } from '../../state';

const StyledHeader = styled.header`
  width: 100%;
  position: absolute;
  z-index: 100;
  color: ${({ theme }) =>
    theme.name === 'dark' ? '#fff' : theme.colors.primary};
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
`;

const StyledNavigation = styled.nav`
  flex: 1 1;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  a {
    padding: 0 16px;
    text-decoration: none;
    color: ${({ theme }) =>
      theme.name === 'dark' ? '#fff' : theme.colors.primary};
  }
`;
const Header = () => {
  const { dispatch } = useContext(SiteContext);
  const setTheme = () => {
    console.log('set');
    dispatch({ type: 'TOGGLE_THEME' });
  };
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <StyledLogo>
          <Logo />
        </StyledLogo>
        <StyledNavigation>
          <a href="/">Home</a> <a href="/">Portfolio</a>
          <a href="/">Articles </a>
          <a onClick={() => setTheme()}>Contact</a>
          <Button title="test" onClick={() => setTheme()}>
            Set Theme
          </Button>
        </StyledNavigation>
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;
