import React from "react";
import { StyleSheet, View } from "react-native";

export default function App() {
  return <View styles={styles.container}> This is my app</View>;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignContent: "center",
  },
});
