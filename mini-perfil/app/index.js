import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  const [nome, setNome] = useState('');
  const [avatar, setAvatar] = useState('');

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Crie seu Perfil</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Digite seu nome"
          value={nome}
          onChangeText={setNome}
        />
        <TextInput
          style={styles.input}
          placeholder="Cole a URL da sua imagem de avatar"
          value={avatar}
          onChangeText={setAvatar}
        />
      </View>
      <Link
        href={{
          pathname: '/perfil',
          params: { nome, avatar },
        }}
        asChild>
        <Button
          title="Ver Meu Perfil"
          disabled={!nome || !avatar}
          color="#3498db"
        />
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ecf0f1',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  form: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderWidth: 1,
    borderColor: '#bdc3c7',
    borderRadius: 8,
    marginBottom: 10,
    backgroundColor: '#ffffff',
  },
});