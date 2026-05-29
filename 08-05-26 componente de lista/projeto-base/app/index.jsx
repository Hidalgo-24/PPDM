  import {
    Animated,
    Dimensions,
    Image,
    SafeAreaView,
    StyleSheet,
    Text,
    View,
  } from "react-native";

  import { useRef } from "react";
  import tarefas from "./dados/tarefas";

  const { height } = Dimensions.get("window");

  const CARD_HEIGHT = 430;
  const CARD_SPACING = 26;

  function ItemTarefa({ item, index, scrollY, total }) {
    const inputRange = [
      (index - 1) * (CARD_HEIGHT + CARD_SPACING),
      index * (CARD_HEIGHT + CARD_SPACING),
      (index + 1) * (CARD_HEIGHT + CARD_SPACING),
    ];

    const scale = scrollY.interpolate({
      inputRange,
      outputRange: [0.88, 1, 0.88],
      extrapolate: "clamp",
    });

    const opacity = scrollY.interpolate({
      inputRange,
      outputRange: [0.45, 1, 0.45],
      extrapolate: "clamp",
    });

    const imageTranslateY = scrollY.interpolate({
      inputRange,
      outputRange: [-35, 0, 35],
      extrapolate: "clamp",
    });

    const textTranslateY = scrollY.interpolate({
      inputRange,
      outputRange: [30, 0, -30],
      extrapolate: "clamp",
    });

    const concluida = item.status === "Concluída";

    return (
      <Animated.View
        style={[
          estilos.card,
          {
            opacity,
            transform: [{ scale }],
          },
        ]}
      >
        <Animated.Image
          source={{ uri: item.photo }}
          style={[
            estilos.foto,
            {
              transform: [{ translateY: imageTranslateY }],
            },
          ]}
        />

        <View style={estilos.escurecedor} />

        <View style={estilos.topoCard}>
          <Text style={estilos.numero}>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </Text>

          <Text
            style={[
              estilos.status,
              concluida ? estilos.statusConcluida : estilos.statusPendente,
            ]}
          >
            {item.status}
          </Text>
        </View>

        <Animated.View
          style={[
            estilos.conteudo,
            {
              transform: [{ translateY: textTranslateY }],
            },
          ]}
        >
          <Text style={estilos.label}>SENAI TASK</Text>
          <Text style={estilos.titulo}>{item.title}</Text>
          <Text style={estilos.desc}>{item.description}</Text>
        </Animated.View>
      </Animated.View>
    );
  }

  export default function Index() {
    const scrollY = useRef(new Animated.Value(0)).current;

    return (
      <SafeAreaView style={estilos.tela}>
        <View style={estilos.header}>
          <Text style={estilos.logo}>SENAI TASKS</Text>
          <Text style={estilos.subtitulo}>Study management system</Text>
        </View>

        <Animated.FlatList
          data={tarefas}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item, index }) => (
            <ItemTarefa
              item={item}
              index={index}
              scrollY={scrollY}
              total={tarefas.length}
            />
          )}
          contentContainerStyle={estilos.lista}
          showsVerticalScrollIndicator={false}
          snapToInterval={CARD_HEIGHT + CARD_SPACING}
          decelerationRate="fast"
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: scrollY } } }],
            { useNativeDriver: true }
          )}
        />
      </SafeAreaView>
    );
  }

  const estilos = StyleSheet.create({
    tela: {
      flex: 1,
      backgroundColor: "#050505",
    },

    header: {
      paddingTop: 20,
      paddingHorizontal: 22,
      paddingBottom: 18,
      backgroundColor: "#050505",
    },

    logo: {
      color: "#ffffff",
      fontSize: 27,
      fontWeight: "900",
      letterSpacing: 1.8,
    },

    subtitulo: {
      color: "#8a8a8a",
      fontSize: 13,
      marginTop: 4,
      letterSpacing: 0.8,
      textTransform: "uppercase",
    },

    lista: {
      paddingHorizontal: 18,
      paddingBottom: height * 0.18,
    },

    card: {
      height: CARD_HEIGHT,
      marginBottom: CARD_SPACING,
      borderRadius: 30,
      overflow: "hidden",
      backgroundColor: "#111111",
      borderWidth: 1,
      borderColor: "rgba(255,255,255,0.08)",
    },

    foto: {
      position: "absolute",
      width: "100%",
      height: CARD_HEIGHT + 80,
      top: -40,
    },

    escurecedor: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: "rgba(0,0,0,0.42)",
    },

    topoCard: {
      position: "absolute",
      top: 22,
      left: 22,
      right: 22,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
    },

    numero: {
      color: "rgba(255,255,255,0.72)",
      fontSize: 12,
      fontWeight: "700",
      letterSpacing: 1.5,
    },

    status: {
      fontSize: 11,
      fontWeight: "800",
      paddingVertical: 7,
      paddingHorizontal: 12,
      borderRadius: 999,
      overflow: "hidden",
      letterSpacing: 0.8,
      textTransform: "uppercase",
    },

    statusPendente: {
      color: "#ffffff",
      backgroundColor: "rgba(255, 140, 0, 0.28)",
      borderWidth: 1,
      borderColor: "rgba(255, 140, 0, 0.55)",
    },

    statusConcluida: {
      color: "#ffffff",
      backgroundColor: "rgba(0, 210, 130, 0.25)",
      borderWidth: 1,
      borderColor: "rgba(0, 210, 130, 0.55)",
    },

    conteudo: {
      position: "absolute",
      left: 24,
      right: 24,
      bottom: 28,
    },

    label: {
      color: "#f97316",
      fontSize: 12,
      fontWeight: "900",
      letterSpacing: 2,
      marginBottom: 10,
    },

    titulo: {
      color: "#ffffff",
      fontSize: 34,
      fontWeight: "900",
      lineHeight: 38,
      letterSpacing: -1,
    },

    desc: {
      color: "rgba(255,255,255,0.78)",
      fontSize: 15,
      lineHeight: 22,
      marginTop: 14,
      maxWidth: "90%",
    },
  });
