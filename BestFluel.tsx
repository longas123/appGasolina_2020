import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Método auxiliar 
const calculate = (gasolina, etanol) => {
    if(gasolina > etanol){
        return 'gasolina';
    }else{
        return 'etanol';
    }
}

 const BestFluel = (props) => {
  return (
    <View style={styles.container} >
      <Text style={styles.text}>Best Fluel Component</Text>
      <Text style={styles.text} >O mais caro é :{calculate(props.gasolina, props.etanol)}</Text>
      <Text style={styles.text} >Preço gasolina: {props.gasolina}</Text>
      <Text style={styles.text} >Preço etanol: {props.etanol}</Text>
    </View>
  );
}

export default BestFluel;


// Estilos 
const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    backgroundColor: 'green',
    width: '100%',
    height: '50%'
  },
  text : {
      color: '#fff',
      textAlign: 'center',
      marginVertical: 10,
      fontSize: 25
  }
});
