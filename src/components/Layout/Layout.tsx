import React, { ReactNode } from "react";
import { createGlobalStyle } from "styled-components";
import { Header } from "../Header";

interface Props {
  children: ReactNode;
}

const GlobalStyle = createGlobalStyle`
  body{
    background-color: #F2F2F2;    
    font: 14px/1.5 'Helvetica Neue', san-serif;
    color: #5E5E5E;
    padding: 0;
    margin: 0;  
  }
`;

const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      {children}
    </>
  );
};

export default Layout;
