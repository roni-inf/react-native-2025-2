import { View, Text, StyleSheet, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <View style={styles.box} />
      <View style={[styles.box, {alignSelf:"flex-end"} ]} />
      <View style={styles.box} />
      <View style={styles.box} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "yellow",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "center"
  },
  box: {
    // flex: 1,
    width: 100,
    height: 100,
    backgroundColor: "#d9d9d9",
    margin: 10,
  },
});
