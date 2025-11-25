import { View, Text, Alert, ScrollView, TextInput, Button } from "react-native";
import React, { useState } from "react";
import { styles } from "./styles";
import api from "../../services/api";

interface PostDTO {
  id?: number;
  titulo: string;
  descricao: string;
  conteudo: string;
}

export default function Post() {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");
  const [conteudo, setConteudo] = useState("");

  const handleCreate = async () => {
    const post: PostDTO = { titulo, descricao, conteudo };
    try {
      const resp = await api.post("/posts", post);
      Alert.alert("Sucesso", `Post criado com id ${resp.data.id}`);
      setTitulo("");
      setDescricao("");
      setConteudo("");
    } catch (err: any) {
      console.log(err?.response?.data || err.message);
      Alert.alert("Erro", "Não foi possível criar o post");
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
                     <Text style={styles.label}>Título</Text>
                         
      <TextInput value={titulo} onChangeText={setTitulo} style={styles.input} />
                     <Text style={styles.label}>Descrição</Text>
                         
      <TextInput
        value={descricao}
        onChangeText={setDescricao}
        style={styles.input}
      />
                     <Text style={styles.label}>Conteúdo</Text>
                         
      <TextInput
        value={conteudo}
        onChangeText={setConteudo}
        multiline
        numberOfLines={6}
        style={[styles.input, styles.textArea]}
      />
                     <Button title="Cadastrar Post" onPress={handleCreate} />              
    </ScrollView>
  );
}
