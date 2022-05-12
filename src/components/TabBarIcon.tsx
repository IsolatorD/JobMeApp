import React from "react";
import { View, Image, StyleSheet } from "react-native";
import { COLORS } from "../constants/theme";

interface ITabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
  icon: any;
}

const TabBarIcon: React.FC<ITabBarIconProps> = ({ focused, color, size, icon }) => {

  return (
    <>
      { focused && (<View style={styles.tabIconFocusedOverlay}/>)}
      <View
        style={[
          styles.tabIcon,
          focused && styles.tabIconFocus,
        ]}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            zIndex: 3,
            tintColor: color,
            width: size,
            height: size,
          }}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  tabIcon: {
    justifyContent: "center",
    alignItems: "center",
  },
  tabIconFocus: {
    position: "absolute",
    top: -20,
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: COLORS.primary,
    marginVertical: 5,
    zIndex: 2,
  },
  tabIconFocusedOverlay: {
    position: "absolute",
    top: -22.5,
    width: 65,
    height: 65,
    borderRadius: 32.5,
    backgroundColor: COLORS.overlayPrimary,
    zIndex: 2,
  }
})

export default TabBarIcon