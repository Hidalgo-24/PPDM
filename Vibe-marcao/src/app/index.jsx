import { router } from 'expo-router';
import { useState } from 'react';
import {
  Alert,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/AppButton';
import { FormInput } from '@/components/FormInput';
import { colors } from '@/constants/colors';

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function entrar() {
    if (!email.includes('@')) {
      Alert.alert('Atenção', 'Digite um e-mail válido.');
      return;
    }

    if (senha.length < 4) {
      Alert.alert('Atenção', 'A senha deve ter pelo menos 4 caracteres.');
      return;
    }

    router.push('/home');
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <View style={styles.header}>
          <Text style={styles.logo}>♫</Text>
          <Text style={styles.title}>Vibe-Marcão  </Text>
          <Text style={styles.subtitle}>
            Sua música, seu ritmo.
          </Text>
        </View>

        <View style={styles.form}>
          <FormInput
            label="E-mail"
            placeholder="seuemail@exemplo.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />

          <FormInput
            label="Senha"
            placeholder="Digite sua senha"
            value={senha}
            onChangeText={setSenha}
            secureTextEntry
          />

          <AppButton
            title="Entrar"
            onPress={entrar}
          />

          <AppButton
            title="Criar cadastro"
            variant="ghost"
            onPress={() => router.push('/cadastro')}
          />
        </View>
      </KeyboardAvoidingView>
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
    justifyContent: 'center',
  },

  header: {
    alignItems: 'center',
    marginBottom: 36,
  },

  logo: {
    color: colors.secondary,
    fontSize: 72,
  },

  title: {
    color: colors.text,
    fontSize: 42,
    fontWeight: '900',
  },

  subtitle: {
    color: colors.muted,
    marginTop: 8,
    fontSize: 16,
  },

  form: {
    gap: 14,
  },
});