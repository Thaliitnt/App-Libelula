import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import {Button, TextInput, Appbar, Searchbar  } from 'react-native-paper';


import Shoes from '../src/components/Shoes'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          
            <Shoes img={require('../src/assets/anel.jpg')} cost='R$70,00'
                 cost2='Anel Coração'>
              
            </Shoes>

            <Shoes img={require('../src/assets/bracelete.jpg')} cost='R$200,00'
                 cost2='Relógio Feminino'> {/*cost 2 é o nome da propiedade text, que é o mome do produto */}
              
            </Shoes>

        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          
            <Shoes img={require('../src/assets/brinco-de-milhoes.jpg')} cost='R$800,00'
                 cost2='Brinco Prata'>
              
            </Shoes>

            <Shoes img={require('../src/assets/pulseira.jpg')} cost='R$100,00'
                 cost2='Pulseira Prata'> {/* cost é a propriedade valor do produto, cost 2 é o nome da propiedade text, que é o mome do produto */}
              
            </Shoes>
        </View>
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          
            <Shoes img={require('../src/assets/pulseira-coracao.jpg')} cost='R$150,00'
                 cost2='Pulseira Coração'>
              
            </Shoes>

            <Shoes img={require('../src/assets/colar-coração.png')} cost='R$250,00'
                 cost2='Colar Coração'>
              
            </Shoes>

        </View>

     </ScrollView>
    

    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flex: 2,
      width: '100%'
    }
})
export default HomeScreen;