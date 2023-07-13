import * as React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { HEIGHT, w } from '../../config/dimensions';
import { useTranslation } from 'react-i18next';
import { CustomizedText as Text } from "../../components/Text";
import useTheme from '../../hooks/useTheme';


const EmptyData = ({ img, text }: any) => {
  const { t } = useTranslation();
  const { theme, mode } = useTheme();

  return (
    <View style={styles.noData}>
      <Image
        style={styles.img}
        source={img}
      />
      <Text fontFamily={theme.fonts.FONT_SEMI_BOLD} style={styles.text}>{text}</Text>
    </View>
  )
};



const styles = StyleSheet.create({
  noData: {
    alignItems: "center",
    justifyContent: "center",
    height: "70%",
  },
  img: {
    height: HEIGHT / 4,
    resizeMode: "contain",
    alignSelf: "center",
  },
  text: {
    fontSize: w * 5,
    color: '#3a4856',
    marginTop: "5%"
  },
});


export default EmptyData;