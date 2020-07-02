import React, { ReactNode, useContext } from 'react';
import { FCThemeProvider } from '@adamwebster/fused-components';
import { SiteContext } from '.';

interface Props {
  children: ReactNode;
}
const FCThemeWrapper = ({ children }: Props) => {
  const { globalState } = useContext(SiteContext);
  const { theme } = globalState;
  console.log(theme);
  return <>{children}</>;
};

export default FCThemeWrapper;
