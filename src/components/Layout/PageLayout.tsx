import React, { ReactNode, useContext, useEffect } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { CodeHighlight } from '../CodeHighlight';
import {
  Colors,
  ToastProvider,
  FCThemeProvider,
} from '@adamwebster/fused-components';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { SiteContext } from '../../state';
import { BuyMeACoffeeWidget } from '../BuyMeACoffee';
import { MDXProvider } from '@mdx-js/react';
import { MDXRenderer } from 'gatsby-plugin-mdx';

const GlobalStyle = createGlobalStyle`
  body{
    background-color:${({ theme }) =>
      theme === 'dark' ? Colors.darkModeDarkest : Colors.light};    
    font-family:'Helvetica Neue', sans-serif;
    font-size: 100%;
    line-height: 1.5;
    color: ${({ theme }) =>
      theme === 'dark' ? Colors.darkModeLight : Colors.dark};
    padding: 0;
    margin: 0;  
  }
  a {
    color: ${({ theme }) => (theme === 'dark' ? '#8bbdfb' : '#0067E6')};
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

interface Props {
  children: string;
  hero?: ReactNode;
}

const PageLayout = ({ children, hero }: Props) => {
  const { globalState, dispatch } = useContext(SiteContext);

  useEffect(() => {
    if (
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches
    ) {
      if (!globalState.darkModeSet)
        dispatch({ type: 'SET_DARK_MODE', payload: true });
    }
    window.matchMedia('(prefers-color-scheme: dark)').addListener(function (e) {
      const toSet = e.matches ? true : false;
      dispatch({ type: 'SET_DARK_MODE', payload: toSet });
    });
  }, []);
  return (
    <>
      <FCThemeProvider
        value={{ theme: globalState.darkMode ? 'dark' : 'light' }}
      >
        <ToastProvider>
          <GlobalStyle theme={globalState.darkMode ? 'dark' : 'light'} />
          <Header />
          {hero && hero}
          <StyledContent>
            <MDXProvider components={{ CodeHighlight }}>{children}</MDXProvider>
          </StyledContent>
          4
          <Footer />
        </ToastProvider>
      </FCThemeProvider>
    </>
  );
};

export default PageLayout;
