import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  StatusBar,
  FlatList,
} from "react-native";

export default function App() {
  const [input, setInput] = useState<string>("");
  const [dados, setDados] = useState([]);

  function handlePressButton() {
    setDados([...dados, { key: input }]);
    setInput("");
  }

  return (
    <View style={styles.container}>
      <StatusBar barStyle={"light-content"} />
      <TextInput
        style={styles.input}
        placeholder="Digite algo"
        value={input}
        onChangeText={(texto) => setInput(texto)}
      />
      <Button title="Adicionar" onPress={handlePressButton}></Button>
      <FlatList
        data={dados}
        renderItem={({ item }) => <Text style={styles.item}>{item.key} </Text>}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  input: {
    height: 50,
    borderColor: "gray",
    borderWidth: 2,
  },
  item: {
    padding: 10,
    fontSize: 20,
    height: 40,
  },
});
