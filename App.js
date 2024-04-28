import React, {useState} from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Cita from './components/Cita';
import Formulario from './components/Formulario';

export default function App() {
  
  // definir el state del citas
  const [citas, setCitas] =  useState([
    { id: "1", paciente: "Juan", propietario: 'Juan', sintomas: "No estudia" },
    { id: "2", paciente: "Sede", propietario: 'Jesus', sintomas: "No presenta examenes" },
    { id: "3", paciente: "Sede", propietario: 'Paulo', sintomas: "No presenta explica bien" }
  ]);

  //Elimna citas del state
  const eliminarCita = id => {
    setCitas((citasActuales)=> {
      return citasActuales.filter(cita => cita.id !== id)
    })
}

  return (
    <View style={styles.container}>
        <Text style={styles.titulo}>Administrador de citas</Text>
        <Formulario/>
        <Text style={styles.titulo}> { citas.length > 0 ? 'Administra tus citas' : 'No hay citas, agrega una'} </Text>
        <FlatList
          data={citas}
          renderItem={({item}) => <Cita item={item} eliminarCitas={eliminarCita}/>}
          keyExtractor={citas => citas.id}
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
    marginBottom: 20,
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center'
  }
});
