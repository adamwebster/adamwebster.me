import React, { createContext, ReactElement } from 'react';
import { Colors } from '@adamwebster/fused-components';
import { DarkMode } from '../themes/DarkMode';

const initialState = {
  theme: DarkMode,
  headerColor: Colors.primary,
  hideLogo: false,
  hasHero: true,
  darkModeSet: false,
};

export const SiteContext = createContext({
  globalState: initialState,
  dispatch: (value: any) => value,
});
export const SiteContextConsumer = SiteContext.Consumer;

const reducer = (state: any, action: { payload: any; type: any }) => {
  const { payload, type } = action;
  switch (type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: payload,
      };
    case 'SET_HEADER_COLOR':
      return {
        ...state,
        headerColor: payload,
      };
    case 'SET_LOGO_HIDDEN':
      return {
        ...state,
        hideLogo: payload,
      };
    case 'SET_HAS_HERO':
      return {
        ...state,
        hasHero: payload,
      };
    case 'SET_DARK_MODE_SET':
      return {
        ...state,
        darkModeSet: payload,
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
