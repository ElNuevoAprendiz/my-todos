
import React,{useState} from "react";
import { Text, View, TouchableOpacity, TextInput, FlatList } from "react-native";
import styles from "./Styles";
import RenderItem from "./RenderItem";




export interface Task {
  title: string;
  done: boolean;
  date: Date;
} 

export default function App() {
  
  const [text,setText] = useState('');{//Estado que maneja el texto que se ingresa en el TextInput
  //text es la variable de estado que contiene el texto actual
  //setText es la funcion que permite actualizar el estado de text
  };

  const [tasks, setTasks] = useState<Task[]>([]);//Estado que maneja la lista de tareas
  //tasks es la variable de estado que contiene la lista actual de tareas
  //setTasks es la funcion que permite actualizar el estado de tasks
  //Este array es el que necesita el FlatList para mostrar las tareas

  const markDone = () => {
    // Lógica para marcar la tarea como hecha 
    console.log("Tarea marcada como hecha");
  };

  const deleteFunction = () => {
    // Lógica para eliminar la tarea
    console.log("Tarea eliminada");
  };
  
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Mis tareas
      </Text>
      <View style={styles.inputContainer}>
        <TextInput 
          placeholder='Agregar una nueva tarea' 
          style={styles.textInput} 
          onChangeText={(t: string) => setText(t) 
                           // t es una variable local a esta arrowfunction, que como estamos usando typescript la tipamos
                           // que recibira el texto ingresado por el usuario y se la pasa a setText para modificar en estado
                           // usando el setter definido para text, que es setText
                        }
          value={text}
        />
        <TouchableOpacity style={styles.addButton}>
          <Text style={styles.whiteText}>Agregar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.scrollContainer}>
        <FlatList 
          renderItem={({item})=> (<RenderItem item={item} markDone={markDone} deleteFunction={deleteFunction}/>)}
          data={tasks}
        />
      </View>
    </View>
    
  );
}


