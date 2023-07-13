import React, { Fragment } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();

// Components
import BottomNavigator from './src/components/navigator/BottomNavigator';

// Screens
import Home from './src/screens/Home'
import Login from './src/screens/Auth/Login'
import Register from './src/screens/Auth/Register'


// Hooks
import { useTranslation } from 'react-i18next';
import useAuth from './src/hooks/useAuth';

import useTheme from './src/hooks/useTheme';
import { StatusBar } from 'react-native';
import { ThemeMode } from './src/contexts/ThemeContext';
import { iOSDarkTheme, iOSLightTheme } from './src/config/theme';




export default function StackNavigator() {

  const { mode, theme } = useTheme();
  const { t, i18n } = useTranslation();
  const { isReady, auth, isLogged } = useAuth();


  return (
    <Fragment>
      <StatusBar barStyle={mode == ThemeMode.light ? "dark-content" : 'light-content'} />
      <NavigationContainer theme={mode === ThemeMode.dark ? iOSDarkTheme : iOSLightTheme}>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerShown: false,
            headerTitleAlign: "center",
            cardStyle: { backgroundColor: '#fff' },
          }}>
          {isLogged ?
            <>
              {/* Logged-in stack */}
              <Stack.Screen name="Home" component={Home} />


            </>
            :
            <>
              {/* Logged-out stack */}
              <Stack.Screen name="Login" component={Login} />
              <Stack.Screen name="Register" component={Register} />
            </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </Fragment>
  )
}