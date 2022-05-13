import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import ActionSheet from "../../components/ActionSheet";
import Avatar from "../../components/Avatar";
import Button from "../../components/Button/Button";
import ButtonIcon from "../../components/Button/ButtonIcon";
import Container from "../../components/Container";
import Input from "../../components/Input/Input";
import ProfileMenu from "../../components/Menus/ProfileMenu";
import ScrollContainer from "../../components/ScrollContainer";
import icons from "../../constants/icons";
import images from "../../constants/images";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { useActionSheet } from "../../hooks/useActionSheet";
import { useAuth } from "../../hooks/useAuth";
import { useUsers } from "../../hooks/useUsers";
import { IUser } from "../../interfaces/auth";
import { UserProfileScreenProps } from "../../interfaces/navigation";

const UserProfileScreen: React.FC<UserProfileScreenProps> = ({ route, navigation }) => {
  const { userId } = route?.params
  const { user } = useAuth()
  const { selectedUser, fetchUser, clearUser } = useUsers()
  const { sheetRef, show, onClose } = useActionSheet()
  const [localUser, setLocalUser] = useState<IUser>()
  const [isAnotherUser, setIsAnotherUser] = useState(false)
  const [selectedTab, setSelectedTab] = useState("profile")

  useEffect(() => {
    if (userId && (userId === user?.id)) {
      setIsAnotherUser(false)
      setLocalUser(user)
    } else {
      setIsAnotherUser(true)
      fetchUser(userId)
    }

    return () => {
      setLocalUser(undefined)
      setIsAnotherUser(false)
      clearUser()
    }
  }, [userId])

  useEffect(() => {
    if (selectedUser) {
      setLocalUser(selectedUser)
    }
  }, [selectedUser])

  const onPressBack = () => {
    navigation.goBack()
  }

  const onPressMenu = () => {
    show()
  }

  return (
    <ScrollContainer>
      <Container padding>
        <View
          style={styles.header}
        >
          <View>
            <ButtonIcon
              icon={icons.backward}
              onPress={onPressBack}
            />
          </View>
          <View
            style={styles.headerCenter}
          >
            <Input
              withoutContainer
              style={styles.headerCenterInput}
            />
          </View>
          {
            !isAnotherUser && (
              <View>
                <ButtonIcon
                  icon={icons.dotMenu}
                  style={styles.headerRightButton}
                  onPress={onPressMenu}
                />
              </View>
            )
          }
        </View>
        <View style={styles.content}>
          <View style={styles.contentHeader}>
            <View style={styles.contentHeaderAvatar}>
              <Avatar
                size={90}
                source={localUser?.avatar ? { uri: localUser.avatar } : images.avatar}
                style={styles.avatar}
              />
            </View>
            <View style={styles.contentHeaderInfo}>
              <Text style={styles.contentHeaderInfoNameText}>
                {localUser?.first_name} {localUser?.last_name}
              </Text>
              <Text style={styles.contentHeaderInfoUsername}>
                @{localUser?.username}
              </Text>
            </View>
          </View>
          {isAnotherUser && (
            <View
              style={styles.actionsContainer}
            >
              <View
                style={{ flex: 2, paddingHorizontal: SIZES.base }}
              >
                <Button
                  rounded
                  text="Conectar"
                />
              </View>
              <View
                style={{ flex: 3, paddingHorizontal: SIZES.base }}
              >
                <Button
                  outlined
                  rounded
                  text="Enviar mensaje"
                />
              </View>
              <View
                style={{ flex: .5, paddingHorizontal: SIZES.base }}
              >
                <ButtonIcon
                  icon={icons.dotMenu}
                  onPress={onPressMenu}
                />
              </View>
            </View>
          )}
          <View style={styles.contentBody}>
            <View
              style={styles.contentTabs}
            >
              <View
                style={styles.contentTabsHeader}
              >
                <TouchableOpacity
                  onPress={() => setSelectedTab('profile')}
                  >
                  <View
                    style={[
                      styles.contentTab,
                      selectedTab === 'profile' && styles.contentTabActive
                    ]}
                  >
                    <Text
                      style={[
                        styles.contentTabTitle,
                        selectedTab === 'profile' && styles.contentTabActiveTitle
                      ]}
                    >
                      Perfil
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSelectedTab('activity')}
                  >
                  <View
                    style={[
                      styles.contentTab,
                      selectedTab === 'activity' && styles.contentTabActive
                    ]}
                  >
                    <Text
                      style={[
                        styles.contentTabTitle,
                        selectedTab === 'activity' && styles.contentTabActiveTitle
                      ]}
                    >
                      Actividad
                    </Text>
                  </View>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setSelectedTab('experience')}
                  >
                  <View
                    style={[
                      styles.contentTab,
                      selectedTab === 'experience' && styles.contentTabActive
                    ]}
                  >
                    <Text
                      style={[
                        styles.contentTabTitle,
                        selectedTab === 'experience' && styles.contentTabActiveTitle
                      ]}
                    >
                      Experiencia
                    </Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View
                style={styles.contentTabsBody}
              >
                {
                  selectedTab === 'profile' && (
                    <View
                      style={styles.contentTabBody}
                    >
                      <View
                        style={styles.biographyContainer}
                      >
                        <Text
                          style={styles.biographyTitle}
                        >
                          Acerca de
                        </Text>
                        <Text
                          style={styles.biographyText}
                        >
                          {localUser?.biography}
                        </Text>
                      </View>
                    </View>
                  )
                }
                {
                  selectedTab === 'activity' && (
                    <View>

                    </View>
                  )
                }
                {
                  selectedTab === 'experience' && (
                    <View>

                    </View>
                  )
                }
              </View>
            </View>
          </View>
        </View>
        <ActionSheet
          sheetRef={sheetRef}
          onClose={onClose}
          title="Opciones"
          children={<ProfileMenu isAnotherUser={isAnotherUser} onCloseMenu={onClose} />}
        />
      </Container>
    </ScrollContainer>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  headerCenter: {
    flex: 1,
    paddingHorizontal: SIZES.padding / 2
  },
  headerCenterInput: {
    paddingVertical: 5
  },
  headerRightButton: {
    transform: [
      { rotate: "90deg" },
    ]
  },
  content: {
    flex: 1,
  },
  contentHeader: {
    flex: 1,
    paddingVertical: SIZES.padding / 2,
  },
  contentHeaderAvatar: {
    height: 100,
    alignItems: "center",
    backgroundColor: COLORS.primary,
    position: "relative",
    zIndex: 1,
    borderRadius: 15,
    marginBottom: SIZES.padding * 1.3
  },
  avatar: {
    position: "absolute",
    bottom: -20,
    borderWidth: 5,
    borderColor: COLORS.white,
    justifyContent: "center",
    alignItems: "center"
  },
  contentHeaderInfo: {
    flex: 1,
    alignItems: "center",
  },
  contentHeaderInfoNameText: {
    ...FONTS.body,
    color: COLORS.black
  },
  contentHeaderInfoUsername: {
    ...FONTS.caption,
    color: COLORS.gray,
    textAlign: "center"
  },
  actionsContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contentBody: {
    flex: 1,
  },
  contentTabs: {
    paddingVertical: SIZES.padding,
    paddingHorizontal: SIZES.padding / 2
  },
  contentTab: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  contentTabsHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  contentTabsBody: {
    flex: 1,
  },
  contentTabTitle: {
    ...FONTS.bodySmall,
    color: COLORS.night
  },
  contentTabActive: {
    borderBottomWidth: 2,
    borderBottomColor: COLORS.primary,
  },
  contentTabActiveTitle: {
    color: COLORS.primary
  },
  biographyContainer: {
  },
  biographyTitle: {
    ...FONTS.body,
    color: COLORS.black,
    fontWeight: "bold",
    marginBottom: SIZES.padding / 2
  },
  biographyText: {
    ...FONTS.caption,
    color: COLORS.gray,
  },
  contentTabBody: {
    flex: 1,
    paddingVertical: SIZES.padding,
  }
});

export default UserProfileScreen;