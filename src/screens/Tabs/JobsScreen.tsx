import React from "react";
import { Text, StyleSheet } from "react-native";
import Container from "../../components/Container";
import { JobsScreenProps } from "../../interfaces/navigation";

const JobsScreen: React.FC<JobsScreenProps> = () => {
  return (
    <Container centered>
      <Text>JobsScreen</Text>
    </Container>
  )
};

const styles = StyleSheet.create({});

export default JobsScreen;