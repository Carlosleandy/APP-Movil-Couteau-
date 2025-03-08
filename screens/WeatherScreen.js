import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import axios from 'axios';

export default function WeatherScreen() {
    const [weather, setWeather] = useState(null);
    const [loading, setLoading] = useState(true);
    const API_KEY = '289b7e87495a7e44d61130cc5a5231a0'; // Tu API key
    const CITY = 'Santo Domingo'; // Cambia esto por la ciudad que prefieras

    useEffect(() => {
    const fetchWeather = async () => {
        try {
            const response = await axios.get(
            `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`
        );
            setWeather(response.data);
        } catch (error) {
        console.error('Error al obtener el clima:', error);
        }
        setLoading(false);
    };
    fetchWeather();
    }, []);

    if (loading) {
    return (
        <View style={styles.container}>
            <Text>Cargando...</Text>
        </View>
    );
    }

    return (
    <View style={styles.container}>
        {weather ? (
            <>
            <Text style={styles.text}>Ciudad: {weather.name}</Text>
            <Text style={styles.text}>Temperatura: {weather.main.temp}°C</Text>
            <Text style={styles.text}>Clima: {weather.weather[0].description}</Text>
            </>
        ) : (
        <Text>No se pudo cargar el clima</Text>
    )}
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
    text: {
    fontSize: 18,
    marginBottom: 10,
    },
});