
import React from "react";
import { Text, View, TouchableOpacity, TextInput, FlatList } from "react-native";
import styles from "./Styles";


const tasks=[
  {
    title:'Alimentar al perro',
    done: false,
    date: new Date(),
},
{
    title:'Salir a correr',
    done: true,
    date: new Date(),
},
{
    title:'Contar hasta 10',
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
        <TouchableOpacity>
          <Text style={item.done ? styles.textDone : styles.text}>{item.title}</Text>
          <Text style={item.done ? styles.textDone : styles.text}>{item.date.toLocaleDateString()}</Text>
        </TouchableOpacity>
        {item.done && (
          <TouchableOpacity style={styles.removeButton}>
            <Text style={styles.whiteText}>Eliminar</Text>
          </TouchableOpacity>
          )
        }
      </View>
      );  
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


