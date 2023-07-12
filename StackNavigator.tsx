import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Login, Register, TodoList} from './src/screens/index';
import { Fragment } from 'react';
import { StatusBar } from 'expo-status-bar';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Fragment>
        <StatusBar style="auto" />
        <NavigationContainer>
        <Stack.Navigator initialRouteName= "TodoList"
          screenOptions={{
            headerTitleAlign: "center",
          }}>
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="TodoList" component={TodoList} />
        </Stack.Navigator>
        </NavigationContainer>
    </Fragment>
  );
};


