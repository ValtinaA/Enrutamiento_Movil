import { useRoute } from '@react-navigation/native';
import CryptoJS from 'crypto-js';
import React, { useEffect, useState } from 'react';
import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Home() {
  const [character, setCharacter] = useState(null);
  const route = useRoute();
  const { nombre } = route.params;

  useEffect(() => {
    const publicKey = '6f258373e9a66703f18636110b8ba2b6';
    const privateKey = '8ec3164ea5aaf9c5dc11512d2b14743b1889753d';
    const ts = new Date().getTime().toString();
    const hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

    const url = `https://gateway.marvel.com:443/v1/public/characters?name=${nombre}&apikey=${publicKey}&ts=${ts}&hash=${hash}`;

    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        if (json.data.results.length > 0) {
          setCharacter(json.data.results[0]);
        } else {
          console.log('No se encontró el personaje.');
        }
      })
      .catch((error) => console.error('Error:', error));
  }, [nombre]);

  const renderItem = ({ item }) => (
    <View style={styles.itemContainer}>
      <Text style={styles.itemText}>{item.name}</Text>
    </View>
  );

  const seriesData = character?.series.items.map((item) => ({ name: item.name })) || [];
  const comicsData = character?.comics.items.map((item) => ({ name: item.name })) || [];

  return (
    <View style={styles.background}>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: `${character?.thumbnail.path}.${character?.thumbnail.extension}` }}
            style={styles.image}
          />
        </View>
        <Text style={styles.nameText}>{character?.name}</Text>
        <Text style={styles.descriptionText}>{character?.description || 'Descripción no disponible'}</Text>

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Series</Text>
          <View style={styles.divider} />
        </View>
        <FlatList data={seriesData} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />

        <View style={styles.sectionContainer}>
          <Text style={styles.sectionTitle}>Cómics</Text>
          <View style={styles.divider} />
        </View>
        <FlatList data={comicsData} renderItem={renderItem} keyExtractor={(item, index) => index.toString()} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    backgroundColor: '#ffcccc', // Fondo rojo claro
  },
  container: {
    padding: 20,
    alignItems: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    marginVertical: 10,
    backgroundColor: '#f0f0f0', // Fondo gris claro para la imagen
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: 200,
    height: 200,
  },
  nameText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000000', // Color negro para el texto del nombre
  },
  descriptionText: {
    fontSize: 16,
    marginVertical: 10,
    textAlign: 'center',
    color: '#000000', // Color negro para el texto de la descripción
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000', // Color negro para los títulos de sección
  },
  sectionContainer: {
    width: '100%',
    marginVertical: 10,
    backgroundColor: '#e0e0e0', // Fondo gris claro para las secciones
    padding: 10,
    borderRadius: 5,
  },
  divider: {
    height: 2,
    backgroundColor: '#cccccc', // Color gris claro para la línea divisoria
    marginVertical: 5,
  },
  itemContainer: {
    marginVertical: 5,
  },
  itemText: {
    fontSize: 16,
    color: '#000000', // Color negro para los ítems
  },
});
