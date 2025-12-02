
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

  const addTask = () => {
    // Función anónima que contiene la lógica para agregar una nueva tarea
    const tmp = [...tasks]; //como es una mala practica hacer un push directamente de la tarea, 
                            // se usa una variable que la clona llamada tmp. Para clonarla, 
                            // abrimos y cerramos corchetes y usamos el operador ... (el operador tres puntos 
                            // que nos permite crear un array basado en uno que ya existe que en este caso es task.
    
    const newTask: Task = {
      title: text,
      done: false,
      date: new Date()
    };

    tmp.push(newTask); //se agrega la nueva tarea al array clonado

    setTasks(tmp); //se actualiza el estado de tasks con el array clonado y modificado

    setText(''); //se limpia el TextInput seteando el estado text a una cadena vacía  

  };

  const markDone = (task:Task) => {
    // recibimos la tarea a borrar como task, tipada como Task 
    //Para eliminar vamos a clonar la matriz con la tarea, para luego poder buscar el indice de la misma.
    const tmp = [...tasks];
    const index = tmp.findIndex(elementoDelArray => elementoDelArray.title === task.title);//con esta función findIndex recibimos item actual, y seleccionamos el titulo del elemento que buscamos
                                      // y lo comparamos con los titulos de los otros elementos del array.
                                      //  buscamos el indice de la tarea a modificar
                                      // Usamos el metodo findIndex que recibe una funcion que recibe cada 
                                      // elemento del array, utilizamo la varia local el.
                                      //*** Ver la explicacion de findIndex para ver la explicación en el archivo findIndex.html */
    
    const todo = tasks[index];// Guardamos en la variable 'todo' la tarea que queremos modificar
    todo.done = !todo.done;//cambiamos el estado de done a su contrario
    setTasks(tmp);//actualizamos el estado de tasks con la matriz clonada y modificada
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
        <TouchableOpacity onPress={addTask} style={styles.addButton}>
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


