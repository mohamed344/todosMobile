import * as React from 'react';
import { View, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { CustomizedText as Text } from "../../components/Text";
import { w } from '../../config/dimensions';
import { useNavigation } from '@react-navigation/native';
import useTheme from '../../hooks/useTheme';
import app from '../../config/app';


export const defaultAvatar = (isMale: boolean) => {
  if (isMale) return require('../../../assets/illustrations/profile-male.png')
  return require('../../../assets/illustrations/profile-female.png')
}

export function UserProfileHorizontal({ onPress, user, showOnlyName = false, showBadge = true, fontSize = w * 4, imgSize = w * 12
}: any) {

  const {
    name,
    rating,
    isMale,
    verified
  } = user;

  const navigation = useNavigation();
  const { theme, mode } = useTheme();

  const avatar = user.picture ? app.route + user.picture.filename : undefined

  const handlePress = () => {
    if (!onPress) navigation.navigate('User', { user });
    else onPress();
  }

  return (
    <TouchableOpacity onPress={handlePress} style={styles.userView}>
      <Image
        style={[styles.userProfileImg, { width: imgSize, height: imgSize, borderRadius: imgSize / 2 }]}
        source={
          avatar
            ? { uri: avatar }
            : defaultAvatar(isMale)
        }
      />
      <View style={styles.userInfo}>
        <Text numberOfLines={1} fontFamily={theme.fonts.FONT_BOLD} style={[styles.username, { fontSize, color: theme.colors.text.lightGray }]}>{name}</Text>
        {!showOnlyName &&
          <>
            <Text numberOfLines={1}
              fontFamily={theme.fonts.FONT_SEMI_BOLD}
              style={[styles.rating, { fontSize: fontSize - 3, color: theme.colors.text.darkGray }]}>
              {rating.count == 0 ? "No Reviews" : `${rating.value} ★ - ${rating.count} ratings`}
            </Text>
            {/*showBadge && <TextWithIcon IconLibrary={Octicons} text={'Verified'} icon='verified' />*/}
            {verified && <Text fontFamily={theme.fonts.FONT_BOLD} style={{ color: theme.colors.text.gray }}>✓ Verified</Text>}
          </>
        }
      </View>
    </TouchableOpacity>
  )
}


const styles = StyleSheet.create({
  userInfo: {
    marginHorizontal: "5%",
    justifyContent: "center",
    flex: 1
  },
  username: {
  },
  rating: {
    marginVertical: "2%"
  },
  userProfile: {

  },
  userProfileImg: {
    width: w * 12,
    height: w * 12,
    borderRadius: w * 6,
    borderWidth: 0,
    borderColor: "#3a4856"
  },
  userView: {
    flexDirection: "row",
    flex: 1,
  },
})