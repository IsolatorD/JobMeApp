import React, { useEffect } from "react";
import { Text, StyleSheet } from "react-native";
import Container from "../components/Container";
import { SplashScreenProps } from "../interfaces/navigation";

const SplashScreen: React.FC<SplashScreenProps> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("App");
    }, 2000);
  })
  return (
    <Container centered>
      <Text>SplashScreen</Text>
    </Container>
  )
};

const styles = StyleSheet.create({});

export default SplashScreen;