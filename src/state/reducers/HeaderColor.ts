import { SET_HEADER_COLOR } from '../actionTypes';
import { Colors } from '@adamwebster/fused-components';

const initialState = {
  headerColor: Colors.primary,
};

export default (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case SET_HEADER_COLOR:
      const { headerColor } = action.payload;
      return { ...state, headerColor };
    default:
      return state;
  }
};
