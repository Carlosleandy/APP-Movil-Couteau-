import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/foto.png')} // Ruta relativa a la carpeta assets
        style={styles.image}
      />
      <Text style={styles.text}>Nombre: Carlos Leandy Moreno Reyes</Text>
      <Text style={styles.text}>Correo: carlosleandy2000@gmail.com</Text>
      <Text style={styles.text}>Teléfono: 809-966-1808</Text>
      <Text style={styles.text}>Disponible para trabajos: Sí</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 150,
    height: 150,
    borderRadius: 75, // Hace la imagen circular
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
  },
});