import { View, Text, ScrollView, StyleSheet, StatusBar } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <ScrollView style={styles.scroll}>
        <Text style={{ fontSize: 30 }}>Exemplo Scroll</Text>
        <Text style={{ fontSize: 30 }}>Exemplo Scroll</Text>
        <Text style={{ fontSize: 30 }}>Exemplo Scroll</Text>
        <Text style={{ fontSize: 30 }}>Teste</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    color: "red",
    fontSize: 28,
  },
  scroll: {
    backgroundColor: "gray",
    height: 110,
    fontSize: 30,
    marginVertical: 20,
  },
});
