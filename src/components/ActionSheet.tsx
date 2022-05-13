import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Image,
  Text
} from "react-native";

import RNActionSheet from "react-native-actions-sheet";
import { COLORS, FONTS, SIZES } from "../constants/theme";
import icons from '../constants/icons';

interface IActionSheetProps {
  sheetRef: any;
  title?: string;
  onClose: () => void;
}

const ActionSheet: React.FC<IActionSheetProps> = ({ sheetRef, title, onClose, children }) => {
  return (
    <RNActionSheet
      ref={sheetRef}
      gestureEnabled={true}
      onClose={onClose}
    >
      <View
        style={styles.header}
      >
        <Text
          style={styles.title}
        >
          {title}
        </Text>
      </View>
      <View
        style={styles.container}
      >
        {children}
      </View> 
    </RNActionSheet>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    paddingHorizontal: SIZES.padding / 2,
  },
  header: {
    height: 30,
    flexDirection: "row",
    justifyContent: "center"
  },
  title: {
    ...FONTS.bodySmall,
    color: COLORS.black,
    fontWeight: "bold",
    marginLeft: SIZES.padding / 2,
  },
  closeButton: {
    marginRight: SIZES.padding / 2,
  },
  closeIcon: {
    width: 25,
    height: 25,
    tintColor: COLORS.black,
  }
})

export default ActionSheet;