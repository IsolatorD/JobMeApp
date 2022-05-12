import React from "react";
import { Keyboard, TouchableWithoutFeedback } from "react-native";
// @ts-ignore
import KeyboardAwareScrollView from "react-native-keyboard-aware-scrollview/src/KeyboardAwareScrollView";


const ScrollContainer: React.FC = ({ children }) => {
  return (
    <KeyboardAwareScrollView
      showsVerticalScrollIndicator={false}
      style={{ flex: 1, padding: 0, margin: 0 }}
    >
      <TouchableWithoutFeedback
        onPress={Keyboard.dismiss}
      >
        {/* <> */}
          {children}
        {/* </> */}
      </TouchableWithoutFeedback>
    </KeyboardAwareScrollView>
  )
}

export default ScrollContainer;
