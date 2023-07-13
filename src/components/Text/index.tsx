import * as React from 'react';
import { Text } from 'react-native';
import { useFonts } from 'expo-font';
import useTheme from '../../hooks/useTheme';


export function CustomizedText({ children, style, fontFamily, ...otherProps }: any) {
  const { mode, theme } = useTheme();

  const [fontsLoaded] = useFonts({
    'Raleway-Regular': require('../../../assets/fonts/Raleway-Regular.ttf'),
    'Raleway-Medium': require('../../../assets/fonts/Raleway-Medium.ttf'),
    'Raleway-SemiBold': require('../../../assets/fonts/Raleway-SemiBold.ttf'),
    'Raleway-Bold': require('../../../assets/fonts/Raleway-Bold.ttf'),
    'Raleway-ExtraBold': require('../../../assets/fonts/Raleway-ExtraBold.ttf'),
  });


  return (
    fontsLoaded ? (
      <Text
        {...otherProps}
        style={[{ fontFamily, color: theme.colors.text.primary }, style]}
      >
        {children}
      </Text>
    ) : null
  );
}