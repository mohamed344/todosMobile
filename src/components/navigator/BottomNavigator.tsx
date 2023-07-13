import React from 'react';
import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import { h, w } from "../../config/dimensions";

// Screens
import Settings from '../../screens/Settings';
import Create from '../../screens/Create';
import Find from '../../screens/Find';
import History from '../../screens/History';
import Logo from '../Logo';
import Conversations from '../../screens/Conversations';
import { useTranslation } from 'react-i18next';
import useTheme from '../../hooks/useTheme';
import { Platform } from 'react-native';


export const tabBarStyle = {
  //paddingVertical: 10,
  paddingVertical: Platform.OS == 'ios' ? h * 0.5 : h * 1,
  height: Platform.OS == 'ios' ? h * 9 : h * 8,
  paddingBottom: Platform.OS == 'ios' ? h * 3 : h * 1,
  borderWidth: 0,
  elevation: 0,
  shadowOpacity: 0,
}

const defaultOptions: BottomTabNavigationOptions = {
  headerShadowVisible: true,
  headerStyle: {
    borderWidth: 0,
    elevation: 0,
    shadowOpacity: 0,
  },

  headerTitleAlign: "center",
}

const Tab = createBottomTabNavigator();


export default function BottomNavigator(props: any) {
  const { theme, mode } = useTheme();
  const { t } = useTranslation();

  return (
    <Tab.Navigator
      sceneContainerStyle={{ backgroundColor: theme.colors.bg.primary }}
      screenOptions={({ route }) => ({
        unmountOnBlur: route.name === 'History',
        tabBarShowLabel: true,
        tabBarIcon: ({ focused, color, size }) => {
          size = w * 7

          if (route.name === 'Find') {
            return (
              <Ionicons
                name={focused ? 'search' : 'search'}
                size={size + 3}
                color={color}
              />
            );
          }

          if (route.name === 'Create') {
            return (
              <Ionicons
                name={focused ? 'add-circle' : 'add-circle-outline'}
                size={size + 3}
                color={color}
              />
            );
          }

          if (route.name === 'History') {
            return (
              <Ionicons
                name={focused ? 'car-sport' : 'car-sport-outline'}
                size={size + 3}
                color={color}
              />
            );
          }

          if (route.name === 'Conversations') {
            return (
              <Ionicons
                name={focused ? 'chatbubbles' : 'chatbubbles-outline'}
                size={size}
                color={color}
              />
            );
          }


          if (route.name === 'Settings') {
            return (
              <Ionicons
                name={focused ? 'settings' : 'settings-outline'}
                size={size}
                color={color}
              />
            );
          }
        },
        tabBarInactiveTintColor: theme.colors.text.primary,
        tabBarActiveTintColor: theme.colors.bg.blue,
        tabBarStyle: {
          backgroundColor: theme.colors.bg.primary,
          borderTopColor: theme.colors.disabled.border,
          //borderTopWidth: 1,
          ...tabBarStyle
        }
      })}
    >
      <Tab.Screen name="Find" component={Find} options={{
        ...defaultOptions,
        headerTitle: () => <Logo />,
      }} />
      <Tab.Screen name="Create" component={Create} options={{
        ...defaultOptions,
        headerTitle: () => <Logo />,
      }} />

      <Tab.Screen name="History" component={History} options={{ title: t('History'), headerTitleAlign: "center", headerShown: false }} />
      <Tab.Screen name="Conversations" component={Conversations} options={{ title: t('Messages'), headerTitleAlign: "center", headerShown: false }} />
      <Tab.Screen name="Settings" component={Settings} options={{ headerTitle: t('Settings'), title: t('Settings'), headerShown: false }} />
    </Tab.Navigator>
  );
}
