import React from 'react';
import { ScrollView, StyleSheet, View, Text, Image } from 'react-native';

const styles = StyleSheet.create({
  containerLogo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50
  },
  frame: {
    padding: 10,
    borderRadius: 10,
    backgroundColor: 'rgba(100, 100, 100, .1)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  containerInfos: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 30,
    paddingBottom: 5,
    marginBottom: 10,
    borderBottomColor: '#CCC',
    borderBottomWidth: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#FF00FF'
  },
  text: {
    fontSize: 16,
    color: '#333'
  }
})
 
const App = () => {
  const char = '-'

  return(
    <ScrollView>
     
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Dados Pessoais</Text>
        <Text style={styles.text}>{char} Lais Leme</Text>
        <Text style={styles.text}>{char} 19 anos</Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Formação</Text>
        <Text style={styles.text}>{char} FIAP</Text>
      </View>
      <View style={styles.containerInfos}>
        <Text style={styles.title}>Experiência</Text>
        <Text style={styles.text}>{char} Desenvolvedor Front End</Text>
      </View>
    
    </ScrollView>
  )
}
 
export default App;