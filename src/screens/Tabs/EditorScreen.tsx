import React from "react";
import { Text, StyleSheet } from "react-native";
import Container from "../../components/Container";
import { EditorScreenProps } from "../../interfaces/navigation";

const EditorScreen: React.FC<EditorScreenProps> = () => {
  return (
    <Container centered>
      <Text>EditorScreen</Text>
    </Container>
  )
};

const styles = StyleSheet.create({});

export default EditorScreen;