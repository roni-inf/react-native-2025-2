import {
  View,
  Text,
  TextInput as TextInputType,
  TouchableOpacity,
  Alert,
  Keyboard,
  TextInput,
} from "react-native";
import { styles } from "./style";
import { useRef, useState } from "react";
import api from "./src/services/api";

interface cepData {
  cep: string;
  logradouro: string;
  bairro: string;
  localidade: string;
  uf: string;
}

export default function App() {
  const [cep, setCep] = useState<string>("");
  const inputRef = useRef<TextInputType | null>(null);
  const [cepUser, setCepUser] = useState<cepData | null>();

  function limpar() {
    setCep("");
    setCepUser(null);
    inputRef.current.focus();
  }

  async function buscar() {
    if (!cep) {
      Alert.alert("Digite o cep válido!");
      setCep("");
      return;
    }

    try {
      const response = await api.get(`/${cep}/json`);
      setCepUser(response.data);
      console.log(response.data);
      Keyboard.dismiss();
    } catch (error) {
      console.log("Erro de requisição!");
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.text}>Digite o seu cep:</Text>
        <TextInput
          placeholder="Ex.:25660000"
          value={cep}
          onChangeText={(texto) => setCep(texto)}
          keyboardType="numeric"
          style={styles.input}
          ref={inputRef}
        />
      </View>

      <View style={styles.areaBtn}>
        <TouchableOpacity
          onPress={buscar}
          style={[styles.botao, { backgroundColor: "#1d75cd" }]}
        >
          <Text style={styles.botaoText}>Buscar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.botao, { backgroundColor: "#cd3e1d" }]}
          onPress={limpar}
        >
          <Text style={styles.botaoText}>Limpar</Text>
        </TouchableOpacity>
      </View>

      {cepUser && (
        <View style={styles.resultado}>
          <Text style={styles.itemText}>Cep:{cepUser.cep}</Text>
          <Text style={styles.itemText}>Logradouro:{cepUser.logradouro}</Text>
          <Text style={styles.itemText}>Bairro:{cepUser.bairro}</Text>
          <Text style={styles.itemText}>Cidade:{cepUser.localidade}</Text>
          <Text style={styles.itemText}>UF:{cepUser.uf}</Text>
        </View>
      )}
    </View>
  );
}
