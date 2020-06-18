import React, { ReactNode, useContext } from 'react';
import styled, { createGlobalStyle } from 'styled-components';

import { Colors, FCThemeProvider } from '@adamwebster/fused-components';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { SiteContext } from '../../state';

const GlobalStyle = createGlobalStyle`
  body{
    background-color:${({ theme }) =>
      theme === 'dark' ? Colors.darkModeDarkest : Colors.light};    
    font-family:'Helvetica Neue', san-serif;
    font-size: 100%;
    line-height: 1.5;
    color: ${({ theme }) =>
      theme === 'dark' ? Colors.darkModeMedium : Colors.dark};
    padding: 0;
    margin: 0;  
  }
  a {
	color: #0067E6;
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

interface Props {
  children: ReactNode;
}

const LayoutChildren = ({ children }: Props) => {
  const { globalState } = useContext(SiteContext);

  return (
    <FCThemeProvider value={{ theme: globalState.theme }}>
      <GlobalStyle theme={globalState.theme} />
      <Header />
      <StyledContent>{children}</StyledContent>
      <Footer />
    </FCThemeProvider>
  );
};

export default LayoutChildren;
