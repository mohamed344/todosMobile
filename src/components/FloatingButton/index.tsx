import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { HEIGHT, WIDTH, h, w } from '../../config/dimensions';
import Feather from 'react-native-vector-icons/Feather';
import useTheme from '../../hooks/useTheme';

export default function FloatingButton({ onPress }: any) {
  const { theme, mode } = useTheme();

  return (
    <TouchableOpacity style={[styles.container, { backgroundColor: theme.colors.bg.blue }]} onPress={onPress}>
      <Feather name={'edit-2'} color={theme.colors.bg.light} size={w * 7} />
    </TouchableOpacity>
  );
}


const styles = StyleSheet.create({
  container: {
    zIndex: 1,
    width: w * 15,
    height: w * 15,
    borderRadius: w * 7.5,
    position: "absolute",
    bottom: h * 10,
    right: "5%",
    alignItems: "center",
    justifyContent: "center",
  }
}); 