import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/svgs/logo.svg';
import { Button } from '@adamwebster/fused-components';
import { Navigation } from '../Navigation';
import { Link, StaticQuery, graphql } from 'gatsby';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../state/actions';
import { Index } from 'elasticlunr';
import { SearchBox } from '../SearchBox';
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
    (state: { SiteSettings: { theme: string } }) => state.SiteSettings.theme
  );
  const headerColor = useSelector(
    (state: { SiteSettings: { headerColor: string } }) =>
      state.SiteSettings.headerColor
  );

  const hideLogo = useSelector(
    (state: { SiteSettings: { hideLogo: boolean } }) =>
      state.SiteSettings.hideLogo
  );
  const setThemeFunc = () => {
    const themeToSet = theme === 'dark' ? 'light' : 'dark';
    dispatch(setTheme(themeToSet));
    localStorage.setItem('theme', themeToSet);
  };

  return (
    <StyledHeader headerColor={headerColor} theme={'light'}>
      <StyledHeaderInner>
        {!hideLogo && (
          <Link title="Homepage" to="/">
            <LogoWrapper>
              <Logo />
            </LogoWrapper>
          </Link>
        )}
        <StyledSearchBox>
          <StyledSearchBoxWrapper>
            <StaticQuery
              query={graphql`
                query SearchIndexQuery {
                  siteSearchIndex {
                    index
                  }
                }
              `}
              render={data => {
                const searchIndex = Index.load(data.siteSearchIndex.index);
                return (
                  <>
                    <SearchBox data={searchIndex} />
                  </>
                );
              }}
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