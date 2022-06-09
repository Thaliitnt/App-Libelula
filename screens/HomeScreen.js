import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import {Button, TextInput, Appbar, Searchbar  } from 'react-native-paper';


import Shoes from '../src/components/Shoes'

function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      
      <ScrollView>
        <View style={{flexDirection: 'row', justifyContent:'space-around'}}>
          <Shoes/>

          <Shoes/>

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