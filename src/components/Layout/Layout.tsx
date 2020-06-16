import React, { ReactNode } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Header } from "../Header";
import { Footer } from "../Footer";
import { Colors } from "@adamwebster/fused-components";
import { AWMColors } from "../../styles/Colors";

interface Props {
  children: ReactNode;
}

const GlobalStyle = createGlobalStyle`
  body{
    background-color: ${Colors.light};    
    font: 14px/1.5 'Helvetica Neue', san-serif;
    color: ${Colors.dark};
    padding: 0;
    margin: 0;  
  }
  a {
	color: ${AWMColors.primaryColor};
}
h1, h2, h3, h4, h5, h6 {
	margin: 0 0 0.5em 0;
	font-weight: 400;
	line-height: 1.2;
}

h1 {
	font-size: 2em;
}
`;

const StyledContent = styled.div`
  width: 1080px;
  margin: 0 auto;
  @media only screen and (max-width: 1080px) {
    width: 100%;
    padding: 0 10px;
    box-sizing: border-box;
  }
`;

const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <StyledContent>{children}</StyledContent>
      <Footer />
    </>
  );
};

export default Layout;
