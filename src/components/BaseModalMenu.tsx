import React from "react";
import { Modal, StyleSheet, View, Text, TouchableOpacity } from "react-native";

interface IBaseModalMenuProps {
  visible: boolean;
  onClose: () => void;
}

const BaseModalMenu: React.FC<IBaseModalMenuProps> = ({ visible, onClose }) => {

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >

    </Modal>
  )
}

const styles = StyleSheet.create({})

export default BaseModalMenu;