import * as React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { w } from '../../config/dimensions';
import useTheme from '../../hooks/useTheme';


export function FloatingNext({ onPress }: any) {
  const { theme, mode } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, { backgroundColor: theme.colors.bg.blue }]}>
      <Ionicons
        name='arrow-forward-outline'
        size={w * 7}
        color={theme.colors.bg.light}
      />
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
    position: "absolute",
    bottom: "5%",
    right: "5%",
    alignItems: "center",
    justifyContent: "center"
  },
})