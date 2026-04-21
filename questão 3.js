import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";

export default function App() {
  const [clicked, setClicked] = useState(Array(9).fill(false));

  const toggleCell = (index) => {
    const newClicked = [...clicked];
    newClicked[index] = !newClicked[index];
    setClicked(newClicked);
  };

  return (
    <View style={styles.container}>
      <View style={styles.grid}>
        {clicked.map((isClicked, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.cell,
              { backgroundColor: isClicked ? "#3b82f6" : "#e2e8f0" },
            ]}
            onPress={() => toggleCell(index)}
          >
            <Text>{index + 1}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  grid: {
    width: 300,
    flexDirection: "row",
    flexWrap: "wrap",
  },
  cell: {
    width: "33.33%",
    height: 100,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#fff",
  },
});
