import { useNavigation, StackActions } from "@react-navigation/native";
import { View, Text, StyleSheet, Button } from "react-native";

export default function Contato() {
  const navigation = useNavigation();


  return (
    <View style={styles.container}>
      <Text>Página de Contato</Text>
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
