import React from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "./Styles";
import { Task } from "./App";

interface itemProps {
    item: Task;
    markDone: () => void;
    deleteFunction: () => void;
}

export default function renderItem({item, markDone, deleteFunction}: {item: Task}) {
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