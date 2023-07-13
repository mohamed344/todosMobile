import { View, StyleSheet } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { w } from "../../config/dimensions";
import { CustomizedText as Text } from "../../components/Text";
import useTheme from "../../hooks/useTheme";


const TextWithIcon = ({
  icon, text, style,
  IconLibrary = FontAwesome5,
  textStyle = null,
  color = null,
  fontFamily = null,
  iconColor = null
}: any) => {
  const { theme, mode } = useTheme();

  if (!color) color = theme.colors.text.gray;
  if (!fontFamily) fontFamily = theme.fonts.FONT_BOLD;
  if (!iconColor) iconColor = theme.colors.text.gray;
  if (!textStyle) textStyle = [styles.iconText, { color: theme.colors.text.gray }];
  
  return (
    <View style={[styles.iconWithText, { ...style }]}>
      <View style={styles.icon}>
        <IconLibrary
          name={icon}
          size={w * 5}
          color={iconColor}
        />
      </View>
      <Text fontFamily={fontFamily} style={[textStyle, { color }]}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  iconWithText: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: "3.5%",
    flex: 1,
  },
  icon: {
    width: "10%",
    alignItems: "center",
    justifyContent: "center"
  },
  iconText: {
    fontSize: w * 4,
    marginLeft: "5%",
  },
});


export default TextWithIcon;