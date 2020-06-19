import { SET_THEME, SET_HEADER_COLOR } from './actionTypes';

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
