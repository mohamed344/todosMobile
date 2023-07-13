import * as React from 'react';
import { SafeAreaView as SafeAreaWrapper, StyleSheet, View } from 'react-native';
import { HEIGHT, WIDTH } from '../../config/dimensions';
import useTheme from '../../hooks/useTheme';

export default function SafeAreaView({ children, navigation, ...props }: any) {
  const { theme, mode } = useTheme();

  React.useLayoutEffect(() => {
    if (!navigation) return;

    navigation.setOptions({
      headerStyle: { backgroundColor: theme.colors.bg.primary, elevation: 0, shadowOpacity: 0, borderBottomWidth: 0 },
      cardStyle: { backgroundColor: theme.colors.bg.primary },
      headerTintColor: theme.colors.text.primary,
    });
  }, [theme, navigation]);

  return (
    <View style={[{ flex: 1 }, { backgroundColor: theme.colors.bg.primary }]}>
      <SafeAreaWrapper {...props}>
        {children}
      </SafeAreaWrapper>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: WIDTH,
    height: HEIGHT
  }
}); 