import React from "react";
import styled from "styled-components";
import Logo from "../../assets/svgs/logo.svg";
import { Combobox } from "@adamwebster/fused-components";
const StyledHeader = styled.header`
  border-bottom: solid 1px #ccc;
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
`;

const Header = () => {
  return (
    <StyledHeader>
      <StyledHeaderInner>
        <a href="/">
          <LogoWrapper>
            <Logo />
          </LogoWrapper>
        </a>
        <StyledSearchBox>
          <StyledSearchBoxWrapper>
            <Combobox id="SearchInput" items={[]} />
          </StyledSearchBoxWrapper>
        </StyledSearchBox>
        {/* <MainNav /> */}
      </StyledHeaderInner>
    </StyledHeader>
  );
};

export default Header;
