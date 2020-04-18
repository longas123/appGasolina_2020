import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

import BestFluel from './BestFluel';

export default function App() {
  return (
    <View style={styles.container} >
        <View style={styles.entradas}>
          <Text style={styles.preco}>Preço Gasolina:</Text>
          <TextInput placeholder="Gasolina" keyboardType="numeric" style={styles.input}/>
          <Text style={styles.preco}>Preço Etanol:</Text>
          <TextInput placeholder="Etanol" keyboardType="numeric" style={styles.input}/>
        </View> 
        <View>
          <TouchableOpacity style={styles.button} onPress={()=>{}}><Text>Calcular</Text></TouchableOpacity>
        </View>  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    height: 80,
    textAlign: "center",
    fontSize:30,
    marginTop: 5,
    borderWidth: 1,
  },
  button: {
    backgroundColor: "#FF7F00",
    padding: 10,
    borderWidth: 1,
    marginTop: 10,

  },
  entradas: {
   // flexDirection: 'row' ,
  },
  preco: {
    fontSize: 25,
  },
  buttonText: {
    alignSelf: "center",
    
  }
});
