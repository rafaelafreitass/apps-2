import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image 
          source={{ uri: 'https://preview.redd.it/the-original-image-of-the-monkey-thinking-meme-v0-ea1hkdjnx9af1.jpeg?width=1080&crop=smart&auto=webp&s=5fb2b05369bfbffd94d6009a679a9a5fe5e4223f' }} 
          style={styles.image} 
        />
        <View style={styles.content}>
          <Text style={styles.title}>Título do cartão</Text>
          <Text style={styles.description}>
          Cartão
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    width: 300,
    overflow: 'hidden', // Garante que a imagem siga o arredondamento do cartão
    
    // Sombra para Android
    elevation: 8,
    
    // Sombra para iOS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  image: {
    width: '100%',
    height: 150,
  },
  content: {
    padding: 16,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    color: '#333',
  },
  description: {
    fontSize: 14,
    color: '#666',
  },
});