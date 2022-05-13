import React, { useEffect } from "react";
import { StyleSheet, Image } from "react-native";
import Container from "../components/Container";
import images from "../constants/images";
import { SplashScreenProps } from "../interfaces/navigation";

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("App");
    }, 2000);
  })
  return (
    <Container centered>
      <Image
        source={images.splash}
        style={styles.splash}
      />
    </Container>
  )
};

const styles = StyleSheet.create({
  splash: {
    width: "100%",
    height: "100%",
    resizeMode: "cover"
  }
});

export default SplashScreen;