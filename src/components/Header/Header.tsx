import React, { useContext, useEffect } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/svgs/logo.svg';
import { SiteContext } from '../../state';
import { DarkMode } from '../../themes/DarkMode';
import { LightMode } from '../../themes/LightMode';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'gatsby';

const StyledHeader = styled.header`
  width: 100%;
  z-index: 100;
  height: 50px;
  background-color: ${({ theme }) =>
    `var(--color-cardBGColor, ${theme.colors.cardBGColor})`};
  color: ${({ theme }) => `var(--color-primary, ${theme.colors.primary})`};
  border-bottom: solid 1px
    ${({ theme }) => `var(--color-borderColor, ${theme.colors.borderColor})`};
`;

const StyledHeaderInner = styled.div`
  max-width: 1248px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  height: 50px;
`;

const StyledLogo = styled.div`
  height: 40px;
  width: 40px;
`;

const StyledControlSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
`;

const StyledButton = styled.button`
  background-color: transparent;
  border: none;
  color: inherit;
`;
const Header = () => {
  const { dispatch, globalState } = useContext(SiteContext);
  const setTheme = () => {
    dispatch({ type: 'TOGGLE_THEME' });
    window.localStorage.setItem(
      'awm_theme_mode',
      globalState.theme.name === 'dark' ? 'light' : 'dark'
    );
  };

  useEffect(() => {
    const root = window.document.documentElement;

    root.style.setProperty(
      '--color-text',
      globalState.theme.name === 'light'
        ? LightMode.colors.text
        : DarkMode.colors.text
    );
    root.style.setProperty(
      '--color-background',
      globalState.theme.name === 'light'
        ? LightMode.colors.backgroundColor
        : DarkMode.colors.backgroundColor
    );
    root.style.setProperty(
      '--color-cardBGColor',
      globalState.theme.name === 'light'
        ? LightMode.colors.cardBGColor
        : DarkMode.colors.cardBGColor
    );
    root.style.setProperty(
      '--color-borderColor',
      globalState.theme.name === 'light'
        ? LightMode.colors.borderColor
        : DarkMode.colors.borderColor
    );
    root.style.setProperty(
      '--color-primary',
      globalState.theme.name === 'light'
        ? LightMode.colors.primary
        : DarkMode.colors.primary
    );
    root.style.setProperty(
      '--color-buttonText',
      globalState.theme.name === 'light'
        ? LightMode.colors.button.textColor
        : DarkMode.colors.button.textColor
    );

    root.style.setProperty(
      '--color-buttonHover',
      globalState.theme.name === 'light'
        ? LightMode.colors.button.hoverColor
        : DarkMode.colors.button.hoverColor
    );

    root.style.setProperty(
      '--color-tagBackground',
      globalState.theme.name === 'light'
        ? LightMode.colors.tag.background
        : DarkMode.colors.tag.background
    );

    root.style.setProperty(
      '--color-tagText',
      globalState.theme.name === 'light'
        ? LightMode.colors.tag.text
        : DarkMode.colors.tag.text
    );
  }, [globalState.theme]);
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <StyledLogo>
          <Link
            to="/"
            title="Adam Webster | UI Designer and Front-end Developer"
          >
            <Logo />
          </Link>
        </StyledLogo>
        <StyledControlSection>
          <StyledButton title="Toggle theme" onClick={() => setTheme()}>
            <FontAwesomeIcon
              icon={globalState.theme.name === 'dark' ? faSun : faMoon}
            />{' '}
          </StyledButton>
        </StyledControlSection>
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;
