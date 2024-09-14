import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function HEROES() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        BIENVENIDO A LA SECCIÓN DE LOS <Text style={styles.heroText}>HÉROES</Text> DE MARVEL
      </Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Stack', { nombre: 'Captain America' })}
      >
        <Text style={styles.heroName}>Capitán América</Text>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => navigation.navigate('Stack', { nombre: 'Captain America' })}
        >
          <Text style={styles.viewButtonText}>Ver</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Stack', { nombre: 'Iron Man' })}>
        <Text style={styles.heroName}>Iron Man</Text>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => navigation.navigate('Stack', { nombre: 'Iron Man' })}
        >
          <Text style={styles.viewButtonText}>Ver</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Stack', { nombre: 'Thor' })}>
        <Text style={styles.heroName}>Thor</Text>
        <TouchableOpacity style={styles.viewButton} onPress={() => navigation.navigate('Stack', { nombre: 'Thor' })}>
          <Text style={styles.viewButtonText}>Ver</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Stack', { nombre: 'Hulk' })}>
        <Text style={styles.heroName}>Hulk</Text>
        <TouchableOpacity style={styles.viewButton} onPress={() => navigation.navigate('Stack', { nombre: 'Hulk' })}>
          <Text style={styles.viewButtonText}>Ver</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e3f2fd', // Fondo azul claro para los héroes
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  welcomeText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
  },
  heroText: {
    color: '#1e88e5', // Color azul para la palabra "HÉROES"
    fontSize: 45, // Tamaño de fuente mayor para "HÉROES"
  },
  button: {
    backgroundColor: '#2196f3', // Fondo azul para los botones
    borderRadius: 5,
    paddingVertical: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%', // Ocupa todo el ancho disponible
    paddingHorizontal: 20, // Añade separación del contenedor
  },
  heroName: {
    color: '#ffffff',
    fontSize: 18,
    flex: 1,
    marginRight: 10, // Separación entre el texto y el botón "Ver"
  },
  viewButton: {
    backgroundColor: '#64b5f6', // Color del botón "Ver"
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  viewButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
