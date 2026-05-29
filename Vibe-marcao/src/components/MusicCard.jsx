import { Pressable, StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/colors';
import { musicas } from '@/data/musicas';

export function MusicCard({
  musica,
  favorite,
  onPress,
  onFavoritePress,
}) {
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        pressed && styles.pressed,
      ]}
    >
      <View style={styles.cover}>
        <Text style={styles.coverText}>{musica.capa}</Text>
      </View>

      <View style={styles.info}>
        <Text style={styles.title}>{musica.titulo}</Text>
        <Text style={styles.artist}>
          {musica.artista} • {musica.duracao}
        </Text>
      </View>

      <Pressable onPress={onFavoritePress} hitSlop={10}>
        <Text style={styles.favorite}>
          {favorite ? '♥' : '♡'}
        </Text>
      </Pressable>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 12,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginBottom: 10,
  },
  pressed: {
    opacity: 0.8,
  },
  cover: {
    width: 54,
    height: 54,
    borderRadius: 14,
    backgroundColor: colors.surfaceLight,
    alignItems: 'center',
    justifyContent: 'center',
  },
  coverText: {
    fontSize: 28,
  },
  info: {
    flex: 1,
  },
  title: {
    color: colors.text,
    fontWeight: '800',
    fontSize: 16,
  },
  artist: {
    color: colors.muted,
    marginTop: 4,
  },
  favorite: {
    color: colors.danger,
    fontSize: 28,
    fontWeight: '900',
  },
});