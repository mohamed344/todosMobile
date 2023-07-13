import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { CustomizedText as Text } from "../../components/Text";
import { w } from '../../config/dimensions';
import Ionicons from 'react-native-vector-icons/Ionicons';
import useTheme from '../../hooks/useTheme';


export function FilterHorizontalItem({ setFilter, isSelected, index, options, showFilterIcon }: any) {
  const { theme, mode } = useTheme();

  return (
    <TouchableOpacity
      onPress={() => setFilter(index)}
      style={[styles.button, isSelected && [styles.selected, { borderBottomColor: theme.colors.bg.blue }]]}
    >
      <Text
        fontFamily={isSelected ? theme.fonts.FONT_EXTRA_BOLD : theme.fonts.FONT_SEMI_BOLD}
        style={isSelected
          ? [styles.selectedText, { color: theme.colors.text.blue }]
          : [styles.buttonText, { color: theme.colors.disabled.dark }]}
      >
        {options[index]}
      </Text>

      {(isSelected && showFilterIcon) &&
        <Ionicons
          name='arrow-down'
          size={w * 4}
          color={theme.colors.bg.blue}
        />
      }
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  selected: {
    borderBottomWidth: 3,
  },
  button: {
    paddingHorizontal: w * 5,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row"
  },
  buttonText: {
    fontSize: w * 4,
  },
  selectedText: {
    fontSize: w * 4,
    marginRight: w * 1
  },
})