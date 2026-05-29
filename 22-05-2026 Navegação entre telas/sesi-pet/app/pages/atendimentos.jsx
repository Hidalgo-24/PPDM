import { View, Text, StyleSheet, FlatList } from "react-native";
import { atendimentos } from '../dados/profissionais';

export default function Atendimentos() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Atendimentos</Text>

      <FlatList
        data={atendimentos}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.lista}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.pet}>{item.pet}</Text>
            <Text style={styles.servico}>{item.servico}</Text>
            <Text style={styles.horario}>{item.horario}</Text>
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
  pet: {
    fontSize: 19,
    fontWeight: "bold",
    color: "#333333",
    marginBottom: 6,
  },
  servico: {
    fontSize: 15,
    color: "#666666",
    marginBottom: 8,
  },
  horario: {
    fontSize: 14,
    color: "#FF914D",
    fontWeight: "bold",
  },
});