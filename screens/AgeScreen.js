import React, { useState } from 'react';
import { View, TextInput, Button, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function AgeScreen() {
    const [name, setName] = useState('');
    const [age, setAge] = useState(null);
    const [loading, setLoading] = useState(false);

    const predictAge = async () => {
        if (!name) return; // No hacer nada si no hay nombre
        setLoading(true);
        try {
    const response = await axios.get(`https://api.agify.io/?name=${name}`);
        setAge(response.data.age);
    } catch (error) {
        console.error('Error al predecir la edad:', error);
        setAge(null);
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
        title={loading ? 'Cargando...' : 'Predecir Edad'}
        onPress={predictAge}
        disabled={loading}
    />
    {age && (
        <View style={styles.result}>
        <Text style={styles.text}>Edad predicha: {age} años</Text>
        </View>
    )}
    </View>
);
}

const styles = StyleSheet.create({
container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
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
    padding: 10,
    backgroundColor: '#e0e0e0',
    borderRadius: 5,
    alignItems: 'center',
},
text: {
    fontSize: 18,
    color: '#333',
},
});