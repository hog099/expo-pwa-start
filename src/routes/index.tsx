import 'react-native-gesture-handler';
import React, { useContext } from 'react';
import { useSelector } from 'react-redux';
import { ThemeContext } from '../config/theme/theme-context';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/FontAwesome5';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();

// import DefaultLayout from '../pages/_layouts/defaultLayout/index';
// import DefaultLayout02 from '../pages/_layouts/defaultLayout02/index';



import Auth from '../pages/auth/login';
// import PolicyPrivacy from '../pages/auth/termsofuse/index';
import Home from '../pages/home/index';
import Profile from '../pages/profile/index';






export interface Props { };

const App: React.FC<Props> = ({ ableToAcess = false }) => {
  // const theme = useTheme();
  // const themeContext = useContext(ThemeContext);

  return (
    <NavigationContainer>
      <HomeStack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Auth" component={(props) => <Auth {...props} />} />
        <Stack.Screen name="Home" component={(props) => <Home {...props} />} />
        <Stack.Screen name="Profile" component={(props) => <Profile {...props} />} />
      </HomeStack.Navigator>
    </NavigationContainer>
  );



  // if (!ableToAcess) {
  //   return (
  //     <NavigationContainer>
  //       <WelcomeStack.Navigator
  //         screenOptions={{ headerShown: false }}>
  //         <Stack.Screen name="Welcome" component={(props) => <Welcome {...props} />} />
  //         <Stack.Screen name="Auth" component={(props) => <Auth {...props} />} />
  //         <Stack.Screen name="ForgetPassword" component={(props) => <ForgetPassword {...props} />} />
  //         <Stack.Screen name="Register" component={(props) => <Register {...props} />} />
  //         <Stack.Screen name="RegisterCompany" component={(props) => <RegisterCompany {...props} />} />
  //         <Stack.Screen name="PolicyPrivacy" component={(props) => <PolicyPrivacy {...props} />} />
  //       </WelcomeStack.Navigator>
  //     </NavigationContainer>
  //   );

  // } else {

  //   return (
  //     <NavigationContainer>

  //       <HomeStack.Navigator
  //         screenOptions={
  //           {
  //             headerShown: false,
  //             // {
  //             //   headerStyle: {
  //             //     backgroundColor: '#f4511e',
  //             //     backgroundColor: theme['color-primary-500'],
  //             //     height: 45,
  //             //   },
  //             //   headerTintColor: '#fff',
  //             //   headerTitleStyle: {
  //             //     fontSize: 16,
  //             //     // fontWeight: 'bold',
  //             //   },
  //             // }
  //           }
  //         }>
  //         <Stack.Screen name="Home" component={(props) => <Home {...props} />} />
  //         <Stack.Screen name="CompaniesListByCategory" component={(props) => <CompaniesListByCategory {...props} />} />
  //         <Stack.Screen name="AboutCity" component={(props) => <AboutCity {...props} />} />
  //         <Stack.Screen name="Conta" component={SwitchProfileNavigator} />
  //         <Stack.Screen name="User" component={(props) => <User {...props} />} />
  //         <Stack.Screen name="Auth" component={(props) => <Auth {...props} />} />
  //         <Stack.Screen name="ForgetPassword" component={(props) => <ForgetPassword {...props} />} />
  //         <Stack.Screen name="Register" component={(props) => <Register {...props} />} />
  //       </HomeStack.Navigator>
  //     </NavigationContainer>
  //   );
  // }


};


export default App;
