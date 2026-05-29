import { StyleSheet, Text, View } from "react-native";

export default function Header({ titulo }) {
  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>{titulo}</Text>
      <Text style={estilos.subtitulo}>Organize seus estudos e tarefas</Text>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    backgroundColor: "#1300de",
    paddingTop: 36,
    paddingBottom: 28,
    paddingHorizontal: 16,
    alignItems: "center",
    borderBottomLeftRadius: 26,
    borderBottomRightRadius: 26,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.18,
    shadowRadius: 8,
    elevation: 6,
  },

  titulo: {
    fontSize: 28,
    fontWeight: "800",
    color: "#ffffff",
  },

  subtitulo: {
    fontSize: 14,
    color: "#facc15",
    marginTop: 6,
    fontWeight: "500",
  },
});