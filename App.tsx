import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Mis tareas
      </Text>
      <View style={styles.inputContainer}>
        <TextInput placeholder='Agregar una nueva tarea' style={styles.textInput} />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    width: "100%",
    borderRadius: 10,
    marginTop: 50,
    padding: 10,
  },
  inputContainer: {
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',

  },
  title: {
    fontSize: 20,
    color: "#6f6f6f",
  },
  whiteText: {
    fontSize: 18,
    color: "#FFF",
  },
  text: {
    fontStyle: "italic",
    fontSize: 18,
  },
  textInput: {
    borderColor: "#6f6f6f",
    borderWidth: 1,
    width: Dimensions.get('screen').width * 0.6,
    borderRadius: 15,
    marginLeft: 15,
    
    

  },
  addButton: {
    backgroundColor: '#5897fb',
    width: Dimensions.get('screen').width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,

  }
});
