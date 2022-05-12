import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, TouchableOpacityProps } from "react-native";
import { COLORS, FONTS } from "../../constants/theme";

interface IButtonTextProps extends TouchableOpacityProps {
  text: string;
  textStyle?: any;
  containerStyle?: any;
  onPress?: () => void;
}

const ButtonText: React.FC<IButtonTextProps> = ({
  text,
  textStyle,
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
        <Text
          style={[
            styles.text,
            textStyle
          ]}
        >
          {text}
        </Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
    justifyContent: 'center'
  },
  text: {
    ...FONTS.body,
    color: COLORS.primary
  }
});

export default ButtonText;