import React, { useState } from 'react';
import { View, TextInput, Button, FlatList, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function UniversitiesScreen() {
    const [country, setCountry] = useState('');
    const [universities, setUniversities] = useState([]);
    const [loading, setLoading] = useState(false);

    const fetchUniversities = async () => {
    if (!country) return; // No hacer nada si no hay país
    setLoading(true);
    try {
        const response = await axios.get(`http://universities.hipolabs.com/search?country=${country}`);
        setUniversities(response.data);
    } catch (error) {
        console.error('Error al obtener universidades:', error);
        setUniversities([]);
    }
    setLoading(false);
};

return (
    <View style={styles.container}>
    <TextInput
        style={styles.input}
        placeholder="Ingresa un país en inglés"
        value={country}
        onChangeText={setCountry}
    />
    <Button
        title={loading ? 'Cargando...' : 'Buscar Universidades'}
        onPress={fetchUniversities}
        disabled={loading}
    />
    <FlatList
        data={universities}
        keyExtractor={(item) => item.name}
        renderItem={({ item }) => (
            <View style={styles.university}>
                <Text style={styles.name}>{item.name}</Text>
                <Text>Dominio: {item.domains[0]}</Text>
                <Text>Página web: {item.web_pages[0]}</Text>
            </View>
        )}
        ListEmptyComponent={<Text style={styles.empty}>No se encontraron universidades</Text>}
    />
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
university: {
    marginBottom: 15,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
},
name: {
    fontSize: 16,
    fontWeight: 'bold',
},
empty: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: '#888',
},
});