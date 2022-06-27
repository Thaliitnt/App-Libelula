import React from 'react';
import { View, Text, ScrollView, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
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

            <Image source={{ uri: produto.foto }}
                style={style.image}
                resizeMode='cover'
            />
            <View style={style.titleView}>
                <Text style={[style.title, { fontSize: 26 }]}>
                    {produto.preco}
                </Text>
            </View>

            <Button style={style.button} mode="contained"
                onPress={() => console.log('Pressed')}

            >
                Aicionar ao carrinho
                <MaterialIcons name="shopping-cart" size={21} color="#803A2D" />
            </Button>
            <Text style={[style.titleDesc, { fontSize: 24 }]}> Detalhes</Text>
            <Text style={[style.titleDeta, { fontSize: 24 }]}>
                Estoque
                Material
                Comprimento  </Text>
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
    titleDesc: {

    },
    titleDeta: {
        flexDirection: "row"
    },
    button: {
        width: '80%',
        textColor: '#803A2D',
    },
    scroll: {
        flex: 1,
        alignItems: 'center',
        padding: 10
    }
});