import { router, useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/AppButton';
import { colors } from '@/constants/colors';
import { useFavorites } from '@/context/FavoritesContext';
import { musicas } from '@/data/musicas';

export default function PlayerScreen() {
  const params = useLocalSearchParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  const [playing, setPlaying] = useState(true);
  const { isFavorite, toggleFavorite } = useFavorites();

  const musica = useMemo(() => {
    return musicas.find((item) => item.id === id) ?? musicas[0];
  }, [id]);

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <AppButton title="Voltar" variant="ghost" onPress={() => router.back()} />

        <View style={styles.cover}>
          <Text style={styles.coverText}>{musica.capa}</Text>
        </View>

        <Text style={styles.title}>{musica.titulo}</Text>
        <Text style={styles.artist}>{musica.artista}</Text>
        <Text style={styles.album}>
          {musica.album} • {musica.duracao}
        </Text>

        <View style={styles.progressContainer}>
          <View style={styles.progressBar} />
        </View>

        <Text style={styles.status}>
          {playing ? 'Reproduzindo agora' : 'Música pausada'}
        </Text>

        <View style={styles.controls}>
          <Text style={styles.controlIcon}>⏮</Text>

          <Text
            style={styles.playIcon}
            onPress={() => setPlaying((current) => !current)}
          >
            {playing ? '⏸' : '▶'}
          </Text>

          <Text style={styles.controlIcon}>⏭</Text>
        </View>

        <AppButton
          title={
            isFavorite(musica.id)
              ? 'Remover dos favoritos ♥'
              : 'Adicionar aos favoritos ♡'
          }
          variant="secondary"
          onPress={() => toggleFavorite(musica.id)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
    padding: 24,
    alignItems: 'center',
    justifyContent: 'center',
    gap: 14,
  },
  cover: {
    width: 240,
    height: 240,
    borderRadius: 32,
    backgroundColor: colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 18,
  },
  coverText: {
    fontSize: 100,
  },
  title: {
    color: colors.text,
    fontSize: 30,
    fontWeight: '900',
    textAlign: 'center',
  },
  artist: {
    color: colors.secondary,
    fontSize: 18,
    fontWeight: '800',
  },
  album: {
    color: colors.muted,
  },
  progressContainer: {
    height: 8,
    width: '100%',
    backgroundColor: colors.surface,
    borderRadius: 999,
    marginTop: 18,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    width: '45%',
    backgroundColor: colors.secondary,
    borderRadius: 999,
  },
  status: {
    color: colors.success,
    fontWeight: '800',
  },
  controls: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 36,
    marginVertical: 18,
  },
  controlIcon: {
    color: colors.text,
    fontSize: 34,
  },
  playIcon: {
    color: colors.text,
    fontSize: 54,
  },
});