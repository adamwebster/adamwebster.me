import React from 'react';
import styled, { css } from 'styled-components';
import Logo from '../../assets/svgs/logo.svg';
import { Button, Colors } from '@adamwebster/fused-components';
import { Navigation } from '../Navigation';
import { Link, StaticQuery, graphql } from 'gatsby';
import { useDispatch, useSelector } from 'react-redux';
import { setTheme } from '../../state/actions';
import { Index } from 'elasticlunr';
import { SearchBox } from '../SearchBox';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
interface SHProps {
  headerColor?: string;
}

const StyledButton = styled(Button)`
  color: #fff;
  cursor: pointer;
  padding: 12px 0;
`;
const StyledHeader = styled.header<SHProps>`
  height: 50px;
  box-sizing: border-box;
  background-color: ${({ headerColor }) => headerColor};
  @media only screen and (max-width: 600px) {
    height: 100px;
  }
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

interface SSBProps {
  hasHero: boolean;
}

const StyledSearchBox = styled.div<SSBProps>`
  flex: 1 1;
  padding: 0 10px;
  margin-left: 200px;
  @media only screen and (max-width: 600px) {
    width: 100%;
    margin-left: 0;
    position: absolute;
    top: 50px;
    box-sizing: border-box;
    ${({ hasHero }) =>
      !hasHero &&
      css`
        background-color: ${({ theme }) =>
          theme === 'dark' ? Colors.darkModeDarker : Colors.medium};
      `}

    padding: 10px;
  }
`;

const StyledSearchBoxWrapper = styled.div`
  margin: 0 auto;
  @media only screen and (max-width: 600px) {
    max-width: 100%;
  }
`;

const LogoWrapper = styled.div`
  width: 40px;
  color: #fff;
  padding-top: 5px;
`;

const StyledNavigationWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  flex: 1 1;
  width: 300px;
  height: 100%;

  @media only screen and (max-width: 1080px) {
    margin-right: 10px;
  }
  @media only screen and (max-width: 1080px) {
    justify-content: flex-end;
  }
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

  const hasHero = useSelector(
    (state: { SiteSettings: { hasHero: boolean } }) =>
      state.SiteSettings.hasHero
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
        <StyledSearchBox hasHero={hasHero} theme={theme}>
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
        <StyledNavigationWrapper>
          <Navigation />
          <StyledButton as="a" onClick={() => setThemeFunc()}>
            <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} />
          </StyledButton>
        </StyledNavigationWrapper>
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;
