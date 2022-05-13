import React from "react";
import { View, StyleSheet, Text } from "react-native";
import Container from "../../components/Container";
import ScrollContainer from "../../components/ScrollContainer";
import { EditProfileScreenProps } from "../../interfaces/navigation";

const EditProfileScreen: React.FC<EditProfileScreenProps> = ({ navigation }) => {

  return (
    <ScrollContainer>
      <Container>
        <Text>EditProfileScreen</Text>
      </Container>
    </ScrollContainer>
  )
}

const styles = StyleSheet.create({
  
})

export default EditProfileScreen;