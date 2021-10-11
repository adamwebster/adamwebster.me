import React, { ReactNode, useContext } from 'react';
import { ThemeProvider } from 'styled-components';
import { SiteContext } from '.';

interface Props {
  children: ReactNode;
}
const SiteThemeWrapper = ({ children }: Props) => {
  const { globalState } = useContext(SiteContext);
  return <ThemeProvider theme={globalState.theme}>{children}</ThemeProvider>;
};

export default SiteThemeWrapper;
