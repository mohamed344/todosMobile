import * as React from 'react';
import { TextInput } from 'react-native';
import { useFonts } from 'expo-font';
import useTheme from '../../hooks/useTheme';


export function CustomizedTextInput({ style, fontFamily, ...otherProps }: any) {
  const { theme, mode } = useTheme();

  const [fontsLoaded] = useFonts({
    'Raleway-Regular': require('../../../assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Medium': require('../../../assets/fonts/Raleway-Medium.ttf'),
    'Raleway-SemiBold': require('../../../assets/fonts/Raleway-SemiBold.ttf'),
    'Raleway-ExtraBold': require('../../../assets/fonts/Raleway-ExtraBold.ttf'),
  });

  return (
    fontsLoaded ? (
      <TextInput
        placeholderTextColor={theme.colors.disabled.dark}
        //returnKeyType=''
        {...otherProps}
        style={[style, { fontFamily, color: theme.colors.text.primary }]}
      />
    ) : null
  );
}