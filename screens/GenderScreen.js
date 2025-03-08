import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function GenderScreen() {
  const [name, setName] = useState('');
  const [gender, setGender] = useState(null);
  const [loading, setLoading] = useState(false);

  const predictGender = async () => {
    if (!name) return;
    setLoading(true);
    try {
      const response = await axios.get(`https://api.genderize.io/?name=${name}`);
      setGender(response.data.gender);
    } catch (error) {
      console.error('Error al predecir género:', error);
      setGender(null);
    }
    setLoading(false);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Ingresa un nombre"
        value={name}
        onChangeText={setName}
      />
      <Button
        title={loading ? 'Cargando...' : 'Predecir Género'}
        onPress={predictGender}
        disabled={loading}
      />
      {gender && (
        <View style={[styles.result, { backgroundColor: gender === 'male' ? 'blue' : 'pink' }]}>
          <Text style={styles.text}>{gender === 'male' ? 'Masculino' : 'Femenino'}</Text>
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
    justifyContent: 'center',
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
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: '#fff',
  },
});