import React from "react";
import { View, Image, StyleSheet } from "react-native";

interface IAvatarProps {
  size: number;
  source: any;
  style?: any;
}

const Avatar: React.FC<IAvatarProps> = ({ size, source, style }) => {
  return (
    <View
      style={[
        styles.avatar,
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: "transparent",
          ...style,
        },
      ]}
    >
      <Image
        source={source}
        resizeMode="contain"
        style={{
          width: size,
          height: size,
          borderRadius: size / 2,
          backgroundColor: "transparent",
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  avatar: {
    backgroundColor: "transparent",
    borderWidth: 1,
    borderColor: "transparent",
    borderRadius: 50,
    overflow: "hidden",
    zIndex: 2,
  }
});

export default Avatar;