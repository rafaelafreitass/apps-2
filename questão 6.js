import React from "react";
import {
  View,
  StyleSheet,
  useWindowDimensions,
  ScrollView,
} from "react-native";

export default function App() {
  const { width, height } = useWindowDimensions();
  const isLandscape = width > height;
  const cardWidth = isLandscape ? (width - 60) / 2 : width - 40;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View
        style={[styles.list, { flexDirection: isLandscape ? "row" : "column" }]}
      >
        <View style={[styles.card, { width: cardWidth }]} />
        <View style={[styles.card, { width: cardWidth }]} />
        <View style={[styles.card, { width: cardWidth }]} />
        <View style={[styles.card, { width: cardWidth }]} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  list: {
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  card: {
    height: 150,
    backgroundColor: "#007AFF",
    borderRadius: 10,
    marginBottom: 20,
  },
});
