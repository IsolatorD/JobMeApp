import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { COLORS, SIZES } from "../constants/theme";

// type paddingTypes = "padding" | "padding-vertical" | "padding-horizontal";

interface IContainerProps {
  children: React.ReactNode;
  centered?: boolean;
  transparent?: boolean;
  padding?: boolean;
}

const Container: React.FC<IContainerProps> = ({ children, centered, transparent, padding }) => {
  return (
    <SafeAreaView
      style={[
        styles.container,
        centered && styles.centered,
        transparent && styles.transparent,
        padding && styles.padding
      ]}
    >
      {children}
    </SafeAreaView>
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  centered: {
    justifyContent: "center",
    alignItems: "center",
  },
  transparent: {
    backgroundColor: COLORS.transparent,
  },
  padding: {
    padding: SIZES.padding
  }
});

export default Container;