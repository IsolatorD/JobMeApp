import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  UserProfileScreen
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
    </Stack.Navigator>
  )
}

export default InternalNavigator;