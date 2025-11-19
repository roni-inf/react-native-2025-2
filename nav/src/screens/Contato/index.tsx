import { useState } from "react";
import { View, Text, StyleSheet, Button, TouchableOpacity, Modal, SafeAreaView, Alert } from "react-native";
import ActionModal from "../../components/ActionModal";

export default function Contato() {
  const [modalVisible, setModalVisible] = useState<boolean>(false);

  return (
    <View style={styles.container}>
      <Text>Tela de Contato</Text>
      <TouchableOpacity style={styles.buttton} onPress={()=>setModalVisible(true)}>
        <Text>Abrir</Text>
      </TouchableOpacity>

      <Modal transparent={true} visible={modalVisible} onRequestClose={()=>setModalVisible(false)}>
            <ActionModal handleClose={ ()=>setModalVisible(false)} 
            handleInformation={()=>alert("Information")} handleContact={()=>alert("Contact")}/>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#121318",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
  buttton: {
    backgroundColor: "#fff",
    padding: 4,
    marginVertical: 8,
    width: "70%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
