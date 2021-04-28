import { Button } from '../Button';
import React, { useContext } from 'react';
import styled from 'styled-components';
import Logo from '../../assets/svgs/logo.svg';
import { SiteContext } from '../../state';

const StyledHeader = styled.header`
  width: 100%;
  z-index: 100;
  height: 50px;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) =>
    theme.name === 'dark' ? '#fff' : theme.colors.primary};
  border-bottom: solid 1px ${({ theme }) => theme.colors.borderColor};
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
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;
