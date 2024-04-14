import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Cita from './components/Cita';

export default function App() {
  
  // definir el state del citas
  const [citas, setCitas] =  useState([
    { id: "1", paciente: "Juan", propietario: 'Juan', sintomas: "No estudia" },
    { id: "2", paciente: "Sede", propietario: 'Jesus', sintomas: "No presenta examenes" },
    { id: "3", paciente: "Sede", propietario: 'Paulo', sintomas: "No presenta explica bien" }
  ]);

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Administrador de citas</Text>
        <FlatList
          data={citas}
          renderItem={({item}) => <Cita item={item}/>}
          keyExtractor={cita => citas.id}
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EF573A'
  },
  titulo: {
    color: '#fff',
    marginTop: 60,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
