import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';





// Método auxiliar 
const calculate = (gasolina, etanol) => {
  if((etanol / gasolina) < 0.7){
    return 'etanol';
  }else{
    return 'gasolina';
}
}
//O resultado deveria aparecer ali no this.state.resultado
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
    alignSelf: "center",
    backgroundColor: "#FFFAFA",
    padding: 15,
  },
  text : {
      color: "lightgray",
      textAlign: 'center',
      fontSize: 25
  },
});
