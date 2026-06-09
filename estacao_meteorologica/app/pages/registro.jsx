import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Image
} from 'react-native';

import Logo from '../../assets/images/estacao.jpg';

export default function Registro({ navigation }) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confSenha, setConfSenha] = useState('');

  return (
    <View style={styles.container}>
      <Image source={Logo} style={styles.logo} />

      <View style={styles.card}>
        <Text style={styles.titulo}>Cadastre-se</Text>

        <TextInput
          style={styles.input}
          placeholder="Insira seu e-mail"
          value={email}
          onChangeText={setEmail}
        />

        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          value={senha}
          onChangeText={setSenha}
          secureTextEntry
        />

        <TextInput
          style={styles.input}
          placeholder="Confirme sua senha"
          value={confSenha}
          onChangeText={setConfSenha}
          secureTextEntry
        />

        <TouchableOpacity
          style={styles.botao}
          onPress={() => navigation.replace('Login')}
        >
          <Text style={styles.textoBotao}>Cadastrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.link}>
            Já possui conta? Faça login
          </Text>
        </TouchableOpacity>

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCE5D3',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },

  logo: {
    width: 180,
    height: 180,
    borderRadius: 20,
    marginBottom: 20,
  },

  card: {
    width: '100%',
    backgroundColor: '#F4F1E8',
    padding: 25,
    borderRadius: 20,
    elevation: 5,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#4B5D3A',
    marginBottom: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: '#8A9A5B',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
    backgroundColor: '#F5F7F2',
  },

  botao: {
    backgroundColor: '#556B2F',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
  },

  textoBotao: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

  link: {
    textAlign: 'center',
    marginTop: 15,
    color: '#556B2F',
    fontWeight: 'bold',
  },
});