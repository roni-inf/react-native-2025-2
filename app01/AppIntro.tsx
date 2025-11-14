import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
export default function App() {
  const [nome, setNome] = useState("Maria");
  const [texto, setTexto] = useState("Aula");

  // function mudarTexto() {
  //   setTexto("React Native");
  //   console.log(texto);
  // }
  const mudarTexto = () => {
    setTexto("React Native");
    console.log(texto);
  };

  return (
    <View style={styles.container}>
      <Text>{texto}</Text>
      <Button onPress={mudarTexto} title="Alterar" />
      <Text>{nome}</Text>
      <Button title="Trocar Nome" onPress={() => setNome("Joaquim")} />
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
