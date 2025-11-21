import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        Hola!
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    
    backgroundColor: "#aaffaa",
    
    width: "100%",
    
    borderRadius: 10,
    marginTop: 50,
    padding: 10,
  },
  text: {
    fontStyle: "italic",
    fontSize: 18,
  },
});
