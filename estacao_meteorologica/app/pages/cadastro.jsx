import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Alert
} from 'react-native';

export default function Cadastro() {
  const [temp, setTemp] = useState('');
  const [hum, setHum] = useState('');
  const [kmVento, setKmVento] = useState('');

  const salvarMedicao = () => {
    if (!temp || !hum || !kmVento) {
      Alert.alert('Atenção', 'Preencha todos os campos!');
      return;
    }

    Alert.alert(
      'Sucesso',
      'Medição cadastrada com sucesso!'
    );

    setTemp('');
    setHum('');
    setKmVento('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cadastro de Medição</Text>

      <TextInput
        style={styles.input}
        placeholder="Temperatura °C"
        value={temp}
        onChangeText={setTemp}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Umidade %"
        value={hum}
        onChangeText={setHum}
        keyboardType="numeric"
      />

      <TextInput
        style={styles.input}
        placeholder="Km/h do vento"
        value={kmVento}
        onChangeText={setKmVento}
        keyboardType="numeric"
      />

      <TouchableOpacity
        style={styles.botao}
        onPress={salvarMedicao}
      >
        <Text style={styles.textoBotao}>Salvar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DCE5D3',
    justifyContent: 'center',
    padding: 20,
  },

  titulo: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4B5D3A',
    textAlign: 'center',
    marginBottom: 30,
  },

  input: {
    backgroundColor: '#F5F7F2',
    borderWidth: 1,
    borderColor: '#8A9A5B',
    borderRadius: 10,
    padding: 12,
    marginBottom: 15,
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
});