import { Pressable} from 'react-native'
import React from 'react'
import { StyleSheet, View, Text, Button } from 'react-native';


interface Props {
    label: string;
    onPress: () => void;
}

const CounterButton = ({
    label,
    onPress
} : Props) => {
  return (
    <Pressable 
        style= {styles.button} 
        onPress={( ) => {
          onPress();
        }}

    >
      <Text style={styles.buttonText}>{label}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
   
  buttonText: {
    textAlign: "center",
    padding: 10,
    fontSize: 30,
    color: "gray",
    fontWeight: 900
  },

  button: {
    height:70,
    minWidth: 70,
    backgroundColor: "white",
    borderRadius: 20,
    justifyContent: "center",
    marginHorizontal: 50
},

});

export default CounterButton