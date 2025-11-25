import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function App() {
  const [input, setInput] = useState("");
  const [nome, setNome] = useState("");

  async function gravarNome() {
    await AsyncStorage.setItem("@nome", input);
    setNome(input)
    setInput("");
  }

  useEffect(() => {
    async function pegarNome() {
      await AsyncStorage.getItem("@nome").then((value) => {
        setNome(value);
      });
    }
    pegarNome();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.viewInput}>
        <StatusBar barStyle={"light-content"} />
        <TextInput
          value={input}
          style={styles.input}
          onChangeText={(texto) => setInput(texto)}
        />

        <TouchableOpacity onPress={gravarNome}>
          <Text style={styles.botao}>+</Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.nome}>{nome}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 35,
  },
  viewInput: {
    flexDirection: "row",
    alignItems: "center",
  },
  input: {
    width: 350,
    height: 40,
    borderColor: "#000",
    borderWidth: 1,
    padding: 10,
  },
  botao: {
    backgroundColor: "#222",
    color: "#FFF",
    height: 40,
    padding: 10,
    marginLeft: 4,
  },
  nome: {
    marginTop: 15,
    fontSize: 30,
  },
});
