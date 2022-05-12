import React, { useEffect } from "react";
import { BackHandler } from "react-native";
import { useNavigation } from "@react-navigation/native";

interface IUseBackHandler {
  isMain: boolean;
}

const useBackHandler = ({ isMain }: IUseBackHandler = { isMain: false }) => {
  const { goBack } = useNavigation();
  useEffect(() => {
    const backHandler = BackHandler.addEventListener("hardwareBackPress", () => {
      if (isMain) {
        BackHandler.exitApp()
        return true;
      }
      goBack();
      return true;
    });
    return () => backHandler.remove();
  }, []);
}

export default useBackHandler;