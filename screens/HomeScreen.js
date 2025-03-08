import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Predecir Género"
        onPress={() => navigation.navigate('Gender')}
      />
      <Button
        title="Predecir Edad"
        onPress={() => navigation.navigate('Age')}
        style={styles.button}
      />
      <Button
        title="Ver Universidades"
        onPress={() => navigation.navigate('Universities')}
        style={styles.button}
      />
      <Button
        title="Buscar Pokémon"
        onPress={() => navigation.navigate('Pokemon')}
        style={styles.button}
      />
      <Button
        title="Ver Noticias"
        onPress={() => navigation.navigate('News')}
        style={styles.button}
      />
      <Button
        title="Acerca de"
        onPress={() => navigation.navigate('About')}
        style={styles.button}
      />
      {/* Opcional: Agrega una imagen de caja de herramientas como indica la tarea */}
      {/* <Image
        source={{ uri: 'https://example.com/toolbox.jpg' }} // Reemplaza con una URL real
        style={styles.image}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  button: {
    marginVertical: 10, // Espacio entre botones
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});