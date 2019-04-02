import React from 'react';
import {View, StyleSheet,TextInput,Button} from 'react-native';


const PlaceInput = (props) =>(


        
    <View style={styles.inputContainer}>
            <TextInput 
                style = {styles.placeInput}
                placeholder = "AN AWSOME PLACEHOLDER"
                value = {props.text} 
                onChangeText = {props.onChangeText}
                /> 
        <Button title = "ADDD" onPress = {props.onPress} style = {styles.placebutton} />  
    </View>     

);
const styles = StyleSheet.create({

    inputContainer: {
        //flex : 1,
        width: "100%", 
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
      },
      placeInput:{
        width: "70%"
      },
      placebutton:{
        width: "30%"
      },

});

export default PlaceInput;