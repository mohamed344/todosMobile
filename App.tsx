import { StatusBar } from 'expo-status-bar';
import { StyleSheet,View } from 'react-native';
import {Login} from './src/screens/index'
import { LinearGradient } from "expo-linear-gradient"


export default function App() {
  return (
    <View style={styles.container}>
        <LinearGradient colors={["#02DADC", "#B932EE"]} start={[0.1, 0.1]} style={styles.linearGradient}>
          <Login />
        </LinearGradient>
        <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    opacity: 0.95,
    justifyContent: 'center',
    alignItems: 'center',
  }
});
