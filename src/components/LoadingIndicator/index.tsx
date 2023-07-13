import React, { useState } from "react"
import { View, StyleSheet, ActivityIndicator } from "react-native"
import useRequest from "../../hooks/useRequest";
import AnimatedLoader from "../AnimatedLoader";
import { HEIGHT } from "../../config/dimensions";
import { CustomizedText as Text } from "../../components/Text";
import useTheme from "../../hooks/useTheme";


const LoadingIndicator = () => {
  const { isLoading } = useRequest();
  const { theme, mode } = useTheme();

  return (
    isLoading ? (
      <View style={styles.container}>
        <View style={styles.box}>
          {/*<AnimatedLoader />*/}
          <ActivityIndicator color='white' />
          <Text numberOfLines={1} fontFamily={theme.fonts.FONT_BOLD} style={styles.text}>Loading...</Text>
        </View>
      </View>
    ) : null
  )
};


const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    //pointerEvents: 'box-none',
    //backgroundColor: 'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    height: HEIGHT / 9.5,
    width: HEIGHT / 9.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  text: {
    color: 'white',
    fontSize: 12,
    marginTop: "10%"
  }
})



export default LoadingIndicator;


