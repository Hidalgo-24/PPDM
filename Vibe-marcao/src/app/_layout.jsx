import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

import { FavoritesProvider } from '@/context/FavoritesContext';

export default function Layout() {
  return (
    <FavoritesProvider>
      <StatusBar style="light" />
      <Stack screenOptions={{ headerShown: false }} />
    </FavoritesProvider>
  );
}
