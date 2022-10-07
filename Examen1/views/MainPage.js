import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import {
  ScrollView,
  View,
  Text,
  Button,
  NativeBaseProvider,
} from "native-base";
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  deleteDoc,
} from "firebase/firestore";

const db = getFirestore();
//const navigation = useNavigation();

export default function MainPage({ navigation }) {
  let [Data, setData] = useState([]);
  let res = [];

  async function getProducts() {
    const querySnapshot = await getDocs(collection(db, "productos"));
    querySnapshot.forEach((doc) => {
      res.push([doc.id, doc.data().name, doc.data().desc, doc.data().price]);
    });

    setData(res);
  }
  useEffect(() => {
    getProducts();
  }, []);

  async function Delete(id) {
    await deleteDoc(doc(db, "productos", id)).then(
      useEffect(() => {
        getProducts();
      }, [])
    );
  }

  return (
    <NativeBaseProvider>
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.Middle}>
            <Text style={styles.Title}>Productos</Text>
          </View>

          {Data.map((product, key) => {
            return (
              <View style={styles.listElement}>
                <View style={styles.product}>
                  <Text fontSize="xl" color="white">
                    {product[1]} {product[3]}$
                  </Text>
                  <TouchableOpacity onPress={() => Delete(product[0])}>
                    <AntDesign
                      name="delete"
                      size={25}
                      style={styles.imageStyle}
                      color="white"
                    />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate("editproduct", {
                        id: product[0],
                      })
                    }
                  >
                    <AntDesign name="edit" size={25} color="white" />
                  </TouchableOpacity>
                </View>
                <View style={styles.product}>
                  <Text color="white">{product[2]}</Text>
                </View>
              </View>
            );
          })}

          <View style={styles.buttonStyle}>
            <Button
              style={styles.buttonDesign}
              onPress={() => navigation.navigate("newproduct")}
            >
              Agregar producto
            </Button>
          </View>
        </View>
      </ScrollView>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
  Title: {
    marginTop: 20,
    fontSize: 20,
    fontWeight: "bold",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
    height: 100,
  },
  buttonStyle: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonDesign: {
    backgroundColor: "black",
  },
  imageStyle: {
    marginLeft: 5,
    size: 25,
  },
  listElement: {
    marginTop: 15,
    marginLeft: 15,
    marginRight: 15,
    height: 80,
    marginBottom: 20,
    backgroundColor: "red",
    borderRadius: 10,
  },
  product: {
    justifyContent: "space-around",
    flexDirection: "row",
    color: "white",
  },
});
