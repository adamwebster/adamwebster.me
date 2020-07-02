import React, { createContext, ReactElement } from 'react';
import { Colors } from '@adamwebster/fused-components';

let themeValue: string = 'light';
const windowGlobal: any = typeof window !== 'undefined' && window;

if (windowGlobal) {
  themeValue = localStorage.getItem('theme')
    ? (localStorage.getItem('theme') as string)
    : 'light';
}

const initialState = {
  theme: themeValue,
  headerColor: Colors.primary,
  hideLogo: false,
  hasHero: true,
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
