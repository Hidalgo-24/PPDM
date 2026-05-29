import { router } from 'expo-router';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/AppButton';
import { MusicCard } from '@/components/MusicCard';
import { colors } from '@/constants/colors';
import { useFavorites } from '@/context/FavoritesContext';
import { musicas } from '@/data/musicas';

export default function FavoritosScreen() {
  const { favoriteIds, isFavorite, toggleFavorite } = useFavorites();
  const favoritas = musicas.filter((musica) => favoriteIds.includes(musica.id));

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={favoritas}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <View style={styles.header}>
            <AppButton title="Voltar" variant="ghost" onPress={() => router.back()} />
            <Text style={styles.title}>Favoritos</Text>
            <Text style={styles.subtitle}>Suas músicas marcadas com coração aparecem aqui.</Text>
          </View>
        }
        ListEmptyComponent={
          <View style={styles.emptyBox}>
            <Text style={styles.emptyTitle}>Nenhuma favorita ainda</Text>
            <Text style={styles.emptyText}>Volte para a tela inicial e toque no coração de uma música.</Text>
          </View>
        }
        renderItem={({ item }) => (
          <MusicCard
            musica={item}
            favorite={isFavorite(item.id)}
            onFavoritePress={() => toggleFavorite(item.id)}
            onPress={() => router.push({ pathname: '/player', params: { id: item.id } })}
          />
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 20,
    paddingBottom: 36,
  },
  header: {
    alignItems: 'flex-start',
    marginBottom: 18,
    gap: 10,
  },
  title: {
    color: colors.text,
    fontSize: 36,
    fontWeight: '900',
  },
  subtitle: {
    color: colors.muted,
    fontSize: 16,
  },
  emptyBox: {
    backgroundColor: colors.surface,
    borderRadius: 18,
    padding: 20,
    alignItems: 'center',
  },
  emptyTitle: {
    color: colors.text,
    fontSize: 20,
    fontWeight: '900',
  },
  emptyText: {
    color: colors.muted,
    textAlign: 'center',
    marginTop: 8,
  },
});
