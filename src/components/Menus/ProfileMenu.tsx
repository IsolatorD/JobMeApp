import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, StyleSheet } from "react-native";
import { SIZES } from "../../constants/theme";
import { useAuth } from "../../hooks/useAuth";
import { IMenuOption } from "../../interfaces/common";
import MenuOption from "./MenuOption";

interface IProfileMenuProps {
  isAnotherUser: boolean;
  onCloseMenu: () => void;
}

const ProfileMenu: React.FC<IProfileMenuProps> = ({ isAnotherUser, onCloseMenu }) => {
  const { navigate } = useNavigation()
  const { signOut } = useAuth()

  const AuthUserOptions:IMenuOption[] = [
    {
      label: 'Editar perfil',
      action: () => {
        onCloseMenu()
        setTimeout(() => {
          // @ts-ignore
          navigate('Internal', {
            screen: 'EditProfile'
          })
        }, 300);
      },
    },
    {
      label: 'Configuración',
      action: () => {
        onCloseMenu()
        setTimeout(() => {
          // @ts-ignore
          navigate('Internal', {
            screen: 'Settings'
          })
        }, 300);
      },
    },
    {
      label: 'Cerrar sesión',
      action: () => {
        onCloseMenu()
        setTimeout(() => {
          signOut()
        }, 300);
      },
    }
  ]

  const OtherUserOptions:IMenuOption[] = [
    {
      label: 'Compartir perfil por...',
      action: () => {},
    },
    {
      label: 'Información de contacto',
      action: () => {
        onCloseMenu()
        setTimeout(() => {
          // @ts-ignore
          navigate('Internal', {
            screen: 'ContactInformation'
          })
        }, 300);
      },
    },
    {
      label: 'Denunciar o bloquear',
      action: () => {},
    }
  ]

  return (
    <View style={styles.container}>
      {
        isAnotherUser ?
          OtherUserOptions.map((option, index) => (
            <MenuOption
              key={index}
              title={option.label}
              onPress={option.action}
            />
          ))
        :
          AuthUserOptions.map((option, index) => (
            <MenuOption
              key={index}
              title={option.label}
              onPress={option.action}
            />
          ))
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: SIZES.padding
  }
});

export default ProfileMenu;