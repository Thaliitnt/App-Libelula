import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Button, Appbar } from 'react-native-paper';
import { MaterialIcons } from '@expo/vector-icons';

export default function Screen({ route }) {
    const produto = route.params.produto;
    return (
        <ScrollView contentContainerStyle={style.scroll}>
            <View>
                <View>
                    <Text style={[style.title, { fontSize: 22 }]}>{produto.nome}</Text>
                </View>

            </View>

            <Image source={require('../src/assets/pulseira.jpg')}
                style={style.image}
                resizeMode='cover'
            />
            <View style={style.titleView}>
                <Text style={[style.title, { fontSize: 26 }]}>
                    R$200,00
                </Text>
            </View>

            <Button style={style.button} mode="contained" onPress={() => console.log('Pressed')}>
                Aicionar ao carrinho
                <MaterialIcons name="shopping-cart" size={21} color="#803A2D" />
            </Button>
        </ScrollView >
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        backgroundColor: '#ffffff'
    },
    image: {
        width: '100%',
        height: 350
    },
    title: {
        color: '#DD9562',
    },
    titleView: {
        alignSelf: 'flex-start'
    },
    button: {
        width: '75%',
        textColor: '#803A2D',
    },
    scroll: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
});