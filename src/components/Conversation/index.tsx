import * as React from 'react';
import { StyleSheet, View, Image, TouchableWithoutFeedback } from 'react-native';
import { w } from '../../config/dimensions';
import { CustomizedText as Text } from "../../components/Text";
import useTheme from '../../hooks/useTheme';
import User from '../../types/User';
import app from '../../config/app';
import { defaultAvatar } from '../UserProfile';
import useAuth from '../../hooks/useAuth';
import getTimestamp from '../../functions/getTimestamp';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Message from '../../types/Message';


export default function Conversation({ item, navigation }: any) {
  const { name, members, createdBy, messages, isGroup } = item;
  const { auth } = useAuth();
  const { theme, mode } = useTheme();

  const receiver = members.find((member: User) => member._id != auth.user._id) || {};
  const avatar = receiver.picture ? app.route + receiver.picture.filename : undefined
  const lastMessage = messages[0] || { content: '', createdAt: new Date() };

  const lastSeenAt = item.lastSeenAt[auth.user._id];
  const recipientLastMessage = messages.find((msg: Message | any) => msg.isSystemMessage || msg.sender._id != auth.user._id);
  const seen = recipientLastMessage ? new Date(lastSeenAt).getTime() > new Date(recipientLastMessage.createdAt).getTime() : true;

  const chatName = isGroup ? name : receiver.name;
  
  const onPress = () => {
    navigation.navigate('Chat', { chat: item })
  }


  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.wrapper, {
        backgroundColor: theme.colors.bg.card,
        borderColor: theme.colors.disabled.light
      }]}>

        <View style={styles.container}>

          <View style={styles.left}>
            <View style={styles.profileView}>
              {isGroup ?
                <Ionicons
                  name={'md-people-circle-outline'}
                  size={w * 15}
                  color={theme.colors.bg.blue}
                />
                :
                <Image
                  style={styles.profile}
                  source={
                    avatar
                      ? { uri: avatar }
                      : defaultAvatar(receiver.isMale)
                  }
                />
              }
            </View>

            <View style={styles.info}>
              <Text numberOfLines={1} fontFamily={theme.fonts.FONT_BOLD} style={styles.usernameText}>{chatName}</Text>
              <Text numberOfLines={1} fontFamily={theme.fonts.FONT_MEDIUM} style={[styles.messageText, { color: theme.colors.text.gray }]}>{lastMessage.content}</Text>
            </View>
          </View>

          <View style={styles.right}>
            <View style={styles.metadata}>
              <Text numberOfLines={1} fontFamily={theme.fonts.FONT_REGULAR} style={[styles.createdAt, { color: theme.colors.text.gray }]}>{getTimestamp(lastMessage.createdAt)}</Text>
              <View style={[styles.dot, { backgroundColor: seen ? 'transparent' : theme.colors.bg.blue }]} />
            </View>
          </View>

        </View>

      </View>
    </TouchableWithoutFeedback>
  );
}


const styles = StyleSheet.create({
  wrapper: {
    marginTop: "5%",
    paddingVertical: "5%",
    paddingHorizontal: "2%",
    borderRadius: 8,
    borderWidth: 0.5,
  },
  container: {
    flexDirection: 'row',
    justifyContent: "space-between",
    height: w * 15,
  },
  left: {
    flexDirection: 'row',
    height: w * 15,
    width: w * 55
  },
  right: {
    width: w * 20
  },
  usernameText: {
    fontSize: w * 4
  },
  messageText: {
    fontSize: w * 3.5,
    marginTop: "5%"
  },
  info: {
    paddingHorizontal: "5%",
    justifyContent: "space-evenly"
  },
  profile: {
    width: w * 15,
    height: w * 15,
    borderRadius: w * 7.5
  },
  profileView: {
    alignItems: "center",
  },
  dot: {
    width: w * 3,
    height: w * 3,
    borderRadius: w * 1.5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center"
  },
  metadata: {
    justifyContent: "space-around",
    height: "100%"
  },
  createdAt: {
    fontSize: w * 2.5,
    alignSelf: "center"
  },
  unread: {
    fontSize: w * 4.5,
  }
}); 