import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Button, Text, TextInput, Appbar, Searchbar  } from 'react-native-paper';

const styles = StyleSheet.create({
  top: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
});

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
    <Appbar style={styles.top}>

    <Appbar.Action icon="menu" onPress={() => console.log('Pressed menu')} />
 
   <Appbar.Action
     icon=""
     onPress={() => console.log('Pressed archive')}
    />
    
    <Appbar.Action
     icon=""
      onPress={() => console.log('Pressed delete')}
    />
     
  </Appbar>
      <Text>Home Screen</Text>
      
      <TextInput
      mode="outlined"
      label="Login"
      placeholder="Type something"
      right={<TextInput.Affix text="/100" />}
    />
     <TextInput
      label="Password"
      secureTextEntry
      right={<TextInput.Icon name="eye" />}
    />

    <Button mode='contained' icon='content-save'>
        Salvar
      </Button>
      
    
    </View>
  );
}


export default HomeScreen;