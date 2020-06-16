import React, { createContext, ReactElement } from "react";

const initialState = {
  theme: "light",
};

export const SiteContext = createContext({
  globalState: initialState,
  dispatch: (value: any) => value,
});
export const SiteContextConsumer = SiteContext.Consumer;

const reducer = (state: any, action: { payload: any; type: any }) => {
  const { payload, type } = action;
  switch (type) {
    case "SET_THEME":
      return {
        ...state,
        theme: payload,
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
