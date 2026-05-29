import { Image, ScrollView, StyleSheet, Text, View } from "react-native";
import Foto from "../assets/images/foto.jpg";

export default function Index() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>My First App XD</Text>

      <Image source={Foto} style={styles.image} />

      <View style={styles.card}>
        <Text style={styles.subtitle}>Sobre o App</Text>
        <Text style={styles.text}>
          Aplicativo desenvolvido por pessoas totalmente inexperientes e que não
          tem a menor ideia do que estão fazendo.
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>O que aprenderemos</Text>
        <Text style={styles.listItem}>• Layout Responsivo</Text>
        <Text style={styles.listItem}>• Push Notifications</Text>
        <Text style={styles.listItem}>• Acesso a APIs</Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.subtitle}>Ferramentas</Text>
        <Text style={styles.listItem}>• Node.js</Text>
        <Text style={styles.listItem}>• VS Code</Text>
        <Text style={styles.listItem}>• Foco, força e fé 💪</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f2f2f2",
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: 200,
    borderRadius: 10,
    marginBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3, // Android
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  text: {
    fontSize: 14,
    lineHeight: 20,
    color: "#333",
  },
  listItem: {
    fontSize: 14,
    marginBottom: 5,
  },
});
