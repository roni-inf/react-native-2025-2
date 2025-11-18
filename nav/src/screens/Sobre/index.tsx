import { useNavigation } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Sobre() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text>Página de Sobre</Text>
      <Button title="Ir Pra Home" onPress={() => navigation.jumpTo("Home")} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
