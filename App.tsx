import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput,  } from 'react-native';

import BestFluel from './BestFluel';


type Props = {};
export default class App extends Component<Props>{
  
constructor(props){
  super(props)
  this.state = {gasolina:0, etanol:0, resultado: null}
  // this.calcular =  this.calcular.bind(this)  <<< isso se resolve com arrow functions
}

 render(){
  return (
    <View style={styles.container} >
        <View style={styles.entradas}>
          <Text style={styles.preco}>Preço Gasolina:</Text>
          <TextInput placeholder="Gasolina" keyboardType="numeric" style={styles.input} onChangeText={(gasolina)=>this.setState({'gasolina':gasolina})} />
          <Text style={styles.preco}>Preço Etanol:</Text>
          <TextInput placeholder="Etanol" keyboardType="numeric" style={styles.input}  onChangeText={(etanol)=>this.setState({'etanol':etanol})}/>
        </View> 
        <View>
          <BestFluel gasolina={this.state.gasolina} etanol={this.state.etanol} />
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
