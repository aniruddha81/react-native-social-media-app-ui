import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const Reels = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Reels Screen</Text>
        <Text style={styles.placeholderText}>Coming soon!!</Text>
      </View>
    </SafeAreaView>
  );
};

export default Reels;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#fff",
  },
  placeholderText: {
    fontSize: 16,
    marginTop: 10,
    color: "gray",
  },
});
