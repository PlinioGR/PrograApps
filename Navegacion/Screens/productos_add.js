import React, {useState} from 'react'
import {View, TextInput, StyleSheet, Button, ScrollView} from 'react-native';

const ProductosAdd = (props) => {
    const [state, setState]= useState({
        nombre:"",
        descripcion:"",
        precio:"",
    });

    const changeText = (key, value) => {
        setState({...state, [key]: value});
    }
    const Agregar = () => {
        console.log(state);
    }

    return(
        <ScrollView style={styles.container}>
            <View style={styles.view}>
                <TextInput placeholder='Nombre del producto' onChangeText={(value) => changeText('nombre', value)} />
            </View>
            <View style={styles.view}>
                <TextInput placeholder='Descripción del producto' onChangeText={(value) => changeText('descripcion', value)} />
            </View>
            <View style={styles.view}>
                <TextInput placeholder='Precio del producto' onChangeText={(value) => changeText('precio', value)} />
            </View>
            <View style={styles.viewButton}>
                <Button title='Agregar producto' backgroundClor='#ffffff' onPress={() => Agregar()} /> 
            </View>
            <View style={styles.viewButton}>
                <Button title='Regresar' style={styles.button} backgroundColor='#ffffff' onPress={() => props.navigation.navigate('productos')} /> 
            </View>
        </ScrollView>

    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        padding: 35
    },
    view: {
        flex: 1,
        padding: 10
    },
    viewButton: {
        flex: 1, 
        padding:5
    },
    input: {
        flex: 1,
        backgroundColor: 'blue',
        paddingHorizontal:25,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5,
        marginTop:5,
        height:40
    },
    button: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center'   
    }
    }
)

export default ProductosAdd;