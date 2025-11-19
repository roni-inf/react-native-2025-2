import { DrawerContentScrollView, DrawerItemList } from "@react-navigation/drawer";
import { View, Text, StyleSheet, Image } from "react-native";

export default function CustomDrawer(props) {
  return (
    <DrawerContentScrollView>
      <View style={styles.container}>
        <Image style={styles.imagem} source={require("../../../assets/perfil.png")} />
        <Text style={styles.texto}>Bem Vindo!</Text>
      </View>
      <DrawerItemList {...props}/>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 85,
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    width: 65,
    height: 65,
  },
  texto: {
    color: "#121212",
    fontSize: 20,
  },
});
