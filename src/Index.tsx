/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

// import 'react-native-gesture-handler';
// import { YellowBox } from 'react-native';
// YellowBox.ignoreWarnings(['']);
// console.disableYellowBox = true;

import { Provider } from 'react-redux';
import { store } from './store';

import Application from './App';

export interface Props { };

const App: React.FC<Props> = (props) => {
  return (
    <Provider store={store}>
      <Application />
    </Provider>
  );
};

export default App;
