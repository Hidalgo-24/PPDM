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

import Logo from "../../assets/images/nike.jpg";

export default function Nike() {
  const [nome, setNome] = useState("");
  const [idade, setIdade] = useState("");
  const [gostaMarca, setGostaMarca] = useState("");
  const [produto, setProduto] = useState("");

  function Cadastrar() {
    console.log({
      nome,
      idade,
      gostaMarca,
      produto,
    });
  }

  return (
    <ScrollView contentContainerStyle={estilos.container}>

      {/* detalhe topo */}
      <View style={estilos.topo} />

      {/* detalhe baixo */}
      <View style={estilos.baixo} />

      {/* card */}
      <View style={estilos.card}>

        {/* logo */}
        <Image
          source={Logo}
          style={estilos.logo}
          resizeMode="contain"
        />

        {/* titulo */}
        <Text style={estilos.titulo}>
          Pesquisa Nike
        </Text>

        {/* nome */}
        <View style={estilos.campo}>
          <Text style={estilos.label}>Nome</Text>

          <TextInput
            style={estilos.input}
            placeholder="Seu nome"
            placeholderTextColor="#666"
            value={nome}
            onChangeText={setNome}
          />
        </View>

        {/* idade */}
        <View style={estilos.campo}>
          <Text style={estilos.label}>Idade</Text>

          <TextInput
            style={estilos.input}
            placeholder="18"
            placeholderTextColor="#666"
            keyboardType="numeric"
            value={idade}
            onChangeText={setIdade}
          />
        </View>

        {/* gosta da marca */}
        <View style={estilos.campo}>
          <Text style={estilos.label}>
            Você gosta da marca?
          </Text>

          <View style={estilos.opcoes}>

            <TouchableOpacity
              style={[
                estilos.opcao,
                gostaMarca === "Sim" && estilos.opcaoAtiva,
              ]}
              onPress={() => setGostaMarca("Sim")}
            >
              <Text
                style={[
                  estilos.textoOpcao,
                  gostaMarca === "Sim" &&
                    estilos.textoOpcaoAtivo,
                ]}
              >
                Sim
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                estilos.opcao,
                gostaMarca === "Não" && estilos.opcaoAtiva,
              ]}
              onPress={() => setGostaMarca("Não")}
            >
              <Text
                style={[
                  estilos.textoOpcao,
                  gostaMarca === "Não" &&
                    estilos.textoOpcaoAtivo,
                ]}
              >
                Não
              </Text>
            </TouchableOpacity>

          </View>
        </View>

        {/* produto favorito */}
        <View style={estilos.campo}>
          <Text style={estilos.label}>
            Produto favorito
          </Text>

          <TextInput
            style={estilos.input}
            placeholder="Ex: Air Jordan"
            placeholderTextColor="#666"
            value={produto}
            onChangeText={setProduto}
          />
        </View>

        {/* botão */}
        <TouchableOpacity
          style={estilos.botao}
          onPress={Cadastrar}
        >
          <Text style={estilos.textoBotao}>
            Cadastrar
          </Text>
        </TouchableOpacity>

      </View>
    </ScrollView>
  );
}

const estilos = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#f2f2f2",
    justifyContent: "center",
    alignItems: "center",
  },

  topo: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 170,
    height: 170,
    backgroundColor: "#8fd0ff",
    borderBottomRightRadius: 150,
  },

  baixo: {
    position: "absolute",
    bottom: 0,
    right: 0,
    width: 170,
    height: 170,
    backgroundColor: "#8fd0ff",
    borderTopLeftRadius: 150,
  },

  card: {
    width: "88%",
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 25,
    elevation: 10,
    alignItems: "center",
  },

  logo: {
    width: 120,
    height: 120,
    marginBottom: 10,
  },

  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#355c8a",
    marginBottom: 30,
  },

  campo: {
    width: "100%",
    marginBottom: 20,
  },

  label: {
    fontSize: 18,
    color: "#355c8a",
    fontWeight: "bold",
    marginBottom: 8,
  },

  input: {
    borderWidth: 3,
    borderColor: "#5ca8ff",
    borderRadius: 14,
    padding: 14,
    fontSize: 16,
    backgroundColor: "#fff",
    color: "#000",
  },

  opcoes: {
    flexDirection: "row",
    justifyContent: "space-between",
  },

  opcao: {
    width: "47%",
    padding: 14,
    borderRadius: 14,
    borderWidth: 2,
    borderColor: "#5ca8ff",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  opcaoAtiva: {
    backgroundColor: "#5ca8ff",
  },

  textoOpcao: {
    color: "#355c8a",
    fontWeight: "bold",
    fontSize: 16,
  },

  textoOpcaoAtivo: {
    color: "#fff",
  },

  botao: {
    width: "100%",
    padding: 16,
    borderRadius: 16,
    alignItems: "center",
    marginTop: 10,
    backgroundColor: "#1f4eb5",
  },

  textoBotao: {
    color: "#fff",
    fontSize: 24,
    fontWeight: "bold",
  },
});