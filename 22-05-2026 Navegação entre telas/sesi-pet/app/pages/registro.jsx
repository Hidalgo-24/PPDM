import { useState } from "react";
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from "react-native";

export default function Registro({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style={styles.titulo}>Bem-vindo ao Sesi Pet</Text>
        <Text style={styles.subtitulo}>Cadastre-se</Text>

        <TextInput
          style={styles.input}
          placeholder="Insira seu e-mail"
          placeholderTextColor="#999"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="*****"
          placeholderTextColor="#999"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="*****"
          placeholderTextColor="#999"
          value={confSenha}
          onChangeText={setConfSenha}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.botaoPrincipal}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.textoBotaoPrincipal}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.botaoSecundario}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.textoBotaoSecundario}>Já tenho conta</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7F0",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#FFFFFF",
    padding: 28,
    borderRadius: 22,
    elevation: 5,
    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5,
    },
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
    textAlign: "center",
    marginBottom: 8,
  },
  subtitulo: {
    fontSize: 16,
    color: "#777777",
    textAlign: "center",
    marginBottom: 28,
  },
  input: {
    backgroundColor: "#F7F7F7",
    borderWidth: 1,
    borderColor: "#E0E0E0",
    borderRadius: 14,
    padding: 14,
    fontSize: 15,
    marginBottom: 14,
    color: "#333333",
  },
  botaoPrincipal: {
    backgroundColor: "#FF914D",
    padding: 15,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 10,
  },
  textoBotaoPrincipal: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  botaoSecundario: {
    marginTop: 16,
    alignItems: "center",
  },
  textoBotaoSecundario: {
    color: "#FF914D",
    fontSize: 15,
    fontWeight: "600",
  },
});