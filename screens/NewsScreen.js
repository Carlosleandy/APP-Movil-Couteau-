import React, { useState, useEffect } from 'react';
import { View, Image, Text, Linking, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';

export default function NewsScreen() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get('https://kinsta.com/wp-json/wp/v2/posts?per_page=3');
        setNews(response.data);
      } catch (error) {
        console.error('Error al obtener noticias:', error);
        setNews([]);
      }
      setLoading(false);
    };
    fetchNews();
  }, []);

  const handlePress = (url) => {
    Linking.openURL(url);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <Text>Cargando noticias...</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {/* Logo de ejemplo (reemplaza con el logo de la página WordPress que uses) */}
      <Image
        source={{ uri: 'https://kinsta.com/wp-content/uploads/2021/04/kinsta-logo.png' }} // URL del logo de Kinsta como ejemplo
        style={styles.logo}
        resizeMode="contain"
      />
      <Text style={styles.title}>Últimas Noticias</Text>
      {news.length > 0 ? (
        news.map((post) => (
          <View key={post.id} style={styles.newsItem}>
            <Text style={styles.postTitle}>{post.title.rendered}</Text>
            <Text style={styles.excerpt}>
              {post.excerpt.rendered.replace(/<[^>]+>/g, '').substring(0, 100)}...
            </Text>
            <Text
              style={styles.link}
              onPress={() => handlePress(post.link)}
            >
              Leer más
            </Text>
          </View>
        ))
      ) : (
        <Text style={styles.empty}>No se encontraron noticias</Text>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
  newsItem: {
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f9f9f9',
    borderRadius: 5,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  excerpt: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    fontSize: 14,
  },
  empty: {
    textAlign: 'center',
    fontSize: 16,
    color: '#888',
  },
});