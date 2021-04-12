import React, { ReactNode } from 'react';
import { createGlobalStyle } from 'styled-components';
import { Footer } from '../Footer';
import { Header } from '../Header';

const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior: smooth;
}
  body{
    background-color:${({ theme }) => theme.colors.backgroundColor};    
    font-family:'Helvetica Neue', sans-serif;
    font-size: 100%;
    line-height: 1.5;
    color: ${({ theme }) => theme.colors.text};
    padding: 0;
    margin: 0;  
  }
h1, h2, h3, h4, h5, h6 {
	margin: 0 0 0.5em 0;
	font-weight: 400;
	line-height: 1.2;
}

h1 {
	font-size: 2em;
}

figcaption{
  text-align: center;
  font-style: italic;
  font-weight: 300;
}

a{
  color: ${({ theme }) => theme.colors.primary};
}
`;

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <GlobalStyle />
      <Header />

      {children}
      <Footer />
    </>
  );
};
export default Layout;
