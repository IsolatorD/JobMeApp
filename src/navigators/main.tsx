import React, { useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  SplashScreen
} from "../screens";
import AuthNavigator from "./auth";
import AppNavigator from "./app";
import { MainNavigatorParamsList } from '../interfaces/navigation';
import { useAuth } from "../hooks/useAuth";
import InternalNavigator from "./internal";
import AuthService from "../services/auth";
import { useDispatch } from "react-redux";
import { authSlice } from "../store/reducers/auth";

const Stack = createNativeStackNavigator<MainNavigatorParamsList>();

const Auth = new AuthService()

const MainNavigator: React.FC = () => {
  const { token } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    const bootstrapAsync = async () => {
      let storageToken
      try {
        storageToken = await Auth.getToken()
      }
      catch (e) {
        console.log(e)
      }
      if (storageToken) {
        dispatch(authSlice.actions.setToken(storageToken))
      }
    }
    bootstrapAsync()
  }, [])

  useEffect(() => {
    const bootstrapAsync = async () => {
      let storageUser
      try {
        storageUser = await Auth.getUser()
      }
      catch (e) {
        console.log(e)
      }
      if (storageUser) {
        dispatch(authSlice.actions.setUser(storageUser))
      } else {
        // @ts-ignore
        await dispatch(me())
      }
    }
    if (token) {
      bootstrapAsync()
    }
  } , [token])

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen
          name="SplashScreen"
          component={SplashScreen}
        />
        {
          token ? 
          (
            <Stack.Screen
              name="App"
              component={AppNavigator}
            />
          )
          :
          (
            <Stack.Screen
              name="App"
              component={AuthNavigator}
            />
          )
        }
        <Stack.Screen
          name="Internal"
          component={InternalNavigator}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator;