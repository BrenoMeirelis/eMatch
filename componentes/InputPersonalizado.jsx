import React from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

export default function InputPersonalizado({
    legenda, 
    textoTemporario,
    valor,
    aoAlterarValor,
    ehSenha = false
})

{
    return (
        <View style={estilos.container}>
            {legenda && <Text style={estilos.legenda}>{legenda}</Text>}

            <View style={estilos.entradaContainer}>
                <TextInput
                    placeholder={textoTemporario}
                    value={valor}
                    onChangeText={aoAlterarValor}
                    secureTextEntry={ehSenha}
                    style={estilos.entrada}
                />
            </View>
        </View>
    );
}

const estilos = StyleSheet.create({
    container: {},
    legenda: {},
    entradaContainer: {},
    entrada: {
        height: 40,
        borderColor: 'gray',
        border 
    },
});
