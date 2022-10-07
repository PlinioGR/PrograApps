import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";
import { Input, NativeBaseProvider, Button, Icon } from "native-base";
import { FontAwesome5 } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { alignContent, flex, flexDirection, width } from "styled-system";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { firebaseConfig } from "../db/FirebaseConfig";

const db = getFirestore();

export default function Login() {
  const navigation = useNavigation();
  const [data, setdata] = useState({
    email: "",
    psw: "",
  });

  const changeText = (key, value) => {
    setdata({ ...data, [key]: value });
  };

  const onLogin = async () => {
    if (data.email !== "" && data.psw !== "") {
      try {
        const auth = getAuth();
        await signInWithEmailAndPassword(auth, data.email, data.psw);
        navigation.navigate("mainpage");
      } catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      }
    } else {
      Alert.alert("Campo vacío");
    }
  };

  return (
    <NativeBaseProvider>
      <View style={styles.container}>
        <View style={styles.Middle}>
          <Text style={styles.Title}>Tienda</Text>
        </View>

        <View style={styles.Middle}>
          <Text style={styles.LoginText}>Inicio de sesión</Text>
        </View>

        {/* Username or Email Input Field */}
        <View style={styles.buttonStyleX}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="user-secret" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              placeholder="Nombre de usuario o correo electrónico"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
              onChangeText={(value) => changeText("email", value)}
            />
          </View>
        </View>

        {/* Password Input Field */}
        <View style={styles.buttonStyleX}>
          <View style={styles.emailInput}>
            <Input
              InputLeftElement={
                <Icon
                  as={<FontAwesome5 name="key" />}
                  size="sm"
                  m={2}
                  _light={{
                    color: "black",
                  }}
                  _dark={{
                    color: "gray.300",
                  }}
                />
              }
              variant="outline"
              secureTextEntry={true}
              placeholder="Contraseñas"
              _light={{
                placeholderTextColor: "blueGray.400",
              }}
              _dark={{
                placeholderTextColor: "blueGray.50",
              }}
              onChangeText={(value) => changeText("psw", value)}
            />
          </View>
        </View>

        {/* Button */}
        <View style={styles.buttonStyle}>
          <Button style={styles.buttonDesign} onPress={() => onLogin()}>
            Iniciar sesión
          </Button>
          <StatusBar style="auto" />
        </View>

        <View style={styles.text2}>
          <Text>¿No estás registrado? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("signup")}>
            <Text style={styles.signupText}>Regístrate</Text>
          </TouchableOpacity>
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
    fontSize: 40,
    color: "red",
  },
  LoginText: {
    marginTop: 50,
    fontSize: 30,
    fontWeight: "bold",
  },
  Middle: {
    alignItems: "center",
    justifyContent: "center",
  },
  text2: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 5,
  },
  signupText: {
    fontWeight: "bold",
  },
  emailField: {
    marginTop: 30,
    marginLeft: 15,
  },
  emailInput: {
    marginTop: 10,
    marginRight: 5,
  },
  buttonStyle: {
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 30,
  },
  buttonStyleX: {
    marginTop: 12,
    marginLeft: 15,
    marginRight: 15,
  },
  buttonDesign: {
    backgroundColor: "#026efd",
  },
  lineStyle: {
    flexDirection: "row",
    marginTop: 30,
    marginLeft: 15,
    marginRight: 15,
    alignItems: "center",
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
