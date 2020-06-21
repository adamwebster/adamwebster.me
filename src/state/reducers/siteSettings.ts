import {
  SET_THEME,
  SET_HEADER_COLOR,
  SET_LOGO_HIDDEN,
  SET_HAS_HERO,
} from '../actionTypes';
import { Colors } from '@adamwebster/fused-components';

let themeValue: string | null = 'light';
const windowGlobal: any = typeof window !== 'undefined' && window;

if (windowGlobal) {
  themeValue = localStorage.getItem('theme')
    ? localStorage.getItem('theme')
    : 'light';
}
const initialState = {
  theme: themeValue,
  headerColor: Colors.primary,
  hideLogo: false,
  hasHero: true,
};

export default (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case SET_THEME:
      const { theme } = action.payload;
      return { ...state, theme };
    case SET_HEADER_COLOR:
      const { headerColor } = action.payload;
      return { ...state, headerColor };
    case SET_LOGO_HIDDEN:
      const { hideLogo } = action.payload;
      return { ...state, hideLogo };
    case SET_HAS_HERO:
      const { hasHero } = action.payload;
      return { ...state, hasHero };
    default:
      return state;
  }
};
