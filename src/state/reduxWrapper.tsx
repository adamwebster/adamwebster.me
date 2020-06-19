import React from 'react';
import { Provider } from 'react-redux';
import { createStore as reduxCreateStore } from 'redux';
import rootReducer from './reducers';
import { composeWithDevTools } from 'redux-devtools-extension';

const createStore = () => reduxCreateStore(rootReducer, composeWithDevTools());

interface Props {
  element: any;
}

export default ({ element }: Props) => (
  <Provider store={createStore()}>{element}</Provider>
);
