import { useState } from "react";
import {
  ScrollView,
  View,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

import Logo from '../../assets/images/nike.jpg';    

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function fazerLogin() {
    console.log("Dados do login");
    console.log({ email, senha });
  }

  return (
    <ScrollView contentContainerStyle={estilos.container}>

      {/* card */}
      <View style={estilos.card}>

        {/* logo */}
        <Image
          source={Logo}
          style={estilos.logo}
          resizeMode="contain"
        />

        {/* titulo */}
        <Text style={estilos.titulo}>Login</Text>

        {/* subtitulo */}
        <Text style={estilos.sub}>
          Insira suas credenciais
        </Text>

        {/* formulário */}
        <View style={estilos.form}>

          {/* email */}
          <Text style={estilos.label}>E-mail</Text>

          <TextInput
            style={estilos.input}
            placeholder="Digite seu e-mail"
            placeholderTextColor="#666"
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          {/* senha */}
          <Text style={estilos.label}>Senha</Text>

          <TextInput
            style={estilos.input}
            placeholder="******"
            placeholderTextColor="#666"
            secureTextEntry
            value={senha}
            onChangeText={setSenha}
          />

          {/* botão */}
          <TouchableOpacity
            style={estilos.botao}
            onPress={fazerLogin}
          >
            <Text style={estilos.textoBotao}>
              Login
            </Text>
          </TouchableOpacity>

        </View>
      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#111",
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },

  card: {
    width: "100%",
    maxWidth: 400,
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 25,
    elevation: 10,
    alignItems: "center",
  },

  logo: {
    width: 140,
    height: 140,
    marginBottom: 15,
  },

  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#000",
  },

  sub: {
    fontSize: 16,
    color: "#666",
    marginBottom: 30,
    marginTop: 5,
  },

  form: {
    width: "100%",
  },

  label: {
    fontSize: 17,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 8,
    marginTop: 10,
  },

  input: {
    width: "100%",
    borderWidth: 2,
    borderColor: "#000",
    borderRadius: 14,
    padding: 14,
    fontSize: 16,
    backgroundColor: "#f5f5f5",
    color: "#000",
  },

  botao: {
    width: "100%",
    backgroundColor: "#000",
    padding: 16,
    borderRadius: 14,
    alignItems: "center",
    marginTop: 30,
  },

  textoBotao: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
});