import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {
  ConnectionScreen,
  EditorScreen,
  HomeScreen,
  JobsScreen,
  NotificationScreen
} from "../screens";
import { AppNavigatorParamsList } from "../interfaces/navigation";
import { COLORS, SIZES } from "../constants/theme";
import icons from "../constants/icons";
import TabBarIcon from "../components/TabBarIcon";

const Tab = createBottomTabNavigator<AppNavigatorParamsList>()

const AppNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.white,
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          height: 65 - SIZES.width * 0.01,
          // elevation: 0
        },
        tabBarIcon: ({ focused, color, size }) => {
          let icon: any
          switch (route.name) {
            case "Home":
              icon = icons.home
              break
            case "Jobs":
              icon = icons.job
              break
            case "Notification":
              icon = icons.bell
              break
            case "Connection":
              icon = icons.connection
              break
            case "Editor":
              icon = icons.edit
              break
          }
          return <TabBarIcon focused={focused} color={color} size={size} icon={icon} />
        }
      })}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
      />
      <Tab.Screen
        name="Connection"
        component={ConnectionScreen}
      />
      <Tab.Screen
        name="Jobs"
        component={JobsScreen}
      />
      <Tab.Screen
        name="Notification"
        component={NotificationScreen}
      />
      <Tab.Screen
        name="Editor"
        component={EditorScreen}
      />
    </Tab.Navigator>
  )
}

export default AppNavigator;