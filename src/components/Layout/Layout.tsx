import React, { ReactNode } from "react";

import { SiteContextProvider } from "../../state";
import LayoutChildren from "./LayoutChildren";

interface Props {
  children: ReactNode;
}
const Layout = ({ children }: Props) => {
  return (
    <>
      <SiteContextProvider>
        <LayoutChildren>{children}</LayoutChildren>
      </SiteContextProvider>
    </>
  );
};

export default Layout;
