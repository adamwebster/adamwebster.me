import React from 'react';
import styled from 'styled-components';
import Logo from '../../assets/svgs/logo.svg';
import { Combobox, Colors, Button } from '@adamwebster/fused-components';
import { Navigation } from '../Navigation';
import { Link } from 'gatsby';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../state/actions';

interface SHProps {
  headerColor?: string;
}
const StyledHeader = styled.header<SHProps>`
  height: 50px;
  box-sizing: border-box;
  background-color: ${({ headerColor }) => headerColor};
`;

const StyledHeaderInner = styled.div`
  width: 1080px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  flex: 1 1;
  height: 50px;
  @media only screen and (max-width: 1080px) {
    width: 100%;
  }
`;

const StyledSearchBox = styled.div`
  flex: 1 1;
  padding: 0 10px;
`;

const StyledSearchBoxWrapper = styled.div`
  max-width: 300px;
  margin: 0 auto;
`;

const LogoWrapper = styled.div`
  width: 40px;
  color: #fff;
  padding-top: 5px;
`;

const Header = () => {
  const dispatch = useDispatch();
  const theme = useSelector(
    (state: { SiteTheme: { theme: string } }) => state.SiteTheme.theme
  );
  const headerColor = useSelector(
    (state: { HeaderColor: { headerColor: string } }) =>
      state.HeaderColor.headerColor
  );
  const setThemeFunc = () => {
    const themeToSet = theme === 'dark' ? 'light' : 'dark';
    dispatch(setTheme(themeToSet));
  };
  return (
    <StyledHeader headerColor={headerColor} theme={'light'}>
      <StyledHeaderInner>
        <Link title="Homepage" to="/">
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </Link>
        <StyledSearchBox>
          <StyledSearchBoxWrapper>
            <Combobox
              aria-label="Search the site"
              inputIcon="search"
              openOnClick={false}
              id="SearchInput"
              items={[]}
            />
          </StyledSearchBoxWrapper>
        </StyledSearchBox>
        <Navigation />
        <Button primary onClick={() => setThemeFunc()}>
          Switch Theme
        </Button>
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;
