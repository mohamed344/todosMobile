import * as React from 'react';
import { WebView } from 'react-native-webview';
import { StyleSheet } from 'react-native';
import { HEIGHT, WIDTH} from '../../config/dimensions';

export default function Browser({ uri }: any) {


  return (
    <WebView
      style={styles.container}
      source={{ uri }}
    />
  );
}


const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT
  }
}); 