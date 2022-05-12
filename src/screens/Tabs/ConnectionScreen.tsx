import React from "react";
import { Text, StyleSheet } from "react-native";
import Container from "../../components/Container";
import { ConnectionScreenProps } from "../../interfaces/navigation";

const ConnectionScreen: React.FC<ConnectionScreenProps> = () => {
  return (
    <Container centered>
      <Text>ConnectionScreen</Text>
    </Container>
  )
};

const styles = StyleSheet.create({});

export default ConnectionScreen;