import 'react-native-gesture-handler';
import React from 'react';
import { LogBox } from 'react-native';

// Contexts 
import AuthProvider from "./src/contexts/AuthContext";

// Hooks
import './i18n';
import NotificationsProvider from './src/contexts/NotificationsContext';
import ThemeProvider from './src/contexts/ThemeContext';
import StackNavigator from './StackNavigator';
import SettingsProvider from './src/contexts/SettingsContext';
import { AxiosInterceptor } from './src/api/utils';
import LoadingIndicator from './src/components/LoadingIndicator';
import ConversationsProvider from './src/contexts/ConversationsContext';
import RequestProvider from './src/contexts/RequestContext';


export default function App() {

  LogBox.ignoreAllLogs(); //Ignore all log notification

  return (
    <RequestProvider>
      <AuthProvider>
        <SettingsProvider>
          <NotificationsProvider>
            <ConversationsProvider>
              <AxiosInterceptor>
                <ThemeProvider>
                  <StackNavigator />
                  <LoadingIndicator />
                </ThemeProvider>
              </AxiosInterceptor>
            </ConversationsProvider>
          </NotificationsProvider>
        </SettingsProvider>
      </AuthProvider>
    </RequestProvider>
  )
}