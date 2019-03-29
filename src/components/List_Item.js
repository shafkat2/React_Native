import React from 'react';
import {View, Text, StyleSheet,TouchableOpacity, Image} from 'react-native';



const ListItem = (props) =>(
    <TouchableOpacity onPress ={props.ontItemPressed}>
            <View  style = {styles.ListItem}  >
                <Image source ={props.placeImage} style = {styles.placeImage}/>
                <Text>{props.placeName}</Text>
            </View>
    </TouchableOpacity>
);

const styles = StyleSheet.create({

        ListItem:{
            width: "100%",
            marginBottom: 5,
            padding: 10,
            backgroundColor: "#eee",
            flexDirection: 'row',
            alignItems: "center",
        },
        placeImage:{
            marginRight: 8,
            height: 30,
            width:30,
        },

});


export default ListItem;