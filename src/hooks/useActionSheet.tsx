import React, { useRef } from "react";

export const useActionSheet = () => {
  const sheetRef = useRef<any>();

  const onClose = () => {
    sheetRef.current?.hide();
  }

  const show = () => {
    sheetRef.current?.show()
  }

  return { show, onClose, sheetRef };
}