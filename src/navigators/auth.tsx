import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  LoginScreen,
  SignUpScreen,
} from "../screens";
import { AuthNavigatorParamsList } from "../interfaces/navigation";

const Stack = createNativeStackNavigator<AuthNavigatorParamsList>();

const AuthNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUpScreen}
        options={{
          animation: 'slide_from_right'
        }}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigator;