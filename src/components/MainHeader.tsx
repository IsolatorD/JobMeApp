import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import icons from "../constants/icons";
import images from "../constants/images";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import { useAuth } from "../hooks/useAuth";
import Avatar from "./Avatar";
import ButtonIcon from "./Button/ButtonIcon";

const MainHeader: React.FC = () => {
  const { user } = useAuth()
  const { navigate } = useNavigation();

  const onPressUser = () => {
    console.log('user', user)
    // @ts-ignore
    navigate("Internal", {
      screen: "UserProfile",
      params: {
        userId: user?.id,
      }
    });
  }

  return (
    <View
      style={styles.mainHeaderContainer}
    >
      <TouchableOpacity
        onPress={onPressUser}
        style={styles.avatarContainer}
      >
        <Avatar
          size={45}
          source={user?.avatar ? { uri: user.avatar } : images.avatar}
        />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={onPressUser}
        style={styles.infoContainer}
      >
        <Text style={styles.usernameText}>{user?.first_name} {user?.last_name}</Text>
        <Text style={styles.subText}>@{user?.username}</Text>
      </TouchableOpacity>
      <View
        style={styles.actionsContainer}
      >
        <ButtonIcon
          icon={icons.search}
          iconColor={COLORS.gray}
        />
        <ButtonIcon
          icon={icons.chat}
          iconColor={COLORS.gray}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainHeaderContainer: {
    height: 65,
    backgroundColor: COLORS.white,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  usernameText: {
    ...FONTS.h6,
    color: COLORS.night,
    textAlignVertical: "bottom",
  },
  subText: {
    ...FONTS.caption,
    color: COLORS.gray,
    textAlignVertical: "top"
  },
  avatarContainer: {
    // flex: 1,
    marginRight: SIZES.padding / 2,
    // alignItems: "center"
  },
  infoContainer: {
    flex: 3,
    justifyContent: 'center',
  },
  actionsContainer: {
    flex: 1.2,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: SIZES.base,
  }
})

export default MainHeader;