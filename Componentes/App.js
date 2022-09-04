import React, { useState } from "react";
import { StyleSheet, Text, View, Image, Switch, Modal, Pressable, SafeAreaView, Button, Alert} from "react-native";

const Separator = () => (
  <View style={page.separator} />
);

const App = () => {

  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [modalVisible, setModalVisible] = useState(false);
 
  return(
    <SafeAreaView style={page.container}>
    <View>
      <Image
          style={page.tinyLogo}
          source={{
            uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/800px-React.svg.png'
          }}
        />
      <Text style={flattenStyle}>React Native</Text>
      <Text style={page.text}>Estilo:</Text>
      <Text style={page.code}>
        {JSON.stringify(flattenStyle, null, 2)}
      </Text>
    </View>

    

    <View style={page.fixToText}>
    <Button style={modalCSS.izquierda}
        title="Left button"
        onPress={() => Alert.alert('Izquierda')
      }
      />

      <Separator style={page.separator}/>

      <Button style={modalCSS.derecha}
        title="Right button"
        onPress={() => Alert.alert('Derecha')}
      />
    </View>

    <View style={page.container}>
      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={isEnabled ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={isEnabled}
      />
    </View>

    <View style={modalCSS.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("El modal ha sido cerrado");
          setModalVisible(!modalVisible);
        }}
      >
        <View style={modalCSS.centeredView}>
          <View style={modalCSS.modalView}>
            <Text style={modalCSS.modalText}>Mostrando la modal!</Text>
            <Pressable
              style={[modalCSS.button, modalCSS.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={modalCSS.textStyle}>Hide Modal</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[modalCSS.button, modalCSS.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={modalCSS.textStyle}>Show Modal</Text>
      </Pressable>
    </View>
  </SafeAreaView>
  );
}


const modalCSS = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  button: {
    borderRadius: 15,
    padding: 8,
    elevation: 1,
    width: 100
  },
  buttonOpen: {
    backgroundColor: "black",
  },
  buttonClose: {
    backgroundColor: "black",
  },
  izquierda:{
    color: "green",
  },
  derecha: {
    color: "yellow"
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
});

const page = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    alignItems: "center",
    backgroundColor: "#E1E1E8",
    marginHorizontal:16,
    marginVertical:16
  },
  text: {
    color: "#000",
    fontSize: 16,
    fontWeight: "bold"
  },
  code: {
    marginTop: 12,
    padding: 12,
    borderRadius: 8,
    color: "#666",
    backgroundColor: "#FFFFED",
    marginBottom: 12
  },
  tinyLogo: {
    width: 110,
    height: 100,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginHorizontal: 8,
    borderBottomColor: 'red',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});

const typography = StyleSheet.create({
  header: {
    color: "red",
    fontSize: 35,
    marginBottom: 36
  }
});

const flattenStyle = StyleSheet.flatten([
  page.text,
  typography.header
]);


export default App;
