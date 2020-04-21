import React, {Component} from 'react';
import { StyleSheet, Text, View, TextInput } from 'react-native';

import Header from './Header'
import BestFluel from './BestFluel';



export default class App extends Component{


  constructor(props) {
    super(props);//Sem o super não tem acesso ao state, ele que chama a herança do Component

    this.state = {gasolina:0, etanol:0}

  }

render(){   
  
  return (
    <View style={styles.container} >
        <Header />
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
    marginTop: 25,
    flexDirection: 'column',
    backgroundColor: "#fff",
    height: '100%'
  },
  input: {
    height: 60,
    textAlign: "center",
    fontSize:25,
    borderWidth: 1
  },
  entradas: {
    marginTop: 20,
    padding: 20,
   alignContent: 'center',
   justifyContent: 'center'
  },
  preco: {
    fontSize: 20,
  },
  buttonText: {
    alignSelf: "center",  
  }
});
