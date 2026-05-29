import { router } from 'expo-router';
import {
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/AppButton';
import { MusicCard } from '@/components/MusicCard';
import { colors } from '@/constants/colors';
import { useFavorites } from '@/context/FavoritesContext';
import { musicas } from '@/data/musicas';

export default function HomeScreen() {
  const { isFavorite, toggleFavorite } = useFavorites();

  return (
    <SafeAreaView style={styles.safeArea}>
      <FlatList
        data={musicas}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        ListHeaderComponent={
          <View style={styles.header}>
            <Text style={styles.logo}>
              🎵 Vibe-Marcão
            </Text>

            <Text style={styles.title}>
              Sua vibe começa aqui
            </Text>

            <Text style={styles.subtitle}>
              Descubra músicas incríveis para qualquer momento.
            </Text>

            <View style={styles.banner}>
              <Text style={styles.bannerSmall}>
                PLAYLIST EXCLUSIVA
              </Text>

              <Text style={styles.bannerTitle}>
                Marcão Hits
              </Text>

              <Text style={styles.bannerText}>
                Trap • Funk • Phonk • Noite
              </Text>
            </View>

            <AppButton
              title="Abrir Favoritos"
              variant="secondary"
              onPress={() => router.push('/favoritos')}
            />

            <Text style={styles.section}>
              Tocando Agora
            </Text>
          </View>
        }
        renderItem={({ item }) => (
          <MusicCard
            musica={item}
            favorite={isFavorite(item.id)}
            onFavoritePress={() =>
              toggleFavorite(item.id)
            }
            onPress={() =>
              router.push({
                pathname: '/player',
                params: { id: item.id },
              })
            }
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
    paddingBottom: 60,
  },

  header: {
    marginBottom: 20,
  },

  logo: {
    color: '#A855F7',
    fontSize: 34,
    fontWeight: '900',
    marginBottom: 20,

    textShadowColor: '#7C3AED',
    textShadowOffset: {
      width: 0,
      height: 0,
    },
    textShadowRadius: 18,
  },

  title: {
    color: '#FFFFFF',
    fontSize: 38,
    fontWeight: '900',
    lineHeight: 42,
  },

  subtitle: {
    color: '#9CA3AF',
    fontSize: 16,
    marginTop: 10,
    marginBottom: 28,
    lineHeight: 24,
  },

  banner: {
    backgroundColor: '#18181B',
    borderRadius: 28,
    padding: 24,
    marginBottom: 22,

    borderWidth: 1,
    borderColor: '#27272A',
  },

  bannerSmall: {
    color: '#A855F7',
    fontWeight: '800',
    marginBottom: 12,
    letterSpacing: 1,
  },

  bannerTitle: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '900',
  },

  bannerText: {
    color: '#A1A1AA',
    marginTop: 10,
    fontSize: 15,
  },

  section: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: '900',
    marginTop: 28,
    marginBottom: 14,
  },
});