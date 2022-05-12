import React from "react";
import { Text, StyleSheet } from "react-native";
import Container from "../../components/Container";
import { NotificationScreenProps } from "../../interfaces/navigation";

const NotificationScreen: React.FC<NotificationScreenProps> = () => {
  return (
    <Container centered>
      <Text>NotificationScreen</Text>
    </Container>
  )
};

const styles = StyleSheet.create({});

export default NotificationScreen;