import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Dimensions, FlatList } from "react-native";

const tasks=[
  {
    title:'Alimentar al perro',
    done: false,
    date: new Date(),
},
{
    title:'Salir a correr',
    done: false,
    date: new Date(),
},
]

interface Task {
  title: string;
  done: boolean;
  date: Date;
} 

export default function App() {
  function renderItem({item}: {item: Task}) {
    return(
      <View style={styles.itemsContainer}>
        <Text style={styles.text }>{item.title}</Text>)
      </View>);  
  }
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
      <View style={styles.scrollContainer}>
        <FlatList 
          renderItem={renderItem}
          data={tasks}
        />
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
  },
  scrollContainer: {

  },
  itemsContainer: {
    paddingVertical: 20,
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
  },  
});
