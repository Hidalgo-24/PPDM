import { View, Text, StyleSheet, FlatList } from "react-native";
import { profissionais } from '../dados/profissionais';

export default function Profissionais() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Profissionais</Text>

      <FlatList
        data={profissionais}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.especialidade}>{item.especialidade}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF7F0",
    padding: 22,
  },
  titulo: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 18,
  },
  lista: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#FFFFFF",
    padding: 18,
    borderRadius: 18,
    marginBottom: 14,
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.08,
    shadowRadius: 8,
    shadowOffset: {
      width: 0,
      height: 4,
    },
  },
  nome: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 6,
  },
  especialidade: {
    fontSize: 15,
    color: "#666666",
  },
});