import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
import Vaga from './src/Vaga'
 
class App extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {
          id: 1, 
          title: 'Desenvolvedor front-end junior', 
          salary: 'R$ 3.500', 
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis nisi sed ex feugiat cursus. Nullam interdum tincidunt purus vitae facilisis', 
          contact: '+55 (11) 9059-5852'
        },
        {
          id: 2, 
          title: 'Desenvolvedor back-end pleno  ', 
          salary: 'R$ 5.100', 
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis nisi sed ex feugiat cursus. Nullam interdum tincidunt purus vitae facilisis', 
          contact: '+55 (11) 9234-7828'},
        {
          id: 3, 
          title: 'Engenheiro de software', 
          salary: 'R$ 11.000', 
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis nisi sed ex feugiat cursus. Nullam interdum tincidunt purus vitae facilisis', 
          contact: '+55 (11) 9722-8690'},
        {
          id: 4, 
          title: 'Programador react', 
          salary: 'R$ 8.000', 
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis nisi sed ex feugiat cursus. Nullam interdum tincidunt purus vitae facilisis', 
          contact: '+55 (11) 9849-7841'},
        {
          id: 5, 
          title: 'Desenvolvedor mobile', 
          salary: 'R$ 8.500', 
          jobDescription: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce convallis nisi sed ex feugiat cursus. Nullam interdum tincidunt purus vitae facilisis', 
          contact: '+55 (11) 9148-1574'},
      ]
    }
  }
 
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.title}> Vagas de TI </Text>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Vaga data={item}/>}
        />
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 40
  },
  title: {
    color: '#FF0000',
    fontSize: 23,
    textAlign: 'center',
    marginBottom: 10
  }
})
 
export default App;