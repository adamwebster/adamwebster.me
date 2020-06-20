import { SET_THEME, SET_HEADER_COLOR, SET_LOGO_HIDDEN } from '../actionTypes';
import { Colors } from '@adamwebster/fused-components';

const initialState = {
  theme: 'light',
  headerColor: Colors.primary,
  hideLogo: false,
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
    default:
      return state;
  }
};
