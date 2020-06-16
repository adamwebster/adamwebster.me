import React, { useContext } from "react";
import styled from "styled-components";
import Logo from "../../assets/svgs/logo.svg";
import { Combobox, Colors, Button } from "@adamwebster/fused-components";
import { Navigation } from "../Navigation";
import { Link } from "gatsby";
import { SiteContext } from "../../state";

const StyledHeader = styled.header`
  border-bottom: solid 1px
    ${({ theme }) => (theme === "dark" ? Colors.darkModeMedium : Colors.border)};
  height: 50px;
  box-sizing: border-box;
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
  color: ${Colors.primary};
`;

const Header = () => {
  const { globalState, dispatch } = useContext(SiteContext);
  const setTheme = () => {
    const themeToSet = globalState.theme === "dark" ? "light" : "dark";
    dispatch({ type: "SET_THEME", payload: themeToSet });
  };
  return (
    <StyledHeader theme={globalState.theme}>
      <StyledHeaderInner>
        <Link to="/">
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </Link>
        <StyledSearchBox>
          <StyledSearchBoxWrapper>
            <Combobox
              aria-label="Search the site"
              icon="search"
              openOnClick={false}
              id="SearchInput"
              items={[]}
            />
          </StyledSearchBoxWrapper>
        </StyledSearchBox>
        <Navigation />
        <Button primary onClick={() => setTheme()}>
          Switch Theme
        </Button>
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;
