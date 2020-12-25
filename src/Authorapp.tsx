/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Platform, View, StatusBar, StyleSheet, Dimensions } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useTheme } from '@ui-kitten/components';

import AnimatedSplash from "react-native-animated-splash-screen";
import { wait } from './helpers/helpers';

import Routes from './routes/index';
import logo from './assets/imagens/logo.png';


const MyStatusBar = ({ backgroundColor, ...props }) => (
  <View style={[styles.statusBar, { backgroundColor }]}>
    <StatusBar translucent backgroundColor={backgroundColor} {...props} />
  </View>
);

const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? 20 : StatusBar.currentHeight;
const APPBAR_HEIGHT = Platform.OS === 'ios' ? 44 : 56;
// const WIDTHSCREEN = Dimensions.get('window').width;
// const HEIGHTSCREEN = Dimensions.get('window').height;

const AuthOrApp: React.FC<any> = () => {
  const dispatch = useDispatch();
  const theme = useTheme();

  const [ismounted, setismounted] = React.useState(false);
  const [loadingsplash, setloadingsplash] = React.useState(true);

  const darkthemeState = useSelector((state) => state.config.darktheme);
  const ableAcess = useSelector(state => state.auth.ableAcess);
  const userLogged = useSelector(state => state.auth.user);

  return (
    <>

      <MyStatusBar
        backgroundColor={darkthemeState ? theme['color-darkbackground02'] : theme['color-primary-450']}
        barStyle="light-content" />

      <Routes ableToAcess={ableAcess} />

    </>
  );
}

export default AuthOrApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  statusBar: {
    height: STATUSBAR_HEIGHT,
  },
  appBar: {
    backgroundColor: '#79B45D',
    height: APPBAR_HEIGHT,
  },
  content: {
    flex: 1,
    backgroundColor: '#33373B',
  },
});
