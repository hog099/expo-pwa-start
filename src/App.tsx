/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { StatusBar, View } from 'react-native';

import { useSelector } from 'react-redux';

import { ApplicationProvider, IconRegistry } from '@ui-kitten/components';
import { EvaIconsPack } from '@ui-kitten/eva-icons';
import * as eva from '@eva-design/eva';
import { ThemeContext } from './config/theme/theme-context';
import { default as themecolor } from './config/theme/custom-theme.json';

import { PersistGate } from 'redux-persist/integration/react';

import { persistor } from './store';

import App from './Authorapp';

export interface Props { }

const Index: React.FC<Props> = (props) => {

  const [theme, setTheme] = React.useState('light');
  const darkthemeState = useSelector((state) => state.config.darktheme);

  React.useEffect(() => {
    setTheme(darkthemeState ? 'dark' : 'light');
  }, [darkthemeState]);


  return (
    <ThemeContext.Provider value={{ theme }}>
      <IconRegistry icons={EvaIconsPack} />
      <ApplicationProvider {...eva} theme={{ ...eva[theme], ...themecolor }} >
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
      </ApplicationProvider>
    </ThemeContext.Provider>
  );

}




export default Index;
