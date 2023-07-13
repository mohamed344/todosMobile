import * as React from 'react';
import { StyleSheet, Image } from 'react-native';
import { HEIGHT, WIDTH } from '../../config/dimensions';

export default function Logo({ uri }: any) {

  return (
    <Image
      style={styles.logo}
      source={require('../../../assets/images/dinna-primary.png')}
    />
  );
}


const styles = StyleSheet.create({
  logo: {
    width: WIDTH * 0.25,
    resizeMode: "contain",
    marginVertical: "5%"
  },
}); 