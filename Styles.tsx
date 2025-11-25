import { StyleSheet, Dimensions } from "react-native";

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
  textDone: {
    fontStyle: "italic",
    fontSize: 18,
    textDecorationLine: 'underline line-through',
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
  removeButton: {
    backgroundColor: '#fb5858',
    width: Dimensions.get('screen').width * 0.25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  scrollContainer: {
    marginTop: 20,
    

  },
  itemsContainer: {
    paddingVertical: 20,
    borderBottomColor: '#e4e4e4',
    borderBottomWidth: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },  
});

export default styles;