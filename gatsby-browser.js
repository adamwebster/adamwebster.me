/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { SiteContextProvider, SiteContext } from './src/state';

import React, { useContext } from 'react';
import FCThemeWrapper from './src/state/FCThemeWrapper';
config.autoAddCss = false;

export const wrapRootElement = ({ element }) => {
  return (
    <SiteContextProvider>
      <FCThemeWrapper>{element}</FCThemeWrapper>
    </SiteContextProvider>
  );
};
