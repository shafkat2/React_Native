import React from 'react';
import { StyleSheet,FlatList} from 'react-native';
import ListItem from './List_Item';

const PlaceList= (props) =>{
 
    return (
        <FlatList style = {styles.listContainer} 
                data = {props.places}
                renderItem = {(info)=> 
                    <ListItem 
                    placeName = {info.item.name}  
                    placeImage = {info.item.image}
                    ontItemPressed = {() => props.onSelectedHandler(info.item.key)}/>}
        />
            

    );
     
  

    };
const styles = StyleSheet.create({
    listContainer:{
        width: "100%"
      }
   
});

export default PlaceList;