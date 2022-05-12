import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, TouchableOpacityProps, ActivityIndicator, Image } from "react-native";
import { COLORS, FONTS } from "../../constants/theme";

interface IButtonIconProps extends TouchableOpacityProps {
  icon: any;
  iconColor?: string;
  iconStyle?: any;
  containerStyle?: any;
  onPress?: () => void;
}

const ButtonIcon: React.FC<IButtonIconProps> = ({
  icon,
  iconColor,
  iconStyle,
  containerStyle,
  onPress,
  ...rest
}) => {

  return (
    <TouchableOpacity
      onPress={onPress}
      {...rest}
    >
      <View
        style={[
          styles.container,
          containerStyle
        ]}
      >
        <Image
          source={icon}
          style={[
            styles.icon,
            iconColor && { tintColor: iconColor },
            iconStyle
          ]}
        />
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    // borderWidth: 1
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
    tintColor: COLORS.black
  }
});

export default ButtonIcon;