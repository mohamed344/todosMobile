import * as React from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { w } from '../../config/dimensions';
import { useNavigation } from '@react-navigation/native';
import useTheme from '../../hooks/useTheme';


export function Header({ goHome = false, disabled = false, margin = "5%" }: any) {
  const navigation = useNavigation();
  const { theme, mode } = useTheme();

  const goBack = () => {
    if (goHome) navigation.navigate('Welcome');
    else navigation.goBack()
  }

  return (
    <View style={[styles.header, { marginBottom: margin }]}>
      <TouchableOpacity onPress={goBack} disabled={disabled} style={
        [styles.box,
        {
          backgroundColor: theme.colors.bg.primary,
          borderColor: theme.colors.disabled.light
        }]}
      >
        <Ionicons
          name='chevron-back'
          size={w * 6}
          color={theme.colors.disabled.dark}
        />
      </TouchableOpacity>
    </View>
  );
}


const styles = StyleSheet.create({
  box: {
    borderWidth: 1,
    padding: 3,
    borderRadius: 8,
    marginTop: "2.5%"
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
})