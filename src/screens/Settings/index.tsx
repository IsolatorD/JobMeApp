import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Container from "../../components/Container";
import { SettingsScreenProps } from "../../interfaces/navigation";

const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {

  return (
    <Container>
      <Text>SettingsScreen</Text>
    </Container>
  )
}

const styles = StyleSheet.create({})

export default SettingsScreen;