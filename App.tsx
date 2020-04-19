import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,  } from 'react-native';

import BestFluel from './BestFluel';


type Props = {};
export default class App extends Component<Props>{
  
constructor(props){
  super(props)
  this.state = {gasolina:0, etanol:0, resultado:0}
  this.calcular =  this.calcular.bind(this) 
}

// Aqui vai ser feito o cálculo, não sei como usar essa função n arquivo BestFluel
calcular(){

}

 render(){
  return (
    <View style={styles.container} >
        <View style={styles.entradas}>
          <Text style={styles.preco}>Preço Gasolina:</Text>
          <TextInput placeholder="Gasolina" keyboardType="numeric" style={styles.input} onChangeText={(gasolina)=>this.setState(gasolina)} />
          <Text style={styles.preco}>Preço Etanol:</Text>
          <TextInput placeholder="Etanol" keyboardType="numeric" style={styles.input}  onChangeText={(etanol)=>this.setState(etanol)}/>
        </View> 
        <View>
          <TouchableOpacity style={styles.button} onPress={this.calcular}><Text>Calcular</Text></TouchableOpacity>
        </View>  
    </View>
  );
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFAFA",
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
    fontSize: 30,
    borderRadius: 60,
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
