import { SET_THEME } from '../actionTypes';

const initialState = {
  theme: 'light',
};

export default (state = initialState, action: { type: any; payload: any }) => {
  switch (action.type) {
    case SET_THEME:
      const { theme } = action.payload;
      return { ...state, theme };
    default:
      return state;
  }
};
