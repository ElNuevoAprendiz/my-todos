
import React from "react";
import { Text, View, TouchableOpacity, TextInput, FlatList } from "react-native";
import styles from "./Styles";
import renderItem from "./RenderItem";


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

export interface Task {
  title: string;
  done: boolean;
  date: Date;
} 

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
      <View style={styles.scrollContainer}>
        <FlatList 
          renderItem={renderItem}
          data={tasks}
        />
      </View>
    </View>
    
  );
}


