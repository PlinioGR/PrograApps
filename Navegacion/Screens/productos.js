import React from 'react';
import {View, StyleSheet, Button} from 'react-native';

const ProductosView = (props) => {
    return(
        <View style={styles.container}>
            <Button title='Agregar producto' onPress={() => props.navigation.navigate('productos_add')} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    }
    }
);

export default ProductosView;