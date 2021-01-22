import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import Logo from '../../assets/svgs/logo.svg';
import { Button, Colors } from '@adamwebster/fused-components';
import { Navigation } from '../Navigation';
import { Link, StaticQuery, graphql } from 'gatsby';
import { Index } from 'elasticlunr';
import { SearchBox } from '../SearchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { SiteContext } from '../../state';
interface SHProps {
  headerColor?: string;
}

const StyledButton = styled(Button)`
  color: ${Colors.lightest};
  cursor: pointer;
`;

interface StyledSiteHeaderProps {
  headerColor: string;
}
const StyledSiteHeader = styled.header<StyledSiteHeaderProps>`
  width: 100%;
  position: fixed;
  background-color: ${({ headerColor }) =>
    headerColor ? headerColor : Colors.primary};
  color: #fff;
  padding: 16px;
  box-sizing: border-box;
  display: flex;
  z-index: 2;
  top: 0;
`;

const StyledNav = styled.nav`
  display: flex;
  flex: 1 1;
  justify-content: flex-end;
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    li {
      padding: 0 8px;
    }
  }
`;
interface LWProps {
  headerColor: string;
}

const LogoWrapper = styled.div<LWProps>`
  width: 40px;
  padding-top: 5px;
`;

const Header = () => {
  const { dispatch, globalState } = useContext(SiteContext);

  const setThemeFunc = (e: any) => {
    e.preventDefault();
    e.stopPropagation();
    dispatch({ type: 'SET_DARK_MODE', payload: !globalState.darkMode });
    dispatch({ type: 'SET_DARK_MODE_SET', payload: true });
  };

  return (
    <StyledSiteHeader headerColor={globalState.headerColor}>
      <StyledNav>
        <Navigation />
      </StyledNav>
      <StyledButton as="a" onClick={(e: any) => setThemeFunc(e)}>
        <FontAwesomeIcon icon={globalState.darkMode ? faSun : faMoon} />
      </StyledButton>
    </StyledSiteHeader>
  );
};

export default Header;
