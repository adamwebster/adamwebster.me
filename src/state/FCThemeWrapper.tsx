import React, { ReactNode, useContext } from 'react';
import { SiteContext } from '.';

interface Props {
  children: ReactNode;
}
const FCThemeWrapper = ({ children }: Props) => {
  const { globalState } = useContext(SiteContext);
  return <>{children}</>;
};

export default FCThemeWrapper;
