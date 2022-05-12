import React from "react";
import { View, Text, StyleSheet, TextInput, TextInputProps } from "react-native";
import { COLORS, FONTS } from "../../constants/theme";

interface IInputProps extends TextInputProps {
  label?: string;
  error?: string;
  labelStyle?: any;
  containerStyle?: any;
  withoutContainer?: boolean;
}

const Input: React.FC<IInputProps> = ({
  label,
  error,
  labelStyle,
  containerStyle,
  style,
  placeholder,
  withoutContainer,
  ...rest
}) => {

  return (
    <View
      style={[
        !withoutContainer && styles.container,
        containerStyle
      ]}
    >
      {
        label && (
          <Text
            style={[
              styles.label,
              labelStyle
            ]}
          >
            {label}
          </Text>
        )
      }
      <TextInput
        style={[
          styles.input,
          !!error && styles.error,
          style
        ]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        {...rest}
      />
      {
        error && (
          <Text
            style={styles.errorMessage}
          >
            {error}
          </Text>
        )
      }
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20
  },
  label: {
    ...FONTS.caption,
    color: COLORS.black,
    marginBottom: 5
  },
  input: {
    ...FONTS.body,
    borderColor: COLORS.gray,
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    color: COLORS.black
  },
  error: {
    borderColor: COLORS.error,
  },
  errorMessage: {
    ...FONTS.caption,
    color: COLORS.error,
    marginTop: 5
  }
});

export default Input;