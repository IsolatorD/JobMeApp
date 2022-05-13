import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { SIZES, COLORS, FONTS } from "../../constants/theme";

interface IMenuOption {
  title: string;
  onPress: () => void;
}

const MenuOption: React.FC<IMenuOption> = ({ title, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
  >
    <View
      style={styles.option}
    >
      <Text
        style={styles.optionTitle}
      >
        {title}
      </Text>
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  option: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: SIZES.padding / 1.5,
    borderBottomWidth: .5,
    borderBottomColor: COLORS.gray
  },
  optionTitle: {
    ...FONTS.bodySmall,
    color: COLORS.black
  }
});

export default MenuOption;