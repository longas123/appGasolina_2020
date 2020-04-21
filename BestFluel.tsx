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
    )
   }else{
     return(
    <View style={styles.container} >
      <Text style={styles.text}>Descubra com o que vale mais a pena você abastecer!</Text>
    </View>
     )
   }
}

export default BestFluel;


// Estilos 
const styles = StyleSheet.create({
  container: {
    width: '90%',
    alignSelf: "center",
    backgroundColor: "#FFFAFA",
    borderWidth: 1,
    padding: 15
  },
  text : {
      color: "#000",
      textAlign: 'center',
      fontSize: 20
  },
});
