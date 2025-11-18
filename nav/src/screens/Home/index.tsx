import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Home() {
  const navigation = useNavigation();

  function navegaSobre() {
    navigation.navigate("Sobre");
  }

  return (
    <View style={styles.container}>
      <Text>Página de Home</Text>
      <Button
        title="Ir para sobre"
        onPress={navegaSobre}
      />
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
