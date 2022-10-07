import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Input, NativeBaseProvider, Button } from "native-base";
import {
  collection,
  addDoc,
  getFirestore,
  doc,
  setDoc,
} from "firebase/firestore";

const db = getFirestore();

export default function EditProduct({ route, navigation }) {
  let id = JSON.stringify(route.params);
  id = id.slice(7, 26);
  const [data, setdata] = useState({
    name: "",
    desc: "",
    price: "",
  });

  const changeText = (key, value) => {
    setdata({ ...data, [key]: value });
  };

  const EditProduct = async () => {
    await setDoc(doc(db, "productos", id), {
      name: data.name,
      desc: data.desc,
      price: data.price,
    }).then(Alert.alert("Producto editado"));
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.Middle}>
          <Text style={styles.Title}>Editar producto</Text>
        </View>
        <View style={styles.form}>
          <Text>Nombre</Text>
          <Input
            variant="outline"
            placeholder="Nombre del producto"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            onChangeText={(value) => changeText("name", value)}
          />
        </View>

        <View style={styles.form}>
          <Text>Descripción</Text>
          <Input
            variant="outline"
            placeholder="Descripción del producto"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            onChangeText={(value) => changeText("desc", value)}
          />
        </View>
        <View style={styles.form}>
          <Text>Precio</Text>
          <Input
            variant="outline"
            placeholder="Precio del producto"
            _light={{
              placeholderTextColor: "blueGray.400",
            }}
            _dark={{
              placeholderTextColor: "blueGray.50",
            }}
            onChangeText={(value) => changeText("price", value)}
          />
        </View>
        <View style={styles.buttonStyle}>
          <Button style={styles.buttonDesign} onPress={() => EditProduct()}>
            Editar producto
          </Button>
        </View>
      </View>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  Title: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  form: {
    marginLeft: 10,
    marginRight: 10,
  },
  buttonStyle: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonDesign: {
    backgroundColor: "red",
  },
  imageStyle: {
    width: 80,
    height: 80,
    marginLeft: 20,
  },
  boxStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    justifyContent: "space-around",
  },
});
