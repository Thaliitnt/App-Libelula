import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';


export default function Shoes(props) {
  return (
    <TouchableOpacity style={Style.container} onPress={props.onClick}>

      <Image
        source={props.img}
        style={Style.shoesImg}
      />
      <Text style={Style.shoesText}>
        {props.cost2}
      </Text>
      <Text style={Style.shoesTxtPreco}>
        {props.cost}
      </Text>
    </TouchableOpacity>
  );
}

const Style = StyleSheet.create({
  container: {
    paddingVertical: '10%',
    alingItems: 'center',
    justifyContent: 'center'
  },
  shoesImg: {
    width: 196,
    height: 196
  },
  shoesText: {
    fontSize: 17,
  },
  shoesTxtPreco: {
    fontSize: 19,
  }
})