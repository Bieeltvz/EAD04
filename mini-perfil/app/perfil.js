import { StyleSheet, Text, View, Image } from 'react-native';
import { useLocalSearchParams } from 'expo-router';

export default function Perfil() {
  const params = useLocalSearchParams();
  const { nome, avatar } = params;

  return (
    <View style={styles.container}>
      {avatar && (
        <Image
          source={{ uri: avatar }}
          style={styles.avatar}
          accessibilityLabel="Imagem do avatar"
        />
      )}
      <Text style={styles.name}>{nome}</Text>
      <Text style={styles.message}>Este é o seu perfil ✨</Text>
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
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 4,
    borderColor: '#3498db',
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2c3e50',
  },
  message: {
    fontSize: 18,
    color: '#7f8c8d',
  },
});