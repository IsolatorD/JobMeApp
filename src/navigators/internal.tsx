import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  UserProfileScreen,
  EditProfileScreen,
  ContactInformationScreen,
  SettingsScreen,
} from "../screens";
import { InternalNavigatorParamsList } from "../interfaces/navigation";

const Stack = createNativeStackNavigator<InternalNavigatorParamsList>();

const InternalNavigator: React.FC = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="UserProfile"
        component={UserProfileScreen}
        options={{
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="EditProfile"
        component={EditProfileScreen}
        options={{
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="ContactInformation"
        component={ContactInformationScreen}
        options={{
          animation: 'slide_from_right'
        }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{
          animation: 'slide_from_right'
        }}
      />
    </Stack.Navigator>
  )
}

export default InternalNavigator;