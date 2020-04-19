import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

// Método auxiliar 
const calculate = (gasolina, etanol) => {
    if((etanol / gasolina) < 0.7){
        return 'etanol';
    }else{
        return 'gasolina';
    }
}

 const BestFluel = (props) => {
   if(props.etanol > 0 && props.gasolina > 0){
    return (
      <View style={styles.container} >
        <Text style={styles.text}>Vale mais a pena:</Text>
        <Text style={styles.text} >{calculate(props.gasolina, props.etanol)}</Text>
      </View>
    );
   }else{
     return null;
   }
  
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
