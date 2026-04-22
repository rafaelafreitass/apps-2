import React from "react";
import { Text, StyleSheet, Pressable, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [
          styles.button,
          {
            opacity: pressed ? 0.7 : 1,
            transform: [{ scale: pressed ? 0.97 : 1 }],
          },
        ]}
      >
        <Text style={styles.text}>botão</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
