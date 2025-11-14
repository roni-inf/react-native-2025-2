import { View, Text, StatusBar, SafeAreaView } from "react-native";
import React, { useEffect, useState } from "react";

export default function App() {
  const [saudacao, setSaudacao] = useState("");

  useEffect(() => {
    const horaAtual = new Date().getHours();
    console.log(horaAtual);
    horaAtual < 12
      ? setSaudacao("Bom dia")
      : horaAtual < 18
      ? setSaudacao("Boa tarde")
      : setSaudacao("Boa noite");
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: "#121212" }}>
        <StatusBar barStyle={"light-content"} />
      <View style={{ height:65, backgroundColor: "#121212" }}>
        <Text style={{color:"#fff"}}>Cabeçalho</Text>
      </View>

      <View style={{ flex: 1, backgroundColor: "#ddd" }}>
        <Text style={{color:"blue"}}>{saudacao}</Text>
      </View>

      <View style={{ height:65, backgroundColor: "#121212" }}>
        <Text style={{color:"#fff"}}>Rodapé</Text>
      </View>
    </View>
  );
}
