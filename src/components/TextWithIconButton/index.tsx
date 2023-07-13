import { View, StyleSheet, TouchableOpacity } from "react-native";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { w } from "../../config/dimensions";
import { CustomizedText as Text } from "../../components/Text";
import Ionicons from "react-native-vector-icons/Ionicons";
import useTheme from "../../hooks/useTheme";



const TextWithIconButton = ({
  icon, text, style, fontFamily, color,
  IconLibrary = FontAwesome5,
  onPress
}: any) => {
  const { theme, mode } = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={[styles.item, { borderColor: theme.colors.disabled.dark }]}>
      <View style={styles.info}>
        <IconLibrary color={color} name={icon} size={23} />
        <Text style={[styles.itemText, { color }]} fontFamily={fontFamily}>{text}</Text>
      </View>
      <View style={styles.arrow}>
        <Ionicons color={color} name="ios-chevron-forward" size={23} />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 8,
  },
  itemText: {
    fontSize: w * 4,
    marginLeft: '5%',
  },
  arrow: {

  },
  info: {
    flexDirection: 'row',
    flex: 1,
    alignItems: "center"
  },
});


export default TextWithIconButton;