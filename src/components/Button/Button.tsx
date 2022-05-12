import React from "react";
import { TouchableOpacity, View, Text, StyleSheet, TouchableOpacityProps, ActivityIndicator } from "react-native";
import { COLORS, FONTS, SIZES } from "../../constants/theme";

interface IButtonProps extends TouchableOpacityProps {
  text: string;
  textStyle?: any;
  containerStyle?: any;
  loading?: boolean;
  outlined?: boolean;
  rounded?: boolean;
  onPress?: () => void;
}

const Button: React.FC<IButtonProps> = ({
  text,
  textStyle,
  containerStyle,
  loading,
  outlined,
  rounded,
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
          containerStyle,
          outlined && styles.outlined,
          rounded && styles.rounded
        ]}
      >
        <Text
          style={[
            styles.text,
            outlined && styles.outlineText,
            textStyle
          ]}
        >
          {text}
        </Text>
        {
          loading && (
            <ActivityIndicator
              size='small'
              color={COLORS.white}
            />
          )
        }
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary,
    flexDirection: 'row'
  },
  text: {
    ...FONTS.bodySmall,
    color: COLORS.white
  },
  outlineText: {
    color: COLORS.primary
  },
  outlined: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    backgroundColor: COLORS.white
  },
  rounded: {
    borderRadius: 25,
    width: '100%',
    paddingHorizontal: SIZES.padding
  }
});

export default Button;