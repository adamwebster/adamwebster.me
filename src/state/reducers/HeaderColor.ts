import { SET_HEADER_COLOR, SET_LOGO_HIDDEN } from '../actionTypes';
import { Colors } from '@adamwebster/fused-components';

const initialState = {
  headerColor: Colors.primary,
  hideLogo: false,
};

export default (state = initialState, action: { type: any; payload: any }) => {
  console.log(action.payload);
  switch (action.type) {
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
