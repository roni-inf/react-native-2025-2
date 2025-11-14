import { View, Text, StyleSheet, FlatList } from "react-native";

export default function App() {
  const alunos = [
    { matricula: 123, nome: "Gilberto" },
    { matricula: 124, nome: "Marcos" },
    { matricula: 125, nome: "Carla" },
    { matricula: 122, nome: "Carlos" },
    { matricula: 423, nome: "Adriana" },
    { matricula: 424, nome: "Igor" },
    { matricula: 223, nome: "Felipe" },
  ];

  const renderItem = ({ item }) => {
    return (
      <View style={styles.aluno}>
        <Text>{item.nome}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <FlatList 
        renderItem={renderItem}
        data={alunos}
        keyExtractor={(aluno) => aluno.matricula}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 25,
  },
  aluno: {
    backgroundColor: "#d9d9d9",
    padding: 20,
    marginVertical: 40,
    marginHorizontal: 16,
    alignItems: "center",
  },
});
