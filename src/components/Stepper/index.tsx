import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import useTheme from '../../hooks/useTheme';

export default function Stepper({ steps, step, ...props }: any) {
  const { theme, mode } = useTheme();

  return (
    <View {...props}>
      <View style={styles.dots}>
        {steps.map((e: any, i: number) => (
          <View key={i} style={[styles.dot, {
            backgroundColor: step == i
              ? theme.colors.bg.blue
              : theme.colors.bg.lightGray
          }]} />
        ))}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    margin: "1.5%"
  },
  dots: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  }
}); 