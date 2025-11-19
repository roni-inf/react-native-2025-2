import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Modal,
  Alert,
  TextInput,
} from "react-native";

import { styles } from "./styles";
import { useState } from "react";

export default function Sobre() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);
  const [nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  //testando vazio, undefined e null
  function handleSalvar(): void {
    if (!nome || !email) {
      Alert.alert("Atenção", "Preencha todos os campos!");
      return;
    }

    console.log(`${nome} - ${email}`);
    Alert.alert("Sucesso", `Nome:${nome}\nEmail:${email}`);

    setNome("");
    setEmail("");
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.buttonText}>Abrir Modal</Text>
      </TouchableOpacity>

      <Modal
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
        animationType="slide"
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContent}>
            <Text style={styles.modalText}>Cadastro de Contato</Text>

            <TextInput
              placeholder="Digite o nome"
              value={nome}
              onChangeText={setNome}
              style={styles.input}
            />
            <TextInput
              placeholder="Digite o email"
              value={email}
              onChangeText={setEmail}
              style={styles.input}
            />

            <View style={styles.buttonRow}>
              <TouchableOpacity
                style={[styles.button, { backgroundColor: "red" }]}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.buttonText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.button} onPress={handleSalvar}>
                <Text style={styles.buttonText}>Salvar</Text>
              </TouchableOpacity>
            </View>
          </View>
          <TouchableOpacity
            style={styles.button}
            onPress={() => setModalVisible(false)}
          >
            <Text style={styles.buttonText}>Fechar Modal</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}
