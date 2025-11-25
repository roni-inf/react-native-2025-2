import React, { useEffect, useState, useContext, useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  RefreshControl,
  Button,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import api from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

export default function Feed() {
  const navigation = useNavigation();
  const { logout } = useContext(AuthContext);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [refreshing, setRefreshing] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const resp = await api.get("/posts");
      setPosts(resp.data || []);
    } finally {
      setLoading(false);
    }
  };

  useFocusEffect(
    useCallback(() => {
      fetchPosts();
    }, [])
  );

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchPosts();
    setRefreshing(false);
  };

  const handleLogout = async () => {
    await AsyncStorage.removeItem("token");
    logout();
    Alert.alert("Logout", "Você saiu da conta.");
  };

  if (loading) return <ActivityIndicator style={styles.loading} />; //   renderItem separado

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Text style={styles.title}>{item.titulo}</Text>
      <Text>{item.descricao}</Text>
      <Text numberOfLines={2}>{item.conteudo}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Button
        title="Novo Post"
        onPress={() => navigation.navigate("Post" as never)}
      />
      <View style={styles.spacer} />
      <Button title="Logout" color="red" onPress={handleLogout} />
      <FlatList
        data={posts}
        keyExtractor={(item) => String(item.id)}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        renderItem={renderItem}
      />
    </View>
  );
}
