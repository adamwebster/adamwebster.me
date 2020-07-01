import React, { ReactNode } from 'react';
import styled, { createGlobalStyle } from 'styled-components';
import { Colors, FCThemeProvider } from '@adamwebster/fused-components';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { useSelector } from 'react-redux';

interface GSProps {
  headerColor: string;
}
const GlobalStyle = createGlobalStyle<GSProps>`
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
	color: ${({ theme }) => (theme === 'dark' ? '#4297FF' : Colors.primary)};
    }
h1, h2, h3, h4, h5, h6 {
	margin: 0 0 0.5em 0;
	line-height: 1;
  border-left: solid 5px ${({ headerColor }) => headerColor};
  padding-left: 10px;
}


h1 {
	font-size: 2em;
}
p{
  margin: 25px 0;
}
`;

interface SCProps {
  layout?: string;
}
const StyledContent = styled.div<SCProps>`
  width: ${({ layout }) => (layout === 'full' ? '100vw' : '1080px')};
  margin: 0 auto;
  @media only screen and (max-width: 1080px) {
    width: 100%;
    box-sizing: border-box;
  }
`;

interface Props {
  children: ReactNode;
  hero?: ReactNode;
  layout?: string;
}

const BlogPostLayout = ({ children, layout, hero }: Props) => {
  const theme = useSelector(
    (state: { SiteSettings: { theme: string } }) => state.SiteSettings.theme
  );

  const headerColor = useSelector(
    (state: { SiteSettings: { headerColor: string } }) =>
      state.SiteSettings.headerColor
  );
  return (
    <>
      <FCThemeProvider value={{ theme }}>
        <GlobalStyle headerColor={headerColor} theme={theme} />
        <Header />
        {hero && hero}
        <StyledContent layout={layout}>{children}</StyledContent>
        <Footer />
      </FCThemeProvider>
    </>
  );
};

export default BlogPostLayout;
