import { router } from 'expo-router';
import { useState } from 'react';
import { Alert, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { AppButton } from '@/components/AppButton';
import { FormInput } from '@/components/FormInput';
import { colors } from '@/constants/colors';

export default function CadastroScreen() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmacao, setConfirmacao] = useState('');

  function cadastrar() {
    if (nome.trim().length < 3) {
      Alert.alert('Atenção', 'Digite seu nome com pelo menos 3 letras.');
      return;
    }

    if (!email.includes('@')) {
      Alert.alert('Atenção', 'Digite um e-mail válido.');
      return;
    }

    if (senha.length < 4) {
      Alert.alert('Atenção', 'A senha deve ter pelo menos 4 caracteres.');
      return;
    }

    if (senha !== confirmacao) {
      Alert.alert('Atenção', 'As senhas não são iguais.');
      return;
    }

    Alert.alert('Cadastro criado', 'Agora faça login para entrar no BeatFlow.');
    router.back();
  }

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={styles.flex}>
        <ScrollView contentContainerStyle={styles.container}>
          <View style={styles.header}>
            <Text style={styles.title}>Criar conta</Text>
            <Text style={styles.subtitle}>Preencha os dados para acessar suas músicas.</Text>
          </View>

          <View style={styles.form}>
            <FormInput label="Nome" placeholder="Seu nome" value={nome} onChangeText={setNome} />
            <FormInput label="E-mail" placeholder="seuemail@exemplo.com" value={email} onChangeText={setEmail} keyboardType="email-address" />
            <FormInput label="Senha" placeholder="Mínimo 4 caracteres" value={senha} onChangeText={setSenha} secureTextEntry />
            <FormInput label="Confirmar senha" placeholder="Repita a senha" value={confirmacao} onChangeText={setConfirmacao} secureTextEntry />
            <AppButton title="Cadastrar" onPress={cadastrar} />
            <AppButton title="Voltar para login" variant="ghost" onPress={() => router.back()} />
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  flex: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    flexGrow: 1,
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 28,
  },
  title: {
    color: colors.text,
    fontSize: 34,
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
