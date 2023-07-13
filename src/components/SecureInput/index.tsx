import * as React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { h, w } from '../../config/dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { CustomizedTextInput as Input } from "../TextInput";
import useTheme from '../../hooks/useTheme';


export default function SecureInput({ value, style, handleChange, ...props }: any) {
  const [showInput, setShowInput] = React.useState(false)
  const { theme, mode } = useTheme();

  const toggleShowInput = () => {
    setShowInput(!showInput);
  }


  return (
    <View style={styles.actions}>
      <Input
        {...props}
        autoComplete='off'
        autoCorrect={false}
        secureTextEntry={!showInput}
        fontFamily={theme.fonts.FONT_REGULAR}
        style={style}
        value={value}
        placeholder="Password"
        numberOfLines={1}
        returnKeyType='next'
        maxLength={40}
        onChangeText={(text: string) => handleChange(text)}
      />
      <View style={styles.inputIconView}>
        <TouchableOpacity onPress={toggleShowInput}>
          <Ionicons
            name={showInput ? 'eye-off' : 'eye'}
            size={w * 8}
            color={theme.colors.disabled.dark}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  inputIconView: {
    alignSelf: "center",
    marginLeft: "2%"
  },
  actions: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    height: h * 6,
    width: "100%",
    marginVertical: "5%",
  },
}); 