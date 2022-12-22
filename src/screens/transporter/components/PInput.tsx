import * as React from "react";
import { TextInput, StyleSheet } from "react-native";

const PInput = () => {
  return (
    <TextInput
      style={[styles.frameTextInput, styles.mt4]}
      placeholder="enter password"
      keyboardType="default"
      placeholderTextColor="#b6bfdd"
    />
  );
};

const styles = StyleSheet.create({
  frameTextInput: {
    alignSelf: "stretch",
    borderRadius: 10,
    borderStyle: "solid",
    borderColor: "#5469b1",
    borderWidth: 1,
    height: 56,
    flexShrink: 0,
    flexDirection: "row",
    paddingHorizontal: 16,
    paddingVertical: 21,
    alignItems: "center",
    justifyContent: "space-between",
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeight: "400",
    color: "#0A288F",
  },
});

export default PInput;