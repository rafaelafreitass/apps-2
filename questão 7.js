import React, { createContext, useContext } from "react";
import { StyleSheet, View, Text, useColorScheme } from "react-native";

const lightColors = {
  background: "#FFFFFF",
  text: "#000000",
  card: "#F0F0F0",
};

const darkColors = {
  background: "#121212",
  text: "#FFFFFF",
  card: "#1E1E1E",
};

const ThemeContext = createContext();

export default function App() {
  const colorScheme = useColorScheme();
  const theme = colorScheme === "dark" ? darkColors : lightColors;

  return (
    <ThemeContext.Provider value={theme}>
      <Screen />
    </ThemeContext.Provider>
  );
}

function Screen() {
  const theme = useContext(ThemeContext);

  return (
    <View style={[styles.container, { backgroundColor: theme.background }]}>
      <View style={[styles.card, { backgroundColor: theme.card }]}>
        <Text style={[styles.text, { color: theme.text }]}>
          Tema Atual: {useColorScheme()}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    padding: 20,
    borderRadius: 10,
    width: "80%",
    alignItems: "center",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
