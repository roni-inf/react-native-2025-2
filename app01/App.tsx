import { useState } from "react";
import { View, Text, StyleSheet, TextInput, StatusBar } from "react-native";

export default function App() {
  const [texto, setTexto] = useState("");
  return (
    <View>
      <StatusBar barStyle={"light-content"} />
      <TextInput
        style={styles.input}
        keyboardType="default"
        placeholder="Digite algo" 
        onChangeText={(text) => setTexto(text)} 
      ></TextInput>
      <Text>{texto}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 40,
    borderWidth: 2,
    fontSize: 16,
    padding: 10,
    margin: 30,
  },
  texto: {
    fontSize: 25,
    textAlign: "center",
  },
});
