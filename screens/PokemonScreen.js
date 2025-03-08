import React, { useState } from 'react';
import { View, TextInput, Button, Image, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function PokemonScreen() {
  const [pokemonName, setPokemonName] = useState('');
  const [pokemonData, setPokemonData] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPokemon = async () => {
    if (!pokemonName) return; // No hacer nada si no hay nombre
    setLoading(true);
    try {
      const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName.toLowerCase()}`);
      setPokemonData(response.data);
    } catch (error) {
      console.error('Error al obtener el Pokémon:', error);
      setPokemonData(null);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa el nombre de un Pokémon"
        value={pokemonName}
        onChangeText={setPokemonName}
      />
      <Button
        title={loading ? 'Cargando...' : 'Buscar Pokémon'}
        onPress={fetchPokemon}
        disabled={loading}
      />
      {pokemonData && (
        <View style={styles.result}>
          <Image
            source={{ uri: pokemonData.sprites.front_default }}
            style={styles.image}
          />
          <Text style={styles.text}>Nombre: {pokemonData.name}</Text>
          <Text style={styles.text}>Experiencia base: {pokemonData.base_experience}</Text>
          <Text style={styles.text}>
            Habilidades: {pokemonData.abilities.map(a => a.ability.name).join(', ')}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 20,
    borderRadius: 5,
  },
  result: {
    marginTop: 20,
    alignItems: 'center',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});