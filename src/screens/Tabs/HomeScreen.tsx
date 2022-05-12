import React, { useEffect } from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";
import Container from "../../components/Container";
import MainHeader from "../../components/MainHeader";
import { useUsers } from "../../hooks/useUsers";
import { HomeScreenProps } from "../../interfaces/navigation";

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const { fetchUsers, users } = useUsers()

  useEffect(() => {
    fetchUsers()
  }, [])

  const onPressUser = (userId: number) => {
    // @ts-ignore
    navigation.navigate('Internal', {
      screen: 'UserProfile',
      params: {
        userId
      }
    })
  }

  return (
    <Container padding>
      <MainHeader />
      <View>
        {
          users.map((user) => (
            <TouchableOpacity
              onPress={() => onPressUser(user.id)}
              key={user.id}
            >
              <Text>{user.username}</Text>
            </TouchableOpacity>
          ))
        }
      </View>
    </Container>
  )
};

const styles = StyleSheet.create({});

export default HomeScreen;