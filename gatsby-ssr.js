/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
import React from 'react';
export { default as wrapRootElement } from './src/state/reduxWrapper';
import { LightMode } from './src/themes/LightMode';
import { DarkMode } from './src/themes/DarkMode';

const MagicScriptTag = ({ themeOptions }) => {
  let codeToRunOnClient = `
  (function() {
    const themeOptionsColor = "${
      themeOptions.themeColor ? themeOptions.themeColor : 'default'
    }";
    function getInitialColorMode() {
      const persistedColorPreference =
      window.localStorage.getItem('awm_theme_mode');
      const hasPersistedPreference =
      typeof persistedColorPreference === 'string';
    // If the user has explicitly chosen light or dark,
    // let's use it. Otherwise, this value will be null.
    if (hasPersistedPreference) {
      return persistedColorPreference;
    }
    // If they haven't been explicit, let's check the media
    // query
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    const hasMediaQueryPreference = typeof mql.matches === 'boolean';
    if (hasMediaQueryPreference) {
      return mql.matches ? 'dark' : 'light';
    }
    // If they are using a browser/OS that doesn't support
    // color themes, let's default to 'light'.
    return 'light';
    }

    window.localStorage.setItem('awm_theme_mode', getInitialColorMode() )
    const colorMode = getInitialColorMode();
    const root = document.documentElement;

    root.style.setProperty(
        '--color-text',
        colorMode === 'light'
          ?  '${LightMode.colors.text}'
          : '${DarkMode.colors.text}'
      );
      root.style.setProperty(
        '--color-background',
        colorMode === 'light'
          ? '${LightMode.colors.backgroundColor}'
          : '${DarkMode.colors.backgroundColor}'
      );
      root.style.setProperty(
        '--color-cardBGColor',
        colorMode === 'light'
          ? '${LightMode.colors.cardBGColor}'
          : '${DarkMode.colors.cardBGColor}'
      );
      root.style.setProperty(
        '--color-borderColor',
        colorMode === 'light'
          ? '${LightMode.colors.borderColor}'
          : '${DarkMode.colors.borderColor}'
      );

      root.style.setProperty(
        '--color-primary',
        colorMode === 'light'
          ? '${LightMode.colors.primary}'
          : '${DarkMode.colors.primary}'
      );

      root.style.setProperty(
        '--color-buttonText',
        colorMode === 'light'
          ? '${LightMode.colors.button.textColor}'
          : '${DarkMode.colors.button.textColor}'
      );

      root.style.setProperty(
        '--color-buttonHover',
        colorMode === 'light'
          ? '${LightMode.colors.button.hoverColor}'
          : '${DarkMode.colors.button.hoverColor}'
      );
      root.style.setProperty('--initial-color-mode', colorMode);

  })()`;
  // eslint-disable-next-line react/no-danger
  return <script dangerouslySetInnerHTML={{ __html: codeToRunOnClient }} />;
};

export const onRenderBody = ({ setPreBodyComponents }, themeOptions) => {
  setPreBodyComponents(
    <MagicScriptTag key={Math.random()} themeOptions={themeOptions} />
  );
};
