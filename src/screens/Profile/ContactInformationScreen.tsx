import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import ActionSheet from "../../components/ActionSheet";
import ButtonIcon from "../../components/Button/ButtonIcon";
import Container from "../../components/Container";
import MenuOption from "../../components/Menus/MenuOption";
import icons from "../../constants/icons";
import { COLORS, FONTS, SIZES } from "../../constants/theme";
import { useActionSheet } from "../../hooks/useActionSheet";
import { useUsers } from "../../hooks/useUsers";
import { ContactInformationScreenProps } from "../../interfaces/navigation";

const ContactInformationScreen: React.FC<ContactInformationScreenProps> = ({ navigation }) => {
  const { selectedUser } = useUsers()
  const { sheetRef, show, onClose } = useActionSheet()
  const [selectedOption, setSelectedOption] = useState(null)

  const onPressBack = () => {
    navigation.goBack()
  }

  const onPressOption = (option: any) => {
    setSelectedOption(option)
    show()
  }

  const onCloseOptions = () => {
    onClose()
    setSelectedOption(null)
  }

  const MenuOptions = () => (
    <View
      style={styles.menuOptions}
    >
      <MenuOption
        title="Copiar"
        onPress={() => {
          onClose()
        }}
      />
      <MenuOption
        title="Compartir con..."
        onPress={() => {
          onClose()
        }}
      />
    </View>
  )

  return (
    <Container padding>
      <View style={styles.header}>
        <View style={styles.headerLeft}>
          <ButtonIcon
            icon={icons.backward}
            onPress={onPressBack}
          />
        </View>
        <View style={styles.headerCenter}>
          <Text style={styles.headerText}>
            {selectedUser?.first_name} {selectedUser?.last_name}
          </Text>
        </View>
        <View style={styles.headerRight} />
      </View>
      <View
        style={styles.content}
      >
        <View style={styles.contentInfo}>
          <Text
            style={styles.contentInfoTitle}
          >
            Información de contacto {selectedOption}
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => onPressOption(selectedUser?.username)}
        >
          <View
            style={styles.contactElement}
          >
            <Image
              source={icons.jobmeIcon}
              style={styles.iconJobme}
            />
            <View
              style={styles.contactElementInfo}
            >
              <Text
                style={styles.textTitle}
              >
                Perfil de {selectedUser?.first_name}
              </Text>
              <Text
                style={styles.text}
              >
                @{selectedUser?.username}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressOption(selectedUser?.email)}
        >
          <View
            style={styles.contactElement}
          >
            <Image
              source={icons.email}
              style={styles.icon}
            />
            <View
              style={styles.contactElementInfo}
            >
              <Text
                style={styles.textTitle}
              >
                Correo electrónico
              </Text>
              <Text
                style={styles.text}
              >
                {selectedUser?.email}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => onPressOption(selectedUser?.phone)}
        >
          <View
            style={styles.contactElement}
          >
            <Image
              source={icons.phone}
              style={styles.icon}
            />
            <View
              style={styles.contactElementInfo}
            >
              <Text
                style={styles.textTitle}
              >
                Teléfono
              </Text>
              <Text
                style={styles.text}
              >
                {selectedUser?.phone}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <ActionSheet
        sheetRef={sheetRef}
        title="Opciones"
        onClose={onCloseOptions}
        children={<MenuOptions />}
      />
    </Container>
  )
}

const styles = StyleSheet.create({
  menuOptions: {
    flexDirection: "column",
    padding: SIZES.base,
  },
  header: {
    height: 30,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between"
  },
  headerText: {
    ...FONTS.body,
    color: COLORS.black,
    fontWeight: "bold",
  },
  headerLeft: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "center"
  },
  headerCenter: {
    flex: 3,
    alignItems: "center",
    justifyContent: "center"
  },
  headerRight: {
    flex: 1,
    alignItems: "flex-end",
    justifyContent: "center"
  },
  content: {
    flex: 1,
    paddingVertical: SIZES.padding,
  },
  contentInfo: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SIZES.padding / 2,
  },
  contentInfoTitle: {
    ...FONTS.body,
    color: COLORS.black,
  },
  contactElement: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: SIZES.base,
    justifyContent: "space-between",
  },
  contactElementInfo: {
    flex: 1,
    marginLeft: SIZES.padding / 2,
  },
  iconJobme: {
    width: 30,
    height: 30,
    resizeMode: "contain",
    marginRight: 10,
  },
  icon: {
    width: 25,
    height: 25,
    resizeMode: "contain",
    marginRight: 10,
  },
  textTitle: {
    ...FONTS.bodySmall,
    color: COLORS.black,
    fontWeight: "bold",
  },
  text: {
    ...FONTS.bodySmall,
    color: COLORS.black,
  }
})

export default ContactInformationScreen;