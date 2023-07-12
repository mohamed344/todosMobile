import { StyleSheet,View } from 'react-native';
import StackNavigator from './StackNavigator'
import {TodoList} from './src/screens/index';

export default function App() {
  return (
    <View>
        <StackNavigator />
    </View>
  );
}


