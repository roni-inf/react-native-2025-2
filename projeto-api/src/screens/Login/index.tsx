import {
  View,
  Text,
  Alert,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import api from "../../services/api";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { styles } from "./styles";

export default function Login() {
  const { setToken } = useContext(AuthContext);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async () => {
    try {
      console.log("teste");
      
      const resp = api.post("/login", { username, password });
      const { token } = (await resp).data
      console.log(token);
      
      if (!token) {
        Alert.alert("Credenciais do token inválidas!");
        return;
      }

      await AsyncStorage.setItem("token", token);
      setToken(token);
    } catch (error) {
      Alert.alert("Usuário ou senha inválidos!");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={require("../../../assets/perfil.png")} style={styles.logo}/>
      <View style={styles.areaInput}>
        <TextInput
          placeholder="Seu email"
          value={username}
          onChangeText={setUsername}
          style={styles.input}
        />
      </View>

      <View style={styles.areaInput}>
        <TextInput
          placeholder="Sua senha"
          value={password}
          onChangeText={setPassword}
          style={styles.input}
          secureTextEntry
        />
      </View>
      <TouchableOpacity style={styles.submitButton} onPress={handleLogin}>
        <Text style={styles.submitText}>Login</Text>
      </TouchableOpacity>
    </View>
  );
}
