import React, { createContext, ReactElement } from 'react';
import { DarkMode } from '../themes/DarkMode';
import { LightMode } from '../themes/LightMode';

const initialState = {
  theme:
    typeof window !== 'undefined'
      ? window.localStorage.getItem('awm_theme_mode') === 'light'
        ? LightMode
        : DarkMode
      : LightMode,
  scrollDisabled: false,
};

export const SiteContext = createContext({
  globalState: initialState,
  dispatch: (value: any) => value,
});
export const SiteContextConsumer = SiteContext.Consumer;

type contextTypes = 'SET_THEME' | 'TOGGLE_THEME' | 'DISABLE_SCROLL';

const reducer = (state: any, action: { payload: any; type: contextTypes }) => {
  const { payload, type } = action;
  console.log('theme', state.theme.name);
  switch (type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: payload,
      };
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme.name === 'dark' ? LightMode : DarkMode,
      };
    case 'DISABLE_SCROLL':
      return {
        ...state,
        scrollDisabled: payload,
      };
    default:
      return state;
  }
};

interface Props {
  children: ReactElement;
}
export const SiteContextProvider = ({ children }: Props) => {
  const [globalState, dispatch] = React.useReducer(reducer, initialState);
  return (
    <SiteContext.Provider value={{ globalState, dispatch }}>
      {children}
    </SiteContext.Provider>
  );
};
