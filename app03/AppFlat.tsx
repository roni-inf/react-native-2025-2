import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useState } from "react";

export default function App() {
  const [dados, setDados] = useState([
    { id: 1, nome: "João", idade: 30 },
    { id: 2, nome: "Ana", idade: 50 },
    { id: 3, nome: "Sergio", idade: 10 },
    { id: 4, nome: "Mariana", idade: 24 },
    { id: 5, nome: "Carla", idade: 32 },
  ]);

  return (
    <View style={styles.container}>
      <FlatList
        data={dados}
        renderItem={({ item }) => <Pessoa data={item} />}
      />
    </View>
  );
}

function Pessoa(props: any) {
  return (
    <View style={styles.container}>
      <View style={styles.pessoa}>
        <Text style={styles.texto}>{props.data.nome}</Text>
        <Text style={styles.texto}>{props.data.idade}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  pessoa: {
    backgroundColor: "#121212",
    height: 200,
    marginBottom: 15,
    alignItems: "center",
    justifyContent: "center",
  },
  texto: {
    color: "#fff",
    fontSize: 24,
  },
});
