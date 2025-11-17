import { useState } from "react";
import { View, Text, TextInput } from "react-native";
import { styles } from "./styles";

export default function App() {
  const [nome, setNome] = useState<string>("");

  function buscarNome(texto: string): void {
    texto.length > 0 ? setNome(`Bem vindo: ${texto}`) : setNome("");
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Digite o nome"
        onChangeText={(texto) => buscarNome(texto)}
      ></TextInput>
      <Text>{nome}</Text>
    </View>
  );
}
