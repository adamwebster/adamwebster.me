import React, { ReactNode, useContext, useEffect } from 'react';
import { createGlobalStyle, css } from 'styled-components';
import { SiteContext } from '../../state';
import { Footer } from '../Footer';
import { Header } from '../Header';

interface GSProps {
  scrollDisabled: boolean;
}
const GlobalStyle = createGlobalStyle<GSProps>`
html{
  scroll-behavior: smooth;
}
  body{
    background-color:${({ theme }) =>
      `var(--color-background, ${theme.colors.backgroundColor})`};    
    font-family:'Helvetica Neue', sans-serif;
    font-size: 100%;
    line-height: 1.5;
    color: ${({ theme }) => `var(--color-text, ${theme.colors.text})`};
    padding: 0;
    margin: 0;  
    ${({ scrollDisabled }) =>
      scrollDisabled &&
      css`
        overflow: hidden;
      `}
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
  color: ${({ theme }) => `var(--color-primary, ${theme.colors.primary})`};
}
`;

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  const { globalState } = useContext(SiteContext);
  return (
    <>
      <GlobalStyle scrollDisabled={globalState.scrollDisabled} />
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default Layout;
