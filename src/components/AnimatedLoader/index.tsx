import React, { useState } from "react"
import { View, Animated, StyleSheet } from "react-native"
import { HEIGHT } from "../../config/dimensions";



const AnimatedLoader = () => {
  const [animation] = useState(new Animated.Value(0));

  const animatedStyle = {
    transform: [{ translateX: animation }],
    ...styles.img
  };

  // tremble animation
  const loopedAnimation = Animated.loop(
    Animated.sequence([
      Animated.timing(animation, {
        toValue: 10, duration: 200,
        useNativeDriver: false
      }),
      Animated.timing(animation, {
        toValue: -10, duration: 400,
        useNativeDriver: false
      }),
      Animated.timing(animation, {
        toValue: 10, duration: 400,
        useNativeDriver: false
      }),
      Animated.timing(animation, {
        toValue: 0, duration: 200,
        useNativeDriver: false
      }),
    ])
  );

  return (
    <View>
      <Animated.Image
        source={require('../../../assets/images/loader-white.png')}
        style={[animatedStyle]}
        onLoad={() => loopedAnimation.start()}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  img: {
    height: HEIGHT / 30,
    resizeMode: "contain",
    alignSelf: "center",
  },
})



export default AnimatedLoader;


