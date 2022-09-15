import React, { Component } from 'react';
import { View, ScrollView, Text, Image } from 'react-native';

import { styles } from './styles'
 
class App extends Component{
  render(){
    const imageURL_01 = 'https://www.estudopratico.com.br/wp-content/uploads/2019/06/comidas-em-ingles.jpg'
    const imageURL_02 = 'https://images.squarespace-cdn.com/content/v1/5d72fd37e5a0a8662ab46e6f/1598994160752-YDGKRDKPVG25XJQH0I53/shutterstock_271102964.jpg?format=750w'
    const imageURL_03 = 'http://www.abraseunegocio.com.br/wp-content/uploads/2019/05/noticia_imagem_3545.jpg'
    const imageURL_04 = 'https://www.carlosmagno.com.br/fotos_do_sistema/capa/croppedImg_1564162417.jpeg'
    
    return(
      <View style={styles.container}>
        <Text style={styles.title}> Anúncio dos Produtos </Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={[styles.frame, styles.box1]}>
            <Image 
              source={{ uri: imageURL_01 }}
              style={{ width: 200, height: 200 }}
            />
            <Text style={styles.chip}> Produto 01 </Text>
          </View>
          <View style={[styles.frame, styles.box2]}>
            <Image 
              source={{ uri: imageURL_02 }}
              style={{ width: 200, height: 200 }}
            />
            <Text style={styles.chip}> Produto 02 </Text>
          </View>
          <View style={[styles.frame, styles.box3]}>
            <Image 
              source={{ uri: imageURL_03 }}
              style={{ width: 200, height: 200 }}
            />
            <Text style={styles.chip}> Produto 03 </Text>
          </View>
          <View style={[styles.frame, styles.box4]}>
            <Image 
              source={{ uri: imageURL_04 }}
              style={{ width: 200, height: 200 }}
            />
            <Text style={styles.chip}> Produto 04 </Text>
          </View>
        </ScrollView>
      </View>
    )
  }
}
 
export default App;