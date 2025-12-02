
import React,{useState, useEffect} from "react";
import { Text, View, TouchableOpacity, TextInput, FlatList } from "react-native";
import styles from "./Styles";
import RenderItem from "./RenderItem";
import AsyncStorage from '@react-native-async-storage/async-storage';


export interface Task {
  title: string;
  done: boolean;
  date: Date;
} 

export default function App() {
  
  //text es la variable de estado que contiene el texto actual
  const [text,setText] = useState('');{//Estado que maneja el texto que se ingresa en el TextInput
  //setText es la funcion que permite actualizar el estado de text
  };

  //tasks es la variable de estado que contiene la lista actual de tareas
  const [tasks, setTasks] = useState<Task[]>([]);//Estado que maneja la lista de tareas
  
  //setTasks es la funcion que permite actualizar el estado de tasks
  //Este array es el que necesita el FlatList para mostrar las tareas

  // Función para OBTENER datos en el almacenamiento asincrónico
  const getData = async () => {
  try {
    const value = await AsyncStorage.getItem('mytodo-tasks');
    if (value !== null) {
      // value is values previously stored
      
      // Parsear el valor obtenido de AsyncStorage (que es un string) a un array de tareas
      const tasksLocal = JSON.parse(value);

      // Convertir las fechas de string a objetos Date
      const tasksWithDates = tasksLocal.map((task: any) => ({
        ...task,
        date: new Date(task.date),
      }));

      setTasks(tasksWithDates); // Actualizar el estado de tasks con las tareas obtenidas

      
    }
  } catch (e) {
    // error reading value
  }
};

// Función para GUARDAR datos en el almacenamiento asincrónico, el valor value va a recibir la lista 
// de tareas serializada, lo tipamos como lista de tareas (task[]).
const storeData = async (value:Task[]) => {
  try {
    //el valor value se convierte a string antes de guardarlo
    await AsyncStorage.setItem('mytodo-tasks', JSON.stringify(value));
  } catch (e) {
    // saving error
  }
};

  
 
  //useEffect para cargar las tareas guardadas en el almacenamiento asincrónico al iniciar la aplicación
  useEffect(() => {
    getData();
  },[]);// El array vacío como segundo argumento asegura que esto se ejecute solo una vez al montar el componente
  
  
  // Función para agregar una nueva tarea
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
    


    storeData(tmp); //se guarda la nueva lista de tareas en el almacenamiento asincrónico

    setText(''); //se limpia el TextInput seteando el estado text a una cadena vacía  

  };

  // Función para marcar una tarea como hecha o deshecha
  const markDone = (task:Task) => {
    // Recibimos la tarea a marcar como hecha (done), como task, tipada como Task 
    
    //Para eliminar vamos a clonar la matriz con la tarea, para luego poder buscar el indice de la misma.
    const tmp = [...tasks];
    
    const index = tmp.findIndex(elementoDelArray => elementoDelArray.title === task.title);
                      //La función findIndex recorre todo el array y va probando con cada elemento del mismo
                    // la condición que le pasamos luego de la flecha.
                    // En este caso lo que hacemos es comparar el titulo del elemento del array sobre el que está 
                    // parada la función en este momento (elementoDelArray.title) y compararlo con el que nosotros 
                    // buscamos (task,title), que es el titulo de la tarea que queremos eliminar.
                    // Si lo encuentra, devuelve el indice de ese elemento en el array y si no lo encuentra devuelve -1.
                                      
                    //*** Ver la explicacion de findIndex para ver la explicación en el archivo findIndex.html */
    
    
    const todo = tasks[index];// Guardamos en la variable 'todo' (a realizar) la tarea que queremos modificar
    todo.done = !todo.done;//cambiamos el estado de done a su contrario
    setTasks(tmp);//actualizamos el estado de tasks con la matriz clonada y modificada
    storeData(tmp); //se guarda la nueva lista de tareas en el almacenamiento asincrónico
  };


  // Función para eliminar una tarea, se le da funcionalidad de manera similar a markDone
  const deleteFunction = (task:Task) => {
    // recibimos la tarea a borrar como task, tipada como Task 
    
    //Para eliminar vamos a clonar la matriz con la tarea, para luego poder buscar el indice de la misma.
    const tmp = [...tasks];

    const index = tmp.findIndex(elementoDelArray => elementoDelArray.title === task.title);
                    //La función findIndex recorre todo el array y va probando con cada elemento del mismo
                    // la condición que le pasamos luego de la flecha.
                    // En este caso lo que hacemos es comparar el titulo del elemento del array sobre el que está 
                    // parada la función en este momento (elementoDelArray.title) y compararlo con el que nosotros 
                    // buscamos (task,title), que es el titulo de la tarea que queremos eliminar.
                    // Si lo encuentra, devuelve el indice de ese elemento en el array y si no lo encuentra devuelve -1.
                                      
                    //*** Ver la explicacion de findIndex para ver la explicación en el archivo findIndex.html */
    
    tmp.splice(index,1); //eliminamos la tarea del array clonado usando splice, que recibe el indice y la cantidad de elementos a eliminar

    setTasks(tmp); //actualizamos el estado de tasks con la matriz clonada y modificada, 
                   // es decir asignamos nuestra nueva lista de tareas sin la tarea eliminada 
                   // a nuestro estado tasks.
    storeData(tmp); //se guarda la nueva lista de tareas en el almacenamiento asincrónico
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


