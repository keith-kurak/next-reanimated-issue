import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import ReanimatedThing from "reanimated-thing"

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello from the application</Text>
      <ReanimatedThing />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
