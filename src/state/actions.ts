import { SET_THEME, SET_HEADER_COLOR, SET_LOGO_HIDDEN } from './actionTypes';

export const setTheme = (theme: any) => ({
  type: SET_THEME,
  payload: {
    theme,
  },
});

export const setHeaderColor = (headerColor: string) => ({
  type: SET_HEADER_COLOR,
  payload: {
    headerColor,
  },
});

export const SetLogoHidden = (hideLogo: boolean) => ({
  type: SET_LOGO_HIDDEN,
  payload: {
    hideLogo,
  },
});
