import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function VILLANOS() {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>
        BIENVENIDO A LA SECCIÓN DE LOS <Text style={styles.villainText}>VILLANOS</Text> DE MARVEL
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Stack', { nombre: 'Thanos' })}>
        <Text style={styles.villainName}>Thanos</Text>
        <TouchableOpacity style={styles.viewButton} onPress={() => navigation.navigate('Stack', { nombre: 'Thanos' })}>
          <Text style={styles.viewButtonText}>Ver</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Stack', { nombre: 'Loki' })}>
        <Text style={styles.villainName}>Loki</Text>
        <TouchableOpacity style={styles.viewButton} onPress={() => navigation.navigate('Stack', { nombre: 'Loki' })}>
          <Text style={styles.viewButtonText}>Ver</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Stack', { nombre: 'Ultron' })}>
        <Text style={styles.villainName}>Ultron</Text>
        <TouchableOpacity style={styles.viewButton} onPress={() => navigation.navigate('Stack', { nombre: 'Ultron' })}>
          <Text style={styles.viewButtonText}>Ver</Text>
        </TouchableOpacity>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Stack', { nombre: 'Doctor Doom' })}>
        <Text style={styles.villainName}>Doctor Doom</Text>
        <TouchableOpacity
          style={styles.viewButton}
          onPress={() => navigation.navigate('Stack', { nombre: 'Doctor Doom' })}
        >
          <Text style={styles.viewButtonText}>Ver</Text>
        </TouchableOpacity>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffebee', // Fondo rosa claro para los villanos
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
  villainText: {
    color: '#c62828', // Color rojo para la palabra "VILLANOS"
    fontSize: 45, // Tamaño de fuente mayor para "VILLANOS"
  },
  button: {
    backgroundColor: '#d32f2f', // Fondo rojo para los botones
    borderRadius: 5,
    paddingVertical: 15,
    marginBottom: 15,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%', // Ocupa todo el ancho disponible
    paddingHorizontal: 20, // Añade separación del contenedor
  },
  villainName: {
    color: '#ffffff',
    fontSize: 18,
    flex: 1,
    marginRight: 10, // Separación entre el texto y el botón "Ver"
  },
  viewButton: {
    backgroundColor: '#e57373', // Color del botón "Ver"
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 15,
  },
  viewButtonText: {
    color: '#ffffff',
    fontSize: 16,
  },
});
