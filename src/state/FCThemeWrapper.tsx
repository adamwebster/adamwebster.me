import React, { ReactNode } from 'react';
import { useSelector } from 'react-redux';
import { FCThemeProvider } from '@adamwebster/fused-components';

interface Props {
  children: ReactNode;
}
const FCThemeWrapper = ({ children }: Props) => {
  const theme = useSelector(
    (state: { SiteSettings: { theme: string } }) => state.SiteSettings.theme
  );
  return (
    <FCThemeProvider value={{ theme }}>
      <>{children}</>
    </FCThemeProvider>
  );
};

export default FCThemeWrapper;
